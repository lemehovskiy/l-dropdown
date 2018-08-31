require("./sass/style.scss");

require ("jquery");

require('../build/l-dropdown.js');


$(document).ready(function () {
    $('.l-dropdown-demo').lDropdown({
        trigger: '#l-dropdown-trigger'
    });
});