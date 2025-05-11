Page({
  data: {
    prompt: '',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23'
  },

  onLoad(options) {
    if (options.prompt) {
      this.setData({
        prompt: decodeURIComponent(options.prompt)
      });
    }
  },

  regenerateImage() {
    // 实际项目中，这里会调用重新生成图片的API
    // 这里仅作为示范，显示一个提示
    wx.showToast({
      title: '重新生成中...',
      icon: 'loading',
      duration: 2000
    });
  },

  publishImage() {
    // 实际项目中，这里会调用发布图片的API
    // 这里仅作为示范，显示一个提示，然后返回首页
    wx.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 1500
    });
    
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/home/index'
      });
    }, 1500);
  },

  goBack() {
    wx.navigateBack();
  }
});