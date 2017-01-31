const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = (a) => {
  kittens.push(a)
  return kittens
}

var destructivelyPrependKitten = (a) => {
  kittens.unshift(a)
  return kittens
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop()
  return kittens
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift()
  return kittens
}

var appendKitten = (a) => {
  var c = [...kittens, a]
  return c
}

var prependKitten = (a) => {
  var c = [a, ...kittens]
  return c
}

var removeLastKitten = (a) => {
  var c = kittens.slice(0, -1)
  return c
}

var removeFirstKitten = (a) => {
  var c = kittens.slice(1)
  return c
}
