const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var outcome = [...kittens, name]
  return outcome;
}

function prependKitten(name) {
  var outcome = [name, ...kittens]
  return outcome
}

function removeLastKitten() {
  var outcome = kittens.slice(0, kittens.length - 1)
  return outcome
}

function removeFirstKitten() {
  var outcome = kittens.slice(1)
  return outcome
}
