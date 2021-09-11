import React,{Component} from 'react'
import {withStyles,Typography} from '@material-ui/core';
import {TextField, Button} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SchoolIcon from '@material-ui/icons/School';
import InputAdornment from '@material-ui/core/InputAdornment';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const styles = theme => ({

    margin : {
        margin : theme.spacing(1)
    },
    padding : {
        padding : theme.spacing(1)
    },

})


class Education extends Component{


    render(){

        const {values} = this.props;
        const {classes} = this.props;

        return(
            <Paper className={classes.padding}>
                <Card>
                    <CardHeader title = "Education Details"></CardHeader>
                </Card>
                <CardContent>
                    <div className={classes.margin}>
                        <Grid container spacing={2} alignItems="center" >

                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="college"
                                    label="College/University"
                                    style={{width: '80%'}}
                                    required
                                    value={values.college}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <SchoolIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="startyear1"
                                    label="Start Year"
                                    style={{width: '80%'}}
                                    value={values.startyear1}
                                    onChange={this.props.handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="endyear1"
                                    label="End Year"
                                    style={{alignItems: 'left',width: '80%'}}
                                    
                                    value={values.endyear1}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                       
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="qualification1"
                                    label="Qualification"
                                    required
                                    style={{alignItems: 'left',width: '80%'}}
                                    value={values.qualification1}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={8}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="description1"
                                    label="Description"
                                    style={{alignItems: 'left',width: '80%'}}
                                    value={values.description1}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                        </Grid>    
                            <br />
                                <Divider variant="middle"/>
                            <br />
         
                        <Grid container spacing={2} alignItems="center" >
                            
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="school"
                                    label="School"
                                    style={{width: '80%'}}
                                    required
                                    value={values.school}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <SchoolIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="startyear2"
                                    label="Start Year"
                                    style={{width: '80%'}}
                                    value={values.startyear2}
                                    onChange={this.props.handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="endyear2"
                                    label="End Year"
                                    style={{alignItems: 'left',width: '80%'}}
                                    
                                    value={values.endyear2}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                       
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="qualification2"
                                    label="Qualification"
                                    required
                                    style={{alignItems: 'left',width: '80%'}}
                                    value={values.qualification2}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={8}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="description2"
                                    label="Description"
                                    style={{alignItems: 'left',width: '80%'}}
                                    value={values.description2}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<ArrowBackIosIcon />}
                                    onClick={this.props.prevStep}
                                >
                                    Back
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        endIcon={<ArrowForwardIosIcon />}
                                        onClick={this.props.nextStep}
                                    >
                                    Next
                                </Button>
                            </Grid>



                        </Grid>

                        <Typography component="p" style={{color:'grey'}} className={classes.margin}>
                            Page 2
                        </Typography>

                    </div>
                </CardContent>
            </Paper>


        )


    }







}

export default withStyles (styles) (Education);