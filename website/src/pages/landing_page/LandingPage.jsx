import React, { Component } from 'react';
import {
    MainNavbar,
    MainJumbotron,
    About,
    Team,
    Blogs,
    Opportunities,
    Footer
} from './sub_components/index.js'

import axios from 'axios';

export default class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rec_team: [],
            blogs: [],
            programs: [],
        }
    }

    componentDidMount() {
        this.fetch_recruiters();
        this.fetch_blogposts();
        this.fetch_programs();
    }

    fetch_recruiters = async (event) => {
        //event.preventDefault();

        axios.get("http://192.168.56.101:1337/recruiters").then((resp) => {
            this.setState({ rec_team: resp.data });
        });
    }


    fetch_blogposts = async () => {
        axios.get("http://192.168.56.101:1337/blogposts").then((resp) => {
            this.setState({ blogs: resp.data });
        });
    }

    fetch_programs = async () => {
        axios.get("http://192.168.56.101:1337/programs").then((resp) => {
            this.setState({ programs: resp.data })
        });
    }


    render() {
        //console.log(this.state);
        return (
            <div className="App">
                <div id='nav'>
                    <MainNavbar />
                </div>
                <div id='content'>
                    <MainJumbotron />
                    <About />
                    <Opportunities programs={this.state.programs} />
                    <Team recruiters={this.state.rec_team} />
                    {/* <Recruiting /> */}
                    <Blogs blogs={this.state.blogs} />
                    <Footer />
                </div>
            </div>
        );
    }

}