import React from 'react';

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Timeline';
    }
    changeTime = (e)=>{
    	this.props.changeTime(e);
    }
    render() {
        return 
            (
                  <div onClick = {this.changeTime}></div>
            )          
    }
}

export default Timeline;
