
import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
import { AuthReducer } from './Redux/reducer'

let rootReducer = combineReducers({isAuth:AuthReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store