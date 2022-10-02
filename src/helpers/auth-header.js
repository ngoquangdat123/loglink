export function authHeader () {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user && user.id_token) {
    return {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + user.id_token
    }
  } else {
    return {}
  }
}
