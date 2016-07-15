import {createStore} from 'redux';
import reducers from '../reducers/reducers.js';


// const store = createStore(reducers);
let store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());
export default store;

