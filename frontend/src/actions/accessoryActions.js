import axios from 'axios'
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
    ACCESSORY_UPDATE_REQUEST,
    ACCESSORY_UPDATE_SUCCESS,
    ACCESSORY_UPDATE_FAIL
} from '../constants/accessoryConstants'
import { logout } from './userActions'

export const listAccessories = () => async (dispatch) => {
    try {
        dispatch({ type: ACCESSORY_LIST_REQUEST })

        const { data } = await axios.get('/api/accessories')

        dispatch({
            type: ACCESSORY_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ACCESSORY_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const listAccessoryDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ACCESSORY_DETAILS_REQUEST,})

        const { data } = await axios.get(`/api/accessories/${id}`)

        dispatch({ type:
        ACCESSORY_DETAILS_SUCCESS,
        payload: data,
        })
    } catch (error) {
        dispatch({ 
        type: ACCESSORY_DETAILS_FAIL,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const deleteAccessory = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ACCESSORY_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization:`Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/api/accessories/${id}`, config)

        dispatch({
            type: ACCESSORY_DELETE_SUCCESS,
          })

    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
          }
          dispatch({
            type: ACCESSORY_DELETE_FAIL,
            payload: message,
          })
    }
}

export const createAccessory = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: ACCESSORY_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/accessories`, {}, config)
  
      dispatch({
        type: ACCESSORY_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: ACCESSORY_CREATE_FAIL,
        payload: message,
      })
    }
  }
  
  export const updateAccessory = (accessory) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ACCESSORY_UPDATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(
        `/api/accessories/${accessory._id}`,
        accessory,
        config
      )
  
      dispatch({
        type: ACCESSORY_UPDATE_SUCCESS,
        payload: data,
      })
      dispatch({ type: ACCESSORY_DETAILS_SUCCESS, payload: data })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: ACCESSORY_UPDATE_FAIL,
        payload: message,
      })
    }
  }