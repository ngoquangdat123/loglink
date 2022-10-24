import { apiUrl } from '@/constants/config'
import { authHeader } from '../helpers'
import { userService } from './user.services'

export const auctionService = {
  getAuction,
  getAuctionById,
  deleteAuctionById,
  getTransportMethod,
  addAuction,
  updateAuction,
  getContainerTypes,
  addRfq,
  addBid,
  getBid,
  listUserProfile
}

// Báo giá
function addBid (payload) {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify(payload)
  }
  return fetch(`${apiUrl}/api/bids`, requestOptions)
      .then(handleResponse)
      .then((res) => {
        return res
      })
}

function getBid (payload = '') {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${apiUrl}/api/bids?` + payload, requestOptions)
      .then(handleResponse)
      .then((res) => {
        return res
      })
}
// Báo giá



// Yêu cầu báo giá
function addRfq (payload = '') {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${apiUrl}/api/quick-sea-quotes?` + payload, requestOptions)
    .then(handleResponse)
    .then((res) => {
      return res
    })
}
// Yêu cầu báo giá

// Auction
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

function deleteAuctionById (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }

  return fetch(`${apiUrl}/api/auctions/${id}`, requestOptions).then(handleResponse)
}

function getTransportMethod () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${apiUrl}/api/transport-methods`, requestOptions).then(handleResponse)
}

function updateAuction (payload) {
  const requestOptions = {
    method: 'PUT',
    headers: authHeader(),
    body: JSON.stringify(payload)
  }

  return fetch(`${apiUrl}/api/auctions`, requestOptions)
      .then(handleResponse)
      .then((res) => {
        return res
      })
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
// Auction

// User profile
function listUserProfile (payload = '') {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${apiUrl}/api/user-profiles?` + payload, requestOptions)
      .then(handleResponse)
      .then((res) => {
        return res
      })
}
// User profile


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
