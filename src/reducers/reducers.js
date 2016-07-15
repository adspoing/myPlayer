import {handleActions} from 'redux-actions';
import {PLAY_MUSIC, PREV_SONG, NEXT_SONG, PLAY_MODULE, RANDOM_PLAY} from '../actions/constants.js';
import Data from '../data.js'


export default handleActions({
	[PLAY_MUSIC]: (state,action) => {
		return {
			playFlag:!state.playFlag,
			index:state.index,
			data:Data,
			playModule:state.playModule
		}
	},
	[PREV_SONG]: (state,action) => {
		let length = Data.length;
		return {
			playFlag:state.playFlag,
			index: state.index == 0 ? length-1 : state.index-1,
			data:Data,
			playModule:state.playModule
		}
	},
	[NEXT_SONG]: (state,action) => {
		let length = Data.length;
		return {
			playFlag:state.playFlag,
			index: state.index == length-1 ? 0 : state.index+1,
			data:Data,
			playModule:state.playModule
		}
	},
	[PLAY_MODULE]: (state,action) => {
		return {
			playFlag:state.playFlag,
			index: state.index,
			data:Data,
			playModule:state.playModule == 2 ? 0 : state.playModule+1
		}
	},
	[RANDOM_PLAY]: (state,action) => {
		let length = Data.length;
		function getRandom(){
			let num = Math.floor(Math.random()*length);
			while(num == state.index)
				{
					num = Math.floor(Math.random()*length);
				}
			return num;
		}
		console.log(getRandom());
		return {
			playFlag:state.playFlag,
			index: getRandom(),
			data:Data,
			playModule:state.playModule
		}
	}
},{
	index:0,
    playFlag:false,
    data:Data,
    playModule:0   	//0 循环播放  1 单曲循环 2随机播放
})