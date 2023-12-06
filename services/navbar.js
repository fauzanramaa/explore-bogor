document.addEventListener("DOMContentLoaded", function () {
  // mengambil referensi ke elemen-elemen yang diperlukan
  const navToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector("nav ul");

  // menambahkan event listener untuk mengaktifkan atau menonaktifkan daftar saat tombol toggle diklik
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
    if (navList.classList.contains("active")) {
      navList.style.maxHeight = navList.scrollHeight + "px"; 
    } else {
      navList.style.maxHeight = "0"; 
    }
  });
});
