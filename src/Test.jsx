import React from 'react';
import Player from './components/Player.js';
import { render } from 'react-dom';
import store from './store/store.js';
import {Provider} from 'react-redux';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Test';
    }
    render() {
			return(
				<Provider store={store}>
				 <div>
					<Player />
				 </div>
				</Provider>
			)
    };
}

export default Test;





