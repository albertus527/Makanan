console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")

function tombol() {
  var klik = document.getElementById("daftar");
  if(klik.style.display ==="none") {
    klik.style.display ="block";
  } else {
    klik.style.display ="none";
  }
}
