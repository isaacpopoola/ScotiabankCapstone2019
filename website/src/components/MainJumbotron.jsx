import React from 'react';
import img1 from '../assets/images/img2.jpg';
import {
    Jumbotron,
    Image,
    Carousel,
} from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';


class MainJumbotron extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            title: ''
        };
    }


    componentWillMount() {
        this.fetch_photos()
    }


    fetch_photos() {
        axios.get(`http://192.168.56.101:1337/jumbotrons`).then((results) => {

            console.log('JUMBOTRON DATA');
            console.log(results.data[0]);
            this.setState({
                pictures: results.data[0].photos[0],
                title: results.data[0].Title
            });

        });

    }

    render() {
        console.log(this.state);
        return (
            <div id='home'>
                <br/>
                <br/>
                <br/>
                <Jumbotron fluid id='front'
                    style={
                        {
                            backgroundImage: `url(${'http://192.168.56.101:1337' + this.state.pictures.url})`,
                            //marginLeft: '-10px',
                            //marginTop: '-10px',
                            //marginBottom: '0px',
                            //height: '100%',
                            //minWidth: '100%',
                            minHeight:'500px',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition:'top center'
                        }
                    }

                    className = 'd-flex align-items-center justify-content-center'
                >

                    <h1 style={{color: '#FFF'}}>{this.state.title}</h1>
                    {/* <Image src={img1} style={{ height: '100%', width: '100%', maxWidth: '100%' }} /> */}
                    {/* <Image src={'http://192.168.56.101:1337' + this.state.pictures.url} style={{ height: '100%', width: '100%', maxWidth: '100%' }} /> */}
                    {/* <Image src={'http://192.168.56.101:1337' + data.url} style={{height: '100%', width: '100%', objectFit: 'contain'}} /> */}

                </Jumbotron>
            </div>
        )
    }
}

export default MainJumbotron;