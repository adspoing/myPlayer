import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    prevSong = () => {
        this.props.prevSong();
    }
    nextSong = () => {
        this.props.nextSong();
    }
    render() {
        return (
            <div className = 'headerWrapper'>
            	<span onClick = {this.prevSong} className='prevSong'></span>
                <span onClick = {this.nextSong} className='nextSong'></span>
            </div>
        )
    }
}

export default Header;
