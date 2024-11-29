// JSON data for the slides
const data = [
  {
    text: "Exquisite Watches",
    subText: "Gold Luxury, Choose Us",
    description:
      "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
    price: "$499.00",
    image: "images/bc7c8b7d2ade47a27798d58559b94505.png",
    Color: "#f4aa69",
    Color1: "#f4aa69",
  },
  {
    text: "Dainty Timepieces",
    subText: "Silver Luxury, Choose Us",
    description:
      "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
    price: "$469.00",
    image: "images/b3cd59b6e82967a441a89bdb7f113601.png",
    Color: "#b2b4b4",
    Color1: "#b2b4b4",
  },
  {
    text: "Elegant Timepieces",
    subText: "Choose Luxury, Choose Us",
    description:
      "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
    price: "$529.00",
    image: "images/a1e0499b541d8505e2a8b346af7f884f.png",
    Color: "#39ab60",
    Color1: "#39ab60",
  },
  {
    text: "Refined Timepieces",
    subText: "Choose Luxury, Choose Us",
    description:
      "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
    price: "$599.00",
    image: "images/5112960cf7b3fd65ba1ed29d826e710a.png",
    Color: "#f45b59",
    Color1: "#f45b59",
  },
];

let currentIndex = 0;

// DOM Elements
const body = document.body;
const heading = document.querySelector(".left-side h1");
const subHeading = document.querySelector(".left-side h3");
const description = document.querySelector(".description p");
const price = document.querySelector(".price");
const productImage = document.querySelector(".img-div img");
const leftButton = document.querySelectorAll(".slide-btn")[0];
const rightButton = document.querySelectorAll(".slide-btn")[1];

// Function to update the content and trigger the transition
const updateContent = (index) => {
  const {
    text,
    subText,
    description: desc,
    price: pr,
    image,
    Color,
    Color1,
  } = data[index];

  heading.textContent = text;
  subHeading.innerHTML = subText.replace("Choose Us", `<span>Choose Us</span>`);
  description.textContent = desc;
  price.textContent = pr;
  productImage.src = image;
  body.style.background = `linear-gradient(135deg, ${Color}, ${Color1})`;

  // Reset the image position to ensure smooth transition
  productImage.classList.remove("slide-left", "slide-right");
};

// Event listeners for buttons
leftButton.addEventListener("click", () => {
  productImage.classList.add("slide-right"); // Apply slide right effect to image
  currentIndex = (currentIndex - 1 + data.length) % data.length; // Move to the previous slide
  setTimeout(() => updateContent(currentIndex), 500); // Wait for transition to complete before updating content
});

rightButton.addEventListener("click", () => {
  productImage.classList.add("slide-left"); // Apply slide left effect to image
  currentIndex = (currentIndex + 1) % data.length; // Move to the next slide
  setTimeout(() => updateContent(currentIndex), 500); // Wait for transition to complete before updating content
});

// Initialize content
updateContent(currentIndex);
