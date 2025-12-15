// Tombol "Belanja Sekarang" scroll ke produk
document.querySelector(".hero button").addEventListener("click", function () {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
});

// Klik produk → pesan WhatsApp
const products = document.querySelectorAll(".product");

products.forEach(product => {
    product.addEventListener("click", () => {
        const namaProduk = product.querySelector("h3").innerText;
        const harga = product.querySelector("p").innerText;

        const pesan = `Halo, saya mau pesan ${namaProduk} dengan harga ${harga}`;
        const whatsapp = `https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`;

        window.open(whatsapp, "_blank");
    });
});

// Navbar berubah saat scroll
w
