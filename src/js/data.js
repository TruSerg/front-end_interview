const data = () => {
  const form = document.querySelector(".form");
  const formInput = form.querySelector(".form__input");
  const inputError = form.querySelector(".form__error");
  const modal = document.querySelector(".modal");
  const modalTitle = modal.querySelector(".modal__title");

  const URI_API = "https://jsonplaceholder.typicode.com/posts";

  const sendData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: data,
      });

      modal.classList.add("modal_open");

      modalTitle.textContent = "Данные отправлены успешно!";

      modalTitle.style.color = "#008000";

      return await response.json();
    } catch (e) {
      modal.classList.add("modal_open");

      modalTitle.textContent = "Ошибка отправки данных!";

      modalTitle.style.color = "#ff0000";
    } finally {
      setTimeout(() => {
        modal.classList.remove("modal_open");
      }, 3000);

      formInput.value = "";
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (formInput.value.trim().toLowerCase()) {
      sendData(URI_API, JSON.stringify(formInput.value));

      inputError.style.display = "none";
    } else {
      inputError.style.display = "block";

      setTimeout(() => {
        inputError.style.display = "none";
      }, 3000);
    }
  });
};

data();
