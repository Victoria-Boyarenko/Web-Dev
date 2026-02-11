//solution 1
function unique(arr) {
  return Array.from(new Set(arr));
}

//solution 2
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

/**nap, pan -> anp
ear, era, are -> aer
cheaters, hectares, teachers -> aceehrst
... */

let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");

//solution 3
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more