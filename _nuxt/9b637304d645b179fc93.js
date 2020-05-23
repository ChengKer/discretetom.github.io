(window.webpackJsonp=window.webpackJsonp||[]).push([[81,701,702],{1163:function(t,n,o){const e={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("p",[t._v("进程同步")]),t._v(" "),e("h2",{attrs:{id:"信号量semaphore"}},[t._v("信号量semaphore")]),t._v(" "),e("p",[t._v("使用user-coded solutions的最大问题就是忙等待。信号量semaphores用来从硬件层面解决此问题")]),t._v(" "),e("p",[t._v("信号量只能通过三个操作改变值：")]),t._v(" "),e("ul",[e("li",[t._v("初始化\n"),e("ul",[e("li",[e("code",{pre:!0},[t._v("Semaphore S = 1")])])])]),t._v(" "),e("li",[t._v("signal(S)\n"),e("ul",[e("li",[t._v("效果等于"),e("code",{pre:!0},[t._v("++S")])])])]),t._v(" "),e("li",[t._v("wait(S)\n"),e("ul",[e("li",[t._v("效果等于死循环等待S不为0后"),e("code",{pre:!0},[t._v("--S")])])])])]),t._v(" "),e("h2",{attrs:{id:"critical-section临界区问题"}},[t._v("Critical Section临界区问题")]),t._v(" "),e("p",[t._v("同时只能有一个进程访问一块数据。访问这些数据的代码被称为临界区")]),t._v(" "),e("p",[t._v("使用semaphore解决：")]),t._v(" "),e("pre",{staticClass:"language-cpp"},[e("code",{staticClass:"language-cpp"},[t._v("semaphore mutex"),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\n"),e("span",{staticClass:"token function"},[t._v("process")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t"),e("span",{staticClass:"token keyword"},[t._v("do")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("wait")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("mutex"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t\tCRITICAL SECTION\n\t\t"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("signal")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("mutex"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t\tREMAINDER SECTION\n\t\t"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n\t"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("while")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token number"},[t._v("1")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])]),t._v(" "),e("p",[t._v("所有进程都使用如上格式，可以保证临界区变量不会被同时访问（但是不能保证访问顺序")]),t._v(" "),e("h2",{attrs:{id:"死锁deadlock与饥饿starvation"}},[t._v("死锁deadlock与饥饿starvation")]),t._v(" "),e("p",[t._v("示例：假设S和Q是信号量，最大值均为1，初值均为1，进程P0和P1的代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:o(880),alt:"6-1"}})]),t._v(" "),e("p",[t._v("如果P0运行了wait(S)，没有运行到wait(Q)。P1运行了wait(Q)，没有运行wait(S)。那么此时Q和S都为0，两个进程都无法继续进行下去，则死锁。")]),t._v(" "),e("h2",{attrs:{id:"有限缓冲区问题bounded-buffer-problem"}},[t._v("有限缓冲区问题bounded-buffer problem")]),t._v(" "),e("p",[t._v("设置变量：")]),t._v(" "),e("ul",[e("li",[t._v("buffer[BUFFER_SIZE] - 缓冲区")]),t._v(" "),e("li",[t._v("in - 缓冲区指针，指向该放入的位置")]),t._v(" "),e("li",[t._v("out - 缓冲区指针，指向该取出的位置")]),t._v(" "),e("li",[t._v("counter - 缓冲区中的item的数量")])]),t._v(" "),e("p",[t._v("有如下代码：")]),t._v(" "),e("pre",{staticClass:"language-cpp"},[e("code",{staticClass:"language-cpp"},[e("span",{staticClass:"token function"},[t._v("producerProcess")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t"),e("span",{staticClass:"token keyword"},[t._v("while")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token boolean"},[t._v("true")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t"),e("span",{staticClass:"token keyword"},[t._v("while")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("counter "),e("span",{staticClass:"token operator"},[t._v("==")]),t._v(" BUFFER_SIZE"),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n\t\t\t"),e("span",{staticClass:"token punctuation"},[t._v(";")]),e("span",{staticClass:"token comment"},[t._v("// do nothing, wait")]),t._v("\n\t\tbuffer"),e("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("in"),e("span",{staticClass:"token punctuation"},[t._v("]")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" nextProduced"),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\tin "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("in "),e("span",{staticClass:"token operator"},[t._v("+")]),t._v(" "),e("span",{staticClass:"token number"},[t._v("1")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("%")]),t._v(" BUFFER_SIZE"),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token operator"},[t._v("++")]),t._v("counter\n\t"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),e("span",{staticClass:"token function"},[t._v("consumerProcess")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t"),e("span",{staticClass:"token keyword"},[t._v("while")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token boolean"},[t._v("true")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t"),e("span",{staticClass:"token keyword"},[t._v("while")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("counter "),e("span",{staticClass:"token operator"},[t._v("==")]),t._v(" "),e("span",{staticClass:"token number"},[t._v("0")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n\t\t\t"),e("span",{staticClass:"token punctuation"},[t._v(";")]),e("span",{staticClass:"token comment"},[t._v("// do nothing, wait")]),t._v("\n\t\tnextConsumed "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" buffer"),e("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("out"),e("span",{staticClass:"token punctuation"},[t._v("]")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\tout "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("out "),e("span",{staticClass:"token operator"},[t._v("+")]),t._v(" "),e("span",{staticClass:"token number"},[t._v("1")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" "),e("span",{staticClass:"token operator"},[t._v("%")]),t._v(" BUFFER_SIZE"),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token operator"},[t._v("--")]),t._v("counter"),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])]),t._v(" "),e("p",[t._v("看起来是完美同步的，但是实际执行的时候会有问题。如"),e("code",{pre:!0},[t._v("++counter")]),t._v("的汇编可能是：")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{staticClass:"language-bash"},[t._v("register1 "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" counter\nregister1 "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" register1 + "),e("span",{staticClass:"token number"},[t._v("1")]),t._v("\ncounter "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" register1\n")])]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("--counter")]),t._v("的汇编可能是")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{staticClass:"language-bash"},[t._v("register2 "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" counter\nregister2 "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" register2 - "),e("span",{staticClass:"token number"},[t._v("1")]),t._v("\ncounter "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" register2\n")])]),t._v(" "),e("p",[t._v("他们同时运行时由于执行顺序不可预测，结果也是不可预测的。")]),t._v(" "),e("p",[e("strong",[t._v("竞态条件race condition")]),t._v(" - 因为多进程访问同一变量导致结果随执行顺序而产生随机性的现象")]),t._v(" "),e("p",[t._v("使用信号量的解决：")]),t._v(" "),e("p",[t._v("设置信号量：")]),t._v(" "),e("ul",[e("li",[e("code",{pre:!0},[t._v("semaphore full = 0;")]),t._v("记录buffer里面有多少位置已经有item")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("semaphore empty = n;")]),t._v("记录buffer里面有多少位置没有item")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("semaphore mutex = 1;")]),t._v("用来防止多进程同时访问buffer")])]),t._v(" "),e("pre",{staticClass:"language-cpp"},[e("code",{staticClass:"language-cpp"},[e("span",{staticClass:"token function"},[t._v("producerProcess")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t"),e("span",{staticClass:"token keyword"},[t._v("do")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("wait")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("empty"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("wait")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("mutex"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token comment"},[t._v("//add an item")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("signal")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("mutex"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("signal")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("full"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("while")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token boolean"},[t._v("true")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),e("span",{staticClass:"token function"},[t._v("consumerProcess")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t"),e("span",{staticClass:"token keyword"},[t._v("do")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("wait")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("full"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("wait")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("mutex"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token comment"},[t._v("// remove an item")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("signal")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("mutex"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("signal")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("empty"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),e("span",{staticClass:"token punctuation"},[t._v("}")]),e("span",{staticClass:"token keyword"},[t._v("while")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token boolean"},[t._v("true")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])]),t._v(" "),e("h2",{attrs:{id:"读者写者问题readers-writers-problem"}},[t._v("读者写者问题readers-writers problem")]),t._v(" "),e("p",[t._v("同一个文件，可以很多用户一起读，但是一旦存在一个写者，这个文件就不能被共享，直到写者写完。")]),t._v(" "),e("p",[t._v("设置变量：")]),t._v(" "),e("ul",[e("li",[e("code",{pre:!0},[t._v("semaphore wrt = 1;")]),t._v("表示文件是否可以被写入")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("int readcount = 0;")]),t._v("表示读者人数")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("semaphore mutex = 1;")]),t._v("保护readcount正常运行")])]),t._v(" "),e("pre",{staticClass:"language-cpp"},[e("code",{staticClass:"language-cpp"},[e("span",{staticClass:"token function"},[t._v("writer")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t"),e("span",{staticClass:"token keyword"},[t._v("do")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("wait")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("wrt"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token comment"},[t._v("//writing")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("signal")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("wrt"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("while")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token boolean"},[t._v("true")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n"),e("span",{staticClass:"token function"},[t._v("reader")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t"),e("span",{staticClass:"token keyword"},[t._v("do")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("wait")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("mutex"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token operator"},[t._v("++")]),t._v("readcount"),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token keyword"},[t._v("if")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("readcount "),e("span",{staticClass:"token operator"},[t._v("==")]),t._v(" "),e("span",{staticClass:"token number"},[t._v("1")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token comment"},[t._v("// the first reader")]),t._v("\n\t\t\t"),e("span",{staticClass:"token function"},[t._v("wait")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("wrt"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("signal")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("mutex"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token comment"},[t._v("//reading")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("wait")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("mutex"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token operator"},[t._v("--")]),t._v("readcount"),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token keyword"},[t._v("if")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("readcount "),e("span",{staticClass:"token operator"},[t._v("==")]),t._v(" "),e("span",{staticClass:"token number"},[t._v("0")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token comment"},[t._v("// the last reader")]),t._v("\n\t\t\t"),e("span",{staticClass:"token function"},[t._v("signal")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("wrt"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("signal")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("mutex"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("while")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token boolean"},[t._v("true")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])]),t._v(" "),e("p",[t._v("此问题会导致writer饥饿。")]),t._v(" "),e("h2",{attrs:{id:"哲学家就餐问题dining-philosophers-problem"}},[t._v("哲学家就餐问题dining-philosophers problem")]),t._v(" "),e("p",[t._v("五个哲学家坐在圆桌周围。每个哲学家左手边和右手边都有一根筷子。哲学家需要两根筷子才能吃饭。求哲学家进程函数。")]),t._v(" "),e("p",[e("img",{attrs:{src:o(881),alt:"6-2"}})]),t._v(" "),e("p",[t._v("设置变量：")]),t._v(" "),e("ul",[e("li",[e("code",{pre:!0},[t._v("semaphore chopsticks[5] = {1};")])])]),t._v(" "),e("pre",{staticClass:"language-cpp"},[e("code",{staticClass:"language-cpp"},[e("span",{staticClass:"token function"},[t._v("Philosopher")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token keyword"},[t._v("int")]),t._v(" i"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t"),e("span",{staticClass:"token keyword"},[t._v("do")]),e("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("wait")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("chopsticks"),e("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i"),e("span",{staticClass:"token punctuation"},[t._v("]")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("wait")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("chopsticks"),e("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i "),e("span",{staticClass:"token operator"},[t._v("+")]),t._v(" "),e("span",{staticClass:"token number"},[t._v("1")]),e("span",{staticClass:"token punctuation"},[t._v("]")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token comment"},[t._v("//eat")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("signal")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("chopsticks"),e("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i"),e("span",{staticClass:"token punctuation"},[t._v("]")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t\t"),e("span",{staticClass:"token function"},[t._v("signal")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("chopsticks"),e("span",{staticClass:"token punctuation"},[t._v("[")]),t._v("i "),e("span",{staticClass:"token operator"},[t._v("+")]),t._v(" "),e("span",{staticClass:"token number"},[t._v("1")]),e("span",{staticClass:"token punctuation"},[t._v("]")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n\t"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("while")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),e("span",{staticClass:"token boolean"},[t._v("true")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v("\n"),e("span",{staticClass:"token punctuation"},[t._v("}")]),t._v("\n")])]),t._v(" "),e("p",[t._v("显然，这可能导致死锁（比如所有人同时拿起了左筷子）。可能的解决方案：")]),t._v(" "),e("ul",[e("li",[t._v("每次最多允许四个人同时吃饭（持筷）")]),t._v(" "),e("li",[t._v("哲学家必须同时拿起两根筷子（使用临界区")]),t._v(" "),e("li",[t._v("非对称设计 - 编号为偶数的哲学家先拿右边筷子再拿左边筷子，奇数哲学家反之")])]),t._v(" "),e("h2",{attrs:{id:"管程monitors略"}},[t._v("管程Monitors（略")]),t._v(" "),e("p",[t._v("虽然semaphores很好用，但是如果程序员用错了呢（比如把wait和signal写反位置")]),t._v(" "),e("p",[t._v("所以需要一个管程，把分散在各进程中的临界区集中起来管理。")]),t._v(" "),e("h2",{attrs:{id:"事务transaction"}},[t._v("事务transaction")]),t._v(" "),e("blockquote",[e("p",[t._v("A transaction is a program unit that must be executed atomically")])]),t._v(" "),e("p",[t._v("把操作记录在一个log里。如果原子事务执行失败，则通过log恢复执行前的状态")])])}]};t.exports={attributes:{layout:"collection",title:"Process Synchronization",collection:"OperatingSystem"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}},880:function(t,n,o){t.exports=o.p+"img/5dcc3bf.png"},881:function(t,n,o){t.exports=o.p+"img/c724a7c.png"}}]);