// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat () {
    return cats.push("Ralph");
};

function destructivelyPrependCat (){
    return cats.unshift("Bob");
};

function destructivelyRemoveFirstCat (){
    return cats.shift()
};

function destructivelyRemoveLastCat (){
    return cats.pop();
};

function appendCat(){
    const catsCopy = [...cats]
    catsCopy.push("Broom");
    return catsCopy;
};

function prependCat (){
   const catsCopy = [...cats]
    catsCopy.unshift("Arnold");
    return catsCopy;
};

function removeLastCat (){
    return cats.slice(0, 2)
};

function removeFirstCat (){
    return cats.slice(1, 3)
};