const hamburgerBtn = document.getElementById("hamburger");
const togglenav = document.getElementById("toggle-nav");
const closeBtn = document.getElementById("close-btn");
// display side par
const onClickHamburger = () => {
  togglenav.style.display = "flex";
  hamburgerBtn.style.display = "none";
  console.log("clicked");
};
// close side bar
const onClickClose = () => {
  togglenav.style.display = "none";
  hamburgerBtn.style.display = "block";
  console.log("clicked");
};

hamburgerBtn.addEventListener("click", onClickHamburger);
closeBtn.addEventListener("click", onClickClose);
