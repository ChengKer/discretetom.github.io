# OS structures

## 操作系统提供的服务

- 系统调用system call（最底层），使程序能够使用系统发出请求
- command interpreter(or shell)使用户只用输入指令而不是写代码就能使用系统功能

system call必须提供最基础的硬件功能，包括process comtrol, file, device manipulation

稍高层次的系统程序通过使用system call来实现功能

system services可以被分为如下几类：
- program control
- status requests
- IO requests

## virtual machine

![2-1](img/2-1.png)