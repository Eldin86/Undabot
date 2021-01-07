import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './Pages/Home'

function Content() {
    return (
        <div className="py-3">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>

    )
}

export default Content