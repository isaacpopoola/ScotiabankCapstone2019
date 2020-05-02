import React, { Component } from 'react';
import {
    Card,
    Button,
    Modal
} from 'react-bootstrap';
import { Markdown } from 'react-showdown';


export default class BlogCard extends Component {

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
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const posted = new Date(this.props.created_at);

        return (
            <div id='blog-card' style={{ padding: '1rem' }}>
                <Card
                    //className = 'p-3'
                    style={{
                        width: '15rem',
                        borderRadius: '5px'
                    }}
                >
                    <Card.Body>
                        <Card.Title>{this.props.Title}</Card.Title>
                        <Button variant='danger' onClick={this.toggle} style={{ fontSize: '0.8rem' }}>Read</Button>

                        <Modal
                            size='lg'
                            show={this.state.modal}
                            onHide={this.toggle}
                            aria-labelledby="example-custom-modal-styling-title"
                            animation
                        >
                            <Modal.Header closeButton>
                                <div>
                                    <Modal.Title>
                                        {this.props.Title}
                                    </Modal.Title>
                                    <p>{`Written by ${this.props.author}`}</p>
                                    <i>{`Posted on ${months[posted.getMonth()]} ${posted.getDay()}, ${posted.getFullYear()}`}</i>
                                </div>
                            </Modal.Header>
                            <Modal.Body style={{ paddingLeft: '5rem', paddingRight: '5rem', paddingTop: '1rem', paddingBottom: '1rem' }}>

                                <Markdown markup={this.props.Paragraphs} />

                            </Modal.Body>
                        </Modal>
                    </Card.Body>


                </Card>
            </div>
        )
    }
}