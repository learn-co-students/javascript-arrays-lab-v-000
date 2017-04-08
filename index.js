function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var x = kittens.slice();
  x.push(name);
  return x;
}

function prependKitten(name) {
  var x = kittens.slice();
  x.unshift(name);
  return x;
}

function removeLastKitten() {
  var x = kittens.slice();
  x.pop();
  return x;
}

function removeFirstKitten() {
  var x = kittens.slice();
  x.shift();
  return x;
}
