
let myBooks = document.body.querySelector('.myBooks');
let myFavorbooks = document.body.querySelector('.favorBooks');
let readBooks = document.body.querySelector('.readBook')
let download = document.body.querySelector('.download')

function uploadText() {
    let nameText = document.querySelector("input[type=text]").value;
    let someText = document.querySelector("textarea[name=writing]").value;
    localStorage.setItem("name",nameText);
    localStorage.setItem("text",someText);
    console.log('test')
    console.log(nameText)
    console.log(someText)
}
function uploadFile() {
    let file = document.querySelector("input[type=file]").value;
    window.localStorage.setItem(name,this.file);
    console.log(file)
}

    
    function ShowMyBook(){    
        for (let i = 0; i < window.localStorage.length; i++) {
            let res = window.localStorage.getItem(window.localStorage.key(i));	 
            let image = new  Image();
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
        myBooks.style.display = 'flex';
        readBooks.style.display = 'none';
        myFavorbooks.style.display ='none';
        download.style.display ='none';
    }

function read(){
    let keys1 = localStorage.getItem('name');
    let keys2 = localStorage.getItem('text');
    let parent = document.querySelector('.thisBook');
    let elem1 = parent.querySelector('.images');
    let clon =   elem1.cloneNode(true);
    let NewDiv = document.createElement("div");
    NewDiv.innerHTML=""
    readBooks.append(NewDiv);
    NewDiv.setAttribute('class','fDiv read')
    NewDiv.append(keys1);
    NewDiv.append(keys2)
    console.log(2)
function replace(){

    console.log('алярма!')
    let frame = document.createElement('iframe');
    frame.setAttribute('src', 'clon')
    frame.setAttribute('name','readingFrame')
    frame.innerHTML = NewDiv.append(clon);
    NewDiv.parentNode.replaceChild(frame, NewDiv);
}
 setTimeout(replace(), 100);
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
function down() {
    myBooks.style.display = 'none';
    myFavorbooks.style.display='none';
    readBooks.style.display = 'none';
    download.style.visibility = 'visible';
    download.style.display ='flex';
}
function readBook(){

    myBooks.style.display = 'none';
    myFavorbooks.style.display='none';
    readBooks.style.display = 'flex';
    download.style.visibility = 'hidden';
    download.style.display='none';
}
function ShowMyFavorBook(){
    myBooks.style.display = 'none';
    readBooks.style.display='none';
    myFavorbooks.style.display = 'flex';
    download.style.visibility = 'hidden';
    download.style.display='none';
}
function checket1(){
    let a=document.querySelector('.showMe2');
    let b=document.querySelector('.showMe1');
    b.style.visibility='visible';
    a.style.visibility='hidden';

    }
    function checket2() {
        let c=document.querySelector('.showMe1');
        let d=document.querySelector('.showMe2');
        d.style.visibility='visible';
        c.style.visibility='hidden';
    }
    checket1()