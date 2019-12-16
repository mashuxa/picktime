import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {App} from './components/App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home';
import {createStore} from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' component={() => <Home store={store}/>}/>
                    <Route path='*' component={Error}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
), document.getElementById('picktime'));
