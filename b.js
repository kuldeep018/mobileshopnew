document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText = "Thank you! Your message has been sent.";
  this.reset();
});

document.getElementById("buybtn").addEventListener("click", function () {
  document.getElementById("purchaseMessage").innerText = "Thank you for your purchase!";
  setTimeout(function () {
    document.getElementById("purchaseMessage").innerText = "";
  }, 3000);
});
