import "./login.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [visiblity, setVisiblity] = useState("password");
  const [pass, setpass] = useState("");

  //store the pass
  const handalePass = (e) => {
    setpass(e.target.value);
  };

  //password visiblity
  const passwordSee = (e) => {
    e.preventDefault();
    if (!confirm) {
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
  };

  return (
    <div className="contain">
      <div className="login">
        <div className="nameLogo">
          <section>Logo</section>
          <h2 style={{ color: "green" }}>AL-HILAL MISSON</h2>
          <section>Provide username and password for login</section>
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
          <input type="text" placeholder="Username" className="input" />
          <div className="Password">
            <section style={{ display: "flex" }}>
              <input
                type={visiblity}
                placeholder="Password"
                className="pass"
                value={pass}
                onChange={handalePass}
              />
              <button
                onClick={passwordSee}
                className="botton"
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
  );
};

export default Login;
