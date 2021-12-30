import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
    productListReducer, 
    productDetailsReducer, 
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer } from './reducers/productReducers';

import {
        userLoginReducer,
        userDetailsReducer,
        userUpdateProfileReducer,
        userListReducer,
        userDeleteReducer,
        userUpdateReducer,
      } from './reducers/userReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;