import { Box, CssBaseline } from '@mui/material';
import Appbar from './component/APPbar/Appbar';
import React from 'react';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Appbar />
      </Box>
    </>
  );
};

export default App;
