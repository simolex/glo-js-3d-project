(()=>{"use strict";const e=e=>{const t="a"==e.tagName.toLowerCase()?e.getAttribute("href").substr(1):e.closest("a").getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})};var t;((e,t=!1)=>{const o=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),a=new Date(e).getTime();let l;const s=e=>e<10?"0"+e:""+e;l=setInterval((()=>{const e=(()=>{const e=(new Date).getTime(),o=(a-e)/1e3,r=Math.floor(o/3600/24);let n=Math.floor(o/3600);n=t?n%24:n;const l=Math.floor(o/60)%60,i=Math.floor(o)%60;return{timeRemaining:o,days:s(r),hours:s(n),minutes:s(l),seconds:s(i)}})();e.timeRemaining<=0?clearInterval(l):(o.textContent=e.hours,r.textContent=e.minutes,n.textContent=e.seconds)}),1e3)})("08 march 2022"),(()=>{const t=document.querySelector(".menu"),o=document.querySelector("menu"),r=o.querySelector(".close-btn"),n=o.querySelectorAll("ul>li>a"),a=()=>{o.classList.toggle("active-menu")};t.addEventListener("click",a),r.addEventListener("click",a),n.forEach((t=>t.addEventListener("click",(t=>{t.preventDefault(),a(),e(t.target)}))))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-content"),o=e.querySelector(".popup-close");document.querySelectorAll(".popup-btn").forEach((o=>o.addEventListener("click",(()=>{e.style.display="block",window.outerWidth>768&&function(){let e,o=-50;const r=function(){const n=(new Date).getTime(),a=n-(e||n);e=n,o+=.5*a,o<10?(requestAnimationFrame(r),t.style.top=`${o}%`):t.style.top=""};r()}()})))),o.addEventListener("click",(()=>{e.style.display=""}))})(),document.querySelector('a[href="#service-block"]').addEventListener("click",(t=>{t.preventDefault(),e(t.target)})),document.querySelectorAll(".calc-item").forEach((e=>{e.classList.contains("calc-type")||e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/gi,"")}))})),(t={constransTemplates:{hasNotText:/[^а-яёА-ЯЁ \-]/gi,hasNotEmail:/[^\w\-\@\.\!\~\*\']/gi,hasNotTelephone:/[^\d\(\)\-']/gi},formList:[{formId:"form1",formFields:[{fieldId:"form1-name",fieldConstrians:["hasNotText"]},{fieldId:"form1-email",fieldConstrians:["hasNotEmail"]},{fieldId:"form1-phone",fieldConstrians:["hasNotTelephone"]}]},{formId:"form2",formFields:[{fieldId:"form2-name",fieldConstrians:["hasNotText"]},{fieldId:"form2-message",fieldConstrians:["hasNotText"]},{fieldId:"form2-email",fieldConstrians:["hasNotEmail"]},{fieldId:"form2-phone",fieldConstrians:["hasNotTelephone"]}]},{formId:"form3",formFields:[{fieldId:"form3-name",fieldConstrians:["hasNotText"]},{fieldId:"form3-email",fieldConstrians:["hasNotEmail"]},{fieldId:"form3-phone",fieldConstrians:["hasNotTelephone"]}]}]}).formList.forEach((e=>{e.form=document.getElementById(e.formId),e.formFields.forEach((e=>{e.field=document.getElementById(e.fieldId),e.field.addEventListener("input",(o=>{o.target.value=o.target.value.replace(t.constransTemplates[e.fieldConstrians[0]],"")})),e.field.addEventListener("blur",(o=>{var r;o.target.value=(r=t.constransTemplates[e.fieldConstrians[0]],o.target.value.replace(r,"").replace(/( ){2,}/gi,((e,t)=>t)).replace(/(\-){2,}/gi,((e,t)=>t)).replace(/(^[ \-]+|[ \-]+$)/gi,"")),/name/gi.test(e.fieldId)&&(o.target.value=o.target.value.toLowerCase().replace(/((^[а-яё])|((?<=[^а-яё])[а-яё]))/gi,((e,t)=>(t+"").toUpperCase())))}))})),e.form.addEventListener("submit",(o=>{o.preventDefault();const r=e.formFields;let n=!1;r.forEach((e=>{t.constransTemplates[e.fieldConstrians[0]].test(e.field.value)||""===e.field.value?n=!0:console.log("Поле корректное")})),!n&&console.log("Данные отправлены")}))})),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let r,n,a;const l=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)},i=e=>{l(t,r,"portfolio-item-active"),l(a,r,"dot-active"),e(),s(t,r,"portfolio-item-active"),s(a,r,"dot-active")},c=()=>{i((()=>{r=r<t.length-1?r+1:0}))},d=(e=1500)=>{n=setInterval(c,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&i((()=>{e.target.matches("#arrow-left")?r=r>0?r-1:t.length-1:e.target.matches("#arrow-right")?r=r<t.length-1?r+1:0:e.target.classList.contains("dot")&&a.forEach(((t,o)=>{e.target===t&&(r=o)}))}))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&d(2e3)}),!0),o.innerHTML="",r=0,t.forEach(((e,t)=>{const n=document.createElement("li");n.classList.add("dot"),e.classList.contains("portfolio-item-active")&&(n.classList.add("dot-active"),r=t),o.append(n)})),d(2e3)})()})();