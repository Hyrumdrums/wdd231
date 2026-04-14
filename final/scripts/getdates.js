document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
  "Last Modified: " + new Date(document.lastModified).toLocaleDateString();
