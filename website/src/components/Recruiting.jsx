import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 
    {
        Container,
    } from 'react-bootstrap';


class Recruiting extends React.Component{
    
    render() {
        return(
            <div id= 'recruiting'>
                <Container style={{borderRadius:'5px'}}>
                    <VerticalTimeline>
                      <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        //date="2006 - 2008"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ec111a' }}
                        //icon={<WorkIcon />}
                      >
                        <h3 className="vertical-timeline-element-title">Post Job/On Campus Recruiting</h3>
                        <h4 className="vertical-timeline-element-subtitle">We post the job on careers website as well as announce them on LinkedIn. We also go to university campuses to recruit</h4>
                        {/* <p>
                          User Experience, Visual Design
                        </p> */}
                      </VerticalTimelineElement>
                      <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        //date="April 2013"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#ec111a' }}
                        //icon={<SchoolIcon />}
                      >
                        <h3 className="vertical-timeline-element-title">Coffee Chat</h3>
                        <h4 className="vertical-timeline-element-subtitle">After reviewing your resume, or meeting you on campus, you'll then have a coffee chat with a recruiter so we can get to know you more and discuss about potential opportunities</h4>
                        {/* <p>
                          Strategy, Social Media
                        </p> */}
                      </VerticalTimelineElement>

                      <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        //date="2002 - 2006"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                      //  icon={<SchoolIcon />}
                      >
                        <h3 className="vertical-timeline-element-title">Video Interview</h3>
                        <h4 className="vertical-timeline-element-subtitle">???</h4>
                        {/* <p>
                          Creative Direction, Visual Design
                        </p> */}
                      </VerticalTimelineElement>
                      
                      <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        //icon={<StarIcon />}
                      />
                    </VerticalTimeline>
                </Container>
            </div>
        );
    }

}

export default Recruiting;