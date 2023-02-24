import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  styled,
  Grid,
  Tabs,
  Tab,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { pink } from '@mui/material/colors';
import Drawer from '../Drawer/Drawer';
// custome styled Toolbar
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  gap: '10px',
});
// custome styled Button

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[300]),
  backgroundColor: pink[300],
  color: 'whitesmoke',
  borderRadius: 30,
  '&:hover': {
    backgroundColor: pink[300],
  },
}));

const Appbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: 'whitesmoke' }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Grid container sx={{ placeItems: 'center' }}>
                <Grid item xs={5}>
                  <Drawer />
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    color="black"
                    sx={{
                      fontFamily: 'cursive',
                      fontSize: 30,
                      fontWeight: 'bold',
                    }}
                  >
                    Dribble
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <StyledButton variant="contained">Signup</StyledButton>
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid container sx={{ placeItems: 'center' }}>
              {/* LOGO */}
              <Grid item xs={1}>
                <Typography
                  color={'black'}
                  sx={{
                    fontFamily: 'cursive',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}
                >
                  Dribble
                </Typography>
              </Grid>
              <Grid item xs={8}>
                {/* Dynamic pages */}
                <Tabs
                  value={value}
                  onChange={(e, val) => setValue(val)}
                  textColor="white"
                  indicatorColor="primary"
                  aria-label="secondary tabs example"
                  as={Link}
                  sx={{ textDecoration: 'none' }}
                >
                  <Tab
                    value="one"
                    label="Inspiration"
                    sx={{ color: 'black' }}
                    href="example"
                  />
                  <Tab value="two" label="Find Work" sx={{ color: 'black' }} />
                  <Tab
                    value="three"
                    label="Learn Designs"
                    sx={{ color: 'black' }}
                  />
                  <Tab
                    value="five"
                    label="Hire Designers"
                    sx={{ color: 'black' }}
                  />
                </Tabs>
              </Grid>
              <Grid xs={1} />
              <Grid xs={2}>
                <Box display={'flex'}>
                  <StyledButton variant="contained" sx={{ marginLeft: 'auto' }}>
                    Signin
                  </StyledButton>
                  <StyledButton variant="contained" sx={{ marginLeft: 1 }}>
                    Signup
                  </StyledButton>
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
