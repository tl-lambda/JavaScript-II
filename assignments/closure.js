// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const closure = () => {
	let name = 'dude'

	function greetDude(){
		console.log("what up " + name)
	}
	return greetDude();
}

closure()


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0
  return () => {
    counter = counter + 1
    console.log(counter)
    return counter
  }
};

let aCounter = counter()
aCounter()
aCounter()
aCounter()

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let x = 0;
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let newObj = {};
  newObj.increment = function(){
  	x++;
  	return x;
  }

  newObj.decrement = function(){
  	x--;
  	return x;
  }

  return newObj
};

let newCounter = counterFactory();
console.log(newCounter.decrement());
console.log(newCounter.decrement())
console.log(newCounter.increment())







