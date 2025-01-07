// footer.js
document.addEventListener("DOMContentLoaded", () => {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    fetch("footer.html")
      .then(response => response.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
      })
      fetch("../footer.html")
      .then(response => response.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
      })
      .catch(error => {
        console.error("Error loading footer:", error);
      });
  });
  