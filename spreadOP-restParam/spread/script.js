// spread operator
// memecah iterables menjadi single element

// console.log(...mhs)

// menggabungkan dua array
// const mhs = ['Dimas', 'pierre', 'juan'];
// const dosen = ['Juki', 'Bagus', 'Irma'];
// const orang = [...mhs, 'Anji', ...dosen]
// // const orang = mhs.concat(dosen)
// console.log(orang)


// meng-copy array
// const mhs = ['Dimas', 'pierre', 'juan'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs]
// mhs1[0] = "dika";

// const liMhs = document.querySelectorAll('li');
// // const mhs = []
// // for ( let i = 0; i < liMhs.length; i++) {
// //     mhs.push(liMhs[i].textContent)
// // }

// // console.log(mhs)

// const mhs = [...liMhs].map( m => m.textContent)

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')
nama.innerHTML = huruf