"use strict";

var myBooks = document.body.querySelector('.myBooks');
var myFavorbooks = document.body.querySelector('.favorBooks');
var readBooks = document.body.querySelector('.readBook');
var download = document.body.querySelector('.download');

function uploadImage(event) {
  var reader = new FileReader();
  var name = event.target.files[0].name;
  reader.addEventListener("load", function () {
    if (this.result && localStorage) {
      window.localStorage.setItem(name, this.result);
    } else {
      alert('не работает ');
    }
  });
  reader.readAsDataURL(event.target.files[0]);
  console.log('unload');
}

function ShowMyBook() {
  var img = document.querySelector('.fDiv');

  if (myBooks.contains(img)) {
    myBooks.prepend(img);
  } else if (myBooks.contains(img) == false) {
    for (var i = 0; i < window.localStorage.length; i++) {
      var res = window.localStorage.getItem(window.localStorage.key(i));
      var image = new Image();
      var btnlks = document.createElement("button");

      var _read = document.createElement("button");

      var fdiv = document.createElement("div");
      fdiv.innerHTML = "";
      _read.innerHTML = "Read Book";
      btnlks.innerHTML = "like!";
      fdiv.setAttribute('class', 'fDiv thisBook');

      _read.setAttribute('class', 'readBtn');

      _read.setAttribute('id', 'read');

      _read.setAttribute('onclick', 'read()');

      btnlks.setAttribute('class', 'liksBtn');
      btnlks.setAttribute('id', 'like');
      btnlks.setAttribute('onclick', 'likes()');
      image.src = res;
      image.setAttribute('class', 'images');
      myBooks.append(fdiv);
      fdiv.append(image);
      fdiv.append(btnlks);
      fdiv.append(_read);
    }
  }

  myBooks.style.display = 'flex';
  readBooks.style.display = 'none';
  myFavorbooks.style.display = 'none';
  download.style.display = 'none';
}

function read() {
  var parent = document.querySelector('.thisBook');
  var elem1 = parent.querySelector('.images');
  var clon = elem1.cloneNode(true);
  var NewDiv = document.createElement("div");
  NewDiv.innerHTML = "";
  readBooks.append(NewDiv);
  NewDiv.setAttribute('class', 'fDiv read');
  NewDiv.append(clon);
  console.log(2);

  function replace() {
    console.log('алярма!');
    var frame = document.createElement('iframe');
    frame.setAttribute('src', 'clon');
    frame.setAttribute('name', 'readingFrame');
    frame.innerHTML = NewDiv.append(clon);
    NewDiv.parentNode.replaceChild(frame, NewDiv);
  }

  setTimeout(replace(), 100);
}

function likes() {
  var parent = document.querySelector('.thisBook');
  var elem1 = parent.querySelector('.images');
  var elem2 = parent.querySelector('.readBtn');
  var clon2 = elem2.cloneNode(true);
  var clon = elem1.cloneNode(true);
  var NewDiv = document.createElement("div");
  NewDiv.innerHTML = "";
  myFavorbooks.append(NewDiv);
  NewDiv.setAttribute('class', 'fDiv');
  NewDiv.append(clon);
  NewDiv.append(clon2);
  console.log(1);
}

function down() {
  myBooks.style.display = 'none';
  myFavorbooks.style.display = 'none';
  readBooks.style.display = 'none';
  download.style.visibility = 'visible';
  download.style.display = 'flex';
}

function readBook() {
  myBooks.style.display = 'none';
  myFavorbooks.style.display = 'none';
  readBooks.style.display = 'flex';
  download.style.visibility = 'hidden';
}

function ShowMyFavorBook() {
  myBooks.style.display = 'none';
  readBooks.style.display = 'none';
  myFavorbooks.style.display = 'flex';
  download.style.visibility = 'hidden';
}

function checket1() {
  var a = document.querySelector('.showMe2');
  var b = document.querySelector('.showMe1');
  b.style.visibility = 'visible';
  a.style.visibility = 'hidden';
}

function checket2() {
  var c = document.querySelector('.showMe1');
  var d = document.querySelector('.showMe2');
  d.style.visibility = 'visible';
  c.style.visibility = 'hidden';
}

checket1();