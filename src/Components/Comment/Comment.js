import {useEffect, useState} from "react";
import FeedsSvc from "../../Services/FeedsSvc";
import "./Comment.scss";

function Comment({postId,username}){
    const [displayCommentList, setdisplayCommentList] = useState([]);
    const [allCommentsList,setallCommentsList] = useState([]);
    const [toggleAll,settoggleAll] = useState(false);
    const [showViewAll,setshowViewAll] = useState(true);

    useEffect(()=>{

        const feedsSvc = FeedsSvc(username);

        setallCommentsList(feedsSvc.getComments(postId));

        if(allCommentsList.length  > 3 && !toggleAll){

            setdisplayCommentList(allCommentsList.slice(0, 3));
        }else{
            setdisplayCommentList(allCommentsList);
        }
  
        if(allCommentsList.length <= 3 ){
            setshowViewAll(false);
        }
        else
            setshowViewAll(true);

    },[allCommentsList,showViewAll,toggleAll])

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

            {showViewAll?
                (<span onClick={showAllComment} className="ViewAllBtn">View all comments</span>)
                :
                (<span></span>)
            }
       
        </div>
    );
}

export default Comment;