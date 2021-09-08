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


class Experience extends Component{


    render(){

        const {values} = this.props;
        const {classes} = this.props;

        return(
            <Paper className={classes.padding}>
                <Card>
                    <CardHeader title = "Experience Details"></CardHeader>
                </Card>
                <CardContent>
                    <div className={classes.margin}>
                        <Grid container spacing={2} alignItems="center" >

                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <h4>
                                    <CheckCircleIcon/>
                                    <span className="pd-3">Experience 1</span>
                                </h4>                                
                            </Grid>
                            <Grid item sm={false}  lg={8}/>
                               
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="institute1"
                                    label="Institute/Organization"
                                    style={{width: '100%'}}
                                    required
                                    value={values.institute1}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <BusinessIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="position1"
                                    label="Position"
                                    style={{width: '100%'}}
                                    required
                                    value={values.position1}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <BusinessIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="duration1"
                                    label="Duration"
                                    style={{width: '100%'}}
                                    required
                                    value={values.duration1}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <TimelapseIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="edescription1"
                                    label="Description"
                                    style={{width: '100%'}}
                                    required
                                    value={values.edescription1}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                        </Grid>


                        <br/>
                        <Divider/>
                        <br/>


                        <Grid container spacing={2} alignItems="center" >

                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <h4>
                                    <CheckCircleIcon/>
                                    <span className="pd-3">Experience 2</span>
                                </h4>                                
                            </Grid>
                            <Grid item sm={false}  lg={8}/>

                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="institute2"
                                    label="Institute/Organization"
                                    style={{width: '100%'}}
                                    required
                                    value={values.institute2}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <BusinessIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="position2"
                                    label="Position"
                                    style={{width: '100%'}}
                                    required
                                    value={values.position2}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <ComputerIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="duration2"
                                    label="Duration"
                                    style={{width: '100%'}}
                                    required
                                    value={values.duration2}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <TimelapseIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="edescription2"
                                    label="Description"
                                    style={{width: '100%'}}
                                    required
                                    value={values.edescription2}
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
                                        className={classes.button}
                                        endIcon={<ArrowForwardIosIcon />}
                                    >
                                    Next
                                </Button>
                            </Grid>



                        </Grid>

                        <Typography component="p" style={{color:'grey'}} className={classes.margin}>
                            Page 4
                        </Typography>

                    </div>
                </CardContent>
            </Paper>


        )


    }







}

export default withStyles (styles) (Experience);