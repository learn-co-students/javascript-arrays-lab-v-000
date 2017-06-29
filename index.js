const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var kittensCopy = kittens.slice();
  kittensCopy.push(name);
  return kittensCopy;
}

function prependKitten(name){
  var kittensCopy = kittens.slice();
  kittensCopy.unshift(name);
  return kittensCopy;
}

function removeFirstKitten(name){
  return kittens.slice(1);
}

function removeLastKitten(name){
  return kittens.slice(0, kittens.length-1);
}
