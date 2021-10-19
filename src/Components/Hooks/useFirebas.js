import { useEffect, useState } from "react"
import initializeAuthentication from "../../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const[emailLoging, setEmailLogin] = useState('')


    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();



    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
         
    }

    const signInUsingGithub =() => {
       return signInWithPopup(auth, githubProvider)
        
        
    }



  const handleEmailLogin =e =>{
      setEmailLogin(e.target.value)
  }
  const handlePasswordLogin =e =>{
      setEmailLogin(e.target.value)
  }

  const handleEmailPassLogin = () => {
    signInWithEmailAndPassword(auth, emailLoging, setEmailLogin)
    .then((userCredential) => {
      // Signed in 
      user(userCredential.user);
      // ...
    })
    .catch((error) => {
      setError(error.message);
    });
  }
  

    const handleEmailChange= e=>{
        setUserEmail(e.target.value)
    }
    const handlePasswordChange= e=>{
        setUserPass(e.target.value)
    }

    const handleUsingEmail = e => {
        // console.log(email, passowrd)
       createUserWithEmailAndPassword(auth, userEmail, userPass)
       .then(result => {
           user(result.user)
       })
       .catch(error =>{
           setError(error.message)
       })
        
        
    }

    const logout = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
    },[auth])
    return {
        signInUsingGoogle,
        user,
        error,
        logout,
        signInUsingGithub,
        handleUsingEmail,
        handleEmailChange,
        handlePasswordChange,
        handleEmailLogin,
        handlePasswordLogin,
        handleEmailPassLogin

    }
}
export default useFirebase;