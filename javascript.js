//Loop through gallery.js and create an album div for each

function populatePage() {
    var i;
    for (i = 0; i < gallery.length; i++) {
        createAlbum(gallery[i]);
        console.log(gallery.length);
    }
}

function createAlbum (data){
    console.log("One round");
    var album = document.createElement("SECTION");
    album.classList.add("album");
    var id = data.year + data.locale;
    album.setAttribute("id", id);
    var albumFront = document.createElement("DIV");
    albumFront.classList.add("albumfront");
    var locale = document.createElement("H2");
    var year = document.createElement("H2");
    locale.appendChild(document.createTextNode(data.locale));
    year.appendChild(document.createTextNode(data.year));
    albumFront.appendChild(locale);
    albumFront.appendChild(year);
    //List photos
    album.appendChild(albumFront);
    var photos = data.photos;
    for (i = 0; i < photos.length; i++) {
        var figure = document.createElement("FIGURE");
        album.appendChild(figure);
        var img = document.createElement("IMG");
        img.classList.add("gallery");
        img.src=photos[i].file;
        figure.appendChild(img);
        var fc = document.createElement("FIGCAPTION");
        fc.appendChild(document.createTextNode(photos[i].caption));
        figure.appendChild(fc); //Figcaption code based on w3schools example
    }
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(album);
}

/*
This did not work as the albumID, though assigned and passed correctly,
does not seem to have been registered by the DOM. Ask D and I for thier opinion.
function createFigure (photodata, albumID) {
    window.alert(albumID); //
    var figure = document.createElement("FIGURE");
    figure.classList.add("photo");
    //document.getElementById(albumID).appendChild(figure);
}*/

document.addEventListener("DOMContentLoaded", populatePage);

