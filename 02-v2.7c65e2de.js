!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);o("dbdyf");var r=document.querySelector("#datetime-picker"),a=document.querySelector("button[data-start]"),d=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]");function s(e){var t=e.split("-");return Number(t.join(""))}function c(){var e,t,n,o,a=s(r.value),d=s((e=new Date,t=e.getFullYear(),n=e.getMonth()+1,o=String(e.getDate()).padStart(2,"0"),"".concat(t,"-").concat(n,"-").concat(o)));return a<=d&&window.alert("Please choose a date in the future"),a-d}document.querySelectorAll(".label").forEach((function(e){e.textContent=e.textContent.toUpperCase()})),o("dbdyf")(r,{}),r.addEventListener("input",(function(e){a.setAttribute("disabled",!0),console.log(),c()>0&&a.removeAttribute("disabled")})),a.addEventListener("click",(function(e){a.setAttribute("disabled",!0);var t=setInterval((function(){var e,n,o,s,f,p,b,y,S,h;(console.log(),a.hasAttribute("disabled"))?0!==c()?function(e){d.textContent=e.days,u.textContent=e.hours,i.textContent=e.minutes,l.textContent=e.seconds}(function(e){return e.days=String(e.days).padStart(2,"0"),e.hours=String(e.hours).padStart(2,"0"),e.minutes=String(e.minutes).padStart(2,"0"),e.seconds=String(e.seconds).padStart(2,"0"),e}((h=r.value,e=mSeconds=new Date(h)-new Date,f=24*(s=60*(o=60*(n=1e3))),p=Math.floor(e/f),b=Math.floor(e%f/s),y=Math.floor(e%f%s/o),S=Math.floor(e%f%s%o/n),{days:p,hours:b,minutes:y,seconds:S}))):clearInterval(t):clearInterval(t)}),1e3)})),a.setAttribute("disabled",!0)}();
//# sourceMappingURL=02-v2.7c65e2de.js.map
