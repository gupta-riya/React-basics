import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import {memo} from "react"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  paper: {
    textAlign: 'center',
    color : 'black',
    margin : '1rem 20px',
    minWidth : '300px',
    boxShadow: '2px 5px 3px 0 rgb(0 0 0 / 50%)'
    
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
  },
  img_container : {
      width: '100%',
      height : '90%',
      position:'relative',
      backgroundColor : '#c0c0c0',
      
    '&:hover' : {
        background: 'rgba(0, 0, 0, 0.8)',
        "& $bc_img" : {
            opacity : 0.3,
        },
        "& $price_info" : {
            opacity : 0
        },
        "& $feature_button" : {
            transform : 'scale(1)'
        }
    }
  },
  bc_img : {
      width : '100%',
      height : '100%',
  },
  price_info : {
     width : '50px',
     position : 'absolute',
     top : '0',
     left : '0',
    //  zIndex : '1',
     backgroundColor : 'black',
     color : 'white',
     padding : '5px 10px 5px 5px',
     borderRadius : '0 50% 50% 0',
     display: 'block'
  },
  price : {
    margin : '0rem 0'
  },
  p_ngt : {
    margin : '0rem 0',
    fontSize : '0.6rem'
  },
  room_info : {
      padding : '0.8rem 0',
      fontSize : '1.2rem',
      fontWeight : '700',
      backgroundColor:'#c0c0c0',
     
  },
  feature_button : {
    textDecoration:"none",
    padding: '0.4rem 1rem',
    fontSize: '1.1rem',
    color: 'black',
    border: '3px solid transparent',
    backgroundColor: 'rgb(197, 162, 97)',
    position : 'absolute',
    top: '35%',
    left: '35%',
    translate : '(-35%, -35%)',
    transform:'scale(0)',
    transition: 'all 0.3s linear',

     '&:hover': {
        display: 'inline-block',
        border: '3px solid rgb(197, 162, 97)',
        background: 'transparent',
        color: 'rgb(197, 162, 97)'
     }
}



}));

const Feature = memo(({room})=>{

  const classes = useStyles();
  const rooms = [...room];
  console.log(rooms);

  function FormRow()
  {
    return(
      <React.Fragment>
        
        {
          rooms.map((room)=>{
            return(
            <Grid item sm={12} md ={6} lg={4} >
              <div className={classes.paper}>
                  <div className = {classes.img_container}>
                      <img className = {classes.bc_img} src = {room.images[0]} alt = "bc_img"/> 
                      <div className = {classes.price_info}>
                          <h5 className = {classes.price}>$ {room.price}</h5>
                          <p className = {classes.p_ngt}>per night</p>
                      </div>
                      <Link to={`/rooms/${room.slug}`} className = {classes.feature_button} >FEATURES </Link>
                  </div>
                  <div className = {classes.room_info}>
                      {room.name.toUpperCase()}
                  </div>
                    
              </div>
            </Grid> 
            )     

          })
        }
        
              
        </React.Fragment>
  
    )
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
  
})

export default Feature;






 // function FormRow() {

  //   const data = props.featuredRooms;


  //   return (
  //     <React.Fragment>

  //     {data.map((room) => {

  //       return (
  //           <Grid item sm={12} md ={6} lg={4} >
  //           <div className={classes.paper}>
  //               <div className = {classes.img_container}>
  //                   <img className = {classes.bc_img} src = {room.fields.images[0].fields.file.url} alt = "bc_img"/> 
  //                   <div className = {classes.price_info}>
  //                       <h5 className = {classes.price}>$ {room.fields.price}</h5>
  //                       <p className = {classes.p_ngt}>per night</p>
  //                   </div>
  //                   <button className = {classes.feature_button} onClick = {handleClick(room)}>FEATURES </button>
  //               </div>
  //               <div className = {classes.room_info}>
  //                   {room.fields.name.toUpperCase()}
  //               </div>
                  
  //           </div>
  //         </Grid>
  //       )


  //     })}
  //     </React.Fragment>
  //   );
  // }