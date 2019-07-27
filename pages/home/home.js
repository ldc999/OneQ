var app = getApp()
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支
  },
   properties: {
     
   },
  data: {
    cardCur: 0,
    Testtext: String,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    Headlines: [{
      id: 1,
      title: "测试标题1",
      type: 1
    }, {
      id: 2,
      title: "测试标题2",
      type: 2
    }, {
      id: 3,
      title: "测试标题3",
      type: 3
    }, {
      id: 4,
      title: "测试标题4",
      type: 4
    }],
  },
  //组件生命周期函数-在组件实例进入页面节点树时执行)
  attached() {
    console.log("home")  
  },
  ready() {
    console.log("home ready ")
  },
  methods: {
   // cardSwiper
   cardSwiper(e)  {
    this.setData({
      cardCur: e.detail.current
    })
   }
  }
})