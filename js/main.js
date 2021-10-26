"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else 
    alert('Произошла ошибка');

let lastFilm, score;
for (let i = 0; i < 2; i++) {
    lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
          score = prompt('На сколько оцените его?', '');
    if (lastFilm.length == 0 || lastFilm.length > 50 || lastFilm == null){
        i--;
    } else {
        personalMovieDB.movies[lastFilm] = score; 
    }
};


console.log(personalMovieDB);
