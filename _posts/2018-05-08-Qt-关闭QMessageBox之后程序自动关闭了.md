---
layout: post
author: DiscreteTom
catalog: true
tags:
  - QT
---

真是愚蠢的设计

## 先说结论

以MainWindow为parent的QMessageBox在运行结束时如果MainWindow处于hide的状态**会调用MainWindow的析构函数**把MainWindow杀了

## 细节


看下面这人畜无害的代码

![9](/img/9-1.png)

以MainWindow为parent新建一个QMessageBox
显示MessageBox并隐藏MainWindow

在点击MessageBox上面的OK按钮 MessageBox消失之后

**MainWindow的析构函数会被调用**

这样做的原因应该是防止MainWindow在hide状态下无法简单关闭的问题

所以在最后一个可见的窗体消失时杀掉MainWindow

嗯 这么一说还是可以理解的

但是我如果把程序缩小到托盘 弹一个MessageBox程序就没了。。。

