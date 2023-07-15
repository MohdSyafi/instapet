import placeholderPic from "../../Assets/Images/profilePic.png";
import "../Profile/Profile.scss";
import { useEffect, useState } from "react";
import ProfileSvc from "../../Services/ProfileSvc";
function Profile({ userId }) {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = localStorage.getItem("userId");
      let profile = await ProfileSvc().GetProfile(userId);
      setProfileData(profile);
    };

    let profileUserID = localStorage.getItem("userId");
        fetchProfile(profileUserID)    
    // make sure to catch any error
    .catch(console.error);
  }, []);

  return (
    <>
      {profileData && (
          <div className="ProfileContainer">
            <div className="ProfileTop">
              <div className="ProfilePic">
                <img src={placeholderPic} alt="profile" />
              </div>
              <div className="ProfileDetail">
                <div className="Profile-User">
                  <span>{profileData.userName}</span>
                </div>
                <div className="Profile-User-Stats">
                  <div className="Profile-Post">
                    <span className="span-bold">{profileData.postCount}</span>{" "}
                    posts
                  </div>
                  <div className="Profile-Followers">
                    <span className="span-bold">
                      {profileData.followingCount}
                    </span>{" "}
                    followers
                  </div>
                  <div className="Profile-Following">
                    <span className="span-bold">
                      {profileData.followerCount}
                    </span>{" "}
                    following
                  </div>
                </div>
                <div className="Profile-User-Descr">
                  {profileData.description}
                </div>
              </div>
            </div>
            <div className="ProfileBottom">
              <div className="PostGrid">
                {profileData.postAndImages.map((post,i)=>
                    <div key={i} className="Tile">
                        {<img src={post.images[0].location} alt="post" />}
                    </div>
                )}
              </div>
            </div>
          </div>      
      )}
    </>
  );
}

export default Profile;
