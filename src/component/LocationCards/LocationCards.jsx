import React from 'react';
import { locations as cardLocations } from '../Data/MockData';
import { Box, Grid } from '@mui/material';
import CarouselCards from '../CarouselCards/CarouselCards';
import '../Carousal.css';

const LocationCards = () => {
  const [cards] = React.useState(cardLocations);
  if (!cards.length) return null;
  return (
    <Box sx={{ mx: 3 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} xs={12} sm={4} md={4} lg={3} item>
              <CarouselCards location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;
