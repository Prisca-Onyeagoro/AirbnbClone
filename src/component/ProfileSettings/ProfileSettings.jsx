import { Box, Button, Link, Stack } from '@mui/material';
import Language from '@mui/icons-material/Language';
import MenuOpen from '@mui/icons-material/MenuOpen';
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from 'react';
import { flexCenter } from '../../Themes/CommonThemes';

const ProfileSettings = () => {
  return (
    <Box sx={flexCenter}>
      <Link href="#">Become A Host</Link>
      <Stack direction={'row'}>
        <Button>
          <Language size={25} />
        </Button>
        <Button sx={{ borderRadius: 10, border: '1px solid #ddd' }}>
          <Stack direction={'row'}>
            <MenuOpen size={24} />
            <AccountCircle size={24} />
          </Stack>
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfileSettings;
