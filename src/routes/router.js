import React, { Component }  from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import Main from "../main";
import Hello from "../page/hello-world";
import Test from '../page/test'

class IRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/hello' component={Hello} />
                    <Route path='/test' component={Test} />
                    <Route path='/' component={Main}></Route>
                </Switch>

            </HashRouter>
        );
    }
}

export default IRouter;
