import { useState } from "react";
import followingIcon from "../../Assets/Icons/user-check.svg";
import notFollowingIcon from "../../Assets/Icons/user-plus.svg";
import FollowSvc from "../../Services/FollowSvc";
import spinner from "../../Assets/Icons/Spinner.svg";

 function  Follow({ id, following }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isFollowing,setIsFollowing]= useState(following);
    const userId = localStorage.getItem("userId");

    async function toggleFollow(){
        setIsLoading(true);

        if(isFollowing){
           await FollowSvc().UnFollowUser(userId,id);
           setIsFollowing(!isFollowing);
           setIsLoading(false);
        }else{
           
            await FollowSvc().FollowUser(userId,id);
            setIsFollowing(!isFollowing);
            setIsLoading(false);
        }

    }

    if(isLoading){
        return(
            <div className="FollowContent">
                <img className="loadingSpinner" src={spinner} alt="loading" />
            </div>
        )
    }

    return (
        <div className="FollowContent">
            {isFollowing ? (
                <img className="followIcon" src={followingIcon} onClick={toggleFollow } alt="profile" />
            ) : (
                <img className="followIcon" src={notFollowingIcon} onClick={toggleFollow} alt="profile" />
            )}
        </div>
    )
}

export default Follow;