const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

planets.splice(0, 1);
planets.push('Saturn');
planets.unshift('Mercury');

console.log(planets);

