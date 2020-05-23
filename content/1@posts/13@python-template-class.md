---
date: 2019-05-24
title: 使用python实现模板类
description: '可以调用目标类的非内置函数'
tags:
  - python
---

## 目标

最近在写[refdict](https://pypi.org/project/refdict/)，希望兼容`dict`/`list`/`tuple`/`str`

目标：`refdict`的根元素是`dict`时可以像使用`dict.pop()`和`dict.keys()`一样使用`refdict.pop()`和`refdict.keys()`，根元素是`list`时可以像使用`list.pop()`和`list.append()`一样使用`refdict.pop()`和`refdict.append()`

而如果`refdict`根元素是`dict`时不能使用`append`，根元素是`list`时不能使用`keys`

即，`refdict`可以调用**根元素的任意非内置函数**

## 实现

### 背景知识

python类有一个内置函数（钩子）`__getattr__`，在形如`someclass.undefined`出现的时候被调用。比如`str.keys`，因为`str`类没有`keys`这一成员，所以会调用`str`类的`__getattr__`函数，把`keys`作为字符串传入`__getattr__`函数

### 代码与分析

```python
class T:
	def __init__(self, data):
		self.data = data
	def __getattr__(self, value):
		return eval('self.data.' + value)
t = T({'key', 'value'})
t.pop('key') # == dict.pop('key')
```

执行`t.pop('key')`的时候，因为`T`类本身没有`pop`成员，所以调用`__getattr__`函数，把`pop`以字符串的形式作为参数`value`。那么`'self.data.' + value`就是`'self.data.pop'`，通过`eval`函数返回`dict.pop`函数，这样`t.pop`就变成了`dict.pop`，就可以正确执行`dict.pop('key')`

### 效果

```python
t1 = T({'key':'value'})
t1.keys() # == t1.data.keys() => ['key']
t1.append('123') # == t1.data.append('123') => error

t2 = T([])
t2.append(456) # == t2.data.append(456)
t2.keys() # == t2.data.keys() => error
```

相比于多继承，此模板方案在没有对应函数的时候可以报错，不会出现多继承时出现的函数同名冲突

### 缺陷

仅能调用非内置函数，对于内置函数（比如`__str__`或者`__contains__`）无效。即`print(t)`调用`t.__str__`并不会触发`t.__getattr__`，所以对于内置函数还是需要手动实现一遍

## 参考

- [浅析Python运算符重载](https://blog.csdn.net/goodlixueyong/article/details/52589979)
- [Python`__getattribute__`vs`__getattr__`浅谈](https://www.jianshu.com/p/885d59db57fc)