import React from 'react' 
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {ctx} from './Store'



const useStyles = makeStyles(theme => ({

    root : {
        padding : theme.spacing(3,2),
        margin: '3rem'
    },
    flex:
    {
        display:"flex",
        alignItems:'center'
    },
    topicWindow:{
        width:"30%",
        height:"300px",
        borderRight:"2px solid grey"
    },
    chatWindow:{
        width:"70%",
        height:"300px",
        padding:"2rem 2rem"
    },
    chatBox:{
        width:"85%"
    },
    button:{
        width:"15%"
    },
    chip:{
        marginRight:'1rem'
    },
    textField:{
        width:'90%'
    },
    chatItem:{
        marginBottom:'1rem'
    }
}))


export default function Dashboard()
{
    const classes = useStyles();

    // context
    const [allChats] = React.useContext(ctx);
    // console.log({allChats});

    const topics = Object.keys(allChats);
    
    //local state
    const [activeTopic,changeActiveTopic] = React.useState(topics[0]);
    const [textValue, changeTextValue] = React.useState('');

    return(

        <div>
            <Paper className = {classes.root}>
                <Typography variant="h4" component="h4">
                    Chat App
                </Typography>
                <Typography component="h5">
                    {activeTopic}
                </Typography>

                <div className={classes.flex}>
                    <div className={classes.topicWindow}>
                        <List>
                            {
                                topics.map((topic)=>(
                                   
                                        <ListItem onClick = {(e)=>changeActiveTopic(e.target.innerText)}  key={topic} button >
                                            <ListItemText primary={topic} />
                                        </ListItem>
                                    
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            allChats[activeTopic].map((chat,idx)=>(
                            
                                <div className={`${classes.flex} ${classes.chatItem}`}>
                                    <Chip label={chat.from} className={classes.chip} key={idx} />
                                    <Typography varient='body1' gutterBottom>{chat.msg}</Typography>
                                </div>
                                
                                
                            ))
                        }
                    </div>
                </div>

                <div className={classes.flex}>
                    <div className={classes.chatBox}>
                    <TextField id="standard-basic" 
                        label="Send a chat" 
                        className={classes.textField}
                        value={textValue}
                        onChange={(e)=>changeTextValue(e.target.value)}/>
                    </div>
                    <div className={classes.button}>
                    <Button variant="contained" color="primary">
                        Send
                    </Button>
                    </div>
                </div>
            </Paper>

            
            


        </div>
    )
}