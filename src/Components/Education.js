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
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

const borderStyles = {
  borderColor: '#e8e8e8',
  borderWidth: 1,
  borderRadius: 0,
  borderStyle: 'solid',
  backgroundColor: 'white'
};

class EducationPage extends Component {
  constructor(){
    super();
    this.state = {
    };
    this.coursesRef = React.createRef();
  }

  componentDidMount = () => {
    this.props.setCoursesRef(this.coursesRef.current);
  }

  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{backgroundColor: "white"}} ref={this.coursesRef}>
        <link href="https://fonts.googleapis.com/css?family=Roboto|Poppins|Lato|Montserrat|Oswald|PT+Sans" rel="stylesheet"/>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: 30}} />
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
        <Grid container xs={10} sm={10} md={10} lg={10} xl={10} >
          <Header />
          <CourseList />
        </Grid>
      </Grid>
    );
  }
}


class Header extends Component {

  constructor(){
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: -15}}>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Typography variant="display3">
            <div style={{fontSize: 24, color: "#232B98", fontFamily: "PT Sans"}}>
              Coursework
            </div>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10} style={{marginTop: 10}} >
          <Typography variant="body2">
            <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
              {
                <div>
                  <div>
                    {"University of Toronto B.Sc."}
                  </div>
                  <div>
                    {"Computer Science specialist, Math minor "}
                  </div>
                  <div>
                  </div>
                </div>
              }
            </div>
          </Typography>
          <Typography variant="body2">
            <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans"}}>
              <span >{"Major GPA: "}</span><span style={{ fontWeight: "bold"}}>{"3.5 (A-)"} </span>
            </div>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

class CourseList extends Component {

  constructor(){
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: 40, marginTop: 40}}>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6}  style={{marginBottom: 40}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
                {"Fall 2017"}
              </div>
            </Typography>
          </Grid>
          <CourseSet semester={["MAT137 - Calculus (year long course)", "CSC148 - Introduction to Computer Science", "CSC165 - Mathematical Expression and Reasoning for Computer Science", "LTE199 - Living things and their Environment",
          "COG250 - Introduction to Cognitive Science (year long course)" ]} />
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6}  style={{marginBottom: 40}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
                {"Winter 2018"}
              </div>
            </Typography>
          </Grid>
          <CourseSet semester={["MAT137 - Calculus (year long course)", "CSC258 - Computer Organization", "CSC240 - Enriched Introduction to Theory of Computation", "SII199 - Debating Environmental Issues",
          "COG250 - Introduction to Cognitive Science (year long course)" ]} />
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6} >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
                {"Fall 2018"}
              </div>
            </Typography>
          </Grid>
          <CourseSet semester={["MAT237 - Multivariable Calculus (year long course)", "MAT240 - Linear algebra I", "STA257 - Statistics I", "CSC207 - Software Design",
          "PSY270 - Introduction to Cognitive Psychology", "COG260 - Data, Computation, and the Mind" ]} />
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6}  style={{marginBottom: 40}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
                {"Winter 2019"}
              </div>
            </Typography>
          </Grid>
          <CourseSet semester={["MAT237 - Multivariable Calculus (year long course)", "MAT224 - Linear algebra II", "STA248 - Statistics II", "CSC209 - Software Tools & System Programming",
          "CSC263 - Data Structures Analysis" ]} />
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6}  style={{marginBottom: 40}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
                {"Summer 2020"}
              </div>
            </Typography>
          </Grid>
          <CourseSet semester={["CSC373 - Algorithm Design, Analysis, & Complexity", "CSC369 - Operation Systems", "CSC420 - Introduction to Image Understanding", "CSC494 - Capstone research project (Smart Voice)",
         ]} />
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6}  style={{marginBottom: 40}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
                {"Fall 2017"}
              </div>
            </Typography>
          </Grid>
          <CourseSet semester={["CSC311 - Introduction to Machine Learning", "STA347 - Probability", "ECE568 - Computer Security", "CSC485 - Computational Linguistics",
          "CSB201 - Introduction to Molecular Biology" ]} />
        </Grid>
      </Grid>
    );
  }
}

class CourseSet extends Component {

  constructor(props){
    super(props);
  }

  render(){
  return(
    <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
      <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
        {
          this.props.semester.map((course) =>
            (<Typography variant="body2" style={{marginBottom: 10}}>
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans"}}>
                {course}
              </div>
            </Typography>)
          )
        }
      </Grid>
    </Grid>
  );
  }

}


export default EducationPage;
