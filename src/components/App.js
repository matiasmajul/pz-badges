import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout'
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

function App() {
    return (
        <BrowserRouter>
            <Layout>

                <Switch>
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges" component={Badges} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;