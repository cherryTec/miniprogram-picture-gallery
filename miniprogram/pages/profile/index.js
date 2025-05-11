Page({
  data: {
    isLogin: false,
    userInfo: {
      avatarUrl: 'https://lingjing-online.cdn.bcebos.com/v1/lingjing-online/agent_logo/2024-11-20/9edf00ad-3c49-44b5-a6e2-0922560daa95.png',
      nickName: '微信用户'
    },
    images: [
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab',
        prompt: '一座山顶的城堡，日落时分，云雾缭绕，童话风格'
      },
      {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab',
        prompt: '一只小猫在窗台上，阳光透过窗户，温暖的氛围，写实风格'
      },
      {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab',
        prompt: '水下宫殿，珊瑚和鱼群，蓝色氛围，梦幻风格'
      }
    ]
  },

  onLoad() {
    // 检查登录状态
    this.checkLoginStatus();
  },

  checkLoginStatus() {
    const loginInfo = wx.getStorageSync('loginInfo');
    if (loginInfo) {
      this.setData({
        isLogin: true
      });
    }
  },

  login() {
    // 模拟登录
    const userInfo = {
      avatarUrl: 'https://lingjing-online.cdn.bcebos.com/v1/lingjing-online/agent_logo/2024-11-20/9edf00ad-3c49-44b5-a6e2-0922560daa95.png',
      nickName: '微信用户'
    };
    
    wx.setStorageSync('loginInfo', userInfo);
    
    this.setData({
      isLogin: true,
      userInfo: userInfo
    });
  },

  navigateToCreate() {
    wx.navigateTo({
      url: '/pages/create/index'
    });
  }
}); 