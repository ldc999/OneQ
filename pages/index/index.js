const app = getApp()

Page({
  data: {
    titleBarOptions: {
      title: 'options设置的标题',
      center: true,
      'class': 'custom-class'
    },
    tabBarOptions: {
      active: 0,
      normalClass: 'text-gray',//正常状态样式
      activeClass: 'text-green',//激活后样式
      list: [
        {
          icon: 'cuIcon-homefill',
          page: 'home',
          text: '首页'
        },  
        {
          icon: 'cuIcon-add',
          page: 'home',
          text: '发布',
          action: true,
          actionClass: 'bg-green'
        }, 
        {
          icon: 'cuIcon-peoplefill',
          page: 'person',
          text: '我的'
        },
      ], 
    }
  },
  onLoad: function () {
  }
})
