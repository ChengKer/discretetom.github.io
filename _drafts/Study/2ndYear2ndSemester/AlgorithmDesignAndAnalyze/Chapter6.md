# 算法设计与分析 目录

- [第一章 概述](Chapter1.md)
- [第二章 递归分治](Chapter2.md)
- [第三章 动态规划](Chapter3.md)
- [第四章 贪心算法](Chapter4.md)
- [第五章 回溯法](Chapter5.md)
- [第六章 分支限界法](Chapter6.md)
- [总结](Summary.md)

# 第六章 分支限界法

- 广度优先遍历搜索树
- 每次选取当前最优点进行延伸
- 设置上下界，当界限更新时删除越界的不可能生成最优解的部分解

- 活结点
	- 即将处理的在队列里面的结点
- 死结点
	- 已经处理过的不用考虑的结点（包括能生成最优解的和不能生成最优解的）
- 扩展结点
	- 当前正在处理的结点
- 未处理结点
	- 没有处理的结点

算法流程：
- 前提：已经存在一个上界（可以无穷大）和下界（可以无穷小）
- 从活结点集合（即待处理结点集合）中选取最有可能生成最优解的结点作为当前结点（扩展结点）
- 处理当前结点。通过一些预测算法得到由当前结点能够得到的最优解和最坏解
- 如果预测的结果不符合界限条件，则舍弃当前结点
- 如果预测的结果符合界限条件，则把当前结点的所有子节点放到活结点集合（待处理结点集合）中

使用高效的剪枝函数，处理“最优性问题”会比回溯法快很多

## TSP旅行商问题

目标：找到最小回路

计算上界的预测算法：贪心，每一步选择路径尾结点能够到达的不在路径中的最近的结点。如果这样最后发现没有回路就设置结果无穷大

计算下界的预测算法：已知一段路径，下界应为`(已知路径的长度*2+路径两端点到其可达的最近的不在路径中的点的距离+不在回路中的点到其可达的最近的两个点的距离)/2`

算法流程：
- 初始化，计算初始上界和初始下界。活结点集合应为出发节点
- 从活结点集合中选取下界最小者作为最可能生成最优解的结点，把它作为当前结点（扩展结点）
- 使用预测算法计算当前结点的上界和下界。如果它的下界比当前上界还要大，那么这个点不可能生成最优解。舍弃
- 如果算得下界符合条件，那么就可以把当前结点的子节点（注意这些子节点不能在已知路径上）放入活结点表。如果计算的上界比当前上界还要小，可以刷新上界，并从活结点表中删除下界大于当前上界的结点

觉得有用？欢迎[打赏](../../../donate.md)

:)

[返回主页](../../../index.md)