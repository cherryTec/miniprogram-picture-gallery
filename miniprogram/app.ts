// app.ts
interface IGlobalData {
  userInfo: any;
  isLogin: boolean;
}

App<{
  globalData: IGlobalData,
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}>({
  globalData: {
    userInfo: null,
    isLogin: false
  },
  
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 检查登录状态
    const loginInfo = wx.getStorageSync('loginInfo')
    if (loginInfo) {
      this.globalData.isLogin = true
      this.globalData.userInfo = loginInfo
    }

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  }
})