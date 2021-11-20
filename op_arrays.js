// with Set

var a = [1,2,3,4,5]
var b = [2,4,6,8,10]
console.log("Matriz a:", a);
console.log("Matriz b:", b);
var sa = new Set(a);
var sb = new Set(b);
// intersección
let intersect = a.filter(x => sb.has(x));
// Resta
let minus = a.filter(x => !sb.has(x));
// Complemento
let complement = [...a.filter(x => !sb.has(x)), ...b.filter(x => !sa.has(x))];
// Unión
let unionSet = Array.from(new Set([...a, ...b]));
console.log("Intersección de a y b:", intersect);
console.log("La diferencia entre ayb:", minus);
console.log("Conjunto suplementario de ayb:", complement);
console.log("La unión de ayb:", unionSet);

// with filter y concat

var a = [1,2,3,4,5]
var b = [2,4,6,8,10]
//Intersección
var c = a.filter(function(v){ return b.indexOf(v) > -1 })
//Sustracción
var d = a.filter(function(v){ return b.indexOf(v) == -1 })
//Complemento
var e = a.filter(function(v){ return !(b.indexOf(v) > -1) })
 .concat(b.filter(function(v){ return !(a.indexOf(v) > -1)}))
//Unión
var f = a.concat(b.filter(function(v){ return !(a.indexOf(v) > -1)}));
console.log("Matriz a:", a);
console.log("Matriz b:", b);
console.log("La intersección de ayb:", c);
console.log("La diferencia entre ayb:", d);
console.log("El complemento de a y b:", e);
console.log("La unión de ayb:", f);


let data = [1,2,6,1,2,5,9,'33','33'];

const result = data.reduce((acc,item)=>{
  if(!acc.includes(item)){
    acc.push(item);
  }
  return acc;
},[])

console.log(result)