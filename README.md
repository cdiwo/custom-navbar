# custom-navbar
微信小程序自定义导航

## 使用指南

在 .json 中引入组件

```
"usingComponents": {
    "navbar": "/componets/navbar/index"
}
```

## 示例

```
基本用法

<navbar title="Wechat"></navbar>

显示“home”按钮
<navbar title="Wechat" home></navbar>
```

## API

属性 | 类型 | 默认值 | 说明
:-- | :-- | :-- | :--
textStyle | String | white | 文本类型，有`white`和`black`可选
title | String | Wechat | 标题
titleStyle | String | - | 标题样式，css style样式，如`color: white;`
bgColor | String | - | 背景颜色，16进制颜色，如`#f1f1f1`
showBtnBg | Boolean | true | 显示按钮背景
back | Boolean | false | 显示“返回”按钮，默认根据`getCurrentPages().length > 1`判断是否需要显示
home | Boolean | true | 显示“主页”按钮
