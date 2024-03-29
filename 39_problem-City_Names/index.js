/*
39. City Names: Write a function called city_country() that takes in the name of a city and its
country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
;
var a = city_country("Karachi", "Pakistan");
console.log(a); //output: Karachi, Pakistan
var b = city_country("Istanbul", "Turkey");
console.log(b); //output: Istanbul, Turkey
var c = city_country("Paris", "France");
console.log(c); //output: Paris, France
var d = city_country("Mascow", "Russia");
console.log(d); //output: Mascow, Russia
