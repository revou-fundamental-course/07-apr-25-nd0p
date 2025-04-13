window.onload = function () {
  const name = prompt("Masukkan Nama Anda:");
  const welcome = document.getElementById("welcome");
  if (name && welcome) {
    welcome.textContent = `Hi ${name}, Enhace Your Future With TechEduca`;
  }
};
