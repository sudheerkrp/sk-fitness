import React, {useState, useEffect} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const url = 'https://exercisedb.p.rapidapi.com/exercises';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
	const [search, setSearch] = useState("");
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(()=>{
		const fetchExerciseData = async () => {
			const bodyPartsData = await fetchData(`${url}/bodyPartList`, exerciseOptions);
			setBodyParts(['all', ...bodyPartsData]);
		}
		fetchExerciseData();
	}, []);

	const handelSearch = async () => {
		if(search)
		{
			const exercisesData = await fetchData(url, exerciseOptions);
			// console.log(exercisesData);
			const searchedExercise = exercisesData.filter((exercise)=>(exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search)));
			// setSearch("");
			setExercises(searchedExercise);
			console.log(searchedExercise);
		}
	}
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" >
        <Typography fontWeight="700" sx={{fontSize:{lg:'44px', xs:'30px'}}} mb='50px' textAlign='center'>
            Awesome Exercise You <br/> Should Know
        </Typography>
        <Box position='relative' mb="72px">
            <TextField sx={{input:{fontWeight:'700', border:'none', borderRadius:'4px'}, width:{lg:'800px', xs:'350px'}, backgroundColor:'#fff',  borderRadius:'40px'}} height="76px" value={search} onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} placeholder='Search Exercise' type='text'></TextField>
        <Button className='search-btn' sx={{backgroundColor: '#FF2625', color:'#fff', textTransform:'none', width:{lg:'175px', xs:'80px'}, fontSize:{lg:'20px', xs:'14px'}, height:'56px', position:'absolute', right:'0'}}onClick={handelSearch}>Search</Button>
        </Box>
				<Box sx={{position:'relative', width:'100%', p:'20px'}}>
					<HorizontalScrollbar data ={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}></HorizontalScrollbar>
				</Box>
    </Stack>
  );
}

export default SearchExercises;