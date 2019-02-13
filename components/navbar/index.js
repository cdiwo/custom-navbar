const app = getApp();

// 计算Navbar的高度
let statusBarHeight = wx.getSystemInfoSync().statusBarHeight,
  navigationBarHeight = statusBarHeight + 44;

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  externalClasses: ['i-class'],
  properties: {
    // 类型
    textStyle: {
      type: String,
      value: 'white'
    },
    // 标题
    title: {
      type: String
    },
    // 标题自定义样式
    titleStyle: {
      type: String
    },
    // 搜索栏
    search: {
      type: String
    },
    // 标题区域自定义样式
    centerStyle: {
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
      this.triggerEvent('back');

      if (getCurrentPages().length > 1) {
        wx.navigateBack();
      }
    },
    handleHome: function () {
      this.triggerEvent('home');

      wx.reLaunch({
        url: '/pages/index/index'
      });
    },
    handleSearch: function () {
      this.triggerEvent('search');
    }
  }
})
