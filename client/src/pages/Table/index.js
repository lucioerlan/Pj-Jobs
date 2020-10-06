import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import Alert from '@material-ui/lab/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from '../../components/Skeleton';
import api from '../../services/api';
import ModalAdicionar from './modal';

export default () => {
  var columns = [
    {
      title: 'Company Avatar',
      field: 'company_avatar',
      filtering: false,
      lookup: {
        'https://user-images.githubusercontent.com/47280551/87725217-42058780-c793-11ea-8ae5-80ecee003c74.png':
          'Amalon',
        'https://user-images.githubusercontent.com/47280551/87723781-ae32bc00-c790-11ea-82a6-fd64582fe6df.png':
          'Googlils',
        'https://user-images.githubusercontent.com/47280551/87723784-affc7f80-c790-11ea-9ac7-7f381ac75ef9.png':
          'Applon',
        'https://user-images.githubusercontent.com/47280551/87723783-af63e900-c790-11ea-92cd-a99ed43af11e.png':
          'Mercado Item',
        'https://user-images.githubusercontent.com/47280551/87723788-b12dac80-c790-11ea-8164-7731ccd2122e.png':
          'Microsofton',
      },
      render: rowData => (
        <img
          alt="company avatar"
          src={rowData.company_avatar}
          style={{ width: 50, borderRadius: '50%' }}
        />
      ),
    },
    { title: 'Company Name', field: 'company_name', filtering: false },
    { title: 'Company Phone', field: 'company_phone', filtering: false },

    { title: 'Company E-mail', field: 'company_email' },
    {
      title: 'Job Description',
      field: 'job_description',
      filtering: false,
    },

    {
      title: 'Job Image',
      field: 'job_image',
      filtering: false,
      lookup: {
        'https://user-images.githubusercontent.com/47280551/87727110-bc83d680-c796-11ea-9ef5-e30596653fc4.png':
          'Programador FrontEnd',
        'https://user-images.githubusercontent.com/47280551/87727117-bf7ec700-c796-11ea-9dc7-2c86f8bff6f5.png':
          'Programador Mobile',
        'https://user-images.githubusercontent.com/47280551/87727114-be4d9a00-c796-11ea-8135-24b4c68908a0.png':
          'Programador FullStack',
        'https://user-images.githubusercontent.com/47280551/87727106-baba1300-c796-11ea-9864-52e16f61395d.png':
          'DevOps',
        'https://user-images.githubusercontent.com/47280551/87727101-b7bf2280-c796-11ea-9815-c93772d03809.png':
          'Programador Backend',
      },
      render: rowData => (
        <img alt="" src={rowData.job_image} style={{ width: 100 }} />
      ),
    },
    { title: 'Created At', field: 'created_at', filtering: false },
  ];

  const [data, setData] = useState([]);
  const [iserror, setIserror] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/works')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error');
      });
  }, []);

  const handleRowUpdate = (newData, oldData, resolve) => {
    api
      .put('/works/' + newData.id, newData)
      .then(res => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
        resolve();
        setIserror(false);
        setErrorMessages([]);
        toast.success('Success changing work !');
      })
      .catch(error => {
        setErrorMessages(['Update failed! Server error']);
        setIserror(true);
        resolve();
        toast.error('Erro in changing work ! ');
      });
  };

  const handleRowDelete = (oldData, resolve) => {
    api
      .delete('/works/' + oldData.id)
      .then(res => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve();
        toast.success('Sucess work deleted !');
      })
      .catch(error => {
        setErrorMessages(['Delete failed! Server error']);
        setIserror(true);
        resolve();
        toast.error('Erro in deleted work ! ');
      });
  };

  if (loading) {
    return <Skeleton />;
  }

  return (
    <React.Fragment>
      <div>
        {iserror && (
          <Alert severity="error">
            {errorMessages.map((msg, i) => {
              return <div key={i}>{msg}</div>;
            })}
          </Alert>
        )}
      </div>
      <MaterialTable
        style={{ marginTop: 20 }}
        options={{
          exportButton: true,
          filtering: true,
        }}
        title="Create Works"
        columns={columns}
        data={data}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              handleRowUpdate(newData, oldData, resolve);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              handleRowDelete(oldData, resolve);
            }),
        }}
      />
      <ModalAdicionar variant="outlined" color="secondary" buttonLabel="Add" />
      <ToastContainer />
    </React.Fragment>
  );
};
