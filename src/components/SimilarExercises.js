import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({targetMusclesExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px', xs:'0px'}}}>
      <Typography variant='h3'>Exercise that Target the same muscle group</Typography>
      <Stack direction='row' sx={{p:'2px', position:'relative'}}>
        {targetMusclesExercises.length && <HorizontalScrollbar data={targetMusclesExercises}></HorizontalScrollbar>}
      </Stack>
    </Box>
  );
}

export default SimilarExercises;