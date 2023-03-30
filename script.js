const hamburgerBtn = document.getElementById("hamburger");
const togglenav = document.getElementById("toggle-nav");
const closeBtn = document.getElementById("close-btn");

// display side par

const onClickHamburger = () => {
  // togglenav.style.display = "flex";
  togglenav.style.width = "180px";
  // hamburgerBtn.style.display = "none";

  console.log("clicked");
};
// close side bar
const onClickClose = () => {
  // togglenav.style.display = "none";
  togglenav.style.width = "0px";
  // hamburgerBtn.style.display = "block";
  console.log("clicked");
};
const onClickCloseall = () => {
  // togglenav.style.display = "none";
  togglenav.style.width = "0px";
  // hamburgerBtn.style.display = "block";
  console.log("clicked");
};

hamburgerBtn.addEventListener("click", onClickHamburger);
closeBtn.addEventListener("click", onClickClose);
