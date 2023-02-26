import ManageSearch from '@mui/icons-material/ManageSearch';
import { IconButton, InputBase, Paper } from '@mui/material';
import { pink } from '@mui/material/colors';
import AddRoad from '@mui/icons-material/AddRoad';
import React from 'react';

const MobileSearch = () => {
  return (
    <>
      <Paper
        component={'form'}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 390,
          border: '1px solid #ddd',
          borderRadius: 20,
        }}
      >
        <IconButton sx={{ p: '10px' }}>
          <ManageSearch />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where to?" />
        <IconButton type="submit" sx={{ p: '10px' }}>
          <AddRoad />
        </IconButton>
      </Paper>
    </>
  );
};

export default MobileSearch;
