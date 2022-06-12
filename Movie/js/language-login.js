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
        logintext.innerText = 'Login';
        forgetpassword.innerText = 'Forget password?';
        loginbuttontext.innerText = 'Login in';
        noregister.innerText = 'Not registered yet?';
        registerbutton.innerText = 'Register';
        inputemail.placeholder = 'Enter an email';
        inputpassword.placeholder = 'Enter a password';
    } else {
        home.innerText = 'მთავარი';
        films.innerText = 'ფილმები';
        actors.innerText = 'მსახიობები';
        contact.innerText = 'კონტაქტი';
        series.innerText = 'სერიალები';
        logintext.innerText = 'ავტორიზაცია';
        forgetpassword.innerText = 'დაგავიწყდა პაროლი?';
        loginbuttontext.innerText = 'შესვლა';
        noregister.innerText = 'ჯერ კიდევ არ ხარ რეგისტრირებული?';
        registerbutton.innerText = 'რეგისტრაცია';
        inputemail.placeholder = 'შეიყვანეთ ელ.ფოსტა';
        inputpassword.placeholder = 'შეიყვანეთ პაროლი';
    }
})

if(checked == true){
    home.innerText = 'Home';
    films.innerText = 'Movies';
    actors.innerText = 'Actors';
    contact.innerText = 'Contact';
    series.innerText = 'Series';
    logintext.innerText = 'Login';
    forgetpassword.innerText = 'Forget password?';
    loginbuttontext.innerText = 'Login in';
    noregister.innerText = 'Not registered yet?';
    registerbutton.innerText = 'Register';
    inputemail.placeholder = 'Enter an email';
    inputpassword.placeholder = 'Enter a password';
}