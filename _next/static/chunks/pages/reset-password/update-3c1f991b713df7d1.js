(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{9541:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reset-password/update",function(){return n(1218)}])},7819:function(e,r,n){"use strict";n.d(r,{Z:function(){return t}});var i=n(5893),a=n(536),o=n.n(a),s=n(3046);function t(e){var r=e.children,n=e.secure,a=void 0===n||n,t=(0,s.V)(["page-wrapper"]);return t.useProperty(a,"secure"),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"jsx-289e6d2aa59a8a7d "+(t.getClassNames()||""),children:r}),(0,i.jsx)(o(),{id:"289e6d2aa59a8a7d",children:".page-wrapper.jsx-289e6d2aa59a8a7d{width:100%;color:#333;padding:50rem 40rem;padding-top:50rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.secure.jsx-289e6d2aa59a8a7d{}"})]})}},1218:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return w}});var i=n(1351),a=n(5893),o=n(59),s=n(3350),t=n(7889),d=n(7063),c=n(7819),l=n(4157),u=n(4782),p={validation:function(e){if(e.password!==e.confirm)return{message:"The password and confirmation do not match",inputNames:["password","confirm"]}},inputs:{id:{caption:"ID",required:!0},password:{caption:"Password",required:!0,validation:"min:6"},confirm:{caption:"Confirm",required:!0,validation:"min:6"}},errorTable:{"already-used":"This reset link has already been used and cannot be used again.","no-user-record":"The user account associated with this reset link could not be found.",expired:"This reset link has expired. Use the form below to request a new one.","no-record":"This reset link does not match any of our records.","no-id":"This link has no id parameter and is invalid."},relativeUrl:"/users/login?action=reset_password"},m=n(7424);function w(e){e=null!==e?e:(0,i.Z)(new TypeError("Cannot destructure undefined"));var r=m.a.getQueryParams(),n=r.id,w=r.error;return w||n||(n="invalid_id",w="no-id"),(0,a.jsx)(c.Z,{children:(0,a.jsxs)(s.ZP,{requestMakeup:p,autoFocus:!0,align:"center",input:{maxWidth:400,captionPosition:"placeholder"},onSuccess:function(e){var r=e.user.email;return{type:"redirect",path:"/login?reset=".concat(encodeURIComponent(r))}},initialError:w,children:[(0,a.jsx)(u.Z,{children:"Reset Password"}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(d.Z,{children:"Enter a new password and confirmation below to reset your password."}),(0,a.jsx)(t.Z,{name:"id",type:"hidden",initialValue:n}),(0,a.jsx)(t.Z,{name:"password",type:"password"}),(0,a.jsx)(t.Z,{name:"confirm",type:"password"}),(0,a.jsx)(l.Z,{caption:"Reset"})]})]})})}}},function(e){e.O(0,[37,350,716,774,888,179],(function(){return r=9541,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
//# sourceMappingURL=update-3c1f991b713df7d1.js.map