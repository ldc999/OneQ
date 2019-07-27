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
      wx.clearStorageSync();
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
        success: function (res) {
          if (res.code) { 
            console.log('获取用户登录成功！' )
            wx.getUserInfo({
            success: function (ress) {
              that.globalData.userInfo = ress.userInfo ;
            typeof cb == "function" && cb(that.globalData.userInfo) 
            }
            })
            } else {
            console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  } 
  },
  globalData: {
    userInfo: null
  }
})