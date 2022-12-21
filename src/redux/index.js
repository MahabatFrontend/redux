import {applyMiddleware, compose, createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'
import rootReducers from './reducers/index';


const initialStore = {}
const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose 
const composeEnhangers = composeFunc(applyMiddleware(thunk))
const store = createStore(rootReducers(), initialStore, composeEnhangers)

export default store;

