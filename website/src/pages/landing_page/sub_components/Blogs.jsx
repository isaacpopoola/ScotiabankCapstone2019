import React from 'react';
import {
    Container,
    CardColumns,
    Nav
} from 'react-bootstrap';
import { BlogCard } from './index.js'

export default class Blogs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: new Map,
            current_pill: "All",
        };

        this.set_pill = this.set_pill.bind(this);
        this.myfilter = this.myfilter.bind(this);
    }

    componentDidMount() {
        this.state.categories.set(1, "All");
        this.state.categories.set(2, "About Scotia");
        this.state.categories.set(3, "Advice");

    }

    set_pill(event) {
        this.setState({
            current_pill: this.state.categories.get(parseInt(event))
        })



    }

    myfilter(data) {
        var temp = data.tags.tags;
        var ret = false;
        temp.forEach(tag => {
            if (this.state.current_pill != "All") {
                if (this.state.current_pill == tag) {
                    ret = true
                }
            } else {
                ret = true;
            }


        })


        return ret

    }


    render() {

        //const handler = eventKey => alert(`selected ${eventKey}`);

        return (
            <div id='blogs' style={{ marginLeft: '10rem', marginRight: '10rem' }}>
                <hr/>
                <h2 className='d-flex justify-content-center text-center flex-wrap'>Blogs</h2>
                <hr/>
                <Container className='d-flex justify-content-center flex-wrap'>
                    <Nav variant='pills' defaultActiveKey='1' >
                        <Nav.Item >
                            <Nav.Link eventKey='1' id='All' onSelect={this.set_pill}>
                                All
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link eventKey='2' id='About Scotia' onSelect={this.set_pill}>
                                About Scotia
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='3' id='Advice' onSelect={this.set_pill}>
                                Advice
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
                <CardColumns className='d-flex justify-content-center flex-wrap'>
                    {this.props.blogs.filter(this.myfilter).map(data => 
                            <BlogCard {...data} />
                        )}
                </CardColumns>
            </div>
        )
        // return (
        //     <div id='blogs'>
        //         <Container>
        //             <Carousel pauseOnHover>
        //                 {this.props.blogs.map(blog =>
        //                     <Carousel.Item>
        //                         <Card>
        //                             <Card.Body 
        //                             //className="text-center"
        //                             >
        //                                 <Card.Title>{blog.Title}</Card.Title>
        //                                 <hr />
        //                                 {/* <Card.Text> */}
        //                                     <Markdown markup={blog.Paragraphs} />
        //                                 {/* </Card.Text> */}
        //                             </Card.Body>
        //                         </Card>
        //                     </Carousel.Item>
        //                 )}
        //             </Carousel>
        //         </Container>
        //     </div>
        // );
    }
}