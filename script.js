//your JS code here. If required.
console.log("Start");

setTimeout(function () {
	console.log("setTimeout");
},0);

Promise.resolve().then(function () {
	console.log("Promise");
});

console.log("End");