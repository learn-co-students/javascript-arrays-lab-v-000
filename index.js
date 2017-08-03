


var kittens = ['Milo','Otis','Garfield']

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newKittens = kittens.concat([name]);
  return newKittens
}

function prependKitten(name) {
  var newKittens = [name].concat(kittens);
  return newKittens;
}

function removeLastKitten() {
  var newKittens = kittens.slice(0,kittens.length-1);
  return newKittens;
}
function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}
