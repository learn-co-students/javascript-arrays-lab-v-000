const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var moreKittens = [...kittens, name]
  return moreKittens
}

function prependKitten(name) {
  var moreKittens = [name, ...kittens]
  return moreKittens
}

function removeLastKitten(name) {
  var moreKittens = kittens.slice(0, kittens.length - 1)
  return moreKittens
}

function removeFirstKitten(name) {
  var moreKittens = kittens.slice(1)
  return moreKittens
}
