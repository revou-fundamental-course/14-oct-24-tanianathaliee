window.addEventListener("load", function () {
    if (!sessionStorage.getItem("namaUser")) {
        let name = prompt("Halo, siapa nama anda?", "");
        if (name) {
            sessionStorage.setItem("namaUser", name);
            document.getElementById("nama-user").innerHTML = name;
        }
    } else {
        document.getElementById("nama-user").innerHTML = sessionStorage.getItem("namaUser");
    }

    // Panggilan fungsi showDivs saat halaman dimuat
    showDivs(); 
});

let slideIndex = 0;

function showDivs() {
    var imgList = document.getElementsByClassName("img-slideshow");
    
    for (var i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"; // Menyembunyikan gambar
    }
    
    slideIndex++; // Tambah indeks
    if (slideIndex >= imgList.length) slideIndex = 0; // Kembali ke gambar pertama jika sudah mencapai akhir
    
    imgList[slideIndex].style.display = "block"; // Tampilkan gambar yang sesuai
    setTimeout(showDivs, 3000); // Ulang setiap 3 detik (3000ms)
}

// MESSAGE US (VALIDASI DAN TAMPILKAN VALUE)
let nameInput = document.getElementById("nama");
let tlInput = document.getElementById("tanggal-lahir");
let jkInputs = document.getElementsByName("jenis-kelamin");
let pesanInput = document.getElementById("pesan");
let messageContainer = document.getElementById("message-container");

document.getElementById("kirim").addEventListener("click", function (event) {
    event.preventDefault();

    const jkInput = document.querySelector('input[name="jenis-kelamin"]:checked');

    let isValid = true;

    [nameInput, tlInput, pesanInput].forEach(input => {
        input.classList.remove("error");
    });

    if (nameInput.value.trim() === "") {
        nameInput.classList.add("error");
        isValid = false;
    }

    if (tlInput.value.trim() === "") {
        tlInput.classList.add("errorText");
        isValid = false;
    }

    if (!jkInput) {
        const jkLabel = document.querySelector('label[for="jenis-kelamin"]');
        jkLabel.classList.add("errorText");
        isValid = false;
    }

    if (pesanInput.value.trim() === "") {
        pesanInput.classList.add("error");
        isValid = false;
    }

    if (isValid) {
        document.getElementById("nama-dari-input").innerHTML = nameInput.value;
        document.getElementById("tl-dari-input").innerHTML = tlInput.value;
        document.getElementById("jk-dari-input").innerHTML = jkInput ? jkInput.value : 'Belum dipilih';
        document.getElementById("pesan-dari-input").innerHTML = pesanInput.value;

        const currentDate = new Date();
        document.getElementById("waktu-dari-input").innerHTML = currentDate.toString();

        messageContainer.classList.remove("hidden");

        nameInput.value = "";
        tlInput.value = "";
        pesanInput.value = "";
        jkInputs.forEach(input => {
            input.checked = false;
        });
    }
});
