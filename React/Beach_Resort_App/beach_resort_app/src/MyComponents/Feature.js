import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: 'transparent',
    border : '1px solid red',
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



export default function Feature() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} sm ={6} md={4} >
          <div className={classes.paper}>
              <div className = {classes.img_container}>
                  <img className = {classes.bc_img} src = "" alt = "bc_img"/> 
                  <div className = {classes.price_info}>
                      <h6>$ 400</h6>
                      <p>per night</p>
                  </div>
              </div>
              <div className = {classes.room_info}>
                  Double Deluxe
              </div>
                
          </div>
        </Grid>
        <Grid item xs={12} sm ={6} md={4}>
          <div className={classes.paper}>
           
          </div>
        </Grid>
        <Grid item xs={12} sm ={6} md={4}>
          <div className={classes.paper}>
            
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