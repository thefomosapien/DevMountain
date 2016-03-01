pizzaModule.directive('pizzaComplete', function () {

    return {
        restrict: 'E',
        scope: {
            pizzaInfo: '=category'
        },
        template: `
        <div class="col s12 m7">
            <div class="card  z-depth-4">
                <div class="card-image">
                    <img src="{{pizzaInfo.img}}">
                    <span class="card-title">{{pizzaInfo.name}}</span>
                </div>
                <div class="card-content">
                    <p>{{pizzaInfo.description}}</p>
                </div>
            </div>
        </div>`,
        link: function (scope, element, attrs) {
            console.log(pizzaInfo);
        }
    };

})