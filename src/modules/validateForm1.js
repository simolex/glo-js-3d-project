const validateForm1 = () => {
  const form = document.getElementById("form1");
  const nameInput = document.getElementById("form1-name");

  const hasNotText = /[^а-яА-Я \-]/gi;
  const hasNotEmail = /[^\w\-\@\.\!\~\*\']/gi;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isError = false;

    if (!hasNotText.test(nameInput.value) && nameInput.value !== "") {
      console.log("Имя корректное");
    } else {
      isError = true;
    }

    !isError && console.log("Данные отправлены");
  });
};
export default validateForm1;
