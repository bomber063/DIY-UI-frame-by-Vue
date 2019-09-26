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
* 两个最常用的**快捷键**，
1. shift shift，就是按两下shift，它会给你一个搜索框，可以搜索其他任意的快捷键,比如可以搜VCS，它的全称是version control system,版本控制系统，就是用于git操作的。搜索vcs后可以看到一个vcs Operations Popup，它可以用于与git操作
2. 搜索vcs后可以看到一个vcs Operations Popup，你可以看到它的快捷键，我的快捷键是alt+`，每个人这个的快捷键不一定相同。
3. 设置（ctrl+alt+s），它在文件——>设置里面，然后就可以看到所有的快捷键，而且可以修改他们
4. 格式化代码（ctrl+alt+L）
## 其他说明
* 一个Vue的UI组件。
作者：bomber