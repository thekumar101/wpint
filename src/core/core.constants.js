(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('api', 'http://localhost:3000/api')
        .constant('rksv', 'http://kaboom.rksv.net/api');
})();
