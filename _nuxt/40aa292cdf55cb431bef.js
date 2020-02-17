(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1158:function(e,v){const r={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,v=e.$createElement,r=e._self._c||v;return r("div",{staticClass:"frontmatter-markdown"},[r("h2",[e._v("why v2?")]),e._v(" "),r("p",[e._v("第一代"),r("a",{attrs:{href:"https://github.com/DiscreteTom/TaskBarKiller"}},[e._v("TaskbarKiller")]),e._v("使用了Qt库而显得有点臃肿。作为一个后台运行的程序，TaskbarKiller完全不需要图形界面。所以计划使用原生无图形界面的C重构出来一个更简洁的TaskbarKiller")]),e._v(" "),r("h2",[e._v("实现windows热键")]),e._v(" "),r("p",[e._v("使用RegisterHotkey函数实现热键的注册。TaskbarKiller v2不打算使用一代的热键"),r("code",{pre:!0},[e._v("ctrl+~")]),e._v("（因为这是vscode呼出终端的键），所以改为"),r("code",{pre:!0},[e._v("win+~")])]),e._v(" "),r("p",[e._v("参数原型为"),r("code",{pre:!0},[e._v("BOOL RegisterHotKey(HWND hWnd, int id, UINT fsModifiers, UINT vk);")])]),e._v(" "),r("ul",[r("li",[r("code",{pre:!0},[e._v("hWnd")]),e._v("为处理热键事件的句柄。因为是TaskbarKiller自己处理热键事件，所以置"),r("code",{pre:!0},[e._v("NULL")])]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("id")]),e._v("为热键在处理热键句柄中的ID。因为TaskbarKiller仅处理这一个热键，所以随便设置一个数即可")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("fsModifiers")]),e._v("为装饰键，此处为"),r("code",{pre:!0},[e._v("MOD_WIN")]),e._v("表示按下win键")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v("vk")]),e._v("表示非装饰键，此处为"),r("code",{pre:!0},[e._v("VK_OEM_3")]),e._v("表示"),r("code",{pre:!0},[e._v("~")])])]),e._v(" "),r("p",[e._v("如果函数返回0则注册失败，否则注册成功")]),e._v(" "),r("p",[e._v("可以使用函数"),r("code",{pre:!0},[e._v("UnregisterHotKey(hWnd, id)")]),e._v("来取消注册热键。程序关闭时也会自动注销热键")]),e._v(" "),r("h2",[e._v("实现后台运行")]),e._v(" "),r("h3",[e._v("编写windows服务程序实现后台运行")]),e._v(" "),r("p",[e._v("此方案已失败。不过留下了一些注意事项：")]),e._v(" "),r("ul",[r("li",[e._v("使用SC命令注册服务需要管理员身份")]),e._v(" "),r("li",[e._v("SC命令的路径参数必须是绝对路径")]),e._v(" "),r("li",[e._v("应用需要先设置为START_PENDDING状态然后再设置RUNNING状态")])]),e._v(" "),r("p",[e._v("使用服务程序注册热键的时候出现错误代码1459，查阅文档得到如下结果")]),e._v(" "),r("blockquote",[r("p",[e._v("ERROR_REQUIRES_INTERACTIVE_WINDOWSTATION")]),e._v(" "),r("p",[e._v("1459 (0x5B3)")]),e._v(" "),r("p",[e._v("This operation requires an interactive window station.")])]),e._v(" "),r("p",[e._v("所以使用windows后台服务程序实现热键是不可能了")]),e._v(" "),r("h3",[e._v("使用MSVC linker参数隐藏控制台窗口")]),e._v(" "),r("p",[e._v("实现此方案需要使用MSVC的如下linker参数:")]),e._v(" "),r("ul",[r("li",[r("code",{pre:!0},[e._v('subsystem:"windows"')]),e._v(" - 表示程序不需要控制台窗口")]),e._v(" "),r("li",[r("code",{pre:!0},[e._v('entry:"mainCRTStartup"')]),e._v(" - 指明程序入口函数为"),r("code",{pre:!0},[e._v("main")]),e._v("或"),r("code",{pre:!0},[e._v("wmain")])])]),e._v(" "),r("p",[e._v("因为使用"),r("code",{pre:!0},[e._v('subsystem:"windows"')]),e._v("参数取消控制台窗口之后默认入口函数为"),r("code",{pre:!0},[e._v("WinMain")]),e._v("或"),r("code",{pre:!0},[e._v("wWinMain")]),e._v("所以需要参数"),r("code",{pre:!0},[e._v('entry:"mainCRTStartup"')]),e._v("重新指定入口函数")]),e._v(" "),r("p",[e._v("因为使用此方案需要MSVC的linker所以不能使用GCC，使用Visual Studio实现")]),e._v(" "),r("h2",[e._v("使用注册表实现开机自启动")]),e._v(" "),r("p",[e._v("v2不打算把开机自启动写到程序里面以便删除不必要的交互")]),e._v(" "),r("p",[e._v("仍然使用注册表方案添加开机启动项，参考"),r("a",{attrs:{href:"https://discretetom.github.io/2018/04/09/Qt-Windows%E5%BA%94%E7%94%A8%E5%BC%80%E6%9C%BA%E8%87%AA%E5%90%AF%E5%8A%A8%E7%9B%B8%E5%85%B3/"}},[e._v("之前的博文")]),e._v("，在注册表的"),r("code",{pre:!0},[e._v("HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run")]),e._v("目录下添加"),r("code",{pre:!0},[e._v("TaskbarKiller-v2")]),e._v("项即可")]),e._v(" "),r("p",[e._v("为了获得"),r("code",{pre:!0},[e._v("TaskbarKiller-v2.exe")]),e._v("的路径，使用了"),r("code",{pre:!0},[e._v("reg-gen.bat")]),e._v("文件。"),r("code",{pre:!0},[e._v("reg-gen.bat")]),e._v("会以其所在的目录创建"),r("code",{pre:!0},[e._v("TaskbarKill-v2.exe")]),e._v("的注册表文件，所以只要"),r("code",{pre:!0},[e._v("reg-gen.bat")]),e._v("和"),r("code",{pre:!0},[e._v("TaskbarKiller-v2.exe")]),e._v("在同一个文件夹里就可以生成正确的注册表文件。双击注册表文件即可完成启动项的注册")]),e._v(" "),r("p",[e._v("因为是第一次使用注册表文件，所以遇到了一个小坑：注册表文件中的字符串值里面的"),r("code",{pre:!0},[e._v("\\")]),e._v("需要转义，即"),r("code",{pre:!0},[e._v("\\\\")]),e._v("。所以使用"),r("code",{pre:!0},[e._v("reg-gen.bat")]),e._v("生成路径的时候简单地把路径中的"),r("code",{pre:!0},[e._v("\\")]),e._v("替换为了"),r("code",{pre:!0},[e._v("\\\\")])]),e._v(" "),r("h2",[e._v("参考")]),e._v(" "),r("ul",[r("li",[e._v("隐藏任务栏\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://discretetom.github.io/2018/05/25/%E5%B1%8F%E8%94%BDWindows%E4%BB%BB%E5%8A%A1%E6%A0%8F/"}},[e._v("屏蔽windows任务栏")])])])]),e._v(" "),r("li",[e._v("后台运行相关\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://beginor.github.io/2014/09/19/windows-service-with-c.html"}},[e._v("使用 C 创建 Windows 服务")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/win32/services/the-complete-service-sample"}},[e._v("The Complete Service Sample")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/win32/services/svc-cpp"}},[e._v("Svc.cpp")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/lynch0571/article/details/33320551"}},[e._v("C\\C++控制台程序隐藏方法总结")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cpp/build/reference/subsystem-specify-subsystem?view=vs-2019"}},[e._v("/SUBSYSTEM (Specify Subsystem)")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cpp/build/reference/entry-entry-point-symbol?view=vs-2019"}},[e._v("/ENTRY (Entry-Point Symbol)")])])])]),e._v(" "),r("li",[e._v("热键相关\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerhotkey"}},[e._v("RegisterHotKey function")])])])])])])}]};e.exports={attributes:{date:"2019-07-12T00:00:00.000Z",title:"TaskbarKiller-v2",description:"windows热键、windows无窗口后台程序",tags:["windows","hotkey","reg"]},vue:{render:r.render,staticRenderFns:r.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=r.render,this.$options.staticRenderFns=r.staticRenderFns}}}}}}]);