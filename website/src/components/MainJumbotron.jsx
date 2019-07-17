import React from 'react';
import img1 from '../assets/images/img2.jpg';
import {
    Jumbotron,
    Image,
} from 'react-bootstrap';
import axios from 'axios';
import { useTransition, animated, config } from 'react-spring';


// const Images = () => {
//     const [index, set] = useState(0)
//     const transitions = useTransition(slides[index], item => item.id, {
//       from: { opacity: 0 },
//       enter: { opacity: 1 },
//       leave: { opacity: 0 },
//       config: config.molasses,
//     })
//     useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
//     return transitions.map(({ item, props, key }) => (
//       <animated.div
//         key={key}
//         class="bg"
//         style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
//       />
//     ))
//   }

class MainJumbotron extends React.Component{

    
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            title: ''
        };
    }

    componentDidMount(){
        this.fetch_photos()
    }


    fetch_photos() {
        axios.get(`http://192.168.56.101:1337/jumbotrons`).then( (results) => {

            console.log('JUMBOTRON DATA');
            console.log(results.data[0]);
            this.setState({
                pictures: results.data[0].photos,
                title: results.data.Title
            });    
            
        });
        
    }

    render(){

        return(
            <div id='home'>
                <Jumbotron fluid id='front' style={{marginLeft:'-10px', marginTop:'-10px', height:'100%', minWidth:'100%', padding:'0'}}>
                    {/* <img src={img1} className='' alt=''></img> */}
                    {/* <Image src={img1} style={{height:'100%', width:'100%', maxWidth:'100%'}} /> */}
                  
                </Jumbotron>
            </div>
        )
    }
}

export default MainJumbotron;