var ref = new Firebase('https://devmtn-demo.firebaseio.com/')

ref.child('foo').on('value', function(snapshot){
  var data = snapshot.val()
  console.log(data)
})

var myObj = {
  foo: {
    bar: 'baz'
  },
  key: 'value',
  object: {
    anotherKey: 'anotherValue'
  }
}

myObj.key.thing = 'value' // doesn't work!


// ref.on('value', function(snapshot) {
//   console.log(snapshot.val())
// })

// var listRef = ref.child("list")
//
// listRef.once('value', function(snapshot) {
//   var data = snapshot.val()
//   console.log(data)
// })

// listRef.push('anotherItem', function (e) {
//   if(e) console.log('there was an error!')
// })
//
// listRef.set([1,2,3], function (e) {
//   if(e) console.log('there was an error!')
// })
//
// listRef.child(2).delete(function (e) {
//   if(e) console.log('there was an error!')
// })
