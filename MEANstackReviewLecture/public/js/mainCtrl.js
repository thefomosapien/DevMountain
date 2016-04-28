angular.module('funstuff').controller('mainCtrl', function($scope, mainService, $state){

    //login function used on loginTmpl,
    //if response.login from the server comes back as true then we change the view to the store page
    $scope.login = function(user){ mainService.login(user).then(function(response){
            console.log(response);
            if(response.login){ mainService.getUser(response.user._id).then(function(response){
                    $scope.user = response;
                    $state.go('store');
                })
            }
        })
    };

    //used to grab/update all the products from the backend to show on our html
    $scope.getProducts = function(){
        mainService.getProducts().then(function(response){
            $scope.products = response;
        })
    };

    $scope.getProducts();
    $scope.newProduct = {};
    $scope.selected = {};

    //passing in the specific product from the html ng-click event, we tell our service to tell the server to add the new product to the database. once the server tells us it's done, we run the getProducts function to update our information to the new updated information
    $scope.addProduct = function(product){
        mainService.addProduct(product).then(function(response){
            $scope.newProduct = {};
            $scope.getProducts();
        })
    };

    $scope.select = function(product){
        $scope.selected = product;
    };

    //telling our service to update the information of one product that has been edited. the product is passed in as an argument, and we pass that into our service. once the service is done we update our $scopes information with $scope.getProducts();
    $scope.updateProduct = function(product){
        mainService.updateProduct(product).then(function(response){
            $scope.selected = {};
            $scope.getProducts();
        })
    };

    //telling our service to remove and item, based on what was passed into the function from our html. then after the server says it's completed the request, we use getProducts to update all the product information on our scope.
    //we set $scope.selected to an empty object to clear our inputs, because the info they display/edit is withing the $scope.selected object.
    $scope.deleteProduct = function(product){
        mainService.deleteProduct(product).then(function(response){
            $scope.selected = {};
            $scope.getProducts();
        })
    };

    //telling our service to add a product to the the users cart, with a qty of 1, and the users id to make the reqeust with.
    //once the server tells us it's completed the request we clear our inputs and update our users information with $scope.getUser();
    $scope.addToCart = function(product){
        mainService.addToCart(product, 1, $scope.user._id).then(function(response){
            $scope.selected = {};
            $scope.getUser();
        })
    };

    //telling our service to remove a product from the users cart based off of the products id.
    //once the server says it's completed the request we update our information with $scope.getUser();
    $scope.removeFromCart = function(product){
        mainService.removeFromCart(product, $scope.user._id).then(function(response){
            $scope.selected = {};
            $scope.getUser();
        })
    }

    //telling our service to go grab the users information from the backend to get the most updated information and then setting that to $scope.user
    $scope.getUser = function(){
        mainService.getUser($scope.user._id).then(function(response){
            $scope.user = response;
        })
    };

    $scope.getTotal = function(){
      var total = 0;
      for(var i = 0; i < $scope.user.cart.products.length; i++){
        total += $scope.user.cart.products[i].qty;
      }
      return total
    };

})
