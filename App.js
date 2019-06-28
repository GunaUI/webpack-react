import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './src/container/User';
import asyncComponent from './src/hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
    return import('./src/container/Pizza.js');
});

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> |
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/pizza" component={AsyncPizza} />
                </div>
            </div>
        );
    }
}
export default App;