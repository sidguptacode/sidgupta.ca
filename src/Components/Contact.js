import React, { useState } from 'react';
import LinkedinGrey from '../svgs/LinkedinGrey.svg';
import LinkedinBlue from '../svgs/LinkedinBlue.svg';
import GithubGrey from '../svgs/GithubGrey.svg';
import Scholar from '../svgs/GoogleScholar.svg';
import GithubBlack from '../svgs/GithubBlack.svg';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';

function Contact () {
    const [hoverInLI, setHoverInLI] = useState(false);
    const [hoverInScholar, setHoverInScholar] = useState(false);
    const [hoverInMail, setHoverInMail] = useState(false);
    const [hoverInGit, setHoverInGit] = useState(false);
    return (
      <div>
        <div className="header">
          {"Contact"}
        </div>
        <div className="contactButtons">
          <div className="leftContactButton">
            <IconButton onMouseEnter={() => setHoverInMail(true)} onMouseLeave={() => setHoverInMail(false)}>
              <a href={'mailto:sid.gupta@mail.utoronto.ca'}>
                <EmailIcon className="emailIcon" style={{width: 25, height: 25, color: (hoverInMail ? '#1976d2' : 'gray')}}/>
              </a>
            </IconButton>
          </div>
          <div className="middleContactButton">
            <IconButton onMouseEnter={() => setHoverInLI(true)} onMouseLeave={() => setHoverInLI(false)}>
              <a href={'https://www.linkedin.com/in/sidgupta-99/'} >
                <img src={(hoverInLI ? LinkedinBlue : LinkedinGrey)} style={{width: 25, height: 25}} />
              </a>
            </IconButton>
          </div>
          <div className="middleContactButton">
            <IconButton onMouseEnter={() => setHoverInScholar(true)} onMouseLeave={() => setHoverInScholar(false)}>
              <a href={'https://scholar.google.com/citations?user=3mhJy4sAAAAJ&hl=en'} >
                <img src={(hoverInScholar ? Scholar : Scholar)} style={{width: 32, height: 32}} />
              </a>
            </IconButton>
          </div>
          <div className="rightContactButton">
            <IconButton onMouseEnter={() => setHoverInGit(true)} onMouseLeave={() => setHoverInGit(false)}>
              <a href={'https://github.com/sidguptacode/'} >
                <img src={(hoverInGit ? GithubBlack : GithubGrey)} style={{width: 25, height: 25}} />
              </a>
            </IconButton>
          </div>
        </div>
      </div>
    );
  }

export default Contact;