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

显示“search”组件
<navbar search="搜索文字"></navbar>
```

## API

属性 | 类型 | 默认值 | 说明
:-- | :-- | :-- | :--
textStyle | String | white | 文本类型，有`white`和`black`可选
title | String | - | 标题
titleStyle | String | - | 标题自定义样式，css style样式，如`color: white;`
search | String | - | 搜索栏文字，文字为空，则不显示搜索栏
centerStyle | String | - | 标题区域自定义样式，css style样式，如`padding: 0;`
bgColor | String | - | 背景颜色，16进制颜色，如`#f1f1f1`
showBtnBg | Boolean | true | 显示按钮背景
back | Boolean | false | 显示“返回”按钮，默认根据`getCurrentPages().length > 1`判断是否需要显示
home | Boolean | true | 显示“主页”按钮


## 事件

事件名 | 说明 | 返回值
:-- | :-- | :--
bind:back | “返回”tap事件 | {}
bind:home | “首页”tap事件 | {}
bind:search | “搜索”tap事件 | {}


## Slot

插槽名 | 说明
:-- | :--
center | 标题区域，当title和search都为空时，此插槽才生效
