const app = "I don't do much."
var kittens = ["Milo", "Otis","Garfield"];
function destructivelyAppendKitten (name){
  return kittens.push ('Ralph')
}
var kittens = ["Milo", "Otis","Garfield"];
function destructivelyPrependKitten (name){
  return kittens.unshift ("Bob")
}
var kittens = ["Milo", "Otis","Garfield"];
function destructivelyRemoveLastKitten (){
  return kittens.pop ()
}
var kittens = ["Milo", "Otis","Garfield"];
function destructivelyRemoveFirstKitten (){
  return kittens.shift ("Milo")
}
var kittens = ["Milo", "Otis","Garfield"];
function appendKitten () {
  return appendKitten = [...kittens, "Broom"]
}
function prependKitten(){
  return prependKitten = ["Arnold",...kittens]
}
function removeLastKitten(){
  return kittens.slice(0,2)
}
function removeFirstKitten(){
  return kittens.slice(-2)
}
