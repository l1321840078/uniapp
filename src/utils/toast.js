const message = (title) => {
  uni.showToast({
    title: title,
    duration: 1500,
    icon: 'none'
  });
}

export default {
  message
}