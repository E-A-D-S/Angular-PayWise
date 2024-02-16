document.addEventListener("DOMContentLoaded", function() {
  const supportIcon = document.getElementById("support-icon");
  const supportMenu = document.getElementById("support-menu");

  supportIcon.addEventListener("click", function() {
    supportMenu.classList.toggle("show");
  });
});
