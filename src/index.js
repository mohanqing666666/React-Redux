import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers/counter';

const store=createStore(reducer);
store.subscribe(()=>console.log("state updated", store.getState()));

//function user(state = {name: 'redux'}, action) {
//    switch (action.type) {
//        case 'CHANGE_NAME':
//            return {
//                ...state,
//                name: action.name
//            }
//    }
//
//    return state
//}
//function project(state = {name: 'min-react'}, action) {
//    switch (action.type) {
//        case 'CHANGE_NAME':
//            return {
//                ...state,
//                name: action.name
//            }
//    }
//
//    return state
//}
//var rootReducer = combineReducers({
//    user,
//    project
//})
//
//var store = createStore(rootReducer)
//
//console.log(store.getState())


const render =()=>{
    ReactDOM.render(<App onIncream={()=>store.dispatch({type:"INCREMENT"})} deCrease={()=>store.dispatch({type:"DECREMENT"})} value={store.getState()} />, document.getElementById('root'));
}

render();

store.subscribe(render);
serviceWorker.unregister();
