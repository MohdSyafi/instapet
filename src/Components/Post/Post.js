import "./Post.scss";
import placeholderPic from "../../Assets/Images/profilePic.png";
import catPic from "../../Assets/Images/catPic.jpg";
import dogPic from "../../Assets/Images/dogPic.jpeg";
import heart_default from "../../Assets/Icons/heart.svg";
import heart_liked from "../../Assets/Icons/heart-liked.svg";
import commentIcon from "../../Assets/Icons/message-square.svg";
import shareIcon from "../../Assets/Icons/share.svg";
import bookmarkIcon from "../../Assets/Icons/bookmark.svg";
import Readmore from "../Readmore/Readmore";
import Comment from "../Comment/Comment";
import {useState} from "react"

function Post(p) {
    const [toggleLike, settoggleLike] = useState(false);

    function likePost(){

        settoggleLike(!toggleLike);
    }

    return (
        <div className="PostContainer">
            <div className="postOwner">
                <img src={placeholderPic} alt="profile"></img>
                <div>
                    <span>{p.data.username}</span>
                </div>
            </div>
            <div className="postImg">
                <img alt="post" src={p.data.pic === "catPic.jpg" ? catPic : dogPic}></img>
            </div>
            <div className="postFooter">
                <div className="interactBar">
                    <img onClick={likePost} alt="like" src={toggleLike ? heart_liked :heart_default}></img>
                    <img alt="comment" src={commentIcon}></img>
                    <img alt="share" src={shareIcon}></img>
                    <img alt="bookmark" src={bookmarkIcon}></img>
                </div>
                <div className="likeCount">
                    <span>{p.data.likes} likes</span>
                </div>
                <div className="postDesc">
                    <Readmore text={p.data.desc}/>
                    
                </div>
                <div className="comments">
                    <Comment postId = {p.data.postId} username={p.data.username}/>
                </div>
            </div>
        </div>
    );
}

export default Post;