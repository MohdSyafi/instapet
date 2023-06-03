const LoginSvc = (userName,password) => {

    const users = [{ username: "Jane", password: "123" }];

    function authenticateUser() {
        const account = users.find((user) => user.username === userName && user.password === password);
        return account ? true : false;
    };
  
  
    return {
        authenticateUser
    };
  
  };

  export default LoginSvc;
  