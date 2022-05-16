import React from 'react';
import '../styles.css'
import './localstyles.css'

function getComponents(list, componentsList, project) {
    Object.keys(list).map((projectInfoKey) => {
        var projectInfo = list[projectInfoKey]
        var authorsList = [];
        const lastIndex = projectInfo['authors'].length - 1
        projectInfo['authors'].forEach((author, index) => {
            if (author.includes("Gupta")) {
                 authorsList.push(<React.Fragment><span style={{fontWeight: "bold", textDecorationLine: "underline"}}>{author} </span >{index != lastIndex && ', '}</React.Fragment>)
            } else{
                authorsList.push(<React.Fragment><span>{author}</span>{index != lastIndex && ', '}</React.Fragment>)
            }
        })
        componentsList.push(     
            <React.Fragment>
                <div className="menuAreaProjects">
                    <div>
                        {/* <a class="publication-pic" href={"google.com"}> */}
                            <img className="photoproj" src={projectInfo['image']}>
                            </img>
                        {/* </a> */}
                    </div>
                    <div class="publication-info">
                        {/* <a href="google.com"> */}
                            <h4>
                                {projectInfo['title']}
                            </h4>
                        {/* </a> */}
                        {project &&  
                            <React.Fragment>
                                {projectInfo['details']}
                                <br/>
                                <br/>
                                {'moreDetails' in projectInfo && 
                                    <div className="leftInfoList">
                                        {projectInfo['moreDetails'].map((detailStr) => 
                                            <React.Fragment>
                                            {detailStr}
                                            <br/>
                                            <br/>       
                                            </React.Fragment>
                                        )}
                                    </div>
                                }
                            </React.Fragment>
                        }
                        {project && "Team: "}
                        <span class="authors">
                            {
                                authorsList
                            }
                        </span><br />
                        <i>{projectInfo['conference']}</i>
                        <div class="materials">
                            {'PDF' in projectInfo && 
                                <a href={projectInfo['PDF']} >
                                    <button href="{{ site.baseurl }}{{ page.pdf }}" class="btn btn-default btn-xs" aria-label="PDF">
                                        <span class="glyphicon glyphicon-file" aria-hidden="true" style={{color:"#7F17OE"}}></span> PDF
                                    </button>
                                </a>
                            }
                            {'PDF (coming soon)' in projectInfo && 
                                <button disabled={true} aria-label="PDF">
                                    <span class="glyphicon glyphicon-file"></span> PDF (coming soon)
                                </button>
                            }
                            {'Video' in projectInfo && 
                                <a href={projectInfo['Video']} >
                                    <button href="{{ page.video }}" class="btn btn-default btn-xs" aria-label="Video" target="_blank">
                                        <span class="glyphicon glyphicon-facetime-video" aria-hidden="true" style={{color:"#7F17OE"}}></span> Video
                                    </button>
                                </a>
                            }
                            {'Website' in projectInfo && 
                                <a href={projectInfo['Website']} >
                                    <button class="btn btn-default btn-xs" aria-label="Code" target="_blank">
                                        <span class="glyphicon glyphicon-globe" aria-hidden="true" style={{color:"#7F17OE"}}></span> Website
                                    </button>
                                </a>
                            }
                            {'Code' in projectInfo && 
                                <a href={projectInfo['Code']} >
                                    <button href="{{ page.slides }}" class="btn btn-default btn-xs" aria-label="Code" target="_blank">
                                        <span class="glyphicon glyphicon-file" aria-hidden="true" style={{color:"#7F17OE"}}></span> Code
                                    </button>
                                </a>
                            }
                            {'Slides' in projectInfo && 
                                <a href={projectInfo['Slides']} >
                                    <button href="{{ page.slides }}" class="btn btn-default btn-xs" aria-label="Code" target="_blank">
                                        <span class="glyphicon glyphicon-file" aria-hidden="true" style={{color:"#7F17OE"}}></span> Slides
                                    </button>
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    });
}

export {getComponents}