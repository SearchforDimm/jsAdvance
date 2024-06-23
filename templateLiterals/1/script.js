// template literals

const nama = 'dimas';
const umur = 18;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
document.querySelector(".h1").textContent = `Halo, nama saya ${nama}, dan saya ${umur} tahun.`;

// embedded expression
// console.log(`${1 + 1}`)
// console.log(`${alert("halo")}`)
const x = 10;
console.log(`${( x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML FRAGMENTS

const mhs = {
    nama: "dimas",
    umur: 19
}
``

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.umur}</span>
</div>`;