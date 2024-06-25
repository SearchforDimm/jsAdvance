// callback
// synchronous callback
// function halo(nama) {
//     alert(`halo, ${nama}`)
// }

// function tampilPesan(callback) {
//     const nama = prompt('masukan nama :');
//     callback(nama)
// }

// tampilPesan(nama => {
//     alert(`halo, ${nama}`)
// })

// const mhs = [
//     {
//         "nama": "Dimas Rifqi",
//         "nis": "1234567",
//         "jurusan": "RPL",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Pierre Rifqi",
//         "nis": "1234567",
//         "jurusan": "RPL",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Juan Rifqi",
//         "nis": "1234567",
//         "jurusan": "RPL",
//         "idDosenWali": 3
//     }
// ];

// console.log('mulai')
// mhs.forEach((m) => {
//     for ( let i = 0; i <10000; i++) {
//         let date = new Date()
//     }
//     console.log(m.nama) 
// })
// console.log('selesai')

// asynchronous callback

// console.log('mulai')
// function getDataMhs(url, succes, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if ( xhr.readyState === 4) {
//             if( xhr.status === 200) {
//                 succes(xhr.response);
//             } else if (xhr.status === 400) {
//                 error()
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send()
// }

// getDataMhs('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => {
//         console.log(m.nama)
//     });
// }, () => {})

// console.log('seleisa')

// JQuery
console.log('mulai')
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama))
    },

    error: (e) => {
        console.log(e.responseText)
    }
})
console.log('selesai')