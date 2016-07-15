import {createAction} from 'redux-actions';
import {PLAY_MUSIC, NEXT_SONG, PREV_SONG, PLAY_MODULE, RANDOM_PLAY} from './constants';

export const playmusic = createAction(PLAY_MUSIC);
export const nextsong = createAction(NEXT_SONG);
export const prevsong = createAction(PREV_SONG);
export const playmodule = createAction(PLAY_MODULE);
export const randomplay = createAction(RANDOM_PLAY);
