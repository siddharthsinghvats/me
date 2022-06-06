import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import leet from "../images/leetcode.png";
import forces from "../images/forces.png";
import rank from "../images/hackerrank.png";
import earth from "../images/hack.png";
import Charts from "./Charts";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const colors=["#ccc","#ccc", "#ccc" ,"#ccc","#7f7","#7f7","#77ddbb","#77ddbb","#aaaaff","#aaaaff","#aaf","#f8f","#f8f","yellow","yellow"];



const Leetcode = (props) => {
  const { user,cf ,cfuser} = props;
  const leetdata = [
    ["Level", "Count", { role: "style" }],
    ["Easy", Number(user.easy_questions_solved), "green"], 
    ["Medium", Number(user.medium_questions_solved), "darkorange"], 
    ["Hard", Number(user.hard_questions_solved), "red"]
  ];
  const cfdata=[
    ["Rating", "Count", { role: "style" }],
  ];
 
  let cfTotal =0;
  for(let i =800;i<=4000;i+=100){
      cfTotal+=cf.get(i);
      if(cf.get(i)>0){
         cfdata.push([i,cf.get(i),colors[(i-800)/100]]);
      }
  }
  // window.onresize = function(){ window.location.reload(); }
  return (
    <>
    <div className="cp">
      <div className="" id="cp-container">
        
          <div className="cp1">
            <div className="icon">
              <img src={leet} alt="leetcode" />
              <h2><a style={{textDecoration:"none"}} href="https://leetcode.com/it_is_tough/">Leetcode</a></h2>
            </div>
            <ul>
              <li>Total problem solved: <strong>{user.total_problems_solved}</strong></li>
              <li>
                Total Easy Solved: <strong>{user.easy_questions_solved}/
                {user.total_easy_questions}</strong>
              </li>
              <li>
                Total Medium Solved: <strong>{user.medium_questions_solved}/
                {user.total_medium_questions}</strong>
              </li>
              <li>
                Total Hard Solved: <strong>{user.hard_questions_solved}/
                {user.total_hard_questions}</strong>
              </li>
            </ul>
            <div className="charts">
            <Charts data={leetdata}/>
            </div>
           
          </div>
          <div className="cp2">
            <div className="icon">
              <img src={forces} alt="codeforces" />
              <h2><a style={{textDecoration:"none"}}  href="https://codeforces.com/profile/it_is_tough">Codeforces</a></h2>
            </div>
            <ul className="cfdata">
              <li> Rating: <b>{cfuser.rating}</b></li>
              <li>
                Max Rating: <b>{cfuser.maxRating}</b>
            </li>
            <li>
                Rank:<b> {cfuser.rank}</b>
              </li>
              <li>
              Max Rank: <b>{cfuser.maxRank}</b>
              </li>
              <li>
              Total Problems: <b>{cfTotal}</b>
              </li>
            </ul>
            <div className="charts">
                <Charts data={cfdata}/>
            </div>
          </div>
          <div className="cp3">
            <div className="icon">
              <img src={rank} alt="hackerrank" />
              <h2>Hackerrank</h2>
            </div>
            <div className="prof">
                <a target="blank" href="https://www.hackerrank.com/LCS2020002">
                <button className="profbtn btn btn-outline-dark">Profile</button>
                </a>
            </div>
          </div>
          <div className="cp4">
            <div className="icon">
              <img src={earth} alt="hackerearth" />
              <h2>Hackerearth</h2>
            </div>
            <div className="prof">
                <a target="blank" href="https://www.hackerearth.com/@lcs2020002">
                <button className="profbtn btn btn-outline-dark">Profile</button>
                </a>
            </div>
          </div>
        </div>

        <div className="clear"></div>
        </div>
    </>
  );
};

export default Leetcode;
