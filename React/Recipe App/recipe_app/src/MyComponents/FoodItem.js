import React from 'react'
import {makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
// import { recipeData } from './recipeData';

const useStyles = makeStyles((muiBaseTheme) => ({ 
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "center",
    padding: muiBaseTheme.spacing(1) 
  },
  divider: {
    margin: `${muiBaseTheme.spacing(1)}px 0 ${muiBaseTheme.spacing(0.1)}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  recipe_button:{
    backgroundColor:"#ffeaa9",
    color:"#725700",
    "&:hover":{
      backgroundColor:"#ffdb68"
    },
    padding: `${muiBaseTheme.spacing(0.5)}px ${muiBaseTheme.spacing(1)}px` 
  },
  paper: {
    position: 'absolute',
    width: 400,
    maxHeight: '80vh',
    left: '50%',
    top: '40%',
    transform: `translate(-50%, -40%)`,
    backgroundColor: 'whitesmoke',
    boxShadow: muiBaseTheme.shadows[5],
    padding: muiBaseTheme.spacing(2, 4, 3),
    overflow: 'auto'
  },
  modal_title : {
    
  },
  proc_item_button : {
    
    color : '#8e969e',
    fontSize : '1rem',
    marginRight : '5rem'
  },

  active : {
    color : '#fedc56',
    fontSize : '1rem',
    marginRight : '5rem'
  },
  
  special_bullet : {
    color : '#be5504'
  },
  li_text : {
    color : 'black'
  }



   
    
 
}));

export default function FoodItem(props)
{
    
      const classes = useStyles();
      const recipe = props.recipe;
      const [open,setOpen] = React.useState(false);
      const [bgIngButton,setIngActive] = React.useState(classes.active);
      const [bgProcButton,setProcActive] = React.useState(classes.proc_item_button);
      const [content,setContent] = React.useState(recipe.ingredients);


      const handleOpen = () => {
        setOpen(true);
      }

      const handleClose = () => {
        setOpen(false);
      }

      const handleRecipe = (e) => {

        let id = e.target.parentNode.getAttribute("id");
        
        if(id === '1')
        {
          setIngActive(classes.active);
          setProcActive(classes.proc_item_button);
          setContent(recipe.ingredients);
        }
        else
        {
          setProcActive(classes.active);
          setIngActive(classes.proc_item_button);
          setContent(recipe.procedure);
        }



      }

      const body = (
        <div className={classes.paper}>
          <h2 id="simple-modal-title" className = {classes.modal_title}>{recipe.name}</h2>
          <div className = {classes.proc_buttons}>
            <Button className = {bgIngButton} id = '1' onClick = {handleRecipe}>Ingredients</Button>
            <Button className = {bgProcButton} id = '2' onClick = {handleRecipe}>Procedure</Button>
          </div>
          
            <ul className = {classes.special_bullet} >
              {
                content.map((cont) => {
                  return <li><span className = {classes.li_text}>{cont}</span></li>
                })
              }
            </ul>
         
          
        </div>
      );


      return(
      
          <>
            <div className="App">
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.media}
                        image={
                            recipe.img
                        }
                        />
                        <CardContent className={classes.content}>
                        <Typography
                            className={"MuiTypography--heading"}
                            variant={"h6"}
                            gutterBottom
                        >
                            {recipe.name}
                        </Typography>
                        <Button variant="contained" color="primary" className={classes.recipe_button} onClick={handleOpen}>
                          Recipe
                        </Button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="simple-modal-title"
                          aria-describedby="simple-modal-description"
                        >
                          {body}
                        </Modal>
                        <Divider className={classes.divider} light />
                        
                        </CardContent>
                    </Card>
                </div>
          </>
      )
}


