const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

var appendKitten = (name) => {
  var newAr = [...kittens, name];
  return newAr
}

var prependKitten = (name) => {
  var newAr = [name, ...kittens];
  return newAr
}

var removeFirstKitten = (name) => {
  var newAr = kittens.slice(1);
  return newAr
}

var removeLastKitten = (name) => {
  var newAr = kittens.slice(0, kittens.length-1)
  return newAr
}


var destructivelyAppendKitten = (name) => {
  kittens.push(name)
  return kittens
}

var destructivelyPrependKitten = (name) => {
  kittens.unshift(name)
  return kittens
}

var destructivelyRemoveFirstKitten = (name) => {
  kittens.shift()
  return kittens
}

var destructivelyRemoveLastKitten = (name) => {
  kittens.pop()
  return kittens
}
