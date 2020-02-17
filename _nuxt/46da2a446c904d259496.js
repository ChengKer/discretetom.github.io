(window.webpackJsonp=window.webpackJsonp||[]).push([[63,663,664,665,666],{1126:function(e,t,n){const r={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",[e._v("概述")]),e._v(" "),r("blockquote",[r("p",[e._v("操作系统是用户和硬件之间的媒介(An operating system acts as an intermediary between the user of a computer and the computer hardware)\n操作系统的目标是提供一个使用户进程"),r("strong",[e._v("方便高效")]),e._v("地运行的环境(The purpose of an operating system is to provide an environment in which a user can execute programs in a "),r("strong",[e._v("convenient")]),e._v(" and "),r("strong",[e._v("efficient")]),e._v(" manner)")])]),e._v(" "),r("p",[e._v("但是通常"),r("strong",[e._v("方便和高效是对立的")]),e._v("。大型机(Mainframe)注重高效，小型机(Minicomputer)注重方便")]),e._v(" "),r("p",[r("strong",[e._v("操作系统是管理硬件的软件")])]),e._v(" "),r("p",[e._v("一个computer system可以被粗略分为四个components:")]),e._v(" "),r("ul",[r("li",[e._v("hardware")]),e._v(" "),r("li",[e._v("operating system")]),e._v(" "),r("li",[e._v("application programs")]),e._v(" "),r("li",[e._v("users")])]),e._v(" "),r("p",[r("img",{attrs:{src:n(847),alt:"1-1"}})]),e._v(" "),r("h2",[e._v("操作系统的身份")]),e._v(" "),r("ul",[r("li",[e._v("资源分配者(Resource allocator)")]),e._v(" "),r("li",[e._v("程序管理者(Program controller)")]),e._v(" "),r("li",[e._v("内核(Kernel) - 时刻都在运行着的程序")])]),e._v(" "),r("h2",[e._v("计算机结构")]),e._v(" "),r("h3",[e._v("结构概述与中断")]),e._v(" "),r("p",[r("img",{attrs:{src:n(848),alt:"1-2"}})]),e._v(" "),r("ul",[r("li",[e._v("一个或多个CPU")]),e._v(" "),r("li",[e._v("多种设备连接同一块内存(memory)")]),e._v(" "),r("li",[e._v("连接的媒介是总线(BUS)")]),e._v(" "),r("li",[e._v("设备通过设备控制器(device controller)连接总线，"),r("strong",[e._v("设备控制器自身有缓冲区(local buffer)")])]),e._v(" "),r("li",[e._v("每个设备控制器管理一种设备。操作系统对每种设备控制器都要有"),r("strong",[e._v("驱动程序(device driver)")])]),e._v(" "),r("li",[e._v("IO设备和CPU可以同时运行(execute concurrently)")]),e._v(" "),r("li",[e._v("CPU负责在内存和设备控制器缓冲区之间交换数据，IO操作在设备控制器进行")]),e._v(" "),r("li",[e._v("设备控制器通过产生"),r("strong",[e._v("中断")]),e._v("通知CPU是否有事件的发生。软件也可以使用**系统调用(system call or monitor call)**引起软件中断(trap)")])]),e._v(" "),r("p",[e._v("计算机开机（或重启）的时候需要运行一个"),r("strong",[e._v("引导程序(bootstrap program)")]),e._v("，引导程序存在ROM或EEPROM里，属于硬件中的子类——"),r("strong",[e._v("固件")]),e._v("("),r("strong",[e._v("firmware")]),e._v(")")]),e._v(" "),r("p",[e._v("中断使用"),r("strong",[e._v("中断向量(interrupt vector)"),r("strong",[e._v("实现。中断可以被")]),e._v("屏蔽(disabled)")]),e._v("，因屏蔽而未能生效的中断被称为丢失的中断(lost interrupt)")]),e._v(" "),r("h3",[e._v("存储结构")]),e._v(" "),r("p",[e._v("主存(main memory)是CPU可以直接访问的唯一大容量存储介质。是易失(volatile)的。从二级存储(secondary storage)开始就不易失了")]),e._v(" "),r("p",[e._v("存储层级结构：\n"),r("img",{attrs:{src:n(849),alt:"1-4"}})]),e._v(" "),r("p",[e._v("层级越高，价格越贵，越快")]),e._v(" "),r("h3",[e._v("IO结构")]),e._v(" "),r("p",[e._v("两种IO策略：")]),e._v(" "),r("ul",[r("li",[e._v("同步(synchronous)\n"),r("ul",[r("li",[e._v("阻塞，顺序执行")])])]),e._v(" "),r("li",[e._v("异步(asynchronous)\n"),r("ul",[r("li",[e._v("非阻塞，并行执行")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:n(850),alt:"1-3"}})]),e._v(" "),r("p",[e._v("DMA方式的IO每传输一块(block)发出一次中断而不是常规的一字节(byte)一次中断")]),e._v(" "),r("h2",[e._v("用户态和内核态")]),e._v(" "),r("p",[e._v("user mode and kernel mode")]),e._v(" "),r("p",[e._v("IO指令、关机指令这些只能在内核态进行(privileged)")])])}]};e.exports={attributes:{layout:"collection",title:"Introduction",collection:"OperatingSystem"},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}},847:function(e,t,n){e.exports=n.p+"img/d224e2a.png"},848:function(e,t,n){e.exports=n.p+"img/8f15427.png"},849:function(e,t,n){e.exports=n.p+"img/cd7c42e.png"},850:function(e,t,n){e.exports=n.p+"img/3085acb.png"}}]);