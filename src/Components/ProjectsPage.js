import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from  '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import OrionData from '../images/Orion_Data_DP.png';
import Knowtworthy from '../images/Knowtworthy_DP.PNG';
import Sentiment from '../images/Sentiment_DP.png';
import OtherProjects from '../images/Other_Projects_DP.png';


import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";


const theme = createMuiTheme({
  palette: {
    primary: {main: "#232B98"},
  },
});

const borderStyles = {
  borderColor: '#e8e8e8',
  borderWidth: 5,
  borderRadius: 0,
  borderStyle: 'solid',
  backgroundColor: 'white'
};

class ProjectsPage extends Component {

  render() {
    return (
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{backgroundColor: "#F7F4F4"}}>
          <MuiThemeProvider theme={theme}>
              <Projects/>
          </MuiThemeProvider>
        </Grid>
    );
  }
}

class Header extends Component {
  render(){
    return(
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: 50}}>
        <Grid item xs={3} sm={3} md={4} lg={4} xl={4}/>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
          <Typography variant="display3">
            <div style={{textAlign: "center", fontSize: 24, color: "#232B98", fontFamily: "PT Sans"}}>
            {this.props.text}
            </div>
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={4} lg={4} xl={4}/>
      </Grid>
    );
  }
}

class Projects extends Component {
  render(){
    return(
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: 50}}>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6} style={{marginTop: 30}}>
          <img src={Knowtworthy} style={{width: (isMobile ? 300 : 500), height: (isMobile ? 169 : 281), ...borderStyles}} />
        </Grid>
        {isMobile ? <div/> : <Grid item xs={0} sm={12} md={1} lg={1} xl={1}/>}
        <Grid container xs={12} sm={12} md={5} lg={5} xl={5}>
          <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: (isMobile ? 0 : -30)}} >
            <Typography variant="display3">
              <div style={{fontSize: 24, color: "#232B98", fontFamily: "PT Sans"}}>
                Knowtworthy
              </div>
            </Typography>
            <Typography variant="body2">
              <div style={{fontSize: 14, color: "#6B756D", fontFamily: "PT Sans"}}>
                {"Meetings suck, and Knowtworthy's web platform will make yours better. We drive your team to follow best meeting practices by offering a clean template for your minutes and agenda, and action items. We also offer real-time transcription to help the minute-taker with his/her notes. On top of all this is a cloud-based organization system to keep everyone organized and productive."}
                <br/>
                <br/>
                {"Incubated in the University of Toronto's Entrepreneurship Hatchery, and "}
                <span style={{fontWeight: "bold" , color: "black"}}>
                  {"2nd place winner "}
                </span>
                {"in UofT's annual Demo Day, "}
                <span  style={{fontWeight: "bold", color: "black"}}>
                  {"winning $10,000 "}
                </span>
                {"in funding for the project's development"}
                <br/>
                <br/>
                {"Live at "}
                <span>
                  <a href={'https://knowtworthy.com/'} style={{color: "#6069E6"}} >
                  {"https://knowtworthy.com/"}
                  </a>
                </span>
                <br/>
                <span>
                  <a href={'https://www.youtube.com/watch?v=wJ6vX09zXA4&t='} style={{color: "#6069E6"}} >
                  {" See video demo"}
                  </a>
                </span>
              </div>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: 60}}/>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6} style={{marginTop: 30}}>
          <img src={Sentiment} style={{width: (isMobile ? 300 : 500), height: (isMobile ? 169 : 281), ...borderStyles}} />
        </Grid>
        {isMobile ? <div/> : <Grid item xs={0} sm={12} md={1} lg={1} xl={1}/>}
        <Grid container xs={12} sm={12} md={5} lg={5} xl={5}>
          <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: (isMobile ? 0 : 0)}} >
            <Typography variant="display3">
              <div style={{fontSize: 24, color: "#232B98", fontFamily: "PT Sans"}}>
                Sentiment
              </div>
            </Typography>
            <Typography variant="body2">
              <div style={{fontSize: 14, color: "#6B756D", fontFamily: "PT Sans"}}>
                {"By tuning into a conversation’s word choice and speech tones, we can apply linguistic research and present reports for discussion members on their engagement, openness, and team friction levels."}
                <br/>
                <br/>
                {"Built at Hack the 6ix, Toronto's largest summer hackathon, and"}
                <br/>
                <span style={{fontWeight: "bold" , color: "black"}}>
                  {"won 1st place "}
                </span>
                {"after pitching to over 400 people and competing against over 65 submitted projects."}
                <br/>
                <br/>
                <span>
                  <a href={'https://devpost.com/software/knowtworthy-sentiment'} style={{color: "#6069E6"}} >
                  {"Devpost Link"}
                  </a>
                </span>
                <br/>
              </div>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: 60}}/>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6} style={{marginTop: 30}}>
          <img src={OrionData} style={{width: (isMobile ? 300 : 500), height: (isMobile ? 169 : 281), ...borderStyles}} />
        </Grid>
        {isMobile ? <div/> : <Grid item xs={0} sm={12} md={1} lg={1} xl={1}/>}
        <Grid container xs={12} sm={12} md={5} lg={5} xl={5}>
          <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: (isMobile ? 0 : 0)}} >
            <Typography variant="display3">
              <div style={{fontSize: 24, color: "#232B98", fontFamily: "PT Sans"}}>
                Orion Data
              </div>
            </Typography>
            <Typography variant="body2">
              <div style={{fontSize: 14, color: "#6B756D", fontFamily: "PT Sans"}}>
                {"We analyze the facial emotion of a user when watching a video, and can both recommend new videos for the viewer, as well as show the content creator how his/her audience feels when watching so that they can improve."}
                <br/>
                <br/>
                <span>
                  <a href={'https://www.youtube.com/watch?v=9DR7a-3mZPk&feature=youtu.be'} style={{color: "#6069E6"}} >
                  {"See video demo"}
                  </a>
                </span>
                <br/>
                <span>
                  <a href={'https://github.com/gupta-sid/Orion-Data'} style={{color: "#6069E6"}} >
                  {"Github Repository"}
                  </a>
                </span>
              </div>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: 60}}/>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6} style={{marginTop: 30}}>
          <img src={OtherProjects} style={{width: (isMobile ? 300 : 500), height: (isMobile ? 169 : 281), ...borderStyles}} />
        </Grid>
        {isMobile ? <div/> : <Grid item xs={0} sm={12} md={1} lg={1} xl={1}/>}
        <Grid container xs={12} sm={12} md={5} lg={5} xl={5}>
          <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: (isMobile ? 0 : 0)}} >
            <Typography variant="display3">
              <div style={{fontSize: 24, color: "#232B98", fontFamily: "PT Sans"}}>
                Hackathons, Games, and many more
              </div>
            </Typography>
            <Typography variant="body2">
              <div style={{fontSize: 14, color: "#6B756D", fontFamily: "PT Sans"}}>
                {"Be it hackathon, prototype, or long term project, I'm always excited to build cool, innovative ideas using code."}
                <br/>
                {"I've built 25+ software projects across 3+ years of coding, with many more to come!"}
                <br/>
                <br/>
                <span>
                  <a href={'https://www.youtube.com/watch?v=9DR7a-3mZPk&list=PLQt0f5nIHYhZYocbkFOjllZ-wASq9jwm9'} style={{color: "#6069E6"}} >
                  {"Video playlist of project demos"}
                  </a>
                </span>
                <br/>
                <span>
                  <a href={'https://github.com/gupta-sid'} style={{color: "#6069E6"}} >
                  {"Github repositories"}
                  </a>
                </span>
              </div>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}



export default ProjectsPage;
