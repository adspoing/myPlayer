require('./index.less');

import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './Header.js'
import Audio from './Audio.js'
import PlayerButton from './PlayerButton.js'
import {playmusic, prevsong, nextsong} from './actions'

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Player';
    }
    _clickPlayerButton = () => {
        this.props.actions.playmusic();
    	let audio = ReactDom.findDOMNode(this.refs.audio);
    	if(this.props.playFlag == true)
    	{
    		audio.pause();
    	}
    	else
    	{
    		audio.play();
    	}
    }
    render() {
        return (
        	<div>
                <Header prevSong={this.props.actions.prevsong}
                        nextSong={this.props.actions.nextsong}/>
        		<Audio ref="audio" data={this.props.data[this.props.index]}/>
        		<PlayerButton clickPlayerButton={this._clickPlayerButton}
        					  playFlag={this.props.playFlag}/>
        	</div>
        )
    }
}

function mapStateToProps (state){
    return { 
        playFlag: state.playFlag,
        index: state.index,
        data: state.data
        }
}

function mapDispatchToProps (dispatch){
    return{
        actions: bindActionCreators({
            playmusic,
            prevsong,
            nextsong
        },dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
