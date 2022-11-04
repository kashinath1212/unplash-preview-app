import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import ProductSaga from "./Details/ProductSaga";
// import mySaga from "./Details/sagas";


// initial states here
const initalState = {};

// middleware
const sagaMiddleware = createSagaMiddleware();

// creating store
export const store = configureStore({
    reducer: rootReducer,
    initalState,
    middleware: ()=>[sagaMiddleware]
});

sagaMiddleware.run(ProductSaga)

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore, {debug: true});