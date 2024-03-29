let personName: string = "Newton";
let lowerCaseName: string = personName.toLowerCase();
let upperCaseName: string = personName.toUpperCase();
let titleCaseName: string = personName.replace(/\b\w/g, (char) => char.toUpperCase());

console.log("Original Name:", personName);
console.log("Lowercase Name:", lowerCaseName);
console.log("Uppercase Name:", upperCaseName);
console.log("Titlecase Name:", titleCaseName);
