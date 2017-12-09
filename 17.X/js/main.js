'use strict';

var inputs = $('[data-rule]')
    , form = $('#signup')
    , user_inputs = [];

inputs.each(function(key, node){
    user_inputs.push(new Input(node));
})

form.on('submit', function(e){
    e.preventDefault();
    inputs.trigger('blur')
    for( var i=0; i< user_inputs.length; i++) {
        var item = user_inputs[i];
        var r = item.validator.is_valid(); 
        if (!r) {
            alert('invalid!')
            return;
        }
    };
alert("发送成功")
})


