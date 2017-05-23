const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
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
  var updatedKittens = kittens.slice()
  updatedKittens.push(name)
  return updatedKittens
}

function prependKitten(name) {
  var updatedKittens = kittens.slice()
  updatedKittens.unshift(name)
  return updatedKittens
}

function removeLastKitten() {
  var updatedKittens = kittens.slice()
  updatedKittens.pop()
  return updatedKittens
}

function removeFirstKitten() {
  var updatedKittens = kittens.slice()
  updatedKittens.shift()
  return updatedKittens
}
