/*
 Version: 1.0.0
 Author: lemehovskiy
 Website: http://lemehovskiy.github.io
 Repo: https://github.com/lemehovskiy/l-dropdown
 */

'use strict';

(function ($) {

    class LDropdown {

        constructor(element, options) {

            let self = this;
            
            //extend by function call
            self.settings = $.extend(true, {
               
                test_property: false
                
            }, options);

            self.$element = $(element);

            //extend by data options
            self.data_options = self.$element.data('l-dropdown');
            self.settings = $.extend(true, self.settings, self.data_options);

            self.init();
            
        }

        init(){
            let self = this;
        }
    }


    $.fn.lDropdown = function() {
        let $this = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            length = $this.length,
            i,
            ret;
        for (i = 0; i < length; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                $this[i].l_dropdown = new LDropdown($this[i], opt);
        else
            ret = $this[i].l_dropdown[opt].apply($this[i].l_dropdown, args);
            if (typeof ret != 'undefined') return ret;
        }
        return $this;
    };

})(jQuery);