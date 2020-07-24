function myservices($scope){
    $scope.services=[
        { title: 'Web Development', price: 300, active:false},
        { title: 'Web Design', price: 400, active:false},
        { title: 'Integration', price: 250, active:false},
        { title: 'Traning', price: 220, active:false}];
    $scope.toggleActive = function(s){
        s.active = !s.active;
    };
    $scope.total=function(){
        var t = 0;
        angular.forEach($scope.services, function(s){
            if(s.active)
                t+=s.price;
        });
        return t;
    };
}