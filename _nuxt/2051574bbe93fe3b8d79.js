(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1196:function(v,_){const t={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"frontmatter-markdown"},[t("h2",{attrs:{id:"线性表"}},[v._v("线性表")]),v._v(" "),t("ul",[t("li",[v._v("顺序表示")]),v._v(" "),t("li",[v._v("链式表示（链表")])]),v._v(" "),t("h3",{attrs:{id:"顺序表示"}},[v._v("顺序表示")]),v._v(" "),t("p",[v._v("长度控制方案：")]),v._v(" "),t("ul",[t("li",[v._v("设置尾元素")]),v._v(" "),t("li",[v._v("记录表长")])]),v._v(" "),t("p",[v._v("插入和删除时需要移动元素，时间复杂度"),t("code",{pre:!0},[v._v("O(n)")])]),v._v(" "),t("p",[v._v("排序可以使用快排")]),v._v(" "),t("h3",{attrs:{id:"链表"}},[v._v("链表")]),v._v(" "),t("p",[v._v("每个节点存储内容：")]),v._v(" "),t("ul",[t("li",[v._v("数据域")]),v._v(" "),t("li",[v._v("指针域")])]),v._v(" "),t("p",[v._v("排序可以使用归并")]),v._v(" "),t("p",[v._v("子类：")]),v._v(" "),t("ul",[t("li",[v._v("单链表")]),v._v(" "),t("li",[v._v("循环链表")]),v._v(" "),t("li",[v._v("双向链表")]),v._v(" "),t("li",[v._v("静态链表 - 在顺序表里实现链表")])]),v._v(" "),t("p",[v._v("静态链表举例：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("index")]),v._v(" "),t("th",[v._v("value")]),v._v(" "),t("th",[v._v("next_p")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("0")]),v._v(" "),t("td",[v._v("(head)")]),v._v(" "),t("td",[v._v("1")])]),v._v(" "),t("tr",[t("td",[v._v("1")]),v._v(" "),t("td",[v._v("value1")]),v._v(" "),t("td",[v._v("5")])]),v._v(" "),t("tr",[t("td",[v._v("2")]),v._v(" "),t("td",[v._v("value3")]),v._v(" "),t("td",[v._v("6")])]),v._v(" "),t("tr",[t("td",[v._v("3")]),v._v(" "),t("td",[v._v("value5")]),v._v(" "),t("td",[v._v("7")])]),v._v(" "),t("tr",[t("td",[v._v("4")]),v._v(" "),t("td",[v._v("value7")]),v._v(" "),t("td",[v._v("8")])]),v._v(" "),t("tr",[t("td",[v._v("5")]),v._v(" "),t("td",[v._v("value2")]),v._v(" "),t("td",[v._v("2")])]),v._v(" "),t("tr",[t("td",[v._v("6")]),v._v(" "),t("td",[v._v("value4")]),v._v(" "),t("td",[v._v("3")])]),v._v(" "),t("tr",[t("td",[v._v("7")]),v._v(" "),t("td",[v._v("value6")]),v._v(" "),t("td",[v._v("4")])]),v._v(" "),t("tr",[t("td",[v._v("8")]),v._v(" "),t("td",[v._v("value8")]),v._v(" "),t("td",[v._v("0")])]),v._v(" "),t("tr",[t("td",[v._v("9")]),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("10")]),v._v(" "),t("td"),v._v(" "),t("td")])])]),v._v(" "),t("h3",{attrs:{id:"应用"}},[v._v("应用")]),v._v(" "),t("ul",[t("li",[v._v("一元多项式的表示及相加")])]),v._v(" "),t("h3",{attrs:{id:"栈"}},[v._v("栈")]),v._v(" "),t("p",[v._v("是特殊的线性表")]),v._v(" "),t("p",[v._v("存储方案：")]),v._v(" "),t("ul",[t("li",[v._v("顺序栈 - 保存栈顶和栈尾")]),v._v(" "),t("li",[v._v("链栈")])]),v._v(" "),t("h3",{attrs:{id:"栈的应用"}},[v._v("栈的应用")]),v._v(" "),t("ul",[t("li",[v._v("数制转换")]),v._v(" "),t("li",[v._v("括号匹配")]),v._v(" "),t("li",[v._v("迷宫求解（回溯")]),v._v(" "),t("li",[v._v("表达式求值（使用算符优先分析法，不同于编译原理的LR分析法")]),v._v(" "),t("li",[v._v("模拟递归")])]),v._v(" "),t("h3",{attrs:{id:"队列"}},[v._v("队列")]),v._v(" "),t("p",[v._v("是特殊的线性表")]),v._v(" "),t("p",[v._v("子类：")]),v._v(" "),t("ul",[t("li",[v._v("双端队列（两边都可以插入和弹出")]),v._v(" "),t("li",[v._v("循环队列")])]),v._v(" "),t("h2",{attrs:{id:"串"}},[v._v("串")]),v._v(" "),t("h3",{attrs:{id:"空间分配方案"}},[v._v("空间分配方案")]),v._v(" "),t("p",[v._v("动态分配空间可以使用"),t("strong",[v._v("块链")])]),v._v(" "),t("h3",{attrs:{id:"模式匹配算法kmp"}},[v._v("模式匹配算法KMP")]),v._v(" "),t("p",[v._v("理论时间复杂度"),t("code",{pre:!0},[v._v("O(m*n)")]),v._v("，实际时间复杂度"),t("code",{pre:!0},[v._v("O(m+n)")])]),v._v(" "),t("p",[v._v("请自行百度")]),v._v(" "),t("h3",{attrs:{id:"串的其他应用"}},[v._v("串的其他应用")]),v._v(" "),t("ul",[t("li",[v._v("搜索引擎 - 使用反向索引，使用关键字索引ID")])]),v._v(" "),t("h2",{attrs:{id:"树与二叉树"}},[v._v("树与二叉树")]),v._v(" "),t("h3",{attrs:{id:"遍历"}},[v._v("遍历")]),v._v(" "),t("ul",[t("li",[v._v("先序遍历\n"),t("ul",[t("li",[v._v("根节点 -> 左子树 -> 右子树")]),v._v(" "),t("li",[v._v("可以获得表达式的前缀表示（波兰式")])])]),v._v(" "),t("li",[v._v("中序遍历\n"),t("ul",[t("li",[v._v("左子树 -> 根节点 -> 右子树")]),v._v(" "),t("li",[v._v("可以获得表达式的中缀表示")])])]),v._v(" "),t("li",[v._v("后序遍历\n"),t("ul",[t("li",[v._v("左子树 -> 右子树 -> 根节点")]),v._v(" "),t("li",[v._v("可以获得表达式的后缀表示（逆波兰式")])])])]),v._v(" "),t("h2",{attrs:{id:"图"}},[v._v("图")]),v._v(" "),t("h3",{attrs:{id:"概念"}},[v._v("概念")]),v._v(" "),t("ul",[t("li",[v._v("顶点")]),v._v(" "),t("li",[v._v("弧头/弧尾")]),v._v(" "),t("li",[v._v("有向图/无向图")]),v._v(" "),t("li",[v._v("入度/出度")])]),v._v(" "),t("h3",{attrs:{id:"存储结构"}},[v._v("存储结构")]),v._v(" "),t("ul",[t("li",[v._v("矩阵表示（邻接矩阵），值为距离")]),v._v(" "),t("li",[v._v("邻接表 - 每个节点一个链表，链表内容为边的属性")])]),v._v(" "),t("h3",{attrs:{id:"遍历-2"}},[v._v("遍历")]),v._v(" "),t("ul",[t("li",[v._v("深度优先")]),v._v(" "),t("li",[v._v("广度优先")])]),v._v(" "),t("h3",{attrs:{id:"最小生成树"}},[v._v("最小生成树")]),v._v(" "),t("ul",[t("li",[v._v("Prim算法")]),v._v(" "),t("li",[v._v("Kruskal算法")])]),v._v(" "),t("h3",{attrs:{id:"拓扑排序"}},[v._v("拓扑排序")]),v._v(" "),t("p",[v._v("拓扑排序算法：每次去除出度为0的节点")]),v._v(" "),t("p",[v._v("可以用来计算关键路径")]),v._v(" "),t("h3",{attrs:{id:"最短路径问题"}},[v._v("最短路径问题")]),v._v(" "),t("ul",[t("li",[v._v("某个点对所有点的最短路径 - Dijkstra算法")]),v._v(" "),t("li",[v._v("所有点相互的最短路径 - 使用N次Dijkstra/使用Floyd算法")])]),v._v(" "),t("h2",{attrs:{id:"查找"}},[v._v("查找")]),v._v(" "),t("h3",{attrs:{id:"概念-2"}},[v._v("概念")]),v._v(" "),t("ul",[t("li",[v._v("静态查找 - 仅查找")]),v._v(" "),t("li",[v._v("动态查找 - 查找之后进行插入/删除等修改")])]),v._v(" "),t("h3",{attrs:{id:"静态查找算法"}},[v._v("静态查找算法")]),v._v(" "),t("p",[v._v("顺序线性表可以使用二分查找，搜索树平衡")]),v._v(" "),t("p",[v._v("如果叶子节点带有权值，则可以使用查找树，试图构造"),t("strong",[v._v("平均查找长度最短的查找树")])]),v._v(" "),t("p",[t("strong",[v._v("静态最优查找树")]),v._v("比较复杂，可以构造"),t("strong",[v._v("次优查找树")]),v._v("，这种树的查找效率很少低于最优查找树的3%")]),v._v(" "),t("p",[v._v("构造次优查找树 - 寻找节点使左右权值之差最小，而且树的中序遍历是有序的")]),v._v(" "),t("p",[v._v("也可以使用索引表")]),v._v(" "),t("h3",{attrs:{id:"动态查找算法"}},[v._v("动态查找算法")]),v._v(" "),t("p",[v._v("二叉排序树 - 任意节点的左子树上的值小于根节点的值，右子树上的值大于根节点的值")]),v._v(" "),t("p",[v._v("平衡二叉树和次优查找树都是二叉排序树")]),v._v(" "),t("p",[v._v("平衡二叉树 - 在增加和删除操作后仍然保持搜索树足够平衡")]),v._v(" "),t("p",[v._v("平衡二叉树的旋转操作")]),v._v(" "),t("p",[v._v("B-树（多路平衡查找树）和B+树，常用于文件系统")]),v._v(" "),t("p",[v._v("键树")]),v._v(" "),t("h3",{attrs:{id:"哈希表"}},[v._v("哈希表")]),v._v(" "),t("p",[v._v("哈希函数：")]),v._v(" "),t("ul",[t("li",[t("code",{pre:!0},[v._v("y=kx+b")])]),v._v(" "),t("li",[t("code",{pre:!0},[v._v("y=x mod N")])]),v._v(" "),t("li",[v._v("…")])]),v._v(" "),t("p",[v._v("冲突处理：")]),v._v(" "),t("ul",[t("li",[v._v("开放定址法\n"),t("ul",[t("li",[v._v("线性探测再散列，尝试"),t("code",{pre:!0},[v._v("y+1/y+2/y+3...")])]),v._v(" "),t("li",[v._v("二次探测再散列，尝试$y+1^2/y-1^2/y+2^2/y-2^2/y+3^2/y-3^2…$")]),v._v(" "),t("li",[v._v("伪随机数序列")])])]),v._v(" "),t("li",[v._v("再哈希，换一个哈希函数")]),v._v(" "),t("li",[v._v("链桶/链地址")]),v._v(" "),t("li",[v._v("公共溢出区")])]),v._v(" "),t("h2",{attrs:{id:"排序"}},[v._v("排序")]),v._v(" "),t("h3",{attrs:{id:"概念-3"}},[v._v("概念")]),v._v(" "),t("ul",[t("li",[v._v("稳定&不稳定 - key相同的项是否维持原顺序")]),v._v(" "),t("li",[v._v("内部排序&外部排序 - 如果内存无法容纳所有记录则需要外排序")])]),v._v(" "),t("h3",{attrs:{id:"内排序方案"}},[v._v("内排序方案")]),v._v(" "),t("ul",[t("li",[v._v("插入排序\n"),t("ul",[t("li",[v._v("直接插入")]),v._v(" "),t("li",[v._v("折半插入 = 直接插入 + 有序部分二分查找")]),v._v(" "),t("li",[v._v("希尔排序")])])]),v._v(" "),t("li",[v._v("交换排序\n"),t("ul",[t("li",[v._v("简单交换（冒泡")]),v._v(" "),t("li",[v._v("快排")])])]),v._v(" "),t("li",[v._v("选择排序（选择第n小的元素\n"),t("ul",[t("li",[v._v("简单选择排序")]),v._v(" "),t("li",[v._v("堆排序\n"),t("ul",[t("li",[v._v("大根堆")]),v._v(" "),t("li",[v._v("小根堆")])])])])]),v._v(" "),t("li",[v._v("归并排序")]),v._v(" "),t("li",[v._v("基数排序")])]),v._v(" "),t("h3",{attrs:{id:"外排序方案"}},[v._v("外排序方案")]),v._v(" "),t("ul",[t("li",[v._v("多路平衡归并（败者树")]),v._v(" "),t("li",[v._v("置换-选择排序 - 构造归并段")])])])}]};v.exports={attributes:{date:"2019-08-04T00:00:00.000Z",title:"基本数据结构及其简单应用",description:"链表/堆栈/队列/树/图/查找/排序",tags:["数据结构"]},vue:{render:t.render,staticRenderFns:t.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(v){return this.templateRender?this.templateRender():v("div","Rendering")},created:function(){this.templateRender=t.render,this.$options.staticRenderFns=t.staticRenderFns}}}}}}]);