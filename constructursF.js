class Human {
	#name;
	#age;


	constructor(newName, newAge){
	this.#age = newAge;
	this.#name = newName;
}
	get nameAndAge(){
	return {
		name: this.#name,
		age: this.#age
	}
}
	


//Setters can take only one parameter
	set nameAndAge(value){
		const {name,age} = value;
	if (typeof (name) == "string") {
		this.#name = name;
	}

	else if (age > 0) {
		this.#age = age;
	}
	else {
		console.log('Invalid name or age');
	}
}
	
	
	
}


let obj = new Human('San', 12);
console.log(obj.nameAndAge);
