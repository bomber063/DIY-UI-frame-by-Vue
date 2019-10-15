# DIY-UI-frame-by-Vue——框架搭建，持续集成
## 大致的知识点
1. parcel
2. scss
3. Vue 单文件组件
4. WebStorm 的快捷键
5. CSS变量和:root选择器
6. Vue.component
7. 插槽（slot）
8. $emit
9. props
10. Headless Chrome
11. Mock
12. npm scripts
* 不要妄图掌握所有的知识点，针对不同知识点不同的掌握程度：
1. 工具知识点——webpack，parcel,less,sass,babel等，这些工具很容易被取代，有的可能一年左右就被取代了。这种只需要知道怎么用即可。
2. 语言特性知识点——比如JS的promise，async，Vue框架特性，CSS变量及:root选择器等，有些暂时没有用到，不是在这一节中有太多体现。这些**必须要深入了解**。
3. 抽象特点知识点——比如代码如何组织，写代码的流程，写之前需要思考或者做什么，设计模式等。
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
#### 用webStorm操作后续代码
* WebStorm的安装，见链接[JetBrains WebStorm 2019.1 x64 破解](http://www.bcniubi.cn/221)和链接[Webstorm 2019.1 破解](https://blog.csdn.net/fu983531588/article/details/89312799)
* WebStorm的汉化见链接[webStorm安装及汉化教程](https://blog.csdn.net/qq_33915006/article/details/79696319)
* WebStorm添加到鼠标右键的方法链接[WebStorm添加右键菜单](https://www.jianshu.com/p/de8f31e11dea)
* WebStorm修改字体方法链接[WebStorm设置编辑器中的字体大小及样式](https://www.cnblogs.com/dzlishen/p/4253280.html)
* 添加一个设置，调试器（Debugger）里面把允许未签名（Allow unsigned requests）的选项打钩，具体为什么暂时不清楚，我自己搜索了一下，可能是这个而连接[webstorm打开的页面如何通过手机访问？](https://blog.csdn.net/qq_28296925/article/details/94602731)
* 添加一个设置，在系统设置（system settings）取消勾选关闭 WebStorm 的 Safe Write 功能，也就是Use'safe write'(save changes to a temporary file first)这个选项去掉打钩。可能的原因是[webStorm不能自动重新编译问题](https://blog.csdn.net/qq_34149935/article/details/79224263)
* 视频中的额WebStorm只支持ES5的写法，可能是老版本的，有些ES6的写法会出现警告或者下划线，不过可以点击红灯泡来解决。不过现在都支持了。
* 两个最常用的**快捷键**:
1. shift shift，就是按两下shift，它会给你一个搜索框，可以搜索其他任意的快捷键,比如可以搜VCS，它的全称是version control system,版本控制系统，就是用于git操作的。搜索vcs后可以看到一个vcs Operations Popup，它可以用于与git操作，所以webstorm可以代替git bash这个软件。当然有时候会git操作失败，失败就继续用git bash吧。
2. 搜索vcs后可以看到一个vcs Operations Popup，你可以看到它的快捷键，我的快捷键是alt+`，每个人这个的快捷键不一定相同。
3. 设置（ctrl+alt+s），它在文件——>设置里面，然后就可以看到所有的快捷键，而且可以修改他们
4. 格式化代码（ctrl+alt+L）
* 在WebStorm中输入Button.log就会自动转换为console.log(Button);
* 用emmet简化CSS写法可以搜索把emmet里面CSS的Enable fuzzy search among CSS abbreviations打钩
* CSS背景颜色（background）设置，在设置->编辑器->常规->外观里面找到Show CSS color preview as background打钩即可。
* webStorm还可以查看你修改的本地历史，可以右键->本地历史->显示历史就可以看到了**用WebStorm修改的所有历史,可以撤回还原代码**
* webStorm可以统一一次把所有变量替换为你需要的变量，鼠标右键点击**重构重命名,在这个作用域里面的变量都可以一次性修改**
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
* :root的兼容性说明请查看[canIUse网站](https://www.caniuse.com/)
* 这个:root其实就是html选择器。改成html是一样的。
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
### 代码组合到一个文件里面
* 目前的代码是分散的，比如
1. JS是写在单独的button.js文件里面。
2. HTML是写在button.js的template里面。
3. 样式写到index.html的style标签里面。
* Vue是可以使用[单文件组件的](https://cn.vuejs.org/v2/guide/single-file-components.html#ad)，也就是**可以用一个文件表示这三种语言，但是需要先引入webpack或者[parcel](https://parceljs.org/)**，目前先用parcel。
* 根据[parcel开始](https://zh.parceljs.org/getting_started.html)里面的安装进行安装
* 前面的Vue的安装是给用户使用的，所以不需要加-D，因为**-D是给开发者使用的,D的意思就是development**，具体见这个链接[npm install -S -D -g 有什么区别](https://www.jianshu.com/p/2e7f3b69e51e)
```
npm i -D parcel-bundler
```
* 创建一个src文件夹。然后把index.html里面的下面的Vue代码拷贝到这个文件里面的app.js里面去。
```
new Vue({
    el: '#app',
})
```
* 在index.html中引入vue的和引入button.js的script代码也可以删除，从app.js里面import来引入
* 删除index.html中的下面行代码
```
<script src="./node_modules/vue/dist/vue.min.js"></script>
<script src="./button.js"></script>
```
* 但是需要引入app.js这个文件，因为所有的**入口全都从这个app.js进入**
```
<script src="./src/app.js"></script>
```
* 这个app.js需要加入vue的引入，通过下面代码
```
import Vue from 'vue'
```
* 它的完整写法是把整个目录写进入，但是import...from...的from命令后面可以跟很多路径格式，若只给出vue，axios这样的包名，则会自动到node_modules中加载；若给出相对路径及文件前缀，则到指定位置寻找。所以可以忽略掉路径，详细省略路径的原因见[链接import Vue from 'vue'](https://blog.csdn.net/bujiongdan/article/details/81416100)，完整的写法
```
import Vue from "../node_modules/vue/dist/vue.js";
```
* 可以看到之前的入口由script里面的src引入，现在通过import引入。
* 在src里面在创建一个**button.vue，包括了html（用template标签），css（用style标签），js（用script标签）的三个代码，**把前面的代码拷贝过来**稍作修改即可**。
* script里面只需要用`export default {}`,style中使用SCSS代码稍微修改下，[这里的`&`是SCSS的语法](https://www.html.cn/doc/sass/#parent-selector),它代表引用父选择器。
* 此时的button.js可以删除掉了
* button.vue此时的代码
* 这里用到了style的[lang属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/lang)
```
<template>
    <button class="g-button">按钮</button>
</template>
<script>
    export default {

    }
</script>
<style lang="scss">
    .g-button{
        font-size: var(--font-size);
        height:var(--button-height);
        padding: 0 1em;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        background: var(--button-bg);
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background: var(--button-active-bg);
        }
        &:focus{
            outline: none;//这里是不显示默认蓝色的边框，后续在加focus的样式
        }
    }
</style>
```
* 这里用到全局注册的组件[Vue.component](https://cn.vuejs.org/v2/api/#Vue-component)，整个app.js代码修改为
```
import Vue from 'vue'
import Button from './button'

Vue.component('g-button',Button)

new Vue({
    el: '#app',
})
```
* 最后我们需要运行parcel打包代码运行后才可以生效。**需要写入完整路径,window用户还需要在后面加上index.html，不然可能会有No entres found 报错**。
```
./node_modules/.bin/parcel index.html
```
* 如果**你不想写入全部路径可以用npx，它可以帮助你找被目录的路径**
```
npx parcel index.html
```
* parcel会去安装你需要的所有东西(包括vue-template-compiler@2.6.10，@vue/component-compiler-utils@3.0.0，sass@1.22.12，vue-hot-reload-api@2.3.4)，安装完后会有一个链接地址http://localhost:1234/给你就可以在浏览器上查看啦。
### 但是此时运行parcel出现了错误
* 浏览器上报错显示vue.runtime.esm.js:734 [Vue warn]: You are using the **runtime-only build of Vue** where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
* 这里说到runtime-only有问题，此时我们通过[Vue文档](https://cn.vuejs.org/v2/guide/installation.html#Parcel)查看配置parcel需要添加东西，package.json加入下面代码
```
{
  // ...
  "alias": {
    "vue" : "./node_modules/vue/dist/vue.common.js"
  }
}
```
* 修改后就不会去使用默认的runtime-only版本，而是去使用vue.common.js版本。
* 此时ctrl+c断开后使用下面代码运行，**此时需要加上--no-cache,意思是不要使用之前的缓存**
```
npx parcel index.html --no-cache
```
* 因为安装了parcel运行后会有一个.cache文件，如果把这个文件删除掉也可以不加--no-cache。
* 此时就可以在出现的链接http://localhost:1234中看到按钮啦。
* 此时产生的.cache文件（parcel编译的过程中产生的缓存存放的地方）不需要上传到git hub上面去，要放到.gitignore里面去。
* dist文件夹也暂时不用上传，放到.gitignore里面去。
### 其他
* 安装一个git open就可以在所在目录用git直接打开git hub仓库的网页了。这个可以全局安装
```
npm i -g git-open
```
* 然后再任何一个git仓库的目录输入下面代码就可以打开远程git hub仓库了
```
git open
```
* 不过只是用默认的浏览器打开，指定用某个浏览器我还不会用。具体见[链接git-open](https://github.com/paulirish/git-open)
### 小结
***
* 目前我们就把代码从最原始的JS版本变成parcel版本，我们大致做了以下内容：
1. 首先把button.js变成了button.vue。button.vue里面有html内容，JS内容和内容CSS。
2. 在app.js里面把所有的依赖（引入两个script标签）通过import来代替，比如Vue库和button.vue的引入。
3. app.js里面通过Vue.component声明g-button标签对应Button.vue这个引入
4. 然后在app.js里面用new Vue实例化（初始化）标签为#app的这个DIV。
5. index.html里面有一个标签为#app的这个DIV，它里面有一个g-button这个标签，它会去问Vue是否认识这个按钮，因为通过了Vue.component声明过了。他会把这个g-button的按钮渲染成Button.vue
6. 然后就进入到Button.vue这个文件里面看template里面的html,JS和CSS一起来渲染。
7. 通过开发者工具打开http://localhost:1234可以看到渲染后JS自动变成了script标签去引用，CSS自动变成了link去引用。
* 这些就是[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html#ad)，特点就是把html,JS,css放到一个文件里面。
* 目前用到的parcel暂时不用配置，比较方便。但是后续需要一些操作。
* 目前学完了前面六个知识点：
1. parcel
2. scss
3. Vue 单文件组件
4. WebStorm 的快捷键
5. CSS变量和:root选择器
6. Vue.component
***
## Vue的slot插槽
* 单文件组件（button.vue）的template代码中的内容不知道是什么，需要外面（index.html）传进来,这时候就用到[slot](https://cn.vuejs.org/v2/api/#slot)和[slot详细](https://cn.vuejs.org/v2/guide/components-slots.html)，当index.html用到这个创建的标签g-button的时候，这个标签里面传入什么信息就会被button.vue的slot替换为什么信息。
```
<template>
    <button class="g-button">
        <slot></slot>
    </button>
</template>
```
* 我在index.html中传入按钮两个字
```
<div id="app">
    <g-button>按钮</g-button>
</div>
```
## 增加Icon
* Icon一般需要设计师来做的比较漂亮，所以前端一般是弄不出来的，这里可以推荐一个[icon网站](https://www.iconfont.cn/)
* 这里不详细说明过程了，详细可以查看以前的博客——[小图标创建](https://zhuanlan.zhihu.com/p/54616676)和[帮助](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)
* 这里说明一点就是如果有上下左右这种结构的，可能不一定会有左右或者上下匹配的图标，那么就通过
1. **编辑图标去设置上下或者左右旋转**就好了。
2. 也可以直接下载SVG图片使用墨刀（window）或者Sketch(苹果)可以编辑SVG的软件，也有在线的软件，来更改方向，改变之后上传SVG（这里必须上传SVG格式才行）到icon网站对应你的项目即可。
* 更多[SVG编辑工具](https://www.mockplus.cn/blog/post/1308)，其中一款工具[AICC2019下载Adobe Illustrator CC 2019中文完整破解版免费下载与安装教程](https://www.jianshu.com/p/5e226def99cd)
* 这个Icon标签的宽高和字体一样就可以，设置为1em。代码修改为。
```
    <g-button>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-setting"></use>
        </svg>
        按钮
    </g-button>
```
* CSS代码为
```
.icon{
            width: 1em; height: 1em;
            vertical-align: -0.15em;
        }
```
* 为了便于使用该库的人更好的使用，一般是把SVG不写到index文件里面，而是写到button.vue里面，并且把CSS的样式解决好。
### 用props传值
* 我们用到[Vue的props](https://cn.vuejs.org/v2/api/#props),props 可以是数组或对象，用于接收来**自父组件的数据**。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。
* 我们在button.vue里面写入
```
<script>
    export default {
        props:['icon']
    }
</script>
```
* **这里的icon是一个标签的属性，并且是一个变量，这里的icon值是父级组件标签的属性传过来的**，也就是index.html的标签g-button的属性传过来的。我们传入icon为setting
```
<div id="app">
    <g-button icon="setting">
        按钮
    </g-button>
</div>
```
* 这里的**export对应该文件路径的import**。在import下面输入console.log(icon)可以打出这个icon的值，也就是也就是index.html的标签g-button的属性传过来的值。
* button.vue上面用到export
```
    export default {
        props:['icon']
    }
```
* app.js里面用到import
```
import Button from './button'
```
* [传递动态prop](https://cn.vuejs.org/v2/guide/components-props.html#%E4%BC%A0%E9%80%92%E9%9D%99%E6%80%81%E6%88%96%E5%8A%A8%E6%80%81-Prop)，这里需要用到v-bind:绑定属性，也可以简写为一个冒号:,这里还用到ES的反引号和插入${}的[模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)用法，也就是把它变成了一个JS语法的操作。
```
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
```
* export和import的用法[说明](https://www.cnblogs.com/xiaotanke/p/7448383.html)
### 一个BUG
* 如果用户没有传入icon，也就是index.html里面的 g-button没有写icon，那么就会出现一个空的SVG占用位置。
* 只需要加一个v-if即可，v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。就是icon变量存在的时候那么就肯定是返回truthy值，才会出现SVG，不存在就不出现SVG
```
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
```
### icon从左边换到右边
* 这里要增加一个变量icon-position（短横线法）或者iconPostion（驼峰法）,**这个变量在HTML只能用中划线与他们对应，**HTML中的特性名是大小写不敏感的**，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名，具体说明详细见[Prop 的大小写 (camelCase vs kebab-case)](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99-camelCase-vs-kebab-case)
* 但是**在v-bind绑定的style里面就必须要写驼峰**，不管props里面是icon-position（短横线法）还是iconPosition（驼峰法）
```
v-bind:style="{order:iconPosition}"
```
* 介绍两种方法：
1. 用v-if,[v-else](https://cn.vuejs.org/v2/api/#v-else)来判断之后把slot的顺序修改，但是这样写重复代码有点多，重复多了就会不小心犯错。比如
```
        <button class="g-button" v-if="iconPosition==='right'">
            <slot></slot>
            <svg v-if="icon" class="icon"  aria-hidden="true">
                <use :xlink:href="`#i-${icon}`"></use>
            </svg>
        </button>
        <button class="g-button" v-else>
            <svg v-if="icon" class="icon"  aria-hidden="true">
                <use :xlink:href="`#i-${icon}`"></use>
            </svg>
            <slot></slot>
        </button>
```
2. 用 v-bind:class,用CSS来控制前后顺序，不用JS控制前后顺序，这样用CSS来做样式相关的代码，可以减少代码重复导致不小心的犯错,这里用到了[用方括号括起来的 JavaScript 表达式作为一个指令的参数](https://cn.vuejs.org/v2/guide/syntax.html#%E5%8A%A8%E6%80%81%E5%8F%82%E6%95%B0),比如下面的代码，这里的${iconPosition}首先会被props里面的icon-position替换，prop这里的icon-position是index中赋值的right，所以${iconPosition}最后就是right，所以就变成`{[`icon-right`]:true}`,
icon-right会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。那么这个绑定将等价于 v-bind:class={icon-right:true}。**这个 class 存在与否将取决于数据属性 icon-right 的 truthiness,默认是false**，也就是默认不绑定icon-right这个class,但是如果是true那么就会绑定icon-right这个class。具体见[对象语法](https://cn.vuejs.org/v2/guide/class-and-style.html#%E5%AF%B9%E8%B1%A1%E8%AF%AD%E6%B3%95)
```
            <svg v-if="icon" class="icon" v-bind:class="{[`icon-${iconPosition}`]:true}" aria-hidden="true">
                <use :xlink:href="`#i-${icon}`"></use>
            </svg>
```
* script中有props
```
<script>
    export default {
        props:['icon','icon-position']
    }
</script>
```
* 外面的index.html中的icon-position做了赋值
```
<div id="app">
    <g-button icon="setting" icon-position="right">
        按钮
    </g-button>
    <g-button icon="setting">
        按钮
    </g-button>
</div>
```
* CSS 的选择器默认的order为0，icon-right的order为1，也就是在默认的右边。
```
        & .icon{
            width: 1em; height: 1em;
            vertical-align: -0.15em;
            order:0;
            /*fill: currentColor;*/
            /*overflow: hidden;*/
        }
        & .icon-right{
            order:1;
        }
    }
```
3. 也可以把v-bind:class绑定到SVG的上一级div上面。不过这里需要注意slot是不能绑定class的也就是slot标签不能有属性class，因为它会消失，具体为什么暂时不清楚，所以需要给slot外面加一个div并且绑定一个默认的class。
* 外面的index.html代码也有icon-position="right"
```
    <g-button icon="setting" icon-position="right">
        按钮
    </g-button>
```
* template代码为
```
        <button class="g-button" v-bind:class="{[`icon-${iconPosition}`]:true}">
            <svg v-if="icon" class="icon"  aria-hidden="true">
                <use :xlink:href="`#i-${icon}`"></use>
            </svg>
            <div class="content">
                <slot ></slot>
            </div>
        </button>
```
* script一样
```
    export default {
        props:['icon','icon-position']
    }
```
* CSS代码需要有默认的顺序（icon在前面，content在后面）和icon-right的样式顺序（icon在后面，content在前面）
```
        & .icon{
            width: 1em; height: 1em;
            vertical-align: -0.15em;
            order:1;
            /*fill: currentColor;*/
            /*overflow: hidden;*/
        }
        & .content{
            order:2;
        }
        &.icon-right{
            & .icon{
                order:2;
            }
            & .content{
                order:1;
            }
        }
```
* 当然也可以直接用v-bind:style，v-bind:style 的对象语法十分直观——看着非常像 CSS，但**其实是一个 JavaScript 对象**。CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名
### 解决一个CSS不对齐BUG
* 发现两个按钮上下之间没有对齐，这是**因为inline元素引起的BUG**，这时候只需要在对应的class上面加上下面属性和值（这个值除了默认值都可以，比如top,middle等）即可：
```
    .g-button{
        vertical-align: top;
        }
```
### 继续增加icon和字体之间的CSS间隙样式
* 只需要icon和字体之间间隙为0.3em即可，因为默认样式会增加到所有样式中，包括icon-right样式里面去，所需要在icon-right里面写上margin-right:0
```
        & .icon{
            margin-right:.1em;
        }
        & .content{
            order:2;
        }
        &.icon-right{
            & .icon{
                order:2;
                margin-left:.1em;
                margin-right:0;
            }
            & .content{
                order:1;
            }
```
### props的另一种写法，不用数组，用对象
* [props](https://cn.vuejs.org/v2/api/#props)用数组是简单语法，对象语法稍微复杂一点,因为它可以提供验证。并且提供了一些选项：
1. type: 可以是下列原生构造函数中的一种：String、Number、Boolean、Array、Object、Date、Function、Symbol,任何自定义构造函数、或上述内容组成的数组。会检查一个 prop 是否是给定的类型，否则抛出警告。
2. default: any，为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值。
3. required: Boolean，定义该 prop 是否是必填项。在非生产环境中，如果这个值为 truthy 且该 prop 没有被传入的，则一个控制台警告将会被抛出。
4. validator: Function，自定义验证函数会将该 prop 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 falsy 的值 (也就是验证失败)，一个控制台警告将会被抛出。
* 我们可以通过validator函数打出传进来的参数是什么，比如
```
                validator(xxx) {
                    console.log(xxx)
                }
```
* 为了防止用户输入除了左left右right以外别的方向，我们可以通过下面的验证函数.
```
                validator(xxx) {
                    if(xxx!=='left'&&xxx!=='right'){
                    return false
                    }
                    return true
                }
```
* 当用户输入除了left和right以外的值浏览器就会报错,报错示例.
```
vue.common.dev.js:750 [Vue warn]: Invalid prop: custom validator check failed for prop "iconPosition".

found in

---> <GButton>
       <Root>
```
* 上面的validator代码如果是使用WebStorm（他是一种智能的IDE）那么就可以看到有黄色小灯泡，里面有一堆优化代码的选项，有很多可以简化的选项，这里选择其中一种，比如可以选择simplify if-else就变成了
```
                validator(xxx) {
                    return !(xxx !== 'left' && xxx !== 'right');
                }
```
* 还可以继续优化，把&&改成||
```
                    return xxx === 'left' || xxx === 'right';
```
* 我们定义type类型为字符串，并且default默认值为'left',然后只能输入的参数只能使left和right.
### 小结
***
* 我们是怎么引入这个icon到从左边到右边的
1. 在index.html上增加一个icon-position，如果它赋值为right就是右边。如果没有写这个icon-position那就就出现在最左边。
2. 这个class是如何控制的，是通过这个代码,它通过**方括号和字符串模板的插入${}，并且通过绑定class的对象语法完成**。
3. 绑定class之后，通过对应Class控制CSS的order就可以间接控制顺序了。
```
v-bind:class="{[`icon-${iconPosition}`]:true}"
```
***
## 增加icon.vue，将svg代码组件化整理到icon.vue
* 如果需要新增加icon，那么需要重新写以前的重复代码，如何解决呢？增加icon.vue是可以减少更多的重复代码
* 建立一个icon.vue代码为：
```
<template>
        <svg class="g-icon">
            <use :xlink:href="`#i-${name}`"></use>
        </svg>
</template>
<script>
    export default {
        props:['name']
    }
</script>
<style lang="scss">
    .g-icon {
        vertical-align: -0.15em;
        width: 1em;
        height: 1em;
    }
</style>
```
* app.js里面引入全局组件icon.vue
```
import Icon from './icon'

Vue.component('g-icon',Icon)
```
* button.vue的下面代码就可以删除
```
            <svg v-if="icon" class="icon" >
                <use :xlink:href="`#i-${icon}`"></use>
            </svg>
```
* 替换为下面的代码，注意name前面需要有一个冒号:。这个冒号是v-bind:的缩写，如果不写这个冒号icon就是一个字符串，写了这个icon是一个变量，也就是props里面的变量icon。可以用外部对这个icon属性进行赋值操作。
```
            <g-icon v-if="icon" :name="icon"></g-icon>
```
* 这时候你就可以在index.html或button.vue中都可以使用g-icon标签了。
* 但是还有一个icon的class样式没有加入，我们把代码加入这个class它主要是控制顺序，也就是order，还有一些margin。
```
            <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
```
## 增加loading icon
### loading的CSS样式
* 继续在iconfont网站找一个加载的图标。
* 然后增加一个loading-css的class
```
            <g-icon name="loading" class="loading-css"></g-icon>
```
* 然后在button.vue上添加一个旋转的动画
```
    @keyframes rotate {
        from{
            transform: rotate(0deg);
        }
        to{
            transform:rotate(360deg);
        }
        
        & .loading-css{
            animation: rotate 1.5s linear infinite;
        }
```
* [SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial)改变颜色是用fill，比如
```
fill:red
```
* 增加一个loading 属性
```
            'loading':{
              type:Boolean,
              default: false
            },
```
* 当属性后面的值要表示变量的时候，属性前面必须要有冒号：或者v-bind:，因为这样的属性值这样才能使它成为JS的代码，比如下面的就是字符串"true"
```
    <g-button loading="true">
```
* 下面的就是JS代码对应的布尔true，此时的引号已经没用了，**可以去掉这个双引号,也可以留着双引号。**
```
    <g-button :loading="true">
```
* 只要loading存在的话，那么icon应该隐藏删除掉，那么就写上下面代码,既有loading又有icon的时候v-if就返回false，如果只有icon，loading为false的时候就返回true.
```
      <g-icon class="icon" v-if="icon&&!loading" :name="icon"></g-icon>
```
* 为了让loading和icon出现的左右顺序也相同，需要给loading还加上icon的class。这样CSS里面的order控制的顺序也会去控制loading了.
```
      <g-icon v-if="loading" name="loading" class="loading-css icon"></g-icon>
```
### $emit事件
* 这里需要一个[绑定事件v-on](https://cn.vuejs.org/v2/api/#v-on),@是v-on的缩写。
* 当有绑定事件，比如点击事件，点击了g-button，这个g-button的单元件组件有比较多的标签（有button，有g-icon，有div和slot），你需要用到[$emit](https://cn.vuejs.org/v2/api/#vm-emit)，这样就可以**告诉父组件这个子组件的哪个标签被这个点击事件触发了**。哪个地方引导这个触发呢？是js里面的对象触发的（相当于整个组件触发一个click事件）
* **原生的标签点击事件是知道了那个标签被点击了的**,因为原生的button就只有一个button。
* 这种**组件里面的标签比较多的，就需要靠emit来触发，字符串模板（template）里面的this是省略掉的**。他是通过with来实现的，具体见链接[MDN with](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/with)和[Vue 为什么要使用 with 语句？](https://segmentfault.com/q/1010000018552495)
```
        <button class="g-button" v-bind:class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
```
* 因为只执行了一句代码所以上面的是简写(不需要写出x这个变量和methods)，下面的是展开后详细的写法，你还可以写成这样,x是methods里面x()
```
        <button class="g-button" v-bind:class="{[`icon-${iconPosition}`]:true}" @click="x">
```
* script里面，**script里面要写上this**
```
<script>
    export default {
        methods:{
            x(){
                this.$emit('click')
            }
        }
    }
</script>
```
* props是需要父组件里面的属性的值传给子组件，而**data**是组件（包括组件或子组件）**本身**的属性值。比如下面的**左边的loading**是子组件里面props的属性loading，它赋值给**右边的loading1**，右边的loading1是父组件本身的一个变量属性，这个变量属性来自于data。这样这个loading1是一个变量，不是写死的一个值，就可以通过点击事件click后来执行JS代码loading1=!loading1，来改变这个true或者false的状态。
```
    <g-button :loading="loading1" v-on:click="loading1=!loading1">
```
* 父组件的data
```
new Vue({
    el: '#app',
    data:{
        loading1:false
    }
})
```
## CSS整理（代码可以选择把竖向排列变成横向排列，这样可以节省一些空间，不过本次暂时不整理）
## 上一页和下一页组合在一起的例子效果
* 新建一个button-group.vue，template里面如果只有slot会报错
```
<template>
    <div>
    <slot></slot>
    </div>
</template>
```
* 报错信息
```
Cannot use <slot> as component root element because it may contain multiple nodes.
```
* 所以最好在slot标签外面加上一个div标签，这样就不会报错了.
```
<template>
    <div>
    <slot></slot>
    </div>
</template>
```
### 增加部分CSS
#### 方法一——用border-left:none
* 中间的边框可以删除一边( border-left:none)的来达到贴合的目的。用到[CSS 否定伪类:not](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)
```
    .g-button-group {
        display: inline-flex;
        vertical-align: top;

        .g-button {
            border-radius: 0px;
            &:not(:first-child){
                border-left:none
            }
            &:first-child {
                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
            }

            &:last-child {
                border-bottom-right-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);
            }
        }
    }
```
* **但是存在一个BUG**,就是除了第一个按钮以外，后面其他的左边的border是没有的（none），那么hover的时候变色就会显得很难看了。所以不要使用这种方法。
#### 方法二——用margin-left
* 用margin-left,用到z-index，当hover的时候让他排到最外面，不然会被后面的遮盖住
```
    .g-button-group {
        display: inline-flex;
        vertical-align: top;

        .g-button {
            border-radius: 0px;
            margin-left:-1px;
            &:first-child {
                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
            }

            &:last-child {
                border-bottom-right-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
```
### 解决可能的风险
* 还存在一个风险，就是如果g-button标签被一个div标签包裹起来会显示出问题。所以通过一些操作来组织这样的代码产生。
* 这里需要用到下面三个知识点：
1. 需要稍微了解一下[生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)的知识，详细的解释可以看下这篇[文章——vue生命周期钩子函数详解](https://blog.csdn.net/qq_35585701/article/details/81216704),我们就知道[mounted函数](https://cn.vuejs.org/v2/api/#mounted)是el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。那么我们就可以在这个周期的时候通过一些实例属性查询是否存在g-button以外的其他标签（比如div）
2. 此时用[vm.$children](https://cn.vuejs.org/v2/api/#vm-children)是找不到div标签的，因为它只能找到Vue实例的标签。我们可以用[this.$el](https://cn.vuejs.org/v2/api/#vm-el),因为$el是**Vue 实例使用的原生根 DOM 元素实例**
3. [for of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)，该语句遍历可迭代对象定义要迭代的数据（也就是key对应的value）。
4. [console.warn](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/warn)向 Web 控制台输出一条警告信息
5. [toLowerCase()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) 会将调用该方法的字符串值转为小写形式，并返回。
* 最后g-button-group的CSS代码
```
<style lang="scss">
    .g-button-group {
        display: inline-flex;
        vertical-align: top;

        .g-button {
            border-radius: 0px;
            margin-left:-1px;
            &:first-child {
                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
            }

            &:last-child {
                border-bottom-right-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>
```
* 最后g-button-group的script代码
```
<script>
    export default {
        mounted(){
            // console.log(this.$el.children)
            for(let node of this.$el.children){
                if(node.nodeName.toLowerCase()!=='button'){
                    console.warn(`g-button-group的子元素应该全是g-button元素,但是你使用了${node.nodeName.toLowerCase()}元素`)
                }
            }
        }
    }
</script>
```
### 一个小BUG(第一个元素不需要margin-left:-1px)
* 只让出了第一个子元素左边移动1px
```
    &:not(:first-child){margin-left:-1px;}
```
### 这里把变量loading改成loadings，为了不合svg的loading名字冲突
* 这里的loading是svg的一个标签属性名字中的一段文字，而loadings是属性props.
* button.vue里面由
```
<template>
            <g-icon v-if="loading" name="loading" class="loading-css icon"></g-icon>
</template>
<script>
    export default {
        props: {
            'loading':{
              type:Boolean,
              default: false
            }
        }
    }
</script>
```
* 修改为
```
<template>
            <g-icon v-if="loadings" name="loading" class="loading-css icon"></g-icon>
</template>
<script>
    export default {
        props: {
            'loadings':{
              type:Boolean,
              default: false
            }
        }
    }
</script>
```
* index.html里面由
```
    <g-button :loading="loading1" v-on:click="loading1=!loading1">
        按钮
    </g-button>
```
* 修改为
```
    <g-button :loadings="loading1" v-on:click="loading1=!loading1">
        按钮
    </g-button>
```
### 加冒号和不加冒号区别
* icon.vue中下面的代码name如果**不加冒号**：icon.vue这个组件产生的标签g-icon中有一个name属性(也就是props:['name'])。**右边的赋值就是一个字符串**，除非是字符串的情况下才会这样写。**就算你在这里写的不是字符串它也会把它转换为字符串**
```
            <g-icon v-if="loadings" name="loading" class="loading-css icon"></g-icon>
```
* icon.vue中下面的代码name如果**加冒号**：icon.vue这个组件产生的标签g-icon中有一个name属性。**右边的赋值就是一个变量**，因为这里要用到的是字符串，所以如果写成变量的形式可以把它通过String() 转换为字符串。
```
            <g-icon v-if="loadings" :name=String("loading") class="loading-css icon"></g-icon>
```
## 单元测试
* Vue上面就有[单元测试](https://cn.vuejs.org/v2/guide/unit-testing.html)的说明，但是目前看的不是很懂。
* 单元测试就是你去传一个输入，从输出后看跟你输入的东西是否匹配，不匹配就报错。
* 单元测试需要用[chai.js库](https://www.chaijs.com/),Chai is a **BDD / TDD** assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
* 那么什么是BDD、TDD、assert分别是啥？
1. [BDD](https://baike.baidu.com/item/BDD/10735732?fr=aladdin)——Behavior Driven Development，行为驱动开发,行为驱动开发是测试驱动开发的扩展：**开发使用了一种简单的，特定于领域的脚本语言（例如，类似于英语的句子）。这些DSL将结构化的自然语言语句（例如，类似于英语的句子）转换为可执行的测试。**
2. [TDD](https://en.wikipedia.org/wiki/Test-driven_development)——Test-Driven Development,测试驱动开发,是一种软件开发过程，它依赖于非常短的开发周期的重复：将需求转换为非常具体的测试用例，然后对软件进行改进以使测试通过
3. [assert](https://zh.wikipedia.org/wiki/%E6%96%B7%E8%A8%80_(%E7%A8%8B%E5%BC%8F)),是一种放在程序中的一阶逻辑（如一个结果为真或是假的逻辑判断式），目的是为了标示与验证程序开发者预期的结果－当程序运行到断言的位置时，对应的断言应该为真。若断言不为真时，程序会中止运行，并给出错误消息。
    * 其实浏览器的控制台就有断言的命令就是[console.assert](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/assert),如果断言为false，则将一个错误消息写入控制台。如果断言是true，没有任何反应。比如下面的判断就是错的，那么就会弹出Assertion failed: console.assert
    ```
    console.assert(1===2)//会弹出Assertion failed: console.assert
    ```
* 浏览器自带的console.assert功能比较弱，只能判断是真是假，如果需要更多功能可以使用[chai.js库]((https://www.chaijs.com/))。它给了三种形式的断言
1. Should
2. Expect
3. Assert
* 这里就以Expect举例好了。先安装chai.js,在你的目录属性下面命令,-D是给开发者用的
```
npm i -D chai
```
* 运行后显示版本chai@4.2.0
### 通过Vue.extend构造一个函数
* 这里用需要构造一个函数，用到[Vue.extend](https://cn.vuejs.org/v2/api/#Vue-extend),使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。data 选项是特例，需要注意 - 在 Vue.extend() 中它必须是函数
* 我们**通过JS把按钮写到页面里面**，通过一个方法（Vue.extend方法）构造函数，用new就可以Vue实例一个对象，然后挂载([vm.$mount](https://cn.vuejs.org/v2/api/#vm-mount))到一个标签上面。如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地**挂载一个未挂载的实例(挂载多个会报错)**。比如下面代码
```
    const Constructor=Vue.extend(Button)//button组件变成构造函数
    const button=new Constructor()//通过这个构造函数new之后变成一个Vue实例
    button.$mount(test)//把button这个Vue实例挂载到id为test的标签上面。
```
* index.html上新增一个测试的id=text
```
    <div id="test"></div>
```
* 这样就通过JS把按钮写到页面里面了
* 这里如果不挂载到标签上它只能只是一个虚拟的DOM。
* 因为Button是来自于import Button from './button'，这个button.vue里面的属性如下：
```
        props: {
            'icon': {},
            'loading':{
              type:Boolean,
              default: false
            },
            'iconPosition': {
                type: String,
                default: 'left',
                validator(xxx) {
                    return xxx === 'left' || xxx === 'right';
                }
            }
        }
```
### 使用propData来修改new创建的实例的属性值
* 怎么来修改或者设置props里面的各种属性的值呢，**这里可以通过[propsData](https://cn.vuejs.org/v2/api/#propsData)来修改属性值**,限制：只用于 new 创建的实例中。创建实例时传递 props。主要作用是方便测试。
* 这样就可以通过
```
    const vm=new Constructor({
        propsData:{
            icon:'setting'
        }
    })
```
* 这样就可以在页面上看到一个button的icon了。
### 测试代码
* 单元测试就是放一个输入得到一个输出，**一般哪些东西需要单元测试呢？只要看一下有哪些输入参数,也就是props，除此之外还有触发的事件，比如click**。
* 测试完后，增加的页面多余的button或者显示还有内存最好清除掉，比如
```
    button.$el.remove()//测试完后为了不增加页面多余的button和内存最好移除。
    button.$destroy()//测试完后为了不增加多余内存最好移除。
```
* 测试代码如下
1. 第一个测试代码是测试输入一个icon:setting，得到对应的xlink:href是否与#i-setting匹配。
```
import chai from 'chai'
const expect=chai.expect
{
    const Constructor=Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    vm.$mount(test)
    let useElement=vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting')//这个看起来很像英文的写法
    // console.assert(useElement.getAttribute('xlink:href')==='#i-setting') 这个JS语法的写法
    vm.$el.remove()//测试完后为了不增加页面多余的button和内存最好移除。
    vm.$destroy()//测试完后为了不增加多余内存最好移除。
}
```
   * 这里最后一行的expect看起很像英文的写法，如果用JS语言应该是console.assert(useElement.getAttribute('xlink:href')==='#i-setting')，如果返回的不是true就会显示报错。
   * 另外提醒一下,如果不$mount到test上，比如把$mount(test)改成$mount()也是可以正常执行的
2. 第二个测试，输入一个icon:setting并且loadings:true，得到对应的xlink:href是否与#i-loading匹配。也就是loading在true的时候隐藏掉icon，只显示loading
```
{
    const Constructor=Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            icon:'setting',
            loadings:true
        }
    })
    vm.$mount()
    let useElement=vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-loading')

    vm.$el.remove()//测试完后为了不增加页面多余的button和内存最好移除。
    vm.$destroy()//测试完后为了不增加多余内存最好移除。
}
```
3. 测试svg的order,order就是顺讯，也就是左边还是右边，这里如果要获取到CSS的属性就需要渲染后才可以获取到。**如果button不在页面里面，就不会渲染CSS**,下面的代码是获取不到svg的CSS的order属性的。
   * [window.getComputedStyle](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle)方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。 私有的CSS属性值可以通过对象提供的API或通过简单地使用CSS属性名称进行索引来访问。这里获取到的所有CSS属性值都是**字符串**
```
{
    const Constructor=Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right'
        }
    })
    button.$mount()
    let svg=vm.$el.querySelector('svg')
    let order=window.getComputedStyle(svg).order
    console.log(order)//这里的order是没有任何信息的。
        vm.$el.remove()//测试完后为了不增加页面多余的button和内存最好移除。
        vm.$destroy()//测试完后为了不增加多余内存最好移除。
}
```
   * 所以需要把vm挂载到页面里面,所以需要创建一个div放到body下面，然后再把这个vm挂载到这个div上，这样button就会出现在页面里面，出现在页面里面就会有样式，就会渲染CSS啦。我们就可以使用window.getComputedStyle这个API了。
   ```
   {
       const div=document.createElement('div')
       document.body.appendChild(div)
       const Constructor=Vue.extend(Button)
       const vm=new Constructor({
           propsData:{
               icon:'setting',
               iconPosition:'right'
           }
       })
       vm.$mount(div)
       let svg=vm.$el.querySelector('svg')
       let order=window.getComputedStyle(svg).order
       expect(order).to.equal('2')//这里iconPosition:'right',所以的order就是'2'
   
       vm.$el.remove()//测试完后为了不增加页面多余的button和内存最好移除。
       vm.$destroy()//测试完后为了不增加多余内存最好移除。
   }
   ```
   * 如果只是通过设置属性这样的方式也可以，代码也比较简答
   ```
   {
       const div=document.createElement('div')
       document.body.appendChild(div)
       const Constructor=Vue.extend(Button)
       const vm=new Constructor({
           propsData:{
               icon:'setting',
               iconPosition:'right'
           }
       })
       vm.$mount(div)
       let useElement=vm.$el
       expect(useElement.getAttribute('class')).to.equal('g-button icon-right')
   
       vm.$el.remove()//测试完后为了不增加页面多余的button和内存最好移除。
       vm.$destroy()//测试完后为了不增加多余内存最好移除。
   }
   ```
4. 触发click的测试
   * 这里需要用到[vm.$on](https://cn.vuejs.org/v2/api/#vm-on)
   * 因为这里就需要点击根元素，vm.$el.click()效果其实和vm.$emit('click')是一样的。前面的是原生DOM的click用法，后面你的是Vue的click用法。
   * 下面的代码就可以看到执行click事件后会打出一个1。
   ```
   {    //mock
       const div=document.createElement('div')
       document.body.appendChild(div)
       const Constructor=Vue.extend(Button)
       const vm=new Constructor({
           propsData:{
               icon:'setting',
               iconPosition:'right'
           }
       })
       vm.$mount(div)
       vm.$on('click',function(){
           console.log(1)
       })
       // vm.$emit('click')//下面的代码其实就是这句的意思，效果是一样的。
       vm.$el.click()
      
       vm.$el.remove()//测试完后为了不增加页面多余的button和内存最好移除。
       vm.$destroy()//测试完后为了不增加多余内存最好移除。
   }
   ```
   * 加入断言的语法来判断，这里需要引入一个chai.js库的一个插件（plugins）-[chai.spies](https://www.chaijs.com/plugins/chai-spies/),是一个mock的方式。**因为这样才能判断是某个函数执行了**，安装
   ```
   $ npm i -D chai-spies
   ```
   * 这里用到to.have.been.called这个api，[chai.spies](https://www.chaijs.com/plugins/chai-spies/)官网上也有相应的的说明。有人也写过类似的[博客单元测试](https://blog.csdn.net/weixin_33826609/article/details/88006141)
   * 这是一个函数的mock
   ```
   // 用mock触发click的测试，点击事件测试不需要挂到到某个div上面。
   import spies from 'chai-spies'
   chai.use(spies)
   {
       const Constructor=Vue.extend(Button)
       const vm=new Constructor({
           propsData:{
               icon:'setting',
               iconPosition:'right'
           }
       })
       //用spy来监听function(){}函数
       let spy=chai.spy(function(){})
       vm.$mount()
       vm.$on('click',spy)//click来触发这个spy函数，前面spy已经监听了function(){}
       vm.$el.click()//在根元素上触发这个click事件，也就是执行了这个click事件，也就是调用了click
       expect(spy).to.have.been.called()//我们期待spy这个间谍已经被调用了
       
       vm.$el.remove()//测试完后为了不增加页面多余的button和内存最好移除。
       vm.$destroy()//测试完后为了不增加多余内存最好移除。
   }
   ```
   * 这样就能确保你在点击click这个button的时候会触发
   * 给app.js增加一个try...catch...finally代码如下：用到的API有 [console.error](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/error),[try...catch](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch)
   ```
   try{
      ...
   }catch(error){
       // console.dir(error)
       window.errors=[error]//如果前面的try报错，那么报错信息就是这个参数error，这里只是给window增加一个errors的属性，它的值赋值为数组[error]，这个error是一个对象，它有message和stack等属性。
       // window.errors=[error]
   }finally{
       window.errors&&window.errors.forEach((error)=>{//如果window.errors存在的前提，就把window.errors通过遍历并按照报错的方式打印出error的message属性
           console.error(error.message)
       })
   }
   ```
***
* 目前我们的单元测试需要刷新页面，还需要开启parcel，还需要打开浏览器的控制台，显得比较多操作，能否用一行命令行搞定？
***
## 自动化测试，持续集成
1. 自动化测试
2. 持续集成
3. 重写所有代码
4. 发布npm包
5. 完善README
### 使用Karma做自动化测试
* 前面的测试都需要**手动打开浏览器并点击刷新才可以执行测试**，能否这些步骤都自动呢？可以实现。用到下面三个工具：
1. Karma（[ˈkɑrmə] 卡玛）是一个测试运行器，它可以呼起浏览器，加载测试脚本，然后运行测试用例
2. Mocha（[ˈmoʊkə] 摩卡）是一个单元测试框架/库，它可以用来写测试用例
3. Sinon（西农）是一个 spy / stub / mock 库，用以辅助测试（使用后才能理解）
* (1)首先安装下面一堆的工具（**主要是Karma**）
```
npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies
```
* 安装完之后会显示安装的信息及版本
```
+ karma-mocha@1.3.0
+ karma-sinon-chai@2.0.2
+ sinon-chai@3.3.0
+ karma-chai-spies@0.1.4
+ mocha@6.2.1
+ karma-chai@0.1.0
+ karma@4.3.0
+ sinon@7.5.0
+ karma-chrome-launcher@3.1.0
```
* (2)创建karma配置，新建一个karma.conf.js,文件内容如下
```
 // 新建 karma.conf.js，内容如下
 module.exports = function (config) {
     config.set({

         // base path that will be used to resolve all patterns (eg. files, exclude)
         basePath: '',
            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            frameworks: ['mocha', 'sinon-chai'],
            client: {
                chai: {
                    includeStack: true
                }
            },


            // list of files / patterns to load in the browser
            files: [
                'dist/**/*.test.js',
                'dist/**/*.test.css'
            ],


            // list of files / patterns to exclude
            exclude: [],


            // preprocess matching files before serving them to the browser
            // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
            preprocessors: {},


            // test results reporter to use
            // possible values: 'dots', 'progress'
            // available reporters: https://npmjs.org/browse/keyword/karma-reporter
            reporters: ['progress'],


            // web server port
            port: 9876,


            // enable / disable colors in the output (reporters and logs)
            colors: true,


            // level of logging
            // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
            logLevel: config.LOG_INFO,


            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: true,


            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            browsers: ['ChromeHeadless'],


            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: false,

            // Concurrency level
            // how many browser should be started simultaneous
            concurrency: Infinity
        })
    }
```
* (3)创建 test/button.test.js 文件，具体内容如下：
```
 const expect = chai.expect;
 import Vue from 'vue'
 import Button from '../src/button'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Button', () => {
     it('存在.', () => {
         expect(Button).to.be.ok
     })
     it('可以设置icon.', () => {
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'settings'
         }
         }).$mount()
         const useElement = vm.$el.querySelector('use')
         expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
         vm.$destroy()
     })
     it('可以设置loading.', () => {
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
             loading: true
         }
         }).$mount()
         const useElements = vm.$el.querySelectorAll('use')
         expect(useElements.length).to.equal(1)
         expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
         vm.$destroy()
     })
     it('icon 默认的 order 是 1', () => {
         const div = document.createElement('div')
         document.body.appendChild(div)
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
         }
         }).$mount(div)
         const icon = vm.$el.querySelector('svg')
         expect(getComputedStyle(icon).order).to.eq('1')
         vm.$el.remove()
         vm.$destroy()
     })
     it('设置 iconPosition 可以改变 order', () => {
         const div = document.createElement('div')
         document.body.appendChild(div)
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
             iconPosition: 'right'
         }
         }).$mount(div)
         const icon = vm.$el.querySelector('svg')
         expect(getComputedStyle(icon).order).to.eq('2')
         vm.$el.remove()
         vm.$destroy()
     })
     it('点击 button 触发 click 事件', () => {
         const Constructor = Vue.extend(Button)
         const vm = new Constructor({
         propsData: {
             icon: 'settings',
         }
         }).$mount()

         const callback = sinon.fake();
         vm.$on('click', callback)
         vm.$el.click()
         expect(callback).to.have.been.called

     })
 })
```
* (4)创建测试脚本,在 package.json 里面找到 scripts 并改写 scripts,内容如下：
```
 "scripts": {
     "dev-test": "parcel watch test/* --no-cache & karma start",
     "test": "parcel build test/* --no-minify && karma start --single-run"
 },
```
* 这里的[parcel build](https://zh.parceljs.org/cli.html#%E6%9E%84%E5%BB%BA%EF%BC%88build%EF%BC%89),build 命令会一次性构建资源,也就是打包构建代码。
* (5)运行测试脚本,
   1. 要么使用 `npm run test` 一次性运行。
      * 当运行这行命令的时候它会去把js打包，然后打开一个Chrome浏览器（当在karma.conf.js设置browsers: ['Chrome']，如果设置为browsers: ['ChromeHeadless']）,就不会打开Chrome，因为是无头浏览器（浏览器的界面就是头），也就是浏览器被隐藏了。），然后再Chrome浏览器中运行网页，运行完后就自动关闭浏览器，然后把浏览器的输出显示在git-bash里面。
      * 直接运行这个命令是会报错的。之前是从app.js引入的（app里面全局注册了icon），现在是test目录下面button.test.js里面引入（button.test.js没有全局注册icon）。有用到'/src/button'这个目录下面的icon标签。还需要在'/src/button'里面引入'/src/icon'和Vue（这里用全局注册虽然不建议用，但是可以解决这个报错），也就是在button里面全局注册了icon。
      ```
          import Vue from 'vue'
          import Icon from './icon'
          Vue.component('g-icon',Icon)
      ```
      * 如果还有component of undefined的报错，**这可能是打包的时候会有一些残渣（缓存.cache和原来的dist目录文件）就还需要把dist目录和.cache目录删除掉**。可以通过命令删除掉
      ```
      rm -rf .cache dist
      ```
      * 我的代码跟老师代码有一个地方有一点区别，**就是loadings: true，老师的代码是loading: true。我是为了区分loading和loadings**。
      ```
          it('可以设置loading.', () => {
              const Constructor = Vue.extend(Button)
              const vm = new Constructor({
                  propsData: {
                      icon: 'settings',
                      loadings: true
                  }
              }).$mount()
              const useElements = vm.$el.querySelectorAll('use')
              expect(useElements.length).to.equal(1)
              expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
              vm.$destroy()
          })
      ```
      * 再次运行npm run test就可以看到6个成功的success
      * 前面的全局注册不太建议，这里建议用局部注册。
      ```
          import Icon from './icon'
          export default {
              components:{
                'g-button':Icon  
              }
          }
      ```
      * 再次删除掉dist目录和.cache目录,运行npm run test继续显示6个成功。
      * **不需要每次都删除掉目录dist和.cache,只需要在脚本哪里增加--no-cache,也就是不要缓存，每次都是重新打包**。
      ```
       "scripts": {
           "dev-test": "parcel watch test/* --no-cache & karma start",
           "test": "parcel build test/* --no-cache --no-minify && karma start --single-run"
       },
      ```
      * 当我们运行`npm run test`命令的时候，其实就是运行package.json里面的scripts里面的test对应的命令。也就是下面这个
      ```
             "scripts": {
                 "test": "parcel build test/* --no-cache --no-minify && karma start --single-run"
             },
      ```
      * `parcel build test/*`是重构打包test里面的所有一级文件，`--no-cache`是不要缓存，`--no-minify`是不要压缩（这是因为如果压缩了会把slot删除掉）
         * 我们单独运行`parcel build test/* --no-cache --no-minify`也是可以实现的，因为我们不是全局安装，所以前面要加上npx。
         ```
         npx parcel build test/* --no-cache --no-minify
         ```
         * 打包test目录下面的文件(也就是button.test.js)之后会生成三个下面的文件（dist\button.test.js.map，dist\button.test.js ，dist\button.test.css）
         ```
         $ npx parcel build test/* --no-cache --no-minify
         √  Built in 1.63s.
         
         dist\button.test.js.map    103.45 KB     10ms
         dist\button.test.js        100.21 KB    1.44s
         dist\button.test.css           978 B    944ms
         ```
         * 之前用的`npx parcel index.html --no-cache`代码会生成一个dist文件，里面会存在一些内容，但是并不一定会支持所有浏览器，这时候你如果运行`npx parcel build index.html --no-minify`,也就是bulid一下，那么会新生成四个文件,这些文件是经过压缩转义而形成的，是发布上线代码前最好需要处理一下的命令，详细说明可以参考[npm常用技巧及parcel打包工具使用](https://zhuanlan.zhihu.com/p/44774513)
         ```
         dist\app.d6aa8548.js.map    646.88 KB     61ms
         dist\app.d6aa8548.js        463.42 KB    2.60s
         dist\index.html               1.66 KB    480ms
         dist\app.a4233430.css         1.49 KB     27ms
         ```
         * **另外这里有一个小知识，就是想要把git bash上面的光标移动到最左边或者最右边在window系统中用Home和End键，如果是Mac系统就按cmd+左键和右键，还可以按ctrl+A和E键**。
         * **为什么需要用parcel build来重构打包代码，因为我们用了import的一些浏览器不认识的语法**，比如`import Vue from 'vue'`对于浏览器来说是不认识的，需要转换为浏览器认识（至少目前不认识，未来认识与否需要未来再说）的代码。这就是重构打包的目的。这里打包后的代码会有三个作用：
            1. 把Vue.js的源代码拷贝进来。
            2. 把Vue做成一个变量提供给其他代码使用。
         * test/button.test.js一共有79行代码，转换为dist/button.test.js之后就增加了特别多行的代码啦。
      * 接下是`karma start --single-run`,它的意思是启动karma（karma start），然后只运行一次（--single-run）。这个karma怎么启动？就需要查看一个文件——karma.conf.js（它是karma配置js文件）
         * 我们进来可以看到下面代码,他是测试代码，**也就是经过parcel built打包之后的代码**
         ```
                 // list of files / patterns to load in the browser
                 files: [
                     'dist/**/*.test.js',
                     'dist/**/*.test.css'
                 ],
         ```
         * 这里用到`dist/**/*`，也就是加载dist目录下面的所有级的文件，如果只写一个*,比如`dist/*`,那么只会加载dist目录下面的一级文件而不是所有级（包括三级，四级等等）的文件。
         * 这里还会用到`'dist/**/*.test.css'`，是因为测试的时候还用到了order，这个属性是CSS属性。这个dist目录下面的test.css文件是从parcel built重构打包src目录里面的代码而来的。
         * 代码中是由test目录下面的button.test.js里面有引入button.vue`import Button from '../src/button'`，而button.vue里面有CSS。
         * 然后还有一行关于要打开哪个浏览器，browsers: ['ChromeHeadless'],代表无头（也就是隐藏Chrome浏览器窗口）的Chrome浏览器，browsers: ['Chrome']就代表Chrome浏览器，它不会隐藏Chrome浏览器窗口。
         ```
                 // start these browsers
                 // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
                 browsers: ['ChromeHeadless'],
         ```
         * 如果你想在Edge和IE浏览器上测试需要安装插件，比如`npm i -D karma-ie-launcher`，或者`npm i -D karma-edge-launcher`，在IE上运行还需要在package.json里面增加下面代码，具体说明见[链接](https://stackoverflow.com/questions/22076660/cannot-load-ie-it-is-not-registered)
         ```
           "plugins": {
             "karma-ie-launcher": "^1.0.0"//后面的版本号根据实际情况写。
             }
         ```
         * IE浏览器很多API不是很支持，所以在我的电脑和IE11版本上测试出现报错
         ```
         IE 11.0.0 (Windows 10.0.0) ERROR
           对象不支持“assign”属性或方法
         ```
   2. 要么使用 `npm run dev-test` 进行 watch 运行(这个后面再说)
#### button.test.js这个测试用例的代码的分析
* 这是一个**自动**单元测试代码，它跟前面的代码很相似，它有两个主要特点：
1. button.test.js里面都用到了大括号把每个作用域分开，叫做作用域隔离，这样可使得变量命名一样的情况也不会冲突。
2. 并且里面还存在断言代码。
* 该代码用到describe...it...,it后面的第一个参数是名字，后面是这个名字的测试用例函数代码（用来实现你的描述describe），**这里的作用域隔离是通过函数隔离**。前面可以通过注释或者字符串（比如'可以设置icon'）写上该段代码的测试作用，比如下面的：
```
        '可以设置icon'
    it('存在.', () => {//名字是存在，后面的是函数代码
        expect(Button).to.be.ok//Button是存在的，不是undefined，null,0,'',NaN,不是一个falsy值
    })
```
* 这种describe...it...也就是BDD（行为驱动开发），很符合自然语言，比如前面是描述什么它会怎么样，它属于[mocha库](https://mochajs.org/)，一般只需要建立一个test/test.js这种目录的文件即可。代码比如
```
describe '小狗'
it has a head//小狗有一个投
it has two eyes//小狗有两只眼睛
it can run//小狗可以跑
it can die//小狗会死
//这种就是行为描述
```
* 后面几个基本都是用到expect().to.equal(),就是期待什么等于什么。
* 最后一个点击事件，前面用的是spy，这里用的是fake，其实是类似的。**因为我们没有办法从技术层面来说某个函数被调用**，引入多了一个**sinon库,用sinon.fake()就是可以知道某个函数被调用了**。
* 如果没有用spy或者sinon来监听调用的函数，只是用一个普通函数，比如这样写
```
    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount()

        // const callback = sinon.fake();
        const callback=function(){}
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called

    })
```
* 就会报出下面的错误
```
 TypeError: [Function: callback] is not a spy or a call to a spy!
 //这个函数不是一个间谍函数，或者被调用的间谍函数
```
* 最后一个点击事件间谍函数如果没有触发点击事件，报错就会显示
```
AssertionError: expected fake to have been called at least once, but it was never called
//断言错误，你期待的fake这个回调函数至少被调用依次，但是它从来没有被调用过
```
#### 测试用例的更多断言代码的介绍
* 一般用的最多的就是expect(xxx)to.equal(yyy),意思就是期待xxx等于yyy。
```
expect(xxx)to.equal(yyy)
```
* equal可以简写为eq，比如
```
expect(xxx)to.eq(yyy)
```
* 比如期待xxx是数组，可以写成
```
expect(xxx instanceof Array)to.eq(true)
```
* 更多语句可以从[chai.js库](https://www.chaijs.com/)中查询.里面还有更多的API，可以查看[API](https://www.chaijs.com/api/bdd/)列举几个，比如
1. [property](https://www.chaijs.com/api/bdd/#method_property)——属性
2. [lengthOf](https://www.chaijs.com/api/bdd/#method_lengthof)——长度
3. with——而且。他是连词（chains）
4. [not](https://www.chaijs.com/api/bdd/#method_not)——否定的断言
5. [deep](https://www.chaijs.com/api/bdd/#method_deep)——深相等，这个跟[深拷贝](https://zhuanlan.zhihu.com/p/59835538)类似，**一般深拷贝就是赋值操作（内容相等），浅拷贝是对象的内容相等，但是地址不同**。
   * 比如
   ```
   expect([1,2]).to.deep.equal([1,2])//这个不会报错，这个只是内容相同即可。
   expect([1,2]).to.equal([1,2])//这个会报错,因为虽然内容相同，但是地址不相同
   ```
6. [own](https://www.chaijs.com/api/bdd/#method_own)——不是原型链上继承的内容。而是自己拥有的。
7. [NaN](https://www.chaijs.com/api/bdd/#method_nan)——因为在JS代码里面NaN不等于NaN，所以通过这个可以测试得到有一个NaN
   * 比如
   ```
           expect(NaN).to.be.equal(NaN)//这个会报错
           expect(NaN).to.be.NaN//这个没问题
   ```
8. [exist](https://www.chaijs.com/api/bdd/#method_exist)——断言什么是存在的。它跟[ok](https://www.chaijs.com/api/bdd/#method_ok)很像
* 一些连词（Chains）是没有意义的，比如：我们用到的to,be,is等等，它们删除掉也不影响测试。它只是为了让你的自然语法变得好读好看而已。

#### 小结
* 小结如下：
1. 首先package.jason需要写上test命令。
2. karma.conf.js需要载入dist目录下的JS和CSS，然后指定浏览器
3. 最后你的测试用例button.test.js需要用it隔开，每个测试用例的内容大概就是写一个断言，能否预期你的代码走向，你的代码行为。
4. 测试用例的更多断言代码的介绍
### 如何每次修改代码后不用手动运行npm run test，用到TravisCI
* 也就是在`npm run dev-test`,他是开发的时候测试，也可以叫做watch-test,在package.json里面对应的是**[parcel watch](https://zh.parceljs.org/cli.html#%E7%9B%91%E5%90%AC%EF%BC%88watch%EF%BC%89)**,[当文件改变它仍然会自动重新构建并支持热替换，但是不会启动 web 服务](https://parceljs.org/getting_started.html)。
* 后面是karma start，没有加上--single-run，说明不是运行一次，而是一直运行着。
```
  "scripts": {
    "dev-test": "parcel watch test/* --no-cache & karma start",
  },
```
   * **Windows 用户运行 npm run dev-test 时会出现 BUG**，貌似是因为 Windows 不支持 && 符号，更多说明见[使用 Karma + Mocha做单元测试](https://www.cnblogs.com/gitnull/p/10129149.html)解决办法是：
      * 将 dev-test 对应的命令 `parcel watch test/* --no-cache & karma start` 分别运行，运行方式如下
      1. 新开一个 Git Bash 窗口运行 `npx parcel watch test/* --no-cache`
      2. 再开一个 Git Bash 窗口运行 `npx karma start`
* 现在只需要**运行一次命令**，如果修改了测试用例或者src目录下面的代码，会自动编译并且测试用例，**不用再次运行命令了**。
* 我们还可以把运行的这一次命令可省略掉，就是什么命令都不运行就自动测试。要用到[TravisCI]()。[阮一峰关于TravisCI的教程](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)，还有一个叫做[CircleCI](https://circleci.com/)。
   * 一般来说github喜欢用TravisCI,因为它没有数量限制。
   * CircleCI功能更强大，但是它有数量限制。一次只能运行一个项目，如果有多个就需要交钱。
   * 所以我们就用TravisCI。
* 首先新建一个文件名字叫做.travis.yml。内容如下：
```
language: node_js//这里意思是说用的node.js语言，因为我们测试的时候跑的是npm,npm是node.js给的
node_js:
  - "8"//这里的是node.js的什么版本，这里是版本8,也可以支持多个版本
  - "9"
  - "10"
addons://插件，因为我们要用到chorme浏览器，下面的stable是代表稳定版本，一般稳定版是用的最多的人的版本
  chrome: stable
sudo: required//下面的代码加上就不会报错，具体做什么的暂时还不清楚，后续可以Google去搜索（可能因为parcel在压缩的时候把slot这个标签删除掉引起的）
before_script:
  - "sudo chown root /opt/google/chrome/chrome-sandbox"
  - "sudo chmod 4755 /opt/google/chrome/chrome-sandbox"
```
* 然后在TravisCI上注册一个账号，**可以用git hub账号登陆**。然后找到你git hub远程仓库里面需要自动监听的代码仓库名。然后把×点下换成√。
* 然后把本地的travis.yml文件上传到远程仓库，就可以在TravisCI首页看到自动运行监听和测试实例了。
* 如果你的karma.conf.js里面的浏览器配置没有写无头（Headless），就会报错
```
        browsers: ['ChromeHeadless'],//这个可以正常运行
        // browsers:['Chrome'],//这个会报错
```
* 如果你第一次报错，比如设置的是browsers:['Chrome'],那么修改为browsers: ['ChromeHeadless']后上传到git hub，TravisCI会**自动再次测试**，**你可以直接看运行结果，你也可以到你的邮箱里面查看运行的结果是否成功**。
* 以上就是持续集成的一部分——持续测试，除此之外还有持续交付和持续部署等。就是所有的东西可以走可持续的操作可持续的各种操作。中间不要断开。
## 让自己的这些代码发布给所有其他用户使用
* 首先要确保自己的代码测试通过，我们可以查看Vue.js代码的测试记过，进入[Vue.js的git hub](https://github.com/vuejs/vue),我们点击passing,就可以进入到Vue.js的[测试界面](https://circleci.com/gh/vuejs/vue/tree/dev),可以看到他是用circleCI来测试做的。并且在Vue.js的test目录下面可以看到测试代码。通过该它的[package.json](https://github.com/vuejs/vue/blob/dev/package.json)看到它用的是jasmine这个插件做测试。你还可以查看react和Angular的测试信息。
* 上传代码到[npmjs.org](https://www.npmjs.com/)
   1. 在上传之前你需要把你的package.json的版本号修改成0.0.1，因为默认的一般是1.0.0，如果是1.0.0说明整个框架写完了，但是目前还没有写完。
   ```
     "version": "0.0.1",
   ```
   2. 创建 index.js，在 index.js 里将你想要导出的内容全部导出，作为一个入口，需要引入三个组件Button,ButtonGroup,Icon，然后用export导出三个变量供其他有import的使用。**import和export配套使用**
   ```
   import Button from './src/button.vue'
   import ButtonGroup from './src/button-grounp'
   import Icon from './src/icon'
   
   export {Button,ButtonGroup,Icon}
   ```
   3. 然后注意一下你的package.json里面有这样的一个入口代码描述，一般默认有加
   ```
     "main": "index.js",
   ```
   4. 去 [https://www.npmjs.com/](https://www.npmjs.com/) 注册一个账户
   5. 确认一下邮箱（**必须**）
   6. 在本项目根目录运行 npm adduser（在git bash里面输入）,这里注意的一下如果错误提示里面含有 https://registry.npm.taobao.org 则说明你的 npm 源目前为淘宝源，需要更换为 npm 官方源，taobao源对于大陆用户下载速度比较快。输入
      ```
         npm config list
      ```
      * 就可以查看到; userconfig C:\Users\bomber\.npmrc这个目录下面把该注释掉就好了。
      ```
      //registry=http://registry.npm.taobao.org/
      ```
      * 出现Logged in as bomber66（这里是你的名字） on，就代表成功了
   7. 如果错误提示里面含有 https://registry.npm.taobao.org 则说明你的 npm 源目前为淘宝源，需要更换为 npm 官方源
      运行 npm publish（由于我的这框架还有一些问题，所以把package.json里面的名字name修改为gulu-bomber-2019108,这样就没有人会去搜这个名字了，怕出丑）
      ```
        "name": "gulu-bomber-2019108",
      ```
   8. 输入你的npm的登录名，密码和邮箱即可在本地登录了(这里如果你的name名字很奇怪，会被当做垃圾报错).报错如下
   ```
   npm ERR! Package name triggered spam detection; if you believe this is in error, please contact support@npmjs.com : gulu-bomber-2019108
   ```
   9. 我改成
   ```
       "name": "gulu-bomber-1-1",
   ```
   10. 终于没问题了，出现下面信息就可以使用了,然后你的邮箱中也会受到你发布成功的邮件。
   ```
   + gulu-bomber-1-1@0.0.1
   ```
* 接下来是别人来下载。
   1. 我自己测试下载，建立一个文件夹，命名最好不要是中文，然后先初始化,运行，[如果不初始化会报错](https://blog.csdn.net/MyDilrabaSister/article/details/90694539)
   ```
   npm init -y
   ```
   2. 然后运行下面代码就可以下载保存到本地该文件夹的node_modules目录下面了。
   ```
   npm i gulu-bomber-1-1
   yarn add gulu-bomber-1-1//如果是yarn就是这个命令
   ```
* 其实不需要上传所有代码，有些没有用的代码可以废弃掉，这个后面在说。
* 完成之后可以把taobao源设置回来，不然你下载安装其他东西的时候速度会比较慢（除非你用的是[cnpm](https://www.jianshu.com/p/115594f64b41)）。
### 模拟别人使用自己的包
* 预测其他使用你的包的人会怎么使用(理论上下面三种都要测试，但是我这里只测试vue-cli)
   1. 使用 vue-cli(这里以这个为基础来说明)
      * 一般用户会去的搜索[vue-cli官网](https://cli.vuejs.org/guide/installation.html)如何安装
      ```
      npm install @vue/cli
      ```
      * 然后根据[vue-create](https://cli.vuejs.org/guide/creating-a-project.html#vue-create)创建项目
      * 记住如果前面使用的是npm，那么vue-cli也要安装配置的时候选择npm才可以，如果选择yarn会报错。
      * 然后根据提示：进入到 hello,运行server
      ```
       $ cd hello-world
       $ npm run serve
      ```
      * 然后下载我们刚刚发布会的包
      ```
      npm i gulu-bomber-1-1
      ```
      * 现在你去把刚刚发布的包的变量引入到main.js里面进来还是**会报错的,因为node暂时不支持import语法**，所以我们应该用babel把import变成可执行的js语法，然后再次暴露给用户
      ```
      import {Button,ButtonGroup,Icon} from 'gulu-bomber-1-1'
      
      window.console.log(Button)
      ```
      * 只需要用parcel build一下就可以把import代码编程node可以认识的代码了（**这里一定要加--no-minify，不然可能会忽略掉slot标签，反正就是有bug，这个bug就是你的button标签里面的字是不显示的**）
      ```
      npx parcel build index.js --no-minify
      ```
      * 转换后的代码是在dist目录，所以package.json里面的入口main也是需要修改增加dist这个目录的
      ```
        "main": "dist/index.js",
      ```
      * 然后需要**再次发布，发布的时候需要删除或者注释掉taobao源**，
      ```
      npm publish
      ```
      * 如果是你不修改版本也是会报错的，报错如下
      ```
      npm ERR! You cannot publish over the previously published versions: 0.0.1. : gulu-bomber-1-1
      ```
      * 所以重新发布的时候要修改版本
      ```
        "version": "0.0.2",
      ```
      * 再次`npm npm publish`就会显示你的版本
      ```
      + gulu-bomber-1-1@0.0.2
      ```
      * 然后用户就会去更新你的0.0.2版本，我是window用户，直接运行下面的两个命令都不能更新到最新版本
      ```
      npm update gulu-bomber-1-1
      npm i gulu-bomber-1-1
      ```
      * 所以我只有删除了原来的的0.0.1版本
      ```
      npm unupdate gulu-bomber-1-1
      ```
      * 然后再次运行安装，就自动找到0.0.2最新版本了
      ```
      npm i gulu-bomber-1-1
      ```
      * 如果你知道版本号，可以不用删除，而是直接运行下面的
      ```
      npm i gulu-bomber-1-1@0.0.2
      ```
      * 因为我自己把import的目录写错了，所以又升版到0.0.3了
      * 我们在下载好的app.vue文件里面增加下面的代码就可以看到button了
      ```
      <template>
        <div id="app">
          <g-button>欢迎</g-button>
        </div>
      </template>
      import {Button,ButtonGroup,Icon} from 'gulu-bomber-1-1'
      export default {
        name: 'app',
        components: {
          HelloWorld,
          'g-button':Button
        }
      }
      ```
* 最后需要加上CSS样式。这里只需要提醒用户手动引入这个CSS即可，他是在dist目录下面的后缀为CSS的文件，所以就在App.vue文件里面增加CSS的路径
```
import 'gulu-bomber-1-1/dist/index.css'
```
* 但是加上之后发现边框没了，那是因为我们用的CSS是变量。所以要给变量赋值。所以需要提醒用户手动加上默认的变量信息，可以放到App.vue的style标签里面：
```
        :root{
            --button-height:32px;
            --font-size:14px;
            --button-bg:white;
            --button-active-bg:#eee;
            --border-radius:4px;
            --color:#333;
            --border-color:#999;
            /*--border-color-hover:#666;*/
            --border-color-hover:#666;
        }
        body{
            font-size:var(--font-size);
        }
```      
   2. 使用 webpack(暂时不分析)
   3. 使用 parcel(暂时不分析)
* 分别使用这些方式来使用自己的包（我们只以 vue-cli 为例）
   *. 使用过程中我们发现报错说 import 语法有问题，那时因为 node 目前确实不支持 import，我们需要用 babel 转译 import
      1. 你可以要求使用者自己用 babel 来转译（这种方式不推荐，是写库写框架或者轮子给别人用的大忌）
      2. 你也可以转义好了再给他用
         * `npx parcel build index.js --no-minify` （本来不应该加 --no-minify 的，奈何不加会有 bug，HTML 压缩把 slot 标签全删了）
         * 将 package.json 的 main 改为 dist/index.js
#### 前面都是每次改一行代码都需要npm publish打包上传到npm，然后别人在下载，下面就可以省去这个步骤，不上传npm就可以测试   
* 如何不用上传到npm就可以测试我们的代码是否存在bug。(也就是省略开发者npm publish，然后用户npm install这个过程)
* 这个需要用到npm link，你把需要测试的项目目录下面运行npm link之后，就可以在本地本机（**注意一定要本机**）的另外一个文件夹下面运行
```
npm init -f
```
* 之后再运行
```
npm link gulu-bomber-1-1
```
* 就可以在本地测试了
* 使用 npm link 或者 yarn link 来加速调试
      1. 你每次修改源码之后，有两条路让别人得到最新效果
         1. 更新 package.json 里的 version，然后 npm publish。别人通过 npm update xxx 来更新。
         2. 如果你只是为了本地调试，可以在项目目录使用 npm link，然后在使用之处运行 npm link xxx，就是最新了
#### 需要注意npm link在window上运行可能会出错，在ios系统上面可以执行
* 你在window上运行
```
npm link gulu-bomber-1-1
```
* 创建的是一个**快捷键（如果用npm publish和npm install就不是快捷键）**，并且报错
```
Module build failed (from ./node_modules/eslint-loader/index.js):
```
* 我们的开启的目录已经修改到了`dist/index.js`这里，但是还是运行在`index.js`目录，不知道为什么。如果是window用户建议还是用npm publish和npm install方法/
##### 其他参考学习链接
* [npm链接在Windows上不起作用？](https://stackoverflow.com/questions/34815260/npm-link-not-working-on-windows)
* [npm link中文文档](https://www.cnblogs.com/pqjwyn/p/9626335.html)
* [记一次错：Vue 构建项目后使用 npm link 失败](https://www.jianshu.com/p/ca252cd667df)
* [npm link的使用](https://www.jianshu.com/p/aaa7db89a5b2?tdsourcetag=s_pcqq_aiomsg)
## 总结
1. 单文件组件（Vue）
2. Parcel（打包）
3. 单元测试（{...}{...}）
4. 自动测试:
   1. Karma——打开浏览器自动测试
   2. Mocha——BDD，describe...it...
   3. Chai_expect(xxx).to.eq(yyy)
5. 持续集成:
   1. TravisCi
   2. Circle.CI
6. 如何写package.json，了解如何写之后才能发布npm publish我们的npm包
   1. 比如main:dist/index.js或者main:dist/index.js
7. 用npm link或者yarn link加快造轮子的过程（这个在window系统上使用可能会有BUG）

## 最后解决一个BUG（因为增加了mocha库，但是并未完全下载它的全部依赖de-indent，再次运行parcel会报错）
* 运行下面代码报错
```
npx parcel index.html --no-cache
```
* 报错信息如下:
```
×  Cannot find module 'de-indent'
```
* 所以需要安装de-indent依赖，可以直接安装,这种方式你的package.json会告诉你安装了什么。但是node_modules会增加100多MB的文件
```
npm i de-indent
```
* 也可以运行`npm i`，不过这种方式你的package.json不会告诉你安装了啥。同样node_modules会增加100多MB的文件。
* **因为我的git hub仓库是忽略了node_modules的**，所以并没有记录这里面的变化，所以当时查询以往记录的时候没有查询到
* 具体可以见[de-indent在git-hub上面的说明](https://github.com/yyx990803/de-indent)和[de-indent在npm的说明](https://www.npmjs.com/package/de-indent)
* 可以用的git 命令
```
git reset --hard 后面加commit的代码
//直接还原到某个commit的代码
```
* 某个commit的代码可以通过下面的命令查看
```
git reflog
```
## 又出现了一个BUG，可能是因为我重新安装了Chrome浏览器导致的(解决了)
* 可能是因为我重新安装了Chrome浏览器导致的，我想测试代码的时候运行npm run test后会报错如下：
```
$ npm run test

> gulu-demo@1.0.0 test C:\Users\bomber\Desktop\gulu-demo
> parcel build test/* --no-cache --no-minify && karma start --single-run

√  Built in 1.87s.

dist\button.test.js.map    103.73 KB      6ms
dist\button.test.js        100.45 KB    1.67s
dist\button.test.css           978 B    1.14s
'karma' ▒▒▒▒▒ڲ▒▒▒▒ⲿ▒▒▒Ҳ▒▒▒ǿ▒▒▒▒еĳ▒▒▒
▒▒▒▒▒▒▒▒▒ļ▒▒▒
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! gulu-demo@1.0.0 test: `parcel build test/* --no-cache --no-minify && karma start--single-run`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the gulu-demo@1.0.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\bomber\AppData\Roaming\npm-cache\_logs\2019-10-14T17_00_44_715Z-debug.log
```
* 命令npm run test是两句代码的缩写，也就是`parcel build test/* --no-cache --no-minify && karma start --single-run`，所以分开来写发现运行`parcel build test/* --no-cache --no-minify `是没有问题的，但是运行`npx karma start --single-run`发现报错如下：
```
15 10 2019 01:33:09.987:ERROR [karma-server]: Server start failed on port 9876: Error: Noprovider for "framework:mocha"! (Resolving: framework:mocha)
```
* 最后找了半天不知道为什么，我自己把测试用的依赖全部卸载，也就是
```
npm uninstall -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies
```
* 然后全部重新安装一遍就解决这个BUG了
```
npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies
```
## 这里的icon的svg信息暂时还引入不了，因为我们用的是script链接，请在下面链接说明去解决
* [SVG的icon引入方式修改](https://github.com/bomber063/DIY-UI-frame-by-Vue-for-input)
## 其他参考学习链接
* 除了单元测试，还有[E2E测试](https://blog.csdn.net/qq_39300332/article/details/81197503),不过这是在大型需求中**关键步骤才用到，比如下单**等。

* [vue之父子组件间通信实例讲解(props、ref、emit)](https://www.cnblogs.com/myfate/p/10965944.html)
* [data](https://cn.vuejs.org/v2/api/#data),实例创建之后，可以通过 vm.$data 访问原始数据对象。Vue 实例也代理了 data 对象上所有的属性，因此访问 vm.a 等价于访问 vm.$data.a。
* [el](https://cn.vuejs.org/v2/api/#el)
* [Vue子组件与父组件(看了就会)](https://blog.csdn.net/HaiJun_Aion/article/details/84801370)
* [Vue中到底是什么是父组件，什么是子组件？](http://www.imooc.com/wenda/detail/480094)
* 关于[try、catch、finally用法总结（二）](https://www.cnblogs.com/oldthree3/p/9270541.html)
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