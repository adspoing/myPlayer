import React from 'react';

class PlayerButton extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PlayerButton';
    }
    playButton = () => {
    	this.props.clickPlayerButton();
    }
    render() {
    	var buttonName = 'iconPause';
    	buttonName = this.props.playFlag == true? 'iconPause':'iconPlay';
        return (
        	<div>
        		<span onClick = {this.playButton} className={buttonName}></span>
        	</div>
        )
    }
}

export default PlayerButton;
