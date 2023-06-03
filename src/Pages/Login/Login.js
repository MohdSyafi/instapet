import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import  LoginSvc from "../../Services/LoginSvc";

function Login() {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSvc = LoginSvc(username,password);
    if (loginSvc.authenticateUser()) {
      localStorage.setItem("authenticated", true);
      navigate("/home");
    }else{
      localStorage.setItem("authenticated", false);
    }
  };

  return (
    <div className="AppContainer">
      <form onSubmit={handleSubmit}>
        <div className="LoginContainer">
          <label>Username</label>
          <input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            name="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <div>
            <input className="SubmitBtn" type="submit" value="Login" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
