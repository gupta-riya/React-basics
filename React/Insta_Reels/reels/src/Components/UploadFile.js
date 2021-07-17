import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import LinearProgress  from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
   
  }));



function UploadFile() {

    const classes = useStyles();
    const [loading,setLoading] = useState(false);
    const[error,setError] = useState(null);
    const types = ['video/mp4','video/webm','video/ogg'];
    return (

        <>
        {
            
            error!=null?<Alert severity="error">{error}</Alert>:<>
            <input
            color = 'primary'
            type='file'
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
