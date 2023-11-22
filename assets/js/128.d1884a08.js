(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{474:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"gitea安装-官方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitea安装-官方"}},[s._v("#")]),s._v(" Gitea安装 "),a("a",{attrs:{href:"http://www.gitea.io/zh-cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"我们这里使用docker-compose安装gitea-官方说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我们这里使用docker-compose安装gitea-官方说明"}},[s._v("#")]),s._v(" 我们这里使用docker-compose安装gitea "),a("a",{attrs:{href:"https://docs.gitea.io/zh-cn/install-with-docker/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方说明"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建gitea目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home/gitea\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/gitea\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建docker-compose.yml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" docker-compose.yml\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"复制官方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制官方"}},[s._v("#")]),s._v(" 复制官方")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gitea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("external")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gitea/gitea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.15.7\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gitea\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" USER_UID=1000\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" USER_GID=1000\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" gitea\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./gitea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/data\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /etc/timezone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/timezone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ro\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /etc/localtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/localtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ro\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10080:3000"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"222:22"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h2",{attrs:{id:"保存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保存"}},[s._v("#")]),s._v(" 保存")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" esc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#退出编辑")]),s._v("\n :wq "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#保存退出 ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"安装并运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装并运行"}},[s._v("#")]),s._v(" 安装并运行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"提示完成-使用命令查看下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示完成-使用命令查看下"}},[s._v("#")]),s._v(" 提示完成，使用命令查看下")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"测试gitea"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试gitea"}},[s._v("#")]),s._v(" 测试Gitea")]),s._v(" "),a("div",{staticClass:"language-shel line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://192.168.1.88:10080/   # 192.168.1.88为自己的IP\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"接下来就自己按照页面要求填写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接下来就自己按照页面要求填写"}},[s._v("#")]),s._v(" 接下来就自己按照页面要求填写")]),s._v(" "),a("h1",{attrs:{id:"下面我们来配置自动构建-drone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下面我们来配置自动构建-drone"}},[s._v("#")]),s._v(" 下面我们来配置自动构建 "),a("code",[s._v("Drone")])]),s._v(" "),a("h2",{attrs:{id:"设置完成后-登陆账户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置完成后-登陆账户"}},[s._v("#")]),s._v(" 设置完成后，登陆账户")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在个人信息和配置里面选择设置")])]),s._v(" "),a("li",[a("p",[s._v("管理 OAuth2 应用程序")])]),s._v(" "),a("li",[a("p",[s._v("重定向URL 填写你drone的url http://192.168.1.88:3080/login")])]),s._v(" "),a("li",[a("p",[s._v("取得")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#客户端ID")]),s._v("\nb72c087d-b9ac-40b1-8ec6-54f98d9c8c3e\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#客户端密匙")]),s._v("\nyjqGLtJOmKtbg5Wk75vZh3w97Ro8AL9uivWiNtWKAmAd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])]),s._v(" "),a("h1",{attrs:{id:"下面对接下面drone的介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下面对接下面drone的介绍"}},[s._v("#")]),s._v(" 下面对接下面"),a("code",[s._v("Drone")]),s._v("的介绍")]),s._v(" "),a("h1",{attrs:{id:"后续图文。有时间在写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续图文。有时间在写"}},[s._v("#")]),s._v(" 后续图文。有时间在写！")])])}),[],!1,null,null,null);a.default=n.exports}}]);