import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import roboto from '../images/robotonew.png';
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import DevpostGrey from '../svgs/DevpostGrey.svg';
import DevpostBlue from '../svgs/DevpostBlue.svg';
import LinkedinGrey from '../svgs/LinkedinGrey.svg';
import LinkedinBlue from '../svgs/LinkedinBlue.svg';
import GithubGrey from '../svgs/GithubGrey.svg';
import GithubBlack from '../svgs/GithubBlack.svg';
import IconButton from '@material-ui/core/IconButton';

const borderStyles = {
  borderColor: '#e8e8e8',
  borderWidth: 1,
  borderRadius: 0,
  borderStyle: 'solid',
  backgroundColor: 'white'
};

class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      skillsColor: "#6B756D",
      courseworkColor: "#6B756D",
      resumeColor: "#6B756D",
      kwColor: "#6069E6"
    }
  }

  onMouseEnter = (name, color="#232B98") => {
    var newColor = {};
    newColor[name] = color;
    this.setState(newColor);
  }

  onMouseLeave = (name, color="#6B756D") => {
    var newColor = {};
    newColor[name] = color;
    this.setState(newColor);
  }

  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: 30}}>
        <link href="https://fonts.googleapis.com/css?family=Roboto|Poppins|Lato|Montserrat|Oswald|PT+Sans" rel="stylesheet"/>
        <Header skillsColor={this.state.skillsColor} courseworkColor={this.state.courseworkColor} resumeColor={this.state.resumeColor} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}/>
        <Grid container  xs={12} sm={6} md={6} lg={6} xl={6} style={{marginTop: 10}}>
          <LeftInfo color={this.state.kwColor} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}/>
        </Grid>
        <Grid container  xs={12} sm={6} md={6} lg={6} xl={6} style={{marginTop: 10}}>
          <RightInfo/>
        </Grid>
      </Grid>
    );
  }
}


class Header extends Component {

  constructor(){
    super();
    this.state = {
      hoverGit: false,
      hoverIn: false,
      hoverDev: false
    };
  }

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
          <Grid item xs={10} sm={10} md={2} lg={2} xl={2}>
            <Typography variant="display3">
              <div style={{fontSize: 24, color: "#6B756D", fontFamily: "PT Sans"}}>
                Software Developer
              </div>
            </Typography>
          </Grid>
          <Grid container xs={12} sm={12} md={2} lg={2} xl={2} style={{marginTop: 25}}>
            {/* logos */}
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
            <Grid item xs={2} sm={1} md={3} lg={3} xl={3} style={{marginTop: 1}}>
              <IconButton style={{height: 25, width: 25}}>
                <img src={(this.state.hoverDev ? DevpostBlue : DevpostGrey)} style={{height: 25, width: 25}} onMouseEnter={() => {this.setState({hoverDev: true})}} onMouseLeave={() => {this.setState({hoverDev: false})}}/>
              </IconButton>
            </Grid>
            <Grid item xs={2} sm={1} md={3} lg={3} xl={3}>
              <IconButton style={{height: 25, width: 25}}>
                <img src={(this.state.hoverIn ? LinkedinBlue : LinkedinGrey)} style={{height: 25, width: 25}}  onMouseEnter={() => {this.setState({hoverIn: true})}} onMouseLeave={() => {this.setState({hoverIn: false})}}/>
              </IconButton>
            </Grid>
            <Grid item xs={2} sm={1} md={3} lg={3} xl={3}>
              <IconButton style={{height: 25, width: 25}}>
                <img src={(this.state.hoverGit ? GithubBlack : GithubGrey)}  style={{height: 25, width: 25}} onMouseEnter={() => {this.setState({hoverGit: true})}} onMouseLeave={() => {this.setState({hoverGit: false})}}/>
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={1} sm={1} md={2} lg={2} xl={2}/>
          {/* quick access buttons */}
          <Grid container xs={11} sm={11} md={5} lg={5} xl={5}>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <Typography variant="display3">
                <div style={{fontSize: 18, color: this.props.skillsColor, fontFamily: "PT Sans"}} onMouseEnter={() => {this.props.onMouseEnter("skillsColor")}} onMouseLeave={() => {this.props.onMouseLeave("skillsColor")}} onClick={() => {console.log("asdf")}}>
                  Skills & Projects
                </div>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <Typography variant="display3">
                <div style={{fontSize: 18, color: this.props.courseworkColor, fontFamily: "PT Sans"}} onMouseEnter={() => {this.props.onMouseEnter("courseworkColor")}} onMouseLeave={() => {this.props.onMouseLeave("courseworkColor")}}  onClick={() => {}}>
                  Coursework
                </div>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <Typography variant="display3">
                <div style={{fontSize: 18, color: this.props.resumeColor, fontFamily: "PT Sans"}} onMouseEnter={() => {this.props.onMouseEnter("resumeColor")}} onMouseLeave={() => {this.props.onMouseLeave("resumeColor")}}  onClick={() => {}}>
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

  constructor(){
    super();
    this.state = {
      directToKW: false
    }
  }


  render() {
    if(this.state.directToKW){
      return(
        () => window.location = 'https://knowtworthy.com/'
      );
    }

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
                <span onMouseEnter={() => {this.props.onMouseEnter("kwColor")}} onMouseLeave={() => {this.props.onMouseLeave("kwColor", "#6069E6")}} >
                  <a href={'https://knowtworthy.com/'} style={{color: this.props.color}} >
                  {"Knowtworthy:"}
                  </a>
                </span>
                {" a web-based meetings productivity tool."}
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
