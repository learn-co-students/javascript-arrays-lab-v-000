var candyBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var evenStrings = ["2","4","6","8","10","12","14","16","18"]
var evenNums = [2,4,6,8,10,12,14,16,18,20]
var oddNums = [1,3,5,7,9,11,13,15,17,19,21]
var oddStrings = ["1","3","5","7","9","11","13","15","17","19","21"]
var fruits = ["apple", "pear", "grape"]

const app = "I don't do much."

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  // [...kittens, name];  (why doesn't this work?)
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens] 
}

function removeLastKitten() {
  var tempKittens = [];
  kittens.forEach(function(cat) {
    tempKittens.push(cat)
  })
  tempKittens.pop();
 return tempKittens;
}

function removeFirstKitten() {
  var tempKittens = [];
  kittens.forEach(function(cat) {
    tempKittens.push(cat)
  })
  tempKittens.shift();
 return tempKittens;
}






















