import React from 'react';
import img1 from '../assets/images/img2.jpg';
import {Image} from 'semantic-ui-react';
// import {
//     Jumbotron,
// } from 'reactstrap';
import {
    Jumbotron
} from 'react-bootstrap';

class MainJumbotron extends React.Component{

    

    render(){
        function getWindowHeight() {return window.outerHeight*1}
        return(
            <div id='home'>
                <Jumbotron fluid id='front' style={{backgroundImage: `url(${img1})`, backgroundSize: 'cover', minHeight: getWindowHeight() + 'px'}}>
                    {/* <img src={img1} className='' alt=''></img> */}
                </Jumbotron>
            </div>
        )
    }
}

export default MainJumbotron;