import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.scss";

function Home() {
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



  return (
    <div className="PageContainer">
      <Sidebar />
      <div className="HomeContainer">
      </div>
    </div>
  );
}

export default Home;
