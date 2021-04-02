console.log("airtable");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "key2nBLDDv42nqSC4" }).base(
    'appjePsguF6VzZEs6'
);

// get our collection base, select all the records
// specify functions that will receive the data
base('Class Demo:Music')
  .select({ 
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"})
  .eachPage(gotPageOfAlbums, gotAllAlbums);

// an empty array to hold our data
var albums = [];

// callback function that receives our data
function gotPageOfAlbums(records, fetchNextPage) {
  // add the records from this page to our array
  albums.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllAlbums(err) {
  //console.log("gotAllAlbums()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogAlbums();
  showAlbums();
}

// just loop through the books and console.log them
function consoleLogAlbums() {
  //console.log("consoleLogAlbums()");
  albums.forEach(album => {
    //console.log("Albums:", album);
    console.log( "Album titles:", album.fields.album_title)
    console.log( "Artist:", album.fields.artist)
    console.log( "Album Cover:", album.fields.album_artwork[0].url)
  });
}

// look through our airtable data, create elements
function showAlbums() {
  //console.log("showAlbums()");
  albums.forEach(album => {
    // create container for each album
    var albumContainer = document.createElement("div");
    albumContainer.classList.add("album-container");
    document.querySelector(".container").append(albumContainer);

     // add album cover
     var albumImage = document.createElement("img");
     albumImage.classList.add("album-artwork");
     albumImage.src =album.fields.album_artwork[0].url;
     albumContainer.append(albumImage);

    // add album titles
    var albumTitle = document.createElement("h2");
    albumTitle.classList.add("album-title");
    albumTitle.innerText = album.fields.album_title;
    albumContainer.append(albumTitle);

    // add artist name
    var nameOfArtist = document.createElement("h3");
    nameOfArtist.classList.add("artist");
    nameOfArtist.innerText = album.fields.artist;
    albumContainer.append(nameOfArtist);

   

});
}


  