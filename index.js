
const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  var n = kittens.push(name)
  return n
}

function destructivelyPrependKitten(name) {
  var n = kittens.unshift(name)
  return n
}

function destructivelyRemoveFirstKitten() {
  var n = kittens.shift()
  return n
}

function destructivelyRemoveLastKitten() {
  var n = kittens.pop()
  return n
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
