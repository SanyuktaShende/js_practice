```
1. Shallow Copy

👉 Copies only the top-level properties
👉 Nested objects are still shared (same reference)


const user = {
  name: "Sanyukta",
  address: { city: "Mumbai" }
};

const copy = { ...user }; // spread operator

copy.name = "San";
copy.address.city = "Pune";

console.log(user.name); // Sanyukta ✅
console.log(user.address.city); // Pune ❌ (changed!)

-------------------------------------------------------------------------------------------
2. Deep Copy

👉 Copies everything including nested objects
👉 Completely independent copy

const user = {
  name: "Sanyukta",
  address: { city: "Mumbai" }
};

const deepCopy = structuredClone(user);

deepCopy.address.city = "Pune";

console.log(user.address.city); // Mumbai ✅ (unchanged)

------------------------------------------------------------------

What is Object.assign()?

It’s a method used to copy properties from one object to another.

--- Syntax
Object.assign(target, source)

const user = {
  name: "Sanyukta",
  age: 24
};

const copy = Object.assign({}, user);

console.log(copy); // { name: 'Sanyukta', age: 24 }

----------------------------------------------------------------------------

Iteration

Basic idea

You loop through the object and copy each key-value pair into a new object.

creates a shallow copy

const user = {
  name: "Sanyukta",
  age: 24
};

const copy = {};

for (let key in user) {
  copy[key] = user[key];
}

console.log(copy); // { name: 'Sanyukta', age: 24 }



