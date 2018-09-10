import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import roboto from '../images/robotonew.png';

const borderStyles = {
  borderColor: '#e8e8e8',
  borderWidth: 1,
  borderRadius: 0,
  borderStyle: 'solid',
  backgroundColor: 'white'
};

class HomePage extends Component {
  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <link href="https://fonts.googleapis.com/css?family=Roboto|Poppins|Lato|Montserrat|Oswald|PT+Sans" rel="stylesheet"/>
        <Header/>
        <Grid container  xs={12} sm={6} md={6} lg={6} xl={6} style={{marginTop: 20}}>
          <LeftInfo/>
        </Grid>
        <Grid container  xs={12} sm={6} md={6} lg={6} xl={6} style={{marginTop: 20}}>
          <RightInfo/>
        </Grid>
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

class LeftInfo extends Component {
  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} >
        <Grid item xs={1} sm={2} md={2} lg={2} xl={2}/>
        <Grid container xs={10} sm={9} md={9} lg={9} xl={9}>
          <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: 20}}>
            <Typography variant="body2">
              <div style={{fontSize: 14, color: "#6B756D", fontFamily: "PT Sans"}}>
                Welcome to my web page!
                <br/>
                <br/>
                {"I'm a second year Computer Science student at the University of Toronto, and also co-founder of "}
                <span style={{color: "#6069E6"}}>
                  {"Knowtworthy"}
                </span>
              </div>
            </Typography>
          </Grid>
          <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}  style={{marginBottom: 15}}>
            <img src={roboto} style={{width: 236, height: 225, ...borderStyles}} />
          </Grid>
          <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 14, color: "#6B756D", fontFamily: "PT Sans"}}>
                {"I hope to always be learning and building, in the many fields that interest me!"}
              </div>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
      </Grid>
    );
  }
}

class RightInfo extends Component {
  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} >
        <Grid item xs={1} sm={2} md={2} lg={2} xl={2}/>
        <Grid container xs={10} sm={9} md={9} lg={9} xl={9}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
            <Typography variant="body2">
              <div style={{fontSize: 14, color: "#6069E6", fontFamily: "PT Sans"}}>
                BRIEF HISTORY
              </div>
            </Typography>
            <br/>
            <HistoryBox
              date={"November 2017 - Present"}
              position={"Co-founder and Full Stack Developer"}
              place={"Knowtworthy"}
            />
            <br/>
            <HistoryBox
              date={"January 2018 - April 2018"}
              position={"Web Developer"}
              place={"University of Toronto - Courseography"}
            />
            <br/>
            <HistoryBox
              date={"September 2017 - April 2021"}
              position={"B.Sc. Computer Science Specialist; Mathematics Minor"}
              place={"University of Toronto"}
            />
            <br/>
            <HistoryBox
              date={"January 2016 - August 2017"}
              position={"Teaching Assistant"}
              place={"Kumon Math & Reading Centre"}
            />
          </Grid>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
      </Grid>
    );
  }
}

class HistoryBox extends Component {
  render() {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <Typography variant="body2">
          <div style={{fontSize: 14, color: "#49504A", fontFamily: "PT Sans"}}>
            {this.props.date}
          </div>
          <div style={{fontSize: 14, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
            {this.props.position}
          </div>
          <div style={{fontSize: 14, color: "#6069E6", fontFamily: "PT Sans"}}>
            {this.props.place}
          </div>
        </Typography>
      </Grid>
    );
  }
}

export default HomePage;
