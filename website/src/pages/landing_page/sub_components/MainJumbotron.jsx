import React from 'react';
import {
    Jumbotron,
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

            this.setState({
                pictures: results.data[0].photos[0],
                title: results.data[0].Title
            });

        });

    }

    render() {
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
                            minWidth: '100%',
                            minHeight:'500px',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition:'top center'
                        }
                    }

                    className = 'd-flex align-items-center justify-content-center'
                >
                    <h1 style={{color: '#FFF'}}>{this.state.title}</h1>
                </Jumbotron>
            </div>
        )
    }
}

export default MainJumbotron;