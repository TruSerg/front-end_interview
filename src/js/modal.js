const modal = () => {
  const modal = document.querySelector(".modal");
  const overlay = modal.querySelector(".overlay");

  overlay.addEventListener("click", () => {
    modal.classList.remove("modal_open");
  });
};

modal();
