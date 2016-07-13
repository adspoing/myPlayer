require('./index.less');

import React from 'react';
import Audio from './Audio.js'
import PlayerButton from './PlayerButton.js'


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Player';
        this.state = {
        	index:0,
        	playFlag:false
        }
    }
    _clickPlayerButton = () => {
    	this.setState({
    		playFlag:!this.state.playFlag
    	})
    	let audio = React.findDOMNode(this.refs.audio);
    	if(this.state.playFlag == true)
    	{
    		audio.pause();
    	}
    	else
    	{
    		audio.play();
    	}
    }
    render() {
    	console.log(this.props[0]);
        return (
        	<div>
        		<Audio ref="audio" data={this.props[this.state.index]}/>
        		<PlayerButton clickPlayerButton={this._clickPlayerButton}
        					  playFlag={this.state.playFlag}/>
        	</div>
        )
    }
}

export default Player;
