// how to make object in javascript
// 1. Literal Object

// kurang efektif untuk objek banyak
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

// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`)
//     },

//     main: function(jam) {
//         this.energi -+ jam;
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2;
//     },
// }

// function Mahasiwa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi
    

 
//     return mahasiswa;  // must return if using function declaration
// }


// versi prototype inheritence
// function Mahasiswa(nama, energi) {
//     // let mahasiswa = Object.create(methodMahasiswa);
//     // let this = Object.create(Mahasiswa.prototype);  //auto created when using "this"
//     this.nama = nama;
//     this.energi = energi
// }
// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama}, selamat makan`
// }
// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `halo ${this.nama}, selamat main`
// }
// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `halo ${this.nama}, selamat tidur`
// }


// versi Class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }


    makan(porsi) {
    this.energi += porsi;
    return `halo ${this.nama}, selamat makan`
}
    main(jam) {
    this.energi -= jam;
    return `halo ${this.nama}, selamat main`
}
    tidur(jam){
    this.energi += jam * 2;
    return `halo ${this.nama}, selamat tidur`
    }
}

let pierre = new Mahasiswa("dimas", 10);


// let ang = [];
let ang = new Array();
// 3. Constructor Function

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`)
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama}, selamat main`)
//     }
 
// }

// let dimas = new Mahasiswa("Dimas", 10);