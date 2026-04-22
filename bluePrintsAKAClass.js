
```

class User {
  name;        // public
  #age;        // private

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  get age() {   // public method to access private data
    return this.#age;
  }
  
  set age(value){
	if(value<0){
		console.log('Age cannto be negative')
	}
	
	else{
		value = this.#age
	}
  }
  
  
}

const user1 = new User("Sanyukta", 24);

console.log(user1.name);     // ✅ Sanyukta (public)
console.log(user1.age()); // ✅ 24 (access via method)

console.log(user1.#age);     // ❌ Error (private)
```