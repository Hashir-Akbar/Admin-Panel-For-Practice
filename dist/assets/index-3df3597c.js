(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function l(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=l(i);fetch(i.href,n)}})();var rt={exports:{}};(function(t,e){(function(l,s,i,n,r){if("customElements"in i)r();else{if(i.AWAITING_WEB_COMPONENTS_POLYFILL)return void i.AWAITING_WEB_COMPONENTS_POLYFILL.then(r);var o=i.AWAITING_WEB_COMPONENTS_POLYFILL=u();o.then(r);var a=i.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",c=i.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in i?v(a).then(function(){o.isDone=!0,o.exec()}):v(c).then(function(){v(a).then(function(){o.isDone=!0,o.exec()})})}function u(){var d=[];return d.isDone=!1,d.exec=function(){d.splice(0).forEach(function(y){y()})},d.then=function(y){return d.isDone?y():d.push(y),d},d}function v(d){var y=u(),f=n.createElement("script");return f.type="text/javascript",f.readyState?f.onreadystatechange=function(){f.readyState!="loaded"&&f.readyState!="complete"||(f.onreadystatechange=null,y.isDone=!0,y.exec())}:f.onload=function(){y.isDone=!0,y.exec()},f.src=d,n.getElementsByTagName("head")[0].appendChild(f),f.then=y.then,f}})(0,0,window,document,function(){var l;l=function(){return function(s){var i={};function n(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return s[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=s,n.c=i,n.d=function(r,o,a){n.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:a})},n.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,o){if(1&o&&(r=n(r)),8&o||4&o&&typeof r=="object"&&r&&r.__esModule)return r;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:r}),2&o&&typeof r!="string")for(var c in r)n.d(a,c,(function(u){return r[u]}).bind(null,c));return a},n.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(o,"a",o),o},n.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},n.p="",n(n.s=5)}([function(s,i){s.exports=function(n){var r=[];return r.toString=function(){return this.map(function(o){var a=function(c,u){var v,d=c[1]||"",y=c[3];if(!y)return d;if(u&&typeof btoa=="function"){var f=(v=y,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(v))))+" */"),X=y.sources.map(function(T){return"/*# sourceURL="+y.sourceRoot+T+" */"});return[d].concat(X).concat([f]).join(`
`)}return[d].join(`
`)}(o,n);return o[2]?"@media "+o[2]+"{"+a+"}":a}).join("")},r.i=function(o,a){typeof o=="string"&&(o=[[null,o,""]]);for(var c={},u=0;u<this.length;u++){var v=this[u][0];typeof v=="number"&&(c[v]=!0)}for(u=0;u<o.length;u++){var d=o[u];typeof d[0]=="number"&&c[d[0]]||(a&&!d[2]?d[2]=a:a&&(d[2]="("+d[2]+") and ("+a+")"),r.push(d))}},r}},function(s,i,n){var r=n(3);s.exports=typeof r=="string"?r:r.toString()},function(s,i,n){var r=n(4);s.exports=typeof r=="string"?r:r.toString()},function(s,i,n){(s.exports=n(0)(!1)).push([s.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(s,i,n){(s.exports=n(0)(!1)).push([s.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(s,i,n){n.r(i),n.d(i,"BoxIconElement",function(){return F});var r,o,a,c,u=n(1),v=n.n(u),d=n(2),y=n.n(d),f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(L){return typeof L}:function(L){return L&&typeof Symbol=="function"&&L.constructor===Symbol&&L!==Symbol.prototype?"symbol":typeof L},X=function(){function L(k,b){for(var m=0;m<b.length;m++){var h=b[m];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(k,h.key,h)}}return function(k,b,m){return b&&L(k.prototype,b),m&&L(k,m),k}}(),T=(o=(r=Object).getPrototypeOf||function(L){return L.__proto__},a=r.setPrototypeOf||function(L,k){return L.__proto__=k,L},c=(typeof Reflect>"u"?"undefined":f(Reflect))==="object"?Reflect.construct:function(L,k,b){var m,h=[null];return h.push.apply(h,k),m=L.bind.apply(L,h),a(new m,b.prototype)},function(L){var k=o(L);return a(L,a(function(){return c(k,arguments,o(this).constructor)},k))}),g=window,p={},S=document.createElement("template"),R=function(){return!!g.ShadyCSS};S.innerHTML=`
<style>
:host {
  display: inline-block;
  font-size: initial;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
}
:host([size=xs]) {
    width: 0.8rem;
    height: 0.8rem;
}
:host([size=sm]) {
    width: 1.55rem;
    height: 1.55rem;
}
:host([size=md]) {
    width: 2.25rem;
    height: 2.25rem;
}
:host([size=lg]) {
    width: 3.0rem;
    height: 3.0rem;
}

:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {
    width: auto;
    height: auto;
}
:host([pull=left]) #icon {
    float: left;
    margin-right: .3em!important;
}
:host([pull=right]) #icon {
    float: right;
    margin-left: .3em!important;
}
:host([border=square]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: .25em;
}
:host([border=circle]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: 50%;
}
#icon,
svg {
  width: 100%;
  height: 100%;
}
#icon {
    box-sizing: border-box;
} 
`+v.a+`
`+y.a+`
</style>
<div id="icon"></div>`;var F=T(function(L){function k(){(function(m,h){if(!(m instanceof h))throw new TypeError("Cannot call a class as a function")})(this,k);var b=function(m,h){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!h||typeof h!="object"&&typeof h!="function"?m:h}(this,(k.__proto__||Object.getPrototypeOf(k)).call(this));return b.$ui=b.attachShadow({mode:"open"}),b.$ui.appendChild(b.ownerDocument.importNode(S.content,!0)),R()&&g.ShadyCSS.styleElement(b),b._state={$iconHolder:b.$ui.getElementById("icon"),type:b.getAttribute("type")},b}return function(b,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);b.prototype=Object.create(m&&m.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(b,m):b.__proto__=m)}(k,HTMLElement),X(k,null,[{key:"getIconSvg",value:function(b,m){var h=this.cdnUrl+"/regular/bx-"+b+".svg";return m==="solid"?h=this.cdnUrl+"/solid/bxs-"+b+".svg":m==="logo"&&(h=this.cdnUrl+"/logos/bxl-"+b+".svg"),h&&p[h]||(p[h]=new Promise(function(P,H){var _=new XMLHttpRequest;_.addEventListener("load",function(){this.status<200||this.status>=300?H(new Error(this.status+" "+this.responseText)):P(this.responseText)}),_.onerror=H,_.onabort=H,_.open("GET",h),_.send()})),p[h]}},{key:"define",value:function(b){b=b||this.tagName,R()&&g.ShadyCSS.prepareTemplate(S,b),customElements.define(b,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.4/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),X(k,[{key:"attributeChangedCallback",value:function(b,m,h){var P=this._state.$iconHolder;switch(b){case"type":(function(H,_,W){var w=H._state;w.$iconHolder.textContent="",w.type&&(w.type=null),w.type=!W||W!=="solid"&&W!=="logo"?"regular":W,w.currentName!==void 0&&H.constructor.getIconSvg(w.currentName,w.type).then(function(C){w.type===W&&(w.$iconHolder.innerHTML=C)}).catch(function(C){console.error("Failed to load icon: "+w.currentName+`
`+C)})})(this,0,h);break;case"name":(function(H,_,W){var w=H._state;w.currentName=W,w.$iconHolder.textContent="",W&&w.type!==void 0&&H.constructor.getIconSvg(W,w.type).then(function(C){w.currentName===W&&(w.$iconHolder.innerHTML=C)}).catch(function(C){console.error("Failed to load icon: "+W+`
`+C)})})(this,0,h);break;case"color":P.style.fill=h||"";break;case"size":(function(H,_,W){var w=H._state;w.size&&(w.$iconHolder.style.width=w.$iconHolder.style.height="",w.size=w.sizeType=null),W&&!/^(xs|sm|md|lg)$/.test(w.size)&&(w.size=W.trim(),w.$iconHolder.style.width=w.$iconHolder.style.height=w.size)})(this,0,h);break;case"rotate":m&&P.classList.remove("bx-rotate-"+m),h&&P.classList.add("bx-rotate-"+h);break;case"flip":m&&P.classList.remove("bx-flip-"+m),h&&P.classList.add("bx-flip-"+h);break;case"animation":m&&P.classList.remove("bx-"+m),h&&P.classList.add("bx-"+h)}}},{key:"connectedCallback",value:function(){R()&&g.ShadyCSS.styleElement(this)}}]),k}());i.default=F,F.define()}])},t.exports=l()})})(rt);/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */function M(t){return getComputedStyle(t)}function E(t,e){for(var l in e){var s=e[l];typeof s=="number"&&(s=s+"px"),t.style[l]=s}return t}function z(t){var e=document.createElement("div");return e.className=t,e}var q=typeof Element<"u"&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function O(t,e){if(!q)throw new Error("No element matching method supported");return q.call(t,e)}function D(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function G(t,e){return Array.prototype.filter.call(t.children,function(l){return O(l,e)})}var x={main:"ps",rtl:"ps__rtl",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},V={x:null,y:null};function Z(t,e){var l=t.element.classList,s=x.state.scrolling(e);l.contains(s)?clearTimeout(V[e]):l.add(s)}function tt(t,e){V[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(x.state.scrolling(e))},t.settings.scrollingThreshold)}function nt(t,e){Z(t,e),tt(t,e)}var j=function(e){this.element=e,this.handlers={}},et={isEmpty:{configurable:!0}};j.prototype.bind=function(e,l){typeof this.handlers[e]>"u"&&(this.handlers[e]=[]),this.handlers[e].push(l),this.element.addEventListener(e,l,!1)};j.prototype.unbind=function(e,l){var s=this;this.handlers[e]=this.handlers[e].filter(function(i){return l&&i!==l?!0:(s.element.removeEventListener(e,i,!1),!1)})};j.prototype.unbindAll=function(){for(var e in this.handlers)this.unbind(e)};et.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return t.handlers[e].length===0})};Object.defineProperties(j.prototype,et);var N=function(){this.eventElements=[]};N.prototype.eventElement=function(e){var l=this.eventElements.filter(function(s){return s.element===e})[0];return l||(l=new j(e),this.eventElements.push(l)),l};N.prototype.bind=function(e,l,s){this.eventElement(e).bind(l,s)};N.prototype.unbind=function(e,l,s){var i=this.eventElement(e);i.unbind(l,s),i.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(i),1)};N.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll()}),this.eventElements=[]};N.prototype.once=function(e,l,s){var i=this.eventElement(e),n=function(r){i.unbind(l,n),s(r)};i.bind(l,n)};function U(t){if(typeof window.CustomEvent=="function")return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function K(t,e,l,s,i){s===void 0&&(s=!0),i===void 0&&(i=!1);var n;if(e==="top")n=["contentHeight","containerHeight","scrollTop","y","up","down"];else if(e==="left")n=["contentWidth","containerWidth","scrollLeft","x","left","right"];else throw new Error("A proper axis should be provided");ot(t,l,n,s,i)}function ot(t,e,l,s,i){var n=l[0],r=l[1],o=l[2],a=l[3],c=l[4],u=l[5];s===void 0&&(s=!0),i===void 0&&(i=!1);var v=t.element;t.reach[a]=null,v[o]<1&&(t.reach[a]="start"),v[o]>t[n]-t[r]-1&&(t.reach[a]="end"),e&&(v.dispatchEvent(U("ps-scroll-"+a)),e<0?v.dispatchEvent(U("ps-scroll-"+c)):e>0&&v.dispatchEvent(U("ps-scroll-"+u)),s&&nt(t,a)),t.reach[a]&&(e||i)&&v.dispatchEvent(U("ps-"+a+"-reach-"+t.reach[a]))}function Y(t){return parseInt(t,10)||0}function it(t){return O(t,"input,[contenteditable]")||O(t,"select,[contenteditable]")||O(t,"textarea,[contenteditable]")||O(t,"button,[contenteditable]")}function at(t){var e=M(t);return Y(e.width)+Y(e.paddingLeft)+Y(e.paddingRight)+Y(e.borderLeftWidth)+Y(e.borderRightWidth)}var I={isWebKit:typeof document<"u"&&"WebkitAppearance"in document.documentElement.style,supportsTouch:typeof window<"u"&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:typeof navigator<"u"&&navigator.msMaxTouchPoints,isChrome:typeof navigator<"u"&&/Chrome/i.test(navigator&&navigator.userAgent)};function A(t){var e=t.element,l=Math.floor(e.scrollTop),s=e.getBoundingClientRect();t.containerWidth=Math.round(s.width),t.containerHeight=Math.round(s.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(G(e,x.element.rail("x")).forEach(function(i){return D(i)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(G(e,x.element.rail("y")).forEach(function(i){return D(i)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=J(t,Y(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=Y((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=J(t,Y(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=Y(l*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),st(e,t),t.scrollbarXActive?e.classList.add(x.state.active("x")):(e.classList.remove(x.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=t.isRtl===!0?t.contentWidth:0),t.scrollbarYActive?e.classList.add(x.state.active("y")):(e.classList.remove(x.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function J(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function st(t,e){var l={width:e.railXWidth},s=Math.floor(t.scrollTop);e.isRtl?l.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:l.left=t.scrollLeft,e.isScrollbarXUsingBottom?l.bottom=e.scrollbarXBottom-s:l.top=e.scrollbarXTop+s,E(e.scrollbarXRail,l);var i={top:s,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?i.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:i.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?i.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth*2-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:i.left=e.scrollbarYLeft+t.scrollLeft,E(e.scrollbarYRail,i),E(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),E(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}function lt(t){t.element,t.event.bind(t.scrollbarY,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var l=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top,s=l>t.scrollbarYTop?1:-1;t.element.scrollTop+=s*t.containerHeight,A(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(e){return e.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var l=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left,s=l>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=s*t.containerWidth,A(t),e.stopPropagation()})}function ct(t){Q(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),Q(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])}function Q(t,e){var l=e[0],s=e[1],i=e[2],n=e[3],r=e[4],o=e[5],a=e[6],c=e[7],u=e[8],v=t.element,d=null,y=null,f=null;function X(p){p.touches&&p.touches[0]&&(p[i]=p.touches[0].pageY),v[a]=d+f*(p[i]-y),Z(t,c),A(t),p.stopPropagation(),p.type.startsWith("touch")&&p.changedTouches.length>1&&p.preventDefault()}function T(){tt(t,c),t[u].classList.remove(x.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",X)}function g(p,S){d=v[a],S&&p.touches&&(p[i]=p.touches[0].pageY),y=p[i],f=(t[s]-t[l])/(t[n]-t[o]),S?t.event.bind(t.ownerDocument,"touchmove",X):(t.event.bind(t.ownerDocument,"mousemove",X),t.event.once(t.ownerDocument,"mouseup",T),p.preventDefault()),t[u].classList.add(x.state.clicking),p.stopPropagation()}t.event.bind(t[r],"mousedown",function(p){g(p)}),t.event.bind(t[r],"touchstart",function(p){g(p,!0)})}function ft(t){var e=t.element,l=function(){return O(e,":hover")},s=function(){return O(t.scrollbarX,":focus")||O(t.scrollbarY,":focus")};function i(n,r){var o=Math.floor(e.scrollTop);if(n===0){if(!t.scrollbarYActive)return!1;if(o===0&&r>0||o>=t.contentHeight-t.containerHeight&&r<0)return!t.settings.wheelPropagation}var a=e.scrollLeft;if(r===0){if(!t.scrollbarXActive)return!1;if(a===0&&n<0||a>=t.contentWidth-t.containerWidth&&n>0)return!t.settings.wheelPropagation}return!0}t.event.bind(t.ownerDocument,"keydown",function(n){if(!(n.isDefaultPrevented&&n.isDefaultPrevented()||n.defaultPrevented)&&!(!l()&&!s())){var r=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(r){if(r.tagName==="IFRAME")r=r.contentDocument.activeElement;else for(;r.shadowRoot;)r=r.shadowRoot.activeElement;if(it(r))return}var o=0,a=0;switch(n.which){case 37:n.metaKey?o=-t.contentWidth:n.altKey?o=-t.containerWidth:o=-30;break;case 38:n.metaKey?a=t.contentHeight:n.altKey?a=t.containerHeight:a=30;break;case 39:n.metaKey?o=t.contentWidth:n.altKey?o=t.containerWidth:o=30;break;case 40:n.metaKey?a=-t.contentHeight:n.altKey?a=-t.containerHeight:a=-30;break;case 32:n.shiftKey?a=t.containerHeight:a=-t.containerHeight;break;case 33:a=t.containerHeight;break;case 34:a=-t.containerHeight;break;case 36:a=t.contentHeight;break;case 35:a=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&o!==0||t.settings.suppressScrollY&&a!==0||(e.scrollTop-=a,e.scrollLeft+=o,A(t),i(o,a)&&n.preventDefault())}})}function ut(t){var e=t.element;function l(r,o){var a=Math.floor(e.scrollTop),c=e.scrollTop===0,u=a+e.offsetHeight===e.scrollHeight,v=e.scrollLeft===0,d=e.scrollLeft+e.offsetWidth===e.scrollWidth,y;return Math.abs(o)>Math.abs(r)?y=c||u:y=v||d,y?!t.settings.wheelPropagation:!0}function s(r){var o=r.deltaX,a=-1*r.deltaY;return(typeof o>"u"||typeof a>"u")&&(o=-1*r.wheelDeltaX/6,a=r.wheelDeltaY/6),r.deltaMode&&r.deltaMode===1&&(o*=10,a*=10),o!==o&&a!==a&&(o=0,a=r.wheelDelta),r.shiftKey?[-a,-o]:[o,a]}function i(r,o,a){if(!I.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(r))return!1;for(var c=r;c&&c!==e;){if(c.classList.contains(x.element.consuming))return!0;var u=M(c);if(a&&u.overflowY.match(/(scroll|auto)/)){var v=c.scrollHeight-c.clientHeight;if(v>0&&(c.scrollTop>0&&a<0||c.scrollTop<v&&a>0))return!0}if(o&&u.overflowX.match(/(scroll|auto)/)){var d=c.scrollWidth-c.clientWidth;if(d>0&&(c.scrollLeft>0&&o<0||c.scrollLeft<d&&o>0))return!0}c=c.parentNode}return!1}function n(r){var o=s(r),a=o[0],c=o[1];if(!i(r.target,a,c)){var u=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(c?e.scrollTop-=c*t.settings.wheelSpeed:e.scrollTop+=a*t.settings.wheelSpeed,u=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(a?e.scrollLeft+=a*t.settings.wheelSpeed:e.scrollLeft-=c*t.settings.wheelSpeed,u=!0):(e.scrollTop-=c*t.settings.wheelSpeed,e.scrollLeft+=a*t.settings.wheelSpeed),A(t),u=u||l(a,c),u&&!r.ctrlKey&&(r.stopPropagation(),r.preventDefault())}}typeof window.onwheel<"u"?t.event.bind(e,"wheel",n):typeof window.onmousewheel<"u"&&t.event.bind(e,"mousewheel",n)}function ht(t){if(!I.supportsTouch&&!I.supportsIePointer)return;var e=t.element;function l(f,X){var T=Math.floor(e.scrollTop),g=e.scrollLeft,p=Math.abs(f),S=Math.abs(X);if(S>p){if(X<0&&T===t.contentHeight-t.containerHeight||X>0&&T===0)return window.scrollY===0&&X>0&&I.isChrome}else if(p>S&&(f<0&&g===t.contentWidth-t.containerWidth||f>0&&g===0))return!0;return!0}function s(f,X){e.scrollTop-=X,e.scrollLeft-=f,A(t)}var i={},n=0,r={},o=null;function a(f){return f.targetTouches?f.targetTouches[0]:f}function c(f){return f.pointerType&&f.pointerType==="pen"&&f.buttons===0?!1:!!(f.targetTouches&&f.targetTouches.length===1||f.pointerType&&f.pointerType!=="mouse"&&f.pointerType!==f.MSPOINTER_TYPE_MOUSE)}function u(f){if(c(f)){var X=a(f);i.pageX=X.pageX,i.pageY=X.pageY,n=new Date().getTime(),o!==null&&clearInterval(o)}}function v(f,X,T){if(!e.contains(f))return!1;for(var g=f;g&&g!==e;){if(g.classList.contains(x.element.consuming))return!0;var p=M(g);if(T&&p.overflowY.match(/(scroll|auto)/)){var S=g.scrollHeight-g.clientHeight;if(S>0&&(g.scrollTop>0&&T<0||g.scrollTop<S&&T>0))return!0}if(X&&p.overflowX.match(/(scroll|auto)/)){var R=g.scrollWidth-g.clientWidth;if(R>0&&(g.scrollLeft>0&&X<0||g.scrollLeft<R&&X>0))return!0}g=g.parentNode}return!1}function d(f){if(c(f)){var X=a(f),T={pageX:X.pageX,pageY:X.pageY},g=T.pageX-i.pageX,p=T.pageY-i.pageY;if(v(f.target,g,p))return;s(g,p),i=T;var S=new Date().getTime(),R=S-n;R>0&&(r.x=g/R,r.y=p/R,n=S),l(g,p)&&f.preventDefault()}}function y(){t.settings.swipeEasing&&(clearInterval(o),o=setInterval(function(){if(t.isInitialized){clearInterval(o);return}if(!r.x&&!r.y){clearInterval(o);return}if(Math.abs(r.x)<.01&&Math.abs(r.y)<.01){clearInterval(o);return}if(!t.element){clearInterval(o);return}s(r.x*30,r.y*30),r.x*=.8,r.y*=.8},10))}I.supportsTouch?(t.event.bind(e,"touchstart",u),t.event.bind(e,"touchmove",d),t.event.bind(e,"touchend",y)):I.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",u),t.event.bind(e,"pointermove",d),t.event.bind(e,"pointerup",y)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",u),t.event.bind(e,"MSPointerMove",d),t.event.bind(e,"MSPointerUp",y)))}var dt=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},pt={"click-rail":lt,"drag-thumb":ct,keyboard:ft,wheel:ut,touch:ht},B=function(e,l){var s=this;if(l===void 0&&(l={}),typeof e=="string"&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=e,e.classList.add(x.main),this.settings=dt();for(var i in l)this.settings[i]=l[i];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var n=function(){return e.classList.add(x.state.focus)},r=function(){return e.classList.remove(x.state.focus)};this.isRtl=M(e).direction==="rtl",this.isRtl===!0&&e.classList.add(x.rtl),this.isNegativeScroll=function(){var c=e.scrollLeft,u=null;return e.scrollLeft=-1,u=e.scrollLeft<0,e.scrollLeft=c,u}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new N,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=z(x.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=z(x.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",n),this.event.bind(this.scrollbarX,"blur",r),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var o=M(this.scrollbarXRail);this.scrollbarXBottom=parseInt(o.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=Y(o.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=Y(o.borderLeftWidth)+Y(o.borderRightWidth),E(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=Y(o.marginLeft)+Y(o.marginRight),E(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=z(x.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=z(x.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",n),this.event.bind(this.scrollbarY,"blur",r),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var a=M(this.scrollbarYRail);this.scrollbarYRight=parseInt(a.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=Y(a.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?at(this.scrollbarY):null,this.railBorderYWidth=Y(a.borderTopWidth)+Y(a.borderBottomWidth),E(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=Y(a.marginTop)+Y(a.marginBottom),E(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(c){return pt[c](s)}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(c){return s.onScroll(c)}),A(this)};B.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,E(this.scrollbarXRail,{display:"block"}),E(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=Y(M(this.scrollbarXRail).marginLeft)+Y(M(this.scrollbarXRail).marginRight),this.railYMarginHeight=Y(M(this.scrollbarYRail).marginTop)+Y(M(this.scrollbarYRail).marginBottom),E(this.scrollbarXRail,{display:"none"}),E(this.scrollbarYRail,{display:"none"}),A(this),K(this,"top",0,!1,!0),K(this,"left",0,!1,!0),E(this.scrollbarXRail,{display:""}),E(this.scrollbarYRail,{display:""}))};B.prototype.onScroll=function(e){this.isAlive&&(A(this),K(this,"top",this.element.scrollTop-this.lastScrollTop),K(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)};B.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),D(this.scrollbarX),D(this.scrollbarY),D(this.scrollbarXRail),D(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)};B.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/)}).join(" ")};$(document).ready(()=>{new B(".side-menu"),new B(".notification-tooltip");function t(s,i,n){$(i).hide(),$(s).on("click",r=>{$(i).slideToggle(),$(n).hasClass("icon-rotate")===!1?$(n).addClass("icon-rotate"):$(n).removeClass("icon-rotate")})}t(".layouts",".inner-list-layout",".layouts-icon"),t(".dashboard",".inner-list-dashboard",".dashboard-icon"),t(".frontPages",".inner-list-frontPages",".frontPages-icon");function e(s,i){$(document).on("click",function(n){let r=$(i),o=$(s);r!==n.target&&!r.has(n.target).length&&o!==n.target&&!o.has(n.target).length&&r.hide()})}function l(s,i,n){$(i).hide(),$(s).on("click",r=>{$(i).toggle()}),e(s,i),$(n).click(r=>{$(i).show(),$(".parent").remove(),r.stopPropagation()})}l(".theme-change",".theme-change-tooltip"),l(".customize",".customize-change-tooltip"),l(".notification",".notification-tooltip",".close-icon")});