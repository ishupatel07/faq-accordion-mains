// const toggleActive = document.querySelector("#toggle-active")
// const featureSection = document.querySelector(".feature-section")


// toggleActive.addEventListener("click" ,() => {
//         featureSection.classList.toggle("active") 
// })


const toggleActive = document.querySelectorAll(".toggle img ");
const plusIcons = document.querySelectorAll(".plus-icon");



toggleActive.forEach((toggle) => {
  toggle.addEventListener("click", () => {
      const featureSection = toggle.parentElement.nextElementSibling;
      featureSection.classList.toggle("active");
      if (toggle.src.includes("icon-plus")) {
        toggle.src = "/assets/images/icon-minus.svg";
      } else {
        toggle.src = "/assets/images/icon-plus.svg";
      }
  });
});
