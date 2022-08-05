<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 用户资料展示

二次封装的用户资料展示组件

## 基础用法
<Preview comp-name="UserInfo" demo-name="demo">
  <demo />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`name` | 用户名 | string | - | `` | 是 
`phone` | 手机号 | string | - | `` | 否
`autoCopy` | 是否自动复制点击内容 | bool | - | `false` | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | [value, $event] | 返回点击内容文本 + 原生dom
