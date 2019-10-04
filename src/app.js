import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

// console.log(Button.props.loading)
new Vue({
    el: '#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false
    }
})
// console.log(a.$el)

// console.log(a.$el.data===a.data)

// console.log(a)

//单元测试
//一个测试代码是测试输入一个icon:setting，得到对应的xlink:href是否与#i-setting匹配。
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

//测试输入一个icon:setting并且loadings:true，得到对应的xlink:href是否与#i-loading匹配。也就是loading在true的时候隐藏掉icon，只显示loading
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

//测试svg的order,order就是顺序，也就是左边还是右边
{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            icon:'setting'
            // iconPosition:'right'
        }
    })
    vm.$mount(div)
    let svg=vm.$el.querySelector('svg')
    let order=window.getComputedStyle(svg).order
    expect(order).to.equal('1')//因为CSS所有的属性值都是字符串，所以这个是字符串'1'.这里默认的就是order 1

    vm.$el.remove()//测试完后为了不增加页面多余的button和内存最好移除。
    vm.$destroy()//测试完后为了不增加多余内存最好移除。
}

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

//如果只是通过设置属性这样的方式也可以，代码也比较简答
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
    // let svg=button.$el.querySelector('svg')
    // let order=window.getComputedStyle(svg).order
    // expect(order).to.equal('2')//这里iconPosition:'right',所以的order就是'2'

    let useElement=vm.$el
    expect(useElement.getAttribute('class')).to.equal('g-button icon-right')

    vm.$el.remove()//测试完后为了不增加页面多余的button和内存最好移除。
    vm.$destroy()//测试完后为了不增加多余内存最好移除。
}

//触发click的测试
{
    //mock
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

