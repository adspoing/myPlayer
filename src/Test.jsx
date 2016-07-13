import React from 'react';
import Player from './Player.js'
let data = [
	{
		"id": 0,
		"title": "烂泥",
		"singer": "许志安",
		"album": "Come On 许志安2015演唱会",
		"songUrl": "../records/许志安 - 烂泥.mp3"
	},
	{
		"id": 1,
		"title": "垃圾",
		"singer": "卢巧音",
		"album": "十年选",
		"songUrl": "../records/卢巧音 - 垃圾.mp3"
	},
	{
		"id": 2,
		"title": "好心分手",
		"singer": "卢巧音",
		"album": "Concert YY 黄伟文作品展 演唱会",
		"songUrl": "../records/卢巧音 - 好心分手.mp3"
	}
];
class Test extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Test';
        this.state = {
        	index:0
        }
    }
    render() {
			return(
				<Player {...data}/>
			)
    }
}

export default Test;





