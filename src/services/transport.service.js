import { apiUrl } from '@/constants/config'
import { authHeader } from '../helpers'
import { userService } from './user.services'

export const transportService = {
  getTransport,
}


function getTransport () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`${apiUrl}/api/transport-routes`, requestOptions).then(handleResponse)
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
