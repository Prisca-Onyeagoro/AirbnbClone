import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import ManageSearch from '@mui/icons-material/ManageSearch';
import { pink } from '@mui/material/colors';

const choices = [
  { id: 1, text: 'Anywhere' },
  { id: 2, text: 'Any week' },
  { id: 2, text: 'Add guest', withIcon: true },
];

const LocationSearch = () => {
  return (
    <Paper
      sx={{
        borderRadius: 20,
        ml: 15,
      }}
      elevation={3}
    >
      <Stack
        sx={{
          borderRadius: 20,
          pl: 2,
        }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
      >
        {choices.map((choice) => {
          return (
            <Button key={choice.id}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: 'bold',
                }}
              >
                {choice.text}
              </Typography>
              {choice.withIcon && (
                <Box sx={{ ml: 1, mt: 1, mr: 1 }} size={12}>
                  <ManageSearch sx={{ color: pink[500] }} size={32} />
                </Box>
              )}
            </Button>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default LocationSearch;
