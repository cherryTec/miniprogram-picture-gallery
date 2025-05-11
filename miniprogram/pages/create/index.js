Page({
  data: {
    prompt: '',
    negativePrompt: '',
    styleTags: [
      { id: 1, name: '写实', selected: false },
      { id: 2, name: '动漫', selected: false },
      { id: 3, name: '电影感', selected: false },
      { id: 4, name: '梦幻', selected: false },
      { id: 5, name: '水彩', selected: false },
      { id: 6, name: '复古', selected: false },
      { id: 7, name: '未来', selected: false },
      { id: 8, name: '赛博朋克', selected: false }
    ],
    showPromptExamples: false,
    promptExamples: [
      '一只金毛狗在草地上奔跑，阳光照射，写实风格',
      '科幻城市夜景，霓虹灯，赛博朋克风格',
      '水下宫殿，珊瑚和鱼群，蓝色氛围，梦幻风格',
      '古代中国山水画，雾气缭绕的山峰，小船在江面上行驶'
    ]
  },

  updatePrompt(e) {
    this.setData({
      prompt: e.detail.value
    });
  },

  updateNegativePrompt(e) {
    this.setData({
      negativePrompt: e.detail.value
    });
  },

  toggleStyleTag(e) {
    const index = e.currentTarget.dataset.index;
    const styleTags = [...this.data.styleTags];
    styleTags[index].selected = !styleTags[index].selected;
    this.setData({ styleTags });
  },

  showExamples() {
    this.setData({
      showPromptExamples: true
    });
  },

  hideExamples() {
    this.setData({
      showPromptExamples: false
    });
  },

  useExample(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      prompt: this.data.promptExamples[index],
      showPromptExamples: false
    });
  },

  generateImage() {
    // 实际项目中这里会调用生成图片的API
    // 这里仅作为示范，直接跳转到发布页面
    wx.navigateTo({
      url: '/pages/publish/index?prompt=' + encodeURIComponent(this.data.prompt)
    });
  },

  goBack() {
    wx.navigateBack();
  }
}); 