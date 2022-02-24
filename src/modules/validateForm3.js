const validateForm3 = () => {
  const form = document.getElementById("form3");
  const nameInput = document.getElementById("form3-name");
  const emailInput = document.getElementById("form3-email");
  const phoneInput = document.getElementById("form3-phone");

  const hasNotText = /[^а-яА-Я \-]/gi;
  const hasNotEmail = /[^\w\-\@\.\!\~\*\']/gi;
  const hasNotTelephone = /[^\d\(\)\-']/gi;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isError = false;

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
export default validateForm3;
