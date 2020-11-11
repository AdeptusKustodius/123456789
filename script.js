
let myBooks = document.body.querySelector('.myBooks');
let myFavorbooks = document.body.querySelector('.favorBooks');
let readBooks = document.body.querySelector('.readBook')
let download = document.body.querySelector('.download')

let formLogin = document.querySelector('input[name=login]');
let formFile  = document.querySelector('input[name=file]');
let formWrite = document.querySelector('input[name=writing]');


function upload(){
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    let forms = document.querySelectorAll('form'),
        statusMessage = document.createElement('div');
        localStorage.setItem('key',statusMessage);
        statusMessage.classList.add('status');
    
    forms.forEach(item => {
        let inputs = item.getElementsByTagName('input');
    
        item.addEventListener('submit', function(event) {
            event.preventDefault();
            item.appendChild(statusMessage);
    
            let request = new XMLHttpRequest();
            request.open('POST', 'item/uploadFiles/php.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            let formData = new FormData(item);
            request.send(formData);
            
            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status === 200) {
                    statusMessage.innerHTML = message.success;
                } else statusMessage.innerHTML = message.failure;
            });
    
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            }
        });
    });
// let data = new FormData();
// data.set ('textFile', formFile[0])
// data.set ('login', formLogin)
// data.set ('write', formWrite)
// fetch ('../item/uploadFiles/php.php',{ 
// method:'POST', 
// body: data }

// )
// let result;
console.log(formLogin.value);
console.log(formFile.type);
console.log(formWrite);
console.log(forms)

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