//  HTML fragments

// const mhs = {
//     nama: "dimas",
//     umur: 19
// }


// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="umur">${mhs.umur}</span>
// </div>`


//  2,.looping

// const mhs = [
//     {
//         nama: "dimas",
//         umur: 22
//     },
//     {
//         nama: "bastar",
//         umur: 22
//     },
//     {
//         nama: "dimpaskuras",
//         umur: 22
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.umur}</li>
//     </ul>`).join('')}
// </div>`

// const song = {
//     judul : "Akad",
//     feat: "Hujan",
//     Singer : "Payung Teduh"
// }

// const el = `<div class="lagu">
//         <ul>
//         <li>
//         ${song.judul}  ${song.feat ? `feat (${song.feat})` : ``}
//         </li>
//         </ul>
//     </div>`


// 4. nested
// html fragments bersarang

const mhs = {
    nama: "Dimas bansasd",
    semester: 5,
    matKul: [
        'rekayasa web',
        'analis data',
        'sistem informatika'
    ]
}

function cetakMataKuliah(matKul) {
    return `
    
    <ol>
        ${matKul.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`
}

const el = `<div class="mhs">
        <h2>${mhs.nama}</h2>
        <span class="sem">${mhs.semester}</span>
        <h4 class="m">Mata Kuliah:</h4>
        ${cetakMataKuliah(mhs.matKul)}
    </div>`
document.body.innerHTML = el 

