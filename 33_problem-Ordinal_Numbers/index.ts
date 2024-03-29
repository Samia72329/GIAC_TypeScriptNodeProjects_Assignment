/*
33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most
ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your
output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate
line.
*/ 



function ordinalNumbers(num : number[])
{
 for (let element of num){
    if (element == 1 ) 
    console.log(element+"st");
    else if (element == 2 ) 
    console.log(element+"nd");
    else if (element == 3 ) 
    console.log(element+"rd");
    else 
    console.log(element+"th");
 }
}

function ordinalNumbersforEach(num : number[])
{
 num.forEach((element): void => {
    if (element == 1 ) 
    console.log(element+"st");
    else if (element == 2 ) 
    console.log(element+"nd");
    else if (element == 3 ) 
    console.log(element+"rd");
    else 
    console.log(element+"th");
   return;
 }
 )
}


let numberArray : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.time("ordinalNumbers")
ordinalNumbers(numberArray);
console.timeEnd("ordinalNumbers")
console.time("ordinalNumbersforEach")
ordinalNumbersforEach(numberArray);
console.timeEnd("ordinalNumbersforEach")