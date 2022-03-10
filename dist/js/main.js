(()=>{"use strict";const e=e=>{const t="a"==e.tagName.toLowerCase()?e.getAttribute("href").substr(1):e.closest("a").getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})},t=e=>function(t){return t<.5?e(2*t)/2:(2-e(2*(1-t)))/2},s=(t((e=>Math.pow(e,2))),t((e=>1-Math.sin(Math.acos(e)))));const a=({timing:e,draw:t,duration:s})=>{let a=performance.now();requestAnimationFrame((function l(o){let i=(o-a)/s;i>1&&(i=1);let r=e(i);t(r),i<1&&requestAnimationFrame(l)}))};((e,t=!1)=>{const s=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds"),o=new Date(e).getTime();let i;const r=e=>e<10?"0"+e:""+e;i=setInterval((()=>{const e=(()=>{const e=(new Date).getTime(),s=(o-e)/1e3,a=Math.floor(s/3600/24);let l=Math.floor(s/3600);l=t?l%24:l;const i=Math.floor(s/60)%60,n=Math.floor(s)%60;return{timeRemaining:s,days:r(a),hours:r(l),minutes:r(i),seconds:r(n)}})();e.timeRemaining<=0?clearInterval(i):(s.textContent=e.hours,a.textContent=e.minutes,l.textContent=e.seconds)}),1e3)})("08 march 2022"),(()=>{const t=document.querySelector("menu");document.addEventListener("click",(s=>(s=>{if(s.target.closest(".menu")||s.target.closest("menu")){if(s.preventDefault(),s.target.matches("ul>li>a"))e(s.target);else if(!s.target.classList.contains("close-btn")&&s.target.closest("menu"))return}else if(!t.classList.contains("active-menu"))return;t.classList.toggle("active-menu")})(s)))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-content");document.querySelectorAll(".popup-btn").forEach((l=>l.addEventListener("click",(()=>{e.style.display="block",window.outerWidth>768&&a({duration:400,timing:s,draw(e){t.style.top=`${-50+Math.round(60*e)}%`}})})))),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="")}))})(),document.querySelector('a[href="#service-block"]').addEventListener("click",(t=>{t.preventDefault(),e(t.target)})),((e=100)=>{const t=document.querySelector(".calc-block"),s=document.querySelector(".calc-type"),l=document.querySelector(".calc-square"),o=document.querySelector(".calc-count"),i=document.querySelector(".calc-day"),r=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==s&&t.target!==l&&t.target!==o&&t.target!==i||(t.target!==s&&(t.target.value=t.target.value.replace(/\D+/gi,"")),(()=>{const t=+s.options[s.selectedIndex].value,n=+l.value;let d,c,m=0,u=1,f=1;i.value&&+i.value<5?f=2:i.value&&i.value<10&&(f=1.5),+o.value>1&&(u+=+o.value/10),m=s.value&&l.value?e*t*n*u*f:0,d=+r.textContent,c=m,a({duration:400,timing:e=>e,draw(e){r.textContent=d+Math.round((c-d)*e)}})})())}))})(100),(e=>{const t=(e,t=!0)=>{t?(e.classList.remove("is-invalid"),e.classList.add("is-valid")):(e.classList.remove("is-valid"),e.classList.add("is-invalid"))},s=e=>{var t;e.formData=new FormData(e.form),e.formBody={},e.statusBlock.innerHTML='\n  <div class="sk-three-bounce">\n    <div class="sk-bounce-1 sk-child"></div>\n    <div class="sk-bounce-2 sk-child"></div>\n    <div class="sk-bounce-3 sk-child"></div>\n  </div>\n  ',e.formData.forEach(((t,s)=>{e.formBody[s]=t})),e.someElement&&e.someElement.forEach((t=>{const s=document.getElementById(t.id);if(!s)throw new Error(`Отсутствует элемент с с id="${t.id}"`);"block"===t.type?e.formBody[t.id]=s.textContent:"input"===t.type&&(e.formBody[t.id]=s.value)})),e.formFields.forEach((e=>{e.field.disabled=!0})),e.submitButton.disabled=!0,(t=e.formBody,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=utf-8"}}).then((e=>{if(e.ok)return e.json();throw new Error("Возникла ошибка при отправке формы")}))).then((t=>{e.statusBlock.innerHTML="Спасибо! Наш менеджер с вами свяжется.",e.statusBlock.style.opacity=1,a({duration:7e3,timing:e=>1-e,draw(t){e.statusBlock.style.opacity&&(e.statusBlock.style.opacity=t)}}),setTimeout((()=>{e.statusBlock.innerHTML="",e.formFields.forEach((e=>{e.field.classList.remove("is-valid"),e.field.disabled=!1,e.field.value=""})),delete e.formData,e.submitButton.disabled=!1,e.statusBlock.style.opacity=""}),5e3)})).catch((t=>{e.statusBlock.innerHTML="Ошибка..",e.formFields.forEach((e=>{e.field.disabled=!1})),delete e.formData,e.submitButton.disabled=!1,console.log(t.message)}))};try{e.formList.forEach((a=>{if(a.form=document.getElementById(a.formId),!a.form)throw new Error(`Отсутствует элемент с id="${a.formId}"`);a.form.noValidate=!0,a.submitButton=a.form.querySelector("button[type=submit]"),a.statusBlock=document.createElement("div"),a.statusBlock.style.color="white",a.form.append(a.statusBlock),a.formFields.forEach((t=>{if(t.field=a.form.querySelector(t.fieldSelector),!t.field)throw new Error(`Отсутствует элемент с селектором="${a.formId}"`);t.field.classList.add("form-control"),t.field.addEventListener("input",(s=>{t.field.setCustomValidity(""),s.target.value=s.target.value.replace(e.constransTemplates[t.fieldConstrians[0]],""),s.target.classList.remove("is-valid"),s.target.classList.remove("is-invalid")})),t.field.addEventListener("blur",(s=>{var a;s.target.value=(a=e.constransTemplates[t.fieldConstrians[0]],s.target.value.replace(a,"").replace(/( ){2,}/gi,((e,t)=>t)).replace(/(\-){2,}/gi,((e,t)=>t)).replace(/(^[ \-]+|[ \-]+$)/gi,"")),/user_name/gi.test(t.fieldSelector)&&(s.target.value=s.target.value.toLowerCase().replace(/((^[а-яё])|((?<=[^а-яё])[а-яё]))/gi,((e,t)=>(t+"").toUpperCase())))}))})),a.submitButton.addEventListener("click",(l=>{(a=>{(s=>{let a=!0;return s.forEach((s=>{if(e.constransTemplates[s.fieldConstrians[0]].test(s.field.value)||""===s.field.value)t(s.field,!1),s.field.setCustomValidity("Поле не должно быть пустое"),a=!1;else{t(s.field),s.field.setCustomValidity("");const l={};try{s.fieldValidate&&s.fieldValidate.forEach((t=>{const a=e.validateTest[t.test](s.field.value,...t.args);if(!a.result)throw l.message=a.message,l}))}catch(e){if(e!==l)throw e;t(s.field,!1),s.field.setCustomValidity(e.message),a=!1}}})),a})(a.formFields)?s(a):a.form.reportValidity()})(a),l.preventDefault()}))}))}catch(e){console.log(e.message)}})({constransTemplates:{hasNotName:/[^а-яёА-ЯЁ \-]/gi,hasNotMessage:/[^а-яёА-ЯЁ \-\.\!\?\:\;\(\)0-9]/gi,hasNotEmail:/[^\w\-\@\.\!\~\*\']/gi,hasNotTelephone:/[^\d\(\)\-\+]/gi},validateTest:{lengthMin:function(e,t=1){return{result:e.length>=+t,message:`Минимальное кол-во символов: ${t}`}},phoneMask:function(e){return{result:/\+\d\(\d{3}\)\d{3}-\d{2}-\d{2}/gi.test(e),message:"Шаблон для телефона +0(000)000-00-00"}},email:function(e){return{result:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi.test(e),message:"Необходим корректный адрес почты"}}},formList:[{formId:"form1",formFields:[{fieldSelector:"input[name=user_name]",fieldConstrians:["hasNotName"],fieldValidate:[{test:"lengthMin",args:[2]}]},{fieldSelector:"input[name=user_email]",fieldConstrians:["hasNotEmail"],fieldValidate:[{test:"email",args:[]}]},{fieldSelector:"input[name=user_phone]",fieldConstrians:["hasNotTelephone"],fieldValidate:[{test:"phoneMask",args:[]}]}],someElement:[{type:"block",id:"total"}]},{formId:"form2",formFields:[{fieldSelector:"input[name=user_name]",fieldConstrians:["hasNotName"],fieldValidate:[{test:"lengthMin",args:[2]}]},{fieldSelector:"input[name=user_message]",fieldConstrians:["hasNotMessage"],fieldValidate:[{test:"lengthMin",args:[2]}]},{fieldSelector:"input[name=user_email]",fieldConstrians:["hasNotEmail"],fieldValidate:[{test:"email",args:[]}]},{fieldSelector:"input[name=user_phone]",fieldConstrians:["hasNotTelephone"],fieldValidate:[{test:"phoneMask",args:[]}]}]},{formId:"form3",formFields:[{fieldSelector:"input[name=user_name]",fieldConstrians:["hasNotName"],fieldValidate:[{test:"lengthMin",args:[2]}]},{fieldSelector:"input[name=user_email]",fieldConstrians:["hasNotEmail"],fieldValidate:[{test:"email",args:[]}]},{fieldSelector:"input[name=user_phone]",fieldConstrians:["hasNotTelephone"],fieldValidate:[{test:"phoneMask",args:[]}]}]}]}),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),s=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const a=e.target.closest(".service-header-tab");a&&t.forEach(((e,t)=>{e===a?(e.classList.add("active"),s[t].classList.remove("d-none")):(e.classList.remove("active"),s[t].classList.add("d-none"))}))}))})(),(e=>{const t={autoInterval:2e3,sliderClass:"portfolio-content",itemSlideClass:"portfolio-item",activeSlideClass:"slide-active",dotsBlock:"portfolio-dots",itemDotClass:"dot",activeDotClass:"dot-active",arrowClass:"portfolio-btn",prevArrowClass:"prev",nextArrowClass:"next",...e},s=document.querySelector(`.${t.sliderClass}`),a=document.querySelectorAll(`.${t.itemSlideClass}`),l=document.querySelector(`.${t.dotsBlock}`),o=t.autoInterval;let i,r,n=0;const d=(e,t,s)=>{e[t].classList.remove(s)},c=(e,t,s)=>{e[t].classList.add(s)},m=e=>{d(a,n,t.activeSlideClass),d(r,n,t.activeDotClass),e(),c(a,n,t.activeSlideClass),c(r,n,t.activeDotClass)},u=()=>{m((()=>{n=n<a.length-1?n+1:0}))},f=(e=1500)=>{i=setInterval(u,e)};var v,g;s&&a.length>0&&(v=t.activeSlideClass,g=t.activeDotClass,l.innerHTML="",a.forEach(((e,s)=>{const a=document.createElement("li");a.classList.add(t.itemDotClass),e.classList.contains(v)&&(a.classList.add(g),n=s),l.append(a)})),r=document.querySelectorAll(`.${t.itemDotClass}`),s.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(`.${t.arrowClass}, .${t.itemDotClass}`)&&m((()=>{e.target.matches(`.${t.arrowClass}.${t.prevArrowClass}`)?n=n>0?n-1:a.length-1:e.target.matches(`.${t.arrowClass}.${t.nextArrowClass}`)?n=n<a.length-1?n+1:0:e.target.classList.contains(t.itemDotClass)&&r.forEach(((t,s)=>{e.target===t&&(n=s)}))}))})),s.addEventListener("mouseenter",(e=>{e.target.matches(`.${t.arrowClass}, .${t.itemDotClass}`)&&clearInterval(i)}),!0),s.addEventListener("mouseleave",(e=>{e.target.matches(`.${t.arrowClass}, .${t.itemDotClass}`)&&f(o)}),!0),f(o))})({autoInterval:2e3,activeDotClass:"dot-active",activeSlideClass:"portfolio-item-active"})})();