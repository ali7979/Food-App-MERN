import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Zoom, Fab } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function ScrollToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 800,
  });

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 32,
          height: 40,
          backgroundColor: 'black',
          color: 'white',
          width: 40,
          left: 33,
          borderRadius: 10,
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <Fab sx={{backgroundColor:"#19376D",color:'white'}}size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon  />
        </Fab>
      </Box>
    </Zoom>
  );
}
