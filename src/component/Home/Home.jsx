import { Box, Button, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import { grey } from '@mui/material/colors';
import Video from '../../video/video.mp4';

const StyledBox = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  paddingTop: 50,
  marginBottom: 400,
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: grey[700],
  borderRadius: 18,
  padding: 10,
  color: 'white',
  textDecoration: 'camelcase',

  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
  },

  [theme.breakpoints.down('lg')]: {},
}));
const Home = () => {
  return (
    <Box>
      <Box
        style={{
          position: 'relative',
          width: '100%',
          height: 600,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            width: '100%',
            height: 'auto',
          }}
        >
          <source src={Video} type="video/mp4" />
        </video>
        <StyledBox spacing={2} direction="row">
          <Box>
            <StyledButton>Discover</StyledButton>
          </Box>
          <Box>
            <StyledButton>Animation</StyledButton>
          </Box>
          <Box>
            <StyledButton>Branding</StyledButton>
          </Box>
          <Box>
            <StyledButton>Illustration</StyledButton>
          </Box>
          <Box>
            <StyledButton>Mobile</StyledButton>
          </Box>
          {/* <Box>
            <StyledButton>ProductDesign</StyledButton>
          </Box>
          <Box>
            <StyledButton>Typography</StyledButton>
          </Box> */}
          <Box>
            <StyledButton>WebDesign</StyledButton>
          </Box>{' '}
        </StyledBox>
      </Box>
      <Box>
        <Typography sx={{ color: 'whitesmoke' }}>Typo</Typography>
      </Box>
    </Box>
  );
};

export default Home;
