/*
21. They think of something you could store in a TypeScript Object. Write a program that creates
Objects containing these items.
*/
var studentData = {
    name: "Bustin Jieber",
    class: "9th Grade",
    rollNo: 23,
    favSub: "Sindhi",
    isSinger: true,
};
for (var key in studentData) {
    console.log("".concat(key, ":"), studentData[key]);
}
