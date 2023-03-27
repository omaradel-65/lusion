import React , {useState , useEffect} from 'react';
import firebase from './fire';
import Login from './Login';
import Hero from './Hero';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {AiOutlineUser} from "react-icons/ai";

const Signin = () =>{
    
 const [ user , setUser]= useState('');
 const [ email , setEmail]= useState('');
 const [ password , setPassword]= useState('');
 const [ emailError , setEmailError]= useState('');
 const [ passwordError , setPasswordError]= useState('');
 const [ hasAccount , setHasAccount]= useState(false);

 const [modal, setModal] = useState(false);

 const toggle1 = () => setModal(!modal);

 
 
 const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
 }
 const handleLogin=()=>{
    clearErrors();
firebase
    .auth()
    .signInWithEmailAndPassword(email , password)
    .catch(err => {
        switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
    });
 };
 const handleSignup=()=>{
    clearErrors();
firebase
    .auth()
    .createUserWithEmailAndPassword(email , password)
    .catch(err => {
        switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
      
            setEmailError(err.message);
            break;
            case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
    });


 }
 const handleLogout = () => {
    firebase.auth().signOut();
 }
 const authListener = () => {
firebase.auth().onAuthStateChanged(user=>{
        if(user){
           
            setUser(user);
        }else{
            setUser('');
        }
    });
     }
     useEffect(() => {
        authListener();
     }, [])
return(

<div>
    
{user? (
    <div className="outtt">
        <div className="emailsigned">
  <AiOutlineUser className="iconndm" onClick={toggle1}/>

          <h5 > {email}</h5>
          </div>
    <Modal isOpen={modal} toggle={toggle1}>
<ModalBody>
<h2> {email}</h2>

        <Hero handleLogout={handleLogout} email={email} />





  </ModalBody>

      </Modal>
    </div>
):(
    
    <div className="signinnn">
           <AiOutlineUser className="iconndm" onClick={toggle1}/>
          <Modal isOpen={modal} toggle={toggle1}>
        <ModalBody>

        <Login email={email} 
setEmail={setEmail}
 password={password}
 setPassword={setPassword} 
handleLogin={handleLogin}
handleSignup={handleSignup}
hasAccount={hasAccount}
setHasAccount={setHasAccount}
emailError={emailError}
passwordError={passwordError}
/>




  </ModalBody>

      </Modal>

</div>
)

}




</div>


)



}
export default Signin;