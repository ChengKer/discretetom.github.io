---
title: QT设置与取消窗口置顶
date: 2018-03-21
tags:
  - qt
---

## 先给结论

实现窗口置顶代码

```cpp
setWindowFlags(Qt::WindowStaysOnTopHint);
```

取消窗口置顶代码

```cpp
setWindowFlags(!Qt::WindowStaysOnTopHint);//add a '!' compared with the upper one
```

执行上述两段代码后窗口会隐藏，需要手动调用show()

所以如果不想因为改变窗口置顶状态而隐藏/显示窗口，需要如下代码

```cpp
//set Window Stay On Top
if (!isHidden()){
	hide();
	setWindowFlags(Qt::WindowStaysOnTopHint);
	show();
} else {
	setWindowFlags(Qt::WindowStaysOnTopHint);
}
```

## 过程

参考了网上的很多博客，得到的结论基本一致，使用如下代码实现窗口置顶

```cpp
setWindowFlags(Qt::WindowStaysOnTopHint);
```

但是取消窗口置顶，网上的说法就不一致了。我查到的是以下两种

```cpp
setWindowFlags(Qt::CustomizeWindowHint);
setWindowFlags(Qt::Widget);
```

使用前者效果，取消置顶前:

![5-1](./_img/5-1.png)

取消置顶后:

![5-2](./_img/5-2.png)

可以发现标题栏消失了

使用后者，可以成功取消置顶

查阅Qt内置Help可以发现Qt::Widget的描述如下

> This is the default type for QWidget. Widgets of this type are child widgets if they have a parent, and independent windows if they have no parent. See also Qt::Window and Qt::SubWindow.

简单来说是将窗口的Flags设置为QWidget的初始值

感觉这样做不保险，此方案可能会清除其他设置内容

所以似乎我的方案最优的样子:)

参考:
- [Qt编程技巧 窗口置顶](http://blog.csdn.net/killua_hzl/article/details/5288769)
- [qt 如何让窗口置顶](http://blog.csdn.net/dongpanshan/article/details/17612655)
- [Qt设置窗口置顶](http://blog.sina.com.cn/s/blog_8a3023730100v507.html)
