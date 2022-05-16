import React from 'react';
import '../styles.css'
import Sidebar from '../Sidebar'
import Contact from '../Contact'
import './localstyles.css'
import '../../bower_components/bootstrap/dist/css/bootstrap.min.css'
import './pubs.scss'


function Information () {
    return (
        <React.Fragment>
            <link rel="stylesheet" type="text/css" href="../../bower_components/bootstrap/dist/css/bootstrap.min.css" />
            <div className="pageContainer">
            <div/>
            <div className="mainSection">
            <div className="header">
                {"ML research & projects"}
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
            <div/>
            </div>
        </React.Fragment>
    )
}

function LeftInfo() {
    return (
        <h1>
            Contour-guided Image Completion with Perceptual Grouping
        </h1>
    )
}


function ProjectsList () {
    return (
<article class="page publication">
  <span class="author_list">{"% include author_list.html authors=page.authors %"}</span>
    <section>
    <div class="materials">
      <a href="" class="btn btn-default btn-xs" aria-label="PDF">
        <span class="glyphicon glyphicon-file" aria-hidden="true" ></span> PDF
      </a>
      <a href="{{ page.appendix }}" class="btn btn-default btn-xs" aria-label="Appendix" target="_blank">
        <span class="glyphicon glyphicon-file" aria-hidden="true"></span> Appendix
      </a>
      <a href="{{ page.video }}" class="btn btn-default btn-xs" aria-label="Video" target="_blank">
        <span class="glyphicon glyphicon-facetime-video" aria-hidden="true" ></span> Video
      </a> 
      <a href="{{ page.slides }}" class="btn btn-default btn-xs" aria-label="Slides" target="_blank">
        <span class="glyphicon glyphicon-file" aria-hidden="true"></span> Slides
      </a> 
      <button type="button" class="btn btn-default btn-xs" aria-label="Citation" data-toggle="modal" data-target="#{{page.title | slugify}}_citation">
        <span class="glyphicon glyphicon-book" aria-hidden="true"></span> Citation
      </button>
      <button type="button" class="btn btn-default btn-xs" aria-label="BibTeX" data-toggle="modal" data-target="#{{page.title | slugify}}_bibtex">
        <span class="glyphicon glyphicon-book" aria-hidden="true"></span> BibTeX
      </button>
    </div>
  </section>
  <section>
    <div class="row">
      <div class="image col-xs-12 col-md-6">
        <div class="image-holder">
          <img src="{{ site.baseurl }}{{ page.image }}"/>
        </div>
        {"caption"}
      </div>
      <div class="image col-xs-12 col-md-6">
        <div class="video-holder">
          {"vid"}
        </div>
      </div>
    </div>
  </section>
  <section>
    <h3>Abstract</h3>
    {"abstract"}
  </section>
  <section>
    {"content"}
  </section>
  <section>
  </section>
    
</article>
    );
}

export default Information;