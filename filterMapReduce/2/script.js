// ambil semua elemen video

const videos = Array.from(document.querySelectorAll("[data-duration]"));
const listVideos = document.querySelector(".jumlah-video");
const duration = document.querySelector(".total-durasi")
// pilih hanya yang javascript lanjutan

let jsAdvance = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))
// ambil durasi masing masing video
    .map(item => item.dataset.duration)
    .map(time => {
        // ubah durasi menjadi float, lalu ubah menit menjadi detik
        // 10:30 -> [10, 30] split;
        const parts = time.split(":").map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// jumlahkan semua detiknya
.reduce((total, second) => total + second);

// ubah formatnya menjadi jam, menit, detik.

const hours = Math.floor(jsAdvance / 3600);
jsAdvance = jsAdvance - hours * 3600;
const minutes = Math.floor(jsAdvance / 60);
const second = jsAdvance - minutes * 60
// simpan di DOM

listVideos.textContent = videos.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length + " videos"
duration.textContent = `${hours} jam, ${minutes} minutes, ${second} seconds. `