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
        forsaji9.innerText = 'Fast and furious 9';
        forsaji9p.innerText = 'The ninth part of the legendary action franchise about street racing, where Domenic Torretos team continues its grand adventure...';
        pirates.innerText = 'Pirates Of The Caribean: Dead Men Tell No Tales';
        piratesp.innerText = 'Jack Sparrow learns that he is being hunted by his old villain Captain Salazar and his ghost pirates...';
        blackwidow.innerText = 'Black Widow';
        blackwidowp.innerText = 'Loaded by Marvel Studios, the spy thriller "Black Widow", Natasha Romanov, the same Black Widow, confronts the dark parts of her book when a dangerous conspiracy arises in connection with her past...';
        transporter3.innerText = 'Transporter 3';
        transporter3p.innerText = 'Frank Martin made drivers gloves to take Valentina, the kidnapped daughter of a Ukrainian government official, from Marseilles to Odessa...';
        amazingspiderman.innerText = 'The Amazing Spider-man';
        amazingspidermanp.innerText = 'The protagonist of the film, Peter Parker, is an ordinary schoolboy who is trying to establish his own place in life...';
        filmsh3index.innerText = 'Movies';
        forsaji9film.innerText = 'Fast And Furious 9';
        blackwidowfilm.innerText = 'Black Widow';
        transporter3film.innerText = 'Transporter 3';
        amazingspidermanfilm.innerText = 'The Amazing Spider-man';
        piratesfilm.innerText = 'Pirates Of The Caribean: Dead Men Tell No Tales';
        darkknightfilm.innerText = 'Dark Knight';
        forestgumpfilm.innerText = 'Forest Gump';
        cocofilm.innerText = 'Coco';
        seriesh3index.innerText = 'Series';
        gameofthrones.innerText = 'Game Of Thrones';
        breakingbad.innerText = 'Breaking Bad';
        chernobyl.innerText = 'Chernobyl';
        sherlock.innerText = 'Sherlock';
        tiflisi.innerText = 'Tiflisi';
        peakyblinders.innerText = 'Peaky Blinders';
        mandalorian.innerText = 'The Mandalorian';
        paperhouse.innerText = 'La Casa De Papel';
    
    } else {
        home.innerText = 'მთავარი';
        films.innerText = 'ფილმები';
        actors.innerText = 'მსახიობები';
        contact.innerText = 'კონტაქტი';
        series.innerText = 'სერიალები';
        forsaji9.innerText = 'ფორსაჟი 9';
        forsaji9p.innerText = 'ლეგენდარული ექშენ-ფრენჩაიზის მეცხრე ნაწილი ქუჩის რბოლების შესახებ, სადაც დომენიკ ტორეტოს გუნდი კვლავ აგრძელებს თავის გრანდიოზულ თავგადასავალს...';
        pirates.innerText = 'კარიბის ზღვის მეკობრეები: მკვდრები ზღაპრებს არ ჰყვებიან';
        piratesp.innerText = 'ჯეკ ბეღურა გაიგებს , რომ მასზე მისი ძველი არაკეთილმოსურნე კაპიტანი სალაზარი და მისი მოჩვენება პირატები ნადირობენ...'
        blackwidow.innerText = 'შავი ქვრივი';
        blackwidowp.innerText = 'Marvel Studios-ის მოქმედებით დატვირთული ჯაშუშური თრილერი "შავი ქვრივი", ნატაშა რომანოვი, იგივე შავი ქვრივი, უპირისპირდება მისი წიგნის ბნელ ნაწილებს, როდესაც წარმოიქმნება საშიში შეთქმულება მის წარსულთან კავშირში...';
        transporter3.innerText = 'გადამზიდი 3';
        transporter3p.innerText = 'ფრენკ მარტინმა მძღოლის ხელთათმანები გაიკეთა, რათა მარსელიდან ოდესამდე ჩაიყვანოს ვალენტინა, უკრაინის მთავრობის ჩინოვნიკის გატაცებული ქალიშვილი...';
        amazingspiderman.innerText = 'წარმოუდგენელი ადამიანი ობობა';
        amazingspidermanp.innerText = 'ფილმის მთავარი გმირი, პიტერ პარკერი, ჩვეულებრივი სკოლის მოსწავლეა, რომელიც ცდილობს დაიმკვიდროს საკუთარი ადგილი ცხოვრებაში...';
        filmsh3index.innerText = 'ფილმები';
        forsaji9film.innerText = 'ფორსაჟი 9';
        blackwidowfilm.innerText = 'შავი ქვრივი';
        transporter3film.innerText = 'გადამზიდი 3';
        amazingspidermanfilm.innerText = 'წარმოუდგენელი ადამიანი ობობა';
        piratesfilm.innerText = 'კარიბის ზღვის მეკობრეები: მკვდრები ზღაპრებს არ ჰყვებიან';
        darkknightfilm.innerText = 'ბნელი რაინდი';
        forestgumpfilm.innerText = 'ფორესტ გამპი';
        cocofilm.innerText = 'კოკო';
        seriesh3index.innerText = 'სერიალები';
        gameofthrones.innerText = 'სამეფო კარის თამაშები';
        breakingbad.innerText = 'მძიმე დანაშაული';
        chernobyl.innerText = 'ჩერნობილი';
        sherlock.innerText = 'შერლოკი';
        tiflisi.innerText = 'ტიფლისი';
        peakyblinders.innerText = 'ალესილი კეპები';
        mandalorian.innerText = 'მანდალორელი';
        paperhouse.innerText = 'ქაღალდის სახლი';
    }
})

if(checked == true){
    home.innerText = 'Home';
    films.innerText = 'Movies';
    actors.innerText = 'Actors';
    contact.innerText = 'Contact';
    series.innerText = 'Series';
    forsaji9.innerText = 'Fast and furious 9';
    forsaji9p.innerText = 'The ninth part of the legendary action franchise about street racing, where Domenic Torretos team continues its grand adventure ...';
    pirates.innerText = 'Pirates Of The Caribean: Dead Men Tell No Tales';
    piratesp.innerText = 'Jack Sparrow learns that he is being hunted by his old villain Captain Salazar and his ghost pirates...';
    blackwidow.innerText = 'Black Widow';
    blackwidowp.innerText = 'Loaded by Marvel Studios, the spy thriller "Black Widow", Natasha Romanov, the same Black Widow, confronts the dark parts of her book when a dangerous conspiracy arises in connection with her past...';
    transporter3.innerText = 'Transporter 3';
    transporter3p.innerText = 'Frank Martin made drivers gloves to take Valentina, the kidnapped daughter of a Ukrainian government official, from Marseilles to Odessa...';
    amazingspiderman.innerText = 'The Amazing Spider-man';
    amazingspidermanp.innerText = 'The protagonist of the film, Peter Parker, is an ordinary schoolboy who is trying to establish his own place in life...';
    filmsh3index.innerText = 'Movies';
    forsaji9film.innerText = 'Fast And Furious 9';
    blackwidowfilm.innerText = 'Black Widow';
    transporter3film.innerText = 'Transporter 3';
    amazingspidermanfilm.innerText = 'The Amazing Spider-man';
    piratesfilm.innerText = 'Pirates Of The Caribean: Dead Men Tell No Tales';
    darkknightfilm.innerText = 'Dark Knight';
    forestgumpfilm.innerText = 'Forest Gump';
    cocofilm.innerText = 'Coco';
    seriesh3index.innerText = 'Series';
    gameofthrones.innerText = 'Game Of Thrones';
    breakingbad.innerText = 'Breaking Bad';
    chernobyl.innerText = 'Chernobyl';
    sherlock.innerText = 'Sherlock';
    tiflisi.innerText = 'Tiflisi';
    peakyblinders.innerText = 'Peaky Blinders';
    mandalorian.innerText = 'The Mandalorian';
    paperhouse.innerText = 'La Casa De Papel';
}