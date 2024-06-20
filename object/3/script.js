// function init() {
//     let nama = "Dimas";
//     // let umur = 33;
//     return function(nama)  {
//         console.log(nama)
//     }
//     return tampilNama
//     // console.dir(tampilNama)
// }
// let panggilNama = init();
// panggilNama("dimas")
// panggilNama("masdim")



// function saySalam(time) {
//     return function(nama) {
//         console.log(`halo ${nama}, selamat ${time}, semoga harimu menyenangkan!`)
//     }
// }

// let sayMorn = saySalam('morning');
// let sayEve = saySalam('evening');
// let sayNight = saySalam('night');

// console.dir(sayNight)
// sayMorn("Pierre")
// sayNight("Juan")


let counter = 0;
let add = (function() {
    return function() {
    return        ++counter
    }
})(); // IIFE (immediatelu invoked function expression)


console.log(add())
console.log(add())
console.log(add())