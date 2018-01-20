const app = "I don't do much."

function prependKitten(name) {
  var newArray = [name, ...kittens];
  return newArray;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function appendKitten(name) {
  var newArray = [...kittens, name];
  return newArray;
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function removeFirstKitten() {
  var newArray = kittens.slice(1);
  return newArray;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray;
}
