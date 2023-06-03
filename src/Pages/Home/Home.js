import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.scss";
import Post from "../../Components/Post/Post";
import FeedsSvc from "../../Services/FeedsSvc";

function Home() {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(false);
  const [postList, setpostList] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");

    if (loggedInUser === "true") {
      setauthenticated(true);

      var feedsSvc = FeedsSvc("Jane");
      setpostList(feedsSvc.getFollowingPosts())

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
        <div className="AllPostsContainer"> 
          {postList && postList.map((p, index) => (
            <Post key={index} data={p} />
          ))}
        </div> 
        <div className="MessageContainer">
           <center>Messages..to be build</center>
          </div>   
      </div>
    </div>
  );
}

export default Home;
