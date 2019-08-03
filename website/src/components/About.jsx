import React from 'react';
import { Container, Image } from 'react-bootstrap';

class About extends React.Component{
    
    render() {
        return(
            <div id= 'about'>
                <Container>
                    <h2>Who Are We</h2>
                    <div>
                        <Image  />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda iusto alias similique aspernatur dolorum mollitia odio. Labore odio facilis dicta deserunt accusantium sequi, possimus officia sed eius incidunt sint.</p>
                    </div>
                </Container>
                <Container>
                    <h2>What Can We Offer You</h2>
                    <div>
                        <Image />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur, similique non eveniet, quos in provident mollitia illo ex aut omnis cum cupiditate harum, nulla officiis alias earum ipsam veniam.</p>
                    </div>
                </Container>

            </div>
        );
    }

}

export default About;