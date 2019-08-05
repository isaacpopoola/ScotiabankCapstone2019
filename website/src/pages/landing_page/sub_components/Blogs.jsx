import React from 'react';
import {
    Container,
    Carousel,
    Card,
} from 'react-bootstrap';
import { Markdown } from 'react-showdown';

export default class Blogs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    render() {
        console.log("BLOGS");
        console.log(this.props);

        return (
            <div id='blogs'>
                <Container>
                    <Carousel pauseOnHover>
                        {this.props.blogs.map(blog =>
                            <Carousel.Item>
                                <Card>
                                    <Card.Body 
                                    //className="text-center"
                                    >
                                        <Card.Title>{blog.Title}</Card.Title>
                                        <hr />
                                        {/* <Card.Text> */}
                                            <Markdown markup={blog.Paragraphs} />
                                        {/* </Card.Text> */}
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </Container>
            </div>
        );
    }
}