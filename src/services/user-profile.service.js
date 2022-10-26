import { apiUrl } from '@/constants/config'
import { authHeader } from '../helpers'
import { userService } from './user.services'

export const userProfileService = {
    listUserProfile,
    createUserProfile,
    detailUserProfile,
    deleteUserProfile,
    updateUserProfile
}

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
function detailUserProfile (id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(`${apiUrl}/api/user-profiles/${id}`, requestOptions)
        .then(handleResponse)
        .then((res) => {
            return res
        })
}
function deleteUserProfile (id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    }
    return fetch(`${apiUrl}/api/user-profiles/${id}`, requestOptions)
        .then(handleResponse)
        .then((res) => {
            return res
        })
}
function createUserProfile (payload) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(payload)
    }
    return fetch(`${apiUrl}/api/user-profiles`, requestOptions)
        .then(handleResponse)
        .then((res) => {
            return res
        })
}
function updateUserProfile (payload) {
    const requestOptions = {
        method: 'PUT',
        headers: authHeader(),
        body: JSON.stringify(payload)
    }
    return fetch(`${apiUrl}/api/user-profiles`, requestOptions)
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
