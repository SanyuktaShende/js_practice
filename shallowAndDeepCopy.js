```
In JavaScript, shallow copy and deep copy describe how data (especially objects & arrays) is duplicated.

----------Shallow Copy

---------A shallow copy copies only the top-level values.
If there are nested objects, it copies their reference (address), not the actual data.

const original = {
  name: "Sanyukta",
  address: { city: "Mumbai" }
};

const copy = { ...original };

copy.name = "Sam";
copy.address.city = "Pune";

console.log(original.name);        // "Sanyukta" ✅ (independent)
console.log(original.address.city); // "Pune" ❌ (changed!)


-------👉 Why?

name is primitive → copied by value
address is object → copied by reference

------------

-----------Deep Copy

------------- A deep copy creates a completely independent clone, including all nested objects.

const original = {
  name: "Sanyukta",
  address: { city: "Mumbai" }
};

const copy = structuredClone(original);

copy.address.city = "Pune";

console.log(original.address.city); // "Mumbai" ✅ (unchanged)

