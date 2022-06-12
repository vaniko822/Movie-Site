let switcher = document.querySelector('#switch');
let checked = JSON.parse(localStorage.getItem("checkbox"));
document.getElementById("switch").checked = checked;

switcher.addEventListener('click', function(){
    localStorage.setItem("checkbox", switcher.checked);

    if(switcher.checked){
        home.innerText = 'Home';
        films.innerText = 'Movies';
        actors.innerText = 'Actors';
        contact.innerText = 'Contact';
        series.innerText = 'Series';
        contacttext.innerText = 'Contact';
        inputusername.innerText = 'Enter a name';
        sendbutton.innerText = 'Send';
        inputusername.placeholder = 'Enter a name';
        inputtext.placeholder = 'Enter a text';
    } else {
        home.innerText = 'მთავარი';
        films.innerText = 'ფილმები';
        actors.innerText = 'მსახიობები';
        contact.innerText = 'კონტაქტი';
        series.innerText = 'სერიალები';
        contacttext.innerText = 'კონტაქტი';
        inputusername.innerText = 'შეიყვანეთ სახელი';
        sendbutton.innerText = 'გაგზავნა';
        inputusername.placeholder = 'შეიყვანეთ სახელი';
        inputtext.placeholder = 'შეიყვანეთ ტექსტი';
    }
})

if(checked == true){
    home.innerText = 'Home';
    films.innerText = 'Movies';
    actors.innerText = 'Actors';
    contact.innerText = 'Contact';
    series.innerText = 'Series';
    contacttext.innerText = 'Contact';
    inputusername.innerText = 'Enter a name';
    sendbutton.innerText = 'Send';
    inputusername.placeholder = 'Enter a name';
    inputtext.placeholder = 'Enter a text';
}