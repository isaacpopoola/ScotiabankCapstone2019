import React from 'react';
import {
    CardColumns,
    Container,
} from 'react-bootstrap'
import { RecruiterCard } from './componentIndex';
import axios from 'axios';

export default class Team extends React.Component {




    componentDidMount() {

        //Add Calendly Script
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);

        console.log("Team Component Loaded")
    }

    render() {


        //  console.log(this.state);

        return (
            <div id='recruiting-team' className='align-items-center' style={{ margin: '1rem' }}>
                <Container >
                    <div className='h1' style={{ marginLeft: '2rem' }}>Meet The Team</div>

                    <h3 style={{ marginLeft: '2rem' }}>Director</h3>
                    <CardColumns className='d-flex justify-content-center flex-wrap' style={{ margin: '1rem' }}>
                        {this.props.recruiters.filter(val => val.Type=='Director').map(profile => <RecruiterCard key={profile.id} {...profile} />)}
                    </CardColumns>

                    <h3 style={{ marginLeft: '2rem' }}>Recruiters</h3>
                    <CardColumns className='d-flex justify-content-center flex-wrap' style={{ margin: '1rem' }}>
                        {this.props.recruiters.filter(val => val.Type=='Recruiter').map(profile => <RecruiterCard key={profile.id} {...profile} />)}
                    </CardColumns >

                    <h3 style={{ marginLeft: '2rem' }}>Program Managers</h3>
                    <CardColumns className='d-flex justify-content-center flex-wrap' style={{ margin: '1rem' }}>
                        {this.props.recruiters.filter(val => val.Type=='Program Manager').map(profile => <RecruiterCard key={profile.id} {...profile} />)}
                    </CardColumns>
                </Container>

            </div>
        );
    }

}

//export default Team;