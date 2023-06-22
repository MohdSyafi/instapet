import axios from "axios";
import utils from "../Utils/utils";

const SearchSvc = ()=>{
    const SearchUrl = utils().GetApiUrl() + '/Search/';

    async function GetUsers(nameToSearch,userId){
        try{

            var res = await axios.post(SearchUrl + "SearchUser", null,{
               params:{
                input : nameToSearch,
                UserId : userId
               } 
            })

            return res;

        }catch(err){
            console.log(err);
            return [];
        }
    }

    return{
        GetUsers
    }
        
    
}

export default SearchSvc;