let app = getApp()

Page({
  data: {
    currentTab: 0,
    // items: [
    //   {
    //     "icon": 'cuIcon-homefill', 
    //     "text": "首页"
    //   },
    //   {
    //     "icon": 'cuIcon-add', 
    //     "text": "发布",
    //     "action": true,
    //     "actionClass": 'bg-green'
    //   },
    //   {
    //     "icon": 'cuIcon-peoplefill', 
    //     "text": "我的"
    //   }
    // ]
  },
  swichNav: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.current
    })
  },
  onLoad: function (option) {

  },

})
