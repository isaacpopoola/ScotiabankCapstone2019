import React from 'react';

export default class Calendly extends React.Component {


    render(){
        return( 
            <div className='embed-responsive'> 
                <iframe className='calendly-inline-widget' src={this.props.url} style={{minWidth:"300px", height:"600px", overflow:'hidden'}}>  </iframe>
                {/* <div class="calendly-inline-widget" data-url={this.props.url} style={{minWidth:"320px", height:"630px"}}></div> */}
                {/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script> */}
            </div>
        )
    }

}