const validateForm3 = () => {
  const form = document.getElementById("form3");
  const nameInput = document.getElementById("form3-name");
  const emailInput = document.getElementById("form3-email");
  const phoneInput = document.getElementById("form3-phone");

  const hasNotText = /[^а-яёА-ЯЁ \-]/gi;
  const hasNotEmail = /[^\w\-\@\.\!\~\*\']/gi;
  const hasNotTelephone = /[^\d\(\)\-']/gi;

  nameInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(hasNotText, "");
  });
  emailInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(hasNotEmail, "");
  });
  phoneInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(hasNotTelephone, "");
  });

  const clearData = (regexp, value) => {
    const repeatSpace = /( ){2,}/gi;
    const repeatMinus = /(\-){2,}/gi;
    const edgeSpace = /(^[ \-]+|[ \-]+$)/gi;

    value = value.replace(regexp, "");
    value = value.replace(repeatSpace, (str, $1) => $1);
    value = value.replace(repeatMinus, (str, $1) => $1);
    value = value.replace(edgeSpace, "");
    return value;
  };

  const upperFirstLitter = (value) => {
    const firstLitter = /((^[а-яё])|((?<=[^а-яё])[а-яё]))/gi;
    value = value.toLowerCase();
    value = value.replace(firstLitter, (str, $1) => {
      return ($1 + "").toUpperCase();
    });
    return value;
  };

  nameInput.addEventListener("blur", (e) => {
    e.target.value = clearData(hasNotText, e.target.value);
    e.target.value = upperFirstLitter(e.target.value);
  });

  emailInput.addEventListener("blur", (e) => {
    e.target.value = clearData(hasNotEmail, e.target.value);
  });

  phoneInput.addEventListener("blur", (e) => {
    e.target.value = clearData(hasNotTelephone, e.target.value);
  });

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
