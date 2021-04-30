import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from  '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

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

class SkillsPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedTools: []
    }
    this.skillsRef = React.createRef();
  }

  componentDidMount = () => {
    this.props.setSkillsRef(this.skillsRef.current);
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
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{backgroundColor: "#F7F4F4"}} ref={this.skillsRef}>
          <MuiThemeProvider theme={theme}>
            <link href="https://fonts.googleapis.com/css?family=Roboto|Poppins|Lato|Montserrat|Oswald|PT+Sans" rel="stylesheet"/>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: 30}} />
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
            <Grid container xs={10} sm={10} md={10} lg={10} xl={10} >
              {/*<Header /> */}
              <LanguagesBox selectedTools={this.state.selectedTools} addSelectedTool={this.addSelectedTool} removeSelectedTool={this.removeSelectedTool}/>
              <Skills selectedTools={this.state.selectedTools} addSelectedTool={this.addSelectedTool} removeSelectedTool={this.removeSelectedTool} />
            </Grid>
          </MuiThemeProvider>
        </Grid>
    );
  }
}

class Header extends Component {
  render(){
    return(
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginBottom: -15}}>
        <Grid item xs={12} sm={12} md={2} lg={1} xl={2}>
          <Typography variant="display3">
            <div style={{fontSize: 24, color: "#232B98", fontFamily: "PT Sans"}}>
              Skills:
            </div>
          </Typography>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10} >
          <Typography variant="display3">
            <div style={{fontSize: 18, color: "#232B98", fontFamily: "PT Sans"}}>
              {"(Click to highlight associated projects)"}
            </div>
          </Typography>
        </Grid>
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
        <Grid container xs={12} sm={10} md={10} lg={10} xl={10} style={{marginTop: 23}}>
          <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{marginBottom: (isMobile ? 15 : 0)}} >
            <SkillButton skill={"JavaScript"} selectedTools={this.props.selectedTools} addSelectedTool={this.props.addSelectedTool}  removeSelectedTool={this.props.removeSelectedTool} />
          </Grid>
          <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{marginBottom: (isMobile ? 15 : 0)}} >
            <SkillButton skill={"Java"} selectedTools={this.props.selectedTools} addSelectedTool={this.props.addSelectedTool} removeSelectedTool={this.props.removeSelectedTool} />
          </Grid>
          <Grid item xs={4} sm={4} md={2} lg={2} xl={2}  style={{marginBottom: (isMobile ? 15 : 0)}} >
            <SkillButton skill={"Python"} selectedTools={this.props.selectedTools} addSelectedTool={this.props.addSelectedTool} removeSelectedTool={this.props.removeSelectedTool} />
          </Grid>
          <Grid item xs={4} sm={4} md={2} lg={2} xl={2} style={{marginBottom: (isMobile ? 15 : 0)}}  >
            <SkillButton skill={"HTML"} selectedTools={this.props.selectedTools} addSelectedTool={this.props.addSelectedTool} removeSelectedTool={this.props.removeSelectedTool} />
          </Grid>
          <Grid item xs={4} sm={4} md={2} lg={2} xl={2}  style={{marginBottom: (isMobile ? 15 : 0)}} >
            <SkillButton skill={"CSS"} selectedTools={this.props.selectedTools} addSelectedTool={this.props.addSelectedTool} removeSelectedTool={this.props.removeSelectedTool} />
          </Grid>
          <Grid item lg={12}>
          </Grid>
        </Grid>
        <Divider width={"100%"}/>
      </Grid>
    );
  }
}

class SkillButton extends Component {
  constructor(props){
    super(props);
  }

  isSelected = () => {
    return this.props.selectedTools.indexOf(this.props.skill) != -1;
  }

  render(){
    return(
      <Button disabled={true} variant={this.isSelected() ? "contained" : "outlined"} color="primary"
              style={{width: 100, height: 10, fontSize: 12, color: "#232B98"}} labelStyle={{height: 20}} size="small" mini
              onClick={() => {
                if(this.isSelected()){
                  this.props.removeSelectedTool(this.props.skill);
                }else{
                  this.props.addSelectedTool(this.props.skill);
                }
              }}>
        {this.props.skill}
      </Button>
    );
  }
}

class Skills extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container xs={12} sm={12} md={4} lg={4} xl={4} style={{textAlign: "center"}}>
          <SkillSection name={"Front-end design"}  addSelectedTool={this.props.addSelectedTool}  selectedTools={this.props.selectedTools} removeSelectedTool={this.props.removeSelectedTool}
                        tools={['React', 'Redux', 'Material-ui', 'Bootstrap']}/>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} / >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} / >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} / >
        </Grid>
        <Grid container xs={12} sm={12} md={4} lg={4} xl={4} style={{textAlign: "center"}}>
          <SkillSection name={"Back-end development"}  addSelectedTool={this.props.addSelectedTool}  selectedTools={this.props.selectedTools} removeSelectedTool={this.props.removeSelectedTool}
                        tools={['Node', 'Websocket', 'ShareDB', 'Express', "Socket.io", "Mongodb"]} />
        </Grid>
        <Grid container xs={12} sm={12} md={4} lg={4} xl={4} style={{textAlign: "center"}}>
          <SkillSection name={"Tools and App development"}  addSelectedTool={this.props.addSelectedTool}  selectedTools={this.props.selectedTools} removeSelectedTool={this.props.removeSelectedTool}
                        tools={['Git', 'LibGDX', 'Flask']} />
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} / >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} / >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} / >
        </Grid>
      </Grid>
    );
  }
}

class SkillSection extends Component{

  constructor(props){
    super(props);
  }

  render(){

    return(
      <Grid container  xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign: "center"}}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  >
          <Typography variant="display3">
            <div style={{fontSize: 18, color: "#232B98", fontFamily: "PT Sans"}}>
              {this.props.name}
            </div>
          </Typography>
        </Grid>
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: -15}}>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}/>
          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Divider width="100%"/>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}/>
        </Grid>
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
        <Grid container xs={5} sm={5} md={5} lg={5} xl={5}>
          {this.props.tools.slice(0, Math.ceil(this.props.tools.length / 2)).map((tool) =>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: 10}}>
              <SkillButton skill={tool} selectedTools={this.props.selectedTools} addSelectedTool={this.props.addSelectedTool} removeSelectedTool={this.props.removeSelectedTool} />
            </Grid>
          )}
        </Grid>
        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
          {this.props.tools.slice(Math.ceil(this.props.tools.length / 2), this.props.tools.length).map((tool) =>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{marginTop: 10}}>
              <SkillButton skill={tool} selectedTools={this.props.selectedTools} addSelectedTool={this.props.addSelectedTool} removeSelectedTool={this.props.removeSelectedTool} />
            </Grid>
          )}
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
        </Grid>
      </Grid>
    );
  }

}



export default SkillsPage;
