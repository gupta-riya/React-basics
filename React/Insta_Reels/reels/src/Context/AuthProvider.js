import React,{useState,useContext,useEffect} from 'react'
import {auth} from '../firebase'

export const AuthContext = React.createContext();



// children======>  <component>Anything between this will get attached to props.children</component>
function AuthProvider({children}) {
    
    const[currentUser,setCurrentUser] = useState();
    const[loading,setLoading] = useState(true);

    function signup(email,password)
    {
        // this returns a promise
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email,password)
    {
        return auth.signInWithEmailAndPassword(email,password);
    }
    
    function logout()
    {
        return auth.signOut();
    }

    useEffect(()=>{

        // first main return will go but will ot render as !loading = false and also auth will give null user as no one is logged in
        // but after any login, signup or any thing this useEffect will be called and then auth functions
        //any user related change like signup, login , logout , etc will call this function
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const value = {
        currentUser,
        login,
        signup,
        logout
    }

    return (
       <AuthContext.Provider value = {value}>
           {/* return this only when loading is false and children is present */}
           {!loading && children}
       </AuthContext.Provider>
    )
}

export default AuthProvider
