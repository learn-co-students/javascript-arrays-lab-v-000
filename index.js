const app = "I don't do much."
const kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  const kittens = ["Milo", "Otis", "Garfield"];
  let cats = kittens;
  cats.push(name);
  return kittens;
}

function prependKitten(name){
  const kittens = ["Milo", "Otis", "Garfield"];
  let cats = kittens;
  cats.unshift(name);
  return kittens;
}

function removeLastKitten(name) {
  const kittens = ["Milo", "Otis", "Garfield"];
  let cats = kittens;
  cats.pop();
  return kittens;
}

function removeFirstKitten(name) {
  const kittens = ["Milo", "Otis", "Garfield"];
  let cats = kittens;
  cats.shift();
  return kittens;
}
