(window.webpackJsonp=window.webpackJsonp||[]).push([[14,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578],{1161:function(t,v,_){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,n=t._self._c||v;return n("div",{staticClass:"frontmatter-markdown"},[n("h2",{attrs:{id:"概述"}},[t._v("概述")]),t._v(" "),n("p",[t._v("静态语义处理的目的 - 验证语法结构合法的程序是否有意义，如：")]),t._v(" "),n("ul",[n("li",[t._v("类型检查")]),t._v(" "),n("li",[t._v("控制流检查")]),t._v(" "),n("li",[t._v("一致性检查")]),t._v(" "),n("li",[t._v("名字作用域分析")])]),t._v(" "),n("p",[t._v("如果静态语义正确，语义处理程序才会开始把源码翻译成中间或目标代码")]),t._v(" "),n("p",[t._v("语义分析比较复杂，目前多数编译程序进行语义分析使用的方法是"),n("strong",[t._v("语法制导翻译")]),t._v("，是一种搭建在语法分析基础上的翻译技术。")]),t._v(" "),n("p",[t._v("思路："),n("strong",[t._v("给每个符号（特别是非终结符）设置一系列属性，在语法翻译的时候对属性进行求值")])]),t._v(" "),n("p",[t._v("例如，翻译目标是计算表达式的值，则可以这样设置语义规则：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(358),alt:"5-1"}})]),t._v(" "),n("p",[t._v("为了输出表达式的值，可以拓广文法：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(756),alt:"5-2"}})]),t._v(" "),n("p",[t._v("实际应用时，对应的"),n("strong",[t._v("注释分析树")]),t._v("（结点带有属性值的分析树）：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(757),alt:"5-3"}})]),t._v(" "),n("p",[t._v("可见，"),n("strong",[t._v("翻译目标决定了语义规则")]),t._v("，不同的目标需要不同的语义规则，同样的目标也可以有不同的语义规则")]),t._v(" "),n("p",[n("strong",[t._v("语法翻译制导的一般步骤")]),t._v("：")]),t._v(" "),n("ol",[n("li",[t._v("输入符号串")]),t._v(" "),n("li",[t._v("分析树")]),t._v(" "),n("li",[t._v("依赖图")]),t._v(" "),n("li",[t._v("语义规则的计算顺序")]),t._v(" "),n("li",[t._v("计算结果")])]),t._v(" "),n("h2",{attrs:{id:"语法制导定义sdd"}},[t._v("语法制导定义SDD")]),t._v(" "),n("h3",{attrs:{id:"概述-2"}},[t._v("概述")]),t._v(" "),n("p",[n("strong",[t._v("仅定义操作，忽略顺序")])]),t._v(" "),n("p",[t._v("SDD是对上下文无关文法的推广，为每个生成式关联一个或多个语义规则。")]),t._v(" "),n("p",[t._v("SDD的格式为一个表，如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(358),alt:"5-1"}})]),t._v(" "),n("h3",{attrs:{id:"综合属性和继承属性"}},[t._v("综合属性和继承属性")]),t._v(" "),n("p",[t._v("定义SDD时需要说明每个属性或函数的意义，以及它们的类型（综合属性还是继承属性）")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("综合属性Synthesized")]),t._v(" Attribute\n"),n("ul",[n("li",[t._v("生成式左侧非终结符的、值由子节点计算得到的属性为综合属性")]),t._v(" "),n("li",[t._v("也就是自底向上进行计算的属性")]),t._v(" "),n("li",[t._v("分析树中从树叶到树根计算")]),t._v(" "),n("li",[t._v("常被命名为val(value)")])])]),t._v(" "),n("li",[n("strong",[t._v("继承属性Inherited")]),t._v(" Attribute\n"),n("ul",[n("li",[t._v("生成式右侧符号的、值由生成式左部非终结符的继承属性或/和生成式右部任何文法符号的属性值决定的属性为继承属性")]),t._v(" "),n("li",[t._v("分析树中由父节点或兄弟节点的属性值计算")]),t._v(" "),n("li",[t._v("可以用来向后传递信息")]),t._v(" "),n("li",[t._v("常被命名为in(interited)")])])])]),t._v(" "),n("p",[t._v("一个属性不可能既是综合属性又是继承属性，否则它就有两个计算公式（一个自底向上，一个非自底向上）从而自相矛盾")]),t._v(" "),n("p",[t._v("SDD的一些限制：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("终结符号只有综合属性")]),t._v(" "),n("ul",[n("li",[t._v("因为终结符号为分析树的叶，不可能再向下计算继承属性")]),t._v(" "),n("li",[t._v("这个综合属性由词法分析程序提供")])])]),t._v(" "),n("li",[n("strong",[t._v("开始符号没有继承属性")]),t._v(" "),n("ul",[n("li",[t._v("没有任何别的符号的属性依赖于开始符号")])])])]),t._v(" "),n("p",[t._v("如果一条语义规则的作用和求值无关，如打印一个值或向符号表中添加记录，则成为生成式左侧非终结符的"),n("strong",[t._v("虚拟综合属性")])]),t._v(" "),n("p",[n("strong",[t._v("常见的虚拟综合属性")]),t._v("：")]),t._v(" "),n("ul",[n("li",[t._v("print(any)\n"),n("ul",[n("li",[t._v("打印any")])])]),t._v(" "),n("li",[t._v("addtype(id.entry, type)\n"),n("ul",[n("li",[t._v("在符号表中为符号id添加符号类型（变量类型）type")]),t._v(" "),n("li",[t._v("id.entry指明符号id在符号表中的入口")])])])]),t._v(" "),n("p",[t._v("没有虚拟综合属性的文法称为"),n("strong",[t._v("属性文法")]),t._v("（即只需要计算属性的文法")]),t._v(" "),n("h3",{attrs:{id:"依赖图"}},[t._v("依赖图")]),t._v(" "),n("p",[t._v("属性之间有依赖关系，即属性a的值由属性b决定，那么在计算a之前要先算出b。这样的依赖关系在分析树中可以用依赖图表示：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(758),alt:"5-4"}})]),t._v(" "),n("p",[t._v("注释分析树显示了各属性的值，依赖图定义如何计算这些值。")]),t._v(" "),n("p",[t._v("例：如下分析树：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(759),alt:"5-6"}})]),t._v(" "),n("p",[t._v("为这些属性建立节点，"),n("strong",[t._v("符号左侧为继承属性，右侧为综合属性（包括虚拟综合属性")])]),t._v(" "),n("p",[n("img",{attrs:{src:_(760),alt:"5-7"}})]),t._v(" "),n("p",[t._v("构造依赖图，"),n("strong",[t._v("如果依赖图无环，则存在一个拓扑排序，即为这些属性值的计算顺序")])]),t._v(" "),n("p",[n("img",{attrs:{src:_(761),alt:"5-8"}})]),t._v(" "),n("h2",{attrs:{id:"语法树"}},[t._v("语法树")]),t._v(" "),n("p",[t._v("也称为抽象语法树、语法结构树、结构树")]),t._v(" "),n("p",[t._v("是"),n("strong",[t._v("仅由终结符构成的分析树")]),t._v("，例：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(762),alt:"5-10"}})]),t._v(" "),n("p",[t._v("特殊语句，如if-then-else语句：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(763),alt:"5-11"}})]),t._v(" "),n("p",[t._v("语法树自身可以表示运算的优先级，所以所有括号都可以省略")]),t._v(" "),n("h2",{attrs:{id:"表达式的dag图"}},[t._v("表达式的dag图")]),t._v(" "),n("p",[t._v("dag图 - 有向非循环图，即对语法树进行提取公共表达式的操作")]),t._v(" "),n("p",[t._v("例：原语法树：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(764),alt:"5-12"}})]),t._v(" "),n("p",[t._v("提取公共表达式后的dag图：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(765),alt:"5-13"}})]),t._v(" "),n("h2",{attrs:{id:"翻译方案概述"}},[t._v("翻译方案概述")]),t._v(" "),n("p",[n("strong",[t._v("把语义规则插入到产生式右侧适当的位置")]),t._v("，形成翻译方案。即"),n("strong",[t._v("翻译方案在SDD的基础上添加了语句执行的时机")])]),t._v(" "),n("p",[t._v("例如，存在如下SDD：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("生成式")]),t._v(" "),n("th",[t._v("语义规则")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",{pre:!0},[t._v("R -> +TS")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("print('+')")])])]),t._v(" "),n("tr",[n("td",[n("code",{pre:!0},[t._v("T -> num")])]),t._v(" "),n("td",[n("code",{pre:!0},[t._v("print(num.val)")])])])])]),t._v(" "),n("p",[t._v("可能的翻译方案：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("R -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" +T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("S\nT -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num.val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("p",[n("strong",[t._v("翻译方案的语法分析树")]),t._v("（"),n("strong",[t._v("带有动作的分析树")]),t._v("），"),n("strong",[t._v("为每个语义动作构造节点")]),t._v("，使用"),n("strong",[t._v("虚线")]),t._v("与生成式头部相连：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(766),alt:"5-9"}})]),t._v(" "),n("p",[t._v("具体翻译方案在下文S属性定义和L属性定义中讨论")]),t._v(" "),n("h2",{attrs:{id:"s属性定义"}},[t._v("S属性定义")]),t._v(" "),n("h3",{attrs:{id:"概述-3"}},[t._v("概述")]),t._v(" "),n("p",[t._v("如果一个SDD仅使用了综合属性(Synthesized Attribute)则称其为S-属性定义。因为属性自底向上计算，所以"),n("strong",[t._v("通常使用自底向上的方法求值")])]),t._v(" "),n("p",[t._v("S属性定义可以和LR语法分析器一起实现，只要在分析栈中添加对应的属性值即可，在规约时按照语义规则计算符号的属性值")]),t._v(" "),n("p",[t._v("例：3*5+4的"),n("strong",[t._v("注释分析树")]),t._v("：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(767),alt:"5-5"}})]),t._v(" "),n("h3",{attrs:{id:"s属性定义的翻译方案"}},[t._v("S属性定义的翻译方案")]),t._v(" "),n("p",[t._v("因为S属性定义全是综合属性，即调用一个生成式的时候，生成式右侧的所有符号的属性都已经计算完毕，所以"),n("strong",[t._v("所有生成式对应的语义规则都无脑添加到生成式末尾")]),t._v("即可")]),t._v(" "),n("h2",{attrs:{id:"s属性定义的自底向上翻译"}},[t._v("S属性定义的自底向上翻译")]),t._v(" "),n("h3",{attrs:{id:"改造分析栈"}},[t._v("改造分析栈")]),t._v(" "),n("p",[t._v("使分析栈能够保存"),n("strong",[t._v("综合属性")]),t._v("（"),n("strong",[t._v("不需要保存继承属性")]),t._v("，因为继承属性可以使用综合属性栈中的内容计算出来")]),t._v(" "),n("p",[n("img",{attrs:{src:_(768),alt:"5-14"}})]),t._v(" "),n("p",[t._v("定义如下变量：")]),t._v(" "),n("ul",[n("li",[t._v("top - 规约前栈顶索引")]),t._v(" "),n("li",[t._v("r - 句柄长度")]),t._v(" "),n("li",[t._v("newTop - 规约后栈顶索引 = top - r + 1")]),t._v(" "),n("li",[t._v("val[] - 属性栈")])]),t._v(" "),n("p",[t._v("则可以通过形如"),n("code",{pre:!0},[t._v("val[top - ?]")]),t._v("来访问属性栈的内容，如"),n("code",{pre:!0},[t._v("val[newTop] = val[top - 1] * val[top]")])]),t._v(" "),n("h3",{attrs:{id:"改造分析程序"}},[t._v("改造分析程序")]),t._v(" "),n("p",[t._v("在LR分析程序的基础上改造。所以仍然需要"),n("strong",[t._v("拓广文法")]),t._v("切记勿忘")]),t._v(" "),n("p",[t._v("读入终结符号，需要移进操作时，把此终结符号的综合属性放入属性栈")]),t._v(" "),n("h3",{attrs:{id:"为语义规则设置代码段"}},[t._v("为语义规则设置代码段")]),t._v(" "),n("p",[t._v("代码段为使用此生成式规约时调用的代码")]),t._v(" "),n("p",[n("img",{attrs:{src:_(769),alt:"5-15"}})]),t._v(" "),n("h2",{attrs:{id:"l属性定义"}},[t._v("L属性定义")]),t._v(" "),n("h3",{attrs:{id:"概述-4"}},[t._v("概述")]),t._v(" "),n("p",[t._v("如果一个SDD仅使用了综合属性，或所有继承属性只需要其左边的符号的属性，则此SDD为L属性定义")]),t._v(" "),n("p",[t._v("L的含义：left，即从左向右计算")]),t._v(" "),n("p",[n("strong",[t._v("所有S属性定义都是L属性定义")])]),t._v(" "),n("p",[n("strong",[t._v("L属性定义的属性计算顺序")]),t._v("："),n("strong",[t._v("深度优先遍历分析树")]),t._v("，这样如果所有继承属性都只用到左兄弟的属性，则继承属性可计算")]),t._v(" "),n("h3",{attrs:{id:"l属性定义的翻译方案"}},[t._v("L属性定义的翻译方案")]),t._v(" "),n("p",[t._v("限制：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("产生式右侧的符号的继承属性必须在这个符号以前的语义规则中被算出来")])]),t._v(" "),n("li",[t._v("语义规则不能（直接或间接地）引用它右边的符号的属性")]),t._v(" "),n("li",[t._v("计算产生式左边的符号的综合属性的语义规则放在产生式末尾")])]),t._v(" "),n("h2",{attrs:{id:"l属性定义的自顶向下翻译"}},[t._v("L属性定义的自顶向下翻译")]),t._v(" "),n("p",[t._v("是对"),n("strong",[t._v("递归调用预测分析")]),t._v("的魔改")]),t._v(" "),n("p",[t._v("仍然要求：")]),t._v(" "),n("ul",[n("li",[t._v("没有左递归")]),t._v(" "),n("li",[t._v("没有回溯")])]),t._v(" "),n("h3",{attrs:{id:"消除左递归的问题"}},[t._v("消除左递归的问题")]),t._v(" "),n("p",[t._v("消除左递归会产生新的符号，如何计算它们的属性")]),t._v(" "),n("p",[t._v("例：已知翻译方案（A1是A的第二次出现）：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("A -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" A1Y "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("A.a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A1.a, Y.y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nA -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" X "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("A.a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X.x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("p",[t._v("消除左递归后得到的生成式：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("A -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" XM\nM -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" YM\nM -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ε\n")])]),t._v(" "),n("p",[t._v("没了A1，多了M，A1的属性如何传递？")]),t._v(" "),n("p",[t._v("为M设置")]),t._v(" "),n("ul",[n("li",[t._v("继承属性"),n("code",{pre:!0},[t._v("M.i")]),t._v(" "),n("ul",[n("li",[t._v("表示在M之前已经扫描过的符号串的属性值")])])]),t._v(" "),n("li",[t._v("综合属性"),n("code",{pre:!0},[t._v("M.s")]),t._v(" "),n("ul",[n("li",[t._v("表示在M完全展开为终结符号之后得到的符号串的属性值")])])])]),t._v(" "),n("p",[t._v("转换后的翻译方案：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("A -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" X "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("M.i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X.x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" M "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("A.a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" M.s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nM -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Y "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("M1.i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M.i, Y.y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" M1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("M.s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" M1.s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nM -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ε "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("M.s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" M.i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("p",[t._v("分析树等价：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(770),alt:"5-16"}})]),t._v(" "),n("p",[n("img",{attrs:{src:_(771),alt:"5-17"}})]),t._v(" "),n("h3",{attrs:{id:"翻译程序的设计"}},[t._v("翻译程序的设计")]),t._v(" "),n("p",[t._v("仍然为每个终结符号建立一个函数")]),t._v(" "),n("ul",[n("li",[t._v("函数参数为此非终结符的继承属性（即需要根据前面符号的属性计算得到的属性")]),t._v(" "),n("li",[t._v("综合属性作为函数的返回值")]),t._v(" "),n("li",[t._v("文法符号每个属性对应一个局部变量（包括综合属性")]),t._v(" "),n("li",[t._v("函数体结构和递归调用预测分析类似，向前看符号来判断程序走向哪个分支")]),t._v(" "),n("li",[t._v("在调用其他函数之间插入代码段")])]),t._v(" "),n("p",[t._v("例：假设翻译方案为："),n("code",{pre:!0},[t._v("E -> T {M.i = T.val} M {E.val = M.s}")]),t._v("，则函数代码为")]),t._v(" "),n("pre",{staticClass:"language-cpp"},[n("code",{pre:!0,attrs:{class:"language-cpp"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("E")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" eval"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tval"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//E.val, T.val, M.i, M.s")]),t._v("\n\ttval "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmi "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tval"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tms "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("M")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\teval "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" eval"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("h2",{attrs:{id:"l属性定义的自底向上翻译"}},[t._v("L属性定义的自底向上翻译")]),t._v(" "),n("p",[n("strong",[t._v("自底向上就不用考虑左递归和回溯了")])]),t._v(" "),n("h3",{attrs:{id:"概述-5"}},[t._v("概述")]),t._v(" "),n("p",[t._v("主要思想："),n("strong",[t._v("移走翻译方案中嵌入的语义规则")]),t._v("，"),n("strong",[t._v("改写SDD为S属性定义")])]),t._v(" "),n("h3",{attrs:{id:"改写sdd为s属性定义"}},[t._v("改写SDD为S属性定义")]),t._v(" "),n("p",[t._v("如果SDD中"),n("strong",[t._v("没有继承属性")]),t._v("："),n("strong",[t._v("引入空生成式取走翻译方案中的动作")])]),t._v(" "),n("p",[t._v("例：已知如下L属性定义：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("E -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" +TR\nR -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" +T "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" R "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" -T "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" R "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ε\nT -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" num "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num.val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("p",[t._v("其中动作"),n("code",{pre:!0},[t._v("{print('+')}")]),t._v("和动作"),n("code",{pre:!0},[t._v("{print('-')}")]),t._v("阻碍了此文法成为S属性定义。")]),t._v(" "),n("p",[t._v("新建非终结符M和N，产生式为"),n("code",{pre:!0},[t._v("M -> ε")]),t._v("和"),n("code",{pre:!0},[t._v("N -> ε")]),t._v("，得到新的翻译方案：")]),t._v(" "),n("pre",{staticClass:"language-bash"},[n("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("E -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" TR\nR -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" +TMR "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" -TMR "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ε\nT -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" num "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num.val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nM -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ε "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'+'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nN -"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ε "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("print"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("p",[t._v("如果SDD中"),n("strong",[t._v("有继承属性")]),t._v("的方案："),n("strong",[t._v("通过复写规则，直接使用val[]、top和newTop访问分析栈")])]),t._v(" "),n("ol",[n("li",[t._v("继承属性位置可确定的情况：")])]),t._v(" "),n("p",[t._v("假设翻译方案为：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(772),alt:"5-18"}})]),t._v(" "),n("p",[t._v("继承属性"),n("code",{pre:!0},[t._v("L.in")]),t._v("被赋值为"),n("code",{pre:!0},[t._v("T.type")]),t._v("。尝试使用"),n("code",{pre:!0},[t._v("T.type")]),t._v("代替"),n("code",{pre:!0},[t._v("L.in")]),t._v("。"),n("code",{pre:!0},[t._v("L.in")]),t._v("被用到2次，分别是"),n("code",{pre:!0},[t._v("L -> id")]),t._v("和"),n("code",{pre:!0},[t._v("L -> L,id")]),t._v("。由于调用"),n("code",{pre:!0},[t._v("L -> id")]),t._v("的时候"),n("code",{pre:!0},[t._v("T")]),t._v("一定在"),n("code",{pre:!0},[t._v("L")]),t._v("的下方（状态栈中），所以可以使用属性栈中"),n("code",{pre:!0},[t._v("T.type")]),t._v("的值代替"),n("code",{pre:!0},[t._v("L.in")]),t._v("，所以翻译方案的代码为"),n("code",{pre:!0},[t._v("L -> id {addtype(val[top], val[top - 1])}")]),t._v("。同理调用"),n("code",{pre:!0},[t._v("L -> L,id")]),t._v("时的翻译方案代码为"),n("code",{pre:!0},[t._v("L -> L,id {addtype(val[top], val[top - 3])}")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("继承属性位置不可确定的情况：")])]),t._v(" "),n("p",[t._v("假设SDD为：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(773),alt:"5-19"}})]),t._v(" "),n("p",[t._v("继承属性"),n("code",{pre:!0},[t._v("Z.i")]),t._v("被赋值为"),n("code",{pre:!0},[t._v("X.s")]),t._v("。尝试使用"),n("code",{pre:!0},[t._v("X.s")]),t._v("代替"),n("code",{pre:!0},[t._v("Z.i")]),t._v("。"),n("code",{pre:!0},[t._v("Z.i")]),t._v("被用到1次，为"),n("code",{pre:!0},[t._v("Z -> z {Z.s = g(Z.i)}")]),t._v("。试图直接把"),n("code",{pre:!0},[t._v("X.s")]),t._v("赋值为"),n("code",{pre:!0},[t._v("Z,s")]),t._v("，但是二者的位置关系无法确定，因为X和Z之间可能存在一个Y。")]),t._v(" "),n("p",[t._v("解决方案：新建符号M作为跳板:")]),t._v(" "),n("p",[n("img",{attrs:{src:_(774),alt:"5-20"}})]),t._v(" "),n("p",[t._v("使M作为桥梁衔接X和Z，M访问"),n("code",{pre:!0},[t._v("val[top - 2]")]),t._v("来访问"),n("code",{pre:!0},[t._v("X.s")]),t._v("，这样Z只要访问"),n("code",{pre:!0},[t._v("val[top - 1]")]),t._v("就必然能够访问到"),n("code",{pre:!0},[t._v("X.s")])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("继承属性使用函数赋值：")])]),t._v(" "),n("p",[t._v("考虑如下SDD：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(775),alt:"5-21"}})]),t._v(" "),n("p",[t._v("属性栈中只保存了"),n("code",{pre:!0},[t._v("A.s")]),t._v("，并没有保存"),n("code",{pre:!0},[t._v("C.i")])]),t._v(" "),n("p",[t._v("解决方案：新建符号N作为桥梁：")]),t._v(" "),n("p",[n("img",{attrs:{src:_(776),alt:"5-22"}})]),t._v(" "),n("p",[t._v("添加一个符号保存运算结果为"),n("code",{pre:!0},[t._v("N.s")]),t._v("这样"),n("code",{pre:!0},[t._v("C.i")]),t._v("就可以通过"),n("code",{pre:!0},[t._v("val[top - 1]")]),t._v("来访问")])])}]};t.exports={attributes:{layout:"collection",title:"语法制导翻译技术",collection:"FundamentalsOfCompiling"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},358:function(t,v,_){t.exports=_.p+"img/1759462.png"},756:function(t,v,_){t.exports=_.p+"img/7a9d7d8.png"},757:function(t,v,_){t.exports=_.p+"img/b83bf35.png"},758:function(t,v,_){t.exports=_.p+"img/3bd5157.png"},759:function(t,v,_){t.exports=_.p+"img/0b1d367.png"},760:function(t,v,_){t.exports=_.p+"img/7459b62.png"},761:function(t,v,_){t.exports=_.p+"img/c552db3.png"},762:function(t,v,_){t.exports=_.p+"img/cf1a01d.png"},763:function(t,v,_){t.exports=_.p+"img/788bff3.png"},764:function(t,v,_){t.exports=_.p+"img/ead037d.png"},765:function(t,v,_){t.exports=_.p+"img/49d16e8.png"},766:function(t,v,_){t.exports=_.p+"img/8ce183c.png"},767:function(t,v,_){t.exports=_.p+"img/5c1d894.png"},768:function(t,v,_){t.exports=_.p+"img/49b2d36.png"},769:function(t,v,_){t.exports=_.p+"img/8296c72.png"},770:function(t,v,_){t.exports=_.p+"img/24170e8.png"},771:function(t,v,_){t.exports=_.p+"img/c431863.png"},772:function(t,v,_){t.exports=_.p+"img/5cdaaa5.png"},773:function(t,v,_){t.exports=_.p+"img/3f956c1.png"},774:function(t,v,_){t.exports=_.p+"img/1045ba3.png"},775:function(t,v,_){t.exports=_.p+"img/6aad281.png"},776:function(t,v,_){t.exports=_.p+"img/4fbf8af.png"}}]);