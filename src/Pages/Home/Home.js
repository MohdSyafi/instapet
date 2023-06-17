import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Home.scss";
import Post from "../../Components/Post/Post";
import PostSvc from "../../Services/PostSvc";

function Home() {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(false);
  const [postList, setpostList] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");

    if (loggedInUser === "true") {
      setauthenticated(true);

      var feedsSvc = PostSvc("Jane");
      setpostList(feedsSvc.getFollowingPosts())

    } else {
      setauthenticated(false);
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);

  return (
      <div className="HomeContainer"> 
        <div className="AllPostsContainer"> 
          {postList && postList.map((p, index) => (
            <Post key={index} data={p} />
          ))}
        </div> 
      </div>

  );
}

export default Home;
