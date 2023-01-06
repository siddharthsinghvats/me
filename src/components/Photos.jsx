import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import icon from "../images/icon.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BrowserRouter, Link, Route ,Routes} from "react-router-dom";
import Gallery from "./Gallery";
import id from "../imageid";
const Photos = () => {
  return (
    <>
        <h1 className="imghead">Love Photography? Me too!</h1>
        <div className="gallery-container">
           <Gallery/>
        </div>
    </>
  );
};

export default Photos;
