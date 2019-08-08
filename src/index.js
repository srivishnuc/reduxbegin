
import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'




import {createStore} from 'redux'
import combineReducers from './reducers/index'

import {Toggle} from './actions/index'

import App from './containers/App'

const store = createStore(combineReducers)


window.store = store
window.Toggle  = Toggle

ReactDOM.render(<Provider store = {store}><App/> </Provider> , document.getElementById('root'))