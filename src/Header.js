import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    render() {
        return (
        	<span onClick = {this.playButton} className={buttonName}></span>
        	<span onClick = {this.playButton} className={buttonName}></span>
        )
    }
}

export default Header;
