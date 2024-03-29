/*
 Cars: Write a function that stores information about a car in a Object. The function should
always receive a manufacturer and a model name. It should then accept an arbitrary number
of keyword arguments. Call the function with the required information and two other namevalue pairs, such as a color or an optional feature. Print the Object that’s returned to make
sure all the information was stored correctly.
*/



interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow arbitrary additional properties
}

function createCar(manufacturer: string, model: string, ...args: [string, any][]): Car {
    let car: Car = { manufacturer, model };
    args.forEach(([key, value]) => {
        car[key] = value; 
    });
    return car;
}

// Create a car object with manufacturer, model, color, and optional feature
let myCar: Car = createCar("Toyota", "Camry", ["color", "blue"], ["optionalFeature", "sunroof"]);
let myCar2: Car = createCar("BMW", "M4", ["color", "Purple"], ["optionalFeature", "sunroof"]);

console.log(myCar);
console.log(myCar2);
