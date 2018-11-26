//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  myread() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  mybuy() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
})
