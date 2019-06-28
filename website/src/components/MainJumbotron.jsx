import React from 'react';
import img1 from '../assets/images/img4.jpg';
import {
    Jumbotron,
} from 'reactstrap';

class MainJumbotron extends React.Component{


    render(){
        // const images = [
        //     {
        //         src: 
        //     }
        // ];
        return(
            <div id='home'>
                <Jumbotron id='front' fluid>
                    {/* <img src={img1} className='' alt=''></img> */}
                </Jumbotron>
            </div>
        )
    }
}

export default MainJumbotron;