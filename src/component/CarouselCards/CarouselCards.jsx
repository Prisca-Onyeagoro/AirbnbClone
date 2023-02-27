import React from 'react';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import StarIcon from '@mui/icons-material/Star';
import Favorite from '@mui/icons-material/Favorite';
import { Box, Button, MobileStepper, Typography } from '@mui/material';
import {
  fixedIcon,
  carouselImage,
  carouselDot,
  flexBetween,
  dFlex,
} from '../../Themes/CommonThemes';
import '../Carousal.css';
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
      <Box sx={fixedIcon}>
        <Favorite size={24} color="#fff" />
      </Box>
      {location.locationImages.length && (
        <SwipeableViews
          axis={'x'}
          index={activeStep}
          onChange={handleStepChange}
          enableMouseEvents
        >
          {location.locationImages.map((step, index) => {
            return (
              <div key={step.id}>
                <Box
                  component="img"
                  sx={{ carouselImage }}
                  src={step.url}
                  alt={step.id}
                ></Box>
              </div>
            );
          })}
        </SwipeableViews>
      )}
      <Box>
        <MobileStepper
          sx={{ background: 'transparent' }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={carouselDot}
            >
              <KeyboardDoubleArrowRightIcon />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={carouselDot}
            >
              <KeyboardDoubleArrowLeftIcon />
            </Button>
          }
        />
      </Box>
      <Box sx={flexBetween}>
        <Box sx={{ mt: 2 }}>
          <Typography component={'h3'}>{location.location}</Typography>
          <Typography component={'h4'}>{location.days}</Typography>
          <Typography component={'h5'}>{location.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={dFlex}>
            {location.isNew ? (
              <>
                <Typography component={'h5'}>New</Typography>
                <StarIcon size={18} />
              </>
            ) : (
              <>
                <Typography component={'h5'}>{location.rating}</Typography>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselCards;
