import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Box width ="400px" sx={{width: {xl: '1488px'}}} m="auto">
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/exercise/:id' element={<ExerciseDetail></ExerciseDetail>}></Route>
        </Routes>
        <Footer></Footer>
      </Box>
    </Router>
  );
}

export default App;