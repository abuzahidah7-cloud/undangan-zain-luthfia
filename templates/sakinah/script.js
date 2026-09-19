// =========================
// DATA UNDANGAN
// =========================

const dataUndangan = {

    // TEMPLATE
    namaTemplate:
        "SAKINAH",

    warna: {
        utama: "#526b56",
        emas: "#9a7938",
        ivory: "#f7f4e9"
    },


    // MEMPELAI
    namaPria:
        "Zain Samuroh",
    namaPanggilanPria:
        "Zain",
    namaWanita:
        "Luthfia Sholichah Salsabiila",
    namaPanggilanWanita:
        "Luthfia",
    orangTuaPria:
        "Bapak Basri & Ibu Waginah",

    orangTuaWanita:
        "Bapak Fajar Salim & Ibu Nur Khasanah",
    // PEMBUKA
    teksPembuka:
        "Dengan penuh kebahagiaan, kami bermaksud mengundang untuk berkenan hadir dalam acara Walimatul Ursy.",
        sapaanTamu:
        "Kepada Yth.",
    // AYAT
    ayat:
        "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",

    surat:
        "QS. Ar-Rum: 21",


    // ACARA
    jenisAcara:
        "Walimatul Ursy",

    tanggal:
        "Senin, 7 Desember 2026",

    tanggalCountdown:
        "2026-12-07T08:00:00+07:00",

    waktu:
        "08.00–09.00 WIB",

    namaLokasi:
        "Kediaman Mempelai Wanita",

    alamat:
        "Gendungan RT 02/RW 06, Tawangsari, Sukoharjo",

    lokasi:
        "Kediaman Mempelai Wanita, Gendungan RT 02/RW 06, Tawangsari, Sukoharjo",


    // KONTAK
    nomorWhatsApp:
        "62895351836177",

    pesanRSVP:
        "Assalamu'alaikum, saya ingin mengonfirmasi kehadiran pada acara Walimatul Ursy.",

    pesanUndangan:
        "Dengan penuh kebahagiaan, kami bermaksud mengundang untuk berkenan hadir dalam acara Walimatul Ursy.",


    // REKENING
    rekening:
        "901879267399",

    bank:
        "SeaBank",

    pemilikRekening:
        "Zain Samuroh",


    // FOTO
    fotoPria:
        "pria.jpg",

    fotoWanita:
        "wanita.jpg",


    // GALERI
    galeri: [
        "galeri1.jpg",
        "galeri2.jpg",
        "galeri3.jpg",
        "galeri4.jpg"
    ],


    // MUSIK
    musik:
        "musik.mp3"

};
// Foto mempelai
const fotoPria =
    document.getElementById("fotoPria");

const fotoWanita =
    document.getElementById("fotoWanita");

if (fotoPria) {

    fotoPria.src =
        dataUndangan.fotoPria;

}

if (fotoWanita) {

    fotoWanita.src =
        dataUndangan.fotoWanita;

}

// =========================
// ZAFIZA INVITATION
// TEMPLATE SAKINAH
// =========================


// =========================
// NAMA TAMU OTOMATIS
// =========================

document.addEventListener("DOMContentLoaded", function () {
   // Sapaan tamu
const sapaanTamu =
    document.getElementById("sapaanTamu");

if (sapaanTamu) {

    sapaanTamu.textContent =
        dataUndangan.sapaanTamu;

}
    // Teks pembuka
const teksPembuka =
    document.getElementById("teksPembuka");

if (teksPembuka) {

    teksPembuka.textContent =
        dataUndangan.teksPembuka;

}
    // Warna utama template
document.documentElement.style.setProperty(
    "--warna-utama",
    dataUndangan.warna.utama
); 
// Warna emas template
document.documentElement.style.setProperty(
    "--warna-emas",
    dataUndangan.warna.emas
);
// Warna ivory template
document.documentElement.style.setProperty(
    "--warna-ivory",
    dataUndangan.warna.ivory
);
// Ayat dan surat
const suratAyat =
    document.getElementById("suratAyat");
// Teks ayat
const ayatUndangan =
    document.getElementById("ayatUndangan");

if (ayatUndangan) {

    ayatUndangan.textContent =
        "“" +
        dataUndangan.ayat +
        "”";

}
if (suratAyat) {

    suratAyat.textContent =
        dataUndangan.surat;

}
// Jenis acara
const jenisAcara =
    document.getElementById("jenisAcara");

if (jenisAcara) {

    jenisAcara.textContent =
        dataUndangan.jenisAcara;

}
    // Nama mempelai
    const namaPria =
        document.getElementById("namaPria");

    const namaWanita =
        document.getElementById("namaWanita");

    if (namaPria) {

        namaPria.textContent =
            dataUndangan.namaPria;

    }

    if (namaWanita) {

        namaWanita.textContent =
            dataUndangan.namaWanita;

    }
const orangTuaPria =
    document.getElementById("orangTuaPria");

const orangTuaWanita =
    document.getElementById("orangTuaWanita");

if (orangTuaPria) {

    orangTuaPria.textContent =
        dataUndangan.orangTuaPria;

}

if (orangTuaWanita) {

    orangTuaWanita.textContent =
        dataUndangan.orangTuaWanita;

}// Tanggal dan waktu acara
const tanggalAcara =
    document.getElementById("tanggalAcara");

const waktuAcara =
    document.getElementById("waktuAcara");

if (tanggalAcara) {

    tanggalAcara.textContent =
        dataUndangan.tanggal;

}

if (waktuAcara) {

    waktuAcara.textContent =
        dataUndangan.waktu;

}
// Tombol RSVP
const tombolRSVP =
    document.getElementById("tombolRSVP");

if (tombolRSVP) {

    tombolRSVP.href =
        "https://wa.me/" +
        dataUndangan.nomorWhatsApp +
        "?text=" +
        encodeURIComponent(
            dataUndangan.pesanRSVP
        );

}
// Lokasi acara
const lokasiAcara =
    document.getElementById("lokasiAcara");

if (lokasiAcara) {

    lokasiAcara.textContent =
        dataUndangan.lokasi;

}
// Alamat acara
const alamatAcara =
    document.getElementById("alamatAcara");

if (alamatAcara) {

    alamatAcara.textContent =
        dataUndangan.alamat;

}
// Data rekening
const namaBank =
    document.getElementById("namaBank");

const pemilikRekening =
    document.getElementById("pemilikRekening");

const nomorRekening =
    document.getElementById("nomorRekening");

if (namaBank) {

    namaBank.textContent =
        dataUndangan.bank;

}

if (pemilikRekening) {

    pemilikRekening.textContent =
        dataUndangan.pemilikRekening;

}

if (nomorRekening) {

    nomorRekening.textContent =
        dataUndangan.rekening;

}
// Tombol Google Maps
const tombolMaps =
    document.getElementById("tombolMaps");

if (tombolMaps) {

    tombolMaps.href =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(dataUndangan.lokasi);

}
    // Nama tamu
    const params =
        new URLSearchParams(window.location.search);

    const namaTamu =
        params.get("to");

    const elemenNama =
        document.getElementById("namaTamu");

    if (namaTamu && elemenNama) {

        elemenNama.textContent =
            namaTamu;

    }


    // Tampilkan ucapan
    tampilkanUcapan();

});


// =========================
// BUKA UNDANGAN
// =========================

function bukaUndangan() {

    document.getElementById("cover").style.display =
        "none";

    document.getElementById("isiUndangan").style.display =
        "block";

}



// =========================
// COUNTDOWN
// =========================

const tanggalAcara =
    new Date(dataUndangan.tanggalCountdown).getTime();


const countdown =
    setInterval(function () {

        const sekarang =
            new Date().getTime();

        const jarak =
            tanggalAcara - sekarang;


        if (jarak <= 0) {

            clearInterval(countdown);

            document.getElementById("hari").textContent =
                "0";

            document.getElementById("jam").textContent =
                "0";

            document.getElementById("menit").textContent =
                "0";

            document.getElementById("detik").textContent =
                "0";

            return;

        }


        const hari =
            Math.floor(
                jarak /
                (1000 * 60 * 60 * 24)
            );


        const jam =
            Math.floor(
                (jarak %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const menit =
            Math.floor(
                (jarak %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const detik =
            Math.floor(
                (jarak %
                    (1000 * 60)) /
                1000
            );


        document.getElementById("hari").textContent =
            hari;

        document.getElementById("jam").textContent =
            jam;

        document.getElementById("menit").textContent =
            menit;

        document.getElementById("detik").textContent =
            detik;

    }, 1000);



// =========================
// SALIN REKENING
// =========================

function salinRekening() {

    const rekening =
        dataUndangan.rekening;


    navigator.clipboard
        .writeText(rekening)

        .then(function () {

            alert(
                "Nomor rekening berhasil disalin!"
            );

        })

        .catch(function () {

            alert(
                "Nomor rekening gagal disalin. Silakan salin secara manual."
            );

        });

}

// =========================
// MUSIK
// =========================

function toggleMusik() {

    const musik =
        document.getElementById("musik");

    const tombol =
        document.getElementById("tombolMusik");


    if (musik.paused) {

        musik.play();

        tombol.textContent =
            "🔊";

    } else {

        musik.pause();

        tombol.textContent =
            "🎵";

    }

}
// =========================
// GALERI LIGHTBOX
// =========================

// Foto galeri
const semuaFotoGaleri =
    document.querySelectorAll(".fotoGaleri");
// Sumber musik
const sumberMusik =
    document.getElementById("sumberMusik");

if (sumberMusik) {

    sumberMusik.src =
        dataUndangan.musik;
document.getElementById("musik").load();
}
// Isi foto galeri otomatis
semuaFotoGaleri.forEach(function (foto, index) {

    if (dataUndangan.galeri[index]) {

        foto.src =
            dataUndangan.galeri[index];

    }

});


// Lightbox
const lightbox =
    document.getElementById("lightbox");

const gambarBesar =
    document.getElementById("gambarBesar");


semuaFotoGaleri.forEach(function (foto) {

    foto.addEventListener("click", function () {

        lightbox.style.display =
            "flex";

        gambarBesar.src =
            foto.src;

    });

});


function tutupLightbox() {

    lightbox.style.display =
        "none";

}
// =========================
// KLIK FOTO MEMPELAI
// =========================

if (fotoPria) {

    fotoPria.addEventListener("click", function () {

        lightbox.style.display =
            "flex";

        gambarBesar.src =
            fotoPria.src;

    });

}

if (fotoWanita) {

    fotoWanita.addEventListener("click", function () {

        lightbox.style.display =
            "flex";

        gambarBesar.src =
            fotoWanita.src;

    });

}
// =========================
// UCAPAN & DOA
// =========================

const scriptURL =
    "https://script.google.com/macros/s/AKfycbzIWiSI29wbZrbgj3Xgs6vrQ6bACVNKwJ6Kt2debaBp5JcKnJViGxyZkiydnq17eGmxNg/exec";


// =========================
// KIRIM UCAPAN
// GOOGLE SHEETS + WHATSAPP
// =========================

function kirimUcapan() {

    const namaInput =
        document.getElementById("namaUcapan");

    const ucapanInput =
        document.getElementById("isiUcapan");


    if (!namaInput || !ucapanInput) {

        alert(
            "Form ucapan tidak ditemukan."
        );

        return;

    }


    const nama =
        namaInput.value.trim();

    const ucapan =
        ucapanInput.value.trim();


    if (nama === "") {

        alert(
            "Silakan isi nama terlebih dahulu."
        );

        namaInput.focus();

        return;

    }


    if (ucapan === "") {

        alert(
            "Silakan tulis ucapan dan doa terlebih dahulu."
        );

        ucapanInput.focus();

        return;

    }


    const data = {

        nama: nama,

        ucapan: ucapan

    };


    fetch(
        scriptURL,
        {
            method: "POST",

            body: JSON.stringify(data)
        }
    )

    .then(function(response) {

        if (!response.ok) {

            throw new Error(
                "Gagal terhubung ke Google Sheets."
            );

        }

        return response.json();

    })

    .then(function(data) {

        if (data.status === "success") {

            namaInput.value = "";

            ucapanInput.value = "";


            alert(
                "Ucapan berhasil dikirim. Terima kasih 🤲"
            );


            tampilkanUcapan();


        } else {

            alert(
                "Ucapan belum berhasil dikirim."
            );

        }

    })

    .catch(function(error) {

        console.error(
            "Error:",
            error
        );

        alert(
            "Terjadi kesalahan saat mengirim ucapan."
        );

    });

}// =========================
// TAMPILKAN UCAPAN
// =========================

function tampilkanUcapan() {

    const daftar =
        document.getElementById("daftarUcapan");

    if (!daftar) {

        console.log(
            "Elemen daftarUcapan tidak ditemukan."
        );

        return;
    }

    daftar.innerHTML =
        '<p class="loading-ucapan">Memuat ucapan...</p>';


    fetch(scriptURL)

    .then(function(response) {

        if (!response.ok) {

            throw new Error(
                "Gagal mengambil data ucapan."
            );

        }

        return response.json();

    })

    .then(function(data) {

        daftar.innerHTML = "";


        if (
            !Array.isArray(data) ||
            data.length === 0
        ) {

            daftar.innerHTML =
                '<p class="loading-ucapan">' +
                'Belum ada ucapan. Jadilah yang pertama memberikan doa 🤲' +
                '</p>';

            return;
        }


        const dataTerbaru =
            [...data].reverse();


        dataTerbaru.forEach(function(item) {

            const kotak =
                document.createElement("div");

            kotak.className =
                "kotak-ucapan";


            const nama =
                document.createElement("strong");

            nama.textContent =
                item.nama || "";


            const isi =
                document.createElement("p");

            isi.textContent =
                item.ucapan || "";


            kotak.appendChild(nama);
            kotak.appendChild(isi);

            daftar.appendChild(kotak);

        });

    })

    .catch(function(error) {

        console.error(
            "Gagal mengambil ucapan:",
            error
        );


        daftar.innerHTML =
            '<p class="loading-ucapan">' +
            'Ucapan belum dapat dimuat.' +
            '</p>';

    });

}