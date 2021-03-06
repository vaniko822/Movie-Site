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
        actorsh3index.innerText = 'Actors';
        tomcruise.innerText = 'Tom Cruise';
        tomcruisep.innerText = '43 Movies';
        johnnydepp.innerText = 'Johnny Depp';
        johnnydeppp.innerText = '67 Movies';
        scarlettjohansson.innerText = 'Scarlett Johansson';
        scarlettjohanssonp.innerText = '62 Movies';
        jasonstatham.innerText = 'Jason Statham';
        jasonstathamp.innerText = '55 Movies';
        emmastone.innerText = 'Emma Stone';
        emmastonep.innerText = '28 Movies';
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
        actorsh3index2.innerText = 'Guess the actors';
        gift.placeholder = 'Enter the full name of the actor';
        gift1.placeholder = 'Enter the full name of the actor';
        gift2.placeholder = 'Enter the full name of the actor';
        gift3.placeholder = 'Enter the full name of the actor';
        gift4.placeholder = 'Enter the full name of the actor';
        gamocnobabutton1.innerText = 'Guess';
        gamocnobabutton2.innerText = 'Guess';
        gamocnobabutton3.innerText = 'Guess';
        gamocnobabutton4.innerText = 'Guess';
        gamocnobabutton5.innerText = 'Guess';
    } else {
        home.innerText = '?????????????????????';
        films.innerText = '?????????????????????';
        actors.innerText = '??????????????????????????????';
        contact.innerText = '????????????????????????';
        series.innerText = '???????????????????????????';
        forsaji9.innerText = '????????????????????? 9';
        forsaji9p.innerText = '????????????????????????????????? ???????????????-?????????????????????????????? ?????????????????? ?????????????????? ??????????????? ???????????????????????? ?????????????????????, ??????????????? ????????????????????? ????????????????????? ??????????????? ??????????????? ??????????????????????????? ??????????????? ?????????????????????????????? ???????????????????????????????????????...';
        pirates.innerText = '????????????????????? ??????????????? ??????????????????????????????: ???????????????????????? ???????????????????????? ?????? ????????????????????????';
        piratesp.innerText = '????????? ?????????????????? ????????????????????? , ????????? ??????????????? ???????????? ??????????????? ????????????????????????????????????????????? ???????????????????????? ???????????????????????? ?????? ???????????? ??????????????????????????? ???????????????????????? ???????????????????????????...'
        blackwidow.innerText = '???????????? ??????????????????';
        blackwidowp.innerText = 'Marvel Studios-?????? ?????????????????????????????? ?????????????????????????????? ???????????????????????? ????????????????????? "???????????? ??????????????????", ?????????????????? ????????????????????????, ??????????????? ???????????? ??????????????????, ??????????????????????????????????????? ???????????? ?????????????????? ???????????? ????????????????????????, ????????????????????? ???????????????????????????????????? ?????????????????? ?????????????????????????????? ????????? ??????????????????????????? ????????????????????????...';
        transporter3.innerText = '??????????????????????????? 3';
        transporter3p.innerText = '??????????????? ???????????????????????? ????????????????????? ???????????????????????????????????? ?????????????????????, ???????????? ?????????????????????????????? ???????????????????????? ??????????????????????????? ???????????????????????????, ???????????????????????? ??????????????????????????? ?????????????????????????????? ?????????????????????????????? ???????????????????????????...';
        amazingspiderman.innerText = '??????????????????????????????????????? ???????????????????????? ???????????????';
        amazingspidermanp.innerText = '?????????????????? ????????????????????? ???????????????, ??????????????? ?????????????????????, ????????????????????????????????? ?????????????????? ???????????????????????????, ????????????????????? ????????????????????? ????????????????????????????????? ???????????????????????? ?????????????????? ??????????????????????????????...';
        actorsh3index.innerText = '??????????????????????????????';
        tomcruise.innerText = '????????? ???????????????';
        tomcruisep.innerText = '43 ???????????????';
        johnnydepp.innerText = '???????????? ????????????';
        johnnydeppp.innerText = '67 ???????????????';
        scarlettjohansson.innerText = '????????????????????? ???????????????????????????';
        scarlettjohanssonp.innerText = '62 ???????????????';
        jasonstatham.innerText = '?????????????????? ????????????????????????';
        jasonstathamp.innerText = '55 ???????????????';
        emmastone.innerText = '???????????? ??????????????????';
        emmastonep.innerText = '28 ???????????????';
        filmsh3index.innerText = '?????????????????????';
        forsaji9film.innerText = '????????????????????? 9';
        blackwidowfilm.innerText = '???????????? ??????????????????';
        transporter3film.innerText = '??????????????????????????? 3';
        amazingspidermanfilm.innerText = '??????????????????????????????????????? ???????????????????????? ???????????????';
        piratesfilm.innerText = '????????????????????? ??????????????? ??????????????????????????????: ???????????????????????? ???????????????????????? ?????? ????????????????????????';
        darkknightfilm.innerText = '??????????????? ??????????????????';
        forestgumpfilm.innerText = '?????????????????? ???????????????';
        cocofilm.innerText = '????????????';
        seriesh3index.innerText = '???????????????????????????';
        gameofthrones.innerText = '?????????????????? ??????????????? ????????????????????????';
        breakingbad.innerText = '??????????????? ???????????????????????????';
        chernobyl.innerText = '???????????????????????????';
        sherlock.innerText = '?????????????????????';
        tiflisi.innerText = '?????????????????????';
        peakyblinders.innerText = '????????????????????? ??????????????????';
        mandalorian.innerText = '?????????????????????????????????';
        paperhouse.innerText = '???????????????????????? ???????????????';
        actorsh3index2.innerText = '??????????????????????????? ????????????????????????';
        gift.placeholder = '??????????????????????????? ??????????????????????????? ??????????????? ??????????????????';
        gift1.placeholder = '??????????????????????????? ??????????????????????????? ??????????????? ??????????????????';
        gift2.placeholder = '??????????????????????????? ??????????????????????????? ??????????????? ??????????????????';
        gift3.placeholder = '??????????????????????????? ??????????????????????????? ??????????????? ??????????????????';
        gift4.placeholder = '??????????????????????????? ??????????????????????????? ??????????????? ??????????????????';
        gamocnobabutton1.innerText = '???????????????????????????';
        gamocnobabutton2.innerText = '???????????????????????????';
        gamocnobabutton3.innerText = '???????????????????????????';
        gamocnobabutton4.innerText = '???????????????????????????';
        gamocnobabutton5.innerText = '???????????????????????????';
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
    actorsh3index.innerText = 'Actors';
    tomcruise.innerText = 'Tom Cruise';
    tomcruisep.innerText = '43 Movies';
    johnnydepp.innerText = 'Johnny Depp';
    johnnydeppp.innerText = '67 Movies';
    scarlettjohansson.innerText = 'Scarlett Johansson';
    scarlettjohanssonp.innerText = '62 Movies';
    jasonstatham.innerText = 'Jason Statham';
    jasonstathamp.innerText = '55 Movies';
    emmastone.innerText = 'Emma Stone';
    emmastonep.innerText = '28 Movies';
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
    actorsh3index2.innerText = 'Guess the actors';
    gift.placeholder = 'Enter the full name of the actor';
    gift1.placeholder = 'Enter the full name of the actor';
    gift2.placeholder = 'Enter the full name of the actor';
    gift3.placeholder = 'Enter the full name of the actor';
    gift4.placeholder = 'Enter the full name of the actor';
    gamocnobabutton1.innerText = 'Guess';
    gamocnobabutton2.innerText = 'Guess';
    gamocnobabutton3.innerText = 'Guess';
    gamocnobabutton4.innerText = 'Guess';
    gamocnobabutton5.innerText = 'Guess';
}