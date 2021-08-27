import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import roboto from '../images/sf_img_2.png';
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import DevpostGrey from '../svgs/DevpostGrey.svg';
import DevpostBlue from '../svgs/DevpostBlue.svg';
import LinkedinGrey from '../svgs/LinkedinGrey.svg';
import LinkedinBlue from '../svgs/LinkedinBlue.svg';
import GithubGrey from '../svgs/GithubGrey.svg';
import GithubBlack from '../svgs/GithubBlack.svg';
import IconButton from '@material-ui/core/IconButton';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import Resume from '../Sid_Gupta_Resume.pdf'
import EmailIcon from '@material-ui/icons/Email';
import { Icon } from '@material-ui/core';

const borderStyles = {
  borderColor: '#e8e8e8',
  borderWidth: 0,
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
      kwColor: "#6069E6",
      hoverIn: false,
      hoverEmail: false
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
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{backgroundColor: "white"}}>
          <link href="https://fonts.googleapis.com/css?family=Roboto|Poppins|Lato|Montserrat|Oswald|PT+Sans" rel="stylesheet"/>
          <Header text="Welcome!" fontSize={32} scrollDown={this.props.scrollDown} skillsColor={this.state.skillsColor} courseworkColor={this.state.courseworkColor} resumeColor={this.state.resumeColor} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}/>
          <Photo/>
          <Description />
        </Grid>
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
          <Header text="Contact" fontSize={24}/>
          <Grid item xs={1} sm={1} md={4} lg={4} xl={4}/>
          <Grid container xs={10} sm={10} md={4} lg={4} xl={4} style={{marginTop: 40}}>
             <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign:"center"}}>
                <IconButton onMouseEnter={() => {this.setState({hoverEmail: true})}} onMouseLeave={() => {this.setState({hoverEmail: false})}} style={{marginRight: 20}}>
                  <a href={'mailto:sid.gupta@mail.utoronto.ca'}>
                    <EmailIcon style={{color: this.state.hoverEmail ? "#1976d2" : "grey", marginBottom: -4}}/>
                  </a>
                </IconButton>
                <IconButton onMouseEnter={() => {this.setState({hoverIn: true})}} onMouseLeave={() => {this.setState({hoverIn: false})}}>
                  <a href={'https://www.linkedin.com/in/sidgupta-99/'} >
                    <img src={(this.state.hoverIn ? LinkedinBlue : LinkedinGrey)} style={{height: 25, width: 25}}  />
                  </a>
                </IconButton>
            </Grid>
          {/* <Header text="Resume" fontSize={24}/> */}
          </Grid>
          <Grid item xs={1} sm={1} md={4} lg={4} xl={4}/>
        </Grid>
      </Grid>
    );
  }
}


class Description extends Component {
  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}/>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}  style={{marginBottom: 15, marginTop: 50}}>
        {"Hello, my name is Sid. I'm a fourth-year student at the University of Toronto, studying Computer Science & Math. I'll be graduating in May 2022, and next semester I'll be applying for M.Sc and PhD programs."}
        <br/><br/>
        {"I've had the good fortune of doing research with "} 
        <a href="https://mrezanejad.github.io/index.html">Morteza Rezanejad</a>
        {" on various computer vision problems, and "}
        <a href="https://mariakakis.github.io">Alex Mariakakis</a>
        {" on machine learning problems in healthcare. "}
        <br/><br/>
        {"Before research, I spent some time working at Intel and Apple as a software engineering intern, and have also TA'd a few first year CS classes (CSC165/110/111)."}
        <br/><br/>
        {"I really enjoy teaching and learning from others. I think I am pretty easy going and approachable, so feel free to reach out using the contacts below 🙂"} 
        <br/><br/>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}/>
    </Grid>
    );
  }
}

class Photo extends Component {

  render () {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={3} sm={3} md={4} lg={4} xl={4}/>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}  style={{textAlign: "center", marginBottom: 15, marginTop: 50}}>
          <img src={roboto} style={{width: 225, height: 225, ...borderStyles}} />
        </Grid>
        <Grid item xs={3} sm={3} md={4} lg={4} xl={4}/>
      </Grid>
    )
  }

}

class  Header extends Component {

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
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: -20, marginTop: 25}}>
          <Grid item xs={3} sm={3} md={4} lg={4} xl={4}/>
          <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
            {this.props.text == "Resume" ?
              <a  href={Resume} style={{textDecoration: "none"}}>
                <Typography variant="display3">
                  <div style={{textAlign: "center", fontSize: this.props.fontSize, fontWeight: this.state.hoverIn ? "bold" : "normal", color: this.state.hoverIn ? "#1a1433" : "#232B98", fontFamily: "PT Sans"}} onMouseEnter={() => this.setState({hoverIn: true})}  onMouseLeave={() => this.setState({hoverIn: false})}>
                    {this.props.text}
                  </div>
                </Typography>
              </a>
              :
              <Typography variant="display3">
                <div style={{textAlign: "center", fontSize: this.props.fontSize, color: "#232B98", fontFamily: "PT Sans"}}>
                  {this.props.text}
                </div>
             </Typography> 
            }
          </Grid>
          <Grid item xs={3} sm={3} md={4} lg={4} xl={4}/>
        </Grid>
    );
  }
}


export default HomePage;
