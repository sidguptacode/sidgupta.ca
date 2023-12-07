import '../styles.css'
import './localstyles.css'
import '../../bower_components/bootstrap/dist/css/bootstrap.min.css'
import './pubs.scss'

import React, { useEffect, useState } from 'react';
import {classProjectsInfo, infoList, papersInfo, projectsInfo} from './constants'

import Contact from '../Contact'
import ReactGA from "react-ga4";
import Sidebar from '../Sidebar'
import {getComponents} from './helpers'

function HomePage () {

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/projects", title: "Projects" });
    }, []);

    return (
        <div className="pageContainer">
            <div/>
            <div className="mainSection">
                <div className="header">
                    {"AI Research & Projects"}
                </div>
                <div className="menuArea">
                    <LeftInfo/>
                    <div className="rightInfo">
                    <Sidebar/>
                    </div>
                </div>
                <ProjectsList/>
                <div className="footer">
                    <Contact/>
                </div>
            </div>
        </div>
    )
}

function LeftInfo() {
    var infoListComps = infoList.map((listStr) => (
        <React.Fragment>
            {listStr}
            <br/>
            <br/>       
        </React.Fragment>
    ));
    return (
        <div className="leftInfo" style={{verticalAlign: 'bottom', lineHeight: 1.5}}>
            {/* {"I hope to continue research in machine learning, interpretability, and computer vision for healthcare. To date, my research and projects encompass"} */}
            {/* {":"} */}
            {"My career goals are to use AI to reduce indecision, uncertainty, and inaccessibility in problems. I am most interested in developing AI tools for healthcare research."}
            {/* <br/> */}
            <br/>
            <br/>
            {/* {" I have learned the importance of building things that help people, from selfless teachers, mentors, colleagues, friends, and family."} */}
            {"I am greatly inspired by selfless teachers, mentors, colleagues, friends, and family to build things that help people."}
            <br/>
            <br/>
            {/* <div className="leftInfoList">
                {infoListComps}
            </div> */}
        </div>
    )
}


function ProjectsList () {
    var papers = []
    var projects = []
    var classProjects = []
    getComponents(papersInfo, papers, false)
    getComponents(projectsInfo, projects, true)
    getComponents(classProjectsInfo, classProjects, true)
    return (
        <div>
           <div className="header" style={{textAlign:"left", marginBottom: -15}}>
                Research papers
           </div>
            {papers}
            <br/>
            <br/>
            <div className="header" style={{textAlign:"left", marginBottom: -15}}>
                Larger personal projects
            </div>
            {projects}
            {/* <div className="header" style={{textAlign:"left", marginBottom: -15}}>
                Highlighted class projects
            </div>
            <br/>
            <br/>
            {"Many of my undergrad courses offered open-ended final projects. I really enjoyed all of these, and I've listed my five favourite such projects."}
            {classProjects} */}
        </div>
    );
}

export default HomePage;
