import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/Button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>
                Login page
            </h1>
            <form>
                <MyInput type="text" placeholder="Login"/>
                <MyInput type="password" placeholder="Password"/>
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;