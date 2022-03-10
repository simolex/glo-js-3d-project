import moduleTimer from "./modules/timer";
import { menu } from "./modules/menu";
import moduleModal from "./modules/modal";
import serviceBlock from "./modules/serviceBlock";
import moduleCalculate from "./modules/calculate";
import { tabs } from "./modules/tabs";

import applyForm from "./modules/applyForm";
import slider from "./modules/slider";

//import smoothScroll from "./modules/smoothScroll";

moduleTimer("08 march 2022");
menu();
moduleModal();
serviceBlock();
moduleCalculate(100);

const forms = {
  constransTemplates: {
    hasNotName: /[^а-яёА-ЯЁ \-]/gi,
    hasNotMessage: /[^а-яёА-ЯЁ \-\.\!\?\:\;\(\)0-9]/gi,
    hasNotEmail: /[^\w\-\@\.\!\~\*\']/gi,
    hasNotTelephone: /[^\d\(\)\-\+]/gi,
  },
  validateTest: {
    lengthMin: function (value, length = 1) {
      return {
        result: value.length >= +length,
        message: `Минимальное кол-во символов: ${length}`,
      };
    },
    phoneMask: function (value) {
      return {
        result: /\+\d\(\d{3}\)\d{3}-\d{2}-\d{2}/gi.test(value),
        message: "Шаблон для телефона +0(000)000-00-00",
      };
    },
    email: function (value) {
      return {
        result:
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi.test(
            value
          ),
        message: "Необходим корректный адрес почты",
      };
    },
  },
  formList: [
    {
      formId: "form1",
      formFields: [
        {
          fieldSelector: "input[name=user_name]",
          fieldConstrians: ["hasNotName"],
          fieldValidate: [{ test: "lengthMin", args: [2] }],
        },
        {
          fieldSelector: "input[name=user_email]",
          fieldConstrians: ["hasNotEmail"],
          fieldValidate: [{ test: "email", args: [] }],
        },
        {
          fieldSelector: "input[name=user_phone]",
          fieldConstrians: ["hasNotTelephone"],
          fieldValidate: [{ test: "phoneMask", args: [] }],
        },
      ],
      someElement: [
        {
          type: "block",
          id: "total",
        },
      ],
    },
    {
      formId: "form2",
      formFields: [
        {
          fieldSelector: "input[name=user_name]",
          fieldConstrians: ["hasNotName"],
          fieldValidate: [{ test: "lengthMin", args: [2] }],
        },
        {
          fieldSelector: "input[name=user_message]",
          fieldConstrians: ["hasNotMessage"],
          fieldValidate: [{ test: "lengthMin", args: [2] }],
        },
        {
          fieldSelector: "input[name=user_email]",
          fieldConstrians: ["hasNotEmail"],
          fieldValidate: [{ test: "email", args: [] }],
        },
        {
          fieldSelector: "input[name=user_phone]",
          fieldConstrians: ["hasNotTelephone"],
          fieldValidate: [{ test: "phoneMask", args: [] }],
        },
      ],
    },
    {
      formId: "form3",
      formFields: [
        {
          fieldSelector: "input[name=user_name]",
          fieldConstrians: ["hasNotName"],
          fieldValidate: [{ test: "lengthMin", args: [2] }],
        },
        {
          fieldSelector: "input[name=user_email]",
          fieldConstrians: ["hasNotEmail"],
          fieldValidate: [{ test: "email", args: [] }],
        },
        {
          fieldSelector: "input[name=user_phone]",
          fieldConstrians: ["hasNotTelephone"],
          fieldValidate: [{ test: "phoneMask", args: [] }],
        },
      ],
    },
  ],
};
applyForm(forms);

tabs();
slider({
  autoInterval: 2000,
  activeDotClass: "dot-active",
  activeSlideClass: "portfolio-item-active",
});
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
