// Select the container for the tabs
const tabContainer = document.querySelector(".operations__tab-container");

// Select all the individual tabs
const tabs = document.querySelectorAll(".operations__tab");

// Select all the content sections corresponding to the tabs
const tabsContent = document.querySelectorAll(".operations__content");

// Add an event listener for the click event on the tab container
tabContainer.addEventListener("click", function (e) {
  // Log a message to indicate that a click event occurred
  console.log("Clicked");

  // Find the closest ancestor element with the class "operations__tab"
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  // If no tab was clicked, exit the function
  if (!clicked) return;

  // Remove the "operations__tab--active" class from all tabs
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));

  // Add the "operations__tab--active" class to the clicked tab
  clicked.classList.add("operations__tab--active");

  // Remove the "operations__content--active" class from all content sections
  tabsContent.forEach((t) => t.classList.remove("operations__content--active"));

  // Find the content section associated with the clicked tab using its data attribute
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
