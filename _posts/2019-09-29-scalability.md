---
layout: post
author: DiscreteTom
title: 系统设计中的可扩展性(Scalability)
subtitle: 水平扩展与垂直扩展、高可用、服务端缓存等
catalog: true
tags:
  - 系统设计
---

## 概述

本文是观看[此视频](https://www.youtube.com/watch?v=-W9F__D3oY4 "CS75 (Summer 2012) Lecture 9 Scalability Harvard Web Development David Malan")时整理的笔记 ~~（当然混合了一些自己的奇妙理解~~

故事背景：你使用单个主机作为服务器的网站突然火了，请求量变大，如何扩展设备数量（和种类）、设计设备拓扑结构（与功能）以处理更多的web请求？

**本文遵循以下约定：**
- **任何设备都可能崩溃，但是两个同类型且拓扑位置等效的设备不会同时崩溃**
- **客户端请求量无限大，服务端可用设备数量无限大（经费无限+空间无限）**

>拓扑位置等效：如果根据设备调用关系把设备拓扑抽象为树，那么父节点相同且设备类型相同且功能与目的相同的设备视为拓扑位置等效。 -- 沃.兹基硕德（滑稽

> 何为可扩展性 - 摘自[The System Design Primer](https://github.com/donnemartin/system-design-primer)
> 
>如果服务性能的增长与资源的增加是成比例的，服务就是可扩展的。通常，提高性能意味着服务于更多的工作单元，另一方面，当数据集增长时，同样也可以处理更大的工作单位。
>
>另一个角度来看待性能与可扩展性:
>
>- 如果你的系统有**性能问题**，对于单个用户来说是缓慢的。
>- 如果你的系统有**可扩展性问题**，单个用户较快但在高负载下会变慢。

## 架构的水平扩展与垂直扩展

- **垂直扩展(vertical scaling)** - 使用能力更强、性质相同的设备替换原设备
  - 可以理解为换更贵的设备，比如硬盘从机械变固态，
- **水平扩展(horizontal scaling)** - 增加性质相同的设备的数量
  - 比如增加CPU数量

>就像给一个RPG游戏角色准备恢复药剂。初始角色只有一个小血瓶，后期对付强大的怪物不够用了。垂直扩展是使用大血瓶替换小血瓶，水平扩展是带上很多小血瓶。

对于存储设备，垂直扩展意味着需要把数据从原设备转移到目标设备，所以存储设备可能会更多地使用水平扩展。对于没有时间连续性的设备（差不多就是没有持久存储能力的设备），可以使用垂直扩展。

## 高可用架构

>High Availability(HA)

**高可用**：通过巧妙地设计架构来减少系统不能提供服务的时间

方法论上，高可用是通过**冗余**(集群化) + **自动故障转移**(failover)来实现的。

### active-active/active-passive

假设架构在水平扩展之后拥有多台业务逻辑服务器。针对多台业务逻辑服务器，有两种常见的高可用架构：

- active-active
  - 即所有业务逻辑服务器都是active的，都可以接受请求
  - 允许的并发量较高，但是如果每个用户只能请求固定的服务器，那么单个服务器的可用性比较低。如果要使不同服务器的负载均衡，需要额外的负载均衡策略。可能还需要解决sticky sessions问题

![](https://www.jscape.com/hubfs/images/active_active_high_availability_cluster_load_balancer.png)

- active-passive
  - 即仅一个服务器是active的，负责处理所有请求。但是如果active服务器挂了，任意一个passive服务器可以继续服务
  - 可用性强，并发性弱

![](https://www.jscape.com/hubfs/images/active_passive_high_availability_cluster.png)

当然这两个架构可以同时分层使用，外层保证并发，内层保证可靠。

### 负载均衡概述

使用active-active架构需要负载均衡策略

![](/img/190929-1.png)

**负载均衡器(load balancer)**负责实现上述任务。

一个简单的负载均衡器可以使用一个单独的设备（比如一个单独的服务器或云主机）实现（防止占用后端业务逻辑服务器的CPU等资源）。只需要设置一个HTTP/HTTPS服务器，根据条件（比如HTTP header或query string）转发请求到后端业务逻辑服务器即可。

后端服务器负责业务逻辑，负载均衡器仅负责转发请求和响应，自身不会有过多的计算负担，所以一个负载均衡器可以服务多个服务器。

负载均衡器的另一个作用是**减少public IP地址的使用**。对外使用负载均衡器的public IP地址，后端服务器可以使用private IP地址来减少public IP地址的使用（使用[VPC](https://aws.amazon.com/vpc/)

### 负载均衡转发方案

- **静态路由方案**：不同后端服务器负责不同的请求，比如负载均衡器根据GET/POST等HTTP请求类型进行静态路由，或根据请求目标是html/jpg等文件类型进行静态路由
  - 没有解决根本问题，比如单个html服务器的负载太重，还是需要其他负载均衡方案
- 负载均衡器判断后端服务器负载情况并**动态分发**
  - 问题：负载均衡器如何知道后端服务器的负载情况？
- 使用[Round robin](https://en.wikipedia.org/wiki/Round-robin_scheduling)策略**试图平均分发请求**
  - 通常客户端的浏览器或操作系统也会有客户端round robin负载均衡策略，比如在DNS请求的时候DNS针对单个域名返回多个IP地址，客户端每次请求的时候会根据DNS缓存和round robin策略使用不同IP地址。但是客户端发送请求也不是每一次都是round robin，可能同一个session根据本地cache发往同一个服务器，导致不同服务器负载不同，运气不好还是会导致过载。所以**不建议返回多个IP地址，负载均衡还是尽量在服务端解决**

当然也有很多现成的软硬件来辅助实现负载均衡器，或者可以使用云服务提供的负载均衡器。具体怎么负载均衡要根据需要决定，没有普适方案。

### 使用负载均衡器保证水平可扩展性

不要把路由的功能写到业务逻辑服务器中。应该写到负载均衡服务器中。这样如果底层设备水平扩展，业务逻辑维护者不需要修改代码，由负载均衡维护者维护

比如一个业务逻辑服务器连接了两个数据库，就要在业务逻辑代码里面写if条件判断（比如数据库1是否存活）。这样不方便维护，应该让业务逻辑服务器发往一个负载均衡服务器，负载均衡服务器决定发到哪个数据库。

![](/img/190929-7.png)

![](/img/190929-8.png)

负载均衡器不能只有一个，所以

![](/img/190929-9.png)

实际可能通过交换机+物理连线实现。网络拓扑的冗余是必须的

### 增强数据持久性

类似于active-passive的架构模式，数据库也可以使用**master-slave模式**

![](/img/190929-2.png)

所有slave同步master的行为。任何一个数据库炸了都没关系。如果master炸了就让一个slave作为master（不需要额外的时间同步数据

这个拓扑对于read heavy架构非常有用。read请求可以负载均衡到master & slave，write请求仅发到master

缺点：只有一个master，如果炸了，短时间内只能读不能写

另一种架构：**master-master架构**，也就是多个支持write请求的数据库。任何一个master收到请求都会同步到另一个master。负载均衡器会分发请求到任意一个master。不易保证数据一致性。

![](/img/190929-3.png)

[二者的对比](https://stackoverflow.com/questions/3736969/master-master-vs-master-slave-database-architecture)

### 考虑区域可用性

高可用性需要从小到大考虑。从单个web业务逻辑服务器的可用性，到整个物理地区(region)的可用性

如果一个物理区域整体炸了，比如AWS的整个us-east-1区域(region)炸了（比如自然灾害），就需要在另一个区域启动容灾设备(data center)

到时候可能需要通过一个global DNS使用基于地理的负载均衡(DNS based [geographic load balancing](https://avinetworks.com/glossary/geographic-load-balancing/))

### sticky sessions问题

众所周知HTTP是无状态的协议。如果同一个用户的请求被分发到了不同的后端服务器，后端服务器如何知道用户的状态？

>如：用户在服务器A登录并向服务器A发了一个加入购物车的请求，向服务器B发了一个买单的请求，服务器B如何知道用户的购物车状态？服务器B甚至可能还需要用户重新登陆

**sticky sessions**要求用户session的时间连续性，可以有两种解决问题的方案：
- 负载均衡确实转发请求到不同服务器，需要解决不同服务器如何共享session的问题
- 负载均衡器识别同一个用户的请求并发送到同一个服务器

不同服务器共享session可以通过一个共享数据库实现，此方案可能会导致一个复杂的设备拓扑或共享数据库过载，或某个业务逻辑服务器错误修改了其他服务器session的数据。隐患较大，不够优雅。

下文仅讨论方案2，即使用负载均衡器识别用户。

### 使用cookie解决sticky sessions

使用cookie以长久保存session信息（比如用户登录后的token）

**负载均衡器负责维护一个`cookie信息 -> 后端服务器`的映射表**

不可能存储所有用户信息到cookie（隐私+大小限制）。cookie应该存储哪些信息？当然是后端服务器的标识。如何标识？
- 可以保存后端服务器IP地址，但是不安全，而且特定的后端服务器崩溃后客户端会无法访问
- **存储后端服务器（组）的某个哈希标识**，负载均衡器维护哈希表。如果某个后端服务器崩溃，负载均衡器负责重新路由请求到另一个可用服务器

cookie可以设置长的过期时间。所以过期时间不是问题

## 服务端缓存

### 使用静态页面

服务端渲染并存储渲染后的静态页面，以后访问不需要再次渲染。修改时需要再次渲染。适用于不会经常修改的页面（比如此博客使用的github的pages可能使用的这个策略

缺点：
- 占用空间
- 数据冗余，如每个html可能有相同的header和footer
- 如果想要更改大量页面的某个共性信息，需要处理的文件会非常多。比如假设CSDN的博客使用此策略，某天需要重构CSDN博客页面的布局，则需要修改所有博客文件

### 使用数据库

比如MySQL

在配置文件里面简单地设置一下即可。由数据库管理，效率可能低

### 使用缓存软件

把数据缓存到内存，由专门的软件管理（通常使用key-value的形式存储）。如果缓存里面有目标数据就直接用，否则再去访问数据库并同步缓存（写穿透

软件：
- redis
- memcached

缓存软件会根据一定的策略在内存不够的时候删除缓存，比如：
- 最长时间未被使用的数据
- 用户也可以自行设置过期时间

## 其他主题

### 数据库分区

是一种水平扩展策略

对请求进行静态负载均衡后就可以进行数据库分区

比如把所有用户名以A-M开头的用户的请求发到数据库A，把用户名以N-Z开头的请求发到数据库B

![](/img/190929-5.png)

### 安全性

至少最外层设置一个防火墙，仅允许固定端口的请求，如tcp80、443来服务HTTP/HTTPS

VPC内部则不再需要HTTPS，仅HTTP就可以

内部业务每一层可能都需要设置防火墙来确保仅业务需要的端口开启，如数据库仅开启SQL请求相关端口

### 多层架构

>multi-tiered architecture

通常一个完整的架构都是有很多层的

![](/img/190929-4.png)

每一层都可能会使用到上述的一个或多个技巧，需要结合实际情况选择使用

## 参考

- [The System Design Primer](https://github.com/donnemartin/system-design-primer)
- [CS75 (Summer 2012) Lecture 9 Scalability Harvard Web Development David Malan](https://www.youtube.com/watch?v=-W9F__D3oY4)
- [理解水平扩展和垂直扩展](https://www.iteye.com/blog/yunjiechao-163-com-2124949)
- [Master-master vs master-slave database architecture?](https://stackoverflow.com/questions/3736969/master-master-vs-master-slave-database-architecture)
- [Active-Active vs. Active-Passive High-Availability Clustering](https://www.jscape.com/blog/active-active-vs-active-passive-high-availability-cluster)
- [Amazon Virtual Private Cloud](https://aws.amazon.com/vpc/)
- [Round-robin scheduling](https://en.wikipedia.org/wiki/Round-robin_scheduling)
- [高可用（HA）架构](https://www.cnblogs.com/kevin-yuan/p/6726822.html)
- [Geographic Load Balancing](https://avinetworks.com/glossary/geographic-load-balancing/)
