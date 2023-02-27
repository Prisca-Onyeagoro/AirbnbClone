import React from 'react';
import { locations as cardLocations } from '../Data/MockData';
import { Box, Grid } from '@mui/material';

const LocationCards = () => {
  const [cards] = React.useState(cardLocations);
  if (!cards.length) return null;
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} xs={12} sm={2} md={4} lg={3}>
              {location.location}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;
