// script.js
document.getElementById("country").addEventListener("change", function (event) {
  updatePrice();
});

document.getElementById("student").addEventListener("change", function (event) {
  updatePrice();
});

function updatePrice() {
  const country = document.getElementById("country").value;
  const isStudent = document.getElementById("student").value === "yes";
  let price = "350 TL"; // Varsayılan fiyat Türkiye normal kullanıcılar

  // Ülkeye ve öğrenci durumuna göre fiyat belirleme
  if (country === "TR") {
    price = isStudent ? "100 TL" : "350 TL"; // Türkiye öğrenci ve normal fiyatı
  } else if (country === "EU" || country === "AU" || country === "NA") {
    price = "75 EUR"; // Avrupa, Avustralya ve Kuzey Amerika
  } else if (country === "other") {
    price = "15 EUR"; // Diğer kalan kıtalar
  }

  document.getElementById("price").textContent = price;
}

document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Form verilerini al
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;
    const country = document.getElementById("country").value;
    const isStudent = document.getElementById("student").value === "yes";

    // Basit doğrulama
    if (!name || !email || !cardNumber || !expiryDate || !cvv) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    // Sahte ödeme işlemi
    setTimeout(() => {
      alert("Ödeme başarılı! Teşekkür ederiz.");
      // Ödeme başarılı olduğunda yönlendirme yap
      window.location.href = "uyelik-bilgilendirme.html"; // Yönlendirilmek istenen URL
    }, 1000);
  });

// Sayfa yüklendiğinde fiyatı güncelle
updatePrice();
