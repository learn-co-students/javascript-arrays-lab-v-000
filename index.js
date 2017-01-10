const app = "I don't do much."

var kittens = ['milo', 'otis', 'garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}

function appendKitten(name){
  var array = [...kittens, name];
  return array;
}

function prependKitten(name){
  var array = [name, ...kittens];
  return array;
}

function removeLastKitten(){
  var array = kittens.slice(0, kittens.length - 1);
  return array;
}

function removeFirstKitten(){
  var array = kittens.slice(1);
  return array;
}
