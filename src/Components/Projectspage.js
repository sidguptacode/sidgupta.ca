import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import roboto from '../images/robotonew.png';
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from  '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const theme = createMuiTheme({
  palette: {
    primary: {main: "#232B98"},
  },
});

const borderStyles = {
  borderColor: '#e8e8e8',
  borderWidth: 1,
  borderRadius: 0,
  borderStyle: 'solid',
  backgroundColor: 'white'
};

class ProjectsPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedTools: []
    }
  }

  addSelectedTool = (tool) => {
    this.setState({
      selectedTools: this.state.selectedTools.concat([tool])
    });
  }

  removeSelectedTool = (tool) => {
    var newSelectedTools = this.state.selectedTools.slice();
    var index = newSelectedTools.indexOf(tool);
    if(index != -1){
      newSelectedTools.splice(newSelectedTools.indexOf(tool), 1);
      this.setState({
        selectedTools: newSelectedTools
      });
    }
  }

  render() {
    return (
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{backgroundColor: "#F7F4F4"}}>
          <MuiThemeProvider theme={theme}>
            <link href="https://fonts.googleapis.com/css?family=Roboto|Poppins|Lato|Montserrat|Oswald|PT+Sans" rel="stylesheet"/>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
            <Grid container xs={10} sm={10} md={10} lg={10} xl={10} >
              <LanguagesBox selectedTools={this.state.selectedTools} addSelectedTool={this.addSelectedTool} removeSelectedTool={this.removeSelectedTool}/>
              <SkillsSection/>
            </Grid>
          </MuiThemeProvider>
        </Grid>
    );
  }
}

class LanguagesBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
  }

  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
          <Typography variant="display3">
            <div style={{fontSize: 24, color: "#232B98", fontFamily: "PT Sans"}}>
              Languages:
            </div>
          </Typography>
        </Grid>
        <Grid container xs={10} sm={10} md={10} lg={10} xl={10} style={{marginTop: 23}}>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={1} >
            <Button variant={this.props.selectedTools.indexOf("JavaScript") != -1 ? "contained" : "outlined"} color="primary"
                    style={{width: 100, height: 10, fontSize: 12}} labelStyle={{height: 20}} size="small" mini
                    onClick={() => {
                      if(this.props.selectedTools.indexOf("JavaScript") == -1){
                        this.props.addSelectedTool("JavaScript");
                      }else{
                        this.props.removeSelectedTool("JavaScript");
                      }
                    }}>
              JavaScript
            </Button>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={1} >
            <Button variant={this.props.selectedTools.indexOf("Java") != -1 ? "contained" : "outlined"} color="primary"
                    style={{width: 100, height: 10, fontSize: 12}} labelStyle={{height: 20}} size="small" mini
                    onClick={() => {
                      if(this.props.selectedTools.indexOf("Java") == -1){
                        this.props.addSelectedTool("Java");
                      }else{
                        this.props.removeSelectedTool("Java");
                      }
                    }}>
              Java
            </Button>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={1} >
            <Button variant={this.props.selectedTools.indexOf("Python") != -1 ? "contained" : "outlined"} color="primary"
                    style={{width: 100, height: 10, fontSize: 12}} labelStyle={{height: 20}} size="small" mini
                    onClick={() => {
                      if(this.props.selectedTools.indexOf("Python") == -1){
                        this.props.addSelectedTool("Python");
                      }else{
                        this.props.removeSelectedTool("Python");
                      }
                    }}>
              Python
            </Button>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={1} >
            <Button variant={this.props.selectedTools.indexOf("HTML") != -1 ? "contained" : "outlined"} color="primary"
                    style={{width: 100, height: 10, fontSize: 12}} labelStyle={{height: 20}} size="small" mini
                    onClick={() => {
                      if(this.props.selectedTools.indexOf("HTML") == -1){
                        this.props.addSelectedTool("HTML");
                      }else{
                        this.props.removeSelectedTool("HTML");
                      }
                    }}>
              HTML
            </Button>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={2} xl={1} >
            <Button variant={this.props.selectedTools.indexOf("CSS") != -1 ? "contained" : "outlined"} color="primary"
                    style={{width: 100, height: 10, fontSize: 12}} labelStyle={{height: 20}} size="small" mini
                    onClick={() => {
                      if(this.props.selectedTools.indexOf("CSS") == -1){
                        this.props.addSelectedTool("CSS");
                      }else{
                        this.props.removeSelectedTool("CSS");
                      }
                    }}>
              CSS
            </Button>
          </Grid>
          <Grid item lg={12}>
          </Grid>
        </Grid>
        <Divider width={"100%"}/>
      </Grid>
    );
  }
}

class Button extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(

    );
  }

}




class SkillsSection extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>

        <Grid container xs={12} sm={12} md={4} lg={4} xl={4} style={{textAlign: "center"}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="display3">
              <div style={{fontSize: 18, color: "#232B98", fontFamily: "PT Sans"}}>
                Front-end design
              </div>
            </Typography>
          </Grid>
          <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}/>
            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
              <Divider width="100%"/>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}/>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={12} md={4} lg={4} xl={4} style={{textAlign: "center"}}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="display3">
              <div style={{fontSize: 18, color: "#232B98", fontFamily: "PT Sans"}}>
                Front-end design
              </div>
            </Typography>
          </Grid>
          <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}/>
            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
              <Divider width="100%"/>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}/>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

class Skill extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Grid container xs={12} sm={12} md={4} lg={4} xl={4} style={{textAlign: "center"}}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  >
          <Typography variant="display3">
            <div style={{fontSize: 18, color: "#232B98", fontFamily: "PT Sans"}}>
              {this.props.name}
            </div>
          </Typography>
        </Grid>
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}/>
          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Divider width="100%"/>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}/>
        </Grid>
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
          {this.props.tools.map((tool) =>

          )}
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
        </Grid>
      </Grid>
    );
  }

}



export default ProjectsPage;
