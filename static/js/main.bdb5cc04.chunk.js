(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{198:function(e,t,n){e.exports=n(328)},327:function(e,t,n){},328:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(42),i=n.n(o),c=n(29),s=n(17),l=n(18),u=n(19),d=n(20),p=n(21),m=n(50),h=n(9),f=n.n(h),v=n(24),b=n(338);function g(e){var t=e.children,n=Object(v.a)(e,["children"]);return a.a.createElement(b.a,n,t)}var E=n(339),O=n(329);function w(e){return"checkbox"===e.type?a.a.createElement(E.a,{label:e.label}):a.a.createElement(O.a,e,e.children)}function y(e){var t=e.children,n=Object(v.a)(e,["children"]);return a.a.createElement(O.a.Group,n,t)}function j(e){var t=e.children,n=Object(v.a)(e,["children"]);return a.a.createElement(O.a.Or,n,t)}var k=n(342);function C(e){var t=e.cols,n=void 0===t?6:t;return a.a.createElement(k.a,{columns:"equal",textAlign:"center",style:{height:"100vh"},verticalAlign:"middle"},a.a.createElement(k.a.Column,{width:n},e.children))}var P=n(341);function R(e){var t=e.children,n=Object(v.a)(e,["children"]);return a.a.createElement(P.a,n,t)}function S(e){var t=e.children,n=Object(v.a)(e,["children"]);return a.a.createElement(P.a.Group,n,t)}function U(e){return function(t){return a.a.createElement(e,t,t.children)}}var x=U(P.a.Field),L=U(P.a.Input);var I=n(340);function A(e){e.iconType;var t=Object(v.a)(e,["iconType"]);return a.a.createElement(I.a,Object.assign({icon:e.iconType},t))}n(343);function T(e){var t=e.children,n=Object(v.a)(e,["children"]);return a.a.createElement("div",n,t)}function N(e){var t=e.children,n=Object(v.a)(e,["children"]);return a.a.createElement(C,n,t)}var F=n(57),V=n(324),_=function(){var e=!1,t={timeout:3e3,resetOnHover:!0,position:"topRight",close:!0,closeOnEscape:!0,transitionIn:"flipInX",transitionOut:"flipOutX"};return{getToast:function(){return e||(V.settings(t),e=!0),V}}}();function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.toLowerCase(),a=["success","info","error","warning"].indexOf(r)>-1?r:"show",o=Object(F.a)({title:e.title||"",message:e.message||e||""},n);_.getToast()[a](o)}var q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={isRememberActive:!1},n.handleRememberClick=function(){n.setState((function(e){return{isRememberActive:!e.isRememberActive}}),(function(){(0,n.props.onRemember)(n.state.isRememberActive)}))},n.handleLoginClick=function(){var e=n.getUserInput();n.validateUserInput(e)&&n.props.onLogin(e)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getUserInput",value:function(){return{username:document.getElementById("username").value,password:document.getElementById("password").value}}},{key:"validateUserInput",value:function(e){var t=e.username,n=e.password;return t.trim()?!!n.trim()||(D("Password cannot be empty","error"),!1):(D("Username cannot be empty","error"),!1)}},{key:"render",value:function(){var e=this.state.isRememberActive,t=this.props,n=t.onSignupClick,r=t.onForgotPasswordClick;return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{cols:5},a.a.createElement(g,{className:"border-box"},a.a.createElement(R,null,a.a.createElement(x,{isLine:!0},"Welcome back!"),a.a.createElement(x,{isLine:!0},a.a.createElement(A,{id:"username",type:"text",placeholder:"Email",iconType:"user"})),a.a.createElement(x,{isLine:!0},a.a.createElement(A,{id:"password",type:"password",placeholder:"Password",iconType:"lock"})),a.a.createElement(x,{isLine:!0,className:"text flexible-center-equidistant-cells"},a.a.createElement(w,{toggle:!0,active:e,onClick:this.handleRememberClick},"Remember me"),a.a.createElement(x,{isLine:!0,onClick:r},a.a.createElement(T,{className:"inline link"},"Forgot password?"))),a.a.createElement(x,{className:"flexible",isLine:!0},a.a.createElement(w,{className:"cell no-margin",primary:!0,onClick:this.handleLoginClick},"Login")),a.a.createElement(x,{isLine:!0,onClick:n},"Or ",a.a.createElement(T,{className:"inline link"},"register now!"))))))}}]),t}(a.a.Component);q.defaultProps={onRemember:f.a.noop,onSignupClick:f.a.noop,onForgotPasswordClick:f.a.noop,onLogin:f.a.noop};var B=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleSignupClick=function(){var e=n.getUserInput();n.validateUserInput(e)&&n.props.onSignup(e)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getUserInput",value:function(){var e=document.forms[0],t=e.querySelector("#firstName").value,n=e.querySelector("#lastName").value,r=e.querySelector("#username").value,a=e.querySelector("#confirmpassword").value;return{username:r,password:e.querySelector("#password").value,confirmpassword:a,firstname:t,lastname:n}}},{key:"validateUserInput",value:function(e){var t=e.username,n=e.password,r=e.confirmpassword;return e.firstname.trim()?t.trim()?n.trim()?r.trim()?r.trim()===n.trim()||(D("Password and Confirm password do not match","error"),!1):(D("Confirm password cannot be empty","error"),!1):(D("Password cannot be empty","error"),!1):(D("Username cannot be empty","error"),!1):(D("Please enter your name","error"),!1)}},{key:"render",value:function(){var e=this.props.onSigninClick;return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{cols:6},a.a.createElement(g,{className:"border-box"},a.a.createElement(R,null,a.a.createElement(x,{isLine:!0},"Creating an account is quick and easy!"),a.a.createElement(S,{widths:"equal"},a.a.createElement(L,{id:"firstName",fluid:!0,placeholder:"First name"}),a.a.createElement(L,{id:"lastName",fluid:!0,placeholder:"Last name"})),a.a.createElement(x,{isLine:!0},a.a.createElement(A,{id:"username",type:"text",placeholder:"Email"})),a.a.createElement(x,{isLine:!0},a.a.createElement(A,{id:"password",type:"password",placeholder:"Password"})),a.a.createElement(x,{isLine:!0},a.a.createElement(A,{id:"confirmpassword",type:"password",placeholder:"Confirm Password"})),a.a.createElement(x,{className:"flexible",isLine:!0},a.a.createElement(w,{className:"cell",primary:!0,onClick:this.handleSignupClick},"Register")),a.a.createElement(x,{isLine:!0,onClick:e},"Or ",a.a.createElement(T,{className:"inline link"},"Sign in."))))))}}]),t}(a.a.Component);B.defaultProps={onSignup:f.a.noop,onSigninClick:f.a.noop};var G=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleForgotPasswordClick=function(){var e=n.getUserInput();n.validateUserInput(e)&&n.props.onForgotPassword(e)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getUserInput",value:function(){return{useremail:document.getElementById("useremail").value}}},{key:"validateUserInput",value:function(e){return!!e.useremail.trim()||(D("Please enter your Email","error"),!1)}},{key:"render",value:function(){var e=this.props.onSigninClick;return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{cols:6},a.a.createElement(g,{className:"border-box"},a.a.createElement(R,null,a.a.createElement(x,{isLine:!0},"Please enter your registered email ID"),a.a.createElement(x,{isLine:!0},a.a.createElement(A,{id:"useremail",type:"text",placeholder:"Email",iconType:"user"})),a.a.createElement(x,{isLine:!0},a.a.createElement(y,null,a.a.createElement(w,{onClick:e},"To Sign in"),a.a.createElement(j,null),a.a.createElement(w,{primary:!0,onClick:this.handleForgotPasswordClick},"Get Verification Code")))))))}}]),t}(a.a.Component);G.defaultProps={onForgotPassword:f.a.noop,onRedirect:f.a.noop};var M=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleVerificationCodeSubmitClick=function(){var e=n.getUserInput();n.validateUserInput(e)&&n.props.onSubmitVerificationCode(e.verificationCode)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getUserInput",value:function(){return{verificationCode:document.getElementById("verificationCode").value}}},{key:"validateUserInput",value:function(e){return!!e.verificationCode.trim()||(D("Please enter the verification code","error"),!1)}},{key:"render",value:function(){var e=this.props,t=e.onResendVerificationCode,n=e.emailAddress,r=e.onSigninClick;return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{cols:6},a.a.createElement(g,{className:"border-box"},a.a.createElement(R,null,a.a.createElement(x,{isLine:!0},"Please enter the verification code sent to ",a.a.createElement(T,{className:"inline link"},n)),a.a.createElement(x,{isLine:!0},a.a.createElement(A,{id:"verificationCode",type:"text",placeholder:"Verification Code",iconType:"user secret"})),a.a.createElement(x,{isLine:!0},a.a.createElement(y,null,a.a.createElement(w,{onClick:t},"Resend"),a.a.createElement(j,null),a.a.createElement(w,{primary:!0,onClick:this.handleVerificationCodeSubmitClick},"Submit"))),a.a.createElement(x,{isLine:!0,onClick:r},"Or ",a.a.createElement(T,{className:"inline link"},"Sign in."))))))}}]),t}(a.a.Component);M.defaultProps={onResendVerificationCode:f.a.noop,onSubmitVerificationCode:f.a.noop,onSigninClick:f.a.noop};var W=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleResetPasswordClick=function(){var e=n.getUserInput();n.validateUserInput(e)&&n.props.onResetPasswordClick(e)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getUserInput",value:function(){return{confirmpassword:document.getElementById("confirmpassword").value,password:document.getElementById("password").value}}},{key:"validateUserInput",value:function(e){var t=e.confirmpassword,n=e.password;return n.trim()?t.trim()?t.trim()===n.trim()||(D("Password and Confirm password do not match","error"),!1):(D("Confirm password cannot be empty","error"),!1):(D("Password cannot be empty","error"),!1)}},{key:"render",value:function(){var e=this.props.onSigninClick;return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{cols:5},a.a.createElement(g,{className:"border-box"},a.a.createElement(R,null,a.a.createElement(x,{isLine:!0},"Please enter the new password"),a.a.createElement(x,{isLine:!0},a.a.createElement(A,{id:"password",type:"password",placeholder:"New Password",iconType:"lock"})),a.a.createElement(x,{isLine:!0},a.a.createElement(A,{id:"confirmpassword",type:"password",placeholder:"Confirm New Password",iconType:"lock"})),a.a.createElement(x,{className:"flexible",isLine:!0},a.a.createElement(w,{className:"cell no-margin",primary:!0,onClick:this.handleResetPasswordClick},"Reset")),a.a.createElement(x,{isLine:!0,onClick:e},"Or ",a.a.createElement(T,{className:"inline link"},"Sign in!"))))))}}]),t}(a.a.Component);W.defaultProps={onSigninClick:f.a.noop,onResetPasswordClick:f.a.noop};var H=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleRemember=function(e){},n.handleLogin=function(e){var t=n.props,r=t.redirectTo;(0,t.onLogin)(e,new URLSearchParams(n.props.location.search).get("redirectUrl")||r)},n.handleSignup=function(){return n.props.onRedirect(n.props.signupPath)},n.handleForgotPassword=function(){return n.props.onRedirect(n.props.forgotpasswordPath)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(q,{onLogin:this.handleLogin,onRemember:this.handleRemember,onSignupClick:this.handleSignup,onForgotPasswordClick:this.handleForgotPassword}))}}]),t}(a.a.Component),J=Object(m.g)(H);H.defaultProps={onLogin:f.a.noop,onRedirect:f.a.noop};var X="ON_LOGIN",Y="ON_SIGNUP",$="ON_FORGOT_PASSWORD",z="ON_FORGOT_PASSWORD_SUCCESS",K="ON_VERIFICATION_CODE_SUBMIT",Q="ON_RESEND_VERIFICATION_CODE",Z="ON_RESET_PASSWORD";function ee(e){return{type:z,useremail:e}}var te="REDIRECT_TO";function ne(e){return{type:te,url:e}}var re=Object(c.b)((function(e){return{}}),(function(e){return{onLogin:function(t,n){return e(function(e,t){var n=e.username,r=e.password;return{type:X,username:n,password:r,redirectUrl:t}}(t,n))},onRedirect:function(t){return e(ne(t))}}}))(J),ae=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleSignup=function(e){var t=n.props,r=t.redirectTo;(0,t.onSignup)(e,r)},n.handleSignin=function(){return n.props.onRedirect(n.props.signinPath)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(B,{onSignup:this.handleSignup,onSigninClick:this.handleSignin}))}}]),t}(a.a.Component),oe=Object(m.g)(ae);ae.defaultProps={onSignup:f.a.noop,onRedirect:f.a.noop};var ie=Object(c.b)((function(e){return{}}),(function(e){return{onSignup:function(t,n){return e(function(e,t){return Object(F.a)({type:Y},e,{redirectUrl:t})}(t,n))},onRedirect:function(t){return e(ne(t))}}}))(oe),ce=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleForgotPassword=function(e){var t=n.props,r=t.redirectTo;(0,t.onForgotPassword)(e,r)},n.handleSignin=function(){return n.props.onRedirect(n.props.signinPath)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(G,{onForgotPassword:this.handleForgotPassword,onSigninClick:this.handleSignin}))}}]),t}(a.a.Component),se=Object(m.g)(ce);ce.defaultProps={onForgotPassword:f.a.noop,onRedirect:f.a.noop};var le=Object(c.b)((function(e){return{}}),(function(e){return{onForgotPassword:function(t,n){return e(function(e,t){var n=e.useremail;return{type:$,useremail:n,redirectUrl:t}}(t,n))},onRedirect:function(t){return e(ne(t))}}}))(se),ue=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleVerificationCodeSubmit=function(e){var t=n.props,r=t.redirectTo;(0,t.onVerificationCodeSubmit)(e,r)},n.handleResendVerificationCode=function(){var e=n.props;(0,e.onResendVerificationCode)(e.emailAddress)},n.handleSignin=function(){return n.props.onRedirect(n.props.signinPath)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.emailAddress||this.handleSignin()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(M,{emailAddress:this.props.emailAddress,onResendVerificationCode:this.handleResendVerificationCode,onSubmitVerificationCode:this.handleVerificationCodeSubmit,onSigninClick:this.handleSignin}))}}]),t}(a.a.Component),de=Object(m.g)(ue);ue.defaultProps={onForgotPassword:f.a.noop,onRedirect:f.a.noop};var pe=Object(c.b)((function(e){return{emailAddress:e.userManagement.resetPasswordForUserEmail}}),(function(e){return{onResendVerificationCode:function(t){return e({type:Q,useremail:t})},onVerificationCodeSubmit:function(t,n){return e(function(e,t){return{type:K,code:e,redirectUrl:t}}(t,n))},onRedirect:function(t){return e(ne(t))}}}))(de),me=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleResetPassword=function(e){var t=n.props,r=t.redirectTo;(0,t.onResetPassword)(e,r)},n.handleSignin=function(){return n.props.onRedirect(n.props.signinPath)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(W,{onResetPasswordClick:this.handleResetPassword,onSigninClick:this.handleSignin}))}}]),t}(a.a.Component),he=Object(m.g)(me);me.defaultProps={onResetPassword:f.a.noop,onRedirect:f.a.noop};var fe=Object(c.b)(null,(function(e){return{onResetPassword:function(t,n){return e(function(e,t){return Object(F.a)({type:Z},e,{redirectUrl:t})}(t,n))},onRedirect:function(t){return e(ne(t))}}}))(he),ve=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return"Dashboard"}}]),t}(a.a.Component),be=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={currentUrl:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"redirect",value:function(){this.props.history.push(this.state.currentUrl)}},{key:"shouldRedirect",value:function(){this.props.redirectToUrl!==this.state.currentUrl&&this.setState({currentUrl:this.props.redirectToUrl},this.redirect)}},{key:"componentDidMount",value:function(){this.shouldRedirect()}},{key:"componentDidUpdate",value:function(){this.shouldRedirect()}},{key:"render",value:function(){return null}}]),t}(a.a.PureComponent),ge=Object(m.g)(be),Ee=Object(c.b)((function(e){return{redirectToUrl:e.redirect.currentURL}}))(ge),Oe=n(40),we=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={isAuthenticated:!1},n.getIsAuthenticated=function(){return!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.path,n=e.isAuthenticated,r=e.onRedirectToLogin;n||r(t)}},{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,n=e.children,r=Object(v.a)(e,["isAuthenticated","children"]);return t?a.a.createElement(m.b,r,n):null}}]),t}(a.a.Component);we.defaultProps={onRedirectToLogin:f.a.noop};var ye=Object(c.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{onRedirectToLogin:function(t){return e(ne("/login?redirectUrl=".concat(t)))}}}))(we);function je(){return a.a.createElement(Oe.a,null,a.a.createElement(m.d,null,a.a.createElement(m.b,{exact:!0,path:"/"},a.a.createElement(m.a,{to:"/dashboard"})),a.a.createElement(m.b,{exact:!0,path:"/login"},a.a.createElement(re,{redirectTo:"/dashboard",signupPath:"/signup",forgotpasswordPath:"/forgot-password"})),a.a.createElement(m.b,{exact:!0,path:"/signup"},a.a.createElement(ie,{redirectTo:"/dashboard",signinPath:"/login"})),a.a.createElement(m.b,{exact:!0,path:"/forgot-password"},a.a.createElement(le,{redirectTo:"/verification",signinPath:"/login"})),a.a.createElement(m.b,{exact:!0,path:"/verification"},a.a.createElement(pe,{redirectTo:"/reset-password",signinPath:"/login"})),a.a.createElement(m.b,{exact:!0,path:"/reset-password"},a.a.createElement(fe,{redirectTo:"/login",signinPath:"/login"})),a.a.createElement(ye,{exact:!0,path:"/dashboard"},a.a.createElement(ve,null))),a.a.createElement(Ee,null))}var ke=n(47),Ce={currentURL:"",prevURL:""};var Pe="ON_AUTHENTICATION_SUCCESS",Re={isAuthenticated:!1};var Se={resetPasswordForUserEmail:""};var Ue=Object(ke.c)({redirect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return{prevURL:e.currentURL,currentURL:t.url};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re;switch((arguments.length>1?arguments[1]:void 0).type){case Pe:return{isAuthenticated:!0};default:return e}},userManagement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return{resetPasswordForUserEmail:t.useremail};default:return e}}}),xe=n(130),Le=n(186),Ie=n(25),Ae=n.n(Ie),Te=n(23);var Ne=Ae.a.mark(Be),Fe=Ae.a.mark(Ge),Ve=Ae.a.mark(Me),_e=Ae.a.mark(We),De=Ae.a.mark(He),qe=Ae.a.mark(Je);function Be(e){var t;return Ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.username,e.password,t=e.redirectUrl,n.prev=1,n.next=4,Promise.resolve(!0);case 4:return n.next=6,Object(Te.g)({type:Pe});case 6:return n.next=8,Object(Te.g)(ne(t));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),Ne,null,[[1,10]])}function Ge(e){var t,n;return Ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.redirectUrl,n=Object(v.a)(e,["redirectUrl"]),r.prev=1,r.next=4,Promise.resolve(!0);case 4:return r.next=6,Be(Object(F.a)({},n,{redirectUrl:t}));case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.log(r.t0);case 11:case"end":return r.stop()}}),Fe,null,[[1,8]])}function Me(e){var t,n;return Ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.redirectUrl,n=e.useremail,r.prev=1,r.next=4,Promise.resolve(!0);case 4:return r.next=6,Object(Te.g)(ee(n));case 6:return D("A Verification code has been sent to ".concat(n,"."),"success"),r.next=9,Object(Te.g)(ne(t));case 9:r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),console.log(r.t0);case 14:case"end":return r.stop()}}),Ve,null,[[1,11]])}function We(e){var t;return Ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.useremail,n.prev=1,n.next=4,Promise.resolve(!0);case 4:D("Verification code resent to ".concat(t),"success"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log(n.t0);case 10:case"end":return n.stop()}}),_e,null,[[1,7]])}function He(e){var t;return Ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.code,t=e.redirectUrl,n.prev=1,n.next=4,Promise.resolve(!0);case 4:return n.next=6,Object(Te.g)(ne(t));case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),De,null,[[1,8]])}function Je(e){var t;return Ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.redirectUrl,Object(v.a)(e,["redirectUrl"]),n.prev=1,n.next=4,Promise.resolve(!0);case 4:return n.next=6,Object(Te.g)(ne(t));case 6:D("Your password has been changed successfully.","success"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),qe,null,[[1,9]])}var Xe=[Object(Te.h)(X,Be),Object(Te.h)(Y,Ge),Object(Te.h)($,Me),Object(Te.h)(Q,We),Object(Te.h)(K,He),Object(Te.h)(Z,Je)];var Ye,$e=[Object(Te.h)("REDIRECT_TO_URL",(function(e){ne(e.url)}))],ze=[].concat(Object(xe.a)(Xe),Object(xe.a)($e));var Ke=function(){var e=Object(ke.e)(Ue,Object(ke.d)(Object(ke.a)(Ye=Object(Le.a)())));return ze.map((function(e){return Ye.run(e)})),e}();var Qe=function(){return a.a.createElement(c.a,{store:Ke},a.a.createElement(je,null))};n(327),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[198,1,2]]]);
//# sourceMappingURL=main.bdb5cc04.chunk.js.map