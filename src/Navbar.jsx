import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/" style={{color:"white",textDecoration:"none"}}>Basic Banking System</NavLink>
          </Typography>
          <Button color="inherit">
            <NavLink to="/customer" exact style={{color:"white",textDecoration:"none"}}>Customer List</NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/customer" exact style={{color:"white",textDecoration:"none"}}>Transanctions</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

