import { 
    PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,
    PRODUCT_CATEGORY_LIST_REQUEST,
    PRODUCT_CATEGORY_LIST_SUCCESS,
    PRODUCT_CATEGORY_LIST_FAIL,
    PRODUCT_RANDOM_REQUEST,
    PRODUCT_RANDOM_SUCCESS,
    PRODUCT_RANDOM_FAIL

} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
};

export const productCategoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case PRODUCT_CATEGORY_LIST_REQUEST:
            return { loading: true }
        case PRODUCT_CATEGORY_LIST_SUCCESS:
            return { loading: false, categories: action.payload }
        case PRODUCT_CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
};

export const productDetailsReducer = (state = { product: { } }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
};

export const productDeleteReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true }
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true}
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
};

export const productCreateReducer = (state = {} , action) => {
    switch(action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true }
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case PRODUCT_CREATE_RESET:
            return {}
        default:
            return state
    }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case PRODUCT_UPDATE_REQUEST:
        return { loading: true }
      case PRODUCT_UPDATE_SUCCESS:
        return { loading: false, success: true, product: action.payload }
      case PRODUCT_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case PRODUCT_UPDATE_RESET:
        return { product: {} }
      default:
        return state
    }
  };

  export const productRandomReducer = (state = { products: [] } , action) => {
    switch(action.type) {
        case PRODUCT_RANDOM_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_RANDOM_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_RANDOM_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
};


