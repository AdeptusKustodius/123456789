
let myBooks = document.body.querySelector('.myBooks');
let myFavorbooks = document.body.querySelector('.favorBooks');
let readBooks = document.body.querySelector('.readBook')
let download = document.body.querySelector('.download')

let formLogin = document.querySelector('input[name=login]');
let formFile  = document.querySelector('input[name=file]');
let formWrite = document.querySelector('input[name=writing]');


function upload(){
let data = new FormData();
data.set ('textFile', formFile[0])
data.set ('login', formLogin)
data.set ('write', formWrite)
fetch ('item/uploadFiles',{ 
method:'POST', 
body: data }

)
let result;
console.log(formLogin.value);
console.log(formFile.type);
console.log(formWrite);
console.log(result)

}

function ShowMyBook(){
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