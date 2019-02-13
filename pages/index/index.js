//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World'
  },
  onLoad: function () { },

  //事件处理函数
  handleHomeEvent: function () {
    console.log('You clicked home button!')
  },
  handleSearchEvent: function () {
    console.log('You clicked search container!')
  }
})
