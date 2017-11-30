$(function(){
    'use strict';
    window.Validator = function(val, rule){
        this.validate_max = function() {           
            val = parseFloat(val);
            return val <= rule.max;
        }
    }

    var validator = new Validator('15', {
        max: 100
    });
    
    var result = validator.validate_max();
    console.log('result: ', result);
})

