// // tagged templates
// const nama = 'Dimas';
// const umur = 18;

// function coba(strings, ...values) {
//     // let res = '';

//     // strings.forEach((str, i) => {
//     //     res += `${str}${values[i] || ''}`
//     // });
//     // return res

//     return strings.reduce((res, str, i) => `${res}${str}${values[i] || ''}`, '')
// }
// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun`
// console.log(str )


// highlight

// tagged templates
const nama = 'Dimas';
const umur = 18;
const email = "das@gmail.com"

function highlight(strings, ...values) {

    return strings.reduce((res, str, i) => `${res}${str}<span class="hl">${values[i] || ''}</span>`, '')
}
const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya ${email}`
console.log(str)

document.body.innerHTML = str