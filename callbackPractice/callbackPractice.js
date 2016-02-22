/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 


   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/

var first = function (arr, cb) {
    cb(arr[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function (firstName) {
    console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



var last = function (arr, cb) {
    cb(arr.slice(-1)[0]);
}


last(names, function (lastName) {
    console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var multiply = function (num1, num2, cb) {
    cb(num1 * num2);
}


multiply(4, 3, function (answer) {
    console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





var contains = function (arr, str, cb) {
    var toReturn = false;
    for (var i = 0; i < names.length; i++) {
        if (arr[i] === str) {
            cb(true);
        }
    }
    cb(toReturn);
}

contains(names, 'Colt', function (result) {
    if (result === true) {
        console.log('Colt is in the array');
    } else {
        console.log('Colt is not in the array');
    }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var uniq = function (arr, cb) {
    arr.sort();
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] === arr[i - 1]) {
            arr.splice(i, 1);
        }
    }
    cb(arr);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function (uniqArr) {
    console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var each = function (arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i);
    }
}

each(names, function (item, indice) {
    console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */


var getUserById = function (ary, str, cb) {
    for (var i = 0; i < ary.length; i++) {
        if (ary[i].id === str) {
            cb(ary[i])
        }
    }
}

var users = [
    {
        id: '12d',
        email: 'tyler@gmail.com',
        name: 'Tyler',
        address: '167 East 500 North'
  },
    {
        id: '15a',
        email: 'cahlan@gmail.com',
        name: 'Cahlan',
        address: '135 East 320 North'
  },
    {
        id: '16t',
        email: 'ryan@gmail.com',
        name: 'Ryan',
        address: '192 East 32 North'
  },
];

getUserById(users, '16t', function (user) {
    console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});