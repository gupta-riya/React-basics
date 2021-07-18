import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import LinearProgress  from '@material-ui/core/LinearProgress';
// to make our own unique ids
import {v4 as uuidv4} from 'uuid';
import {storage,database} from '../firebase';

const useStyles = makeStyles((theme) => ({
   
  }));



function UploadFile(props) {

    const classes = useStyles();
    const [loading,setLoading] = useState(false);
    const[error,setError] = useState(null);
    const types = ['video/mp4','video/webm','video/ogg'];
    
    const onChange=(e)=>{
        const file = e.target.files[0];
        if(!file)
        {
            setError('Please select a file');
            setTimeout(()=>{setError(' ')},2000)
            return;
        }

        if(types.indexOf(file.type)===-1)
        {
            setError('Please select a video file');
            setTimeout(()=>{setError(' ')},2000)
            return;
        }

        if(file.size/(1024*1024)>100)
        {
            setError('The selected file is too big');
            setTimeout(()=>{setError(' ')},2000)
            return;
        }

        const id = uuidv4();
        // creating path for video
        const uploadTask = storage.ref(`/posts/${props.userData.userId}/${file.name}`).put(file);
        uploadTask.on('state_changed',fn1,fn2,fn3);

        function fn1(snapshot){

            var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            console.log('Upload is ' + progress + '% done');
        }

        // any errror occured during uploading
        function fn2(error)
        {
            setError(error);
            setTimeout(()=>{
                setError(null)
            },2000);
            setLoading(false);
        }

        
        async function fn3()
        {
            setLoading(true);
            uploadTask.snapshot.ref.getDownloadURL().then(url=>{
                // after we created a url
                // Steps:
                //1. create post object
                let obj={
                    comments:[],
                    likes:[],
                    pId:id,
                    pUrl:url,
                    // question marks stop evaluating successive roperty if one fails
                    uName:props?.userData?.username,
                    uProfile:props?.userData?.profileUrl,
                    userId:props?.userData?.userId,
                    createdAt:database.getCurrentTimeStamp()
                }

                //2. add this obj in post database and this will return a unique id
                database.posts.add(obj).then(async docRef=>{
                    let postId = docRef.id;
                
                    //3. update postId in user database in the file of current user
                    let res = await database.users.doc(props.userData.userId).update({
                        postIds : [...props.userData.postIds,postId]
                    })
                }).then(()=>{
                    setLoading(false)
                }).catch(e=>{
                    setError(e);
                    setTimeout(()=>{
                        setError(null)
                    },2000);
                    setLoading(false);
                })
            })
        }

    }
    
    return (

        <>
        {
            
            error!=null?<Alert severity="error">{error}</Alert>:<>
            <input
            color = 'primary'
            type='file'
            onChange={onChange}
            id='icon-button-file'
            style={{display:'none'}}
            />
            <label htmlFor = 'icon-button-file'>
            <Button disabled={loading} variant="outlined" component='span' className={classes.button} size='medium' color="secondary">
               Upload File
            </Button>
            </label>
            {loading?<LinearProgress color='secondary' style={{marginTop:'6%'}} />:<></>}
            </>
        }
        </>

        // <div>
        //     <Button variant="outlined" color="secondary">
        //         Upload File
        //     </Button>
        // </div>
    )
}

export default UploadFile
