import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router'

import common from './pages/common'
import index from './pages/index'
import zhibo from './pages/zhibo'
import shipin from './pages/shipin'


class Routes extends Component {
    updateHandle() {
        console.log('每次router变化就会触发')
    }
    render() {
        return (
            <Router history = {this.props.history} onUpdate = {this.updateHandle.bind(this)}>
                <Route path="/" component = {common}>
                    <IndexRoute component = {index}></IndexRoute>
                    <Route path="/zhibo" component={zhibo}></Route>
                    <Route path="/shipin" component={shipin}></Route>
                </Route>
            </Router>
        )
    }
}

export default Routes