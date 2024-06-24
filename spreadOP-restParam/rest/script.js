// //  rest param

// function myFunc() {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`
//     // return Array.from(arguments)
//     return [...arguments]
// }

// console.log(myFunc(1,2,3,4,5))

// function calculate(...angka) {
//     // let total = 0;

//     // for ( const a of angka) {
//     //     total += a;
//     // }

//     // return total;

//     return angka.reduce((a, b) => a + b)
// }

// console.log(calculate(1,2,3,4,5))

// array destructuring

// const kelSatu = [
//     'dimas',
//     'pierre',
//     'juan'
// ]

// const [ketua, wakil, ...anggota] = kelSatu

// object destructuring 

// const team = {
//     pm: "dimas",
//     frontEnd: {
//         satu:'dimas',
//         dua:'xza'
//     },
//     backend: "nasril",
//     ux: "xza",
//     devOps: "adam"
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam)

// filtering

function filterBy(type, ...values) {
    return values.filter(v => typeof v === type)
}

console.log(filterBy('string', 1, 5, true, false, 'as'))