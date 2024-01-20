import React,{useEffect,useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import tech from "../images/tech.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Leetcode from "./Leetcode"
import Loading from "./Loading";
var leetcode=[];
 
const Code = () => {
  const [leetcode, setLeetcode]= useState({});
  const [cf, setCf] = useState(new Map());
  const [cfuser,setCfuser] =useState({});
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    fetch("https://leetcodestats.cyclic.app/neembu_mirch")
    .then(res => res.json())
    .then(
      (result) => {
        setLeetcode(result);
        setLoading(false);
      }
    ).catch((err)=>{
      setLoading(false);
      alert("Could not fetch leetcode data!");
    });

    fetch("https://codeforces.com/api/user.status?handle=Neembu_Mirch")
    .then(res => res.json())
    .then(
      (res) => {
        let re=res.result;
        let map = new Map();
        let rating = new Map();
        for(let i=800;i<=4000;i++){
          rating.set(i,0);
        }
        let cfc = re.filter((value)=>{
          let flag = false;

          if(value.verdict==="OK" && ! map.has(value.problem.name)){
            flag = true;
            let cur =rating.get(value.problem.rating);
            rating.set(value.problem.rating,cur+1);
            map.set(value.problem.name,true);
          }
          return flag;
        })
        setCf(rating);
        
      }
    ).catch((err)=>{
      alert("Could not fetch Codeforces data!");
    });

    fetch("https://codeforces.com/api/user.info?handles=Neembu_Mirch")
    .then(res => res.json())
    .then(
      (res) => {
        setCfuser(res.result[0]);
      }
    );
    
  },[]);
  return (
    <>
        {loading?<Loading/>:<Leetcode user ={leetcode} cf={cf} cfuser={cfuser}/>}
    </>

  );
};

export default Code;
