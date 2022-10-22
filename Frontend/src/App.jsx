// import './App.css';
// import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LoginFrom from './pages/LoginFrom'
import LoginSetUpPage from './pages/LoginSetUpPage';
import PhoneNumber from './pages/PhoneNumber';
function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
         <Route path='/' element={<LoginSetUpPage/>} />   
         <Route path='/logForm' element={<LoginFrom/>} /> 
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
