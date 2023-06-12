import axios from "axios";
import utils from "../Utils/utils";

const LoginSvc = (userName,passWord) => {

    const LoginUrl = utils().GetApiUrl() + '/Login/';

    async function authenticateUser() {
        try {
            const response = await axios.post( LoginUrl +'Authenticate', {
              username: userName,
              password: passWord
            });
        
            return response.data;
          } catch (error) {
            console.log(error);
            return false;
          }
    };

    async function signup(email,userName,passWord){

      try {
        const response = await axios.post(LoginUrl + 'Signup', {
          Email: email,
          Username: userName,
          PassWord: passWord
        });

        return response.data;
      } catch (error) {
        console.log(error);
      }

    }
  
  
    return {
        authenticateUser,
        signup
    };
  
  };

  export default LoginSvc;
  