import { apiUrl } from '@/constants/config'
import { authHeader } from '../helpers'
import { userService } from './user.services'

export const transportService = {
  getTransport,
  detailTransport,
  deleteTransport,
  createTransport,
  updateTransport
}


function getTransport (payload = '') {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${apiUrl}/api/transport-routes?` + payload, requestOptions).then(handleResponse)
}

function detailTransport (id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${apiUrl}/api/transport-routes/${id}`, requestOptions)
      .then(handleResponse)
      .then((res) => {
        return res
      })
}
function deleteTransport (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }
  return fetch(`${apiUrl}/api/transport-routes/${id}`, requestOptions)
      .then(handleResponse)
      .then((res) => {
        return res
      })
}
function createTransport (payload) {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(payload)
  }
  return fetch(`${apiUrl}/api/transport-routes`, requestOptions)
      .then(handleResponse)
      .then((res) => {
        return res
      })
}
function updateTransport (payload) {
  const requestOptions = {
    method: 'PUT',
    headers: authHeader(),
    body: JSON.stringify(payload)
  }
  return fetch(`${apiUrl}/api/transport-routes`, requestOptions)
      .then(handleResponse)
      .then((res) => {
        return res
      })
}


function handleResponse (response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        userService.logout()
        window.open('/', '_self')
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
