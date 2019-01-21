# 选项卡插件

## 简介

本插件是根据选项卡功能封装的一款人性化插件, 本插件最大的亮点有三个:
1. 完全是基于配置的插件，ps：只是改改配置就能实现很多功能
2. 完全是定制版的插件，ps：可以随意修改成自己想要的样式
3. 用起来非常方便

## 基本特点
#### 支持自定义选项卡，包括一个页面可以同时用多个选项卡并且设置其按钮的样式、事件。
#### 支持自动检测内容是否发生变化，可以查看这个[demo](https://github.com/YuFy1314/my-Plugins/blob/master/TabPlugin/yufy-tab.html)。
------
 # Get Started
 
 ## 引入
 > 引入有两种方式，一种是下载到本地再引入
 
 `<script src="js/yufy-tab.min.js" type="text/javascript"></script>`
 > 第二种是引入外部文件
 
 `<script src="https://rawgit.com/YuFy1314/my-Plugins/master/TabPlugin/js/yufy-tab.min.js" type="text/javascript"></script>`
 
由于github上的响应url的问题, 需要把RAW链接修改一下

Github上的地址: 
https://raw.githubusercontent.com/YuFy1314/my-Plugins/master/TabPlugin/js/yufy-tab.min.js

将上面的地址修改为可以访问的RAW: 
https://rawgit.com/YuFy1314/my-Plugins/master/TabPlugin/js/yufy-tab.min.js

 ## API
 
 通过new一个实例完成对构造函数getTabBar的创建, 再往该函数中传递一个对象参数, 这里的参数也就是这里的配置项

 ```
 new getTabBar();
 ```
 
 ### 配置项
 * $el：tab核心配置和最外层容器配置，如：`#id`、`.class`。
 * tabBtn：选项按钮的元素容器，如：`标签`、`.class`。
 * tabDiv：选项内容的元素容器，如：`标签`、`.class`。
 * tabEve：选项事件，如：`onclick`、`onmouseover`。
 * tabBtnStyle：选项按钮的样式
 * tabDivStyle：选项内容的样式
 * tabBtnHoverStyle：选项选中的样式
 
 ### 全局配置
 > 配置项中凡是和样式相关的配置, 都是CSS中的属性和值, 可以直接将CSS中存在的任何属性当成我们的配置, 放在配置对象中来达到我们想要的效果。
 
 | 配置项      | 默认     | 描述     |
| ---------- | :-----------:  | :-----------: |
| width     | 250px     | 整个选项卡最外层容器的宽度     |
| height     | 250px     | 整个选项卡最外层容器的高度     |
| tabEve     | onclick     | 选项卡事件类型     |

 ### 详细配置
 #### tabBtnStyle
 > 选项按钮的样式配置, 可以随意改变选项卡中的按钮的样式成为自己想要的样式。
 
 | 配置项      | 默认     | 描述     |
| ---------- | :-----------:  | :-----------: |
| backgroundColor     | #CCC     | 选项卡按钮的背景颜色     |

 #### tabDivStyle
 > 选项内容的样式配置, 可以随意改变选项卡中的内容的样式成为自己想要的样式。
 
 | 配置项      | 默认     | 描述     |
| ---------- | :-----------:  | :-----------: |
| width     | 200px     | 选项卡按钮对应内容的宽度     |
| height     | 200px     | 选项卡按钮对应内容的高度     |
| backgroundColor     | #CCC     | 选项卡按钮对应内容的背景颜色     |
| display     | none     | 控制选项卡按钮对应内容的显示/隐藏     |

 #### tabBtnHoverStyle
 > 选项按钮选中的样式配置, 可以随意改变选项卡中的按钮的选中样式成为自己想要的样式。
 
 | 配置项      | 默认     | 描述     |
| ---------- | :-----------:  | :-----------: |
| backgroundColor     | #e3e4e5     | 选项卡按钮选中后的背景颜色     |

 具体传参及写法直接查看[Demo for this plugin](https://github.com/YuFy1314/my-Plugins/blob/master/%E9%80%89%E9%A1%B9%E5%8D%A1/yufy-tab.html)
 
 ### 这个插件是工作闲时开发的，如果在使用的过程中遇到了什么问题可以提issues，或者联系我主页的邮箱。
 
 ## [个人主页](https://yufy1314.github.io/)
 ## [我的博客](https://www.jianshu.com/u/72f239ec5d03)
