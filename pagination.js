document.addEventListener("DOMContentLoaded", function () {
  const assetFormBox = document.querySelector(".project-box"); // assumes this is the first box
  const imgElement = assetFormBox.querySelector(".project-img");
  const prevBtn = assetFormBox.querySelector(".prev-btn");
  const nextBtn = assetFormBox.querySelector(".next-btn");

  const images = [];
  for (let i = 1; i <= 9; i++) {
    images.push(`image/finalproj${i}.jpg`);
  }

  let currentImageIndex = 0;

  function updateImage() {
    // Fade out
    imgElement.classList.add("fade-out");

    setTimeout(() => {
      imgElement.src = images[currentImageIndex];
      // After image load, fade in
      imgElement.classList.remove("fade-out");
    }, 300); // match with transition time
  }

  prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  });

  // Initial load
  updateImage();
});



document.addEventListener("DOMContentLoaded", function () {
  const assetFormBox = document.querySelector(".project-box");
  const mediaContainer = assetFormBox.querySelector(".media-container");
  const prevBtn = assetFormBox.querySelector(".prev-btn");
  const nextBtn = assetFormBox.querySelector(".next-btn");

  const media = [
    { type: "image", src: "image/thesis1.jpg" },
    { type: "image", src: "image/thesis2.jpg" },
    { type: "video", src: "image/thesis3.mp4" }
  ];

  let currentIndex = 0;

  function updateMedia() {
    mediaContainer.innerHTML = "";

    const current = media[currentIndex];
    let element;

    if (current.type === "image") {
      element = document.createElement("img");
      element.className = "project-img fade-out";
      element.src = current.src;
      element.alt = "Project Media";
    } else if (current.type === "video") {
      element = document.createElement("video");
      element.className = "project-img fade-out";
      element.src = current.src;
      element.controls = true;
      element.autoplay = true;
      element.muted = true;
      element.loop = true;
    }

    mediaContainer.appendChild(element);

    // Trigger fade-in after a short delay
    setTimeout(() => {
      element.classList.remove("fade-out");
    }, 300);
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + media.length) % media.length;
    updateMedia();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % media.length;
    updateMedia();
  });

  // Initial display
  updateMedia();
});

