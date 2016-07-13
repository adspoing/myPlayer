import React from 'react';
import Player from './Player.js';
import { render } from 'react-dom';
import store from './store';
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





