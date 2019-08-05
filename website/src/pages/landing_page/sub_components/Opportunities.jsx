import React, { Component } from 'react';
import {
    Container,
    Form,
    CardColumns,
    CardDeck,
    Card

} from 'react-bootstrap';
import ProgramCard from './ProgramCard.jsx'

export default class Opportunities extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: new Map,
        };

        this.items_clicked = this.items_clicked.bind(this);
        this.myfilter = this.myfilter.bind(this);
    }

    componentDidMount() {
        this.state.items.set("New Grads", false);
        this.state.items.set("COOP/Internship", false);
        this.state.items.set("Masters", false);
        this.state.items.set("MBA", false);
        this.state.items.set("Undergraduate", false);
    }

    items_clicked(event) {

        var temp = this.state.items;

        temp.set(event.target.id, !temp.get(event.target.id))

        this.setState({
            items: temp
        });

        console.log(this.state.items.values())

        //console.log()

    }

    myfilter(data) {
        var temp = data.tags.tags;
        var ret = false;
        temp.forEach(tag => {
            //console.log(tag)
            if (Array.from(this.state.items.values()).reduce((a, b) => a || b)) {
                if (this.state.items.get(tag)) {
                    console.log(tag);
                    ret = true
                }
            } else {
                ret = true;
            }


        })


        return ret

    }

    render() {

        // function RenderPrograms(props){
        //     if(Array.from(this.state.items.values()).reduce((a,b) => a || b)){
        //         return {this.props.programs.filter(this.myfilter).map(data =><ProgramCard  {...data}/>)} 
        //     }
        // }

        return (
            <div id='opportunities' style={{marginLeft:'10rem', marginRight:'10rem'}}>
                <Container fluid className='align-items-center'>
                    <h3>Opportunities</h3>
                    <Form>
                        {['checkbox'].map(type => (
                            <Form.Group controlId="formBasicChecbox" key={`custom-inline-${type}`} className="mb-3" >
                                <Form.Check
                                    custom
                                    inline
                                    label="New Grads"
                                    type={type}
                                    onClick={this.items_clicked}
                                    id={`New Grads`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="COOP/Internship"
                                    type={type}
                                    onClick={this.items_clicked}
                                    id={`COOP/Internship`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Undergraduate"
                                    type={type}
                                    onClick={this.items_clicked}
                                    id={`Undergraduate`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Masters"
                                    type={type}
                                    onClick={this.items_clicked}
                                    id={`Masters`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="MBA"
                                    type={type}
                                    onClick={this.items_clicked}
                                    id={`MBA`}
                                />
                            </Form.Group>
                        ))}
                    </Form>
                    <CardColumns className='d-flex justify-content-center flex-wrap'>
                        {this.props.programs.filter(this.myfilter).map(data =>
                            <ProgramCard  {...data} />
                        )}
                        <a id='program' style={{ padding: '1rem' }} href='https://www.scotiabank.com/careers/en/careers/careers-students-and-new-grads.html' target='_blank'>
                            <Card
                                
                                style={{
                                    width: '20rem',
                                    borderRadius: '5px',
                                    color: 'black'
                                }}
                            >
                                <Card.Body>
                                    <Card.Title style={{marginBottom:'0px'}}>See More</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </CardColumns>

                </Container>
            </div>
        )
    }
}