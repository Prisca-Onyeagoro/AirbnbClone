import { Box, Button, Link, Paper, Stack } from '@mui/material';
import TravelExplore from '@mui/icons-material/TravelExplore';
import SupportAgent from '@mui/icons-material/SupportAgent';
import React from 'react';
import {
  flexBetweenCenter,
  fullWidthFlex,
  justifyCenter,
} from '../../Themes/CommonThemes';
import { Container } from '@mui/system';
const footerLinks = [
  { id: 1, text: 'privacy', url: '#' },
  { id: 2, text: 'Terms', url: '#' },
  { id: 3, text: 'Sitemap', url: '#' },
  { id: 4, text: 'Destinations', url: '#' },
];
const Footer = () => {
  return (
    <Box
      sx={{
        ...fullWidthFlex,
        borderTop: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            width: '100%',
          }}
        >
          <Stack direction={'row'} spacing={3}>
            <Paper>
              <Link href="#">2022 Airbnb Copyright</Link>
            </Paper>
            {footerLinks.map((link) => {
              return (
                <Paper key={link.id}>
                  <Link href={link.url}>{link.text}</Link>
                </Paper>
              );
            })}
          </Stack>

          <Stack direction={'row'}>
            <Paper sx={justifyCenter}>
              <Button>
                <Box sx={{ ...justifyCenter, mr: 1 }}>
                  <TravelExplore size={24} />
                </Box>
                English(CA)
              </Button>
              <Button>$CAD</Button>
              <Button>
                Support $ Resources
                <Box sx={{ ...justifyCenter, ml: 1 }}>
                  <SupportAgent size={24} />
                </Box>
              </Button>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
