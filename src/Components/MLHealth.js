import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Sidebar from './Sidebar'
import Contact from './Contact'
import './styles.css'

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
                    {"Visualizing latent features that convolutional neural networks learn"}
                </div>
                {/* <ProjectsList/> */}
                <div className="footer">
                    <Post/>
                </div>
            </div>
        </div>
    )
}


class Post extends Component {
  constructor(){
    super();
    this.state = {
    };
    this.coursesRef = React.createRef();
  }


  render() {
    const text = `
    In this post, we will discuss what machine learning interpretability is, how a model can be made interpretable, the math behind how it works, how to get it to work, and some results after building such a model. Zero pre-requisite knowledge is assumed.

    Imagine a black box that can intake a patient's heart image, and immedietly display whether they are sick or not. 
    
    We give the box 100 patient images, and it correctly labels the sickness status for each one. A doctor would take hours to do such a task, but the box does it in seconds. It's exciting; this box could save doctors a lot of time!

    But this box is solid, closed, and opaque. What if it makes a mistake for a patient? This mistake in particular involves a real human life. Would we even know about that mistake? We wouldn't, unless a doctor checked the results. If only this box was made out of glass; we could see how it makes its decisions. Perhaps we could also learn from its decision-making processes.

    Many machine learning systems are black boxes. In one sentence, a machine learning system intakes data and learns to map inputs to outputs by doing calculus on a set of parameters. Machine learning (ML) systems help us solve non-deterministic problems, such as determining if a cat is in an image. We as humans can't write a program to do that, because an image (represented as a matrix of pixels), contains too many values for us to cognitively reason with, let alone write a program that checks for all the edge cases. It's for this reason that typically machine learning models have a huge number of parameters (in the billions) that are tuned over a large dataset. But again, we cannot cognitively reason with this many parameters at all. High dimensional parameters are the reason why ML systems have black-box decision making processes.

    What is worse, is that ML systems frequently make mistakes. ML systems are flawed because their behaviour is entirely derived from datasets made by humans. Humans are flawed, and make mistakes in diagnoses and labels all the time. Additionally, socities as a whole exhibit racial bias, gender inequality, class imbalance and other discrimination forms. Although current work is being done to reduce these issues, they certainly have existed in the past, and are recorded in datasets. Thus, if we train an ML system on data that prioritizes white patients over black patients, the system will learn to prioritize white patients over black patients. Indeed, such systems have been created accidentally in the real world, just by using past datasets (TODO LINK).

    If ML systems could reveal the decision making process to humans, then they could work together with doctors. We could know when a mistake is happening, and also fix issues involving bias and discrimination. This is the core idea of interpretability in machine learning for healthcare. In this article we will discuss one ML model that is interpretable, and teaches us some interesting things about healthcare decision making.


    `
    
    return (
      <Grid container xs={12} sm={12} md={12} lg={12} xl={12} style={{backgroundColor: "white", padding: 50, height: 3000}} ref={this.coursesRef}>
        <div className="display-linebreak">
            {text}
        </div>
      </Grid>
    );
  }
}

export default HomePage;
