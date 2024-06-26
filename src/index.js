import "./style.css";
const handleDropdownMenuClick = () => {
  const options = document.querySelector(".options");
  options.classList.toggle("visible");
};

const menu = document.querySelector(".menu");
menu.addEventListener("click", handleDropdownMenuClick);
