import axios from "axios";
import utils from "../Utils/utils";

const FollowSvc = () => {

    const LoginUrl = utils().GetApiUrl() + '/Follow/';

    async function FollowUser(userId,userIdToFollow) {
        try {
            const response = await axios.post( LoginUrl +'FollowUser', null,{

                params:{
                    id: userId,
                    idToFollow: userIdToFollow
                }

            });
        
            return response.data;
          } catch (error) {
            console.log(error);
            return false;
          }
    };

    async function UnFollowUser(userId,userIdToUnFollow) {
        try {
            const response = await axios.post( LoginUrl +'UnFollowUser',null, {
                params:{
                    id: userId,
                    idToUnFollow: userIdToUnFollow
                }

            });
        
            return response.data;
          } catch (error) {
            console.log(error);
            return false;
          }
    };

    return {
        FollowUser,
        UnFollowUser
    };
  
  };

  export default FollowSvc;
  