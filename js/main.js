"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        };
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
                  score = prompt('На сколько оцените его?', '');
            
            if (lastFilm.length == 0 || lastFilm.length > 50 || lastFilm == null){
                i--;
            } else {
                personalMovieDB.movies[lastFilm] = score; 
            }
        };
    },
    writeYourGenres: function() {
        for (let i = 0; i < 1; i++) {
            /*const favGenres = prompt(`Ваш любимый жанр под номером ${i+1}`);

            if (favGenres == '' || favGenres == null) {
                i--;
            } else {
                personalMovieDB.genres[i] = favGenres;
            }    */
            const favGenres = prompt(`Введите ваши любимые жанры через запятую`);

            if (favGenres == '' || favGenres == null) {
                i--;
            } else {
                personalMovieDB.genres = favGenres.split(', ');
                personalMovieDB.genres.sort();
            }  
        };
        personalMovieDB.genres.forEach((item, index) => {
            // item - элемент массива на текущей итерации
            // index - порядковый номер элемента в массиве
            console.log(`Любимый жанр #${index + 1} - это ${item}`);
        });
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    toggleVisibleMyDB: function(checked) {
        if (checked == false) {
            checked = true;
        } else {
            checked = false;
        }
    },
    showMyDB: function(hidden) {
        if (hidden == false) {
            console.log(personalMovieDB);
        }
    },
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
