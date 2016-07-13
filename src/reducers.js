import {handleActions} from 'redux-actions';
import {PLAY_MUSIC, PREV_SONG, NEXT_SONG} from './constants';
import Data from './data.js'

export default handleActions({
	[PLAY_MUSIC]: (state,action) => {
		return {
			playFlag:!state.playFlag,
			index:0,
			data:Data
		}
	},
	[PREV_SONG]: (state,action) => {
		let length = Data.length;
		return {
			playFlag:state.playFlag,
			index:state.index == 0 ? length-1 : state.index --,
			data:Data
		}
	}
},{
	index:0,
    playFlag:false,
    data:Data
})