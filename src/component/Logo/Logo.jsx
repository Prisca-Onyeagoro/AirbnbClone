import { Box, Typography } from '@mui/material';
import React from 'react';
import AirIcon from '@mui/icons-material/Air';
import { pink } from '@mui/material/colors';
import { flexBetweenCenter } from '../../Themes/CommonThemes';

const Logo = () => {
  return (
    <Box sx={flexBetweenCenter}>
      <AirIcon size={40} sx={{ color: pink[500] }} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        component="h3"
      >
        {' '}
        Airbnb
      </Typography>
    </Box>
  );
};

export default Logo;
