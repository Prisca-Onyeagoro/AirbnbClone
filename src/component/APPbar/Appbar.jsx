import React from 'react';
import { Box, Container } from '@mui/material';
import Logo from '../Logo/Logo';
import {
  dFlex,
  displayOnDesktop,
  flexBetweenCenter,
} from '../../Themes/CommonThemes';
import LocationSearch from '../LocationSearch/LocationSearch';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import MobileSearch from '../MobileSearch/MobileSearch';

const Appbar = () => {
  return (
    <Box sx={{ ...dFlex, minHeight: 70, borderBottom: '1px solid black' }}>
      <Container maxWidth="xl">
        <Box sx={{ ...flexBetweenCenter, minHeight: 90, px: 4 }}>
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MobileSearch />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Appbar;
