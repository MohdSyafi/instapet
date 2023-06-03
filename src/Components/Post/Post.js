import "./Post.scss";
import placeholderPic from "../../Images/profilePic.png";
import catPic from "../../Assets/Images/catPic.jpg";
import dogPic from "../../Assets/Images/dogPic.jpeg";
import likeIcon from "../../Assets/Icons/heart.svg";
import commentIcon from "../../Assets/Icons/message-square.svg";
import shareIcon from "../../Assets/Icons/share.svg";
import bookmarkIcon from "../../Assets/Icons/bookmark.svg";

function Post(p) {

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
                    <img alt="like" src={likeIcon}></img>
                    <img alt="comment" src={commentIcon}></img>
                    <img alt="share" src={shareIcon}></img>
                    <img alt="bookmark" src={bookmarkIcon}></img>
                </div>
                <div className="likeCount">
                    <span>{p.data.likes} likes</span>
                </div>
                <div className="postDesc">
                     {p.data.desc} 
                </div>
                <div className="comments">
                    read comments
                </div>
            </div>
        </div>
    );
}

export default Post;