
var tombolBuka = document.getElementById("tombolBuka");
var pembuka = document.getElementById("pembuka");
var isiUndangan = document.getElementById("isiUndangan");
var laguUndangan = document.getElementById("laguUndangan");

// Membuka undangan dan memutar musik
tombolBuka.addEventListener("click", function () {
    pembuka.classList.add("d-none");
    isiUndangan.classList.remove("d-none");
    window.location.hash = "beranda";

    laguUndangan.play();
});

// Konfirmasi kehadiran
var tombolHadir = document.getElementById("tombolHadir");
var pesanHadir = document.getElementById("pesanHadir");

tombolHadir.addEventListener("click", function () {
    pesanHadir.textContent =
        "Terima kasih! Konfirmasi ini hanya contoh dan belum mengirim data.";
});
