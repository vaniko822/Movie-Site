/* Navbar */
let navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function(event){
    if(document.documentElement.scrollTop > 300){
        navbar.setAttribute("id", "scrolledNav");
    } else {
        navbar.removeAttribute("id", "scrolledNav");
    }
})

/* Register Form */
function emailchecker() {
    let inputemailr = document.getElementById('inputemailr').value;
    var format = /[@.]/g;

    if(format.test(inputemailr)){
        alert('ელ.ფოსტა შეიცავს სიმბოლოებს');
    } else {
        alert('ელ.ფოსტა არ შეიცავს სიმბოლოებს');
    }
}

function passwordvalidate() {
    let inputpassword = document.getElementById('inputpasswordr').value;
    let inputrepassword = document.getElementById('inputrepasswordr').value;

    if(inputpassword != inputrepassword){
        alert('არ ემთხვევა პაროლები');
    }
    else {
        return true;
    }
}

function passwordchecker() {
    let inputpassword = document.getElementById('inputpasswordr').value;

    var weak = /[a-zA-Z]/g;
    var medium = /[a-zA-Z][0-9]/g;
    var strong = /[A-Z][a-z][0-9]/g;
    var strongest = /[A-Z][a-z][0-9][!@#$%^&*]/g;

    if(strongest.test(inputpassword)){
        alert('პაროლი ძალიან ძლიერია');
    }
    else if(strong.test(inputpassword)) {
        alert('პაროლი ძლიერია');
    }
    else if(medium.test(inputpassword)) {
        alert('პაროლი საშუალო');
    }
    else if(weak.test(inputpassword)){
        alert('პაროლი სუსტია');
    }
    else {
        return false;
    }
}

/* ფუნქციონალი promiseებით,
    ეს ფუნქცია გამოვიყენე მინი თამაშის შესაქმნელად,
    რომელსაც ჰქვია გამოცნობანა. უნდა გამოიცნო მსახიობი.
    ფოტოს მიხედვით inputში ჩაწერ მის სრულ სახელს და დაგიწერს
    გამოიცანი თუ ვერა.
*/
async function myDisplay() {
    let gift = document.getElementById('gift').value;
    var promise = new Promise(function(resolve, reject) {  
    if (gift == 'Tom cruise' || gift == 'ტომ კრუზი' || gift == 'tom cruise') {
        resolve("შენ გამოიცანი!");
    }
    else {
        reject(Error("ვერ გამოიცანი"));
    }
    });

    promise.then(function(result) {
        console.log(result); // "Stuff worked!"
        document.getElementById('display').innerHTML = 'შენ გამოიცანი!';
    }, function(err) {
        console.log(err); // Error: "It broke"
        document.getElementById('display').innerHTML = 'შენ ვერ გამოიცანი!';
    });
}

async function myDisplay1() {
    let gift1 = document.getElementById('gift1').value;
    var promise1 = new Promise(function(resolve, reject) {  
    if (gift1 == 'Johnny Depp' || gift1 == 'ჯონი დეპი' || gift1 == 'johnny depp') {
        resolve("შენ გამოიცანი!");
    }
    else {
        reject(Error("ვერ გამოიცანი"));
    }
    });

    promise1.then(function(result) {
        console.log(result); // "Stuff worked!"
        document.getElementById('display1').innerHTML = 'შენ გამოიცანი!';
    }, function(err) {
        console.log(err); // Error: "It broke"
        document.getElementById('display1').innerHTML = 'შენ ვერ გამოიცანი!';
    });
}

async function myDisplay2() {
    let gift2 = document.getElementById('gift2').value;
    var promise2 = new Promise(function(resolve, reject) {  
    if (gift2 == 'Scarlett Johansson' || gift2 == 'სკარლეტ იოჰანსონი' || gift2 == 'scarlett johansson') {
        resolve("შენ გამოიცანი!");
    }
    else {
        reject(Error("ვერ გამოიცანი"));
    }
    });

    promise2.then(function(result) {
        console.log(result); // "Stuff worked!"
        document.getElementById('display2').innerHTML = 'შენ გამოიცანი!';
    }, function(err) {
        console.log(err); // Error: "It broke"
        document.getElementById('display2').innerHTML = 'შენ ვერ გამოიცანი!';
    });
}

async function myDisplay3() {
    let gift3 = document.getElementById('gift3').value;
    var promise3 = new Promise(function(resolve, reject) {  
    if (gift3 == 'Jason Statham' || gift3 == 'ჯეისონ სტეტჰემი' || gift3 == 'jason statham') {
        resolve("შენ გამოიცანი!");
    }
    else {
        reject(Error("ვერ გამოიცანი"));
    }
    });

    promise3.then(function(result) {
        console.log(result); // "Stuff worked!"
        document.getElementById('display3').innerHTML = 'შენ გამოიცანი!';
    }, function(err) {
        console.log(err); // Error: "It broke"
        document.getElementById('display3').innerHTML = 'შენ ვერ გამოიცანი!';
    });
}

async function myDisplay4() {
    let gift4 = document.getElementById('gift4').value;
    var promise4 = new Promise(function(resolve, reject) {  
    if (gift4 == 'Emma Stone' || gift4 == 'ემმა სთოუნი' || gift4 == 'emma stone') {
        resolve("შენ გამოიცანი!");
    }
    else {
        reject(Error("ვერ გამოიცანი"));
    }
    });

    promise4.then(function(result) {
        console.log(result); // "Stuff worked!"
        document.getElementById('display4').innerHTML = 'შენ გამოიცანი!';
    }, function(err) {
        console.log(err); // Error: "It broke"
        document.getElementById('display4').innerHTML = 'შენ ვერ გამოიცანი!';
    });
}