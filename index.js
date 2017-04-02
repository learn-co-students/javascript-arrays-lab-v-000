const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newArr = [];
  for(var i = 0; i < kittens.length; i++) {
    newArr.push(kittens[i]);
  }
  newArr.push(name);
  return newArr;
}

function prependKitten(name) {
  var newArr = [name];
  for(var i = 0; i < kittens.length; i++){
    newArr.push(kittens[i]);
  }
  return newArr;
}

function removeLastKitten() {
  var newArr = [];
  for(var i = 0; i < kittens.length - 1; i++){
    newArr.push(kittens[i]);
  }
  return newArr;
}

function removeFirstKitten() {
  var newArr = [];
  for(var i = 1; i < kittens.length; i++){
    newArr.push(kittens[i]);
  }
  return newArr;
}
