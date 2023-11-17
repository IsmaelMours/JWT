
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/profile' element ={<Profile/>}/>


      </Routes>
    
    </>
  );
}

export default App;
