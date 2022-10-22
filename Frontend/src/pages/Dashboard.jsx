import React, { useEffect, useState } from 'react'
// idea to the car
import Header from '../components/header'
import Toolbar from '../components/toolbar'
import Card from '../components/cards'
import Profile from '../components/Profile';
import Lastreadings from '../components/Lastreadings'
import bp_icon from '../components/assets/bp.png'
import axios from 'axios'
import api from '../api/posts'

const Dashboard = (props) => {
  const [userData,setUserData]=useState([]);
  
  const userDataFetch=async()=>{
    try{
    const response=await api.get('/api/user');
    setUserData(response.data);
    console.log(userData);
  }catch(err)
  {
    if(err.response){
    //Not in the 200 response range
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
  }
  else
  {
    console.log(`Error:${err.message}`);
  }
  }
  }
  useEffect(()=>{
    userDataFetch();
  },[])




    return (
      <>
        <div className="dashboard-container">
          <div className="dashboard-container1">
            <Header rootClassName="header-root-class-name"></Header>
            {/* <Toolbar rootClassName="toolbar-root-class-name"></Toolbar> */}
            
            <div className='mid-section'>
              <div className='readings'>
                   <div className='profile-card'><Profile/></div> 
                  <div className='reading-cards'>
                   <Card name = "Blood Pressure" img  = {bp_icon}></Card>
                   <Card name = "Heart Rate & SP02" img  = {bp_icon}></Card>
                   <Card name = "Body Temperature" img  = {bp_icon}></Card>
                   <Card name = "Blood Glucose" img  = {bp_icon}></Card>
                   <Card name = "Digital Stethoscope" img  = {bp_icon}></Card>
                   <Card name = "ECG" img  = {bp_icon}></Card>
                  </div>
              </div>
              <Lastreadings name1="Blood Pressure" name2="Heart Rate" name3="SpO2" name4="Body Temperature" name5="Blood Glucose" values = {[99,140,96,98,97,86]} ></Lastreadings>  
            </div>
          </div>
        </div>
        <style jsx>
          {`
           *{
            margin:0;
            padding:0;
           }
            .dashboard-container {
              width: 100%;
              display: flex;
              min-height: 2000px;
              background-color: #FFFFFF;
            }
            .dashboard-container1 {
              top: 0px;
              flex: 0 0 auto;
              left: 0px;
              right: 0px;
              width: 64rem;
              bottom: 0px;
              height: 600px;
              margin: auto;
              display: flex;
              position: absolute;
              align-items: flex-start;
              flex-direction : column;
              background-color: #FFFFFF;
              
            }
            .mid-section{
              background-color:#F5F5F5;
              width :64rem;
              height:100%;
              display:flex;
              flex-direction:column;
             
            }

            .readings{
              max-width:100%;
              min-height:23rem;
              display:flex;
              justify-content:space-between;
              align-items:center;
              background-color:#F5F5F5;
              margin-top:1rem;
              margin-left:1.5rem;
            }

            

           
            .profile-card{
              {/* height:22rem;
              width:16rem;
              padding:0;
              background-color:#FFFF;
              border-radius:20px */}
            }

            .reading-cards{
              
              width:46.5rem;
              background-color:#F5F5F5;
              display:flex;
              align-items:center;
              flex-wrap:wrap;
              margin:0;
            }
          `}
        </style>
      </>
    )
  }
  
  export default Dashboard