var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
   kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
}

function appendKitten(name) {
  return [...kittens, name] //adds to back
}

function prependKitten(name) {
  return [name, ...kittens] //adds to front
}

function removeFirstKitten() {
  return kittens.slice(1)
}


function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)
}
