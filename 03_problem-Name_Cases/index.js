var personName = "Newton";
var lowerCaseName = personName.toLowerCase();
var upperCaseName = personName.toUpperCase();
var titleCaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Original Name:", personName);
console.log("Lowercase Name:", lowerCaseName);
console.log("Uppercase Name:", upperCaseName);
console.log("Titlecase Name:", titleCaseName);
