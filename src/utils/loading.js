const show = (title) => {
  uni.showLoading({
    title: title ? title : '加载中',
    mask: true
  });
}

const hide = () => {
  uni.hideLoading();
}

export default {
  show, hide
}