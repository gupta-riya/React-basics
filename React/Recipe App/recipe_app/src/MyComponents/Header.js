import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  
  title: {
    flexGrow: 1,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: 'FreeMono, monospace',
    fontWeight:'bold',
    

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.45),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.50),
    },
    marginLeft: 0,
    width: '30%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#FFD371'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  logo: {
    maxWidth: 50,
    borderRadius : '50%',
    marginRight:'1rem'
  },
  bar: {
      backgroundColor:'black'
  }




}));

export default function Header(props) {
  const classes = useStyles();
 

    return (
    <div className={classes.root}>
      <AppBar position="sticky" className = {classes.bar}>
        <Toolbar>
           <img src="./Images/burger.jpg" alt="logo" className={classes.logo}/>
          <Typography className={classes.title} variant="h6" noWrap>
            RECIPE PLAZA
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              
              onChange = {(e) => props.handleChange(e.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
