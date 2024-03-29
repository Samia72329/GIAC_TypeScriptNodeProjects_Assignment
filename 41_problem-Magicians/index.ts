/*
Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array.
*/

function show_magicians(magicianNames : string[]) : void {
    
    for (let element of magicianNames){
        console.log(element);
    }
}

const print_magicians = (magicianNames : string[]) : void =>  {
    for (let i = 0; i < magicianNames.length; i++) {
        console.log(`Name ${i + 1}: ${magicianNames[i]}`);
    }
}

let magician_names: string[] = ["Maleficient", "Harry Porter", "Gandalf", "Merlin", "Doctor Strange", "The White Witch"];
show_magicians(magician_names);
console.log();
print_magicians(magician_names);
