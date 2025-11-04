let person: [string, number] = ["Alexander", 19];
person[1] = 18;
person = ["Dachi", 18];

console.log(person);

// All of it worked. Typescript tuples are mutable