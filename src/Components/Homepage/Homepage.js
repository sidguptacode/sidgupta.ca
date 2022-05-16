import React from 'react';
// import roboto from '../../images/sf_img_2.png';
import roboto from '../../images/cn_tower.jpeg';
import '../styles.css'
import './localstyles.css'
import Sidebar from '../Sidebar'
import Contact from '../Contact'

function HomePage () {
    return (
        <div className="pageContainer">
          <div/>
          <div className="mainSection">
            <div className="header">
              {"Welcome! 👋🏽"}
            </div>
            <div className="menuArea">
              <div className="leftInfo">
                <img className="photo" src={roboto}/>
              </div>
              <div className="rightInfo">
                <Sidebar/>
              </div>
            </div>
            <Description/>
            <div className="footer">
              <Contact/>
            </div>
          </div>
          <div/>
        </div>
    )
}

function Description () {
    return (
        <div className="description">
          {"Hi! My name is Sid, and I'm a recent Computer Science graduate from the University of Toronto. Starting July 2022, I will be working at PathAI in Boston MA, on AI systems for pathology."}
          <br/><br/>
          {/* {"In my research I focus on machine learning, interpretability, and computer vision for healthcare. "} */}
          {/* {"I'm currently doing research with "}
          <a href="https://vectorinstitute.ai/team/bo-wang/">Bo Wang</a>
          {" on interpretable ML models for multimodal health datasets. In the past I've had the good fortune of doing research with "}
          <a href="https://mariakakis.github.io">Alex Mariakakis</a>
          {" in ML and mobile health, and "}
          <a href="https://mrezanejad.github.io/index.html">Morteza Rezanejad</a>
          {" in computer vision."}
          <br/><br/>
          {"Before research, I spent some time working at Intel and Apple as a software engineering intern, and have also TA'd a few first year CS classes (CSC165/110/111)."} */}
          {"Here I share some projects that I've been a part of. These projects explain why I'm so excited about computer science and data."}
          <br/><br/>
          {"I like teaching and learning from others; I think I am pretty easy going and approachable, so feel free to reach out using the contacts below 🙂"} 
          <br/><br/>
        </div>
    );
}


export default HomePage;
