!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var r,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),m=Object.prototype.toString,b=Math.max,p=Math.min,y=function(){return v.Date.now()};function g(e,t,n){var r,o,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function g(e){return c=e,f=setTimeout(w,t),d?m(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function w(){var e=y();if(S(e))return h(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?p(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?m(e):(r=o=void 0,u)}function T(){var e=y(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return g(l);if(s)return f=setTimeout(w,t),m(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=O(t)||0,j(n)&&(d=!!n.leading,a=(s="maxWait"in n)?b(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?u:h(y())},T}function j(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=f.test(t);return r||l.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}r=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var S,w=document.querySelector(".feedback-form"),h=document.querySelector("input"),T=document.querySelector("textarea"),x={};w.addEventListener("submit",(function(t){var r;t.preventDefault();var o=(r={},e(n)(r,h.name,h.value),e(n)(r,T.name,T.value),r);console.log(o),w.reset(),localStorage.removeItem("feedback-form-state")})),w.addEventListener("input",e(r)((function(e){x[e.target.name]=e.target.value,t=x,localStorage.setItem("feedback-form-state",JSON.stringify(t));var t}),500)),(S=JSON.parse(localStorage.getItem("feedback-form-state")))&&(h.value=S.email?S.email:"",T.value=S.message?S.message:"")}();
//# sourceMappingURL=03-feedback.f0677138.js.map