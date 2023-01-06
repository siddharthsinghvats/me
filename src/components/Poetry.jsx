import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import auth from "../images/auth.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const Poetry = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="poems col-lg-6 col-md-12">
          <h2><CreateOutlinedIcon sx={{  fontSize: "30px" }}/> Yeah! I write too..</h2>
            <div className="poem1">
            <div className="number">1</div>
              <ul>
              <h3>Did your heart smile at the last breath?</h3>
                <li>
                  It is not about going up or down, <br/>
                  Sometimes you are an ordinary person,<br/>
                   And sometimes it is you who wears the crown.
                </li>
                <li>
                  It is not about getting it always right,<br/>
                   But when you get it wrong,<br/>
                    Either you stay calm or indulge in a mental fight.
                </li>
                <li>
                  It is not about ignorance or care,<br/>
                   But when you are left alone, It is about how much you dare.
                </li>
                <li>
                  It is not about poor or rich,<br/>
                   It is about what you preach.
                </li>
                <li>
                  It is not about being happy or sad, <br/>
                  Remember the last night a homeless had.
                </li>
                <li>
                  It is not about what others think,<br/>
                   Your own deeds should not cause your heart to shrink.
                </li>
                <li>
                  It is not about what you gained or lost, <br/>
                  Your will power in the turbulence has the highest cost.
                </li>
                <li>
                  It is not about life or death, <br/>
                  But did your heart smile at the last breath?
                </li>
              </ul>
            </div>
            <div className="poem1">
            <div className="number">2</div>
            <ul>
              <h3>Last Night..</h3>
                <li>
                  While I am walking down the streets, <br/>
                  I am accepting my own greets.
                </li>
                <li>
                  While I am walking up the stairs,<br/>
                   I am chanting my own prayers.
                </li>
                <li>
                  While I am sitting in the chair,<br/>
                   Looking at the sun's inevitable glare.
                </li>
                <li>
                  While I am looking through the window,<br/>
                  Feeling like my fear again wants to grow.
                </li>
                <li>
                  While I am looking up at the clouds, <br/>
                  Living in my guilt and endless doubts.
                </li>
                <li>
                  While I ma lying in the bed,<br/>
                   Revisiting the mistakes I had made.
                </li>
                <li>
                  Coming out of my lost world, <br/>
                  Looking at the horizon shining like an emerald.
                </li>
                <li>
                  The clock struck 7 in the morning, <br/>
                  And Yes!<br/>
                  The world's stage is all set for performing!
                </li>
              </ul>
            </div>
            <div className="poem1">
            <div className="number">3</div>
            <ul>
              <h3>What The God Wanted..</h3>
                <li>
                  You did not get what you wanted, <br/>
                  But the god wanted something better for you.
                </li>
                <li>
                  You failed everywhere again and again,<br/>
                  But the god wanted you to be one in all and not just one in a few.
                </li>
                <li>
                  You slipped off the path and almost gave up,<br/>
                  But the god wanted to sketch your own path ,<br/>
                  And not just to follow what others drew.
                </li>
                <li>
                  You always felt sad and it was all gloomy, <br/>
                  But god wanted colors in your life as rainbow hue.
                </li>
                <li>
                 You always found yourself surrounded by problems,<br/>
                   But god had always a wonderful clue.
                </li>
                <li>
                  Why did you give up?, <br/>
                  It was all a matter of perseverance my friend<br/>
                  God wanted you in the champion's crew!
                </li>
              </ul>
            </div>
          </div>
          <div className="prevent-scroll col-lg-6 col-md-12">
            <div className="anim auth-logo">
              <img src={auth} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="clear"></div>
    </>
  );
};

export default Poetry;
