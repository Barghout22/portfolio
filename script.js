const listButton = document.querySelectorAll(".listBtn");
const scrollUpBtn = document.querySelector(".scrollUpBtn");

listButton.forEach((button) =>
  button.addEventListener("click", handleNavClick)
);

function handleNavClick(event) {
  const anchorVal = event.target.id;
  console.log(anchorVal);
  console.log(document.querySelector("#section1"));
  setTimeout(() => {
    scrollUpBtn.style.display = "block";
  }, 1500);
  switch (anchorVal) {
    case "listItem1":
      document
        .querySelector("#section1")
        .scrollIntoView({ behavior: "smooth" });
      break;
    case "listItem2":
      document
        .querySelector("#section2")
        .scrollIntoView({ behavior: "smooth" });
      break;
    case "listItem3":
      document
        .querySelector("#section3")
        .scrollIntoView({ behavior: "smooth" });
      break;
    case "listItem4":
      document
        .querySelector("#section4")
        .scrollIntoView({ behavior: "smooth" });
      break;
  }
}
scrollUpBtn.addEventListener("onmouseenter", () => {
  scrollUpBtn.textContent = "scroll to the top";
  scrollUpBtn.style.width = "200px";
});
scrollUpBtn.addEventListener("click", () => {
  document.querySelector("header").scrollIntoView({ behavior: "smooth" });
  scrollUpBtn.style.display = "none";
});

document.addEventListener("wheel", () => {
  if (window.scrollY > 1100) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});
