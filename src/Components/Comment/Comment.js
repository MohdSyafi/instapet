import {useEffect, useState} from "react";
import FeedsSvc from "../../Services/FeedsSvc";
import "./Comment.scss";

function Comment({postId,username,disableToggle}){

    const [toggleAll,settoggleAll] = useState(false);
    const [showViewAll,setshowViewAll] = useState(true);
    const [displayCommentList,setdisplayCommentList] = useState([]);
    useEffect(()=>{
        let allCommentsList = [];
        const feedsSvc = FeedsSvc(username);

        allCommentsList =feedsSvc.getComments(postId);

        if(allCommentsList.length  > 3 && !toggleAll && !disableToggle){

            setdisplayCommentList(allCommentsList.slice(0, 3));
        }else{
            setdisplayCommentList(allCommentsList);
        }
  
        if(allCommentsList.length <= 3  && !disableToggle){
            setshowViewAll(false);
        }
        else
            setshowViewAll(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[toggleAll])

    function showAllComment(){
        settoggleAll(!toggleAll);
    }

    return(
        <div className="CommentsSection">
            {displayCommentList.map((cmt,i)=>{
                return(
                    <div key={i} className="CommentContainer"> 
                        <div className="cmtUsr">{cmt.username}</div>
                        <div className="cmtMsg">{cmt.comment}</div>
                    </div>               
                )
            })}

            {disableToggle 
                ?(<span></span>)
                :(
                    showViewAll?
                        (<span onClick={showAllComment} className="ViewAllBtn">View all comments</span>)
                        :
                        (<span></span>)
                    
                )}
      
        </div>
    );
}

export default Comment;