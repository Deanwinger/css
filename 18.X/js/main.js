// var app = new Vue({
//     el: '#app',
//     data: {
//         name: 'A',
//         age: 18,
//         sex: null,
//     }
// })

// var background = new Vue({
//     el: '#background',
//     data: {
//         url: 'http://www.baidu.com',
//         img: 'https://dummyimage.com/100x100/ffcc00/ffffff',
//         klass: 'btn btn-default',
//         isActive: true,
//     }
// })

var event = new Vue({
    el: '#event',
    data: {
    },
    methods: {
        onClick: function() {
            console.log('clicked')
        },

        onEnter: function() {
            console.log('on')
        },

        onOut: function() {
            console.log('leave')
        },

        onSubmit: function() {
            console.log('submitted');
        },

        onKeyup: function() {
            console.log('key pressed');
        },
    }
})