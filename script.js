let burguerMenu = document.querySelector(".burguerFlex");
let burguerNav = document.querySelector(".burguerNav");
let burguerStatus = false;

function crossLine() {
  burguerStatus = !burguerStatus;
  if(burguerStatus) {
    this.classList.add("menu");
    burguerNav.style.display = "block";
  }
  else {
    this.classList.remove("menu");
    burguerNav.style.display = "none";
  }
  
}

burguerMenu.addEventListener("click", crossLine);