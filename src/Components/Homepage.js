import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import roboto from '../robotonew.png';

class HomePage extends Component {
  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
      <link href="https://fonts.googleapis.com/css?family=Lato|Montserrat|Oswald|PT+Sans" rel="stylesheet"/>
        <Header/>
      </Grid>
    );
  }
}


class Header extends Component {
  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        {/* My name */}
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: -20, marginTop: 25}}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
          <Grid item xs={10} sm={10} md={4} lg={4} xl={4}>
            <Typography variant="display3">
              <div style={{fontSize: 54, color: "#232B98", fontFamily: "PT Sans"}}>
                Sid Gupta
              </div>
            </Typography>
          </Grid>
          <Grid item xs={1} sm={7} md={7} lg={7} xl={7}/>
        </Grid>
        {/* headlines */}
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
          <Grid item xs={10} sm={10} md={3} lg={3} xl={3}>
            <Typography variant="display3">
              <div style={{fontSize: 24, color: "#6B756D", fontFamily: "PT Sans"}}>
                Full-stack developer
              </div>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            {/* logos */}
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
          {/* quick access buttons */}
          <Grid container xs={11} sm={11} md={5} lg={5} xl={5}>
            <Grid item xs={12} sm={10} md={4} lg={4} xl={4}>
              <Typography variant="display3">
                <div style={{fontSize: 18, color: "#6B756D", fontFamily: "PT Sans"}}>
                  Skills & Projects
                </div>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={4} lg={4} xl={4}>
              <Typography variant="display3">
                <div style={{fontSize: 18, color: "#6B756D", fontFamily: "PT Sans"}}>
                  Coursework
                </div>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={4} lg={4} xl={4}>
              <Typography variant="display3">
                <div style={{fontSize: 18, color: "#6B756D", fontFamily: "PT Sans"}}>
                  Resume
                </div>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

/*class LeftInfo extends Component {
  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
        <Grid container xs={10} sm={10} md={4} lg={4} xl={4}>
          <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="display3">
              <div style={{fontSize: 14, color: "#6B756D", fontFamily: "PT Sans"}}>
                Welcome to my web page!
                <br/>
                {"I'm a second year Computer Science student at the University of Toronto, and also co-founder of "}
                <div style={{color: "#6069E6"}}>
                  {"Knowtworthy"}
                </div>
              </div>
            </Typography>
          </Grid>
          <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
            <img src={roboto} style={{width: 405, height: 385}} />
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
      </Grid>
    );
  }
}*/

export default HomePage;
