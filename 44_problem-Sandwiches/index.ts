/*
44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The
function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three
times, using a different number of arguments each time.
*/

function sandwichItems(itemsArray: string[]) : void{
console.log("Order Summary:")
itemsArray.forEach((element :string , index:number)=>{console.log(`${index+1}.${element}`)});
return;
}
sandwichItems(["tomato", "lettuce", "chicken petty", "cheese", "onions"]);
sandwichItems(["chilli", "lettuce", "beef petty", "garlic", "onions"]);
sandwichItems(["lettuce", "garlic", "vegetable petty", "cheese", "onions", "sauce"]);
