import React from 'react' 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({

    root : {
        padding : theme.spacing(3,2),
        margin: '3rem'
    },
    flex:
    {
        display:"flex"
    },
    topicWindow:{
        width:"30%",
        height:"300px",
        borderRight:"2px solid grey"
    },
    chatWindow:{
        width:"70%",
        height:"300px"
    },
    chatBox:{
        width:"85%"
    },
    button:{
        width:"15%"
    }
}))


export default function Dashboard()
{
    const classes = useStyles();

    return(

        <div>
            <Paper className = {classes.root}>
                <Typography variant="h4" component="h4">
                    Chat App
                </Typography>
                <Typography component="h5">
                    Topic Placeholder
                </Typography>
            </Paper>

            <div className={classes.flex}>
                <div className={classes.topicWindow}>

                </div>
                <div className={classes.chatWindow}>

                </div>
            </div>

            <div className={classes.flex}>
                <div className={classes.chatBox}>

                </div>
                <div className={classes.button}>

                </div>
            </div>
            


        </div>
    )
}