import { Box, Container, CssBaseline } from '@mui/material';
import Appbar from './component/APPbar/Appbar';
import React from 'react';
import OptionsTab from './component/OptionsTab/OptionsTab';
import LocationCards from './component/LocationCards/LocationCards';
import Footer from './component/Footer/Footer';
import FooterMenu from './component/FooterMenu/FooterMenu';
import { displayOnDesktop } from './Themes/CommonThemes';

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
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default App;
