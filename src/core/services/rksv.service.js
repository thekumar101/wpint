/* jshint -W024 */
(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('rksvService', rksvService);

    rksvService.$inject = ['$http', '$location', 'exception', 'rksv'];
    /* @ngInject */
    function rksvService($http, $location, exception, rksv) {
        var service = {
            getRecords: getRecords
        };

        return service;

        function getRecords() {
            return $http.get(rksv + '/historical?interval=9')
                .then(getRecordsComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getAccount')(message);
                    $location.url('/');
                });

            function getRecordsComplete(data) {
                return data.data;
            }
        }
    }
})();
