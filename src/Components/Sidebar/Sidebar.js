import "./Sidebar.scss"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {Link,} from "react-router-dom";

function Sidebar() {
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

    return (
      
        <div className="SidebarContainer">
            <div>
                <div>
                    <img alt="" />
                    <Link to="/home"> <p className="sidebarText">Home</p></Link>
                </div>
                <div>
                    <img alt="" />
                    <Link to="/search"> <p className="sidebarText">Search</p></Link>
                </div>
                <div>
                    <img alt="" />
                    <Link to="/explore"> <p className="sidebarText">Explore</p></Link>
                </div>
                <div>
                    <img alt="" />
                    <Link to="/createpost"> <p className="sidebarText">Create</p></Link>
                </div>
                <div>
                    <img alt="" />
                    <Link to="/notification"> <p className="sidebarText">Notifications</p></Link>
                </div>
                <div>
                    <img alt="" />
                    <Link to="/profile"> <p className="sidebarText">Profile</p></Link>
                </div>
                <div>
                    <img alt="" />
                    <p onClick={Logout} className="sidebarText">Logout</p>
                </div>
            </div>
        </div>
     

    );
}

export default Sidebar;