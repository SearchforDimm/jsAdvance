// destructuring

// function calc(a, b) {
//     return [a + b, a * b, a - b, a / b]
// }

// const [jumlah, kali] = penjumlahanPerkalian(1,2)

// const [tambah, kali, kurang, bagi = "tidak ada"] = calc(1,2)

// function calc(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = calc(1,2)

// destrucutring function args

const mhs1 = {
    nama: 'Dimas',
    umur: 18,
    email: "es@gniam,ocm",
    nilai: {
        tugas: 80,
        uts: 90,
        uas: 92
    }
}

// function printMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama} dan saya berumur ${mhs.umur} tahun`
// }

// console.log(printMhs(mhs1))

function printMhs({nama , umur, nilai: {tugas, uts, uas}}) {
    return `Halo, nama saya ${nama} dan saya berumur ${umur} tahun.
    dan nilai rata rata saya adalah ${(tugas + uts + uas) / 3}`
}
console.log(printMhs(mhs1))