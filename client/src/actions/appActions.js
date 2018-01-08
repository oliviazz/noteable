import {
  SET_AUTH,
  CHANGE_FORM,
  SENDING_REQUEST,
  LOADING_AUTH,
  SET_ERROR_MESSAGE,
  SET_DATA
} from '../constants/AppConstants'

export function login(username, password) {
  return dispatch => {
    dispatch(sendingRequest(true))
    dispatch(setErrorMessage(''))
    fetch('/api/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        if (res.ok) return res.json()
        else throw new Error(res.statusText)
      })
      .then(data => {
        dispatch(sendingRequest(false))
        dispatch(setAuthState(true))
      })
      .catch(error => {
        dispatch(sendingRequest(false))
        dispatch(setErrorMessage('Login failed'))
      })
  }
}

export function loadData(path, name) {
  return dispatch => {
    dispatch(setData({ [name]: '' }))
    dispatch(sendingRequest(true))
    dispatch(setErrorMessage(''))
    api(`/api${path}`)
      .then(data => {
        dispatch(sendingRequest(false))
        dispatch(setData({ [name]: data.message }))
      })
      .catch(error => {
        dispatch(sendingRequest(false))
        dispatch(setErrorMessage('Error loading data'))
      })
  }
}

export function loadMe() {
  return dispatch => {
    dispatch(loadingAuth(true))
    dispatch(setErrorMessage(''))
    api('/api/me')
      .then(data => {
        dispatch(loadingAuth(false))
        dispatch(setAuthState(data.isLoggedIn))
      })
      .catch(error => {
        dispatch(loadingAuth(false))
      })
  }
}

export function logout() {
  return dispatch => {
    dispatch(sendingRequest(true))
    dispatch(setErrorMessage(''))
    api('/api/logout')
      .then(data => {
        dispatch(sendingRequest(false))
        dispatch(setAuthState(data.isLoggedIn))
      })
      .catch(error => {
        dispatch(sendingRequest(false))
        dispatch(setErrorMessage('Error logging out'))
      })
  }
}

export function setErrorMessage(message) {
  return { type: SET_ERROR_MESSAGE, message }
}

export function changeForm(newState) {
  return { type: CHANGE_FORM, newState }
}

function setAuthState(newState) {
  return { type: SET_AUTH, newState }
}

function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending }
}

function loadingAuth(sending) {
  return { type: LOADING_AUTH, sending }
}

function setData(data) {
  return { type: SET_DATA, data }
}

function api(path) {
  return fetch(path, { credentials: 'same-origin' }).then(res => {
    if (res.ok) return res.json()
    else throw new Error(res.statusText)
  })
}
