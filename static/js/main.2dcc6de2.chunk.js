(this.webpackJsonpfacerecognition2=this.webpackJsonpfacerecognition2||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},386:function(e,t,n){},387:function(e,t,n){"use strict";n.r(t);var s=n(9),a=n.n(s),i=n(55),c=n.n(i),o=(n(106),n(26)),r=n(27),l=n(29),u=n(28),h=(n(107),n(2)),b=function(e){var t=e.onRouteChange;return!0===e.issignin?Object(h.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(h.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})}):Object(h.jsx)("div",{children:Object(h.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(h.jsx)("p",{onClick:function(){return t("signup")},className:"f3 link dim black underline pa3 pointer",children:"Register"}),Object(h.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign in"})]})})},d=n(100),p=n.n(d),m=(n(109),n.p+"static/media/lion.cf4c7f97.png"),j=function(){return Object(h.jsx)("div",{className:"ma4 mt0",children:Object(h.jsx)(p.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150},children:Object(h.jsx)("div",{className:"Tilt-inner",children:Object(h.jsx)("img",{alt:"logo",src:m})})})})},g=(n(110),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("p",{className:"f3 tc",children:"This is a face recognition app"}),Object(h.jsx)("div",{className:"center",children:Object(h.jsxs)("div",{className:"pa4 br3 shadow-5 center form",children:[Object(h.jsx)("input",{onChange:t,className:"f4 pa2 center w-70",type:"text"}),Object(h.jsx)("button",{onClick:n,className:"center pa2 w-30 grow f4 ph3 pv2 dib white bg-blue pointer",children:"Detect"})]})})]})}),f=function(e){var t=e.name,n=e.entries;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"f3 white center ",children:"Hi ".concat(t,", your current rank is....")}),Object(h.jsx)("div",{className:"white f2 center",children:n})]})},x=(n(111),function(e){var t=e.imageUrl,n=e.box;return Object(h.jsx)("div",{className:"center ma",children:Object(h.jsxs)("div",{className:"absolute mt2",children:[Object(h.jsx)("img",{id:"inputImage",alt:"",src:t,width:"500px",height:"auto"}),Object(h.jsx)("div",{className:"bounding-box",style:{top:n.toprow,bottom:n.bottomrow,left:n.leftcol,right:n.rightcol}})]})})}),O=(n(112),n(113),n(101)),v=n.n(O),w=(n(386),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onsigninemail=function(e){s.setState({signinemail:e.target.value})},s.onsigninpassword=function(e){s.setState({signinpassword:e.target.value})},s.onsigninsubmit=function(){fetch("https://quiet-thicket-49484.herokuapp.com/signin",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:s.state.signinemail,password:s.state.signinpassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(s.props.loaduser(e),s.props.onRouteChange("home"))}))},s.state={signinemail:"",signinpassword:""},s}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(h.jsx)("div",{children:Object(h.jsx)("main",{className:"pa4 black-80 center",children:Object(h.jsxs)("div",{className:"measure center style br3 shadow-5",style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[Object(h.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(h.jsx)("legend",{className:"f3 fw6 ph0 mh0 ",children:"Sign In"}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(h.jsx)("input",{className:"pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",onChange:this.onsigninemail})]}),Object(h.jsxs)("div",{className:"mv3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{className:"b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",onChange:this.onsigninpassword})]})]}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{onClick:this.onsigninsubmit,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(h.jsx)("div",{className:"lh-copy mt3 ",style:{cursor:"pointer"},children:Object(h.jsx)("p",{onClick:function(){return e("signup")},href:"0",className:"f6 link dim black db",children:"Sign up"})})]})})})}}]),n}(a.a.Component)),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onnamechange=function(e){s.setState({name:e.target.value})},s.onemailchange=function(e){s.setState({email:e.target.value})},s.onpasswordchange=function(e){s.setState({password:e.target.value})},s.onsubmitsignin=function(){fetch("https://quiet-thicket-49484.herokuapp.com/register",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:s.state.email,password:s.state.password,name:s.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(s.props.loaduser(e),s.props.onRouteChange("home"))}))},s.state={email:"",password:"",name:""},s}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("main",{className:"pa4 black-80 center",children:Object(h.jsxs)("div",{className:"measure center style br3 shadow-5",style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[Object(h.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(h.jsx)("legend",{className:"f3 fw6 ph0 mh0 ",children:"Register"}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Name"}),Object(h.jsx)("input",{className:"pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",onChange:this.onnamechange})]}),Object(h.jsxs)("div",{className:"mt3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(h.jsx)("input",{className:"pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",onChange:this.onemailchange})]}),Object(h.jsxs)("div",{className:"mv3",children:[Object(h.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{className:"b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",onChange:this.onpasswordchange})]})]}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{onClick:this.onsubmitsignin,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign up"})})]})})})}}]),n}(a.a.Component),y={particles:{number:{value:80,density:{enable:!0,value_area:800}}}},k={input:"",imageUrl:"",box:{},route:"signin",issignin:!1,user:{name:"",email:"",entries:0,id:"",joined:""}},C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputImage"),s=Number(n.width),a=Number(n.height);return{leftcol:t.left_col*s,toprow:t.top_row*a,rightcol:s-t.right_col*s,bottomrow:a-t.bottom_row*a}},e.displayFaceBox=function(t){e.setState({box:t}),console.log(t)},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://quiet-thicket-49484.herokuapp.com/imageurl",{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("https://quiet-thicket-49484.herokuapp.com/image",{method:"put",headers:{"content-type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(k):"home"===t&&e.setState({issignin:!0}),e.setState({route:t})},e.loaduser=function(t){e.setState({user:{name:t.name,email:t.email,entries:t.entries,id:t.id,joined:t.joined}})},e.state=k,e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.issignin,n=e.route,s=e.imageUrl,a=e.box;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(v.a,{className:"particles",params:y}),Object(h.jsx)(b,{onRouteChange:this.onRouteChange,issignin:t}),Object(h.jsx)(j,{}),"home"===n?Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{name:this.state.user.name,entries:this.state.user.entries}),Object(h.jsx)(g,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(h.jsx)(x,{imageUrl:s,box:a})]}):"signin"===n?Object(h.jsx)(w,{onRouteChange:this.onRouteChange,loaduser:this.loaduser}):Object(h.jsx)(N,{onRouteChange:this.onRouteChange,loaduser:this.loaduser})]})}}]),n}(s.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,388)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),S()}},[[387,1,2]]]);
//# sourceMappingURL=main.2dcc6de2.chunk.js.map