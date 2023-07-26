import './App.css';
import RangeInput from './components/RangeInput';
import Home from './pages/home'
import { Box } from '@mui/material';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Box sx={{height: "100%", width: "100%"} } >
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </Box>
  );
}

export default App;
