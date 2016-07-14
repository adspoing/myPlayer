import React from 'react';

class Audio extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Audio';
    }
    render() {
        return (
               <audio src={this.props.data.songUrl}/>
        );
    }
}

export default Audio;
