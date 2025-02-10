function greeter(person: string): string {
  return `Hello, ${person}!`;
}

function handleGreeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return greeter(person);
  } else {
    return `Hello, ${person.join(', ')}!`;
  }
}

let user = ["Jane Doe", "John Smith"];
let user2 = "Jane Doe";

console.log(handleGreeter(user)); // Correctly handles the array
console.log(handleGreeter(user2));// Correctly handles the string