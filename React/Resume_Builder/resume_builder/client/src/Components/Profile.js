import React,{Component} from 'react'
import {withStyles} from '@material-ui/core';
import {TextField, Button, Container} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import InputAdornment from '@material-ui/core/InputAdornment';


const styles = theme => ({

    margin : {
        margin : theme.spacing.unit*1
    },
    padding : {
        padding : theme.spacing.unit
    },
    
});




class Profile extends Component{

    render(){

        const {values} = this.props;
        const {classes} = this.props;

        return(
            
            
            <Paper className={classes.padding}>
                <Card>
                    <CardHeader title = "Personal Details"></CardHeader>
                </Card>
                <CardContent>
                    <div className={classes.margin}>
                        <Grid container spacing={2} alignItems="center" lg={12}>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="firstname"
                                    label="First Name"
                                    style={{width: '80%'}}
                                    required
                                    value={values.firstname}
                                    onChange={this.props.handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="lastname"
                                    label="Lastt Name"
                                    style={{width: '80%'}}
                                    required
                                    value={values.lastname}
                                    onChange={this.props.handleChange} />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="email"
                                    label="Email"
                                    style={{alignItems: 'left',width: '80%'}}
                                    required
                                    value={values.email}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <EmailIcon/>
                                            </InputAdornment>
                                        )
                                    }}
                                    />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="phone"
                                    label="Phone"
                                    style={{alignItems: 'left',width: '80%'}}
                                    
                                    value={values.phone}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <PhoneIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="website"
                                    label="Your Website"
                                    style={{alignItems: 'left',width: '80%'}}
                                    value={values.website}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <LanguageIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="github"
                                    label="Github"
                                    style={{alignItems: 'left',width: '80%'}}
                                    value={values.github}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <GitHubIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="linkedin"
                                    label="Linked In"
                                    style={{alignItems: 'left',width: '80%'}}
                                    value={values.linkedin}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <LinkedInIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="facebook"
                                    label="facebook"
                                    style={{alignItems: 'left',width: '80%'}}
                                    value={values.faceook}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <FacebookIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="twitter"
                                    label="Twitter"
                                    style={{alignItems: 'left',width: '80%'}}
                                    value={values.twitter}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <TwitterIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6}>
                                <TextField margin="dense"
                                    variant="outlined"
                                    name="instagram"
                                    label="Instagram"
                                    style={{alignItems: 'left',width: '80%'}}
                                    value={values.instagram}
                                    onChange={this.props.handleChange} 
                                    InputProps = {{
                                        endAdornment  : (
                                            <InputAdornment position="end">
                                                <InstagramIcon/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </Grid>
                        </Grid>
                    </div>
                </CardContent>
            </Paper>
        
                
        )

    }
    










}

export default withStyles (styles) (Profile);
