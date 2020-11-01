import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

export default function SkeletonChildren() {
  return (
    <Fragment>

      <Skeleton animation="wave" height={80} width="100%" />

      {Array.from(new Array(5)).map(index => (

        <Box key={index} className="skeleton-content">
          <Skeleton animation="wave" variant="circle" width={60} height={60} />
          <Skeleton animation="wave" height={60} width="95%" />
        </Box>

      ))}
    </Fragment>
  );
}
