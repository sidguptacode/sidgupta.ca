import './styles.css';

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'
// import Resume from  '../../node_modules/Sid_Gupta_Resume_June2023.pdf'
import ReactGA from "react-ga4";
import {
  isMobile
} from "react-device-detect";

function Sidebar () {
    const [hoverInHome, setHoverInHome] = useState(false);
    const [hoverInResearch, setHoverInResearch] = useState(false);
    const [hoverInCourses, setHoverInCourses] = useState(false);
    const [hoverInResume, setHoverInResume] = useState(false);

    return (
      <div className="sidebar">
        <Link to="/" className='sidebarItem' onMouseEnter={() => setHoverInHome(true)} onMouseLeave={() => setHoverInHome(false)} style={{color: (!hoverInHome ? "#6069E6" : '#242F92')}}>
          {"Sid Gupta"}
        </Link>
        <Link to="/projects" className='sidebarItem' onMouseEnter={() => setHoverInResearch(true)} onMouseLeave={() => setHoverInResearch(false)} style={{color: (!hoverInResearch ? "#6069E6" : '#242F92')}}>
          {"AI Research & Projects"}
        </Link>
        {/* <Link to="/courses" className='sidebarItem' onMouseEnter={() => setHoverInCourses(true)} onMouseLeave={() => setHoverInCourses(false)} style={{color: (!hoverInCourses ? "#6069E6" : '#242F92')}}>
          {"Undergrad Courses"}
        </Link> */}
        {/* <a href="google.com" className='sidebarItem' onMouseEnter={() => setHoverInCourses(true)} onMouseLeave={() => setHoverInCourses(false)} style={{color: (!hoverInCourses ? "#6069E6" : '#242F92')}}>
          {"Teaching & writing"}
        </a> */}
        <a href={process.env.PUBLIC_URL + "Sidharth_Gupta_CV.pdf"} className='sidebarItem' onMouseEnter={() => setHoverInResume(true)} onMouseLeave={() => setHoverInResume(false)} onClick={() => {
            ReactGA.event({
              category: "resume",
              action: "resume click",
            });
        }} style={{color: (!hoverInResume ? "#6069E6" : '#242F92')}}>
          {"Resume / CV"}
        </a>
        <br/>
      </div>
    );
}
  
export default Sidebar;
