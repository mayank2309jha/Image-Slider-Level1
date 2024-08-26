const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const image = document.querySelector(".image img");

let index = 1;
const images = [
  "image-1.jpg",
  "image-2.jpg",
  "image-3.jpg",
  "image-4.jpg",
  "image-5.jpg",
];

const updateImage = (button) => {
  if (button == "left") {
    index = index == 0 ? 4 : index - 1;
    const img = images[index];
    image.src = img;
  } else {
    index = (index + 1) % 5;
    const img = images[index];
    image.src = img;
  }
};
leftButton.addEventListener("click", () => {
  updateImage("left");
});

rightButton.addEventListener("click", () => {
  updateImage("right");
});
