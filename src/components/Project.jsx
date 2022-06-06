import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import profile from "../images/prof.jpeg";
import cyber from "../images/cybers.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="projdiv col-lg-6 col-md-12">
            <h3>Apart from this website, 
            <br/>there are few more to see! !</h3>
            <table className="project-links">
            <tr>
                <td>Codeforces Profile Fetcher</td>
                <td>
                <a
                  target="blank"
                  href="https://frozen-fjord-02824.herokuapp.com/"
                >
                  <LinkIcon /> Website
                </a>
                </td>
                <td>
                <a
                  target="blank"
                  href="https://github.com/siddharthsinghvats/Codeforces-User-Info"
                >
                  <GitHubIcon /> Repo
                </a>
                </td>
            </tr>
            <tr>
                <td>SongMania</td>
                <td>
                <a
                  target="blank"
                  href="https://siddharthsinghvats.github.io/SongMania/"
                >
                  <LinkIcon /> Website
                </a>
                </td>
                <td>
                <a
                  target="blank"
                  href="https://github.com/siddharthsinghvats/SongMania"
                >
                  <GitHubIcon /> Repo
                </a>
                </td>
                </tr>
                <tr>
                <td>
             

                BMI Calculator
                </td>
                <td>
                <a
                  target="blank"
                  href="https://siddharthsinghvats.github.io/BMICalculator/"
                >
                  <LinkIcon /> Website
                </a>
                </td>
                <td>
                <a
                  target="blank"
                  href="https://github.com/siddharthsinghvats/BMICalculator"
                >
                  <GitHubIcon /> Repo
                </a>
                </td>
                </tr>
                <tr>
                <td>
                Memory Game
                </td>
                <td>
                <a
                  target="blank"
                  href="https://siddharthsinghvats.github.io/Memory-Game/"
                >
                  <LinkIcon /> Website
                </a>
                </td>
                <td>
                <a
                  target="blank"
                  href="https://github.com/siddharthsinghvats/Memory-Game"
                >
                  <GitHubIcon /> Repo
                </a>
                </td>
                </tr>
                </table>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="anim cam-logo">
              <img src={cyber} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
