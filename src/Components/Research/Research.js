import React, { useEffect, useState } from 'react';
import '../styles.css'
import Sidebar from '../Sidebar'
import Contact from '../Contact'
import './localstyles.css'
import {getComponents} from './helpers'
import {papersInfo, projectsInfo, infoList, classProjectsInfo} from './constants'
import '../../bower_components/bootstrap/dist/css/bootstrap.min.css'
import './pubs.scss'
import ReactGA from "react-ga4";

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
        <div className="leftInfo" style={{verticalAlign: 'bottom'}}>
            {/* {"I hope to continue research in machine learning, interpretability, and computer vision for healthcare. To date, my research and projects encompass"} */}
            {/* {":"} */}
            {"My career goals are to use computer science and data to reduce indecision, uncertainty, and inaccessibility in problems. I am particularly interested in healthcare and social science problems."}
            <br/>
            <br/>
            {"I have had heaps of help from very many people -- friends, peers, classmates, colleagues, mentors, supervisors, and more. These people are really the backbone to all the work here."}
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
