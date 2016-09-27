app
.filter('jobs', function() {
    return function(list, filter) {
        if(!filter) {
            return list;
        }
        return list.filter(function(job) {
            return job.selected || job.name.toLowerCase().indexOf(filter.toLowerCase()) > -1;
        });
    };
})
.controller('DemoCtrl', ['$scope', '$interval', 'jobsFilter', DemoCtrl]);

function DemoCtrl($scope, $interval, jobsFilter) {
    $scope.floor = Math.floor;
    $scope.jobs = JSON.parse(localStorage.getItem('jobs') || '[]');

    $interval(function() {
        var selected = $scope.jobs.find(function(job) {
            return job.selected;
        });
        if(selected) {
            selected.time++;
            syncJobs();
        }
    }, 1000);

    $scope.addJob = function() {
        if(!$scope.newJob) {
            return;
        }
        $scope.jobs.push({
            name: $scope.newJob,
            time: 0,
            stamp: 0
        });
        $scope.newJob = '';
        syncJobs();
    };

    $scope.clearJobs = function() {
        $scope.jobs = [];
        syncJobs();
    };

    $scope.toggleTimer = function(job) {
        if(job.selected) {
            job.selected = false;
        } else {
            $scope.jobs.forEach(function(j) {
                j.selected = false;
            });
            job.selected = true;
            job.stamp = new Date().getTime()
        }
        syncJobs();
    };

    function syncJobs() {
        localStorage.setItem('jobs', JSON.stringify($scope.jobs));
    }
    
    $scope.downloadCSV = function () {
        var downloadString = 'data:text/csv;charset=utf8,Job Name,Time (seconds)\n';
        var jobs = $scope.jobs.map(function(job) {
            return [job.name, job.time].join(',');
        });
        downloadString += jobs.join('\n');
        window.open(encodeURI(downloadString));
    };
}
