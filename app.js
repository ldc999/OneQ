//app.js
App({
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  onLaunch: function () {
    try {
     // wx.clearStorageSync();
      wx.getSystemInfo({
        success: e => {
          this.globalData.StatusBar = e.statusBarHeight;
          let custom = wx.getMenuButtonBoundingClientRect();
          this.globalData.Custom = custom;
          this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
        }
      })
    } catch (e) { }
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({ 
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) { 
            wx.getUserInfo({
              success: function (resS) {
                that.globalData.userInfo = resS.userInfo ;
              typeof cb == "function" && cb(that.globalData.userInfo)  
              }
            })
          }
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})