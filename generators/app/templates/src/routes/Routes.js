'use strict';

import React from 'react';
import { Router, Route, Link, IndexRedirect } from 'react-router';
import { hashHistory } from 'react-router';
import { browserHistory } from 'react-router';

var HomePage = require('../components/HomeComponent');
var ErrorPage = require('../components/ErrorComponent');

var Routes = (
    <Router history={hashHistory}>
        <Route path='/' component={HomePage} />
        <Route path='/*' component={ErrorPage} />
    </Router>
);

module.exports = Routes;
