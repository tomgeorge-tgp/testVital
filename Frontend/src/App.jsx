// import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import LoginSetUpPage from './pages/LoginSetUpPage';
import PhoneNumber from './pages/PhoneNumberSignUp';
import SignUpForm from './pages/SignUpForm';
import LoginForm from './pages/LoginForm';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
         <Route path='/' element={<LoginSetUpPage/>} />   
         <Route path='/loginForm' element={<LoginForm/>} /> 
         <Route path='/signUpForm' element={<SignUpForm/>} /> 
         <Route path='/dashboard' element={<Dashboard />} /> 
         <Route path='/phonenumber' element={<PhoneNumber />} /> 
            {/* <Route path='/home' element ={<Home />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} /> */}
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
