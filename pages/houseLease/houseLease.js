//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    movies: [
      { url: '../../images/u894.png', text: '夕阳无限好'},
      { url: '../../images/u895.png', text: '只是近黄昏'},
      { url: '../../images/u896.jpg', text: '本来无一物'},
      { url: '../../images/u897.png', text: '何处惹尘埃'}
    ],
    flg:3,
    flgtext:'夕阳无限好'
  },
  /*** 滑动切换tab***/
  intervalChange: function (e) {
    this.flg = e.detail.current;
  },
  onLoad: function () {
  },
  swiperchange(e){
    this.setData({
      flg: e.detail.current,
      flgtext: this.data.movies[e.detail.current].text
    })
  },
  // 跳转到指定页面
  indexTo() {
    wx.redirectTo({
      url: '../houseLease/houseLease',
    })
  }
})  
