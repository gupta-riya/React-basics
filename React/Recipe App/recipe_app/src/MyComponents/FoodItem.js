import React from 'react'
import {makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Button } from '@material-ui/core';
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
  }
 
}));

export default function FoodItem(props)
{
    
      const classes = useStyles();
      const recipe = props.recipe;
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
                        <Button variant="contained" color="primary" className={classes.recipe_button}>
                          Recipe
                        </Button>
                        <Divider className={classes.divider} light />
                        
                        </CardContent>
                    </Card>
                </div>
          </>
      )
}