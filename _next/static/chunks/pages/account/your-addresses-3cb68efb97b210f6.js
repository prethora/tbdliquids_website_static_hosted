(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[309],{3240:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/your-addresses",function(){return r(7579)}])},7889:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var o=r(1799),c=r(9396),a=r(5893),n=r(536),i=r.n(n),s=r(7294),l=r(3046),d=r(3350),b=r(7424),u=r(726),p=r(7834),m=r(966);function x(e){var t=e.type,r=void 0===t?"text":t,n=e.name,x=e.initialValue,f=void 0===x?"":x,v=e.otpLength,h=void 0===v?6:v,j=e.selectOptions,k=void 0===j?[]:j,y=e.onChange,g=e.callOnChangeOnInit,E=void 0!==g&&g,I=e.initialSelectedIndex,w=e.caption,N=e.placeholder,C=e.required,z=e.onKeyDown,S=void 0===z?function(){}:z,_=e.onBlur,V=void 0===_?function(){}:_,D=(0,s.useContext)(p.P).scalePixelToRem,P=(0,l.V)(["input"]),O=P.useState(!1,"error"),Z=P.useState(!1,"disabled");P.useProperty("mobile"===r,"type-is-mobile"),P.useProperty("checkbox"===r,"type-is-checkbox"),P.useProperty("hidden"===r,"type-is-hidden"),P.useProperty("otp"===r,"type-is-otp");var F=P.useState(!1,"has-focus"),K=(0,u.K)(""),R=(0,s.useRef)(!1),Y=(0,s.useRef)(),B=(0,s.useRef)(),T=(0,d.cI)(),A=T.input,W=A.maxWidth,q=A.captionPosition,L=void 0===q?"header":q,X=T.useInput,H=T.align,Q=function(){if("select"===r)return b.a.getSelectElementValue(B);if("checkbox"===r)return b.a.getInputElementChecked(Y)?"checked":"";var e=b.a.getInputElementValue(Y);return"mobile"===r?"".concat(K.value,"/").concat(e):e},G=function(e){if("select"===r)b.a.setSelectElementValue(B,e);else if("checkbox"===r)b.a.setInputElementChecked(Y,"checked"===e);else if("mobile"===r){var t=(e.includes("/")?e:"/".concat(e)).split("/"),o=t[0]||"",c=t.slice(1).join("/").trim();K.value=o,b.a.setInputElementValue(Y,c)}else b.a.setInputElementValue(Y,e)},J=function(){return f!==Q()},M=X((function(){return{focus:function(){"select"===r?b.a.focusSelectElement(B):b.a.focusInputElement(Y)},getName:function(){return n},signalInitialized:function(){E&&y&&y(Q())},getValue:Q,setValue:G,getErrorState:function(){return O},getInitialValue:function(){return f},getType:function(){return r},setSelectedIndex:function(e){"select"===r&&b.a.setSelectElementSelectedIndex(B,e)},getInitialSelectedIndex:function(){return"select"===r&&"number"===typeof I&&I>=0?I:-1},getIsHidden:function(){return"hidden"===r},getDisabledState:function(){return Z},getDiffersFromInitialValue:J,getOtpIsComplete:function(){return"otp"===r&&Q().length===h}}})),U=M.makeup,$=U.caption,ee=U.required,te=U.placeholder;w=w||$,N=N||te||"","boolean"!==typeof C&&(C=ee);var re=function(e,t){var o=!1;(S(e,t,(function(){o=!0})),"Enter"!==e||o||M.signalKeyDownEnter(),"Backspace"===e&&"mobile"===r)&&(0===b.a.getInputElementSelectionStart(Y)&&(K.value=""))},oe=function(){"otp"===r&&G(Q().split("").filter((function(e){return/\d/.test(e)})).filter((function(e,t){return t<h})).join("")),M.signalChange();var e=J();e!==R.current&&(R.current=e,M.signalDiffersFromInitialValueChange()),y&&y(Q())},ce=function(){F.value=!0},ae=function(){F.value=!1,V()},ne={textAlign:H},ie=(0,o.Z)({},"number"===typeof W?{maxWidth:W}:{}),se=(0,s.useRef)(),le=(0,u.K)(12);(0,s.useEffect)((function(){var e=M.toCallOnFirstEffect;e&&e()}),[]),(0,s.useEffect)((function(){"mobile"===r&&se.current&&(le.value=D(se.current.offsetWidth)+17)}),[K.value]);var de=(0,o.Z)({},"mobile"===r?{paddingLeft:"".concat(le.value,"rem")}:{});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:ne,className:"jsx-4e8e86da5cb7c8b2 "+(P.getClassNames()||""),children:(0,a.jsxs)("div",{style:ie,className:"jsx-4e8e86da5cb7c8b2 inner",children:["select"===r?(0,a.jsx)("select",{ref:B,onChange:oe,disabled:Z.value,onKeyDown:function(e){return re(e.key,(function(){return e.preventDefault()}))},onFocus:ce,onBlur:ae,className:"jsx-4e8e86da5cb7c8b2",children:k.map((function(e,t){var r=e.caption,n=e.value,i=e.disabled,s=void 0!==i&&i;return(0,a.jsx)("option",(0,c.Z)((0,o.Z)({value:n},s?{disabled:!0}:{}),{className:"jsx-4e8e86da5cb7c8b2",children:r}),"".concat(n,"-").concat(t))}))}):(0,a.jsx)("input",(0,c.Z)((0,o.Z)({ref:Y,type:{text:"text",password:"password",mobile:"text",hidden:"hidden",otp:"text",checkbox:"checkbox"}[r]},"placeholder"===L?{placeholder:w+(C?"":" (optional)")}:{placeholder:N}),{onKeyDown:function(e){return re(e.key,(function(){return e.preventDefault()}))},onChange:oe,onFocus:ce,onBlur:ae,disabled:Z.value,style:de,className:"jsx-4e8e86da5cb7c8b2"})),"mobile"===r?(0,a.jsxs)("div",{ref:se,className:"jsx-4e8e86da5cb7c8b2 mobile-plus ",children:["+ ",""!==K.value?(0,a.jsx)("span",{className:"jsx-4e8e86da5cb7c8b2 country-code",children:K.value}):""]}):"",(0,a.jsx)("div",{className:"jsx-4e8e86da5cb7c8b2 border"}),"header"===L&&"hidden"!==r&&"otp"!==r?(0,a.jsx)("div",{className:"jsx-4e8e86da5cb7c8b2 caption-back",children:(0,a.jsxs)("div",{className:"jsx-4e8e86da5cb7c8b2 caption",children:[w,C?"":(0,a.jsx)("span",{className:"jsx-4e8e86da5cb7c8b2 caption-optional",children:"\xa0(optional)"}),"checkbox"===r?(0,a.jsx)(m.Q,{onClick:function(){b.a.setInputElementChecked(Y,!b.a.getInputElementChecked(Y)),oe(),b.a.focusInputElement(Y)}}):""]})}):"","otp"===r?(0,a.jsx)("div",{className:"jsx-4e8e86da5cb7c8b2 otp-bars",children:"_".repeat(h)}):""]})}),(0,a.jsx)(i(),{id:"4e8e86da5cb7c8b2",children:'.inner.jsx-4e8e86da5cb7c8b2{display:inline-block;width:100%;position:relative;--border-radius:3rem}.input.jsx-4e8e86da5cb7c8b2{margin-bottom:20rem}.country-code.jsx-4e8e86da5cb7c8b2{color:#fff;background-color:#9999b2;padding:2rem 7rem;-webkit-border-radius:3rem;-moz-border-radius:3rem;border-radius:3rem;font-size:12rem;position:relative;top:-1rem}.border.jsx-4e8e86da5cb7c8b2{position:absolute;--overlap:-1rem;--overlap-verti:var(--overlap);--overlap-hori:var(--overlap);left:var(--overlap-hori);top:var(--overlap-verti);right:var(--overlap-hori);bottom:var(--overlap-verti);pointer-events:none;-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);display:none}.type-is-checkbox.jsx-4e8e86da5cb7c8b2 .border.jsx-4e8e86da5cb7c8b2{--overlap-verti:-7rem;--overlap-hori:-1rem;-webkit-transform:translateY(-1rem);-moz-transform:translateY(-1rem);-ms-transform:translateY(-1rem);-o-transform:translateY(-1rem);transform:translateY(-1rem);display:none}.type-is-hidden.jsx-4e8e86da5cb7c8b2{margin-bottom:0rem;height:0rem;overflow:hidden}.caption-back.jsx-4e8e86da5cb7c8b2{position:absolute;left:10rem;top:-1rem;padding:0rem 4rem;border-top:2rem solid var(--input-backcolor);pointer-events:none}.caption-optional.jsx-4e8e86da5cb7c8b2{color:#aaa}.caption.jsx-4e8e86da5cb7c8b2{position:relative;top:-10rem;font-size:11rem;color:var(--input-textcolor);pointer-events:none}.type-is-checkbox.jsx-4e8e86da5cb7c8b2 .caption-back.jsx-4e8e86da5cb7c8b2{border-top:none;pointer-events:auto}.type-is-checkbox.jsx-4e8e86da5cb7c8b2 .caption.jsx-4e8e86da5cb7c8b2{top:3rem;left:10rem;visibility:visible;pointer-events:auto}.type-is-checkbox.jsx-4e8e86da5cb7c8b2 .caption-back.jsx-4e8e86da5cb7c8b2{visibility:hidden}.type-is-checkbox.jsx-4e8e86da5cb7c8b2 .caption-optional.jsx-4e8e86da5cb7c8b2{display:none}input.jsx-4e8e86da5cb7c8b2,select.jsx-4e8e86da5cb7c8b2{background-color:var(--input-backcolor);border:1rem solid var(--input-bordercolor);-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);border-radius:var(--border-radius);padding:12rem 10rem;width:100%;outline:none;color:var(--input-textcolor);font-size:14rem;font-family:Arial}input[type="checkbox"].jsx-4e8e86da5cb7c8b2{width:auto}.otp-bars.jsx-4e8e86da5cb7c8b2{position:absolute;top:18rem;left:10rem;font-size:24rem;letter-spacing:10rem;pointer-events:none;font-family:Arial;color:var(--input-textcolor);opacity:.8}.type-is-otp.jsx-4e8e86da5cb7c8b2 input.jsx-4e8e86da5cb7c8b2{border:none;background-color:transparent;font-size:24rem;letter-spacing:10rem}.disabled.jsx-4e8e86da5cb7c8b2 input.jsx-4e8e86da5cb7c8b2,.disabled.jsx-4e8e86da5cb7c8b2 select.jsx-4e8e86da5cb7c8b2{background-color:var(--input-disabled-backcolor)}input.jsx-4e8e86da5cb7c8b2::-webkit-input-placeholder,select.jsx-4e8e86da5cb7c8b2::-webkit-input-placeholder{color:var(--input-placeholder-textcolor)}input.jsx-4e8e86da5cb7c8b2:-moz-placeholder,select.jsx-4e8e86da5cb7c8b2:-moz-placeholder{color:var(--input-placeholder-textcolor)}input.jsx-4e8e86da5cb7c8b2::-moz-placeholder,select.jsx-4e8e86da5cb7c8b2::-moz-placeholder{color:var(--input-placeholder-textcolor)}input.jsx-4e8e86da5cb7c8b2:-ms-input-placeholder,select.jsx-4e8e86da5cb7c8b2:-ms-input-placeholder{color:var(--input-placeholder-textcolor)}input.jsx-4e8e86da5cb7c8b2::-ms-input-placeholder,select.jsx-4e8e86da5cb7c8b2::-ms-input-placeholder{color:var(--input-placeholder-textcolor)}input.jsx-4e8e86da5cb7c8b2::placeholder,select.jsx-4e8e86da5cb7c8b2::placeholder{color:var(--input-placeholder-textcolor)}.has-focus.jsx-4e8e86da5cb7c8b2 .border.jsx-4e8e86da5cb7c8b2{border:2rem solid var(--input-focus-bordercolor);display:block}.type-is-checkbox.jsx-4e8e86da5cb7c8b2 .border.jsx-4e8e86da5cb7c8b2{display:none}.type-is-checkbox.has-focus.jsx-4e8e86da5cb7c8b2 .caption.jsx-4e8e86da5cb7c8b2{color:var(--input-focus-bordercolor)}.error.jsx-4e8e86da5cb7c8b2 input.jsx-4e8e86da5cb7c8b2,.error.jsx-4e8e86da5cb7c8b2 select.jsx-4e8e86da5cb7c8b2{color:var(--error-color)}.error.jsx-4e8e86da5cb7c8b2 .border.jsx-4e8e86da5cb7c8b2{border:2rem solid var(--error-color);display:block}.error.jsx-4e8e86da5cb7c8b2 .caption.jsx-4e8e86da5cb7c8b2{color:var(--error-color);font-weight:600}.mobile-plus.jsx-4e8e86da5cb7c8b2{position:absolute;left:12rem;top:10rem;font-size:15rem;color:var(--input-textcolor)}'})]})}}},function(e){e.O(0,[37,350,317,774,888,179],(function(){return t=3240,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=your-addresses-3cb68efb97b210f6.js.map