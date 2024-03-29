/*
. Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object
containing these two pieces of information. Use the function to make three dictionaries
representing different albums. Print each return value to show that Objects are storing the
album information correctly. Add an optional parameter to make_album() that allows you to
store the number of tracks on an album. If the calling line includes a value for the number of
tracks, add that value to the album’s Object. Make at least one new function call that includes
the number of tracks on an album.
*/
// in object key is called property
// album is an object literal with three properties
function make_album(artistName, albumTitle, numOfTracks) {
    if (numOfTracks === void 0) { numOfTracks = 0; }
    return {
        artistName: artistName,
        albumTitle: albumTitle,
        numOfTracks: numOfTracks,
    }; //  "as album" is telling TypeScript to consider this object as conforming to the album interface.
}
var album1 = make_album("Adele", "21");
console.log(album1.artistName);
console.log(album1.albumTitle);
var album2 = make_album("Taylor Swift", "Red");
console.log(album2.artistName);
console.log(album2.albumTitle);
var album3 = make_album("One direction", "Up all Night");
console.log(album3.artistName);
console.log(album3.albumTitle);
var album4 = make_album("BTS", "You never walk alone");
console.log(album4.artistName);
console.log(album4.albumTitle);
var album5 = make_album("Micheal Jackson", "Thriller", 9);
console.log(album5.artistName);
console.log(album5.albumTitle);
console.log(album5.numOfTracks);
var car = { honda: "civic", bmw: "M4", };
console.log(car["honda"]);
