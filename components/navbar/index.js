const app = getApp();

// 计算Navbar的高度
let statusBarHeight = wx.getSystemInfoSync().statusBarHeight,
  navigationBarHeight = statusBarHeight + 44;

Component({
  externalClasses: ['i-class'],
  properties: {
    // 类型
    textStyle: {
      type: String,
      value: 'white'
    },
    // 标题
    title: {
      type: String,
      value: 'Wechat'
    },
    // 标题样式
    titleStyle: {
      type: String
    },
    // 背景颜色
    bgColor: {
      type: String
    },
    // 显示按钮背景
    showBtnBg: {
      type: Boolean,
      value: true
    },
    // 显示“返回”按钮
    back: {
      type: Boolean,
      value: false
    },
    // 显示“主页”按钮
    home: {
      type: Boolean,
      value: true
    },
  },

  data: {
    statusBarHeight,
    navigationBarHeight
  },

  lifetimes: {
    attached: function() {
      // 判断是否显示“返回”按钮
      if (getCurrentPages().length > 1) {
        this.setData({
          back: true
        })
      }
    }
  },
  methods: {
    handleBack: function () {
      this.triggerEvent('backEvent');

      if (getCurrentPages().length > 1) {
        wx.navigateBack();
      }
    },
    handleHome: function () {
      this.triggerEvent('homeEvent');

      wx.reLaunch({
        url: '/pages/index/index'
      });
    },    
  }
})
