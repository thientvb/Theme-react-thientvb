"use strict";(self.webpackChunktokyo_free_white_react_admin_dashboard=self.webpackChunktokyo_free_white_react_admin_dashboard||[]).push([[699],{9699:function(n,t,i){i.r(t),i.d(t,{default:function(){return M}});var o=i(9439),a=i(2791),e=i(1889),r=i(4554),d=i(890),s=i(1614),c=i(4518),l=i(1336),g=i(6907),h=i(4775),u=i(4942),f=i(3366),v=i(7462),m=i(4036),x=i(7384),Z=i(4419),p=i(6934),I=i(1402),j=i(3239),w=i(1217);function P(n){return(0,w.Z)("MuiLoadingButton",n)}var b=(0,i(5878).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),y=i(184),L=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],S=(0,p.ZP)(c.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,t){return[t.root,t.startIconLoadingStart&&(0,u.Z)({},"& .".concat(b.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&(0,u.Z)({},"& .".concat(b.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(n){var t=n.ownerState,i=n.theme;return(0,v.Z)((0,u.Z)({},"& .".concat(b.startIconLoadingStart,", & .").concat(b.endIconLoadingEnd),{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&(0,u.Z)({transition:i.transitions.create(["background-color","box-shadow","border-color"],{duration:i.transitions.duration.short})},"&.".concat(b.loading),{color:"transparent"}),"start"===t.loadingPosition&&t.fullWidth&&(0,u.Z)({},"& .".concat(b.startIconLoadingStart,", & .").concat(b.endIconLoadingEnd),{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===t.loadingPosition&&t.fullWidth&&(0,u.Z)({},"& .".concat(b.startIconLoadingStart,", & .").concat(b.endIconLoadingEnd),{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0,marginLeft:-8}))})),k=(0,p.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,t){var i=n.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat((0,m.Z)(i.loadingPosition))]]}})((function(n){var t=n.theme,i=n.ownerState;return(0,v.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===i.loadingPosition&&("outlined"===i.variant||"contained"===i.variant)&&{left:"small"===i.size?10:14},"start"===i.loadingPosition&&"text"===i.variant&&{left:6},"center"===i.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===i.loadingPosition&&("outlined"===i.variant||"contained"===i.variant)&&{right:"small"===i.size?10:14},"end"===i.loadingPosition&&"text"===i.variant&&{right:6},"start"===i.loadingPosition&&i.fullWidth&&{position:"relative",left:-10},"end"===i.loadingPosition&&i.fullWidth&&{position:"relative",right:-10})})),_=a.forwardRef((function(n,t){var i=(0,I.Z)({props:n,name:"MuiLoadingButton"}),o=i.children,e=i.disabled,r=void 0!==e&&e,d=i.id,s=i.loading,c=void 0!==s&&s,l=i.loadingIndicator,g=i.loadingPosition,h=void 0===g?"center":g,u=i.variant,p=void 0===u?"text":u,w=(0,f.Z)(i,L),b=(0,x.Z)(d),_=null!=l?l:(0,y.jsx)(j.Z,{"aria-labelledby":b,color:"inherit",size:16}),R=(0,v.Z)({},i,{disabled:r,loading:c,loadingIndicator:_,loadingPosition:h,variant:p}),W=function(n){var t=n.loading,i=n.loadingPosition,o=n.classes,a={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,m.Z)(i))],endIcon:[t&&"endIconLoading".concat((0,m.Z)(i))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,m.Z)(i))]},e=(0,Z.Z)(a,P,o);return(0,v.Z)({},o,e)}(R);return(0,y.jsx)(S,(0,v.Z)({disabled:r||c,id:b,ref:t},w,{variant:p,classes:W,ownerState:R,children:"end"===R.loadingPosition?(0,y.jsxs)(a.Fragment,{children:[o,c&&(0,y.jsx)(k,{className:W.loadingIndicator,ownerState:R,children:_})]}):(0,y.jsxs)(a.Fragment,{children:[c&&(0,y.jsx)(k,{className:W.loadingIndicator,ownerState:R,children:_}),o]})}))})),R=(0,p.ZP)(e.ZP)((function(n){var t=n.theme;return"\n    background: ".concat(t.colors.gradients.black1,";\n")})),W=(0,p.ZP)(r.Z)((function(){return"\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"})),E=(0,p.ZP)(d.Z)((function(n){var t=n.theme;return"\n      color: ".concat(t.colors.alpha.white[100],";\n")})),C=(0,p.ZP)(d.Z)((function(n){var t=n.theme;return"\n      color: ".concat(t.colors.alpha.white[70],";\n")}));var M=function(){var n=(0,a.useState)(!1),t=(0,o.Z)(n,2),i=t[0],u=t[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g.ql,{children:(0,y.jsx)("title",{children:"Status - 500"})}),(0,y.jsx)(W,{children:(0,y.jsxs)(e.ZP,{container:!0,sx:{height:"100%"},alignItems:"stretch",spacing:0,children:[(0,y.jsx)(e.ZP,{xs:12,md:6,alignItems:"center",display:"flex",justifyContent:"center",item:!0,children:(0,y.jsx)(s.Z,{maxWidth:"sm",children:(0,y.jsxs)(r.Z,{textAlign:"center",children:[(0,y.jsx)("img",{alt:"500",height:260,src:"/static/images/status/500.svg"}),(0,y.jsx)(d.Z,{variant:"h2",sx:{my:2},children:"There was an error, please try again later"}),(0,y.jsx)(d.Z,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:4},children:"The server encountered an internal error and was not able to complete your request"}),(0,y.jsx)(_,{onClick:function(){u(!0)},loading:i,variant:"outlined",color:"primary",startIcon:(0,y.jsx)(h.Z,{}),children:"Refresh view"}),(0,y.jsx)(c.Z,{href:"/overview",variant:"contained",sx:{ml:1},children:"Go back"})]})})}),(0,y.jsx)(l.Z,{mdDown:!0,children:(0,y.jsx)(R,{xs:12,md:6,alignItems:"center",display:"flex",justifyContent:"center",item:!0,children:(0,y.jsx)(s.Z,{maxWidth:"sm",children:(0,y.jsxs)(r.Z,{textAlign:"center",children:[(0,y.jsx)(E,{variant:"h1",sx:{my:2},children:"Tokyo Free White React Typescript Admin Dashboard"}),(0,y.jsx)(C,{variant:"h4",fontWeight:"normal",sx:{mb:4},children:"High performance React template built with lots of powerful Material-UI components across multiple product niches for fast & perfect apps development processes."}),(0,y.jsx)(c.Z,{href:"/overview",size:"large",variant:"contained",children:"Overview"})]})})})})]})})]})}},4775:function(n,t,i){var o=i(4836);t.Z=void 0;var a=o(i(5649)),e=i(184),r=(0,a.default)((0,e.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"RefreshTwoTone");t.Z=r}}]);
//# sourceMappingURL=699.c76648bc.chunk.js.map