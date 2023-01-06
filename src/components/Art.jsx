import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import cam from "../images/cam.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BrowserRouter, Link, Route ,Routes} from "react-router-dom";
import Goback from "./Goback";

const Art = (props) => {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="artdiv col-lg-6 col-md-12">
                    <h2>Still exploring me !</h2>
                  
                    <h3>Nature makes you crazy?</h3>
                    <Link to="/gallery">
                    <button className="btn btn-primary artbtn">
                    Look What I Clicked! <ArrowForwardIosIcon />
                  </button>
                  </Link>
                    <h3>Love diving into Poetry?</h3>
                <Link to="/poetry">
                    <button className="btn btn-primary artbtn">
                    Look What I Wrote! <ArrowForwardIosIcon />
                  </button>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-12">
                <div className="anim cam-logo">
                <img src={cam} alt="logo" />
                </div>
                </div>
            </div>
        </div>
   
    </>
  );
};

export default Art;
