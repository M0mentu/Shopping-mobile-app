import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers'
import Router from './Router'
import { Root } from "native-base";

import FBSDK from 'react-native-fbsdk'
import { Actions } from 'react-native-router-flux';
class App extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    render() {

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Root>
                    <Router />
                </Root>
            </Provider>
        );
    };
}


export default App;