document.addEventListener("DOMContentLoaded", function () {
  // Asset Form Project
  const assetProject = document.querySelector(".asset-form-project");
  setupImageSlider(assetProject, "finalproj", 1, 9);
  
  // Thesis Project (with mixed media)
  const thesisProject = document.querySelector(".thesis-project");
  setupMediaSlider(thesisProject, [
    { type: "image", src: "image/thesis1.jpg" },
    { type: "video", src: "image/thesis3.mp4" }
  ]);
  
  // Activity Project
  const activityProject = document.querySelector(".activity-project");
  setupImageSlider(activityProject, "activity", 1, 3);
  
  // Indos Web Project
  const indosProject = document.querySelector(".indos-project");
  setupImageSlider(indosProject, "indos", 1, 3);
});

// Helper function for image-only sliders
function setupImageSlider(project, imagePrefix, startIndex, endIndex) {
  const slider = project.querySelector(".image-slider");
  const img = slider.querySelector(".project-img");
  const prevBtn = slider.querySelector(".prev-btn");
  const nextBtn = slider.querySelector(".next-btn");
  
  const images = [];
  for (let i = startIndex; i <= endIndex; i++) {
    images.push(`image/${imagePrefix}${i}.jpg`);
  }
  
  let currentIndex = 0;
  
  function updateImage() {
    img.classList.add("fade-out");
    setTimeout(() => {
      img.src = images[currentIndex];
      img.classList.remove("fade-out");
    }, 300);
  }
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
  
  updateImage();
}

// Helper function for mixed media sliders
function setupMediaSlider(project, mediaItems) {
  const slider = project.querySelector(".image-slider");
  const mediaContainer = slider.querySelector(".media-container");
  const prevBtn = slider.querySelector(".prev-btn");
  const nextBtn = slider.querySelector(".next-btn");
  
  let currentIndex = 0;
  
  function updateMedia() {
    mediaContainer.innerHTML = "";
    mediaContainer.classList.add("loading");
    
    const current = mediaItems[currentIndex];
    let element;

    if (current.type === "image") {
      element = document.createElement("img");
      element.onload = () => finishMediaTransition(element);
    } else {
      element = document.createElement("video");
      element.autoplay = true;
      element.muted = true;
      element.loop = true;
      element.onloadeddata = () => finishMediaTransition(element);
    }

    element.className = "project-img hidden";
    element.src = current.src;
    element.alt = "Project media";
    mediaContainer.appendChild(element);
  }
  
  function finishMediaTransition(element) {
    element.classList.remove("hidden");
    mediaContainer.classList.remove("loading");
  }
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    updateMedia();
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % mediaItems.length;
    updateMedia();
  });
  
  updateMedia();
}
