import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';
import { fixedIcon } from '../../Themes/CommonThemes';
const CarouselCards = ({ location }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = location.locationImages.length; // to know maximum number of dots to be on the carousel
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1); // skip to the next image when clicked
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // goes back to the previous image when clicked
  };
  const handleStepChange = (step) => {
    setActiveStep(step); // handles swipe changes on mobile screen
  };

  return (
    <Box
      className="carouselcard"
      sx={{
        flexGrow: 1,
        position: 'relative',
      }}
    >
      <Box sx={fixedIcon}></Box>
    </Box>
  );
};

export default CarouselCards;
