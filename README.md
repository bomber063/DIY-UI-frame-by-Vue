# DIY-UI-frame-by-Vue
## 需求分析
* 用例图
1. 点击按钮——它包括loading状态，
2. 不可点击按钮，2和1之间是互相切换的。
3. hover按钮（手机没有hover）
4. 按下按钮（未松开）
5.其他
   1. 点击之后弹出菜单
   2. 外形是一组按钮的样式
   3. 等等按钮
* 可以用window的[墨刀](https://modao.cc/)或者苹果的[sketch](http://www.sketchcn.com/)画UI图
* 按钮宽度用32px,因为一般用8的倍数或者10的倍数。
* 不过上面的都是UI设计，不是写代码的重点。
## 项目初始化
* 免费的git hub是一个开放的平台，如果是私有的代码应该放到收费的gitlab brakets，可以隐藏你的代码的地方，当然公司原因花钱git hub也有收费版本（每个用户每月5美元左右）。
* 我这里就先用免费的git hub就好了
### 声明license
* 声明license的目的是告诉用户这个组件代码和如何开源的。最著名的就是软一份的一个license的图——[如何选择开源许可证？](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)
* 其中MIT许可证是最宽松的许可证。对商业公司最友好的许可证。就是你改了代码之后可以选择闭源或者开源，改了代码之后可以不用说明，然后还可以用作者的名字打广告。
* 我们在git hub上面点击Create new file,名字叫做license,当写完这个名字之后就可以看到右边显示一个choose a license template,点击它，然后找到MIT License,然后点击Review and submit,这里的哪一年和版权名字是什么可以修改。然后点击绿色的commit new file,然后点击Create pull
request,然后再点击merge pull request,然后再点击confirm merge,然后delete branch.这时候你去看Code就有一个License了。
### 使用库
* 首先是node和NPM，使用代码   
`npm init`
* 这时候会要你输入下面不限于这些信息
```
  "name": "gulu-demo",
  "version": "1.0.0",
  "description": "这个是一个UI框架",
  "main": "index.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/bomber063/DIY-UI-frame-by-Vue.git"
  },
  "keywords": [
    "Vue，ui"
  ],
  "author": "bomber hong",
  "license": "MIT",
```
* 安装Vue，使用下面代码,
```
npm i --save vue 
```
* 从npm6开始的--save就是默认的，可以不写
```
npm i vue
```
* 由于安装Vue之后会出现node_modules文件夹，里面有大量的文件，可以选择新建一个.gitignore来设置某个路径的文件并不提交到git hub仓库。
#### 用webstorm操作后续代码
* webstorm的安装，见链接[JetBrains WebStorm 2019.1 x64 破解](http://www.bcniubi.cn/221)和链接[Webstorm 2019.1 破解](https://blog.csdn.net/fu983531588/article/details/89312799)
* webstorm的汉化见链接[webStorm安装及汉化教程](https://blog.csdn.net/qq_33915006/article/details/79696319)
* webstorm添加到鼠标右键的方法链接[WebStorm添加右键菜单](https://www.jianshu.com/p/de8f31e11dea)
* webstorm修改字体方法链接[WebStorm设置编辑器中的字体大小及样式](https://www.cnblogs.com/dzlishen/p/4253280.html)
* 添加一个设置，调试器（Debugger）里面把允许未签名（Allow unsigned requests）的选项打钩，具体为什么暂时不清楚，我自己搜索了一下，可能是这个而连接[webstorm打开的页面如何通过手机访问？](https://blog.csdn.net/qq_28296925/article/details/94602731)
* 添加一个设置，在系统设置（system settings）取消勾选关闭 WebStorm 的 Safe Write 功能，也就是Use'safe write'(save changes to a temporary file first)这个选项去掉打钩。可能的原因是[webstorm不能自动重新编译问题](https://blog.csdn.net/qq_34149935/article/details/79224263)
* 视频中的额webstorm只支持ES5的写法，可能是老版本的，有些ES6的写法会出现警告或者下划线，不过可以点击红灯泡来解决。不过现在都支持了。
* 两个最常用的**快捷键**，
1. shift shift，就是按两下shift，它会给你一个搜索框，可以搜索其他任意的快捷键,比如可以搜VCS，它的全称是version control system,版本控制系统，就是用于git操作的。搜索vcs后可以看到一个vcs Operations Popup，它可以用于与git操作，所以webstorm可以代替git bash这个软件。当然有时候会git操作失败，失败就继续用git bash吧。
2. 搜索vcs后可以看到一个vcs Operations Popup，你可以看到它的快捷键，我的快捷键是alt+`，每个人这个的快捷键不一定相同。
3. 设置（ctrl+alt+s），它在文件——>设置里面，然后就可以看到所有的快捷键，而且可以修改他们
4. 格式化代码（ctrl+alt+L）
## 代码创建一个按钮
### 一个WebStorm的警告，不知道为什么
* 我的WebStorm版本是2019.1
* 这里我在用button.js创建组件代码的时候出现一个WebStorm的警告，就是Vue.component这里会有浅黄色的波浪线，但是代码在浏览器中是可以正常执行的。不清楚为什么。代码如下
```
Vue.component('g-button', {
    template: `
    <button>hi</button>
    `
});
```
* 把代码修改为下面的，也就是增加了import,Vue.component这里浅黄色的波浪线就没有了，但是代码在浏览器中不能正常执行
```
import {AsyncComponent as Vue} from "vue/types/options";
前面的代码改成import Vue from 'vue'也可以

Vue.component('g-button', {
    template: `
    <button>hi</button>
    `
});
```
* 查过一些相关的说明
1. [去掉WebStorm中黄色警告](https://blog.csdn.net/qq_30091939/article/details/88568456)
2. [编写简单的 Vue 组件](https://www.jianshu.com/p/cf9dbeeb004f)
* 老师给出的经验是：你是使用直接用 <script> 引入的，而WebStorm以为你是通过npm包引入（这种方式应该是需要你声明一下import Vue from 'vue'），所以给你这个提示，所以.......在当前状况下可以无视这个波浪线
### 这个webStorm的警告先这样，继续写组件及样式
* 全局组件的说明见[链接](https://cn.vuejs.org/v2/guide/components.html?#%E7%BB%84%E4%BB%B6%E7%9A%84%E7%BB%84%E7%BB%87)
* 全局注册的组件可以用在其被注册之后的任何 (通过 new Vue) 新创建的 Vue 根实例，也包括其组件树中的所有子组件的模板中。
* 这里的简单代码示例就是在JS中
```
Vue.component('g-button', {
    template: `
    <button>hi</button>
    `
});
```
* 在HTML中实例化这个Vue，挂在到#app这个标签上
```
    new Vue({
        el:'#app',
    })
```
* 增加样式
```
        *{
            box-sizing: border-box;
            padding: 0px;
            margin: 0px;
        }
```
* 为了统一一些CSS的属性值，我们用到CSS变量及:root
* 这里用到CSS的伪类,[:root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，:root 表示 <html> 元素，除了优先级更高之外，与 html 选择器相同。
* 在声明全局 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*)时 :root 会很有用,带有前缀--的属性名，比如--example--name，表示的是带有值的自定义属性，其可以通过 var 函数在全文档范围内复用的。
* [:active](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active) CSS伪类匹配被用户激活的元素。它让页面能在浏览器监测到激活时给出反馈。当用鼠标交互时，它代表的是用户按下按键和松开按键之间的时间
```
        :root{
            --button-height:32px;
            --font-size:14px;
            --button-bg:white;
            --button-active-bg:#eee;
            --border-radius:4px;
            --color:#333;
            --border-color:#999;
            --border-color-hover:#666;
        }
        body{
            font-size:var(--font-size);
        }
        #app{
            margin:20px;
        }
        .g-button{
            font-size: var(--font-size);
            height:var(--button-height);
            padding: 0 1em;
            border-radius:var(--border-radius);
            border:1px solid var(--border-color);
            background: var(--button-bg);
        }
        .g-button:hover{
            border-color: var(--border-color-hover);
        }
        .g-button:active{
            background: var(--button-active-bg);
        }
        .g-button:focus{
            outline: none;//这里是不显示默认蓝色的边框，后续在加focus的样式
        }
```
* 这里WebStorm会认为g-button这个选择器没有使用过，因为我们是在另外一个JS文件里面使用的，所以这个软件查询不到，这个可以忽略。
## 其他说明
* 一个Vue的UI组件。
* 使用本框架前，请在CSS中开启下面代码
```
        *{
            box-sizing: border-box;
            padding: 0px;
            margin: 0px;
        }
```
作者：bomber