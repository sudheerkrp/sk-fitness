import React, {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercise, setExercise, bodyPart}) => {
  return (
    <Box id='exercise' sx={{mt:{lg:'110px'}}} mt='50p' p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px', xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
        {exercise.map((exercise, index)=>{
          return (
            <ExerciseCard key={index} exercise={exercise}></ExerciseCard>
          );
        })}
      </Stack>
    </Box>
  );
}

export default Exercises;