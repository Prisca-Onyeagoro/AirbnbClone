import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { Box, Button, Stack, Typography } from '@mui/material';

const footerMenu = [
  { id: 1, text: 'Explore', Icon: <YoutubeSearchedForIcon /> },
  { id: 2, text: 'Wishlist', Icon: <FavoriteBorderIcon /> },
  { id: 3, text: 'Login', Icon: <AccountCircleIcon /> },
];
const FooterMenu = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
        <Stack direction={'row'}>
          {footerMenu.map((item) => {
            return (
              <Button key={item.id}>
                <Stack
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  direction="column"
                  spacing={1}
                >
                  {item.Icon}
                  <Typography>{item.text}</Typography>
                </Stack>
              </Button>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

export default FooterMenu;
