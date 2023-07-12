import "./Post.scss";
import placeholderPic from "../../Assets/Images/profilePic.png";
import heart_default from "../../Assets/Icons/heart.svg";
import heart_liked from "../../Assets/Icons/heart-liked.svg";
import commentIcon from "../../Assets/Icons/message-square.svg";
import shareIcon from "../../Assets/Icons/share.svg";
import bookmarkIcon from "../../Assets/Icons/bookmark.svg";
import bookmarkedIcon from "../../Assets/Icons/bookmark-selected.svg";
import Readmore from "../Readmore/Readmore";
import Comment from "../Comment/Comment";
import CreateComment from "../CreateComment/CreateComment";
import {useState} from "react"
import ImageScroller from "../ImageScroller/ImageScroller";

function Post({data}) {
    const [toggleLike, settoggleLike] = useState(false);
    const [toggleBookmark, settoggleBookmark] = useState(false);
    const [toggleCreateCmtModal, settoggleCreateCmtModal] = useState(false);

    function likePost(){

        settoggleLike(!toggleLike);
    }

    
    function toggleCreateCommentModal(){
        settoggleCreateCmtModal(!toggleCreateCmtModal);
    }

    function bookmarkPost(){
        settoggleBookmark(!toggleBookmark);        
    }
    
    return (
        <div className="PostContainer">
            <div className="postOwner">
                <img src={placeholderPic} alt="profile"></img>
                <div>
                    <span>{data.userName}</span>
                </div>
            </div>
            <div className="postImg">
                <ImageScroller postId = {data.postId} username={data.userId} imageList = {data.images}/>
            </div>
            <div className="postFooter">
                <div className="interactBar">
                    <img onClick={likePost} alt="like" src={toggleLike ? heart_liked :heart_default}></img>
                    <img onClick={toggleCreateCommentModal} alt="comment" src={commentIcon}></img>
                    <img alt="share" src={shareIcon}></img>
                    <img onClick={bookmarkPost} alt="bookmark"src={toggleBookmark ? bookmarkedIcon : bookmarkIcon}></img>
                </div>
                <div className="likeCount">
                    <span>{data.likes} likes</span>
                </div>
                <div className="postDesc">
                    <Readmore text={data.description}/>
                    
                </div>
                <div className="comments">
                    <Comment postId = {data.postId} username={data.userId} disableToggle= {false}/>
                </div>
            </div>

            <CreateComment open={toggleCreateCmtModal} toggleCreateCommentModal={toggleCreateCommentModal} post={data}/>
        </div>
    );
}

export default Post;