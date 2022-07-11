import React, {useState} from 'react';
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner></HeroBanner>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}></SearchExercises>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}></Exercises>
    </Box>
  );
}

export default Home;