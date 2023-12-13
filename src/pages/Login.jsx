import React, { useContext } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { AuthContext } from "../context/context";

const Login = function() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const login = function(event) {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }
  
  return(
    <div>
      <h1 style={{marginTop: '100px'}}>Login page</h1>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='Enter login'/>
        <MyInput type='password' placeholder='Enter password'/>
        <MyButton>Enter</MyButton>
      </form>
    </div>
  )
}

export default Login