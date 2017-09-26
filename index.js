const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  // kittens.slice(0);
  return kittens.slice(1);
}

//
// describe('removeFirstKitten()', function() {
//   it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//     expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])
//
//     expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
//   })
// })
