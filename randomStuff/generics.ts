interface Comparable<T> {
	compareTo(other: T): number;
}

class Person implements Comparable<Person> {
	firstName: string;
	lastName: string;
	
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	compareTo(other: Person) {
		var lastNameCompare: number = this.lastName.localeCompare(other.lastName);
		if(lastNameCompare === 0) {
			return this.firstName.localeCompare(other.firstName);
		}
		return lastNameCompare;
	}
}

class Thingy implements Comparable<Thingy> {
	
	id: string;
	
	constructor(id: string) {
		this.id = id;
	}
	
	compareTo(other: Thingy) {
		// All thins are the same
		return 0;
	}
}

function compare<T>(t: Comparable<T>, u: T): number {
	return t.compareTo(u);
}

var max = new Person("Max", "Muster");
var peter = new Person("Peter", "Muster");
var thingy = new Thingy("someId");

console.log(compare(max, peter));

// The following line of code will not work
// console.log(compare(max, thingy));