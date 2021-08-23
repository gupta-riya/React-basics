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
    border : '1px solid red' 
  },
  service_icon : {
      color :' rgb(177, 126, 33)',
      fontSize : '2.2rem'
  }
}));

// rgb(197, 162, 97);

export default function Services() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <div className={classes.paper}>
                <LocalBarIcon className={classes.service_icon} />
                <div>Free Cocktails</div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.paper}>
            <FastfoodIcon className={classes.service_icon} />
            <div>Unlimited Food</div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.paper}>
            <AirportShuttleIcon className={classes.service_icon} />
            <div>Free Shuttle</div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.paper}>
            <EmojiPeopleIcon className={classes.service_icon} />
            <div>Endless Hiking</div>
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