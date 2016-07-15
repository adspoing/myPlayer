import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Footer';
    }
    musicButton = () =>{
        this.props.changePlayModule();
    }
    render() {
        let musicPlayModule;
        if(this.props.playModule==0)
            musicPlayModule='order';
        else if(this.props.playModule==1)
            musicPlayModule='single';
        else
            musicPlayModule='random';
        return (
        	<div>
        		<span onClick = {this.musicButton} className={musicPlayModule}></span>
        	</div>
        )
    }
}

export default Footer;
