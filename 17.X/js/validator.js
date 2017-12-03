$(function(){
    'use strict';

    window.Validator = function(val, rule){
        this.validate_max = function() {
            val = parseFloat(val);
            return val <= rule.max;
        }

        this.is_valid = function(){
            var key;
            // 如果不是必填项且用户没有添加任何内容，则直接判定为合法
            if(!rule.required && !val)
                return true;

            for( key in rule ){
                if (key === 'required')
                    continue;
                var r = this['validate_'+'key']();
                if( !r ) return false;
            }
            return true;
        }

        this.validate_min = function() {
            val = parseFloat(val);
            return val >= rule.min;
        }

        this.validate_maxlength = function() {
            val = val.toString();
            return val.length <= rule.maxlength;
        }

        this.validate_minlength = function() {
            val = val.toString();
            return val.length >= rule.minlength;
        }

        this.validate_numeric = function(){
            return $.isNumeric(val);
        }

        this.validate_required = function(){
            var real = $.trim(val)
            if ( !real && real !== 0 )
                return false;
            return true;
        }

        this.validate_pattern = function() {
            var reg = new RegExp(rule.pattern);
            return reg.test(val);
        }
    }
}) 
