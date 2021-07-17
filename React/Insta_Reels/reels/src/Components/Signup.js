import React,{useEffect,useState,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../Context/AuthProvider';
import { storage,database } from '../firebase';
function Signup() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const {signup,currentUser} = useContext(AuthContext);
    const [file,setFile] = useState(null);
    const history = useHistory();
    // console.log(signup);
    const handleSignup = async (e) =>{
        e.preventDefault();
        
    try{
        setLoading(true);
        let res = await signup(email,password);
        let uid = res.user.uid ;
        // console.log(uid);
        // create user id document and a profileImage folder in it where put the uploaded profile picture
        const uploadTaskListener = storage.ref(`/users/${uid}/profileImage`).put(file);
        // fn1 -> progress tracking
        // fn2 -> error
        // fn3 -> success
        uploadTaskListener.on('state_changed',fn1,fn2,fn3);
        
        // use to show how much your file is upload or current progress
        function fn1(snapshot){

            var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log('Upload is ' + progress + '% done');
        }

        // any errror occured during uploading
        function fn2(error)
        {
            setError(error);
            setTimeout(()=>{
                setError('')
            },2000);
            setLoading(false);
        }

        // promise return function that downloads url of the image
        async function fn3()
        {

            // Add a new document in collection "cities" with id "LA"
            // db.collection("cities").doc("LA").set({
            //     name: "Los Angeles",
            //     state: "CA",
            //     country: "USA"
            // })
            let downloadUrl = await uploadTaskListener.snapshot.ref.getDownloadURL();
            // console.log(downloadUrl);
           await database.users.doc(uid).set({
                email:email,
                userId:uid,
                username:name,
                createdAt:database.getCurrentTimeStamp(),
                profileUrl: downloadUrl,
                postIds:[]
            })

            setLoading(false);
            console.log('User has signed Up');
            history.push('/');
            setEmail('');
            setPassword('');
            setName('');
            setFile(null);
        }
        
        
    }
    catch(err){
        setError(error);
        setTimeout(()=>
        setError(''),2000);
        setLoading(false);
    }
       

    }

    // for setting up profile picture at time of signup
   const handleFileSubmit = (e)=>{

        let file = e.target.files[0];   // as files is an arrya
        //console.log(file);
        if(file != null)
        {
            setFile(file);
        }

   }

   useEffect(()=>{
       if(currentUser)
       {
           history.push('/')
       }
   },[])

    return (
        <div>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor=''>UserName</label>
                    <input type = 'text' value = {name} onChange = {(e) => setName(e.target.value)}/>
                </div>
                
                <div>
                    <label htmlFor=''>Email</label>
                    <input type = 'email' value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor=''>Password</label>
                    <input type = 'password' value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor='profile'>Profile Image</label>
                    <input type='file' accept='image/*' onChange={handleFileSubmit}/>
                </div>
                <button type = 'submit' disabled={loading}>Login</button>
            </form>
        </div>
    )
}

export default Signup
