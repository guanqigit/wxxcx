//index.js  
//获取应用实例  
var app = getApp()
var amapFile = require('../../libs/amap-wx.js');
//高德地图key所放位置
var config = require('../../libs/config.js');
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {},
    movies: [
      { url: '../../images/u894.png', text: '夕阳无限好'},
      { url: '../../images/u895.png', text: '只是近黄昏'},
      { url: '../../images/u896.jpg', text: '本来无一物'},
      { url: '../../images/u897.png', text: '何处惹尘埃'}
    ],
    flg:3,
    flgtext:'夕阳无限好'
  },
  myread() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  mybuy() {
    wx.navigateTo({
      url: '/pages/wode/wode',
    })
  },
  /*** 滑动切换tab***/
  intervalChange: function (e) {
    this.flg = e.detail.current;
  },
  onLoad: function () {
    var that = this;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({ key: key });
    myAmapFun.getRegeo({
      iconPath: "../../img/marker.png",
      iconWidth: 22,
      iconHeight: 32,
      success: function (data) {
        var marker = [{
          id: data[0].id,
          latitude: data[0].latitude,
          longitude: data[0].longitude,
          iconPath: data[0].iconPath,
          width: data[0].width,
          height: data[0].height
        }]
        that.setData({
          markers: marker
        });
        that.setData({
          latitude: data[0].latitude
        });
        that.setData({
          longitude: data[0].longitude
        });
        that.setData({
          textData: {
            name: data[0].name,
            desc: data[0].desc
          }
        })
      },
      fail: function (info) {
        // wx.showModal({title:info.errMsg})
      }
    })
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
  },
})

