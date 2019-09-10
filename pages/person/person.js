var app = getApp()
let pageStart = 0;
let pageSize = 15;
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    isIphoneX: app.globalData.isIphoneX,
    requesting: false,
    end: false,
    endText:'我也是有底线的',
    page: 0,
    listData: [100], 
    refreshSize: 90,
    bottomSize:0,
    color: "#ff4158",
    items: [
      { name: 'red', value: '#ff4158', checked: 'true' },
      { name: 'black', value: '#003333' },
      { name: 'green', value: '#00FF33' },
      { name: 'yellow', value: '#CCFF00' },
    ],
    empty: false,
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
    getList(type, currentPage) {
      console.log(this.data.endText)
      this.setData({
        requesting: true
      })

      wx.showNavigationBarLoading()

      setTimeout(() => {
        this.setData({
          requesting: false
        })

        wx.hideNavigationBarLoading()
        console.log(this.data.endText)
        if (type === 'refresh') {
          this.setData({ 
           // page: currentPage + 1
          })
        } else {
          this.setData({ 
            end: true
          })
        }

      }, 1000)

    },
    // 刷新数据
    refresh() {
      this.getList('refresh', 0);
      this.setData({
        empty: false
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
