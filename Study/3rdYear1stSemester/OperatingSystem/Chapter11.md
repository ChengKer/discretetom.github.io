# Chapter11 File System Implementation

## Directory Implementation

- list-based
- hash-table-based
  - 使用文件名计算hash

## Allocation Methods文件物理结构

### Contiguous Allocation顺序文件

文件使用连续的存储块，可以随机访问

![11-1](img/11-1.png)

- 浪费空间，产生外部碎片
- 文件难以动态改变大小

改进：extent-based contiguous allocation

![11-2](img/11-2.png)

### linked allocation连接文件

![11-3](img/11-3.png)

- 不浪费空间，可能会有内部碎片(block内)
- 无法随机访问
- 因为block很多，指针长度很长

### indexed allocation索引文件

使用一些文件块作为**索引块**index block or index table

![11-4](img/11-4.png)

- 随机访问
- 无外部碎片

改进：
- 文件很大时使用多级索引
- 结合其他策略