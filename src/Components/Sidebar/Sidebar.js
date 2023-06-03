import "./Sidebar.scss"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Sidebar (){
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(false);
  
    useEffect(() => {
      const loggedInUser = localStorage.getItem("authenticated");
  
      if (loggedInUser === "true") {
        setauthenticated(true);
      } else {
        setauthenticated(false);
        navigate("/login");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authenticated]);
  
    const Logout = () => {
        localStorage.setItem("authenticated", false);
        setauthenticated(false);
      };

    return(
        <div className="SidebarContainer">
            <ul>
                <li>
                    <img alt=""/>
                    <p>Home</p>
                </li>
                <li>
                    <img alt=""/>
                    <p>Search</p>
                </li>
                <li>
                    <img alt=""/>
                    <p>Explore</p>
                </li>
                <li>
                    <img alt=""/>
                    <p>Create</p>
                </li>
                <li>
                    <img alt=""/>
                    <p>Notifications</p>
                </li>
                <li>
                    <img alt=""/>
                    <p>Profile</p>
                </li>
                <li>
                    <img alt=""/>
                    <p  onClick={Logout}>Logout</p>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;