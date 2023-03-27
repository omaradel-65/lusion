import React from 'react';
const Login = (props) => {
const  {email , password ,setEmail ,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError}=props;
return(
<div>
<div className="formmmmmmmm">
<h3>Login</h3>        

    <input type="text" placeholder="Email address*" autoFocus required value={email} onChange={e=>setEmail(e.target.value)}   />
<p>{emailError}</p>
    <input type="password" placeholder="Password*" autoFocus required value={password} onChange={e=>setPassword(e.target.value)}   />
<p>{passwordError}</p>

{hasAccount? (
<div>
    <button className="signinbtn" onClick={handleLogin}>Log in</button>
    <p  className="pppsign">Don't have <span className="imppp" onClick={()=>setHasAccount(!hasAccount)}>sign up</span></p>
    </div>):(
    <div>
        <button className="signupbtn" onClick={handleSignup}>Register</button>
        <p className="pppsign">have an account <span  className="imppp" onClick={()=>setHasAccount(!hasAccount)}>sign in</span></p>
        </div>)}
</div>

</div>


)


}
export default Login;