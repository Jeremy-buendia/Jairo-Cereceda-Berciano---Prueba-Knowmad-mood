//Control Menú Hamburguesa

let btnToggle = document.getElementById("toggle");

let abierto = false;

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    btnToggle.style.display = "inline";
  } else {
    btnToggle.style.display = "none";
  }
});

if (window.innerWidth <= 768) {
  btnToggle.style.display = "inline";
} else {
  btnToggle.style.display = "none";
}

btnToggle.addEventListener("click", () => {
  let aside = document.getElementsByTagName("aside")[0];

  if (!abierto) {
    aside.style.display = "block";
    abierto = true;
  } else {
    aside.style.display = "none";
    abierto = false;
  }
});
