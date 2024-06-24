// destructuring variable / assignment


// des array

// const perkenalan = ['halo', 'nama', 'saya', 'dimas'];

// // const [salam, satu, dua, nama] = perkenalan

// // skip items in arr
// const [salam, , , nama] = perkenalan

// // swap items in arr
// let a = 1;
// let b = 2;

// [a , b ] = [b, a]

// return value in function

// function coba() {
//     return [1,2]
// }

// const [a, b] = coba()


// rest param
// const [a, ...values] = [1, 2, 3];


// destructuring object

// const mhs = {
//     nama: 'dimas',
//     umur: 18
// }

// const { nama, umur } = mhs

// assignment withaout object declaration

// ({nama, umur} = { nama: 'dimas',   umur: 18})


// assign to new variable
// const mhs = {
//     nama: 'dimas',
//     umur: 18
// }

// const { nama: n, umur: u } = mhs;


// default value

// const mhs = {
//     nama: 'dimas',
//     umur: 18,
//     email: 'nas@gmail.com'
// }

// const { nama, umur, email = 'email@default.com' } = mhs

// assign default value + assign to new variable


// const mhs = {
//     nama: 'dimas',
//     umur: 18,
//     email: 'nas@gmail.com'
// }

// const { nama:n, umur:u, email:e = 'email@default.com' } = mhs

// rest param


// const mhs = {
//     nama: 'dimas',
//     umur: 18,
//     email: 'nas@gmail.com'
// }

// const { nama, ...values} = mhs


// ambil field pada objectm setelah dikirim sebagai parameter untuk function


const mhs = {
    id: 123,
    nama: 'dimas',
    umur: 18,
    email: 'nas@gmail.com'
}

function getIdMhs({ id }) {
    return id
}