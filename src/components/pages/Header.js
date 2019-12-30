import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(2)
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Company Name</Link>
          </Typography>

          <Typography variant="subtitle1" className={classes.link}>
            <Link to="#">FEATURES</Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.link}>
            <Link to="#">ENTERPRISE</Link>
          </Typography>
          <Typography variant="subtitle1" className={classes.link}>
            <Link to="#">SUPPORT</Link>
          </Typography>

          <Link to="/sign-in">
            <Button color="primary" variant="contained">Login</Button>
          </Link>
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
