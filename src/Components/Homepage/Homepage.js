import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import roboto from '../../images/sf_img_2.png';
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import LinkedinGrey from '../../svgs/LinkedinGrey.svg';
import LinkedinBlue from '../../svgs/LinkedinBlue.svg';
import GithubGrey from '../../svgs/GithubGrey.svg';
import GithubBlack from '../../svgs/GithubBlack.svg';
import IconButton from '@material-ui/core/IconButton';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import Resume from '../../Sid_Gupta_Resume.pdf'
import EmailIcon from '@material-ui/icons/Email';
import '../styles.css'

function HomePage () {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: 30}}>
        <Grid item xs={1} sm={1} md={3} lg={3} xl={3} style={{backgroundColor: "white"}}/>
        <Grid container xs={11} sm={11} md={6} lg={6} xl={6} style={{backgroundColor: "white"}}>
          <link href="https://fonts.googleapis.com/css?family=Roboto|Poppins|Lato|Montserrat|Oswald|PT+Sans" rel="stylesheet"/>
          {/* <Header text={"Go Raptors!"} fontSize={22} scrollDown={this.props.scrollDown} skillsColor={this.state.skillsColor} courseworkColor={this.state.courseworkColor} resumeColor={this.state.resumeColor} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}/> */}
          <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{backgroundColor: "white", marginTop: 60}}>
            <Grid item xs={1} sm={1} md={3} lg={3} xl={3} style={{backgroundColor: "white"}}/>
            <Grid container xs={11} sm={11} md={6} lg={6} xl={6} style={{backgroundColor: "white"}}/>
              <Grid container xs={12} sm={12} md={6} lg={6} xl={6} style={{backgroundColor: "white"}}>
                <Photo/>
              </Grid>
              <Grid container xs={12} sm={12} md={6} lg={6} xl={6} style={{backgroundColor: "white"}}>
                <Sidebar/>
              </Grid>
            <Grid item xs={1} sm={1} md={3} lg={3} xl={3} style={{backgroundColor: "white"}}/>
          </Grid>
          <Description />
        </Grid>
        <Grid item xs={1} sm={1} md={3} lg={3} xl={3} style={{backgroundColor: "white"}}/>
        <Contact/>
      </Grid>
    );
}

// function HomePage () {
//     return (
//       <div className="pageContainer">
//         <div/>
//         <div>
//           <div className="header">
//             Hello!
//           </div>
//           <div className="menuArea">
//             <div className="leftInfo">
//               <Photo/>
//             </div>
//             <div className="rightInfo">
//               <Sidebar/>
//             </div>
//           </div>
//           <div className="footer">
//             <Contact/>
//           </div>
//         </div>
//         <div/>
//       </div>
//     )
// }


class Contact extends Component {
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
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Header text="Contact" fontSize={24}/>
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
      </Grid>
    )
  }
}

class Description extends Component {
  render() {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: 15, marginTop: 50}}>
        {"Hello, my name is Sid Gupta. I'm a fourth-year student at the University of Toronto studying Computer Science & Math, and I'll be graduating in May 2022."}
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
    );
  }
}

class Photo extends Component {

  render () {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign:"center"}}>
        <img src={roboto} style={{width: 225, height: 225}} />
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
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: -20, marginTop: 25}}>
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
                <div style={{textAlign: "center", fontStyle:"italic", fontSize: this.props.fontSize, color: "#232B98", fontFamily: "PT Sans"}}>
                  {this.props.text}
                </div>
             </Typography> 
            }
        </Grid>
    );
  }
}

class Sidebar extends Component {
  constructor(){
    super();
    this.state = {
      homeColor: "#6B756D",
      researchColor: "#6B756D",
      projectsColor: "#6B756D",
      blogColor: "#6B756D",
      coursesColor: "#6B756D",
      resumeColor: "#6B756D"
    };
  }

  onMouseEnter = (name, color="#232B98") => {
    var newColor = {};
    newColor[name] = color;
    this.setState(newColor);
  }

  onMouseLeave = (name, color="#6069E6") => {
    var newColor = {};
    newColor[name] = color;
    this.setState(newColor);
  }

  render() {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
            <Typography variant="body2">
              <div style={{fontSize: 18, color: this.state.homeColor, fontFamily: "PT Sans", marginBottom:20, textAlign:(isMobile ? "center" : "right")}} onMouseEnter={() => this.onMouseEnter("homeColor")} onMouseLeave={() => this.onMouseLeave("homeColor")}>
                Sid Gupta
              </div>
            </Typography>
            <Typography variant="body2">
              <div style={{fontSize: 18, color: "#6069E6", fontFamily: "PT Sans", marginBottom:20, textAlign:(isMobile ? "center" : "right")}}>
                {"ML research \& projects"}
              </div>
            </Typography>
            <Typography variant="body2">
              <div style={{fontSize: 18, color: "#6069E6", fontFamily: "PT Sans", marginBottom:20, textAlign:(isMobile ? "center" : "right")}}>
                Courses completed
              </div>
            </Typography>
            <Typography variant="body2">
              <div style={{fontSize: 18, color: "#6069E6", fontFamily: "PT Sans", marginBottom:20, textAlign:(isMobile ? "center" : "right")}}>
                Resume
              </div>
            </Typography>
            <br/>
      </Grid>
    );
  }
}

export default HomePage;
