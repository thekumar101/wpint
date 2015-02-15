(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['rksvService', 'logger'];

    /* @ngInject */
    function DashboardController(rksvService, logger) {
        var vm = this;
        var result = [];
        vm.account = null;
        vm.company = ['AAAA', 'BBBB', 'CCCC', 'DDDD', 'EEEE', 'FFFF', 'GGGG', 'HHHH', 'IIII', 'JJJJ'];
        vm.list = [];


        activate().then(function(){
            $.each(vm.account, function(i, v){
                vm.list[i] = vm.account[i].split(',');
            });
        });

        function activate() {
            return getRecords().then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getRecords() {
            return rksvService.getRecords().then(function(data) {
                vm.account = data;
                return vm.account;
            });
        }
        
    }
})();
