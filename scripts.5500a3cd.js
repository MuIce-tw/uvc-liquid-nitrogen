parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dgpK":[function(require,module,exports) {
document.body.onscroll=function(){l()},document.body.onresize=function(){v()};for(var e=document.getElementById("navbarClose"),t=document.getElementById("navbarMobileMenu"),n=document.getElementById("mainLogo"),s=document.getElementById("mainLogoImg1"),o=document.getElementById("mainLogoImg2"),a=document.getElementsByClassName("nav-item"),c=["#product","#application","#specification","#certification","#about","english"],i=0;i<a.length;i++)a[i].addEventListener("click",function(e){d()});function d(){document.getElementById("navbarSupportedContent").classList.remove("show"),f()<768&&(t.style.display="block")}function l(){var e=document.getElementById("nav_custom");f()<768?m():document.body.scrollTop>300||document.documentElement.scrollTop>300?(u(),e.classList.add("nav-custom-fixed-top"),s.classList.add("hidden"),o.classList.remove("hidden")):(r(),e.classList.remove("nav-custom-fixed-top"),s.classList.remove("hidden"),o.classList.add("hidden"))}function m(){for(var e=document.getElementsByClassName("nav-item"),t=0;t<e.length;t++)e[t].classList.remove("nav-text-pc-1"),e[t].classList.remove("nav-text-pc-2"),e[t].classList.add("nav-text-moble")}function r(){for(var e=document.getElementsByClassName("nav-item"),t=0;t<e.length;t++)e[t].classList.remove("nav-text-moble"),e[t].classList.remove("nav-text-pc-2"),e[t].classList.add("nav-text-pc-1")}function u(){for(var e=document.getElementsByClassName("nav-item"),t=0;t<e.length;t++)e[t].classList.remove("nav-text-moble"),e[t].classList.remove("nav-text-pc-1"),e[t].classList.add("nav-text-pc-2")}function v(){f()>=768?t.style.display="none":(s.classList.add("hidden"),o.classList.remove("hidden"),t.style.display="block",d())}function L(){return window.innerHeight}function f(){return window.innerWidth}function g(e){location.href=e,d()}e.addEventListener("click",function(e){d()}),n.addEventListener("click",function(e){d()}),t.addEventListener("click",function(e){document.getElementById("navbarSupportedContent").classList.add("show"),t.style.display="none"}),v(),l();
},{}]},{},["dgpK"], null)