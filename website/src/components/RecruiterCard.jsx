import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import  {
    Card,
    Button,
    Modal,
} from 'react-bootstrap';

import $ from 'jquery';

class RecruiterCard extends React.Component {

    constructor(props){
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
        //console.log(this.props);
        return (
            <div id="recruiter" className='align-items-center'>
                <Card style={{ width: '18rem', borderRadius:'15px'}}>
                  <Card.Img variant="top" src={'http://192.168.56.101:1337' + this.props.Headshot.url} style={{borderTopLeftRadius:'inherit', borderTopRightRadius:'inherit'}}/>
                  <Card.Body>
                  <div className="d-flex justify-content-start">
                    <Card.Title style={{paddingRight:'0.5em'}}>{this.props.FirstName + ' ' + this.props.LastName}</Card.Title>
                      <a href={this.props.LinkedInURL} target='_blank'>
                          <FontAwesomeIcon style={{paddingBottom:'5px'}} className='ml-auto' size='2x' icon={faLinkedin}/>
                      </a>
                  </div>
                    

                    <Button variant='danger' onClick={this.toggle}>Schedual a Call/Coffee Chat</Button>
                    
                    <Modal 
                        show={this.state.modal}
                        onHide={this.toggle}
                        aria-labelledby="example-custom-modal-styling-title"
                        animation
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Schedule a Call/Coffee Chat
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                <div className="calendly-inline-widget" data-url="https://calendly.com/isaacpopoola/15min?primary_color=ff0004" style={{minWidth:'320px', height:'630px'}} /> 
                        </Modal.Body>
                    </Modal>
                  </Card.Body>
                </Card>
               
            </div>
        )
    }

}

export default RecruiterCard;