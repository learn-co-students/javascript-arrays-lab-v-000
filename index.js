const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (array, element ) {
return kittens = [ ...kittens, "Ralph"]
}

function destructivelyPrependKitten (array, element) {
  return kittens = [ "Bob", ...kittens]
}

function destructivelyRemoveLastKitten ( array) {
kittens.pop ("Garfield")
return array
}

function destructivelyRemoveFirstKitten (array)  {
  kittens.shift ("Milo")
  return kittens
}

function appendKitten (name) {
var moreKittens = [...kittens, "Broom"]
return moreKittens
}

function prependKitten (name) {
var moreKittens = ["Arnold", ...kittens]
return moreKittens
}

function removeLastKitten () {
var LessKittens = kittens.slice (0, length -1)
return LessKittens
}

function removeFirstKitten () {
var lessKittens = kittens.slice (1)
return lessKittens
 }
