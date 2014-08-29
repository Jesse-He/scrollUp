scrollUp 页面简单向上移动或者移动到指定位置
========

a page with scrollUp

## 结构
>  img 图片，为了让页面能够显示滚动条
>  html
>  js 基于jQuery 所以需要引入jQuery.js

##  代码

*  移动到顶部
```
// 定义移动到顶部的属性
var n = {
			scrollName : "scrollUp",
			topDistance : 300,
			topSpeed : 300,
			animation : "fade",
			animationInSpeed : 200,
			animationOutSpeed : 200,
			scrollText : "Scroll to top",
			scrollImg : false,
			activeOverlay : false
		};
//  向下滚动鼠标轴是 创建  scrollName 的element
//  点击相应的图标是 执行向上移动的函数 unveil()
```
*  移动到指定位置
```
/*
*thetop 位置参数，例如200px；
*/
function moveto(thetop) {
	$("html:not(:animated),body:not(:animated)").animate({
		scrollTop : thetop
	}, 500);
}

```

*  css code
>  控制样式 

```
// 右侧点击图标

.nav{
	position: fixed;
	top: 80px;
	right: 20px;
}
.btn{
	text-decoration: none;
	cursor: pointer;
    display: block;
	background-color: #D0A9F5;
    border-color: #563d7c;
    color: #F2EFFB;
    border-radius: 100px;
    margin: 5px;
    padding: 10px 16px;
}
.btn:hover{
	background-color: #AC58FA;
    border-color: #fff;
    color: #fff;
    text-shadow: none;
}

// 右下侧 侧点击图标
#scrollUp {
    background: url(img/top.png) no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    bottom: 20px;
    height: 38px;
    right: 20px;
    width: 38px;
}

```


