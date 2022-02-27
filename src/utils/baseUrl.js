
// 判断当前是正式、体验还是开发版本来配合不同的接口地址
// #ifdef MP-WEIXIN
const { miniProgram: { envVersion } } = wx.getAccountInfoSync();
// #endif
let url = '';
// #ifdef MP-WEIXIN
switch (envVersion) {
  case 'develop':
    url = `https://www.fjchebaobao.com:8443`;
    break;
  case 'trial':
    url = `https://www.fjchebaobao.com:8443`;
    break;
  case 'release':
    url = `https://www.fjchebaobao.com`;
    break;
}
// #endif
// #ifdef H5
// url = '/api'
url = 'https://o2ov2.lemobar.cn'
// #endif
console.log(url, 'url');

const baseUrl = {
  url: url,//正式
  imgUrl: `https://www.fjchebaobao.com:7443`
}
module.exports = baseUrl