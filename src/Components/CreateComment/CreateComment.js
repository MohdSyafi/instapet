import "./CreateComment.scss"
import closeIcon from "../../Assets/Icons/x-circle.svg";
import ImageScroller from "../ImageScroller/ImageScroller";
import placeholderPic from "../../Assets/Images/profilePic.png";
import Comment from "../Comment/Comment";

function CreateComment({ open, toggleCreateCommentModal, post }) {

    if (!open) {
        return false;
    }

    function closeModal() {
        toggleCreateCommentModal()
    }

    return (
        <div className="CreateCommentModal">
            <img className="modalCloseBtn" src={closeIcon} onClick={closeModal} alt="close" />
            <div className="CreateCommentContainer">
                <div className="postImg">
                <ImageScroller postId = {post.postId} username={post.username}/>
                </div>
                <div className="post">
                    <div className="postDetail">
                        <div className="postOwner">
                            <img src={placeholderPic} alt="profile"></img>
                            <div>
                                <span>{post.username}</span>
                            </div>
                        </div>
                        <div className="postDesc">
                            {post.desc}
                        </div>
                    </div>
                    <div className="postComments">
                        <Comment postId={post.postId} username={post.username} disableToggle={true} />
                        <div className="commentForm">
                            <input type="text" placeholder="...comment" className="commentTxtBox" name="commentDesc"/>
                            <input className="commentBtn"  type="submit" value="send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateComment;