const applyForm = (forms) => {
  const loaderBlock = `
  <div class="sk-three-bounce">
    <div class="sk-bounce-1 sk-child"></div>
    <div class="sk-bounce-2 sk-child"></div>
    <div class="sk-bounce-3 sk-child"></div>
  </div>
  `;
  const errorText = "Ошибка..";
  const successText = "Спасибо! Наш менеджер с вами свяжется.";

  const validate = (list) => {
    let success = true;

    list.forEach((fieldItem) => {
      if (
        !forms.constransTemplates[fieldItem.fieldConstrians[0]].test(fieldItem.field.value) && //для одного ограничения
        fieldItem.field.value !== ""
      ) {
        fieldItem.field.classList.remove("is-invalid");
        fieldItem.field.classList.add("is-valid");
      } else {
        fieldItem.field.classList.remove("is-valid");
        fieldItem.field.classList.add("is-invalid");
        success = false;
      }
    });
    return success;
  };

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

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      // "./dist/server.php"
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }).then((resp) => resp.json());
  };

  const submitForm = (formItem) => {
    formItem.formData = new FormData(formItem.form);
    formItem.formBody = {};
    formItem.statusBlock = document.createElement("div");
    formItem.statusBlock.style.color = "white";

    formItem.statusBlock.innerHTML = loaderBlock;
    formItem.form.append(formItem.statusBlock);

    formItem.formData.forEach((value, key) => {
      formItem.formBody[key] = value;
    });
    formItem.someElement &&
      formItem.someElement.forEach((elem) => {
        const element = document.getElementById(elem.id);
        if (!element) {
          throw new Error(`Отсутствует элемент с с id="${elem.id}"`);
        } else {
          if (elem.type === "block") {
            formItem.formBody[elem.id] = element.textContent;
          } else if (elem.type === "input") {
            formItem.formBody[elem.id] = element.value;
          }
        }
      });

    if (validate(formItem.formFields)) {
      sendData(formItem.formBody)
        .then((data) => {
          formItem.statusBlock.innerHTML = successText;
          formItem.formFields.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          formItem.statusBlock.innerHTML = errorText;
        });
    } else {
      alert("Данные не валидны!!!");
    }
  };

  try {
    forms.formList.forEach((formItem) => {
      formItem.form = document.getElementById(formItem.formId);
      if (!formItem.form) {
        throw new Error(`Отсутствует элемент с id="${formItem.formId}"`);
      }
      formItem.formFields.forEach((fieldItem) => {
        fieldItem.field = formItem.form.querySelector(fieldItem.fieldSelector);
        if (!fieldItem.field) {
          throw new Error(`Отсутствует элемент с селектором="${formItem.formId}"`);
        }
        fieldItem.field.classList.add("form-control");
        fieldItem.field.addEventListener("input", (e) => {
          e.target.value = e.target.value.replace(
            forms.constransTemplates[fieldItem.fieldConstrians[0]], //для одного ограничения
            ""
          );
          e.target.classList.remove("is-valid");
          e.target.classList.remove("is-invalid");
        });
        fieldItem.field.addEventListener("blur", (e) => {
          e.target.value = clearData(
            forms.constransTemplates[fieldItem.fieldConstrians[0]], //для одного ограничения
            e.target.value
          );
          if (/user_name/gi.test(fieldItem.fieldSelector)) {
            e.target.value = upperFirstLitter(e.target.value);
          }
        });
      });

      formItem.form.addEventListener("submit", (e) => {
        e.preventDefault();
        submitForm(formItem);
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default applyForm;
