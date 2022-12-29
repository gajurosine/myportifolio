import React from "react";
import { FaFacebook  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import {FaLinkedin } from "react-icons/fa";
import { FaGithub  } from "react-icons/fa";
import {  FaGoogle  } from "react-icons/fa";
import {FaPhoneSquareAlt } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";

const Footer = () => {
     return ( 
          <div className="footer_content">
               <section className="section_footer">
                    <div className="social_footer"><span>Connect with me on social networks:</span>
                    </div>

                    <div className="social_links">
                         <a href="https://www.facebook.com/alia.rosine.3/" className="footer_link_network">
                         < FaFacebook />
                         </a>
                        
                         <a href="https://www.instagram.com/me_rosine18/" className="footer_link_network">
                         <FaInstagram />
                         </a>
                         
                         <a href="https://www.linkedin.com/in/gaju-rosine-810728238/" className="footer_link_network">
                         <FaLinkedin />
                         </a>

                         <a href="https://www.linkedin.com/in/gaju-rosine-810728238/" className="footer_link_network">
                         <FaTwitterSquare />
                         </a>

                         <a href="https://mail.google.com/gajurosine1@gmail.com" className="footer_link_network">
                         <  FaGoogle />
                         </a>
                       

                         <a href="https://github.com/gajurosine" className="footer_link_network">
                         <FaGithub />
                         </a>
                    </div>                     
               

               <section  className="contacts">
                    <h2 className="contact_page"> CONTACT  </h2>
                    <p className="para_contact">
                     <FaPhoneSquareAlt  className="footer_cont"/> +250 789577032 / 7892322225
                    </p>

                    <p className="para_contact">
                     <FaGoogle  className="footer_cont"/> gajurosine1@gmail.com
                    </p>

                    <p className="para_contact">
                     <FaLinkedin  className="footer_cont"/> gaju rosine
                    </p>

                    <p className="para_contact">
                     < FaPrint  className="footer_cont"/> gaju rosine
                    </p>


               </section>

               <section className="description">
                    <p className="footer_description">                     
               My dream is to became a software engineer and i 
               want to study more about ARTIFICIAL INTERGENT as today techonology is mainly  based on Machine learning .
               so people don't believe that today technology is going to be everything but me I agree with it 
               because like in my school many works are being done by people ,one day I asked myself as an engineer why can't we make something which can help use to reduce the time .
               
               </p>
               <div className="last_desc_footer"> © 2022 Copyright:By Rosine </div>
               </section>
               </section>
               </div>

      );
}
 
export default Footer;