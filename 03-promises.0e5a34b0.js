!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc");function i(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms")),promisCounter=0}),n)}))}({onForm:document.querySelector("form"),delayFirst:document.querySelector('input[name="delay"]'),stepDelay:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')}).onForm.addEventListener("submit",(function(n){n.preventDefault();for(var t=n.target.elements,o=t.amount.value,r=Number(t.delay.value),a=Number(t.step.value),c=0,l=0;l<o;l+=1)i(c+=1,r+a*l).then((function(n){e(u).Notify.success(n)})).catch((function(n){e(u).Notify.failure(n)}))}))}();
//# sourceMappingURL=03-promises.0e5a34b0.js.map
