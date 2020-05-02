import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Calendly from './Calendly.jsx';
import {
    Card,
    Button,
    Modal,
} from 'react-bootstrap';
class RecruiterCard extends React.Component {

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
        function Schedule(props){
            if (props.type == "Recruiter"){
                if(props.link){
                    return (<Button variant={props.variant} onClick={props.onClick} style={props.style}>Schedule a Chat with me</Button>)
                } else {
                    return (<Button disabled variant={props.variant} onClick={props.onClick} style={props.style}>Schedule a Chat with me</Button>)
                }
                
            }
            return <div></div>;
        }

        return (
            <div id="recruiter" className='align-items-center' style={{ padding: '1rem' }}>
                <Card style={{ width: '15rem', borderRadius: '5px' }}>
                    <Card.Img variant="top" src={'http://192.168.56.101:1337' + this.props.Headshot.url} style={{ borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }} />
                    <Card.Body>

                        <div className="d-flex justify-content-start">
                            <Card.Title style={{ paddingRight: '0.5em' }}>{this.props.FirstName + ' ' + this.props.LastName}</Card.Title>
                            <a href={this.props.LinkedInURL} target='_blank'>
                                <FontAwesomeIcon style={{ paddingBottom: '3px' }} className='ml-auto' size='2x' icon={faLinkedin} />
                            </a>
                        </div>
                        <div>
                            <p style={{fontSize:'0.8rem'}}>{this.props.JobTitle}</p>
                        </div>

                    
                        {/* <Button variant='danger' onClick={this.toggle} style={{ fontSize: '0.8rem' }}>Schedule a Chat with me</Button> */}
                        <Schedule type={this.props.Type} variant='danger' onClick={this.toggle} style={{ fontSize: '0.8rem' }} link={this.props.CalendlyAPIURL}/>


                        <Modal
                            show={this.state.modal}
                            onHide={this.toggle}
                            aria-labelledby="example-custom-modal-styling-title"
                            animation
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Schedule a Chat with me
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ padding: '0rem' }}>

                                <Calendly url={this.props.CalendlyAPIURL} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>

            </div>
        )
    }

}

export default RecruiterCard;