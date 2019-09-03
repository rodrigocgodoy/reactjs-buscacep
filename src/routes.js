import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Telainicial from './components/Telainicial'
import Telasearch from './components/Telainicial'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Telainicial} />
            <Route path='/search/:cep' component={Telasearch} />
        </Switch>
    </BrowserRouter>
)

export default Routes