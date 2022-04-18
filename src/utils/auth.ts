import Cookies from 'js-cookie'

export function getToken(TokenKey='token') {
  return Cookies.get(TokenKey)
}

export function setToken(token,TokenKey='token') {
  return Cookies.set(TokenKey, token)
}

export function removeToken(TokenKey='token') {
  return Cookies.remove(TokenKey)
}
