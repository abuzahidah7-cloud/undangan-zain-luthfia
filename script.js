// =========================
// BUKA UNDANGAN
// =========================

function bukaUndangan() {

    const cover = document.getElementById("cover");
    const isiUndangan = document.getElementById("isiUndangan");
    const musik = document.getElementById("musikUndangan");
    const tombolMusik = document.getElementById("tombolMusik");

    // Sembunyikan cover
    if (cover) {
        cover.style.display = "none";
    }

    // Tampilkan isi undangan
    if (isiUndangan) {
        isiUndangan.classList.remove("hidden");
    }

    // Putar musik
    if (musik) {

        musik.play()
            .then(function() {

                if (tombolMusik) {
                    tombolMusik.innerText = "🔊";
                }

            })
            .catch(function(error) {

                console.log(
                    "Musik belum dapat diputar:",
                    error
                );

            });

    }

    // Kembali ke bagian paling atas
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =========================
// TOMBOL MUSIK
// =========================

function toggleMusik() {

    const musik =
        document.getElementById("musikUndangan");

    const tombol =
        document.getElementById("tombolMusik");

    if (!musik) {
        return;
    }

    if (musik.paused) {

        musik.play()
            .then(function() {

                if (tombol) {
                    tombol.innerText = "🔊";
                }

            })
            .catch(function(error) {

                console.log(
                    "Musik tidak dapat diputar:",
                    error
                );

            });

    } else {

        musik.pause();

        if (tombol) {
            tombol.innerText = "🔇";
        }

    }

}


// =========================
// RSVP WHATSAPP
// =========================

function kirimRSVP() {

    const namaInput =
        document.getElementById("namaTamu");

    const statusInput =
        document.getElementById("statusKehadiran");

    if (!namaInput || !statusInput) {

        alert("Form RSVP tidak ditemukan.");
        return;

    }

    const nama =
        namaInput.value.trim();

    const kehadiran =
        statusInput.value;


    // Cek nama
    if (nama === "") {

        alert(
            "Silakan isi nama terlebih dahulu."
        );

        namaInput.focus();
        return;

    }


    // Cek kehadiran
    if (kehadiran === "") {

        alert(
            "Silakan pilih konfirmasi kehadiran."
        );

        statusInput.focus();
        return;

    }


    const nomorWhatsApp =
        "62895351836177";


    const pesan =
        "Assalamu'alaikum 😊\n\n" +
        "Saya ingin mengonfirmasi kehadiran untuk acara Walimatul Ursy Zain & Luthfia.\n\n" +
        "Nama: " +
        nama +
        "\n" +
        "Kehadiran: " +
        kehadiran +
        "\n\n" +
        "Terima kasih.";


    const url =
        "https://wa.me/" +
        nomorWhatsApp +
        "?text=" +
        encodeURIComponent(pesan);


    window.open(
        url,
        "_blank"
    );

}


// =========================
// LIGHTBOX GALERI
// =========================

function bukaFoto(src) {

    const lightbox =
        document.getElementById("lightbox");

    const foto =
        document.getElementById("fotoLightbox");

    if (!lightbox || !foto) {
        return;
    }

    foto.src = src;

    lightbox.style.display = "flex";

}


function tutupFoto() {

    const lightbox =
        document.getElementById("lightbox");

    if (!lightbox) {
        return;
    }

    lightbox.style.display = "none";

}


// =========================
// SALIN NOMOR REKENING
// =========================

function salinRekening() {

    const elemenNomor =
        document.getElementById("nomorRekening");

    if (!elemenNomor) {

        alert(
            "Nomor rekening tidak ditemukan."
        );

        return;

    }


    const nomor =
        elemenNomor.innerText.trim();


    if (nomor === "") {

        alert(
            "Nomor rekening kosong."
        );

        return;

    }


    // Gunakan Clipboard API
    if (navigator.clipboard) {

        navigator.clipboard.writeText(nomor)

            .then(function() {

                alert(
                    "Nomor rekening berhasil disalin."
                );

            })

            .catch(function() {

                alert(
                    "Nomor rekening belum dapat disalin."
                );

            });

    } else {

        alert(
            "Fitur salin tidak tersedia di browser ini."
        );

    }

}


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


    // Cek nama
    if (nama === "") {

        alert(
            "Silakan isi nama terlebih dahulu."
        );

        namaInput.focus();
        return;

    }


    // Cek ucapan
    if (ucapan === "") {

        alert(
            "Silakan tulis ucapan dan doa terlebih dahulu."
        );

        ucapanInput.focus();
        return;

    }


    // =========================
    // URL GOOGLE APPS SCRIPT
    // =========================

    const urlGoogleSheet =
        "https://script.google.com/macros/s/AKfycbzIWiSI29wbZrbgj3Xgs6vrQ6bACVNKwJ6Kt2debaBp5JcKnJViGxyZkiydnq17eGmxNg/exec";


    // =========================
    // DATA YANG DIKIRIM
    // =========================

    const data = {

        nama: nama,
        ucapan: ucapan

    };


    // =========================
    // KIRIM KE GOOGLE SHEETS
    // =========================

    fetch(
        urlGoogleSheet,
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


            // =========================
            // KIRIM KE WHATSAPP
            // =========================

            const nomorWhatsApp =
                "62895351836177";


            const pesan =
                "Assalamu'alaikum 😊\n\n" +
                "Saya ingin memberikan ucapan dan doa untuk Zain & Luthfia.\n\n" +
                "Nama: " +
                nama +
                "\n\n" +
                "Ucapan & Doa:\n" +
                ucapan +
                "\n\n" +
                "Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. 🤲";


            const urlWhatsApp =
                "https://wa.me/" +
                nomorWhatsApp +
                "?text=" +
                encodeURIComponent(pesan);


            window.open(
                urlWhatsApp,
                "_blank"
            );


            // Kosongkan form
            namaInput.value = "";
            ucapanInput.value = "";


            alert(
                "Ucapan berhasil dikirim. Terima kasih 🤲"
            );


            // Perbarui daftar ucapan
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

}


// =========================
// MENAMPILKAN UCAPAN
// DARI GOOGLE SHEETS
// =========================

function tampilkanUcapan() {

    const urlGoogleSheet =
        "https://script.google.com/macros/s/AKfycbzIWiSI29wbZrbgj3Xgs6vrQ6bACVNKwJ6Kt2debaBp5JcKnJViGxyZkiydnq17eGmxNg/exec";


    const daftar =
        document.getElementById("daftarUcapan");


    if (!daftar) {

        console.log(
            "Elemen daftarUcapan tidak ditemukan."
        );

        return;

    }


    // Tampilkan proses memuat
    daftar.innerHTML =
        '<p class="loading-ucapan">Memuat ucapan...</p>';


    fetch(urlGoogleSheet)

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


        // Jika tidak ada data
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


        // Data terbaru ditampilkan paling atas
        const dataTerbaru =
            [...data].reverse();


        dataTerbaru.forEach(function(item) {

            // Kotak ucapan
            const kotak =
                document.createElement("div");

            kotak.className =
                "ucapan-item";


            // Nama
            const nama =
                document.createElement("div");

            nama.className =
                "nama";

            nama.textContent =
                item.nama || "";


            // Isi ucapan
            const isi =
                document.createElement("div");

            isi.className =
                "isi";

            isi.textContent =
                item.ucapan || "";


            // Waktu
            const waktu =
                document.createElement("div");

            waktu.className =
                "waktu";

            waktu.textContent =
                item.waktu || "";


            // Gabungkan
            kotak.appendChild(nama);
            kotak.appendChild(isi);
            kotak.appendChild(waktu);


            // Masukkan ke halaman
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


// =========================
// JALANKAN SAAT HALAMAN
// SELESAI DIMUAT
// =========================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        tampilkanUcapan();

    }
);
// =========================
// NAMA TAMU OTOMATIS
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);

    const namaTamu = params.get("to");

    const elemenNama = document.getElementById("namaTamu");

    if (namaTamu && elemenNama) {
        elemenNama.textContent = namaTamu;
    }

});