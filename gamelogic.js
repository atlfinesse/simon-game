let p = new Promise((c, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve(congratulate())
  } else {
    reject('Try Again')
  }
})

p.then((message) => {
  console.log('You fulfilled your promise! ' + message)
}).catch((message) => {
  console.log('You broke your promise! ' + message)
})


// bet()

function congratulate() {
  console.log('Good Job')
}

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1
//   if (a == 2) {
//     resolve(congratulate())
//   } else {
//     reject('Try Again')
//   }
// })

// p.then((message) => {
//   console.log('You fulfilled your promise! ' + message)
// }).catch((message) => {
//   console.log('You broke your promise! ' + message)
// })


// // bet()

// function congratulate() {
//   console.log('Good Job')
// }