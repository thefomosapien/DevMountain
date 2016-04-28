angular.module('funstuff').service('mainService', function($http){
    
    this.login = function(user){
        return $http({
            method: "POST",
            url: "/api/user/login",
            data: user
        }).then(function(response){
            return response.data
        })
    };
    
    this.getProducts = function(){
        return $http({
            method: "GET",
            url: "/api/products"
        }).then(function(response){
            return response.data
        })
    };
    
    this.addProduct = function(product){
        return $http({
            method: "POST",
            url: "/api/products",
            data: product
        }).then(function(response){
            return response.data
        })
    };
    
    
    //we are only passing in name and product into our data because those are the only two values that will be edited so there is no need to send the entire product object
    this.updateProduct = function(product){
        return $http({
            method: "PUT",
            url: "/api/products/" + product._id,
            data: {
                name: product.name,
                price: product.price
            }
        }).then(function(response){
            return response.data
        })
    };
    
    this.deleteProduct = function(product){
        return $http({
            method: "DELETE",
            url: "/api/products/" + product._id
        }).then(function(response){
            return response.data
        })
    };
    
    //our server controller is expecting an object to be in the req.body with the keys id and qty, so we need to make sure we set up our data object to match that.
    this.addToCart = function(product, qty, userId){
        return $http({
            method: "POST",
            url: "/api/user/addtocart/" + userId,
            data: {
                id: product._id,
                qty: qty
            }
        }).then(function(response){
            return response.data
        })
    };
    
    //our server controller is expecting an id in the req.body under the id key.
    this.removeFromCart = function(product, userId){
        return $http({
            method: "PUT",
            url: "/api/user/removefromcart/" + userId,
            data: {
                id: product._id
            }
        }).then(function(response){
            return response.data
        })
    }
    
    this.getUser = function(userId){
        return $http({
            method: "GET",
            url: "/api/user/" + userId
        }).then(function(response){
            return response.data
        })
    }
    
    
    
})