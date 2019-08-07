import React from 'react';
import {
    CardColumns,
    Container,
} from 'react-bootstrap'
import { RecruiterCard } from './index.js';


export default class Team extends React.Component {




    componentDidMount() {

        //Add Calendly Script
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);

    }

    render() {


        return (
            <div id='recruiting-team' className='align-items-center' style={{ marginLeft: '10rem', marginRight: '10rem' }}>
                <Container fluid>

                    <hr/>
                    <h2 className='d-flex justify-content-center text-center flex-wrap'>Meet The Team</h2>
                    <hr/>


                    <h4 className='d-flex justify-content-center text-center flex-wrap'>Director</h4>
                    <CardColumns className='d-flex justify-content-center flex-wrap'
                    //style={{ margin: '1rem' }}
                    >
                        {this.props.recruiters.filter(val => val.Type == 'Director').map(profile => <RecruiterCard key={profile.id} {...profile} />)}
                    </CardColumns>

                    <h4 className='d-flex justify-content-center text-center flex-wrap'>Recruiters</h4>
                    <CardColumns className='d-flex justify-content-center flex-wrap'
                  //      style={{ margin: '1rem' }}
                    >
                        {this.props.recruiters.filter(val => val.Type == 'Recruiter').map(profile => <RecruiterCard key={profile.id} {...profile} />)}
                    </CardColumns >

                    <h4 className='d-flex justify-content-center text-center flex-wrap'>Program Managers</h4>
                    <CardColumns className='d-flex justify-content-center flex-wrap'
                        //style={{ margin: '1rem' }}
                    >
                        {this.props.recruiters.filter(val => val.Type == 'Program Manager').map(profile => <RecruiterCard key={profile.id} {...profile} />)}
                    </CardColumns>
                </Container>

            </div>
        );
    }

}

//export default Team;