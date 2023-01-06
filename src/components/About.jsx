import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import tech from "../images/tech.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container-fluid" id="cf">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <p>
              <h3>Me:</h3>
              <p>
                <ul className="about-info">
                  <li>
                    I am Siddharth Singh. A BTech undergraduate at IIIT Lucknow.
                  </li>
                  <li>I am currently pursuing Computer Science as my major.</li>
                  <li>
                    I belong to Azamgarh , a city in Uttar Pradesh province of
                    India.
                  </li>
                </ul>
              </p>
              <h3>Education:</h3>
              <p>
                <ul className="about-info">
                  <li>
                    I completed my senior secondary examination in 2020 with
                    95.8% score.
                  </li>
                  <li>Secondary examination in 2018 with 93% score.</li>
                  <li>I cleared JEE Mains in 2020 with AIR 5952.</li>
                </ul>
              </p>
              <h3>Skills:</h3>
              <p>
                <ul className="about-info">
                  <li>Data Structures And Algorithms</li>
                  <li>C++</li>
                  <li>HTML, CSS and JavaScript</li>
                  <li>ReactJS</li>
                  <li>MYSQL</li>
                </ul>
              </p>
              <h3>Hobbies:</h3>
              <p>
                <ul className="about-info">
                  <li> My interest lies in coding , poetry and photography.</li>
                  <li>
                    I do not like much of sports but casually play volleyball.
                  </li>
                </ul>
              </p>
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="anim about-logo">
              <img src={tech} alt="logo" />
            </div>
           
            <div className="text-center">
                <Link to="/code">
                  <button id="codestat" className="btn btn-primary">
                    My Coding Stats
                  </button>
                </Link>
          </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </>
  );
};

export default About;
