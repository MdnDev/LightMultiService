import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
    productListReducer,
    productCategoryListReducer, 
    productDetailsReducer, 
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer } from './reducers/productReducers';

import 
{ 
    categoryListReducer, 
    categoryDetailsReducer, 
    categoryDeleteReducer,
    categoryCreateReducer,
    categoryUpdateReducer 
} from './reducers/categoryReducers';

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
    productCategoryList: productCategoryListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    categoryList: categoryListReducer,
    categoryDetails: categoryDetailsReducer,
    categoryDelete: categoryDeleteReducer,
    categoryCreate: categoryCreateReducer,
    categoryUpdate: categoryUpdateReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;