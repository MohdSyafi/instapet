import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Home.scss";
import Post from "../../Components/Post/Post";
import PostSvc from "../../Services/PostSvc";
import spinner from "../../Assets/Icons/Spinner.svg"

function Home() {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(false);
  const [postList, setpostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {

    const fetchPost = async () => {
      setIsLoading(true);
      const userId = localStorage.getItem("userId");
      let posts = await PostSvc(userId).getFollowingPosts(userId);
      setpostList(posts);
      setIsLoading(false);
    }

    fetchPost()
      // make sure to catch any error
      .catch(console.error);;

  }, [])

  return (
    <div className="HomeContainer">
      {isLoading &&
        <div className="loadingContainer">
          <img src={spinner} className="loading" alt="loading" />
        </div>
      }
      <div className="AllPostsContainer">
        {postList && postList.map((p, index) => (
          <Post key={index} data={p} />
        ))}
      </div>
    </div>

  );
}

export default Home;
