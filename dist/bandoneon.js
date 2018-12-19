/*!
 * Bandoneon 2.0.0
 * (c) 2018 sjaakpriester.nl
 */
var Bandoneon=function(e){"use strict";return e.Widget=function(e,t){var i=this;Object.setPrototypeOf(this,{defaults:{speed:200,timing:"ease-in-out"},openSection:function(e){var t=e.scrollHeight,n=1e3*t/this.speed;Object.assign(e.style,{height:t+"px",transitionDuration:n+"ms"})},closeSection:function(e){var t=1e3*e.scrollHeight/this.speed;Object.assign(e.style,{height:"0",transitionDuration:t+"ms"})}}),this.element=document.getElementById(e),this.element.classList.add("sjaakp-bandoneon"),this.element.querySelectorAll(":nth-child(odd)").forEach(function(t){var n=t.nextElementSibling;n&&(Object.assign(n.style,{transitionProperty:"height",transitionTimingFunction:i.timing}),t.classList.contains("open")&&i.openSection(n),t.addEventListener("click",function(e){t.classList.toggle("open")?(i.openSection(n),i.element.querySelectorAll(".open").forEach(function(e){e!==t&&(e.classList.remove("open"),i.closeSection(e.nextElementSibling))})):i.closeSection(n)}))}),Object.assign(this,this.defaults,t)},e.widget=function(e,t){return new this.Widget(e,t)},e.version="2.0.0",e}({});
//# sourceMappingURL=bandoneon.js.map
