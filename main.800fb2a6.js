parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HJDO":[function(require,module,exports) {
var e=document.querySelector(".toggle-button"),t=document.querySelector(".header-list--mobile");function o(e){document.querySelectorAll(".header-list--item").forEach(function(e){e.classList.remove("active")}),document.querySelector("#header-list-".concat(e[0].target.id)).classList.add("active")}e.addEventListener("click",function(){t.classList.contains("hide")?t.classList.remove("hide"):t.classList.add("hide")});for(var c=new IntersectionObserver(o,{root:document.querySelector("body"),threshold:.7}),r=document.querySelector("#main-banner"),i=document.querySelector("#services"),n=document.querySelector("#about"),l=document.querySelector("#team"),a=document.querySelector("#portfolio"),u=document.querySelector("#blog"),s=document.querySelector("#contact"),d=[r,i,n,l,a,u,s],m=0;m<d.length;m++)c.observe(d[m]);for(var h=document.querySelectorAll(".question-block-item"),y=function(e){h[e].addEventListener("click",function(){var t=h[e].querySelector(".question-item--accordion");t.style.marginTop="2rem",t.style.maxHeight=t.scrollHeight+"px",h.forEach(function(t,o){if(o!==e){var c=t.querySelector(".question-item--accordion");c.style.marginTop="0",c.style.maxHeight="0"}})})},q=0;q<h.length;q++)y(q);var f=document.querySelectorAll(".carousel-aditional--mobile"),v=window.matchMedia("(min-width: 577px)");function S(e){e.matches?f.forEach(function(e){e.classList.remove("carousel-item"),e.hidden=!0}):f.forEach(function(e){e.classList.add("carousel-item"),e.hidden=!1})}S(v),v.addListener(S);
},{}]},{},["HJDO"], null)
//# sourceMappingURL=/main.800fb2a6.js.map