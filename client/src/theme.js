import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import {
  blue,
  grey,
  pink,
  red,
  deepOrange,
  orange,
  brown,
  teal,
  green,
  amber,
} from '@material-ui/core/colors';

export const availableThemes = [
  {
    title: 'Default',
    primary: blue,
    secondary: red,
  },
  {
    title: 'Summer',
    primary: deepOrange,
    secondary: orange,
  },
  {
    title: 'Spring',
    primary: teal,
    secondary: green,
  },
  {
    title: 'Winter',
    primary: grey,
    secondary: amber,
  },
  {
    title: 'Autumn',
    primary: brown,
    secondary: pink,
  },
  {
    title: 'Party',
    primary: pink,
    secondary: blue,
  },
];

const defaultTheme = {
  palette: {
    primary: {
      main: '#FFDE2B',
    },
    secondary: {
      main: '#493d07',
    },
  },
  error: red,
  appBar: {
    height: 57,
    color: blue[900],
  },
  drawer: {
    width: 240,
    color: grey[900],
    backgroundColor: brown,
    miniWidth: 56,
  },
  raisedButton: {
    primaryColor: blue[600],
  },
  typography: {
    useNextVariants: true,
  },
};

const theme = createMuiTheme(defaultTheme);

export const customTheme = option => {
  return createMuiTheme({ ...defaultTheme, ...option });
};

export default theme;
