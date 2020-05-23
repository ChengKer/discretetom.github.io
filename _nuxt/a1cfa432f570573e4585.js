(window.webpackJsonp=window.webpackJsonp||[]).push([[16,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260],{1112:function(_,v,t){const e={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"直线段生成算法"}},[_._v("直线段生成算法")]),_._v(" "),e("h3",{attrs:{id:"dda算法"}},[_._v("DDA算法")]),_._v(" "),e("p",[e("strong",[_._v("数字微分分析法DDA")]),_._v(" - Digital Differential Analyzer")]),_._v(" "),e("p",[_._v("也称 "),e("strong",[_._v("增量算法")])]),_._v(" "),e("p",[e("img",{attrs:{src:t(441),alt:"3-1"}})]),_._v(" "),e("p",[_._v("算法流程：")]),_._v(" "),e("ol",[e("li",[_._v("已知直线段的起点和终点，得到"),e("code",{pre:!0},[_._v("delta x & delta y")])]),_._v(" "),e("li",[_._v("取"),e("code",{pre:!0},[_._v("delta t = max(delta x, delta y)")])]),_._v(" "),e("li",[_._v("取步长为"),e("code",{pre:!0},[_._v("1/delta t")]),_._v("，因为"),e("code",{pre:!0},[_._v("delta t")]),_._v("为"),e("code",{pre:!0},[_._v("delta x & delta y")]),_._v("中的最大值，所以不会出现计算下一步时x或y的变化量超过1（但是有可能两个都是0")]),_._v(" "),e("li",[_._v("根据当前坐标"),e("code",{pre:!0},[_._v("x[n] & y[n]")]),_._v("计算"),e("code",{pre:!0},[_._v("x[n + 1] & y[n + 1]")]),_._v("。计算时使用浮点，画图时取整")])]),_._v(" "),e("p",[_._v("特点：")]),_._v(" "),e("ul",[e("li",[_._v("原理简单")]),_._v(" "),e("li",[e("strong",[_._v("步长为浮点数")]),_._v("，浮点运算与取整比较耗时")]),_._v(" "),e("li",[_._v("浮点增量连续叠加导致误差累计")])]),_._v(" "),e("h3",{attrs:{id:"bresenham算法"}},[_._v("Bresenham算法")]),_._v(" "),e("p",[e("strong",[_._v("最有效的算法之一")])]),_._v(" "),e("p",[_._v("相比DDA的优化：")]),_._v(" "),e("ul",[e("li",[_._v("步长取1")]),_._v(" "),e("li",[_._v("使用"),e("strong",[_._v("整数小计算量判别式")]),_._v("判定另一方向是否+1")])]),_._v(" "),e("p",[_._v("斜率为0-1时把X方向作为步长方向，计算Y方向是否+1。否则使用Y方向作为步长方向，计算X方向是否+1")]),_._v(" "),e("p",[_._v("以斜率0-1为例。如果X+1后Y的增量小于0.5则Y方向不+1，大于等于0.5时+1")]),_._v(" "),e("p",[e("img",{attrs:{src:t(442),alt:"3-2"}})]),_._v(" "),e("p",[_._v("由此得到"),e("strong",[_._v("判别式")]),_._v("："),e("code",{pre:!0},[_._v("e = d - 0.5")]),_._v("。显然e的初值为-0.5。")]),_._v(" "),e("p",[_._v("令"),e("code",{pre:!0},[_._v("m = delta y / delta x")]),_._v("，使用m代替计算d")]),_._v(" "),e("ul",[e("li",[_._v("e小于0时Y方向不+1，更新"),e("code",{pre:!0},[_._v("e = e + m")])]),_._v(" "),e("li",[_._v("e大于等于0时Y方向+1，更新"),e("code",{pre:!0},[_._v("e = e + m - 1")])])]),_._v(" "),e("p",[e("strong",[_._v("为了使用整数而非浮点数简便计算")]),_._v("，把原判别式两边同时乘"),e("code",{pre:!0},[_._v("2 delta x")]),_._v("（思路：使用数字"),e("code",{pre:!0},[_._v("2")]),_._v("把公式中的0.5变成整数，使用"),e("code",{pre:!0},[_._v("delta x")]),_._v("把公式中"),e("code",{pre:!0},[_._v("delta y / delta x")]),_._v("变成"),e("code",{pre:!0},[_._v("delta y")]),_._v("，即整数），得到"),e("code",{pre:!0},[_._v("e' = delta x * (2d - 1)")]),_._v("，初值"),e("code",{pre:!0},[_._v("e' = -delta x")]),_._v("。更新公式：")]),_._v(" "),e("ul",[e("li",[_._v("e’小于0时Y方向不+1，更新"),e("code",{pre:!0},[_._v("e' = e' + 2delta y")])]),_._v(" "),e("li",[_._v("e’大于等于0时Y方向+1，更新"),e("code",{pre:!0},[_._v("e' = e' + 2delta y - 2delta x")])])]),_._v(" "),e("p",[_._v("算法特点：")]),_._v(" "),e("ul",[e("li",[_._v("全部使用整数计算，公式只含加法、减法、乘2（使用移位实现）三种简单运算，便于硬件或固件实现")])]),_._v(" "),e("h3",{attrs:{id:"直线段属性"}},[_._v("直线段属性")]),_._v(" "),e("ul",[e("li",[_._v("线型\n"),e("ul",[e("li",[_._v("实线、虚线、点划线…")]),_._v(" "),e("li",[_._v("设置一个flag值即可实现。略")])])]),_._v(" "),e("li",[_._v("线宽\n"),e("ul",[e("li",[_._v("通常把设备支持的最小线宽作为基准，然后定义2倍宽或4倍宽的直线")]),_._v(" "),e("li",[_._v("反复调用基准直线多画几次即可")])])]),_._v(" "),e("li",[_._v("颜色")])]),_._v(" "),e("h2",{attrs:{id:"圆弧生成算法"}},[_._v("圆弧生成算法")]),_._v(" "),e("h3",{attrs:{id:"bresenham算法-2"}},[_._v("Bresenham算法")]),_._v(" "),e("p",[_._v("使用简单计算的判别式计算下一个显示点，是最有效的算法之一")]),_._v(" "),e("ul",[e("li",[_._v("仅考虑八分之一圆弧，剩余7个部分使用点的对称计算得到")])]),_._v(" "),e("p",[e("img",{attrs:{src:t(443),alt:"3-3"}})]),_._v(" "),e("ul",[e("li",[_._v("每一步都选择最接近理想圆周的点。令选中的点为P，定义误差"),e("code",{pre:!0},[_._v("D(P) = x^2 + y^2 - R^2")]),_._v("。已知上一个点是"),e("code",{pre:!0},[_._v("(x[i - 1], y[i - 1])")]),_._v("时，计算"),e("code",{pre:!0},[_._v("(x[i], y[i])")]),_._v("其中"),e("code",{pre:!0},[_._v("x[i] = x[i - 1] + 1")]),_._v("。因为此1/8圆弧为减函数，仅需要考虑"),e("code",{pre:!0},[_._v("y[i]")]),_._v("为"),e("code",{pre:!0},[_._v("y[i - 1]")]),_._v("和"),e("code",{pre:!0},[_._v("y[i - 1] - 1")]),_._v("这两种情况即可。根据上述判别式求得误差最小的点。如图，C为圆弧，P为前一个点，S和T为候选点。令"),e("code",{pre:!0},[_._v("d = |D(S)| - |D(T)|")]),_._v("，则d非负时选择T点，否则选择S点")])]),_._v(" "),e("p",[e("img",{attrs:{src:t(444),alt:"3-4"}})]),_._v(" "),e("ul",[e("li",[e("p",[_._v("因为1/8圆弧的切线斜率特性，D(S)和D(T)必定一正一负。则"),e("code",{pre:!0},[_._v("d = D(S) + D(T)")]),_._v("。如果d为负，则S和T中靠下的那个点误差更大，应该选择靠上的点。否则选择靠下的点。")])]),_._v(" "),e("li",[e("p",[_._v("推导一个递推公式以简化d的计算")])])]),_._v(" "),e("p",[e("img",{attrs:{src:t(445),alt:"3-5"}})]),_._v(" "),e("p",[_._v("结论：")]),_._v(" "),e("p",[e("img",{attrs:{src:t(446),alt:"3-6"}})]),_._v(" "),e("ul",[e("li",[_._v("获得1/8圆弧之后，通过对称计算其他7/8圆弧的点")])]),_._v(" "),e("p",[e("img",{attrs:{src:t(447),alt:"3-7"}})]),_._v(" "),e("h3",{attrs:{id:"正负法逐点比较法"}},[_._v("正负法（逐点比较法")]),_._v(" "),e("p",[e("img",{attrs:{src:t(448),alt:"3-8"}})]),_._v(" "),e("ul",[e("li",[_._v("仅考虑1/4圆弧（一个象限的圆弧）。以第一象限为例")]),_._v(" "),e("li",[_._v("假设选中的显示点为"),e("code",{pre:!0},[_._v("(x, y)")]),_._v("，定义判别式"),e("code",{pre:!0},[_._v("F(x, y) = x^2 + y^2 - R^2")]),_._v("，显然F为正时点在圆外，否则点在圆内")]),_._v(" "),e("li",[_._v("以第一象限为例，点在圆内时，"),e("code",{pre:!0},[_._v("x[i] = x[i - 1] + 1")]),_._v("，即向X轴正方向移动，试图走出圆。点在圆外时，"),e("code",{pre:!0},[_._v("y[i] = y[i - 1] - 1")]),_._v("，即向Y轴负方向移动，试图走进圆。")]),_._v(" "),e("li",[_._v("推导一个递推公式以简化判别式。易得：")])]),_._v(" "),e("p",[e("img",{attrs:{src:t(449),alt:"3-9"}})]),_._v(" "),e("p",[_._v("对比Bresenham算法，正负法的运算更为简单，但是因为可以存在X相同Y不同的点（一直+Y），所以生成的点数更多")]),_._v(" "),e("h3",{attrs:{id:"多边形逼近法"}},[_._v("多边形逼近法")]),_._v(" "),e("p",[_._v("使用内接多边形逼近圆，然后使用Bresenham直线生成算法生成直线")]),_._v(" "),e("p",[_._v("已知圆心为(0, 0)，"),e("strong",[_._v("正多边形")]),_._v("两个相邻顶点的夹角为θ，则选中的点与某个标准值的偏移量为nθ，则需要计算n次三角函数，计算量较大")]),_._v(" "),e("p",[_._v("可以使用递推公式优化计算过程：")]),_._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[_._v("y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" sin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("? + θ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\nx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" cos"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("? + θ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\ny"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("i + "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" sin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("? + "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("2")]),_._v("θ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" sin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("? + θ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("cosθ + cos"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("? + θ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("sinθ "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),_._v("cosθ + x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),_._v("sinθ\nx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("i + "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" cos"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("? + "),e("span",{pre:!0,attrs:{class:"token number"}},[_._v("2")]),_._v("θ"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),_._v("cosθ - y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("[")]),_._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("]")]),_._v("sinθ\n")])]),_._v(" "),e("p",[_._v("这样sinθ & cosθ只需要计算一次即可。另外，使用递推公式需要考虑积累误差是否稳定（特别是浮点数）。可以证明此递推公式的误差是稳定的")]),_._v(" "),e("p",[_._v("可以使用两个处理器流水线处理，一个求点，一个画图")]),_._v(" "),e("h2",{attrs:{id:"规则曲线的生成方法"}},[_._v("规则曲线的生成方法")]),_._v(" "),e("h3",{attrs:{id:"规则曲线的一半生成方法"}},[_._v("规则曲线的一半生成方法")]),_._v(" "),e("p",[_._v("平面曲线的分类：")]),_._v(" "),e("ul",[e("li",[_._v("规则曲线（函数曲线\n"),e("ul",[e("li",[_._v("使用函数直接描述")])])]),_._v(" "),e("li",[_._v("不规则曲线（自由曲线\n"),e("ul",[e("li",[_._v("由一系列样本点定义")])])])]),_._v(" "),e("p",[_._v("规则曲线的生成基本思路 - 把曲线离散化成小直线段，连接各直线段来逼近所要的直线")]),_._v(" "),e("h3",{attrs:{id:"椭圆生成算法"}},[_._v("椭圆生成算法")]),_._v(" "),e("ul",[e("li",[_._v("标准方程法")])]),_._v(" "),e("p",[e("img",{attrs:{src:t(450),alt:"3-10"}})]),_._v(" "),e("p",[_._v("解标准方程得到：")]),_._v(" "),e("p",[e("img",{attrs:{src:t(451),alt:"3-11"}})]),_._v(" "),e("p",[_._v("此式把椭圆划分为上下两个部分。以某个x的增量为步长，计算y以得到显示点的坐标")]),_._v(" "),e("p",[_._v("缺点：x增量是常数，而椭圆各部分曲率不同，增量取大的话容易出现棱角，取小的话容易过多的计算")]),_._v(" "),e("ul",[e("li",[_._v("参数方程法")])]),_._v(" "),e("p",[_._v("参数方程：")]),_._v(" "),e("p",[e("img",{attrs:{src:t(452),alt:"3-12"}})]),_._v(" "),e("p",[_._v("类似于圆的多边形逼近法即可求得显示点")]),_._v(" "),e("p",[_._v("$$\nx[i]=a\\cos(?+\\theta)\\\ny[i] = b\\sin(?+\\theta)\\\nx[i+1]=a\\cos(?+2\\theta)\\\n=a\\cos(?+\\theta)\\cos\\theta-a\\sin(?+\\theta)\\sin\\theta\\\n=x[i]\\cos\\theta-\\frac{a}{b}y[i]\\sin\\theta\\\ny[i+1]=b\\sin(?+2\\theta)\\\n=b\\sin(?+\\theta)\\cos\\theta+b\\cos(?+\\theta)\\sin\\theta\\\n=y[i]\\cos\\theta+\\frac{b}{a}x[i]\\sin\\theta\n$$")]),_._v(" "),e("h3",{attrs:{id:"抛物线生成算法"}},[_._v("抛物线生成算法")]),_._v(" "),e("p",[_._v("以"),e("code",{pre:!0},[_._v("(0, 0)")]),_._v("为顶点，焦点为"),e("code",{pre:!0},[_._v("(0, p)")]),_._v("的抛物线标准方程为：")]),_._v(" "),e("p",[e("img",{attrs:{src:t(453),alt:"3-13"}})]),_._v(" "),e("p",[_._v("抛物线是不封闭的，首先要确定x的取值范围。x的范围可能由屏幕宽度直接决定（下图2），也可以由屏幕高度限制y的值来间接决定（下图1）：")]),_._v(" "),e("p",[e("img",{attrs:{src:t(454),alt:"3-14"}})]),_._v(" "),e("p",[e("strong",[_._v("x取值范围确定的流程")]),_._v("：")]),_._v(" "),e("ol",[e("li",[_._v("计算x=屏幕左右边界时y的值")]),_._v(" "),e("li",[_._v("如果y的值大于屏幕高度，则通过方程反解x")])]),_._v(" "),e("p",[_._v("以X方向为步进方向，设置增量并代入方程，得到很多相邻点，使用直线填充相邻点即可")]),_._v(" "),e("h3",{attrs:{id:"生成规则曲线时需要注意的几点"}},[_._v("生成规则曲线时需要注意的几点")]),_._v(" "),e("ol",[e("li",[_._v("首先建立目标曲线的几何描述（数学表达式")]),_._v(" "),e("li",[_._v("直线段逼近曲线时要考虑精度，选择合适的步进增量，兼顾生成图形的质量和耗时")]),_._v(" "),e("li",[_._v("实际曲线总有一个预定的范围，注意坐标越界问题")])]),_._v(" "),e("h2",{attrs:{id:"字符的生成方法"}},[_._v("字符的生成方法")]),_._v(" "),e("h3",{attrs:{id:"概述"}},[_._v("概述")]),_._v(" "),e("p",[_._v("两种基本的字符生成技术：")]),_._v(" "),e("ul",[e("li",[_._v("笔划（矢量）方式\n"),e("ul",[e("li",[_._v("通过扫描转换生成，目前常用，生成字符效果好，但是计算量大")])])]),_._v(" "),e("li",[_._v("位图（点阵）方式\n"),e("ul",[e("li",[_._v("传统，简单，高速，不灵活")])])])]),_._v(" "),e("h3",{attrs:{id:"矢量字符的存储和显示"}},[_._v("矢量字符的存储和显示")]),_._v(" "),e("ul",[e("li",[_._v("定义字符\n"),e("ul",[e("li",[_._v("写"),e("strong",[_._v("字模")]),_._v(" - 把所有字符写到一个指定大小的正方形方格中，采集每一个笔划的端点相对于网格左下角(0, 0)的坐标")]),_._v(" "),e("li",[_._v("编码 - 不能重复也不能越界")]),_._v(" "),e("li",[_._v("按照一定结构保存字符笔划轮廓各端点坐标以及前一点到此端点之间是否划线的标志")]),_._v(" "),e("li",[_._v("把字模写入字符库")])])]),_._v(" "),e("li",[_._v("存储字符 - 节省空间、加速查询\n"),e("ul",[e("li",[_._v("压缩存储 - 把每一端点的坐标和划线标志使用两个字节保存，x & y坐标各7位，划线标志1位")]),_._v(" "),e("li",[_._v("使用定长记录存储字模，加快查找速度")])])]),_._v(" "),e("li",[_._v("显示字符\n"),e("ul",[e("li",[_._v("用户必须指定字符的显示位置、字符尺寸、倾斜度、笔划宽度等，都可以通过坐标变换的方法实现")]),_._v(" "),e("li",[_._v("显示过程：\n"),e("ul",[e("li",[_._v("确定界框的左下角坐标(x, y)")]),_._v(" "),e("li",[_._v("根据字符代码获取字符的存储记录")]),_._v(" "),e("li",[_._v("进行一系列坐标变换，计算每个端点的实际坐标，连线")])])])])])]),_._v(" "),e("h3",{attrs:{id:"点阵字符的存储和显示"}},[_._v("点阵字符的存储和显示")]),_._v(" "),e("p",[_._v("在光栅扫描显示系统中使用**掩膜(mask)**定义字符（就是包含字符的像素信息的一小块光栅），保存在字符发生器中")]),_._v(" "),e("p",[_._v("指定掩膜原点的位置后把字符掩膜中的每个像素平移即可")]),_._v(" "),e("p",[_._v("把字符掩膜相应的像素值设置成背景色就可以擦除显存中的该字符")]),_._v(" "),e("p",[_._v("字符写入显存后也可以对掩膜进行修改以获得不同的字体或方向")]),_._v(" "),e("h2",{attrs:{id:"区域填充"}},[_._v("区域填充")]),_._v(" "),e("h3",{attrs:{id:"平面多边形阴影线填充"}},[_._v("平面多边形阴影线填充")]),_._v(" "),e("p",[_._v("令阴影线与X轴夹角为α，阴影线数学公式为"),e("code",{pre:!0},[_._v("t=kx+b")]),_._v("，其中"),e("code",{pre:!0},[_._v("k=tanα")]),_._v("。截距b为一个数组，"),e("code",{pre:!0},[_._v("b[j+1]=b[j]+delta b")]),_._v("。如下图")]),_._v(" "),e("p",[e("img",{attrs:{src:t(455),alt:"3-15"}})]),_._v(" "),e("ul",[e("li",[_._v("计算截距b的取值范围")])]),_._v(" "),e("p",[_._v("即"),e("code",{pre:!0},[_._v("b[max] & b[min]")]),_._v("。过多边形的所有顶点做斜率为k的直线即可得到。")]),_._v(" "),e("p",[e("img",{attrs:{src:t(456),alt:"3-16"}})]),_._v(" "),e("ul",[e("li",[_._v("计算阴影线与多边形边框的交点")])]),_._v(" "),e("p",[_._v("已知某一条边的两个顶点为P和Q。过P和Q分别做斜率为k的直线得到截距"),e("code",{pre:!0},[_._v("b[P] & b[Q]")]),_._v("。如果当前截距"),e("code",{pre:!0},[_._v("b[j]")]),_._v("在"),e("code",{pre:!0},[_._v("b[P] & b[Q]")]),_._v("之间则阴影线与线段PQ有交点，并能够求出交点坐标")]),_._v(" "),e("p",[_._v("为了提升效率，在计算开始之前就计算出所有边框线段的两个端点生成的截距，方便每一次判断，避免重复计算")]),_._v(" "),e("ul",[e("li",[_._v("处理交点与孔洞")])]),_._v(" "),e("p",[_._v("根据上一步可以得到每条阴影线与所有可能相交的边的交点，则画出"),e("strong",[_._v("奇数点到偶数点之间的线段")]),_._v("（注意把交点按照X方向或Y方向排序")]),_._v(" "),e("p",[e("img",{attrs:{src:t(457),alt:"3-17"}})]),_._v(" "),e("ul",[e("li",[_._v("算法步骤\n"),e("ol",[e("li",[_._v("计算每条棱边的两个端点斜率为k时的截距。两个端点的截距中较小者放置在集合"),e("code",{pre:!0},[_._v("B[1]")]),_._v("中，较大者放置在集合"),e("code",{pre:!0},[_._v("B[2]")]),_._v("中")]),_._v(" "),e("li",[_._v("求出"),e("code",{pre:!0},[_._v("B[min] = min(B[1])")]),_._v(" & "),e("code",{pre:!0},[_._v("B[max] = max(B[2])")])]),_._v(" "),e("li",[_._v("第一条阴影线的截距为"),e("code",{pre:!0},[_._v("b[0] = B[min] + delta b")])]),_._v(" "),e("li",[_._v("计算当前阴影线与各个棱边是否有交点，如果有则存入数组"),e("code",{pre:!0},[_._v("D")]),_._v("。")]),_._v(" "),e("li",[_._v("排序数组D，根据交点交替生成阴影线段")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("b[j + 1] = b[j] + delta b")]),_._v("，转到4")])])])]),_._v(" "),e("h3",{attrs:{id:"光栅图形的区域填充-定义"}},[_._v("光栅图形的区域填充 - 定义")]),_._v(" "),e("p",[_._v("区域 - 一组相邻、相连且拥有同样属性的像素")]),_._v(" "),e("p",[_._v("区域的"),e("strong",[_._v("定义方式")]),_._v("：")]),_._v(" "),e("ul",[e("li",[_._v("内点定义区域 - 区域内所有像素有相同的颜色/亮度值，需要把它们换成另一个颜色/亮度值")]),_._v(" "),e("li",[_._v("边界定义区域 - 边界部分具有相同的颜色/亮度值，区域内的像素具有"),e("strong",[_._v("不同")]),_._v("于边界的颜色/亮度值。需要把区域内的像素值变为另一个像素值（不一定是边界像素值")])]),_._v(" "),e("p",[_._v("区域内的像素的"),e("strong",[_._v("连通方式")]),_._v("：")]),_._v(" "),e("ul",[e("li",[_._v("4连通区域 - 区域内的点可以通过"),e("code",{pre:!0},[_._v("[上,下,左,右]")]),_._v("四种操作可以达到区域内任意像素的区域")]),_._v(" "),e("li",[_._v("8连通区域 - 区域内的点除了上下左右，还要加上四个对角线方向的操作，才能到达区域内任意像素的区域")])]),_._v(" "),e("p",[e("img",{attrs:{src:t(458),alt:"3-18"}})]),_._v(" "),e("p",[_._v("关系：")]),_._v(" "),e("ul",[e("li",[_._v("4连通是8连通的特殊情况")]),_._v(" "),e("li",[_._v("4连通的边界一定是8连通的")]),_._v(" "),e("li",[_._v("8连通的边界一定是4连通的")])]),_._v(" "),e("p",[_._v("填充算法：")]),_._v(" "),e("ul",[e("li",[_._v("种子填充算法\n"),e("ul",[e("li",[_._v("漫水法（洪泛")]),_._v(" "),e("li",[_._v("边界填充算法（洪泛")]),_._v(" "),e("li",[_._v("扫描线种子填充算法")])])]),_._v(" "),e("li",[_._v("多边形扫描转换算法")])]),_._v(" "),e("h3",{attrs:{id:"光栅图形的区域填充-漫水法"}},[_._v("光栅图形的区域填充 - 漫水法")]),_._v(" "),e("p",[_._v("适用对象 - 内点定义区域")]),_._v(" "),e("p",[_._v("步骤：")]),_._v(" "),e("ol",[e("li",[_._v("选择区域内一个点作为种子。如果点的像素值为变换前的像素值则继续")]),_._v(" "),e("li",[_._v("把此种子的像素值变为目标像素值")]),_._v(" "),e("li",[_._v("选择该种子的4/8连通像素作为种子，回到1")])]),_._v(" "),e("p",[_._v("8连通区域填充算法适用于4连通。"),e("strong",[_._v("反之不然")])]),_._v(" "),e("h3",{attrs:{id:"光栅图形的区域填充-边界填充算法"}},[_._v("光栅图形的区域填充 - 边界填充算法")]),_._v(" "),e("p",[_._v("适用对象 - 边界定义区域，把边界包围内的像素值改变")]),_._v(" "),e("p",[_._v("步骤：")]),_._v(" "),e("ol",[e("li",[_._v("选择区域内一个点作为种子。如果"),e("strong",[_._v("点不在边界上")]),_._v("且像素值不为目标像素值则继续")]),_._v(" "),e("li",[_._v("把此种子的像素值变为目标像素值")]),_._v(" "),e("li",[_._v("选择该种子的4/8连通像素作为种子，回到1")])]),_._v(" "),e("h3",{attrs:{id:"光栅图形的区域填充-扫描线种子填充算法略"}},[_._v("光栅图形的区域填充 - 扫描线种子填充算法（略")]),_._v(" "),e("h3",{attrs:{id:"光栅图形的区域填充-多边形扫描转换算法"}},[_._v("光栅图形的区域填充 - 多边形扫描转换算法")]),_._v(" "),e("p",[_._v("适用对象 - 规则边界的区域")]),_._v(" "),e("p",[_._v("类似于阴影线生成。阴影线取与X轴平行的线，计算交点并填充。"),e("strong",[_._v("跳过水平线")])]),_._v(" "),e("p",[e("img",{attrs:{src:t(459),alt:"3-19"}})]),_._v(" "),e("p",[_._v("使用"),e("strong",[_._v("递推公式")]),_._v("简化交点计算 - 已知某条边与扫描线"),e("code",{pre:!0},[_._v("y = j")]),_._v("的交点为"),e("code",{pre:!0},[_._v("(x[j], j)")]),_._v("，如果此边与下一条扫描线"),e("code",{pre:!0},[_._v("y = j + 1")]),_._v("仍然有交点，则交点为"),e("code",{pre:!0},[_._v("(x[j + 1], j + 1)")]),_._v("，其中"),e("code",{pre:!0},[_._v("x[j + 1] = x[j] + 1/m")]),_._v("，m为此边的斜率")]),_._v(" "),e("p",[_._v("算法的数据结构：")]),_._v(" "),e("p",[e("img",{attrs:{src:t(460),alt:"3-20"}})]),_._v(" "),e("p",[e("strong",[_._v("边的分类表ET")]),_._v("（指针数组），记录多边形的所有棱边（"),e("strong",[_._v("不包括水平边")]),_._v("），按"),e("strong",[_._v("下端点Y坐标")]),_._v("分类。有多少水平扫描线就有多少类。同类的边构成一个链。链上的节点包括以下域：")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("y[max]")]),_._v(" - 棱边上端点的Y坐标")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("x")]),_._v(" - 棱边下端点的x坐标")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("delta x")]),_._v(" - 斜率m的倒数，即"),e("code",{pre:!0},[_._v("1/m")])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("next")]),_._v(" - 链表指针")])]),_._v(" "),e("p",[_._v("每条链上的元素按X递增的顺序排列。X相同时按delta x递增的顺序排列")]),_._v(" "),e("p",[e("img",{attrs:{src:t(461),alt:"3-21"}})]),_._v(" "),e("p",[e("strong",[_._v("边的活化链表AEL")]),_._v("，记录"),e("strong",[_._v("当前")]),_._v("扫描线与棱边的交点序列。初值为空，处理过程中利用ET和求交点的递推关系不断刷新。AEL的节点包括四个域：")]),_._v(" "),e("ul",[e("li",[e("code",{pre:!0},[_._v("y[max]")]),_._v(" - 棱边上端点的Y坐标")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("x")]),_._v(" - "),e("strong",[_._v("棱边与当前扫描线交点")]),_._v("的x坐标")]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("delta x")]),_._v(" - 斜率m的倒数，即"),e("code",{pre:!0},[_._v("1/m")])]),_._v(" "),e("li",[e("code",{pre:!0},[_._v("next")]),_._v(" - 链表指针")])]),_._v(" "),e("blockquote",[e("p",[_._v("当扫描线与多边形的交点是多边形的顶点时，则称该交点为奇点。奇点涉及两条棱边，如果把每一奇点简单地计为两个交点，可能会在某些顶点出现异常结果，导致扫描线与图形的交点为奇数个，无法成对确定要填充的像素段。因此，奇点必须按不同情况区别对待。将多边形的奇点分为两类：极值点和非极值点。极值点指该顶点涉及到的两条棱边位于相交扫描线的一侧，这时交点数计为2；非极值点指该顶点涉及到的两条棱边位于相交扫描线的两侧，这时交点数计为1。在实际计算时，可以在求交之前，对多边形顶点中的非极值奇点进行预处理：若Pi是非极值顶点，则将相关两棱边中位于扫描线上方的那条棱边在Pi点处截去一个单位长度，这样可以保证扫描线在非极值奇点Pi处只求得一个交点。")])]),_._v(" "),e("p",[_._v("算法步骤：")]),_._v(" "),e("ol",[e("li",[_._v("非极值奇点的预处理（极值奇点=2个交点，非极值奇点=1个交点")]),_._v(" "),e("li",[_._v("建立ET")]),_._v(" "),e("li",[_._v("取初始扫描线y=ET表中最小的y值")]),_._v(" "),e("li",[_._v("AEL初始化，取空")]),_._v(" "),e("li",[_._v("如果ET和AEL不全为空，继续，否则结束")]),_._v(" "),e("li",[_._v("把ET表中纵坐标为y的链取下，与AEL表合并，并保证AEL表中的结点按照x升序排列")]),_._v(" "),e("li",[_._v("每次从AEL中读取两个节点，绘制")]),_._v(" "),e("li",[_._v("删除AEL表中"),e("code",{pre:!0},[_._v("y[max] = y")]),_._v("的元素")]),_._v(" "),e("li",[_._v("其他在AEL中的元素，求下一条扫描线的交点")]),_._v(" "),e("li",[_._v("扫描线y+=1，转到5")])]),_._v(" "),e("p",[_._v("算法特点：")]),_._v(" "),e("ul",[e("li",[_._v("数据结构与程序结构复杂")]),_._v(" "),e("li",[_._v("避免了洪泛中的重复运算，高效")]),_._v(" "),e("li",[_._v("边界不必封闭")]),_._v(" "),e("li",[_._v("不需种子点")])]),_._v(" "),e("h3",{attrs:{id:"图案填充"}},[_._v("图案填充")]),_._v(" "),e("p",[_._v("图案填充 - 使用一个图案模式来填充一个给定的区域。是针对光栅扫描系统的一种填充方式")]),_._v(" "),e("p",[_._v("图案填充的两个主要过程：")]),_._v(" "),e("ul",[e("li",[_._v("定义图案\n"),e("ul",[e("li",[_._v("一个图案模式P通常定义为较小的"),e("code",{pre:!0},[_._v("n*n")]),_._v("像素阵列。"),e("code",{pre:!0},[_._v("P[i][j]")]),_._v("表示在模式(i, j)处的颜色/亮度值")])])]),_._v(" "),e("li",[_._v("填充区域\n"),e("ul",[e("li",[_._v("在扫描线转换填充算法中增加一个响应的控制机构，使之实际填充像素的颜色、亮度值是从图案模式中提取出来的即可")])])])]),_._v(" "),e("p",[_._v("图案参照点的选择：")]),_._v(" "),e("ul",[e("li",[_._v("相对定位方式 - 使用一个矩形包围目标区域，把矩形的左下角视为填充参照点。区域移动时图案不会变化")]),_._v(" "),e("li",[_._v("绝对定位方式 - 取屏幕左下角（原点）作为填充参照点。计算效率高。区域移动时图案也会移动")])])])}]};_.exports={attributes:{layout:"collection",title:"基本图形的生成算法",collection:"ComputerGraphics"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(_){return this.templateRender?this.templateRender():_("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},441:function(_,v,t){_.exports=t.p+"img/fe72faf.png"},442:function(_,v,t){_.exports=t.p+"img/2a38b16.png"},443:function(_,v,t){_.exports=t.p+"img/7fc330b.png"},444:function(_,v,t){_.exports=t.p+"img/f557e11.png"},445:function(_,v,t){_.exports=t.p+"img/a5092fa.png"},446:function(_,v,t){_.exports=t.p+"img/117b15f.png"},447:function(_,v,t){_.exports=t.p+"img/2f6a891.png"},448:function(_,v,t){_.exports=t.p+"img/1525be0.png"},449:function(_,v,t){_.exports=t.p+"img/509ef61.png"},450:function(_,v,t){_.exports=t.p+"img/fd4f8e7.png"},451:function(_,v,t){_.exports=t.p+"img/9e5c6d2.png"},452:function(_,v,t){_.exports=t.p+"img/f6de076.png"},453:function(_,v,t){_.exports=t.p+"img/3343516.png"},454:function(_,v,t){_.exports=t.p+"img/6c9ad3b.png"},455:function(_,v,t){_.exports=t.p+"img/94f2a76.png"},456:function(_,v,t){_.exports=t.p+"img/56ca134.png"},457:function(_,v,t){_.exports=t.p+"img/d3734eb.png"},458:function(_,v,t){_.exports=t.p+"img/23f4807.png"},459:function(_,v,t){_.exports=t.p+"img/62c6f3e.png"},460:function(_,v,t){_.exports=t.p+"img/b6fda1a.png"},461:function(_,v,t){_.exports=t.p+"img/0c89aab.png"}}]);