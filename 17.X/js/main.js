'use strict';

var inputs = $('[data-rule]');
var user_inputs = [];

inputs.each(function(key, node){
    console.log("key, value: ", key, node) 
    user_inputs.push(new Input(node));
})

console.log("my_inputs: ", user_inputs) 


