const listButton = document.querySelectorAll(".listBtn");
const scrollUpBtn = document.querySelector(".scrollUpBtn");

listButton.forEach((button) =>
  button.addEventListener("click", handleNavClick)
);

function handleNavClick(event) {
  const anchorVal = event.target.id;
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

const imageElements = {
  project1: document.getElementById("project1").querySelector("img"),
  project2: document.getElementById("project2").querySelector("img"),
  project3: document.getElementById("project3").querySelector("img"),
  project4: document.getElementById("project4").querySelector("img"),
  project5: document.getElementById("project5").querySelector("img"),
};
const elemPrefix = "https://4f7df317.mahmoud-barghout.pages.dev";
const imageSources = {
  project1: [
    elemPrefix + "/project-screenshots/project1/image2.png",
    elemPrefix + "/project-screenshots/project1/image3.png",
    elemPrefix + "/project-screenshots/project1/image4.png",
    elemPrefix + "/project-screenshots/project1/image5.png",
  ],
  project2: [
    elemPrefix + "/project-screenshots/project2/image2.png",
    elemPrefix + "/project-screenshots/project2/image3.png",
    elemPrefix + "/project-screenshots/project2/image4.png",
    elemPrefix + "/project-screenshots/project2/image5.png",
  ],
  project3: [
    elemPrefix + "/project-screenshots/project3/image2.png",
    elemPrefix + "/project-screenshots/project3/image3.png",
    elemPrefix + "/project-screenshots/project3/image4.png",
    elemPrefix + "/project-screenshots/project3/image5.png",
    elemPrefix + "/project-screenshots/project3/image6.png",
    elemPrefix + "/project-screenshots/project3/image7.png",
  ],
  project4: [
    elemPrefix + "/project-screenshots/project4/image2.png",
    elemPrefix + "/project-screenshots/project4/image3.png",
    elemPrefix + "/project-screenshots/project4/image4.png",
  ],
  project5: [
    elemPrefix + "/project-screenshots/project5/image2.png",
    elemPrefix + "/project-screenshots/project5/image3.png",
    elemPrefix + "/project-screenshots/project5/image4.png",
    elemPrefix + "/project-screenshots/project5/image5.png",
  ],
};

const intervalIds = {};

function startImageChange(projectId) {
  // Start changing the image source for the specified div every 2 seconds
  intervalIds[projectId] = setInterval(
    () => changeImageSource(projectId),
    1500
  );
}

function changeImageSource(projectId) {
  // Change the image source for the specified div to the next source in the array
  console.log(imageElements[projectId].src);
  const currentIndex = imageSources[projectId].indexOf(
    imageElements[projectId].src
  );
  const nextIndex = (currentIndex + 1) % imageSources[projectId].length;
  imageElements[projectId].src = imageSources[projectId][nextIndex];

  console.log(currentIndex);
  console.log(nextIndex);
  console.log(imageSources[projectId][nextIndex]);
}

function resetImage(projectId) {
  // Reset the image for the specified div to the original source when the mouse leaves the div
  clearInterval(intervalIds[projectId]);
  imageElements[projectId].src = `project-screenshots/${projectId}/image1.png`;
}

const form = document.getElementById("contactForm");
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  fetch(form.action, {
    method: form.method,
    body: formData,
    mode: "no-cors",
  })
    .then((Response) => {
      console.log(Response);
      window.location.href = "thankyou.html";
    })
    .catch((e) => {
      console.error("error sending data:", e);
    });
}
