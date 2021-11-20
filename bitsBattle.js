// solution by monito
function bitsBattle(numbers) {
  let acum = numbers.reduce(( prev, curr) =>  prev += curr % 2 === 1 ? [...curr.toString(2)].filter(x => x === "1").length :
                                                                      -[...curr.toString(2)].filter(x => x === "0").length, 0)
  return acum === 0 ? 'tie' : acum < 0 ?  'evens win' : 'odds win'
}

console.log(bitsBattle([5, 3, 14])) // 'odds win'
console.log(bitsBattle([3, 8, 22, 15, 78])) // 'evens win'