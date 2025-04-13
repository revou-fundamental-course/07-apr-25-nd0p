window.onload = function () {
  const name = prompt("Please Enter Your Name:");
  const welcome = document.getElementById("welcome");
  if (name && welcome) {
    welcome.textContent = `Hi ${name}, Enhace Your Future With TechEduca`;
  }
};
