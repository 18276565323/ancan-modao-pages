function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-toast]").forEach((node) => {
    node.addEventListener("click", () => showToast(node.dataset.toast));
  });
});
