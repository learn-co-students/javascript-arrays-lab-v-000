const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  var removed = kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  var removed = kittens.shift();
  return removed;
}

function appendKitten(name) {
  var newKittens = kittens.slice(0);
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name) {
  var newKittens = kittens.slice(0);
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten() {
  var newKittens = kittens.slice(0);
  var removed = newKittens.pop();
  return newKittens;
}

function removeFirstKitten() {
  var newKittens = kittens.slice(0);
  var removed = newKittens.shift();
  return newKittens;
}
