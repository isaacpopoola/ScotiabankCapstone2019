import React from 'react';
import {
    Container,
    Image,
    Row,
    Col
} from 'react-bootstrap';
import { Markdown } from 'react-showdown';
import axios from 'axios';

export default class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            about: {},
            fst_image: {},
            snd_image: {}
        }
    }

    componentWillMount() {
        this.fetch_about();
    }

    fetch_about = async () => {
        axios.get("http://192.168.56.101:1337/abouts").then((resp) => {
            this.setState({ about: resp.data[0], fst_image: resp.data[0].image1, snd_image: resp.data[0].image2 })
        });
    }

    render() {
        return (
            <div id='about'
            // style={{ marginLeft: '10rem', marginRight: '10rem' }}
            >
                <Container fluid>
                    <Row>
                        <Col className='d-flex justify-content-center align-content-center flex-wrap'>
                            <Container>
                                <Markdown markup={this.state.about.paragraph1} />
                            </Container>

                        </Col>
                        <Col className='d-flex justify-content-center align-content-center flex-wrap'>
                            <Image className='mr-auto' src={`http://192.168.56.101:1337${this.state.fst_image.url}`} style={{ maxWidth: '540px', maxHeight: '383.75px', minWidth: '300', minHeight: '213.19' }} />
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Container fluid>
                    <Row>
                        <Col className='d-flex justify-content-center align-content-center flex-wrap'>
                            <Image className='ml-auto' src={`http://192.168.56.101:1337${this.state.snd_image.url}`} style={{ maxWidth: '540px', maxHeight: '383.75px', minWidth: '300', minHeight: '213.19' }} />
                        </Col>
                        <Col className='d-flex justify-content-center align-content-center flex-wrap' >
                            <Container>
                                <Markdown markup={this.state.about.paragraph2} />
                            </Container>
                        </Col>
                    </Row>
                </Container>
                {/* <Container> */}

                {/* </Container> */}

            </div>
        );
    }

}

