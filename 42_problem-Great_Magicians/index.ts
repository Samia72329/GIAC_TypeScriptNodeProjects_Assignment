function show_magicians(arrayOfNames : string[]) : void {
    
    for (let element of arrayOfNames){
        console.log(element);
    }
}

function make_great(magicianNames: string[]): string[] {
    return magicianNames.map((magicianNames) => `The Great ${magicianNames}`);
    //Explanation:
    //map() returns a new array with the results of calling a provided function on every element of an array.
    //The function is called once for each element in the array. 
    //In this case, it takes one parameter, "magicianNames", which represents the current value being processed.
    //In this case, we are adding "The Great" to the beginning of each name using template literals.
}

let magicians: string[] = ["Maleficient", "Harry Porter", "Gandalf", "Merlin", "Doctor Strange", "The White Witch"];
let greatMagicians: string[] = make_great(magicians);
show_magicians(greatMagicians);


