export default {
    path: "/",
    getComponent: (nextState, cb) => {
        return require.ensure([], (require) => {
            cb(null, require('./components/App').default)
        }, "App")
    },
    indexRoute: { onEnter: (nextState, replace) => replace('/group') },
    childRoutes: [{
        path: '/wenda',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('./components/Wenda').default)
            }, "Wenda")
        }
    }, {
        path: '/school',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('./components/School').default)
            }, "School")
        }
    }, {
        path: '/about',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('./components/About').default)
            }, "About")
        }
    }
    , {
        path: '/group',
        getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
                cb(null, require('./components/Group').default)
            }, "Group")
        }
    }
]
}
