var candyBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var evenStrings = ["2", "4", "6", "8", "10", "12", "14", "16", "18"]
var evenNums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
var oddNums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
var oddStrings = ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21"]
var fruits = ["apple", "pear", "grape"]
var asdf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const app = "I don't do much."
var meals = { breakfast: "eggs", lunch: "ham", dinner: "salad" }

function kittens() {
	var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name) {
	kittens.push(name);
	return kittens;
}

function destructivelyPrependKitten(name) {
	kittens.unshift(name);
	return kittens;
}

function destructivelyRemoveLastKitten() {
	kittens.pop();
	return kittens;
}

function destructivelyRemoveFirstKitten() {
	kittens.shift();
	return kittens;
}

function appendKitten(name) {
	// [...kittens, name];  (why doesn't this work?)
	return [...kittens, name];
}

function prependKitten(name) {
	return [name, ...kittens]
}

function removeLastKitten() {
	var tempKittens = [];
	kittens.forEach(function (cat) {
		tempKittens.push(cat)
	})
	tempKittens.pop();
	return tempKittens;
}

function removeFirstKitten() {
	return kittens.slice(1);
}

function capArray(array) {
	for (var i = 0; i < array.length; i++) {
		console.log(array[i].toUpperCase());
	}
}

function capObjectKeys(obj) {
	for (var i = 0; i < Object.keys(obj).length; i++) {
		console.log(Object.keys(obj)[i].toUpperCase());
	}
}

function capObjectValues(obj) {
	for (var i = 0; i < Object.keys(obj).length; i++) {
		console.log(Object.values(obj)[i].toUpperCase());
	}
}
