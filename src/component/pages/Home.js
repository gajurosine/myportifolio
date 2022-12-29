import React from "react";
import loxa from "../../assets/images/loxa.png";
import Navbar  from "../Navbar";
// import Footer from "./Footer";
const Home = () => {

     return ( 
          <div className="home_tab">
               <Navbar/>
               <div className="home_div">
               <div className="home_lestside">

               <img src={loxa} alt='devs' className="my_photo"  /> 
            <div className="me_homepage">
            <h2 className="dev_tab"> Hi , I'm GAJU ROSINE </h2>
                   <p className="todos"> Web developer </p>
                   <p className="todos">Mobile developer  </p>
                   <p className="para_home">I have been learning Programming languages for two years now an a 
                   frontend developer right now I have also involves in CYBER SECURITY ,I have achieve this by 
                   feeling comfidence about myself ,gramming assists me  in developing problem-solving skills, such as the ability
                    to solve a problem rationally as well as creatively which can help to increase technology in my society  and any where </p>
                   
            </div>

               </div>               
               <div className="home_side">
                    <h2 className="head_side">What is  Programming and it's Important today </h2>
                    <p className="para_home"> Programming is the process of creating a set of instructions 
                    that tell a computer how to perform a task    .
                       Programming helps in speeding up the input and output processes
                     in a machine. It is important to automate, collect, manage, calculate, and analyze the 
                     processing of data and information accurately. Programming helps create 
                    software and applications that help computer and mobile users in daily life.
                     Programming  also assists young students in developing problem-solving skills,
                     such as the ability to solve a problem rationally as well as creatively.
                    </p>
                    
               </div>
               </div>
               {/* <Footer /> */}
          </div>
      );
}
 
export default Home;