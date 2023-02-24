import {
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import MenuOpen from '@mui/icons-material/MenuOpen';

const Drawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SwipeableDrawer open={open} onClose={() => setOpen(false)}>
        <Paper sx={{ width: 250 }}>
          <Typography
            color="black"
            sx={{
              fontFamily: 'cursive',
              fontSize: 35,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Dribble
          </Typography>
          <Divider />
        </Paper>
        <Stack spacing={2}>
          <Box>
            <Typography
              sx={{
                fontFamily: 'airal',
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Inspiration
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: 'airal',
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Find Work
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: 'airal',
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Learn Design
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: 'airal',
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Go Pro
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: 'airal',
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Hire Designers
            </Typography>
          </Box>
        </Stack>
      </SwipeableDrawer>

      <IconButton>
        <MenuOpen onClick={() => setOpen(!open)} />
      </IconButton>
    </>
  );
};

export default Drawer;
