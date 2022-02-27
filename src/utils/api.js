const request = require('./request.js')


const jsapiTokens = (data) => {
  return request({ url: '/api/springx-lemobar-custom/wx/jsapi_tokens', method: 'get', data: data, loading: true })
}

const wxAuth = (data) => {
  var useragent = window.navigator.userAgent;
  let empowerChannel;
  if (-1 != useragent.indexOf("MicroMessenger")) {
    empowerChannel = 'WECHAT_MP';
  } else if (-1 != useragent.indexOf("AlipayClient")) {
    empowerChannel = 'ALIPAY';
  } else {
    empowerChannel = 'OTHER';
  }
  return request({ url: '/api/springx-auth/oauth/callback/' + empowerChannel, method: 'post', data: data, contentType: 'application/x-www-form-urlencoded', loading: true })
}

const getUserInfo = (data) => {
  return request({ url: '/api/springx-lemobar-custom/account/center/account/basic', method: 'get', data: data, loading: true })
}

export {
  jsapiTokens,
  wxAuth,
  getUserInfo
}