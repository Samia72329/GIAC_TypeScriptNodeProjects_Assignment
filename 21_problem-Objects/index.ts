/*
21. They think of something you could store in a TypeScript Object. Write a program that creates
Objects containing these items.
*/

let studentData :{name: string, class: string, rollNo : number, favSub : string, isSinger : boolean}= {
    name : "Bustin Jieber",
    class : "9th Grade",
    rollNo : 23,
    favSub : "Sindhi",
    isSinger : true,
}

for (let key in studentData){
    console.log(`${key}:`,studentData[key]);
}