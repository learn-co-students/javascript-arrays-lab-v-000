const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var kits = new Array()
  for (var i = 0; i < kittens.length; i++) {
    kits.push(kittens[i])
  }
  kits.push(name)
  return kits
}

function prependKitten(name) {
  var kits = new Array()
  for (var i = 0; i < kittens.length; i++) {
    kits.push(kittens[i])
  }
  kits.unshift(name)
  return kits
}

function removeLastKitten() {
  var kits = new Array()
  for (var i = 0; i < kittens.length; i++) {
    kits.push(kittens[i])
  }
  kits.pop()
  return kits
}

function removeFirstKitten() {
  var kits = new Array()
  for (var i = 0; i < kittens.length; i++) {
    kits.push(kittens[i])
  }
  kits.shift()
  return kits
}
