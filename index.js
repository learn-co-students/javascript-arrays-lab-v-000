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

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
