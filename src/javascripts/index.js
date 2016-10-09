import 'babel-polyfill'
import '../stylesheets/index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, useRouterHistory } from 'react-router'
// import createHistory from 'history/createBrowserHistory'
import routes from "./route.js"

// const history = useRouterHistory({
//   basename: ``
// })
ReactDOM.render((
    <Router
        history={browserHistory}
        routes={routes}
        />
), document.getElementById('root'));
