const request = require('./request.js')

const wxAuthLogin = (data) => {
  return request({ url: '/bbc/wx/login', method: 'post', data: data, loading: true })
}

export {
  wxAuthLogin
}