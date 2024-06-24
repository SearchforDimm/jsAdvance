// for..of
// Array
// const mhs = ['dimas', 'adam', 'nas'];
// for ( let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i])
// }

// mhs.forEach((m) => console.log(m))

// for(const m of mhs) {
//     console.log(m)
// }

// String
// const nama = 'dimas';
// for(const n of nama) {
//     console.log(n)
// }

// const mhs = ['dimas', 'adam', 'nas'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// });

// for(const [i,m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// }

// nodelist 
// const list = document.querySelectorAll(".nama")

// list.forEach(n => console.log(n.textContent))
// for( n of list) {
//     console.log(n.innerHTML)
// }

// arguments 

// function calculate() {
//     // return [1,2,3,4,5].reduce((a, i) => a + i)
//     // [1,2,3].forEach(a => jml += a);
//     let jml = 0;
//     for ( a of arguments) {
//         jml += a;
//     }
//     return jml
// }
// console.log(calculate(1,2,3,4,5))

// for..in
// const mhs = {
//     nama: 'dimas',
//     umur: 18,
//     email: "das@gmail.cp,"
// }

// for (m in mhs) {
//     console.log(mhs[m])
// }