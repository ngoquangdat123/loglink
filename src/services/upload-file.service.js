import { apiUrl } from '@/constants/config'

export const uploadService = {
    uploadSeaQuote,
    uploadTruckingQuote
}

function uploadSeaQuote (payload) {
    const user = JSON.parse(localStorage.getItem('user'))
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + user.id_token
        },
        body: payload
    }
    return fetch(`${apiUrl}/api/upload/seaquote`, requestOptions)
        .then(handleResponse)
        .then((res) => {
            return res
        })
}

function uploadTruckingQuote (payload) {
    const user = JSON.parse(localStorage.getItem('user'))
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + user.id_token
        },
        body: payload
    }
    return fetch(`${apiUrl}/api/upload/truckingquote`, requestOptions)
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
