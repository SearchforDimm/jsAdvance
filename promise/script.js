// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=d186ee7a&s=avengers',
//     success: movies => console.log(movies),
//     error: (e) => {
//         console.log(e.responseText)
//     }
// }) // jquery

//  vanilla js

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if ( xhr.status === 200) {
//         console.log(JSON.parse(xhr.response));
//     } else {
//         console.log(xhr.responseText)
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=d186ee7a&s=');
// xhr.send

// fetch

// fetch('http://www.omdbapi.com/?apikey=d186ee7a&s=avengers')
// .then(response => response.json())
// .then(response => console.log(response))

// promise
// sebuah object yang mempresentasikan keberhasilan atau kegagalan dari sebuah event yang asynchronous di masa yang akan datang;
// janji(terpenuhi / ingkar)
// states(fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1

// let ditepati = true;
// const janjiSatu = new Promise((resolve, reject) => {
//     if ( ditepati ) {
//         resolve('Janji Terpenuhi')
//     } else {
//         reject('ingkar janji')
//     }
// });

// janjiSatu.
// then(response => console.log(`OK : ${response}`))
// .catch(response => console.log(`NOT OK : ${response}`))

// contoh 2 
// let ditepati = true
// const janjiDua = new Promise((resolve, reject) => {
//     if ( ditepati ) {
//         setTimeout(() => {
//             resolve('ditepati')
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('tidak ditepati')
//         }, 2000);
//     }
// })

// console.log('mulai')
// // console.log(janjiDua.then(() => console.log(janjiDua)))

// janjiDua
// .finally(() => console.log('selesai menunggu'))
// .then(response => console.log(`OK : ${response}`))
// .catch(response => console.log(`NOT OK : ${response}`))
// console.log('selesai')

// promise.all()

const films = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: "avengers",
            sutradara: "Dimas",
            aktor: "nakusl"
        }])
    }, 1000);
})

const weather = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: "bandung",
            temp: 20,
            kondisi: "berawan"
        }])
    }, 500);
})

// films
// .then(response => console.log(response))
// weather
// .then(response => console.log(response))
Promise.all([films, weather])
// .then( response => console.log(response))
.then( response => {
    const [films , weather] = response;
    console.log(films)
    console.log(weather)
})