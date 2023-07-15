import axios from "axios";
import utils from "../Utils/utils";

const ProfileSvc = ()=>{
    const SearchUrl = utils().GetApiUrl() + '/Profile/';

    async function GetProfile(UserId){
        try{

            var res = await axios.get(SearchUrl + "GetProfile",{
               params:{
                userId : UserId
               } 
            })

            return res.data;

        }catch(err){
            console.log(err);
            return [];
        }
    }

    return{
        GetProfile
    }
        
    
}

export default ProfileSvc;