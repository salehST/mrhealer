
// go to top start*//


document.addEventListener('DOMContentLoaded', () => {

//   const links = document.querySelectorAll("#nav a");
//   for (const link of links) {
//   link.addEventListener("click", clickHandler);
//   }

//   function clickHandler(e) {
//   e.preventDefault();
//   const href = this.getAttribute("href");
//   const offsetTop = document.querySelector(href).offsetTop;
//   const offsetBottom = document.querySelector(href).offsetBottom;

//   scroll({
//       top: offsetTop,
//       bottom: offsetBottom,
//       behavior: "smooth"
//   });
// }

  const backToTopButton = document.querySelector(".back-to-top");
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};
  const showOnPx = 100;
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};


  document.addEventListener("scroll", () => {
    // console.log("Scroll Height: ", scrollContainer().scrollHeight);
    // console.log("Client Height: ", scrollContainer().clientHeight);

    const scrolledPercentage =
      (scrollContainer().scrollTop /
        (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
      100;

    pageProgressBar.style.width = `${scrolledPercentage}%`;
    if (scrollContainer().scrollTop > showOnPx) {
      backToTopButton.classList.remove("hide");
    } else {
      backToTopButton.classList.add("hide");
    }
  });
  
backToTopButton.addEventListener("click", goToTop);
});
