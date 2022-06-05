import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import profile from "../images/prof.jpeg";
import icon from "../images/icon.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BrowserRouter, Link, Route ,Routes} from "react-router-dom";
import Image from "./Image";
import id from "../imageid";
const Gallery = () => {
  return (
    <>
       
        <div className="gallery">
           {id.map((ids,ind)=><Image id={ids} key={ind}/>)} 
        </div>
    </>
  );
};

export default Gallery;