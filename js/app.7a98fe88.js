(function(t){function e(e){for(var s,n,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=r[0]))}return t}var s={},a={app:0},o=[];function n(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=s,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav mr-auto"},[r("li",{staticClass:"nav-item mr-4"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),r("li",{staticClass:"nav-item mr-4"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),r("li",{staticClass:"nav-item mr-4"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Register")])],1),r("li",{staticClass:"nav-item mr-4"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Login")])],1),r("li",{staticClass:"nav-item mr-4"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/products"}},[t._v("Products")])],1)])])]),r("div",{staticClass:"container"},[r("router-view")],1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[s("img",{staticClass:"w-50",attrs:{src:r("cf05"),alt:"Logo"}})])}],n=r("2877"),i={},c=Object(n["a"])(i,a,o,!1,null,null,null),l=c.exports,u=r("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",[t._v("Hallo World")])])}],m={name:"Home",components:{}},v=m,f=Object(n["a"])(v,p,d,!1,null,null,null),g=f.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("This is an about page")])])}],_={},C=Object(n["a"])(_,h,b,!1,null,null,null),y=C.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-center"},[r("div",{staticClass:"col-6"},[r("h1",[t._v("Register an Account")]),this.message?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" "+t._s(this.message)+" ")]):t._e(),r("form",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Email address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),r("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),r("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.registerUser()}}},[t._v(" Submit ")])])])])},x=[],P=r("bc3a"),k={name:"Register",data:function(){return{user:{name:"",email:"",password:""},message:""}},methods:{registerUser:function(){var t=this;P.post("https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/users/register",this.user).then((function(e){200===e.status&&(t.message="You have been registered successfully.")})).catch((function(t){console.log(t)}))}}},$=k,U=Object(n["a"])($,w,x,!1,null,null,null),j=U.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-center"},[r("div",{staticClass:"col-6"},[r("h1",[t._v("Login into your Account")]),this.message?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" "+t._s(this.message)+" ")]):t._e(),r("form",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),r("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.loginUser()}}},[t._v(" Submit ")])])])])},O=[],N=r("bc3a"),S={name:"Login",data:function(){return{user:{email:"",password:""},message:"",userJWT:""}},methods:{loginUser:function(){var t=this;N.post("https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/users/login",this.user).then((function(e){console.log(e),200===e.status&&(t.message="You have successfully logged in.",t.userJWT=e.data)})).catch((function(t){console.log(t)}))}}},T=S,A=Object(n["a"])(T,E,O,!1,null,null,null),D=A.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("h1",{staticClass:"text-center my-5"},[t._v("Our Products")]),this.message?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" "+t._s(this.message)+" ")]):t._e(),t._m(0),r("div",{staticClass:"row row-cols-4"},t._l(t.products,(function(e){return r("div",{key:e.id,staticClass:"col mb-4"},[r("div",{staticClass:"card"},[r("img",{staticClass:"card-img-top",attrs:{src:e.imageUrl,alt:e.title}}),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),r("p",{staticClass:"card-text"},[t._v(" "+t._s(e.description)+" ")])]),r("div",{staticClass:"card-footer"},[r("a",{staticClass:"btn btn-secondary btn-sm mr-4",attrs:{href:"/product/"+e._id}},[t._v("EDIT")]),r("a",{staticClass:"btn btn-danger btn-sm",on:{click:function(r){return t.deleteProduct(e._id)}}},[t._v("DELETE")])])])])})),0)])},I=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("a",{staticClass:"btn btn-dark mb-4",attrs:{href:"/product/add"}},[t._v("Add Product")])])}],R=r("bc3a"),H={name:"Products",data:function(){return{products:[],message:""}},methods:{getProducts:function(){var t=this;R.get("https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/products").then((function(e){t.products=e.data})).catch((function(t){console.log(t)}))},deleteProduct:function(t){var e=this;R.delete("https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/products/".concat(t)).then((function(t){e.getProducts(),e.message=t.data.message})).catch((function(t){return console.log(t)}))}},mounted:function(){this.getProducts()}},J=H,M=Object(n["a"])(J,L,I,!1,null,null,null),W=M.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-center"},[r("div",{staticClass:"col-6"},[r("h1",{staticClass:"text-center"},[t._v("Add a Product")]),this.message?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" "+t._s(this.message)+" ")]):t._e(),r("form",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"title"}},[t._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.title,expression:"product.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.product.title},on:{input:function(e){e.target.composing||t.$set(t.product,"title",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Description")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"price"}},[t._v("Price")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"imageUrl"}},[t._v("Image URL")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.imageUrl,expression:"product.imageUrl"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.product.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.product,"imageUrl",e.target.value)}}})]),r("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.addProduct()}}},[t._v(" Submit ")])])])])},q=[],z=(r("a4d3"),r("e01a"),r("bc3a")),B={name:"AddProduct",data:function(){return{product:{title:"",description:"",price:"",imageUrl:""},message:""}},methods:{addProduct:function(){var t=this;z.post("https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/products",this.product).then((function(e){200===e.status&&(t.product.title="",t.product.description="",t.product.price="",t.product.imageUrl="",t.message="Product has been added successfully.")})).catch((function(t){return console.log(t)}))}}},F=B,G=Object(n["a"])(F,Y,q,!1,null,null,null),K=G.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-center"},[r("div",{staticClass:"col-6"},[r("h1",{staticClass:"text-center"},[t._v("Edit the Product")]),this.message?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" "+t._s(this.message)+" ")]):t._e(),r("form",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"title"}},[t._v("Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.title,expression:"product.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.product.title},on:{input:function(e){e.target.composing||t.$set(t.product,"title",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Description")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"price"}},[t._v("Price")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"imageUrl"}},[t._v("Image URL")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.imageUrl,expression:"product.imageUrl"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.product.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.product,"imageUrl",e.target.value)}}})]),r("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.updateProduct()}}},[t._v(" Submit ")])])])])},V=[],X=r("bc3a"),Z={name:"EditProduct",data:function(){return{product:{title:"",description:"",price:"",imageUrl:""},message:"",productId:""}},methods:{updateProduct:function(){var t=this;X.put("https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/products/".concat(this.productId),this.product).then((function(e){t.message=e.data.message})).catch((function(t){return console.log(t)}))}},mounted:function(){var t=this;this.productId=this.$route.params.id,X.get("https://cors-anywhere.herokuapp.com/https://team-260-group-a.herokuapp.com/api/products/".concat(this.productId)).then((function(e){t.product.title=e.data.title,t.product.description=e.data.description,t.product.price=e.data.price,t.product.imageUrl=e.data.imageUrl})).catch((function(t){return console.log(t)}))}},tt=Z,et=Object(n["a"])(tt,Q,V,!1,null,null,null),rt=et.exports;s["a"].use(u["a"]);var st=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:y},{path:"/register",name:"Register",component:j},{path:"/login",name:"Login",component:D},{path:"/products",name:"Products",component:W},{path:"/product/:id",name:"Edit Product",component:rt},{path:"/product/add",name:"Add Product",component:K}],at=new u["a"]({mode:"history",base:"/",routes:st}),ot=at;s["a"].config.productionTip=!1,new s["a"]({router:ot,render:function(t){return t(l)}}).$mount("#app")},cf05:function(t,e,r){t.exports=r.p+"img/logo.8f32858a.png"}});
//# sourceMappingURL=app.7a98fe88.js.map