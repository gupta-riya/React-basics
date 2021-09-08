import React,{Component} from 'react'
import {withStyles,Typography} from '@material-ui/core';
import {TextField, Button} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import BusinessIcon from '@material-ui/icons/Business';
import ComputerIcon from '@material-ui/icons/Computer';
import TimelapseIcon from '@material-ui/icons/Timelapse';


const styles = theme => ({

    margin : {
        margin : theme.spacing(1)
    },
    padding : {
        padding : theme.spacing(1)
    },

})


class Extras extends Component{


    render(){

        const {values} = this.props;
        const {classes} = this.props;

        return(
            <Paper className={classes.padding}>
                <Card>
                    <CardHeader title = "Extra Details"></CardHeader>
                </Card>
                <CardContent>
                    <div className={classes.margin}>
                        <Grid container spacing={2} alignItems="center" >

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <h4>
                                    <CheckCircleIcon/>
                                    <span className="pl-3">Skills/Languages</span>
                                </h4>                                
                            </Grid>
                            

                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="skill1"
                                    label="Skill 1"
                                    style={{width: '100%'}}
                                    
                                    value={values.skill1}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="skill2"
                                    label="Skill 2"
                                    style={{width: '100%'}}
                                    
                                    value={values.skill2}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>                               
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="skill3"
                                    label="Skill 3"
                                    style={{width: '100%'}}
                                    
                                    value={values.skill3}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="skill4"
                                    label="Skill 4"
                                    style={{width: '100%'}}
                                    
                                    value={values.skill4}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="skill5"
                                    label="Skill 5"
                                    style={{width: '100%'}}
                                    
                                    value={values.skill5}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="skill6"
                                    label="Skill 6"
                                    style={{width: '100%'}}
                                    
                                    value={values.skill6}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            
                            
                        </Grid>


                        <br/>
                        <Divider/>
                        <br/>


                        <Grid container spacing={2} alignItems="center" >

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <h4>
                                    <CheckCircleIcon/>
                                    <span className="pl-3">Interests</span>
                                </h4>                                
                            </Grid>
                            

                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="interest1"
                                    label="Interest 1"
                                    style={{width: '100%'}}
                                    
                                    value={values.interest1}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="interest2"
                                    label="Interest 2"
                                    style={{width: '100%'}}
                                    
                                    value={values.interest2}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>                               
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="interest3"
                                    label="Interest 3"
                                    style={{width: '100%'}}
                                    
                                    value={values.interest3}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="interest4"
                                    label="Interest 4"
                                    style={{width: '100%'}}
                                    
                                    value={values.interest4}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="interest5"
                                    label="Interest 5"
                                    style={{width: '100%'}}
                                    
                                    value={values.interest5}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="interest6"
                                    label="Interest 6"
                                    style={{width: '100%'}}
                                    
                                    value={values.interest6}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            
                            
              
                        
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<ArrowBackIosIcon />}
                                >
                                    Back
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Button
                                        variant="contained"
                                        color="secondary"
                                        disabled
                                        className={classes.button}
                                        endIcon={<ArrowForwardIosIcon />}
                                    >
                                    Next
                                </Button>
                            </Grid>



                        </Grid>

                        <Typography component="p" style={{color:'grey'}} className={classes.margin}>
                            Page 5
                        </Typography>

                    </div>
                </CardContent>
            </Paper>


        )


    }







}

export default withStyles (styles) (Extras);