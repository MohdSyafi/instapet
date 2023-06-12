import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import  LoginSvc from "../../Services/LoginSvc";
import Signup from "../../Components/Signup/Signup";
import Swal from 'sweetalert2'
import utils from "../../Utils/utils";

function Login() {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [toggleSignup,settoggleSignup] = useState(false);

  const  handleSubmit = async (e) => {
    e.preventDefault();
    const loginSvc = LoginSvc(username,password);

    const res = await loginSvc.authenticateUser();

    if (res) {
      localStorage.setItem("authenticated", true);
      navigate("/home");
    }else{
      localStorage.setItem("authenticated", false);

      Swal.fire({
        icon: 'error',
        title: 'Failed to login!',
        text: 'Please check your credentials',
        customClass: utils().GetSwalCustomClass()
      })
    }

  };

  function showSignupModel(){
    settoggleSignup(!toggleSignup);
  }

  return (
    <div className="AppContainer">
      <form onSubmit={handleSubmit}>
        <div className="LoginContainer">
          <h1>Instapet</h1>
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
          <span >No account? <span className="signupLink" onClick={showSignupModel}>Create one!</span> </span>
        </div>
      </form>
      <Signup open={toggleSignup} showSignupModel={showSignupModel}/>
    </div>
  );
}

export default Login;
