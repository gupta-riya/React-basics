import React from 'react'
import FoodItem from './FoodItem'
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {recipeData} from './recipeData'
// import { Hidden } from '@material-ui/core';
import Header from './Header'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
      maxWidth: '100vw',
      overflow : 'hidden ',
      marginBottom: theme.spacing(3)
      
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    
  }));


function FoodLayout() {
    const classes = useStyles();
    const [filterData,setRecipe]  = React.useState([...recipeData])


    const handleChange = (value) => {

      console.log(value);
      value = value.toLowerCase();
      let filterAns = recipeData.filter((data)=>{

        return data.name.toLowerCase().includes(value);

      })

      setRecipe(filterAns);

    }

    return (

      <>

        {<Header handleChange = {(value) => handleChange(value)}/>}

        
        <div className={classes.root}>


            
            <Grid container spacing={3}>

            {
                filterData.map((recipe)=>{

                  return  (
                              <Grid item xs={12} sm={6} md={4}>
                                <FoodItem recipe = {recipe} className={classes.paper}/>
                              </Grid>
                        )
                })
            }
            


            </Grid>
        </div>

        </>
    )
}

export default FoodLayout
