---
title: Qt添加图标、资源文件相关、最小化到托盘
date: 2018-03-04
tags:
  - qt
---

## 程序添加图标

以最近写的ToDoStack为例

首先确保**图标文件在源码目录中**

打开项目文件**ToDoStack.pro**，在最后一行添加

```
//ToDoStack.ico是此程序的图标文件
RC_ICONS = ToDoStack.ico
```

这样程序就会以ToDoStack.ico作为图标

## 最小化托盘需要的图标

最小化托盘时显示的图标在**资源文件**中

项目-新建文件-Qt-Qt Resource File

![2-1](./_img/2-1.png)

命名(本项目中命名为myicon)

![2-2](./_img/2-2.png)

这样在左侧项目视图中会出现**资源**文件夹

![2-3](./_img/2-3.png)

编辑资源文件，点击**添加-添加前缀**(前缀类似于文件夹的作用),默认会出现一个名为 **/new/prefix1** 的前缀

在本项目中，我将它改名为**/img**

![2-4](./_img/2-4.png)

然后点击**添加-添加文件**，选中我们的托盘图标文件添加进来即可

> **注意:托盘图标文件不建议使用ico而建议使用png，否则可能无法正常显示**

## 实现最小化到托盘

需要的头文件

```cpp
#include <QAction>//用来生成鼠标点击托盘图标后出现的菜单
#include <QMenu>//用来生成鼠标点击托盘图标后出现的菜单
#include <QSystemTrayIcon>//托盘图标类
```

给MainWindow.h添加私有子控件指针

```cpp
QSystemTrayIcon * icon;//托盘图标
QAction * actionShow;//显示窗口操作
QAction * actionClose;//退出程序操作
QMenu * menu;//菜单
```

在构造函数中初始化

注意从资源文件获取图标的时候路径**不是:/myicon/img/ToDoStack.png而是:/img/ToDoStack.png**

```cpp
icon = new QSystemTrayIcon(this);//获取托盘图标对象
QIcon thisIcon(":/img/ToDoStack.png");//从资源文件获取托盘图标的图标文件
icon->setIcon(thisIcon);//设置托盘图标的图标文件
connect(icon, &QSystemTrayIcon::activated, this, &MainWindow::trayClicked);//点击托盘图标发生的事件
icon->show();//在托盘显示此图标
actionShow = new QAction(tr("Show(&S)"), this);//显示窗口操作
actionClose = new QAction(tr("Exit(&E)"), this);//退出程序操作
menu = new QMenu(this);
menu->addAction(actionShow);//添加至菜单
menu->addAction(actionClose);
connect(actionShow, &QAction::triggered, this, &MainWindow::getShow);
connect(actionClose, &QAction::triggered, this, &MainWindow::getExit);
```

在头文件添加对应的槽

```cpp
void trayClicked(QSystemTrayIcon::ActivationReason reason);//此处参数类型不能改动，因为要匹配对应的信号
void getShow();
void getExit();
```

在源文件中完成函数

```cpp
void MainWindow::trayClicked(QSystemTrayIcon::ActivationReason reason)
{
	switch (reason){//reason为托盘图标被触发的形式
	case QSystemTrayIcon::Context://鼠标右键点击
		menu->exec(this->cursor().pos());//显示菜单 注意不是show()
		break;
	case QSystemTrayIcon::Trigger://鼠标左键点击
		show();//显示主窗口
		break;
	}
}

void MainWindow::getShow()
{
	show();//显示主窗口
}

void MainWindow::getExit()
{
	qApp->quit();//退出程序
}
```

最后，拦截主窗口自身的关闭操作，实现点击关闭按钮时默认隐藏到托盘的效果

```cpp
#include <QCloseEvent>//用来拦截窗口关闭事件
```

在头文件中添加protected方法

```cpp
void closeEvent(QCloseEvent * e);
```

会发现这里的方法名*closeEvent*变成了斜体，表示我们**不能**改动这个方法名

最后在源文件完善函数

```cpp
void MainWindow::closeEvent(QCloseEvent *e)
{
	e->ignore();//忽略原本的关闭操作
	hide();//仅仅隐藏主窗口
}
```

## 添加托盘注释

QSystemTrayIcon类的方法setToolTip可以设置托盘图标注释

参考：
- [Qt开发环境的搭建和HelloWorld](http://www.qter.org/portal.php?mod=view&aid=25&page=3)
- [Qt中如何使窗口隐藏/最小化到托盘](http://blog.csdn.net/bzhxuexi/article/details/24787103)
