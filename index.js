const app = "I don't do much."

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(kitten) {
  var newKittens = [...kittens, kitten]
  return newKittens
}

function prependKitten(kitten) {
  var newKittens = [kitten, ...kittens]
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, -1)
  return newKittens
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1)
  return newKittens
}
