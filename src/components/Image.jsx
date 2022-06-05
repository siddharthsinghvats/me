import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import profile from "../images/prof.jpeg";
import icon from "../images/icon.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BrowserRouter, Link, Route ,Routes} from "react-router-dom";

const Image = (props) => {
  return (
    <>
        <div className="gallery-item">
            <img src={`https://drive.google.com/uc?export=view&id=${props.id}`}/> 
        </div>
    </>
  );
};

export default Image;
