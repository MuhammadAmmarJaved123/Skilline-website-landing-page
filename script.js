const hamburgerBtn = document.getElementById("hamburger");
const togglenav = document.getElementById("toggle-nav");
const closeBtn = document.getElementById("close-btn");
const body = document.getElementById("body");

// display side par

const onClickHamburger = () => {
  // togglenav.style.display = "flex";
  togglenav.style.width = "180px";
  body.style.overflow = "hidden";
  // hamburgerBtn.style.display = "none";

  console.log("clicked");
};
// close side bar
const onClickClose = () => {
  // togglenav.style.display = "none";
  togglenav.style.width = "0px";
  body.style.overflow = "visible";
  // hamburgerBtn.style.display = "block";
  console.log("clicked");
};

hamburgerBtn.addEventListener("click", onClickHamburger);
closeBtn.addEventListener("click", onClickClose);
