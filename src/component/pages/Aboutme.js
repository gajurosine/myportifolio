import React from "react";
import Navbar from "../Navbar";
import loxa from "../../assets/images/loxa.png";
const Aboutme = () => {
    
     return ( 
          <div className="About">   
          <Navbar />
           <div className="rosine">
                <div className="about_me">
               <h3 className="head_side">All about me</h3>
               <p className="para_home1">My name is Nzambazamariya Gaju Rosine am a student at <span className="school_name"> Rwanda Coding Academy </span> 
               I have joined this school in 2021 and right now am  a software enginner . I work on both frontend and  backend  and am currently works on Web development and DevOps and I also Invloves in EMBEDDED system. 
               </p>
               <p className="para_home1">My dream is to became a software engineer and i 
               want to study more about ARTIFICIAL INTERGENT as today techonology is mainly  based on Machine learning .
               so people don't believe that today technology is going to be everything but me I agree with it 
               because like in my school many works are being done by people ,one day I asked myself as an engineer why can't we make something which can help use to reduce the time 
               we take while doing those jobs ,This makes me to also think about Machine  learning  and now am involving IN Al.
               
               </p>
               <p className="para_home1">The first project I worked on was how to measure distance using arduino uno ,LCD and ultra-sonic sensor where I was trying to measure distance
               and I have tried to learn more about ESP8266 which is used for wifi connection and other internet devices and 
               some other project which focused in EMBEDDED system . </p>
              
          </div>

          <div className="my_pc">
          
          <img src={loxa} alt='GAJU Rosine ' className="my_photo1"  /> 
          <div className="description">
               {/* <h4 className="my_name">GAJU Rosine</h4> */}
               <p className="dream_tab">Software Engineer</p></div>
           
          </div>
       
              </div>
              </div>
      
      );
   }
   
   export default Aboutme;
   
   
   
   
   
   