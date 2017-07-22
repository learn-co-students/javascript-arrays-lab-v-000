const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) { //appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
  return [...kittens, name]
}

function prependKitten(name) { //prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
  return [name, ...kittens]
}

function removeLastKitten() { //removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() { //removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
  return kittens.slice(1)
}
