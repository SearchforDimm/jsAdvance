// function expression
// const tampiNama = function(nama) {
//     return `Halo, ${nama}`
// }

// console.log(tampiNama("dimas"))

// arrow Function

// const tampilNama = nama => `Halo ${nama}`;
// implisit return

// const tampilNama = (nama, waktu) => {
//     return `Halo, ${nama}, ${waktu}`
// }
// console.log(tampilNama("dimas", "malam"))

// const tampilNama = () => `Hello World`;
// console.log(tampilNama())


let mhs = ['Dimas', "juan", "pierre"];

// let jmlHuruf = mhs.map(function(nama) {
//     return nama.length
// })

// console.log(jmlHuruf)

// let jmlHuruf = mhs.map( nama => nama.length)
// console.log(jmlHuruf)

let jmlHuruf = mhs.map(nama => ({nama, jmlHuruf: nama.length}))
console.table(jmlHuruf);