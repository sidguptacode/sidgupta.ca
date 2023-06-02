import React, { useState } from 'react';
import {
  isMobile
} from "react-device-detect";
import './styles.css';
import { Link } from 'react-router-dom'
import Resume from '../pdfs/Sid_Gupta_Resume_June_2023.pdf'

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
        <a href={Resume} className='sidebarItem' onMouseEnter={() => setHoverInResume(true)} onMouseLeave={() => setHoverInResume(false)} style={{color: (!hoverInResume ? "#6069E6" : '#242F92')}}>
          {"Resume"}
        </a>
        <br/>
      </div>
    );
}
  
export default Sidebar;
