
// go to top start*//


document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('.second-button').addEventListener('click', function () {
    document.querySelector('.animated-icon2').classList.toggle('open');
    });

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
