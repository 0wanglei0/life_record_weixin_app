Page({
  data: {
    //顶部轮播图
    imgUrls: [
      'cloud://wanger-open-0g5h5gklbc8e580f.7761-wanger-open-0g5h5gklbc8e580f-1304491538/images/1.jpg',
      'cloud://wanger-open-0g5h5gklbc8e580f.7761-wanger-open-0g5h5gklbc8e580f-1304491538/images/2.jpg',
      'cloud://wanger-open-0g5h5gklbc8e580f.7761-wanger-open-0g5h5gklbc8e580f-1304491538/images/3.jpg'
    ],
    //第二部分数据数组
    contentImgUrls:[
      {
        title:'我们',
        url:'cloud://wanger-open-0g5h5gklbc8e580f.7761-wanger-open-0g5h5gklbc8e580f-1304491538/images/4.jpg'
      },{
        title:'在一起',
        url:'cloud://wanger-open-0g5h5gklbc8e580f.7761-wanger-open-0g5h5gklbc8e580f-1304491538/images/5.jpg'
      },{
        title:'的第',
        url:'cloud://wanger-open-0g5h5gklbc8e580f.7761-wanger-open-0g5h5gklbc8e580f-1304491538/images/6.jpg'
      },{
        title:'711天',
        url:'cloud://wanger-open-0g5h5gklbc8e580f.7761-wanger-open-0g5h5gklbc8e580f-1304491538/images/7.jpg'
      }
    ],
    //死三部分数据
    HotImgUrls: [
      {
        //头像地址,文字标题,文字内容,图片地址
        head:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037527703,3129433808&fm=27&gp=0.jpg',
        title:'海拉尔平原的冒险',
        content: '海拉尔区是隶属内蒙古自治区呼伦贝尔市的一个市辖区，是呼伦贝尔市政治、经济、文化中心。该区位于内蒙古自治区东北部，区域范围为东经119°30′48〃— 120°35′36〃；北纬49°5′44〃—19°27′15〃，面积1440平方公里。',
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1532027772,1266945951&fm=27&gp=0.jpg'
      },
      {
        head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037527703,3129433808&fm=27&gp=0.jpg',
        title: '拯救塞尔达公主吧',
        content: '卓拉公主-弥法老婆',
        url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2404695142,3634522143&fm=27&gp=0.jpg'
      },
      {
        head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037527703,3129433808&fm=27&gp=0.jpg',
        title: '快速开地图塔',
        content: '塞尔达公主',
        url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2225874892,982427892&fm=26&gp=0.jpg'
      },
      {
        head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037527703,3129433808&fm=27&gp=0.jpg',
        title: '滑翔伞获得攻略',
        content: '塞尔达公主',
        url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4216945098,3102493232&fm=26&gp=0.jpg'
      }
    ],
    indicatorDots: true, //显示面板显示点
    autoplay: false,  //自动切换
    interval: 5000,  //切换时间
    duration: 1000  //动画时长
  },

  clickImg: function(e){
    var imgUrl = e.currentTarget.dataset['index'];
    wx.previewImage({
      urls: [imgUrl], //需要预览的图片http链接列表，注意是数组
      current: '', // 当前显示图片的http链接，默认是第一个
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})