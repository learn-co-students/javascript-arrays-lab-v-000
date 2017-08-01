function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(argument) {
  return kittens.shift();
}

function appendKitten(name) {
  var cats = [...kittens, "Broom"];
  return cats;
}

function prependKitten(name) {
  var cats = [name, ...kittens];
  return cats;
}

function removeLastKitten() {
  var cats = kittens.slice(0, kittens.length - 1)
  return cats
}

function removeFirstKitten() {
  return kittens.slice(1);
}

