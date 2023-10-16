
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    mappedArray= moviesArray.map((director)=>{
        return director.director
    })
    return mappedArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    stevenSpielberg= moviesArray.filter((director)=>{
        return director.director==='Steven Spielberg' && director.genre.includes("Drama")
    })

    return stevenSpielberg.length
}
// console.log(howManyMovies([
//     {
//       title: 'The Shawshank Redemption',
//       year: 1994,
//       director: 'Frank Darabont',
//       duration: '2h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9.3
//     },
//     {
//       title: 'The Godfather',
//       year: 1972,
//       director: 'Francis Ford Coppola',
//       duration: '2h 55min',
//       genre: ['Crime', 'Drama'],
//       score: 9.2
//     },
//     {
//       title: 'The Godfather: Part II',
//       year: 1974,
//       director: 'Francis Ford Coppola',
//       duration: '3h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9
//     },
//     {
//       title: 'The Dark Knight',
//       year: 2008,
//       director: 'Christopher Nolan',
//       duration: '2h 32min',
//       genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//       score: 9
//     },{
//         title: 'Raiders of the Lost Ark',
//         year: 1981,
//         director: 'Steven Spielberg',
//         duration: '1h 55min',
//         genre: ['Action', 'Adventure'],
//         score: 8.5
//       }]))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    let sum=0;
    let numberOfMovies= moviesArray.length
   
    sum= moviesArray.reduce((accumulator, currentValue)=>{
        if(currentValue.score){
            return accumulator + currentValue.score
        }else{
            return accumulator+0
        }
    },0)

    if(moviesArray.length===0){
        return 0
    }



    return Math.round((sum/numberOfMovies)*100)/100
}

// console.log(scoresAverage([
//     {
//       title: 'The Shawshank Redemption',
//       year: 1994,
//       director: 'Frank Darabont',
//       duration: '2h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9.3
//     },
//     {
//       title: 'The Godfather',
//       year: 1972,
//       director: 'Francis Ford Coppola',
//       duration: '2h 55min',
//       genre: ['Crime', 'Drama'],
//       score: 9.2
//     },
//     {
//       title: 'The Godfather: Part II',
//       year: 1974,
//       director: 'Francis Ford Coppola',
//       duration: '3h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9
//     },
//     {
//       title: 'The Dark Knight',
//       year: 2008,
//       director: 'Christopher Nolan',
//       duration: '2h 32min',
//       genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//       score: 9
//     },{
//         title: 'Raiders of the Lost Ark',
//         year: 1981,
//         director: 'Steven Spielberg',
//         duration: '1h 55min',
//         genre: ['Action', 'Adventure'],
//         score: 8.5
//       }]))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    dramaMovies= moviesArray.filter((drama)=>{
        return drama.genre.includes("Drama")
    }
    );

    if(dramaMovies.length===0){
        return 0
    }

    avg= dramaMovies.reduce((accumulator, currentValue)=>{
        return (accumulator + currentValue.score)
    },0)

    return Math.round((avg/dramaMovies.length)*100)/100
}

// console.log(dramaMoviesScore([
//     {
//       title: 'The Shawshank Redemption',
//       year: 1994,
//       director: 'Frank Darabont',
//       duration: '2h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9.3
//     },
//     {
//       title: 'The Godfather',
//       year: 1972,
//       director: 'Francis Ford Coppola',
//       duration: '2h 55min',
//       genre: ['Crime', 'Drama'],
//       score: 9.2
//     },
//     {
//       title: 'The Godfather: Part II',
//       year: 1974,
//       director: 'Francis Ford Coppola',
//       duration: '3h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9
//     }]))



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    ascendingOrder=[...moviesArray].sort((a,b)=>{
        if(a.year===b.year){
            if(a.title>b.title){
                return 1
            }else{
                return -1
            }
        }else{
            return a.year-b.year
        }
    })

    

    return ascendingOrder
}

// console.log(orderByYear([
//     {
//       title: 'The Shawshank Redemption',
//       year: 1994,
//       director: 'Frank Darabont',
//       duration: '2h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9.3
//     },
//     {
//       title: 'The Godfather',
//       year: 1972,
//       director: 'Francis Ford Coppola',
//       duration: '2h 55min',
//       genre: ['Crime', 'Drama'],
//       score: 9.2
//     },
//     {
//       title: 'The Godfather: Part II',
//       year: 1974,
//       director: 'Francis Ford Coppola',
//       duration: '3h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9
//     }]))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    mappedArray= moviesArray.map((movie)=>{
        return movie.title
    })

    alphabeticOrder=mappedArray.sort()

    if(alphabeticOrder.length>20){
        return alphabeticOrder.slice(0,20)
    }

    return alphabeticOrder
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    newArray= [...moviesArray].slice()
    convertedTime=newArray.map((movie)=>{
        string = movie.duration.split(" ")
        hours= parseInt(string[0])*60
        let minutes;
        if(string.length===1){
            minutes=0
        }else{
            minutes=parseInt(string[1])

        }
        let duration = hours + minutes
        return {...movie, duration }
    })

   

    return convertedTime
}

console.log(turnHoursToMinutes([
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    }]))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(moviesArray.length===0){ 
        return null
    }
}
