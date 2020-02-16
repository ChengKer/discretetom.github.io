(window.webpackJsonp=window.webpackJsonp||[]).push([[73,372,373],{1082:function(e,t,v){const _={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"frontmatter-markdown"},[_("h2",[e._v("基于日志恢复")]),e._v(" "),_("p",[e._v("log-based recovery")]),e._v(" "),_("h3",[e._v("概述")]),e._v(" "),_("p",[e._v("日志log是一系列日志记录log records。")]),e._v(" "),_("p",[e._v("格式：")]),e._v(" "),_("pre",[_("code",{pre:!0},[e._v("<Ti start>\n<Ti X, V1, V2> 把X的值从V1改为V2\n<Ti commit>\n<Ti abort>\n")])]),e._v(" "),_("h3",[e._v("数据库修改时间")]),e._v(" "),_("p",[e._v("事务修改了数据库，可能仅保留在主存而没有写回外存")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("延迟修改deferred-modification")]),e._v(" "),_("ul",[_("li",[e._v("事务提交时还没有修改数据库")]),e._v(" "),_("li",[e._v("日志记录所有操作，在提交时执行")]),e._v(" "),_("li",[e._v("修改数据时不需要记录原始值，即"),_("code",{pre:!0},[e._v("<Ti X, V1, V2>")]),e._v("可以写为"),_("code",{pre:!0},[e._v("<Ti X, V2>")])]),e._v(" "),_("li",[e._v("数据库崩溃时，如果"),_("code",{pre:!0},[e._v("<Ti start>")]),e._v("和"),_("code",{pre:!0},[e._v("<Ti commit>")]),e._v("都在日志中，只需要重新按照日志执行一遍即可")]),e._v(" "),_("li",[e._v("重做的幂等性 - 重做1次和重做无数次效果相同")])])]),e._v(" "),_("li",[_("strong",[e._v("立即修改immediate-modification")]),e._v(" "),_("ul",[_("li",[e._v("事务还在活跃时就修改数据库")]),e._v(" "),_("li",[e._v("没有commit时就执行，需要记录原始值，以便回滚")]),e._v(" "),_("li",[e._v("在修改数据库之前更新Log")])])])]),e._v(" "),_("h3",[e._v("数据库恢复操作")]),e._v(" "),_("ul",[_("li",[e._v("undo - 把数据变为旧值")]),e._v(" "),_("li",[e._v("redo - 把数据变为新值")])]),e._v(" "),_("p",[e._v("两个操作都是幂等的")]),e._v(" "),_("p",[e._v("如果日志没有commit或abort则undo。如果有则redo")]),e._v(" "),_("p",[_("img",{attrs:{src:v(622),alt:""}})]),e._v(" "),_("p",[e._v("如上图")]),e._v(" "),_("ul",[_("li",[e._v("a没有commit/abort，撤销T0")]),e._v(" "),_("li",[e._v("b需要先撤销T1，然后重做T0")]),e._v(" "),_("li",[e._v("c需要先重做T0，然后重做T1")])]),e._v(" "),_("h2",[e._v("检查点checkpoints")]),e._v(" "),_("p",[e._v("解决一次恢复一整个事务太多的问题")]),e._v(" "),_("p",[e._v("引入检查点之后，系统崩溃时从后往前寻找检查点最后一个检查点，然后再往前寻找倒数第一个事务的开始即可")]),e._v(" "),_("p",[_("img",{attrs:{src:v(623),alt:""}})]),e._v(" "),_("p",[e._v("检查点表示方法："),_("code",{pre:!0},[e._v("<checkpoint {T1, T2, ..., Tn}>")]),e._v("表示当前正在执行的事务是T1…Tn")]),e._v(" "),_("h2",[e._v("并发恢复算法")]),e._v(" "),_("p",[e._v("整个算法分为两个阶段：")]),e._v(" "),_("ol",[_("li",[e._v("redo phase")]),e._v(" "),_("li",[e._v("undo phase")])]),e._v(" "),_("p",[e._v("算法：")]),e._v(" "),_("ol",[_("li",[e._v("找到最后一个checkpoint，把undo-list设置为此checkpoint正在执行的事务")]),e._v(" "),_("li",[e._v("(redo phase)从这个checkpoint向后查询，如果事务Ti被修改则重做此事务。如果有事务start则重做并加入undo-list。如果有事务commit或abort则移出undo-list")]),e._v(" "),_("li",[e._v("(undo phase)从日志为向前扫描，把undo-list里面的事务undo了，并记录日志"),_("code",{pre:!0},[e._v("<Ti, Xj, Vm>")]),e._v("（Vm为原来的值）。如果遇到事务start，写日志"),_("code",{pre:!0},[e._v("<Ti abort>")]),e._v("并把此事务移出undo-list。直到undo-list为空")])]),e._v(" "),_("p",[e._v("可以使用上面的图进行算法验证")])])}]};e.exports={attributes:{layout:"collection",title:"Recovery System",collection:"DatabaseConcept"},vue:{render:_.render,staticRenderFns:_.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=_.render,this.$options.staticRenderFns=_.staticRenderFns}}}}},622:function(e,t,v){e.exports=v.p+"img/b0d1ffc.png"},623:function(e,t,v){e.exports=v.p+"img/8cf0674.png"}}]);