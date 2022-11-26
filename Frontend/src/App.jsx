// import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard_popup';
import LoginSetUpPage from './pages/LoginSetUpPage';
import PhoneNumber from './pages/PhoneNumberSignUp';
import SignUpForm from './pages/SignUpForm';
import LoginForm from './pages/LoginForm';
import Bpexisting from './pages/Bpexisting';
import BpfirstTime from './pages/BpfirstTime';
import HeartRateExisting from './pages/HeartRateExisting';
import BodyTemperatureExisting from './pages/BodyTemperatureExisting';
import BloodGlucoseExisting from './pages/BloodGlucoseExisting';
import {AuthProvider} from './context/AuthProvider';
import RequireAuth from './pages/requireAuth';
import Layout from './layout/Layout';
function App() {
  return (
    <>
      <Router>
        <div className='container'>
        <AuthProvider>
          <Routes>
         <Route path='/' element={<LoginSetUpPage/>} />   
         <Route path='/loginForm' element={<LoginForm/>} /> 
         <Route path='/signUpForm' element={<SignUpForm/>} /> 
         <Route path='/phonenumber' element={<PhoneNumber />} /> 
         {/* <Route element={<RequireAuth/>}> */}
         <Route path='/dashboard' element={<Dashboard />} /> 
         
         <Route path='/bpexisting' element={<Bpexisting/>}/>
         <Route path='/heartrateexisting' element={<HeartRateExisting/>}/>
         <Route path='/bodytemperatureexisting' element={<BodyTemperatureExisting/>}/>
         <Route path='/bloodglucoseexisting' element={<BloodGlucoseExisting/>}/>
         <Route path='/bpfirsttime' element={<BpfirstTime/>}/> 
         {/* </Route> */}
            {/* <Route path='/home' element ={<Home />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} /> */}
          </Routes>
          </AuthProvider>
        </div>
      </Router>
      
    </>
  );
}

export default App;
