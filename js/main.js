"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    };
};

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
              score = prompt('На сколько оцените его?', '');
        
        if (lastFilm.length == 0 || lastFilm.length > 50 || lastFilm == null){
            i--;
        } else {
            personalMovieDB.movies[lastFilm] = score; 
        }
    };
};

rememberMyFilms();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const favGenres = prompt(`Ваш любимый жанр под номером ${i+1}`);
        personalMovieDB.genres[i] = favGenres;
    };
};

writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
};

detectPersonalLevel();

function showMyDB(hidden) {
    if (hidden == false) {
        console.log(personalMovieDB);
    }
};

showMyDB(personalMovieDB.privat);
