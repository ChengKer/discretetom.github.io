# Chapter8 Memory Management

## 地址空间

每个主存中的进程都有它的**地址空间address space**

可以使用一对寄存器(base register and limit register)表明一段地址空间，以此保护程序

![8-1](img/8-1.png)

## 地址绑定

程序装入内存时，操作系统会为其分配空间。因为**程序的逻辑地址和物理地址有可能不一致**，CPU执行指令的时候使用的是物理地址，所以需要地址转换

指令和数据的地址绑定可以发生在三个阶段：
- compile time编译或汇编阶段产生绝对地址
- load time程序进入内存时产生绝对地址
- execution time运行时产生地址

分类：
- static address relocation静态地址重定位，在指令执行前完成地址变换
  - compile time
  - load time
- dynamic address relocation动态地址重定位，指令执行时进行地址变换
  - execution time

MMU(Memory-management unit)负责运行时地址绑定(run-time address mapping)

## swapping

交换是系统控制的。在内存和外存之间交换数据实现内存的扩充

## contiguous allocation连续分配

运行前把整个进程完全放进内存，每个进程使用一块连续的地址空间(a single contiguous section of memory)

### fixed-sized partitions固定分区法

内存被分为几个固定大小的partitions，每个partition可以装载一个process。当有一个分区空闲时就从等待队列中取出一个进程放入内存。

![8-2](img/8-2.png)

### MVT可变分区法

操作系统维护一个partition table记录哪些partition被使用，哪些不被使用。这些分区会产生hole。当一个新的process需要放入主存的时候，寻找一个适当的hole来放入。process执行完毕后如果有相邻的hole，这些hole会合并

![8-3](img/8-3.png)

hole的分配算法：
- first-fit
  - 找到第一个可行的Hole就放入
- best-fit
  - 找到big enough且最小的Hole。必须扫描整个hole的list
- worst-fit
  - 顾名思义，没用

### Fragmentation

连续分配会产生碎片（即不被使用的小内存块）

- 内部碎片（fixed-sized会产生
  - 在连续分配出来的地址空间中存在的碎片
- 外部碎片（MVT会产生
  - 在连续分配的块之间的碎片
  - 可以通过compaction减少外部碎片

## Paging页式存储管理

- **物理地址**被分为固定大小的frames（帧、框架）
  - 帧的大小必须是2的指数，如512B或8192B等
  - OS使用frame table记录
- **逻辑地址**被分为固定大小的pages（页）
  - OS使用page tables记录
  - 每个进程都有一个page table
  - PCB中存的有指向此进程page table的指针
  - 保存了每个页的访问权限(1 bit)

帧和页一一对应。程序不连续存储，而是使用很多不一定连续的页存储

OS使用page number和page offset来定位某个页中的某个地址

- **offset决定了每个页内数据的大小**，如offset有8位，则每个页中的数据就有2^8B
- number决定了页表大小

## 页表的结构（略

- 多级页表
- ...

## Segmentation段式存储管理

程序被分为很多段（比如每个函数一个段），每个段的长度可以不同。OS维护一个segmentation table

逻辑地址由段号+段内地址构成

![8-4](img/8-4.png)

- 比页式存储管理慢
- 会产生外部碎片（因为连续分配地址了
- 段越小，外部碎片越少

## Segmentation with paging段页式存储管理

**使用很多不连续的帧来构成段**，每个段内，物理地址需要使用page nummber & offset来指定

![8-5](img/8-5.png)

segment-table并不保存段的base address而是保存页的base address