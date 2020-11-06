
let myBooks = document.body.querySelector('.myBooks');
let myFavorbook = document.body.querySelector('.favorBooks');
let readBook = document.body.querySelector('.readBook')
function uploadImage(event){
    let reader = new FileReader();
    let name = event.target.files[0].name;
    reader.addEventListener("load",function(){
        if(this.result && localStorage){
            window.localStorage.setItem(name,this.result);
        }else{
            alert('не работает блеать!!!!');
        }

    });
    reader.readAsDataURL(event.target.files[0]);
}
function ShowMyBook(){
    let img = document.querySelector('.images');
    if(myBooks.contains(img)){
        myBooks.prepend(img);
    }else if (myBooks.contains(img)==false)
     {

    for (let i = 0; i < window.localStorage.length; i++) {
        let res = window.localStorage.getItem(window.localStorage.key(i));	
        let image = new Image();
        image.src = res;
        image.setAttribute('class','images');
        myBooks.append(image);
}
}
    readBook.style.display = 'none';
    myFavorbook.style.display='none';
}

