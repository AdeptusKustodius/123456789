
let myBooks = document.body.querySelector('.myBooks');
let myFavorbooks = document.body.querySelector('.favorBooks');
let readBooks = document.body.querySelector('.readBook')
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
    let img = document.querySelector('.fDiv');
    if(myBooks.contains(img)){
        myBooks.prepend(img);
    }else if (myBooks.contains(img)==false)
     {

    for (let i = 0; i < window.localStorage.length; i++) {
        let res = window.localStorage.getItem(window.localStorage.key(i));	 
        let image = new Image();
        let btnlks = document.createElement("button");
        let read = document.createElement("button")
        let fdiv = document.createElement("div");
        fdiv.innerHTML = "";
        read.innerHTML = "Read Book"
        btnlks.innerHTML = "like!";
        fdiv.setAttribute('class','fDiv thisBook');
        read.setAttribute('class','readBtn');
        read.setAttribute('id','read');
        read.setAttribute('onclick','read()');
        btnlks.setAttribute('class','liksBtn');
        btnlks.setAttribute('id','like');
        btnlks.setAttribute('onclick','likes()');
        image.src = res;
        image.setAttribute('class','images');
        myBooks.append(fdiv)
        fdiv.append(image);
        fdiv.append(btnlks);
        fdiv.append(read);
}


}
    myBooks.style.display = 'flex';
    readBooks.style.display = 'none';
    myFavorbooks.style.display ='none';
}
function read(){
    let parent = document.querySelector('.thisBook');
    let elem1 =parent.querySelector('.images');
    let clon = elem1.cloneNode(true);
    let NewDiv = document.createElement("div");
    NewDiv.innerHTML=""
    readBooks.append(NewDiv);
    NewDiv.setAttribute('class','fDiv read')
    NewDiv.append(clon);
    console.log(2)

}

function likes(){
    let parent = document.querySelector('.thisBook');
    let elem1 =parent.querySelector('.images');
    let elem2= parent.querySelector('.readBtn');
    let clon2 = elem2.cloneNode(true);
    let clon = elem1.cloneNode(true);
    
    let NewDiv = document.createElement("div");
    NewDiv.innerHTML=""
    myFavorbooks.append(NewDiv);
    NewDiv.setAttribute('class','fDiv')
    NewDiv.append(clon);
    NewDiv.append(clon2);
    console.log(1)


}
function readBook(){
    myBooks.style.display = 'none';
    myFavorbooks.style.display='none';
    readBooks.style.display = 'flex';
}
function ShowMyFavorBook(){
    myBooks.style.display = 'none';
    readBooks.style.display='none';
    myFavorbooks.style.display = 'flex';
}