import React from 'react';
//MUI Components
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';

const Landing: React.FunctionComponent<Record<string, never>> = () => {
  return (
    <>
      <Typography variant="h3" component="h3" align="center" gutterBottom>
        Hello, I am <br /> Lachlan Malec.
      </Typography>
    </>
  );
};
export default Landing;
