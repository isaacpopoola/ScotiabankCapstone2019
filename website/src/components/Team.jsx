import React from 'react';
import {
    CardColumns,
    CardDeck
} from 'react-bootstrap'
import {RecruiterCard} from './componentIndex';
import axios from 'axios';

export default class Team extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {recruiters: []};
    }

    

    componentDidMount() {

        //Add Calendly Script
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);

        //Fetch Data from StrapiCMS
        console.log("Team Component Loaded")
        this.fetch_recruiters();
    }

    fetch_recruiters() {
        axios.get(`http://192.168.56.101:1337/recruiters`).then( (results) => {
            //console.log(results);
            this.setState({recruiters: results.data})
            
        });
        
       
    }

    render() {

      
      //  console.log(this.state);
        
        return(
            <div id= 'recruiting-team' className='align-items-center' style={{margin:'2rem'}}>
                <div className='h1' style={{marginLeft: '3rem'}}>Meet The Crew</div> 
                <CardColumns className='d-flex justify-content-center flex-wrap' style={{margin:'3rem'}}>  
                    {this.state.recruiters.map(profile => <RecruiterCard key={profile.id} {...profile} />)}
                </CardColumns>
            </div>
        );
    }

}

//export default Team;