import "./login.css";
import {useEffect, useState} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../CommonHeader";
import Footer from "../Home/Footer";
import logo from '../Home/logo_ahm.jpg'

const Login = () => {
  const [visiblity, setVisiblity] = useState("password");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [errormsg,setErrormsg]=useState("none")
  //store the pass
  const handalePass = (e) => {
    setPass(e.target.value);
  };
  //store the name
  const handaleName = (e) => {
    setName(e.target.value);
  };
  const navigator = useNavigate();
  //password visiblity
  const passwordSee = (e) => {
    e.preventDefault();
    if (!pass) {
      setVisiblity("password");
    } else {
      if (visiblity === "password") {
        setVisiblity("text");
      } else {
        setVisiblity("password");
      }
    }
  };

  //change the logo

  let change;
  if (visiblity === "password") {
    change = <FaEye />;
  } else {
    change = <FaEyeSlash />;
  }

  const handaleSubmit = (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:7000/api/v1/login", {name, pass})
        .then((result) => {
          if (result.data.data[0]) {
            sessionStorage.setItem("user", result.data.data[0].roletype_name);
            sessionStorage.setItem("name", result.data.data[0].user_name)
            navigator("/dashboard");
          } else {
            setErrormsg("block")
            setPass("")
            setName("")
          }
        })
        .catch((err) => {
          if (err){
            setErrormsg("block")
            setPass("")
            setName("")
        }
        });
    setErrormsg("none")
  }


  return (
    <div className="contain" style={{display:'inline-block'}}>
      <CommonHeader/>
      <div className="login-box-body" style={{display: 'table'}}>
      <div className="login login-logo">
        <div className="nameLogo">
          <img src={logo} height={80} width={80}></img>
          <p className="login-logo-msg1 ">AL-HILAL MISSON </p> 
          <p className="login-logo-msg2"> Provide Username and Password</p>
        </div>
        <form onSubmit={handaleSubmit} >

          <div className="username-container">
            <input
            type="text"
            placeholder="Username" style={{width:'100%'}}
            className="input-login-username"
            value={name}
            onChange={handaleName}
          /></div>
          
          <div className="username-container Password" style={{marginBottom:'40px'}}>
            <section style={{ display: "flex" }}>
              <input
                type={visiblity}
                placeholder="Password"
                className="input-login-username"
                value={pass}
                onChange={handalePass} style={{width:'85%'}}
              />
              <button
                onClick={passwordSee}
                className=" input-login-username" style={{width:'15%'}}
              >
                {change}
              </button>
            </section>
          </div>
          <p style={{display:errormsg,color:"red",fontSize:"15px"}}>sumthing went wrong</p>
          <input className="dashboard-btn dashboard-btn-scss" type="submit" placeholder="Sign In" />
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
