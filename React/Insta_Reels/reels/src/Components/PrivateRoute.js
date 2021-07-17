import React,{useContext} from 'react'
// to redirect if login failed
import { Route,Redirect } from 'react-router';
import { AuthContext } from '../Context/AuthProvider'
// feed wala component me aaya or baaki rest me
function PrivateRoute({component:Component,...rest}) {
    
    const {currentUser} = useContext(AuthContext);
    console.log(currentUser);
    return (
        // if currentUser is not null that is valid then pass Component arg i.e. feed
        <Route {...rest} render={props=>{
            return currentUser?<Component{...props}/>:<Redirect to='/login'/>
        }}/>
    )
}
export default PrivateRoute;