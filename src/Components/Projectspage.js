import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import roboto from '../images/robotonew.png';
import { Switch, Route, Router, Redirect } from 'react-router-dom'

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
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{height: 300, backgroundColor: "#F7F4F4"}}>
      </Grid>
    );
  }
}

export default ProjectsPage;
