import 
{ ACCESSORY_LIST_REQUEST,
    ACCESSORY_LIST_SUCCESS,
    ACCESSORY_LIST_FAIL,
    ACCESSORY_DETAILS_REQUEST,
    ACCESSORY_DETAILS_SUCCESS,
    ACCESSORY_DETAILS_FAIL,
    ACCESSORY_DELETE_REQUEST,
    ACCESSORY_DELETE_SUCCESS,
    ACCESSORY_DELETE_FAIL,
    ACCESSORY_CREATE_REQUEST,
    ACCESSORY_CREATE_SUCCESS,
    ACCESSORY_CREATE_FAIL,
    ACCESSORY_CREATE_RESET,
    ACCESSORY_UPDATE_REQUEST,
    ACCESSORY_UPDATE_SUCCESS,
    ACCESSORY_UPDATE_FAIL,
    ACCESSORY_UPDATE_RESET 
} from '../constants/accessoryConstants'

export const accessoryListReducer = (state = { accessories: [] }, action) => {
    switch (action.type) {
        case ACCESSORY_LIST_REQUEST:
            return { loading: true, accessories: [] }
        case ACCESSORY_LIST_SUCCESS:
            return { loading: false, accessories: action.payload }
        case ACCESSORY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
};

export const accessoryDetailsReducer = (state = { accessory: { } }, action) => {
    switch (action.type) {
        case ACCESSORY_DETAILS_REQUEST:
            return { loading: true, ...state }
        case ACCESSORY_DETAILS_SUCCESS:
            return { loading: false, accessory: action.payload }
        case ACCESSORY_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
};

export const accessoryDeleteReducer = (state = { accessory: {} }, action) => {
    switch (action.type) {
        case ACCESSORY_DELETE_REQUEST:
            return { loading: true }
        case ACCESSORY_DELETE_SUCCESS:
            return { loading: false, success: true}
        case ACCESSORY_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
};

export const accessoryCreateReducer = (state = {} , action) => {
    switch(action.type) {
        case ACCESSORY_CREATE_REQUEST:
            return { loading: true }
        case ACCESSORY_CREATE_SUCCESS:
            return { loading: false, success: true, accessory: action.payload }
        case ACCESSORY_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case ACCESSORY_CREATE_RESET:
            return {}
        default:
            return state
    }
};

export const accessoryUpdateReducer = (state = { accessory: {} }, action) => {
    switch (action.type) {
      case ACCESSORY_UPDATE_REQUEST:
        return { loading: true }
      case ACCESSORY_UPDATE_SUCCESS:
        return { loading: false, success: true, accessory: action.payload }
      case ACCESSORY_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case ACCESSORY_UPDATE_RESET:
        return { accessory: {} }
      default:
        return state
    }
  };