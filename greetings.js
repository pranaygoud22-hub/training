import React from "react";

function Greeting({isLoggedIn}){
    if(isLoggedIn){
        return <h1>Welcome Back!</h1>
    }else{
        return<h1>Please Login</h1>
    }
}
export default Greeting;