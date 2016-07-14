import {createStore} from 'redux';
import reducers from './reducers';


// const store = createStore(reducers);
let store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());
export default store;

