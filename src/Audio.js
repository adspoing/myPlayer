import React from 'react';

class Audio extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Audio';
    }
    render() {
    	console.log(this.props);
        return (
           <audio controls="controls" src={this.props.data.songUrl}/>
        );
    }
}

export default Audio;
