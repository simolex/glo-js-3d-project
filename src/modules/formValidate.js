const forms = {
  constransTemplates: {
    hasNotText: /[^а-яёА-ЯЁ \-]/gi,
    hasNotEmail: /[^\w\-\@\.\!\~\*\']/gi,
    hasNotTelephone: /[^\d\(\)\-']/gi,
  },
  formList: [
    {
      formName: "form1",
      formFields: [
        {
          fieldId: "form1-name",
          fieldConstrians: ["hasNotText"],
        },
        {
          fieldId: "form1-email",
          fieldConstrians: ["hasNotEmail"],
        },
        {
          fieldId: "form1-phone",
          fieldConstrians: ["hasNotTelephone"],
        },
      ],
    },
  ],
};
