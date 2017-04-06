const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var kek = [...kittens, name]
  return kek
}

function prependKitten(name) {
  var kek = [name, ...kittens]
  return kek
}

function removeLastKitten() {
  var kek = kittens.slice(0, kittens.length-1)
  return kek
}

function removeFirstKitten() {
  var kek = kittens.slice(1)
  return kek
}