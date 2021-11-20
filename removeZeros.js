const x = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// function removeZeros(array) {
//   const help = []
//   let count = 0
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== 0 && array[i] !== '0') {
//       count++
//       help[count - 1] = array[i]
//     }
//   }
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] === 0 ) {
//       count++
//       help[count - 1] = 0
//     } else if(array[i] === '0') {
//       count++
//       help[count - 1] = '0'
//     }
//     console.log(count)
//   }
//   return help
// }

function removeZeros(array) {
  let int = []
  let zeros = []
  for (let elem of array) {
    if(elem !== 0 && elem !=='0') int = [...int, elem]
    else zeros = [...zeros, elem]
  }
  return [...int, ...zeros]
}


console.log(removeZeros(x))
// console.log([7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0])