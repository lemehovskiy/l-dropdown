require("./sass/style.scss");

require ("jquery");

require('../build/l-dropdown.js');


$(document).ready(function () {

    $('.l-dropdown-demo').on('show.ld', function(){
        $('#l-dropdown-trigger').addClass('active');
    })

    $('.l-dropdown-demo').on('hide.ld', function(){
        $('#l-dropdown-trigger').removeClass('active');
    })

    $('.l-dropdown-demo').lDropdown({
        trigger: '#l-dropdown-trigger'
    });
});