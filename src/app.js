import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('g-button', Button)
Vue.component('g-icon',Icon)
// console.log(Button.props.loading)
new Vue({
    el: '#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false
    }
})

// console.log(a.$el.data===a.data)

// console.log(a)
