import React from "react";
import Navbar from"../Navbar";
import { FaJsSquare} from "react-icons/fa";
import { FaReact} from "react-icons/fa";
import{ FaHtml5 } from 'react-icons/fa';
import {FaCss3Alt } from 'react-icons/fa';
import {FaNode } from 'react-icons/fa';

const Skills = () => {
     return (  
          <div className="content">
                  <Navbar />
          <div className="skills"> 
          <div className="skills_tabs"> 
               <h6 className="head_skill">Experience </h6>
               <p className="para_skill">As i said i have been working to years as aprogrammer i have difference skills in difference preogramming languages
                 for example those languages used on fronted  for example  i have learning javascripty which helps to increase the intraction of user to  the webpages ,Creating web and mobile apps. Developers can use various JavaScript frameworks for developing and building web and mobile apps. ...
                 Building web servers and developing server applications.
                 Game development  ,also i have learned cas ,it's not only in fronted i have also learned the framework used on backend .

                </p>
                <div className="dev_icons"> 
                <h5 className="para_icons"> JAVASCRIPTY <FaJsSquare className="icon"/></h5>
                <h5 className="para_icons">REACTJS <FaReact className="icon"/></h5>
                <h5 className="para_icons"> HMTL <FaHtml5 className="icon"/></h5>
                <h5 className="para_icons">CSS <FaCss3Alt className="icon"/></h5>
                </div>
                </div>

                <div className="skills_icons">
            <h4 className="para_skill">I have also learned a framework which is called </h4>

            <p className="para_skill">Node. js it  uses JavaScript to write command line tools and for server-side scripting—running scripts server-side
               to produce dynamic web page content before the page is sent to the user's web browser.</p>
               <p className="para_skill">the reason where i have choose this framework it's because : High-performance for Real-time Applications
               ,  it's easy to Learn and Quick to Adapt.it helps in building Cross-functional Teams and others .</p>
               <h5 className="para_skill_frame"><FaNode className="icon1"/> </h5>
                
                </div>
               
                
                </div>
          </div>
     );
}
 
export default Skills;