import React from 'react';
import { Box, Container } from '@mui/material';
import Logo from '../Logo/Logo';
import { dFlex, flexBetweenCenter } from '../../Themes/CommonThemes';
import LocationSearch from '../LocationSearch/LocationSearch';
import ProfileSettings from '../ProfileSettings/ProfileSettings';

const Appbar = () => {
  return (
    <Box sx={{ ...dFlex, minHeight: 70, borderBottom: '1px solid black' }}>
      <Container maxWidth="xl">
        <Box sx={{ ...flexBetweenCenter, minHeight: 90, px: 4 }}>
          <Logo />
          <LocationSearch />
          <ProfileSettings />
        </Box>
      </Container>
    </Box>
  );
};

export default Appbar;
