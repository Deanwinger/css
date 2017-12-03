$(function(){
    'use strict';

    window.Input = function(selector){
        var ele;
        var rule = {};
        var me = this;

        this.load_validator = function(){
            var val = this.get_val();
            this.validator = new Validator(val, rule);
        }

        this.get_val = function(){
            return ele.val();
        }

        function init() {
            find_ele();
            parse_rule();
            me.load_validator();
        };

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
            for(i=0; i<=rule_arr.length; i++){
                var item_str = rule_arr[i];
                item_arr = item.split(':');
                rule[item_arr[0]] = JSON.parse(item_arr[1]);_
            }

        init()
    };
    }
})
