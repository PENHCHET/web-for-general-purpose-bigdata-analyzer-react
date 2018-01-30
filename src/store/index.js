import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'
import promise from 'redux-promise-middleware'

export default createStore(
    rootReducer,
    applyMiddleware(
        logger,
        promise()
    )
)