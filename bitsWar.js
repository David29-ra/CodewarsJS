function bitsWar(numbers) {
  let acum = numbers.reduce((prev, curr) => prev += Math.abs(curr) % 2 === 1 ? [...curr.toString(2)].filter(x => x === "1").length * (curr >= 0 ? 1 : -1) : -[...curr.toString(2)].filter(x => x === "1").length  * (curr > 0 ? 1 : -1) , 0)
  return acum === 0 ? 'tie' : acum < 0 ? 'evens win' : 'odds win'
}

console.log(bitsWar([1,5,12])) // 'odds win'
console.log(bitsWar([7,-3,20])) // 'evens win'
console.log(bitsWar([7,-3,-2,6])) // 'tie'
console.log(bitsWar([4,7,10,18,15,-12,5,-19,6,0,3,-16,1,14])) // 'evens win'