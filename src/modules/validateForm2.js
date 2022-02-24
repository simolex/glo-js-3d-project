const validateForm2 = () => {
  const form = document.getElementById("form2");
  const messageInput = document.getElementById("form2-message");
  const nameInput = document.getElementById("form2-name");
  const emailInput = document.getElementById("form2-email");
  const phoneInput = document.getElementById("form2-phone");

  const hasNotText = /[^а-яА-Я \-]/gi;
  const hasNotEmail = /[^\w\-\@\.\!\~\*\']/gi;
  const hasNotTelephone = /[^\d\(\)\-']/gi;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isError = false;

    if (!hasNotText.test(messageInput.value) && messageInput.value !== "") {
      console.log("Сообщение корректное");
    } else {
      isError = true;
    }

    if (!hasNotText.test(nameInput.value) && nameInput.value !== "") {
      console.log("Имя корректное");
    } else {
      isError = true;
    }

    if (!hasNotEmail.test(emailInput.value) && emailInput.value !== "") {
      console.log("Почта корректная");
    } else {
      isError = true;
    }

    if (!hasNotTelephone.test(phoneInput.value) && phoneInput.value !== "") {
      console.log("Телефон корректный");
    } else {
      isError = true;
    }

    !isError && console.log("Данные отправлены");
  });
};
export default validateForm2;
