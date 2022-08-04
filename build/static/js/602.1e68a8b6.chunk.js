"use strict";(self.webpackChunktokyo_free_white_react_admin_dashboard=self.webpackChunktokyo_free_white_react_admin_dashboard||[]).push([[602],{1602:function(e,t,n){n.r(t);var r=n(4554),i=n(8029),a=n(4518),o=n(1614),s=n(890),d=n(7621),c=n(8096),u=n(3466),l=n(4721),h=n(6907),m=n(5024),x=n(6934),f=n(184),v=(0,x.ZP)(r.Z)((function(e){e.theme;return"\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"})),p=(0,x.ZP)(i.Z)((function(e){var t=e.theme;return"\n    background-color: ".concat(t.colors.alpha.white[100],";\n")})),Z=(0,x.ZP)(a.Z)((function(e){var t=e.theme;return"\n    margin-right: -".concat(t.spacing(1),";\n")}));t.default=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h.ql,{children:(0,f.jsx)("title",{children:"Status - 404"})}),(0,f.jsx)(v,{children:(0,f.jsxs)(o.Z,{maxWidth:"md",children:[(0,f.jsxs)(r.Z,{textAlign:"center",children:[(0,f.jsx)("img",{alt:"404",height:180,src:"/static/images/status/404.svg"}),(0,f.jsx)(s.Z,{variant:"h2",sx:{my:2},children:"The page you were looking for doesn't exist."}),(0,f.jsx)(s.Z,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:4},children:"It's on us, we moved the content to a different page. The search below should help!"})]}),(0,f.jsx)(o.Z,{maxWidth:"sm",children:(0,f.jsxs)(d.Z,{sx:{textAlign:"center",mt:3,p:4},children:[(0,f.jsx)(c.Z,{variant:"outlined",fullWidth:!0,children:(0,f.jsx)(p,{type:"text",placeholder:"Search terms here...",endAdornment:(0,f.jsx)(u.Z,{position:"end",children:(0,f.jsx)(Z,{variant:"contained",size:"small",children:"Search"})}),startAdornment:(0,f.jsx)(u.Z,{position:"start",children:(0,f.jsx)(m.Z,{})})})}),(0,f.jsx)(l.Z,{sx:{my:4},children:"OR"}),(0,f.jsx)(a.Z,{href:"/overview",variant:"outlined",children:"Go to homepage"})]})})]})})]})}},7621:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7462),i=n(3366),a=n(2791),o=n(1025),s=n(4419),d=n(6934),c=n(1402),u=n(703),l=n(1217);function h(e){return(0,l.Z)("MuiCard",e)}(0,n(5878).Z)("MuiCard",["root"]);var m=n(184),x=["className","raised"],f=(0,d.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),v=a.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiCard"}),a=n.className,d=n.raised,u=void 0!==d&&d,l=(0,i.Z)(n,x),v=(0,r.Z)({},n,{raised:u}),p=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},h,t)}(v);return(0,m.jsx)(f,(0,r.Z)({className:(0,o.Z)(p.root,a),elevation:u?8:void 0,ref:t,ownerState:v},l))}))},1614:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(4942),i=n(3366),a=n(7462),o=n(2791),s=n(9596),d=n(7312),c=n(1217),u=n(4419),l=n(6083),h=(0,n(4046).ZP)(),m=n(5080),x=n(184),f=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,m.Z)(),p=h("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,d.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),Z=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:v})},g=function(e,t){var n=e.classes,r=e.fixed,i=e.disableGutters,a=e.maxWidth,o={root:["root",a&&"maxWidth".concat((0,d.Z)(String(a))),r&&"fixed",i&&"disableGutters"]};return(0,u.Z)(o,(function(e){return(0,c.Z)(t,e)}),n)};var b=n(4036),j=n(6934),w=n(1402),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?p:t,d=e.useThemeProps,c=void 0===d?Z:d,u=e.componentName,l=void 0===u?"MuiContainer":u,h=n((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,i=t.breakpoints.values[r];return 0!==i&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(i).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),m=o.forwardRef((function(e,t){var n=c(e),r=n.className,o=n.component,d=void 0===o?"div":o,u=n.disableGutters,m=void 0!==u&&u,v=n.fixed,p=void 0!==v&&v,Z=n.maxWidth,b=void 0===Z?"lg":Z,j=(0,i.Z)(n,f),w=(0,a.Z)({},n,{component:d,disableGutters:m,fixed:p,maxWidth:b}),W=g(w,l);return(0,x.jsx)(h,(0,a.Z)({as:d,ownerState:w,className:(0,s.Z)(W.root,r),ref:t},j))}));return m}({createStyledComponent:(0,j.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,b.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,w.Z)({props:e,name:"MuiContainer"})}}),k=W}}]);
//# sourceMappingURL=602.1e68a8b6.chunk.js.map