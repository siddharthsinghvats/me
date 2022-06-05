import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import profile from "../images/prof.jpeg";
import icon from "../images/icon.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import contact from "../images/contact.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const myFunction = (e)=> {
    let phone = e.target.innerText;
    navigator.clipboard.writeText(phone);
    alert("Phone number copied: " + phone);
    // console.log(e.target.innerText);
  }

const Contact = () => {
  return (
    <>
      <div className="cen">
        <div className="container-fluid" id="contain">
          <div className="row" id="rw">
            <div className="col-lg-4 col-md-6 col-sm-12 item2">
              <p>
                <ul className="main-contact">
                  <li className="main-li1">
                    <h2>Connect with Me on:</h2>
                  </li>
                  <li className="main-li">
                    <InstagramIcon
                      sx={{ color: "#d33b84", fontSize: "40px" }}
                    />
                    <a style={{textDecoration:"none",marginLeft:"20px"}} href="https://www.instagram.com/siddharth_singh_vats/">
                      @siddharth_singh_vats
                    </a>
                  </li>
                  <li className="main-li">
                    <WhatsAppIcon sx={{ color: "green", fontSize: "40px" }} />
                    <span onClick={myFunction} style={{textDecoration:"none",marginLeft:"20px"}}>9984876023</span>
                  </li>
                  <li className="main-li">
                    <EmailIcon sx={{ color: "orange", fontSize: "40px" }} />
                    <a style={{textDecoration:"none", marginLeft:"20px"}}href="mailto:lcs2020002@iiitl.ac.in">lcs2020002@iiitl.ac.in</a>
                  </li>
                  <li className="main-li">
                    <PhoneAndroidIcon
                      sx={{ color: "blue", fontSize: "40px" }}
                    />
                      <span id="phone" onClick={myFunction} style={{textDecoration:"none",marginLeft:"20px"}}>9984876023</span>
                  </li>
                  <li className="main-li">
                    <LinkedInIcon sx={{ color: "darkblue", fontSize: "40px" }} />
                    <a style={{textDecoration:"none", marginLeft:"20px"}}href="https://www.linkedin.com/in/siddharth-singh-813680205/">LinkedIn</a>
                  </li>
                  <li className="main-li">
                    <GitHubIcon sx={{ color: "black", fontSize: "40px" }} />
                    <a style={{textDecoration:"none", marginLeft:"20px"}}href="github.com/siddharthsinghvats">  Github</a>
                  </li>
                </ul>
              </p>
            </div>

            <div className="col-lg-4 col-md-12 item3">
              <img className="anim" src={contact} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
