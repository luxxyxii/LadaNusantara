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


// BELI (WA)
function beli(btn) {
  const card = btn.parentElement;
  const nama = card.dataset.nama;
  const qty = card.querySelector(".qty").value;

  let pesan = `Halo kak, saya mau beli ${nama} sebanyak ${qty} gram`;
  let nomor = "6285709594928"; // GANTI NOMOR LU

  let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}