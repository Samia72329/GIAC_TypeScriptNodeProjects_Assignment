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

interface album { //album object
    artistName : string; // 1st property of object literal "album"
    albumTitle : string; // 2nd property of object literal "album"
    numOfTracks: number; // 3rd property of object literal "album"
} //interface  definition 
// in object key is called property
// album is an object literal with three properties
function make_album(artistName: string, albumTitle: string, numOfTracks : number = 0 ) : album {
    return {
        artistName: artistName,
        albumTitle: albumTitle,
        numOfTracks: numOfTracks,
    } as album; //  "as album" is telling TypeScript to consider this object as conforming to the album interface.
}

let album1 = make_album("Adele", "21");
console.log(album1.artistName);
console.log(album1.albumTitle);
let album2 = make_album("Taylor Swift", "Red");
console.log(album2.artistName);
console.log(album2.albumTitle);
let album3 = make_album("One direction", "Up all Night");
console.log(album3.artistName);
console.log(album3.albumTitle);
let album4 = make_album("BTS", "You never walk alone");
console.log(album4.artistName);
console.log(album4.albumTitle);
let album5 = make_album("Micheal Jackson", "Thriller", 9 );
console.log(album5.artistName);
console.log(album5.albumTitle);
console.log(album5.numOfTracks);


