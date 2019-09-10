var app = getApp()
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支
  },
   properties: {
     
   },
  data: {
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    tabNav: ['推荐', '最新', '赞过的'],
    cardCur: 0,
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
    hotData: [
      {
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
        type: 'image',
        context: " 生活中从来没有绝对的黑白对错，更多人，更多事，都是停留在灰色地带无可奈何；然而经历了世事的磨练，人间的冷暖，我们逐渐明白，任何一枚硬币都有两面性.\r\n所谓改变，只有把过去的抛之脑后，将来的顺其自然，在逆流中坦然，在复杂中淡然，学会长大，学会强大！"
      },
      {
        url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg",
        type: 'image',
        context: " 真正想送你东西的人，不会问你要不要，有人问你要不要的时候，最好拒绝。\r\n——网易云音乐热评《我有我爱我》"
      },
       {
         url: "https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg",
        type: 'image',
         context: " 很久以后才知道，原来和有些人最好的结局，就是互相杳无音信。。\r\n——网易云音乐热评《XXXXX》"
      },
    ],
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
   },
    lineschange: function () { },
    tabSelect(e) {
      console.log(e);
      this.setData({
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id - 1) * 60
      })
    }
  }
})