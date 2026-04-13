// PASTIKAN JALAN SETELAH HTML KELOAD
document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const input = card.querySelector(".qty");
    const totalText = card.querySelector(".total");
    const harga = parseInt(card.dataset.harga);

    function updateTotal() {
      let qty = parseInt(input.value) || 0;
      let total = qty * harga;
      totalText.innerText = "Total: Rp " + total.toLocaleString();
    }

    input.addEventListener("input", updateTotal);
    updateTotal();
  });

});


function beli(btn) {
  let card = btn.closest(".card");

  let nama = card.dataset.nama;
  let harga = parseInt(card.dataset.harga);
  let qty = card.querySelector(".qty").value;

  let total = harga * qty;

  let nomor = "6285709594928"; // ganti nomor lu

  let pesan = `Halo, saya ingin membeli:
Produk: ${nama}
Jumlah: ${qty} gram
Total: Rp ${total}`;

  let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
}
