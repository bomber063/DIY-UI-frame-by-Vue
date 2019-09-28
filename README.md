# DIY-UI-frame-by-Vue
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
#### 用webstorm操作后续代码
* WebStorm的安装，见链接[JetBrains WebStorm 2019.1 x64 破解](http://www.bcniubi.cn/221)和链接[Webstorm 2019.1 破解](https://blog.csdn.net/fu983531588/article/details/89312799)
* WebStorm的汉化见链接[webStorm安装及汉化教程](https://blog.csdn.net/qq_33915006/article/details/79696319)
* WebStorm添加到鼠标右键的方法链接[WebStorm添加右键菜单](https://www.jianshu.com/p/de8f31e11dea)
* WebStorm修改字体方法链接[WebStorm设置编辑器中的字体大小及样式](https://www.cnblogs.com/dzlishen/p/4253280.html)
* 添加一个设置，调试器（Debugger）里面把允许未签名（Allow unsigned requests）的选项打钩，具体为什么暂时不清楚，我自己搜索了一下，可能是这个而连接[webstorm打开的页面如何通过手机访问？](https://blog.csdn.net/qq_28296925/article/details/94602731)
* 添加一个设置，在系统设置（system settings）取消勾选关闭 WebStorm 的 Safe Write 功能，也就是Use'safe write'(save changes to a temporary file first)这个选项去掉打钩。可能的原因是[webstorm不能自动重新编译问题](https://blog.csdn.net/qq_34149935/article/details/79224263)
* 视频中的额WebStorm只支持ES5的写法，可能是老版本的，有些ES6的写法会出现警告或者下划线，不过可以点击红灯泡来解决。不过现在都支持了。
* 两个最常用的**快捷键**:
1. shift shift，就是按两下shift，它会给你一个搜索框，可以搜索其他任意的快捷键,比如可以搜VCS，它的全称是version control system,版本控制系统，就是用于git操作的。搜索vcs后可以看到一个vcs Operations Popup，它可以用于与git操作，所以webstorm可以代替git bash这个软件。当然有时候会git操作失败，失败就继续用git bash吧。
2. 搜索vcs后可以看到一个vcs Operations Popup，你可以看到它的快捷键，我的快捷键是alt+`，每个人这个的快捷键不一定相同。
3. 设置（ctrl+alt+s），它在文件——>设置里面，然后就可以看到所有的快捷键，而且可以修改他们
4. 格式化代码（ctrl+alt+L）
* 在WebStorm中输入Button.log就会自动转换为console.log(Button);
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