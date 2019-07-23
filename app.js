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
      wx.clearStorageSync()
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
                that.globalData.userInfo = resS.userInfo
                //1.先获取openid
                wx.request({
                  url: 'http://129.204.166.225/SteelService.asmx/GetOpenID',
                  method: 'post',
                  data: {
                    code: res.code
                  },
                  header: {
                    'content-type': 'application/x-www-form-urlencoded'
                  },
                  success: function (res) {
                    var response = res.data;
                    console.log("res:" + res.data);
                    that.globalData.openid = res.data.openid;//获取到的openid
                    console.log(that.globalData.openid);
                    //2.获取opnenid成功后登陆(注册)获取userId
                    typeof cb == "function" && cb(that.globalData.userInfo)
                    var usermodel = {};
                    usermodel.Name = resS.userInfo.nickName;
                    usermodel.Phone = '18712345678';
                    usermodel.WechatCode = that.globalData.openid;
                    usermodel.status = '1';
                    console.log(JSON.stringify(usermodel))
                    wx.request({
                      url: 'http://129.204.166.225/SteelService.asmx/LoginUserBackID',
                      method: 'post',
                      data: {
                        model: JSON.stringify(usermodel)
                      },
                      header: {
                        'content-type': 'application/x-www-form-urlencoded'
                      },
                      success: function (res) {
                        var response = res.data;
                        console.log(res);
                        if (response > 0) {
                          //保存为全局变量:
                          console.log('LoginUserBackID:' + response)
                        }
                        else //如果找不到，添加该用户也失败了
                        {
                          console.log('response' + response)
                        }
                      },
                      fail: function () {
                        console.log('FAIL')
                        return null
                      }
                    })
                  },
                  fail: function () {
                    console.log('FAIL')
                    return null
                  }
                })
               
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