import { apiUrl } from '@/constants/config'
import { authHeader } from '../helpers'
import { userService } from './user.services'

export const auctionService = {
  getAuction,
  getAuctionById,
  getTransportMethod,
  addAuction,
  getContainerTypes
}

function getTransportMethod () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${apiUrl}/api/transport-methods`, requestOptions).then(handleResponse)
}

function addAuction (payload) {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(payload)
  }

  return fetch(`${apiUrl}/api/auctions`, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res
    })
}

function getAuction () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${apiUrl}/api/auctions`, requestOptions).then(handleResponse)
}
function getContainerTypes () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${apiUrl}/api/container-types`, requestOptions).then(handleResponse)
}

function getAuctionById (id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${apiUrl}/api/auctions/${id}`, requestOptions).then(handleResponse)
}

function handleResponse (response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // tự động logout nếu response 401 được trả về từ api
        userService.logout()
        window.open('/', '_self')
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
