
import React,{Component} from 'react'
import {withStyles,Typography} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import {TextField, Button} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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


class Project extends Component{

    
    render(){
        
        const {values} = this.props;
        const {classes} = this.props;

        return(

            <Paper className={classes.padding}>
                <Card>
                    <CardHeader title = "Project Details"></CardHeader>
                </Card>
                <CardContent>
                    <div className={classes.margin}>
                        <Grid container spacing={2} alignItems="center" lg={12}>

                            <Grid item xs={12} lg={12}>
                                <h5>Project 1</h5>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="title1"
                                    label="Title"
                                    style={{width: '80%'}}
                                    required
                                    value={values.title1}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="link1"
                                    label="Link"
                                    style={{width: '80%'}}
                                    required
                                    value={values.link1}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <LinkIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="pdescription1"
                                    label="Description"
                                    style={{width: '80%'}}
                                    required
                                    value={values.pdescription1}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                        </Grid>

                        <br />
                            <Divider variant="middle"/>
                        <br />

                        <Grid container spacing={2} alignItems="center" lg={12}>
                            <Grid item xs={12} lg={12}>
                                <h5>Project 2</h5>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="title2"
                                    label="Title"
                                    style={{width: '80%'}}
                                    required
                                    value={values.title2}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="link2"
                                    label="Link"
                                    style={{width: '80%'}}
                                    required
                                    value={values.link2}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <LinkIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="pdescription2"
                                    label="Description"
                                    style={{width: '80%'}}
                                    required
                                    value={values.pdescription2}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                        </Grid>
                        
                        <br />
                            <Divider variant="middle"/>
                        <br />

                        <Grid container spacing={2} alignItems="center" lg={12}>
                            <Grid item xs={12} lg={12}>
                                <h5>Project 3</h5>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="title3"
                                    label="Title"
                                    style={{width: '80%'}}
                                    
                                    value={values.title3}
                                    onChange={this.props.handleChange} 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="link3"
                                    label="Link"
                                    style={{width: '80%'}}
                                    
                                    value={values.link3}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <LinkIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="pdescription3"
                                    label="Description"
                                    style={{width: '80%'}}
                                    
                                    value={values.pdescription3}
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
                            Page 3
                        </Typography>

                    </div>
                </CardContent>
            </Paper>


        )



    }




}

export default withStyles (styles) (Project)