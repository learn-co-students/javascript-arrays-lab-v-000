const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]; 

var destructivelyAppendKitten = (kitten) => {
  kittens.push(kitten); 
  return kittens; 
}

var destructivelyPrependKitten = (kitten) => {
  kittens.unshift(kitten); 
  return kittens;   
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift(); 
  return kittens; 
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop(); 
  return kittens; 
}

var appendKitten = (kitten) => {
  return [...kittens, kitten]; 
}

var prependKitten = kitten => {
  return [kitten, ...kittens]; 
}

var removeLastKitten = () => {
  return kittens.slice(0, -1); 
}

var removeFirstKitten = () => {
  return kittens.slice(1); 
}
