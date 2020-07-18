1. forEach VS map

The forEach() method doesn’t actually return anything. It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.

The map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.

2. Get the total score of force users only (map, reduce, filter)

	See Code.

	personnel.filter((person) => person.isForceUser)
             .map((person) => person.pilotingScore + person.shootingScore)
             .reduce((total, amount) => total + amount)


3. Display all employee names from the json data

	See Code. 

	personnel.map((person) => person.name)
