/** Loop over nested arrays and objects to grab each property using recursion **/

console.log("\nLog Array properties: \n")

var arr = [1, 'a', [true, 'b', [null], 'c'], 3];

function loop(arr){
  return arr.forEach(function(item){
    if(Object.prototype.toString.call(item) === '[object Array]'){
      loop(item)
    }else{
      console.log(item)
    }
    
  })
}

loop(arr);

console.log("\nLog Object properties: \n")

var obj = {
          a: {
            b: true,
            c: [null, {
              d: 1
            }],
            e: {
              f: "abc"
            }
          },
          g: undefined
        }
        
function loopify(obj){
  for (var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        if(Object.prototype.toString.call(obj[prop]) === '[object Object]'){
        console.log(prop)
          loopify(obj[prop])
        }else{
          console.log(prop)
        }
      }
  }
}

loopify(obj)