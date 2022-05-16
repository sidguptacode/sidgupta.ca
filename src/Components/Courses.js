import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Sidebar from './Sidebar'
import Contact from './Contact'
const borderStyles = {
  borderColor: '#e8e8e8',
  borderWidth: 1,
  borderRadius: 0,
  borderStyle: 'solid',
  backgroundColor: 'white'
};

function HomePage () {
    return (
        <div className="pageContainer">
            <div/>
            <div className="mainSection">
                <div className="header">
                    {"Undergrad Courses"}
                </div>
                <div className="menuArea">
                    <LeftInfo/>
                    <div className="rightInfo">
                    <Sidebar/>
                    </div>
                </div>
                {/* <ProjectsList/> */}
                <div className="footer">
                    <EducationPage/>
                </div>
            </div>
        </div>
    )
}

function LeftInfo() {
    return (
        <div className="leftInfo" style={{verticalAlign: 'bottom'}}>
            {/* {"I hope to continue research in machine learning, interpretability, and computer vision for healthcare. To date, my research and projects encompass"} */}
            {/* {":"} */}
            {"I took lots of exciting courses in my undergrad and learned a lot. During school I didn't have any specific plan -- I just took courses that sounded interesting. But in hindsight, I realize that they all have shaped the way I see things now. "}
            <br/>
            <br/>
            {"Disclaimer: There is no such thing as a \"typical\" university degree. This is just mine. The best thing for any student to do is to take classes that are exciting to them (and not worry too much about the outcome)."}
            {/* <br/> */}
            {/* <br/> */}
            {/* {"Fun facts: I got a 61% and 67% in my first two years of statistics, and had to drop random processes after the midterm. However I kept at it and ultimately aced my ML and observational statistics classes. So don't give up on a bad grade :)"} */}
            {/* <br/> */}
            {/* <br/> */}
        </div>
    )
}


class EducationPage extends Component {
  constructor(){
    super();
    this.state = {
    };
    this.coursesRef = React.createRef();
  }


  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{backgroundColor: "white"}} ref={this.coursesRef}>
        <link href="https://fonts.googleapis.com/css?family=Roboto|Poppins|Lato|Montserrat|Oswald|PT+Sans" rel="stylesheet"/>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: 30}} />
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
        <Grid container xs={10} sm={10} md={10} lg={10} xl={10} >
          {/* <Header /> */}
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
          <CourseSet semester={["MAT137 - Calculus with proofs (year long course)", "CSC148 - Intro to Computer Science", "CSC165 - Math for Computer Science", "LTE199 - Living things and their Environment",
          "COG250 - Cognitive Science (year long course)" ]} />
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6}  style={{marginBottom: 40}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
                {"Winter 2018"}
              </div>
            </Typography>
          </Grid>
          <CourseSet semester={["MAT137 - Calculus with proofs (year long course)", "CSC258 - Computer Organization", "CSC240 - Enriched Theory of Computation", "SII199 - Debating Environmental Issues",
          "COG250 - Cognitive Science (year long course)" ]} />
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6} >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
                {"Fall 2018"}
              </div>
            </Typography>
          </Grid>
          <CourseSet semester={["MAT237 - Multivariable Calculus with proofs (year long course)", "MAT240 - Linear algebra I", "STA257 - Statistics I", "CSC207 - Software Design",
          "PSY270 - Intro to Cognitive Psychology", "COG260 - Data, Computation, and the Mind" ]} />
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6}  style={{marginBottom: 40}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
                {"Winter 2019"}
              </div>
            </Typography>
          </Grid>
          <CourseSet semester={["MAT237 - Multivariable Calculus with proofs (year long course)", "MAT224 - Linear algebra II", "STA248 - Statistics II", "CSC209 - System Programming",
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
          <CourseSet semester={["CSC373 - Algorithm Design & Complexity", "CSC369 - Operation Systems", "CSC420 - Computer Vision", "CSC494 - AI Research Project",
         ]} />
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6}  style={{marginBottom: 40}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
                {"Fall 2020"}
              </div>
            </Typography>
          </Grid>
          <CourseSet semester={["CSC311 - Intro to Machine Learning", "ECE537 - Random Processes (dropped)", "ECE568 - Computer Security", "POL101 - Intro to Political Science",
          "CSB201 - Intro to Molecular Biology" ]} />
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6}  style={{marginBottom: 40}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
                {"Winter 2021"}
              </div>
            </Typography>
          </Grid>
          <CourseSet semester={["CSC401 - Natural Language Processing", "CSC412 - Probabilistic Learning", "CSC413 - Neural Networks & Deep Learning", "CSC495 - AI Research Project", "CSB202 - Further exploration in Biotechnology"
         ]} />
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} xl={6}  style={{marginBottom: 40}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="body2">
              <div style={{fontSize: 16, color: "#49504A", fontFamily: "PT Sans", fontWeight: "bold"}}>
                {"Winter 2022"}
              </div>
            </Typography>
          </Grid>
          <CourseSet semester={["ECE419 - Distributed Systems", "CSC343 - Databases", "STA304 - Observational Statistics",  "MAT244 - Ordinary Differential Equations", "CSB352 - Bioinformatic Methods",]} />
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


export default HomePage;
