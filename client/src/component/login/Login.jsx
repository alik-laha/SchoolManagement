import "./login.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../CommonHeader";
import Footer from "../Home/Footer";
const Login = () => {
  const [visiblity, setVisiblity] = useState("password");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
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
      .post("http://localhost:7000/api/v1/login", { name, pass })
      .then((result) => {
        if (result.data.data[0]) {
          sessionStorage.setItem("user", result.data.data[0].roletype_name);
          sessionStorage.setItem("name",result.data.data[0].user_name)
          navigator("/dashboard");
        } else {
          console.log("invalid cradentials");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contain" style={{display:'inline-block'}}>
      <CommonHeader/>
      <div className="login-box-body" style={{display: 'table'}}>
      <div className="login login-logo">
        <div className="nameLogo">
          <section>Logo</section>
          <h1 style={{ color: "green" }}>AL-HILAL MISSON</h1>
        </div>
        <form
          onSubmit={handaleSubmit}
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Username"
            className="inputS"
            value={name}
            onChange={handaleName}
          />
          <div className="Password">
            <section style={{ display: "flex" }} className="Align">
              <input
                type={visiblity}
                placeholder="Password"
                className="pass"
                value={pass}
                onChange={handalePass}
              />
              <button
                onClick={passwordSee}
                className="bottons"
                style={{
                  height: "30px",
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  bottom: "6px",
                }}
              >
                {change}
              </button>
            </section>
          </div>
          <input className="submit" type="submit" placeholder="Submit" />
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
