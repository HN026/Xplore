// setting the drop down menu code

document.addEventListener("click", (e) => {
  const isdropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isdropdownButton && e.target.closest("[data-dropdown]") != null) {
    return;
  }

  let currentDropdown;
  if (isdropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) {
      return;
    } else {
      dropdown.classList.remove("active");
    }
  });
});




const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("li.active1").classList.remove("active1");
    item.classList.add("active1");
  });
});