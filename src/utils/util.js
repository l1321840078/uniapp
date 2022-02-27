import { jsapiTokens, wxAuth, getUserInfo } from "./api";
//获取字符串的真实长度（字节长度）
const strLeng = (str) => {
  if (str) {
    let len = str.length, truelen = 0;
    for (let x = 0; x < len; x++) {
      if (str.charCodeAt(x) > 128) {
        truelen += 2;
      } else {
        truelen += 1;
      }
    }
    return truelen;
  } else {
    return 0;
  }
}


// 数字计算精度丢失问题。。。。。。。。。。。。。。。
// 除法
const accDiv = (arg1, arg2) => {
  var t1 = 0, t2 = 0, r1, r2;
  try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
  try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
  r1 = Number(arg1.toString().replace(".", ""))
  r2 = Number(arg2.toString().replace(".", ""))
  return accMul((r1 / r2), pow(10, t2 - t1));
}
//乘法 
const accMul = (arg1, arg2) => {
  var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
  try { m += s1.split(".")[1].length } catch (e) { }
  try { m += s2.split(".")[1].length } catch (e) { }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}
//加法 
const accAdd = (arg1, arg2) => {
  var r1, r2, m;
  try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2))
  return (arg1 * m + arg2 * m) / m
}
//减法 
const Subtr = (arg1, arg2) => {
  var r1, r2, m, n;
  try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2));
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

const initJssdk = () => {
  return new Promise((resolve, reject) => {
    const uri = encodeURIComponent(window.location.href.split('#')[0]); //获取当前url然后传递给后台获取授权和签名信息  
    jsapiTokens({ url: uri }).then(res => {
      wx.config({
        debug: false,
        appId: res.data.appId,
        timestamp: res.data.timestamp,
        nonceStr: res.data.nonceStr,
        signature: res.data.signature,
        jsApiList: [ //这里是需要用到的接口名称  
          'checkJsApi', //判断当前客户端版本是否支持指定JS接口  
          'scanQRCode', //扫一扫接口  
          'updateTimelineShareData', //分享到朋友圈
          'updateAppMessageShareData', //分享给朋友
          'hideAllNonBaseMenuItem' //隐藏所有非基础按钮接口
        ]
      });
      wx.ready(() => {
        resolve()
      });
    })
  })
}


const getOpenId = () => {
  return new Promise((resolve, reject) => {
    const app = getApp();
    console.log(app.globalData.openid, 12312)
    if (app.globalData.openid) { //已授权
      resolve()
      return
    }

    if (sessionStorage.openid) { //浏览器记录openid避免刷新页面重复授权
      setGlobalDataInfo(); //globalData赋值
      resolve()
      return
    }

    let code, urlTo;
    // switch (app.globalData.env.channel) {
    //   case '1':
    //     code = util.getUrlParamVal(window.location, 'code');
    //     urlTo = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + 'wx636607883b52d355' +
    //       '&redirect_uri=' + encodeURIComponent(location.href) +
    //       '&response_type=code&scope=snsapi_userinfo&state=0#wechat_redirect';
    //     break;
    //   case '2':
    //     return;
    //     code = util.getUrlParamVal(window.location, 'auth_code');
    //     urlTo = 'https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?appid=' + app.globalData.env
    //       .alipayAppId + '&scope=auth_user&redirect_uri=' + encodeURIComponent(location.href) + '&state=0';
    //     break;
    //   case 'OTHER': //防止外部浏览器刷新
    //     return;
    // }
    code = getUrlParamVal(window.location, 'code');
    urlTo = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + 'wx636607883b52d355' +
      '&redirect_uri=' + encodeURIComponent(location.href) +
      '&response_type=code&scope=snsapi_userinfo&state=0#wechat_redirect';
    if (null != code) {
      //获取code以后进行重定向
      window.history.pushState(null, null, getDeleteNameUrl());

      getOpenIdReq(code).then(() => {
        resolve()
      })
    } else {
      location.replace(urlTo);
    }
  })
}

const getOpenIdReq = (code) => {
  return new Promise((resolve, reject) => {
    wxAuth({ code: code }).then(res => {
      console.log(111111, res.data)
      UserInfo(res.data).then(() => {
        resolve()
      })
    }).catch(() => {
      location.replace(window.location.href);
    })
  })

}

const UserInfo = (openid) => {
  return new Promise((resolve, reject) => {
    getUserInfo({
      channel: '1',
      openid: openid
    }).then(res => {
      sessionStorage.openid = res.data.openid;
      sessionStorage.nickName = res.data.nickName;
      sessionStorage.headImgUrl = res.data.headImgUrl;
      sessionStorage.memberType = res.data.memberType;
      sessionStorage.uid = res.data.uid;
      setGlobalDataInfo(); //globalData赋值
      resolve()
    })
  })
}

const setGlobalDataInfo = () => {
  const app = getApp();
  app.globalData.openid = sessionStorage.openid;
  app.globalData.nickName = sessionStorage.nickName;
  app.globalData.headImgUrl = sessionStorage.headImgUrl;
  app.globalData.uid = sessionStorage.uid;

}

//获取链接参数值---正则解析 []查找方括号之间任何字符 [^]查找任何不在方括号之间的字符 ()查找任何指定的选项
const getUrlParamVal = (getUrl, name) => {
  var url = decodeURIComponent(getUrl);
  var reg = new RegExp(`[&?]${name}=([^&%#]+)`);
  var matchArray = url.match(reg);
  return matchArray === null ? null : matchArray[1];
}

const getDeleteNameUrl = () => { //去除url的参数 code和state后刷新页面重新授权
  const loca = window.location;
  const hash = loca.hash;
  const baseUrl = loca.origin + loca.pathname;
  const query = decodeURIComponent(loca.search.split('?')[1]);
  if (!query) {
    return loca
  }
  let obj = {}
  let arr = query.indexOf('&') > -1 ? query.split("&") : [query];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("=");
    obj[arr[i][0]] = arr[i][1];
  };
  delete obj['code'];
  delete obj['state'];
  const url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&") + hash;
  // window.location.href = url;
  return url;
}

//页面公共处理事件
const commonDetail = () => {
  return new Promise((resolve, reject) => {
    if (getCurrentPages().length > 0 && getApp().globalData.disShow == getCurrentPages()[getCurrentPages().length - 1].route) {//禁止页面重载 1-扫码 2-支付
      getApp().globalData.disShow = '';//
      return;
    }
    getApp().globalData.disShow = '';//进入页面重置上个页面值
    resolve()
  })
}


export default {
  strLeng,
  accDiv,
  accMul,
  accAdd,
  Subtr,
  initJssdk,
  getUrlParamVal,
  getOpenId,
  commonDetail
}