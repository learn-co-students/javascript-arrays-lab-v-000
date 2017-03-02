const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  return kittens.push(name)

}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)

}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)

} 

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)

}


function appendKitten(name) {
  var ary = [...kittens, name]
  return ary 
}

function prependKitten(name) {
  var ary = [name, ...kittens]
  return ary 

}


function removeLastKitten(name) {
  var ary = kittens.slice(0, kittens.length - 1)
  return ary
}



function removeFirstKitten(name) {
  var ary = kittens.slice(1)
  return ary

}








