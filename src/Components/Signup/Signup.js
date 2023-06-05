import closeIcon from "../../Assets/Icons/x-circle.svg";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup({ open, showSignupModel }) {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    if (!open) {
        return false;
    }

    function closeModal() {
        showSignupModel(false);
    }

    return (
        <div className="signupContainer">
            <form>
                <div className="signupContent">
                    <img className="modalCloseBtn" src={closeIcon} onClick={closeModal} alt="close" />
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

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                    />

                    <input className="SubmitBtn" type="submit" value="Signup" />
                </div>
            </form>
        </div>
    );
}

export default Signup;