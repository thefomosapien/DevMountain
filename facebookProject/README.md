<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">
# DevMtIn

## Objective
By the end of this week you will have created a functional DevMountain social network that allows you to connect with other students and graduates. Along the way you will learn the core concepts of AngularJS, as well as learning how to access outside APIs for data.

## Day One: Data binding, repeating, filtering.

### Step 1: Installing and including AngularJS.
To start things off we first need to include the Angular source code in our `index.html`. You can find this at <https://cdnjs.com/libraries/angular.js> . Scroll down until you see `https://cdnjs.cloudflare.com/ajax/libs/angular.js/_VERSIONNUMBER_/angular.js` and copy that link into a script tag at the bottom of your `<body>`.

Now that we have included the Angular script, our next step is to set up the bones of our first Angular application. The first step is to create an `app.js` file. Inside this file we need to initialize our new Angular app which we will call 'devMtIn'.
```javascript
angular.module('devMtIn', []);
```
Be sure to include your `app.js` file in your `index.html` **underneath** the Angular script. If included above the Angular script, the app will not function. Our last step in including Angular in our new app is to add the `ng-app` attribute to our HTML. This attribute should be added to our `<html>` tag and should reference the name of our app. `<html ng-app="devMtIn">`.

Now we are ready to launch our app using `http-server` or `live-server`. You should see the page laid out with the included HTML and CSS. Check the console to make sure there are no errors.

### Step 2: Creating and including a controller.
Now that Angular is up and running, let's actually *do* something with it. For this, we need a controller. A controller is the glue that Angular uses to connect your code to the view. To create our controller, let's create another new file called `homeCtrl.js`.

Inside of `homeCtrl.js` we will need to create a new controller on an `angular.module`, give that controller a name, and pass in a callback function that takes in the `$scope` parameter.
```javascript
angular.module('devMtIn')
.controller('homeCtrl', function($scope) {
	
});
```
Remember that we don't want to pass our `angular.module` an array here! When you pass in an array, you are making an entire new app rather than looking for your current one. Now all we need to do is include the script in a new script tag and add the `ng-controller` attribute to our `<body>` tag and pass it "homeCtrl".

To test that everything is working so far, create a property on your `$scope` called 'myProfile' and set it equal to an object containing `name: _YOUR NAME_`. Inside of your HTML replace the header 'Your Name' with `{{ myProfile.name }}`. If everything is working you should see your name at the top of the page.

### Step 3: Data binding and repeating over data.
What you've just done in the above step is called data binding, we are binding the information inside of our controller to our view using the handlebars (`{{ }}`) notation. This binding can handle more than just displaying static data, it can also process simple evaluations.

To demonstrate this let's change our HTML name header to this: `{{ myProfile.name || 'Your Name' }}`. Now if you set `myProfile.name` to an empty string in your controller you will see the page is displaying the string 'Your Name' instead of the value of `myProfile.name`.

Let's add some data to repeat over, add a new property to your `myProfile` object named 'friends'.
```javascript
$scope.myProfile = {
    name: 'John Doe'
  , friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
}
```

To repeat over this data we need to add an `ng-repeat` directive as an attribute to our `<div class="friendList"` and tell it to repeat over each 'friend' in `myProfile.friends`. Then inside of that div, in place of 'My Friends' we need to bind each friend to our view.
```html
<div class="friendList" ng-repeat="friend in myProfile.friends">
  <span class="closeBtn"></span>
  {{ friend.name }}
  <br>
  <div class="secondConnection friendList">
    My Second Connections
  </div>
</div>
```
Once you refresh the page you should see a list of your current friends' names.

### Step 4: ng-model and filtering.
So far we have bound data to our view from our controller, but there is no interactivity. None of our input boxes or buttons do anything, and all of our data is static on our controller. To begin to change that we need to utilize Angular's built in `ng-model` directive.

What `ng-model` does is create a two way data-binding from our controller to our view. This means that any changes made to the data by either the controller or the user will be reflected in both places. To demonstrate this, let's add an `ng-model` attribute on our 'name' input box and pass it the value `myProfile.name`. Inside of your controller, delete the `name` property of `myProfile`.

Once you refresh the page, try typing your name into the input box you adjusted. You should see the header update as you type. What Angular is doing here is looking at your `$scope.myProfile` object, seeing that it doesn't contain a `name` property, and so creating that property for us.

Now we have some interactivity! Let's take it a step further by using `ng-model` to filter our data. To do this we will need to add a new `ng-model` to our 'Find Friends' input box named 'findFriend.name'. Angular will create the `findFriend` object on our `$scope` and assign the new property `name` to whatever value is inside the input box.

To use this to filter data takes only one more step. Inside of the friend list `ng-repeat` attribute add a new filter and pass it the value of `findFriend.name`. This should look something like this:
```html
<div class="friendList" ng-repeat="friend in myProfile.friends | filter : findFriend.name">
```
After refreshing the page you should now be able to type into the 'Find Friends' box and see your friends' list filter in real time.

### Step 5: ng-options and more filtering.
We want our users to be able to choose whether they want to sort their friends in ascending or descending order. To do this we will be using Angular's `ng-options` directive. `ng-options` works similarly to `ng-repeat` but creates a select box with dynamically generated options instead of repeating an element.

Before adding this directive to our HTML we need to create an array on our controller to give `ng-options` something to loop over. This will be an array of two objects containing a select value and a display value. It should look something like this:
```javascript
$scope.sortOptions = [{
    display: 'Ascending'
  , value: false
  },
  {
    display: 'Descending'
  , value: true
  }
];
```
Remember that `display` and `value` are just key names; they can be named whatever you like as long as you adjust the HTML accordingly.

Next we will need to add a select element into our `index.html` just below our search bar. The syntax for `ng-options` is very similar to `ng-repeat` with some extras added on. It will look like this:
```html
<select ng-model="sortReverse" ng-options="option.value as option.display for option in sortOptions"></select>
```
The syntax is a little odd, but what we are saying is that `option.value` will be the value we use for every `option.display` in our `sortOptions` array. It is also important to notice that I've included an `ng-model` on the new select element. `ng-options` will not work at all without an `ng-model` to pass its data to.

To add this logic to our filter we only need to pass our `ng-repeat` a new filter called `orderBy`. The first argument passed to `orderBy` is the property we wish to sort on. The second is a boolean that tells `orderBy` whether or not we wish to reverse the array.
```html
<div class="friendList" ng-repeat="friend in myProfile.friends | filter : findFriend.name | orderBy : 'name' : sortReverse">
```
Well done! You've finished your first day of AngularJS, and now you have the knowledge to allow users to interact with the `$scope`, repeat over data, filter data, bind data to the DOM, and dynamically generate select elements using `ng-options`.
