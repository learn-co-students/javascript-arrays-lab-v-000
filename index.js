const app = "I don't do much."
const kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  return kittens.push(name)
}


function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}


function destructivelyRemoveLastKitten(){
  return kittens.pop(1)
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift(1)
}

function appendKitten(name){
  var arr = kittens 
  kittens.push(name)
} 

  // 2) Arrays prependKitten(name) prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
  //    ReferenceError: prependKitten is not defined
  //     at Context.<anonymous> (test/index-test.js:53:14)

  // 3) Arrays removeLastKitten() removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged:
  //    ReferenceError: removeLastKitten is not defined
  //     at Context.<anonymous> (test/index-test.js:61:14)

  // 4) Arrays removeFirstKitten() removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged:
  //    ReferenceError: removeFirstKitten is not defined
  //     at Context.<anonymous> (test/index-test.js:69:14)

