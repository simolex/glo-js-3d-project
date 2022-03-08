const formValidate = (forms) => {
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
        const selfFields = formItem.formFields;

        selfFields.forEach((fieldItem) => {
          if (
            !forms.constransTemplates[fieldItem.fieldConstrians[0]].test(fieldItem.field.value) && //для одного ограничения
            fieldItem.field.value !== ""
          ) {
            fieldItem.field.classList.remove("is-invalid");
            fieldItem.field.classList.add("is-valid");
          } else {
            fieldItem.field.classList.remove("is-valid");
            fieldItem.field.classList.add("is-invalid");
          }
        });
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default formValidate;
