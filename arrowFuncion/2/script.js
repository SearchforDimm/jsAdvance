// konsep this pada arrow function

// constructor function
// const Mahasiswa = function() {
//     this.nama = "Dimas";
//     this.umur = 17
//     // console.log(this)
//     this.sayHello = function() {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//     }
// }
// const dimas = new Mahasiswa()


// arrow function 

// const Mahasiswa = function() {
//     this.nama = "Dimas";
//     this.umur = 17
//     // console.log(this)
//     this.sayHello = () => {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//     }
// }
// const dimas = new Mahasiswa()

// object literal

// const mhs1 = {
//     nama: "dimas",
//     umur: 17,
//     sayHello: () => {
//         // console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//         console.log(this)
//     }


// const Mahasiswa = function() {
//         this.nama = "Dimas";
//         this.umur = 17
//         // console.log(this)
//         this.sayHello = () => {
//             console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`)
//         }

//         setInterval(() => {
//             // console.log(this)
//         },500)
// }


// const dimas = new Mahasiswa()




const box = document.querySelector(".box");
box.addEventListener("click", function() {
    // console.log()
    let one = 'size';
    let two = 'caption';
    
    if ( this.classList.contains(one)) {
        [one, two] = [two, one]
    }
    this.classList.toggle(one);
    setTimeout(() => {
        this.classList.toggle(two)
    },600)
})