import React, { Component } from 'react';
import logo from './logo.svg';
import HomePage from './Components/Homepage'
import SkillsPage from './Components/SkillsPage'
import ProjectsPage from './Components/ProjectsPage'
import EducationPage from './Components/Education'
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import Button from  '@material-ui/core/Button';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path='/' component={Main}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      skillsRef: null,
      coursesRef: null
    }
  }

  scrollDown = (ref) => {
    scrollToComponent(ref, {
      offset: 0,
      align: 'top',
      duration: 500
    });
  }

  render() {
    return(
      <div>
        <HomePage scrollDown={(refType) => {this.scrollDown(this.state[refType]);}}/>
        {/* <SkillsPage setSkillsRef={(ref) => {this.setState({skillsRef: ref});}}/> */}
        {/* <ProjectsPage /> */}
        {/* <EducationPage setCoursesRef={(ref) => {this.setState({coursesRef: ref});}} /> */}
      </div>
    );
  }
}

export default App;
