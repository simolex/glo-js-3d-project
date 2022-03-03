(()=>{"use strict";const e=e=>{const t="a"==e.tagName.toLowerCase()?e.getAttribute("href").substr(1):e.closest("a").getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})},t=({timing:e,draw:t,duration:a})=>{let s=performance.now();requestAnimationFrame((function o(l){let r=(l-s)/a;r>1&&(r=1);let n=e(r);t(n),r<1&&requestAnimationFrame(o)}))},a=e=>function(t){return t<.5?e(2*t)/2:(2-e(2*(1-t)))/2};a((e=>Math.pow(e,2)));const s=a((function(e){return 1-Math.sin(Math.acos(e))}));var o;((e,t=!1)=>{const a=document.getElementById("timer-hours"),s=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),l=new Date(e).getTime();let r;const n=e=>e<10?"0"+e:""+e;r=setInterval((()=>{const e=(()=>{const e=(new Date).getTime(),a=(l-e)/1e3,s=Math.floor(a/3600/24);let o=Math.floor(a/3600);o=t?o%24:o;const r=Math.floor(a/60)%60,i=Math.floor(a)%60;return{timeRemaining:a,days:n(s),hours:n(o),minutes:n(r),seconds:n(i)}})();e.timeRemaining<=0?clearInterval(r):(a.textContent=e.hours,s.textContent=e.minutes,o.textContent=e.seconds)}),1e3)})("08 march 2022"),(()=>{const t=document.querySelector("menu");document.addEventListener("click",(a=>(a=>{if(a.target.closest(".menu")||a.target.closest("menu")){if(a.preventDefault(),a.target.matches("ul>li>a"))e(a.target);else if(!a.target.classList.contains("close-btn")&&a.target.closest("menu"))return}else if(!t.classList.contains("active-menu"))return;t.classList.toggle("active-menu")})(a)))})(),(()=>{const e=document.querySelector(".popup"),a=e.querySelector(".popup-content");document.querySelectorAll(".popup-btn").forEach((o=>o.addEventListener("click",(()=>{e.style.display="block",window.outerWidth>768&&t({duration:400,timing:s,draw(e){a.style.top=`${-50+Math.round(60*e)}%`}})})))),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="")}))})(),document.querySelector('a[href="#service-block"]').addEventListener("click",(t=>{t.preventDefault(),e(t.target)})),((e=100)=>{const a=document.querySelector(".calc-block"),s=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),r=document.querySelector(".calc-day"),n=document.getElementById("total");let i,c;a.addEventListener("input",(a=>{a.target!==s&&a.target!==o&&a.target!==l&&a.target!==r||(a.target!==s&&(a.target.value=a.target.value.replace(/\D+/gi,"")),(()=>{const a=+s.options[s.selectedIndex].value,d=o.value;let m=0,u=1,f=1;r.value&&r.value<5?f=2:r.value&&r.value<10&&(f=1.5),l.value>1&&(u+=+l.value/10),m=s.value&&o.value?e*a*d*u*f:0,i=+n.textContent,c=m,t({duration:400,timing:e=>e,draw(e){n.textContent=i+Math.round((c-i)*e)}})})())}))})(100),(o={constransTemplates:{hasNotText:/[^а-яёА-ЯЁ \-]/gi,hasNotEmail:/[^\w\-\@\.\!\~\*\']/gi,hasNotTelephone:/[^\d\(\)\-']/gi},formList:[{formId:"form1",formFields:[{fieldId:"form1-name",fieldConstrians:["hasNotText"]},{fieldId:"form1-email",fieldConstrians:["hasNotEmail"]},{fieldId:"form1-phone",fieldConstrians:["hasNotTelephone"]}]},{formId:"form2",formFields:[{fieldId:"form2-name",fieldConstrians:["hasNotText"]},{fieldId:"form2-message",fieldConstrians:["hasNotText"]},{fieldId:"form2-email",fieldConstrians:["hasNotEmail"]},{fieldId:"form2-phone",fieldConstrians:["hasNotTelephone"]}]},{formId:"form3",formFields:[{fieldId:"form3-name",fieldConstrians:["hasNotText"]},{fieldId:"form3-email",fieldConstrians:["hasNotEmail"]},{fieldId:"form3-phone",fieldConstrians:["hasNotTelephone"]}]}]}).formList.forEach((e=>{e.form=document.getElementById(e.formId),e.formFields.forEach((e=>{e.field=document.getElementById(e.fieldId),e.field.addEventListener("input",(t=>{t.target.value=t.target.value.replace(o.constransTemplates[e.fieldConstrians[0]],"")})),e.field.addEventListener("blur",(t=>{var a;t.target.value=(a=o.constransTemplates[e.fieldConstrians[0]],t.target.value.replace(a,"").replace(/( ){2,}/gi,((e,t)=>t)).replace(/(\-){2,}/gi,((e,t)=>t)).replace(/(^[ \-]+|[ \-]+$)/gi,"")),/name/gi.test(e.fieldId)&&(t.target.value=t.target.value.toLowerCase().replace(/((^[а-яё])|((?<=[^а-яё])[а-яё]))/gi,((e,t)=>(t+"").toUpperCase())))}))})),e.form.addEventListener("submit",(t=>{t.preventDefault();const a=e.formFields;let s=!1;a.forEach((e=>{o.constransTemplates[e.fieldConstrians[0]].test(e.field.value)||""===e.field.value?s=!0:console.log("Поле корректное")})),!s&&console.log("Данные отправлены")}))})),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),a=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{const s=e.target.closest(".service-header-tab");s&&t.forEach(((e,t)=>{e===s?(e.classList.add("active"),a[t].classList.remove("d-none")):(e.classList.remove("active"),a[t].classList.add("d-none"))}))}))})(),(e=>{const t={autoInterval:2e3,sliderClass:"portfolio-content",itemSlideClass:"portfolio-item",activeSlideClass:"slide-active",dotsBlock:"portfolio-dots",itemDotClass:"dot",activeDotClass:"dot-active",arrowClass:"portfolio-btn",prevArrowClass:"prev",nextArrowClass:"next",...e},a=document.querySelector(`.${t.sliderClass}`),s=document.querySelectorAll(`.${t.itemSlideClass}`),o=document.querySelector(`.${t.dotsBlock}`),l=t.autoInterval;let r,n,i=0;const c=(e,t,a)=>{e[t].classList.remove(a)},d=(e,t,a)=>{e[t].classList.add(a)},m=e=>{c(s,i,t.activeSlideClass),c(n,i,t.activeDotClass),e(),d(s,i,t.activeSlideClass),d(n,i,t.activeDotClass)},u=()=>{m((()=>{i=i<s.length-1?i+1:0}))},f=(e=1500)=>{r=setInterval(u,e)};var v,g;a&&s.length>0&&(v=t.activeSlideClass,g=t.activeDotClass,o.innerHTML="",s.forEach(((e,a)=>{const s=document.createElement("li");s.classList.add(t.itemDotClass),e.classList.contains(v)&&(s.classList.add(g),i=a),o.append(s)})),n=document.querySelectorAll(`.${t.itemDotClass}`),a.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(`.${t.arrowClass}, .${t.itemDotClass}`)&&m((()=>{e.target.matches(`.${t.arrowClass}.${t.prevArrowClass}`)?i=i>0?i-1:s.length-1:e.target.matches(`.${t.arrowClass}.${t.nextArrowClass}`)?i=i<s.length-1?i+1:0:e.target.classList.contains(t.itemDotClass)&&n.forEach(((t,a)=>{e.target===t&&(i=a)}))}))})),a.addEventListener("mouseenter",(e=>{e.target.matches(`.${t.arrowClass}, .${t.itemDotClass}`)&&clearInterval(r)}),!0),a.addEventListener("mouseleave",(e=>{e.target.matches(`.${t.arrowClass}, .${t.itemDotClass}`)&&f(l)}),!0),f(l))})({autoInterval:2e3,activeDotClass:"dot-active",activeSlideClass:"portfolio-item-active"})})();