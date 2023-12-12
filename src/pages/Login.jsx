import React from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const Login = function() {
  return(
    <div>
      <h1 style={{marginTop: '100px'}}>Login page</h1>
      <form>
        <MyInput type='text' placeholder='Enter login'/>
        <MyInput type='password' placeholder='Enter password'/>
        <MyButton>Enter</MyButton>
      </form>
    </div>
  )
}

export default Login