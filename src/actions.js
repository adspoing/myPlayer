import {createAction} from 'redux-actions';
import {PLAY_MUSIC, NEXT_SONG, PREV_SONG} from './constants';

export const playmusic = createAction(PLAY_MUSIC);
export const nextsong = createAction(NEXT_SONG);
export const prevsong = createAction(PREV_SONG);