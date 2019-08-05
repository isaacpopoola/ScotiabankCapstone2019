import React, { Component } from 'react';
import {
    Card,
    Badge,
    Button
} from 'react-bootstrap';

export default class ProgramCard extends Component {


    render() {
       
        return (
            <div id='program' style={{ padding: '1rem' }}>
                <Card
                    //className = 'p-3'
                    style={{
                        width: '20rem',
                        borderRadius: '5px'
                    }}
                >
                    <Card.Body>
                        <Card.Title>{this.props.Name}</Card.Title>
                        <div id="tags">
                            {this.props.tags.tags.map(tag =>
                                <Badge variant="danger" style={{ padding: '0.5em' }}>{tag}</Badge>
                            )}
                        </div>
                        <hr/>
                        <p style={{ fontSize: '15px' }}>{this.props.description}</p>
                        <Button variant='danger' href={this.props.url} target='_blank' style={{ fontSize: '0.8rem' }}>Learn More</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}