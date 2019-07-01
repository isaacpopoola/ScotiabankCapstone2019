import React from 'react';
import {
    Container,
    Carousel,
} from 'reactstrap'
import RecruiterCard from './RecruiterCard.jsx';
import axios from 'axios';

class Team extends React.Component{
    
    render() {
        
        const fetch_recruiters = async (event) => {
            //event.preventDefault();
        
          const resp = await axios.get(`http://192.168.56.101:1337/recruiters`);
          console.log(resp.data);
        }

       
        return(
            <div id= 'recruiting-team'>
                {/* <Container> */}
                    {this.props.teamData.map(profile => <RecruiterCard /*key={profile.id}*/ {...profile}/>)}
                {/* </Container> */}
                
            </div>
        );
    }

}

export default Team;