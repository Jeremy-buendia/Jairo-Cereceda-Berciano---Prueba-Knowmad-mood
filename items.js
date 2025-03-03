//Control filtros
let btnAllPosts = document.getElementById("allPosts");
let btnArt = document.getElementById("art");
let btnDevelopment = document.getElementById("development");
let btnLifeStyle = document.getElementById("lifeStyle");
let btnAccesories = document.getElementById("accesories");

let postsAll = Array.from(document.getElementsByClassName("card"));
let postsArt = Array.from(document.getElementsByClassName("art"));
let postsDevelopment = Array.from(
  document.getElementsByClassName("development")
);
let postsLifeStyle = Array.from(document.getElementsByClassName("lifeStyle"));
let postsAccesories = Array.from(document.getElementsByClassName("accesories"));

btnAllPosts.addEventListener("click", () => {
  for (let i = 0; i < postsAll.length; i++) {
    postsAll[i].style.display = "block";
  }
});

btnArt.addEventListener("click", () => {
  for (let i = 0; i < postsAll.length; i++) {
    if (!postsArt.includes(postsAll[i])) {
      postsAll[i].style.display = "none";
    } else {
      postsAll[i].style.display = "block";
    }
  }
});

btnDevelopment.addEventListener("click", () => {
  for (let i = 0; i < postsAll.length; i++) {
    if (!postsDevelopment.includes(postsAll[i])) {
      postsAll[i].style.display = "none";
    } else {
      postsAll[i].style.display = "block";
    }
  }
});

btnLifeStyle.addEventListener("click", () => {
  for (let i = 0; i < postsAll.length; i++) {
    if (!postsLifeStyle.includes(postsAll[i])) {
      postsAll[i].style.display = "none";
    } else {
      postsAll[i].style.display = "block";
    }
  }
});

btnAccesories.addEventListener("click", () => {
  for (let i = 0; i < postsAll.length; i++) {
    if (!postsAccesories.includes(postsAll[i])) {
      postsAll[i].style.display = "none";
    } else {
      postsAll[i].style.display = "block";
    }
  }
});
