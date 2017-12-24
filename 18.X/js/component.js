// Vue.component('alert', {

// })

// var alert_component = {
//     template: '<button @click="on_click">点赞</button>',
//     methods: {
//         on_click: function() {
//             alert('Yo.');
//         }
//     }
// }

// new Vue({
//      el: '#seg1',
//      components: {
//          alert: alert_component
//      }
// })

// Vue.component('like', {
//     template: '#like-component-tpl',
//     data: function(){
//         return {
//             like_count: 10,
//             liked: false,
//         }
//     },
//     methods: {
//         toggle_like: function(){
//             if( !this.liked ){
//                 this.like_count++;
//             }else{
//                 this.like_count--; 
//             }
//             this.liked = !this.liked;
//         }
//     },
// })

// var alert_component = {
//     template: '<button @click="on_click">点赞</button>',
//     props: ['msg'],
//     methods: {
//         on_click: function() {
//             alert(this.msg);
//         }
//     }
// }

// var user_component = {
//     template: '<a href="\'/user/\' + username">{{username}}</a>',
//     props: ['username'],
//     methods: {
//     }
// }

// var balance_component = {
//     template: '<div><show></show></div>'

// }

// var show_component = {
//     template: '<button>显示余额</button>'
// }

// new Vue({
//     el: '#app',
//     components: {
//         // alert: alert_component,
//         // user: user_component,
//         show: show_component,
//         balance: balance_component,
        
        
//     }
// })

Vue.component('balance', {
    template:
    `
    <div>
        <show @show-balance="show_balance"></show>
        <div v-if="show">您的余额是：668</div>
    </div>
    `,
    data: function(){
        return {
            show: false,
        }
    },
    methods: {
        show_balance: function(data){
            this.show = true;
            console.log('data: ', data)
        }
    }
})

Vue.component('show', {
    template: '<button @click="on_click()">显示余额</button>',
    methods: {
        on_click(){
            this.$emit('show-balance', {a: 1, b: 2});
        }
    }
})

new Vue({
    el: '#app',
})