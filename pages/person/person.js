var app = getApp()
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    userInfo:null,
    hidden: true,
    myProfile: [{ "desc": "我的等级", "id": "coin" }, { "desc": "我问的", "id": "myQues" }, { "desc": "我回答的", "id": "myHeared" }],
    myAccount: ["手机号码", "帮助", "结算说明", "关于一问十答"]
  },
  attached() {
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    }) 
    console.log("myperson page userInfo "+this.data.userInfo) 
    if (app.globalData.userInfo){
      that.setData({
        userInfo: app.globalData.userInfo
       })
      wx.hideLoading()
       return; 
    }
    // 查看是否授权 
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
         that.myGetuserinfo();
        }else{
          that.setData({
            hidden: false
          }) 
        }   
      }
    }),
    wx.hideLoading()
  },
  methods:{
    onPullDownRefresh: function (event) {
      //此处可实现下拉刷新数据，刷新完数据最好  wx.stopPullDownRefresh()；
      console.log('onPullDownRefresh');
    },
    scrollUpper(){
      console.log('触发顶部');
      wx.showToast({
        title: '触发顶部',
      })
    },
    myGetuserinfo(){
      var that = this
      if (!app.globalData.userInfo){
        that.setData({
          hidden: false
        })
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
          //更新数据
          if (userInfo) {
            that.setData({
              userInfo: userInfo
            })
          }
          console.log(that.data.userInfo)
          if (that.data.userInfo) {
            that.setData({
              hidden: true
            }) 
          }
        })
      }else{
        that.setData({
          userInfo: app.globalData.userInfo
        })
      }
      
    }
  }

  }) 
