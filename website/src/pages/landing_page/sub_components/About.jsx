import React from 'react';
import {
    Container,
    Image,
    Row,
    Col
} from 'react-bootstrap';

class About extends React.Component {

    render() {
        return (
            <div id='about'>
                <Container fluid>
                    <Row>
                        <Col>
                            <h2>Who Are We</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda iusto alias similique aspernatur dolorum mollitia odio. Labore odio facilis dicta deserunt accusantium sequi, possimus officia sed eius incidunt sint.</p>
                        </Col>
                        <hr />
                        <Col>
                            <Image />
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col>
                            <Image />
                        </Col>
                        <Col>
                            <h2>What Can We Offer You</h2>
                            <div>
                                <Image />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur, similique non eveniet, quos in provident mollitia illo ex aut omnis cum cupiditate harum, nulla officiis alias earum ipsam veniam.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* <Container> */}

                {/* </Container> */}

            </div>
        );
    }

}

export default About;