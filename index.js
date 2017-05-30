const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
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
  return kittens.shift()
  }

function appendKitten(name) {
  var new_kittens = [...kittens, name]
  return new_kittens
}

function removeLastKitten() {
  return kittens.slice(-kittens.length)
}

function removeFirstKitten() {
  return kittens.slice(1)
}

function prependKitten(name) {
  var new_kittens = [name, ...kittens]
  return new_kittens
}
