require('../index.less');

import React from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './Header.js';
import Audio from './Audio.js';
import PlayerButton from './PlayerButton.js';
import Footer from './Footer.js';
import Record from './record.js';
import List from './List.js';
import {playmusic, prevsong, nextsong, playmodule, randomplay} from '../actions/actions.js'

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
    _clickPrevSongButton = () =>{
    	this.props.actions.prevsong();
    	this._LoadMusic();
        let that = this;
        setTimeout(function(){
            that._changeBackground()
        },0);
    }
    _clickNextSongButton = () =>{
    	this.props.actions.nextsong();
    	this._LoadMusic();
        let that = this;
        setTimeout(function(){
            that._changeBackground()
        },0);    
    }
    _LoadMusic = () =>{
    	let audio = ReactDom.findDOMNode(this.refs.audio);
    	let that = this;
    	setTimeout(function(){
    		audio.load();
    		if(that.props.playFlag == true)
    			audio.play();
    	},0);
    }
    _changePlayModule = () =>{
    	this.props.actions.playmodule();
    	let audio = ReactDom.findDOMNode(this.refs.audio);
    	let that = this;
    	setTimeout(function(){
	    	if(that.props.playModule==0){
	    		audio.onended = function(){
	    			that._clickNextSongButton();
	    		}
	    	}else if(that.props.playModule==1){
	    		audio.onended = function(){
	    			that._LoadMusic();
	    		}
	    	}else 
	    	{
	    		audio.onended = function(){
	    			that.props.actions.randomplay();
	    			that._LoadMusic();
	    		}
	    	}
    	},0);
    }
    _changeTime = (e) =>{
        let length = e.pageX;
        let processbar = ReactDom.findDOMNode(this.refs.processbar);
        let offset = processbar.offsetLeft;
        console.log(length-offset); 
    }
    _changeBackground = () =>{
        let background = ReactDom.findDOMNode(this.refs.myplayer);
        let image = this.props.data[this.props.index].image;
        console.log(image);
        background.style.background='url(../imgs/'+image+') 0 0 no-repeat';
    }
    componentDidMount = () =>{
    	let audio = ReactDom.findDOMNode(this.refs.audio);
        let timeline = ReactDom.findDOMNode(this.refs.timeline);
        timeline.style.height = '20px';
    	let that = this;
    	audio.onended = function(){
    		that._clickNextSongButton();
    	}
        audio.style.width = 0;
        audio.ontimeupdate = function(){
            if(!isNaN(audio.duration)){
                let currentTime = audio.currentTime;
                let currentMin = parseInt(currentTime/60);
                let currentSec = parseInt(currentTime%60);
                timeline.style.width = currentTime * 100 / audio.duration + 'px';
                timeline.style.background = 'red';
            }
        }
        this._changeBackground();
    }
    render() {
        return (
        	<div className = 'myplayer' ref='myplayer'>
                <div className = 'glass'></div>
                <Header prevSong={this._clickPrevSongButton}
                        nextSong={this._clickNextSongButton}/>
        		<Audio ref="audio" data={this.props.data[this.props.index]}/>
                <Record data={this.props.data[this.props.index]}
                        playFlag={this.props.playFlag}/>
        		<PlayerButton clickPlayerButton={this._clickPlayerButton}
        					  playFlag={this.props.playFlag}/>
                 <Footer changePlayModule={this._changePlayModule}
                        playModule={this.props.playModule}/>
                <List />
                <div ref = 'processbar' className = 'processBar' onClick = {this._changeTime}>
                    <div ref = 'timeline'></div>        
                </div>
        	</div>
        )
    }
}

function mapStateToProps (state){
    return { 
        playFlag: state.playFlag,
        playModule: state.playModule,
        index: state.index,
        data: state.data
        }
}

function mapDispatchToProps (dispatch){
    return{
        actions: bindActionCreators({
            playmusic,
            prevsong,
            nextsong,
            playmodule,
            randomplay
        },dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
