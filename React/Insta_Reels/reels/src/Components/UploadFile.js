import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
   
  }));



function UploadFile() {

    const classes = useStyles();
    return (
        <div>
            <Button variant="outlined" color="secondary">
                Upload File
            </Button>
        </div>
    )
}

export default UploadFile
