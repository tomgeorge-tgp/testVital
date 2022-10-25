import React, { useEffect, useState } from 'react'
// idea to the car
import Header from '../components/header'
import Toolbar from '../components/toolbar';
import {Link,Navigate,useNavigate,useLocation} from "react-router-dom";
import Card from '../components/cards';
import Profile from '../components/ProfileCard';
import Lastreadings from '../components/Lastreadings';
import bp_icon from '../components/assets/bp.png';
import axios from 'axios';
import api from '../api';
import "./style/dashBoard.css"

import PopUp from '../components/PopUp';


function Dashboard(){
 
  const location=useLocation();
  const [popUp,setPopUp]=useState("");

  // const [userData,setUserData]=useState([]);
  
  // const userDataFetch=async()=>{
  //   try{
  //   const response=await api.get('/api/user');
  //   setUserData(response.data);
  //   console.log(userData);
  // }catch(err)
  // {
  //   if(err.response){
  //   //Not in the 200 response range
  //   console.log(err.response.data);
  //   console.log(err.response.status);
  //   console.log(err.response.headers);
  // }
  // else
  // {
  //   console.log(`Error:${err.message}`);
  // }
  // }
  // }
  // useEffect(()=>{
  //   userDataFetch();
  // },[])



 
    return (
      <>
        <div className="dashboard-container">
          <div className="dashboard-container1">
            <Header rootClassName="header-root-class-name"></Header>
            {/* <Toolbar rootClassName="toolbar-root-class-name"></Toolbar> */}
            
            <div className='mid-section'>
              <div className='readings'>
                   <div className='profile-card'><Profile data={location.state.name}/></div> 
                  <div className='reading-cards'>
                {popUp && <div className="pop__up"><PopUp setPopUp={setPopUp}/></div>}
                  <div onClick={(e)=>{
                console.log("click");
                 setPopUp("Blood Pressure")}}>
                 <Card name = "Blood Pressure" img  = {bp_icon}></Card>
                 </div>


                   <div onClick={(e)=>{
                console.log("click")
                setPopUp("Heart Rate")}}>
                <Card name = "Heart Rate & SP02" img  = {bp_icon}></Card>
                </div>

                <div onClick={(e)=>{
                console.log("click");
                 setPopUp("Body Temperature")}}>
                   <Card name = "Body Temperature" img  = {bp_icon}></Card>
                   </div>
                   <div onClick={(e)=>{
                console.log("click");
                 setPopUp("Blood Glucose")}}>
                   <Card name = "Blood Glucose" img  = {bp_icon}></Card>
                   </div>
                   <div onClick={(e)=>{
                console.log("click");
                 setPopUp("Digital Stethoscope")}}>
                   <Card name = "Digital Stethoscope" img  = {bp_icon}></Card>
                   </div>
                   <div onClick={(e)=>{
                console.log("click");
                 setPopUp("Ecg")}}>
                   <Card name = "ECG" img  = {bp_icon}></Card>
                   </div>
                  </div>
              </div>
              <Lastreadings name1="Blood Pressure" name2="Heart Rate" name3="SpO2" name4="Body Temperature" name5="Blood Glucose" values = {[99,140,96,98,97,86]} ></Lastreadings>  
            </div>
          </div>
        </div>
      
      </>
    )
  }
  
  export default Dashboard