const header = document.querySelector(".header-content");
const mobileHeader = document.querySelector(".headerMobile-content");

const checkSize = () => {
  if (window.innerWidth < 768) {
    header.style.display = "none";
    mobileHeader.style.display = "block";
  } else {
    header.style.display = "block";
    mobileHeader.style.display = "none";
  }
};

window.addEventListener("resize", checkSize);

checkSize();
