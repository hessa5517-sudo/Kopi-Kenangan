// toggle class active untuk hamburger menu
const navbarMenu = document.querySelector(".navbar-menu");

// ketika hamburger menu diclik maka fungsi CSS active
document.querySelector("#hamburger-menu").onclick = () => {
  navbarMenu.classList.toggle("active");
};

// ketika diklik diluar layar maka navbar nav nonaktif
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});
