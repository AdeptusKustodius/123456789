"use strict";

var myBooks = document.body.querySelector('.myBooks');
var myFavorbook = document.body.querySelector('.favorBooks');
var readBook = document.body.querySelector('.readBook');

function uploadImage(event) {
  var reader = new FileReader();
  var name = event.target.files[0].name;
  reader.addEventListener("load", function () {
    if (this.result && localStorage) {
      window.localStorage.setItem(name, this.result);
    } else {
      alert('не работает блеать!!!!');
    }
  });
  reader.readAsDataURL(event.target.files[0]);
}

function ShowMyBook() {
  var img = document.querySelector('.images');

  if (myBooks.contains(img)) {
    myBooks.prepend(img);
  } else if (myBooks.contains(img) == false) {
    for (var i = 0; i < window.localStorage.length; i++) {
      var res = window.localStorage.getItem(window.localStorage.key(i));
      var image = new Image();
      image.src = res;
      image.setAttribute('class', 'images');
      myBooks.append(image);
    }
  }

  readBook.style.display = 'none';
  myFavorbook.style.display = 'none';
}