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

  forms.formList.forEach((formItem) => {
    formItem.form = document.getElementById(formItem.formId);
    formItem.formFields.forEach((fieldItem) => {
      fieldItem.field = document.getElementById(fieldItem.fieldId);
      fieldItem.field.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(
          forms.constransTemplates[fieldItem.fieldConstrians[0]], //для одного ограничения
          ""
        );
      });
      fieldItem.field.addEventListener("blur", (e) => {
        e.target.value = clearData(
          forms.constransTemplates[fieldItem.fieldConstrians[0]], //для одного ограничения
          e.target.value
        );
        if (/name/gi.test(fieldItem.fieldId)) {
          e.target.value = upperFirstLitter(e.target.value);
        }
      });
    });

    formItem.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const selfFields = formItem.formFields;
      let isError = false;

      selfFields.forEach((fieldItem) => {
        if (
          !forms.constransTemplates[fieldItem.fieldConstrians[0]].test(fieldItem.field.value) && //для одного ограничения
          fieldItem.field.value !== ""
        ) {
          console.log("Поле корректное");
        } else {
          isError = true;
        }
      });

      !isError && console.log("Данные отправлены");
    });
  });
};
export default formValidate;
