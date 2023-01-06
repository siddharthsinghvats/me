import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
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
                <td>SpotNews</td>
                <td>
                <a
                  target="blank"
                  href="https://spotnews.netlify.app/"
                >
                  <LinkIcon /> Website
                </a>
                </td>
                <td>
                <a
                  target="blank"
                  href="https://github.com/siddharthsinghvats/SpotNews"
                >
                  <GitHubIcon /> Repo
                </a>
                </td>
            </tr>
            <tr>
                <td>Guide-N-Glide</td>
                <td>
                <a
                  target="blank"
                  href="https://guide-n-glide.netlify.app"
                >
                  <LinkIcon /> Website
                </a>
                </td>
                <td>
                <a
                  target="blank"
                  href="https://github.com/siddharthsinghvats/guide-n-glide"
                >
                  <GitHubIcon /> Repo
                </a>
                </td>
                </tr>
                <tr>
                <td>
             

               Sociate
                </td>
                <td>
                <a
                  target="blank"
                  href="https://sociate.netlify.app/"
                >
                  <LinkIcon /> Website
                </a>
                </td>
                <td>
                <a
                  target="blank"
                  href="https://github.com/siddharthsinghvats/sociate-frontend"
                >
                  <GitHubIcon /> Repo
                </a>
                </td>
                </tr>
                <tr>
                <td>
                SongMania
                </td>
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
