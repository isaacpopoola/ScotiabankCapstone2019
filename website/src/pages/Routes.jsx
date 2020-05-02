import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BlogsPage from './blogs_page/BlogsPage.jsx';
import LandingPage from './landing_page/LandingPage.jsx'

export default () =>
    <Switch>
        <Route path='/' exact
            component={LandingPage} />
        <Route path='/blogs' exact
            component={BlogsPage} />
    </Switch>