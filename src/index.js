import moduleTimer from "./modules/timer";
import { menu } from "./modules/menu";
import moduleModal from "./modules/modal";
import serviceBlock from "./modules/serviceBlock";
import moduleCalculate from "./modules/calculate";
import { tabs } from "./modules/tabs";

import formValidate from "./modules/formValidate";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";

//import smoothScroll from "./modules/smoothScroll";

moduleTimer("08 march 2022");
menu();
moduleModal();
serviceBlock();
moduleCalculate(100);

const forms = {
  constransTemplates: {
    hasNotText: /[^а-яёА-ЯЁ \-]/gi,
    hasNotEmail: /[^\w\-\@\.\!\~\*\']/gi,
    hasNotTelephone: /[^\d\(\)\-']/gi,
  },
  formList: [
    {
      formId: "form1",
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
    {
      formId: "form2",
      formFields: [
        {
          fieldId: "form2-name",
          fieldConstrians: ["hasNotText"],
        },
        {
          fieldId: "form2-message",
          fieldConstrians: ["hasNotText"],
        },
        {
          fieldId: "form2-email",
          fieldConstrians: ["hasNotEmail"],
        },
        {
          fieldId: "form2-phone",
          fieldConstrians: ["hasNotTelephone"],
        },
      ],
    },
    {
      formId: "form3",
      formFields: [
        {
          fieldId: "form3-name",
          fieldConstrians: ["hasNotText"],
        },
        {
          fieldId: "form3-email",
          fieldConstrians: ["hasNotEmail"],
        },
        {
          fieldId: "form3-phone",
          fieldConstrians: ["hasNotTelephone"],
        },
      ],
    },
  ],
};
formValidate(forms);

tabs();
slider({ autoInterval: 2000, activeDotClass: "dot-active", activeSlideClass: "portfolio-item-active" });
//   {
//   autoInterval: 2000,
//   sliderClass: "portfolio-content",
//   itemSlideClass: "portfolio-item",
//   activeSlideClass: "portfolio-item-active",
//   dotsBlock: "portfolio-dots",
//   itemDotClass: "dot",
//   activeDotClass: "dot-active",
//   arrowClass: "portfolio-btn",
//   prevArrowClass: "prev",
//   nextArrowClass: "next",
// }

//slider2();
sendForm({
  formId: "form1",
  someElement: [
    {
      type: "block",
      id: "total",
    },
  ],
});
