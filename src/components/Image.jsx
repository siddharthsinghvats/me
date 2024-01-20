import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import icon from "../images/icon.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BrowserRouter, Link, Route ,Routes} from "react-router-dom";

const Image = (props) => {
  return (
    <>
        <div className="gallery-item">
            <img src={`https://lh3.google.com/u/0/d/${props.id}`}/> 
        </div>
    </>
  );
};

export default Image;
