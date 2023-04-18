// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
    return destructivelyAppendCat
};
function destructivelyPrependCat(name) {
    cats.unshift(name)
    return destructivelyPrependCat
};
function destructivelyRemoveLastCat() {
    cats.pop()
    return destructivelyRemoveLastCat
};
function destructivelyRemoveFirstCat() {
    cats.shift()
    return destructivelyRemoveFirstCat
};

function appendCat(name) {
    appendCat = [...cats, name]
    return appendCat
};
function prependCat(name) {
    prependCat = [name, ...cats]
    return prependCat
};
function removeLastCat() {
    removeLastCat = cats.slice(0, -1)
    return removeLastCat
};
function removeFirstCat() {
    removeFirstCat = cats.slice(1)
    return removeFirstCat
};
