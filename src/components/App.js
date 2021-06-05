import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './NotFound'
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
                    <Route path="/404" component={NotFound} />
                    <Redirect from="*" to="/404" />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;