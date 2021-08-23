import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: 'transparent',
    color : 'black'
  },
  service_icon : {
      color :' rgb(177, 126, 33)',
      fontSize : '2.2rem',
      
  },
  title : {
    fontSize : '1.5rem',
    margin : '1rem 0',
    fontWeight : '500'
  },
  desc : {
    fontSize :'1rem',
    padding : '0 1rem'
  }
}));



export default function Services() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} sm ={6} md={3} >
          <div className={classes.paper}>
                <LocalBarIcon className={classes.service_icon} />
                <p className = {classes.title}>Free Cocktails</p>
                <p className = {classes.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?</p>
          </div>
        </Grid>
        <Grid item xs={12} sm ={6} md={3}>
          <div className={classes.paper}>
            <FastfoodIcon className={classes.service_icon} />
            <p className = {classes.title}>Unlimited Food</p>
            <p className = {classes.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?</p>
          </div>
        </Grid>
        <Grid item xs={12} sm ={6} md={3}>
          <div className={classes.paper}>
            <AirportShuttleIcon className={classes.service_icon} />
            <p className = {classes.title}>Free Shuttle</p>
            <p className = {classes.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?</p>
          </div>
        </Grid>
        <Grid item xs={12} sm ={6} md={3}>
          <div className={classes.paper}>
            <EmojiPeopleIcon className={classes.service_icon} />
            <p className = {classes.title}>Endless Hiking</p>
            <p className = {classes.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?</p>
          </div>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}