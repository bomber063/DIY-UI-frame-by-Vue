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
## 其他说明
* 一个Vue的UI组件。
作者：bomber