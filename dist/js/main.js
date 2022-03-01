(()=>{"use strict";const e=e=>{const t="a"==e.tagName.toLowerCase()?e.getAttribute("href").substr(1):e.closest("a").getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})};var t;((e,t=!1)=>{const s=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds"),l=new Date(e).getTime();let r;const n=e=>e<10?"0"+e:""+e;r=setInterval((()=>{const e=(()=>{const e=(new Date).getTime(),s=(l-e)/1e3,o=Math.floor(s/3600/24);let a=Math.floor(s/3600);a=t?a%24:a;const r=Math.floor(s/60)%60,i=Math.floor(s)%60;return{timeRemaining:s,days:n(o),hours:n(a),minutes:n(r),seconds:n(i)}})();e.timeRemaining<=0?clearInterval(r):(s.textContent=e.hours,o.textContent=e.minutes,a.textContent=e.seconds)}),1e3)})("08 march 2022"),(()=>{const t=document.querySelector(".menu"),s=document.querySelector("menu"),o=s.querySelector(".close-btn"),a=s.querySelectorAll("ul>li>a"),l=()=>{s.classList.toggle("active-menu")};t.addEventListener("click",l),o.addEventListener("click",l),a.forEach((t=>t.addEventListener("click",(t=>{t.preventDefault(),l(),e(t.target)}))))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-content"),s=e.querySelector(".popup-close");document.querySelectorAll(".popup-btn").forEach((s=>s.addEventListener("click",(()=>{e.style.display="block",window.outerWidth>768&&function(){let e,s=-50;const o=function(){const a=(new Date).getTime(),l=a-(e||a);e=a,s+=.5*l,s<10?(requestAnimationFrame(o),t.style.top=`${s}%`):t.style.top=""};o()}()})))),s.addEventListener("click",(()=>{e.style.display=""}))})(),document.querySelector('a[href="#service-block"]').addEventListener("click",(t=>{t.preventDefault(),e(t.target)})),document.querySelectorAll(".calc-item").forEach((e=>{e.classList.contains("calc-type")||e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/gi,"")}))})),(t={constransTemplates:{hasNotText:/[^а-яёА-ЯЁ \-]/gi,hasNotEmail:/[^\w\-\@\.\!\~\*\']/gi,hasNotTelephone:/[^\d\(\)\-']/gi},formList:[{formId:"form1",formFields:[{fieldId:"form1-name",fieldConstrians:["hasNotText"]},{fieldId:"form1-email",fieldConstrians:["hasNotEmail"]},{fieldId:"form1-phone",fieldConstrians:["hasNotTelephone"]}]},{formId:"form2",formFields:[{fieldId:"form2-name",fieldConstrians:["hasNotText"]},{fieldId:"form2-message",fieldConstrians:["hasNotText"]},{fieldId:"form2-email",fieldConstrians:["hasNotEmail"]},{fieldId:"form2-phone",fieldConstrians:["hasNotTelephone"]}]},{formId:"form3",formFields:[{fieldId:"form3-name",fieldConstrians:["hasNotText"]},{fieldId:"form3-email",fieldConstrians:["hasNotEmail"]},{fieldId:"form3-phone",fieldConstrians:["hasNotTelephone"]}]}]}).formList.forEach((e=>{e.form=document.getElementById(e.formId),e.formFields.forEach((e=>{e.field=document.getElementById(e.fieldId),e.field.addEventListener("input",(s=>{s.target.value=s.target.value.replace(t.constransTemplates[e.fieldConstrians[0]],"")})),e.field.addEventListener("blur",(s=>{var o;s.target.value=(o=t.constransTemplates[e.fieldConstrians[0]],s.target.value.replace(o,"").replace(/( ){2,}/gi,((e,t)=>t)).replace(/(\-){2,}/gi,((e,t)=>t)).replace(/(^[ \-]+|[ \-]+$)/gi,"")),/name/gi.test(e.fieldId)&&(s.target.value=s.target.value.toLowerCase().replace(/((^[а-яё])|((?<=[^а-яё])[а-яё]))/gi,((e,t)=>(t+"").toUpperCase())))}))})),e.form.addEventListener("submit",(s=>{s.preventDefault();const o=e.formFields;let a=!1;o.forEach((e=>{t.constransTemplates[e.fieldConstrians[0]].test(e.field.value)||""===e.field.value?a=!0:console.log("Поле корректное")})),!a&&console.log("Данные отправлены")}))})),(e=>{const t={autoInterval:2e3,sliderClass:"portfolio-content",itemSlideClass:"portfolio-item",activeSlideClass:"slide-active",dotsBlock:"portfolio-dots",itemDotClass:"dot",activeDotClass:"dot-active",arrowClass:"portfolio-btn",prevArrowClass:"prev",nextArrowClass:"next",autoInterval:2e3,activeDotClass:"dot-active",activeSlideClass:"portfolio-item-active"},s=document.querySelector(`.${t.sliderClass}`),o=document.querySelectorAll(`.${t.itemSlideClass}`),a=document.querySelector(`.${t.dotsBlock}`),l=t.autoInterval;let r,n,i=0;const c=(e,t,s)=>{e[t].classList.remove(s)},d=(e,t,s)=>{e[t].classList.add(s)},m=e=>{c(o,i,t.activeSlideClass),c(n,i,t.activeDotClass),e(),d(o,i,t.activeSlideClass),d(n,i,t.activeDotClass)},f=()=>{m((()=>{i=i<o.length-1?i+1:0}))},u=(e=1500)=>{r=setInterval(f,e)};var v,p;(()=>{for(let e in t)if("autoInterval"!==e&&!document.querySelector(`.${t[e]}`))return!1;return!0})()&&(s.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(`.${t.arrowClass}, .${t.itemDotClass}`)&&m((()=>{e.target.matches(`.${t.arrowClass}.${t.prevArrowClass}`)?i=i>0?i-1:o.length-1:e.target.matches(`.${t.arrowClass}.${t.nextArrowClass}`)?i=i<o.length-1?i+1:0:e.target.classList.contains(t.itemDotClass)&&n.forEach(((t,s)=>{e.target===t&&(i=s)}))}))})),s.addEventListener("mouseenter",(e=>{e.target.matches(`.${t.arrowClass}, .${t.itemDotClass}`)&&clearInterval(r)}),!0),s.addEventListener("mouseleave",(e=>{e.target.matches(`.${t.arrowClass}, .${t.itemDotClass}`)&&u(l)}),!0),v=t.activeSlideClass,p=t.activeDotClass,a.innerHTML="",o.forEach(((e,s)=>{const o=document.createElement("li");o.classList.add(t.itemDotClass),e.classList.contains(v)&&(o.classList.add(p),i=s),a.append(o)})),n=document.querySelectorAll(`.${t.itemDotClass}`),u(l))})()})();