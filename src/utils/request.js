import Toast from './toast.js'
import loading from './loading'
const baseUrl = require('./baseUrl')

// request请求封装
const request = (options) => {
  return new Promise((resolve, reject) => {
    if (options.loading) {
      loading.show()
    }
    uni.request({
      url: `${baseUrl.url}${options.url}`,
      method: options.method,
      data: options.data,
      header: {
        'content-type': options.contentType ? options.contentType : 'application/json'
      },
      success: res => {
        console.log(res, 222);
        const code = res.data.code || res.code
        if (options.loading) {
          loading.hide()
        }
        if (code === 0 || code === 200) {
          if (options.showMessage) Toast.message(res.data.message)
          resolve(res.data)
        } else {
          Toast.message(res.data.message)
        }
      },
      fail: error => {
        loading.hide()
        Toast.message('请求出错，请重试')
        reject(error.data)
      }
    })
  })
}

module.exports = request