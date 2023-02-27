import { Box, Container, CssBaseline } from '@mui/material';
import Appbar from './component/APPbar/Appbar';
import React from 'react';
import OptionsTab from './component/OptionsTab/OptionsTab';
import LocationCards from './component/LocationCards/LocationCards';

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
        <OptionsTab />
        <Container maxWidth="xl" sx={{ mb: 2 }}>
          <LocationCards />
        </Container>
      </Box>
    </>
  );
};

export default App;
