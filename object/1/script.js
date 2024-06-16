// how to make object in javascript
// 1. Literal Object

let mahasiswa = {
    nama: "Dimas",
    energi : 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`halo ${this.nama}, selamat makan!`)
    }
}
let mahasiswa2 = {
    nama: "Pierre",
    energi : 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`halo ${this.nama}, selamat makan!`)
    }
}

// 2. function declaration

// function Mahasiwa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`)
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -+ jam;
//         console.log(`halo ${this.nama}, selamat main`)
//     }
 
//     return mahasiswa;  // must return if using function declaration
// }

// let dimas = Mahasiwa("Dimas", 10)
// let pierre = Mahasiwa("Pierre", 20)

// 3. Constructor Function

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan!`)
    }

    this.main = function(jam) {
        this.energi -= jam;
        console.log(`halo ${this.nama}, selamat main`)
    }
 
}

let dimas = new Mahasiswa("Dimas", 10);