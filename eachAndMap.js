/* working with functional programming inspired by Hack Ractor. Exploring for each and map*/

var myArray = [1,2,3,4,5];

var myObject = {
  name: "Jenny",
  email: "somecoolperson@gmail.com",
  phone: "867-5903"

};

function print(value){
  console.log(value);
}

print(myArray[1]); //2

print(myObject['name']); //Jenny



var scores = [10345, 23432, 333356];

each(scores, print);

var capitals = {
  California: 'Sacramento',
  Vermont: 'Montpelier',
  Arizona: 'Phoenix',
  value: 'wat'
};

each(capitals, print);

function each(collection, callback) {
    if(collection.constructor == Array){
        for(var i = 0; i < collection.length; i++){
          callback(collection[i]);
        }
    }
    if(collection.constructor == Object){
        for(var value in collection){
          callback(collection[value]);
      }
    }
    
};



//map

var allottedMinutes = [15, 20, 32];

var double = function (num) {
  return num * 2;
};

var doubledAllottments = map(allottedMinutes, double);
console.log(doubledAllottments); // logs [30, 40, 64]

var map function (collection, callback) {
  var result = [];
  
  each(collection, function(num) {
    result.push(callback(num));
  });
  return results;
};

