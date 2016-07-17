import React from 'react';

class Record extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Record';
    }
    render() {
    	let RecordType = this.props.playFlag == true ? 'rotate' : 'record';
        return (
        	<div className = 'RecordWrapper'>
                <img className = {RecordType} src={this.props.data.image}/>
            </div>
        )
    }
}

export default Record;
