import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import roboto from '../images/robotonew.png';
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from  '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const theme = createMuiTheme({
  palette: {
    primary: {main: "#232B98"},
  },
});

const borderStyles = {
  borderColor: '#e8e8e8',
  borderWidth: 1,
  borderRadius: 0,
  borderStyle: 'solid',
  backgroundColor: 'white'
};

class ProjectsPage extends Component {

  render() {
    return (
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{backgroundColor: "#F7F4F4"}}>
          <MuiThemeProvider theme={theme}>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
            <Grid container xs={10} sm={10} md={10} lg={10} xl={10} style={{marginTop: 40}}>
              <Header />
            </Grid>
          </MuiThemeProvider>
        </Grid>
    );
  }
}

class Header extends Component {
  render(){
    return(
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant="display3">
            <div style={{fontSize: 24, color: "#232B98", fontFamily: "PT Sans"}}>
              Highlighted Projects
            </div>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

class Project extends Component {
  render(){
    return(
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        </Grid>
      </Grid>
    );
  }
}



export default ProjectsPage;
