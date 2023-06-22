import closeIcon from "../../Assets/Icons/x-circle.svg";
import "./Signup.scss";
import { useState } from "react";
import LoginSvc from "../../Services/LoginSvc";
import Swal from 'sweetalert2'
import utils from "../../Utils/utils";
import spinner from "../../Assets/Icons/Spinner.svg"

function Signup({ open, showSignupModel }) {
    const [email, setemail] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    if (!open) {
        return false;
    }

    function closeModal() {
        showSignupModel(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let swalErrorTitle = 'Error creating account...';

        if (email === "") {
            showSweetAlert('error', swalErrorTitle, 'Email cannot be empty', false, );
            return;
        }
    
        if (username === "") {
            showSweetAlert('error', swalErrorTitle, 'Username cannot be empty', false);
            return;
        }
    
        if (password === "") {
            showSweetAlert('error', swalErrorTitle, 'Password cannot be empty', false);
            return;
        }
    
        if (confirmpassword === "") {
            showSweetAlert('error', swalErrorTitle, 'Confirm Password cannot be empty', false);
            return;
        }
            
        if(password !== confirmpassword){
            showSweetAlert('error', swalErrorTitle, 'Password does not match Confirm Password', false);
            return;
        }
            
        const loginSvc = LoginSvc(username, password);

        const res = await loginSvc.signup(email, username, password);
        
        if(!res.isSignedUp)
        {
            showSweetAlert('error',swalErrorTitle,res.message,false);

        }else{

            showSweetAlert('success','Succes!','Account created succesfully',true);
        }
        

    }

    function showSweetAlert(swalIcon,swalTitle,swalText,isSignedUp){
        setIsLoading(false);
        Swal.fire({
            icon: swalIcon,
            title: swalTitle,
            text: swalText,
            customClass: utils().GetSwalCustomClass()
        }).then((result) => {

            if (result.isConfirmed && isSignedUp) {
                showSignupModel(false);
            }
        })
    }

    return (
        <div className="signupContainer">
            <form onSubmit={handleSubmit}>
                <div className="signupContent">
                    <img className="modalCloseBtn" src={closeIcon} onClick={closeModal} alt="close" />
                    <h1>Instapet</h1>
                    <label>Email</label>
                    <input
                        type="text"
                        name="Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
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
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmpassword}
                        onChange={(e) => setconfirmpassword(e.target.value)}
                    />
                    {isLoading ? (
                      <img src={spinner} alt="loading" />
                    ):(
                        <input className="SubmitBtn" type="submit" value="Signup" />
                    )}

                </div>
            </form>
        </div>
    );
}

export default Signup;