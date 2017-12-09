'use strict';

var Input = function(selector){
    var ele;
    var rule = {
        'required': true,
    };
    var me = this;
    var ele_error;

    this.load_validator = function(){
        var val = this.get_val();
        this.validator = new Validator(val, rule);
    }

    this.get_val = function(){
        return ele.val();
    }

    function init() {
        find_ele();
        get_error_ele();
        parse_rule();
        me.load_validator();
        listen();
    };

    function listen(){
        ele.on('blur', function(){
            var valid = me.validator.is_valid(me.get_val());
            if(valid){
                ele_error.hide();
            }else{
                ele_error.show();
            }
        })
    }
    function get_error_ele() {
        ele_error = $(get_error_id());
    }

    function get_error_id() {
        return $("#" + ele.attr('name') + "-input-error")
    }
    
    function find_ele() {
        if (selector instanceof $) {
            ele = selector;
        }else {
            ele = $(selector);
        }
};

    function parse_rule() {
        var rule_str = ele.data('rule');
        if (!rule_str) return;

        var rule_arr = rule_str.split('|');
        for(var i=0; i<rule_arr.length; i++){
            var item_str = rule_arr[i];
            var item_arr = item_str.split(':');
            rule[item_arr[0]] = JSON.parse(item_arr[1]);
        }
};
    init();
}

