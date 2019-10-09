(this["webpackJsonpredux-crash-course"]=this["webpackJsonpredux-crash-course"]||[]).push([[0],{31:function(e,t,a){e.exports=a(32)},32:function(e,t,a){a(62)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=a(5),l=a(29),i=a(3),u=a(30),m=a(8);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={item:null,items:[]},f=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"FETCH_POSTS":return b({},e,{items:n});case"CREATE_NEW_POST":return b({},e,{items:[n].concat(Object(u.a)(e.items))});default:return e}}}),h=[l.a],v=Object(i.d)(f,{},i.a.apply(void 0,h)),y=a(9),E=a(10),O=a(12),j=a(11),g=a(13),w=a(6),N=a.n(w),P=a(17),k=a(18),x=a.n(k),S=(a(60),function(e){function t(){return Object(y.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchPosts)()}},{key:"render",value:function(){var e=this.props.posts.map((function(e){return r.a.createElement("div",{className:"post",key:e.id},r.a.createElement("h5",{className:"text-capitalize"},e.title),r.a.createElement("p",{className:"text-justify"},e.body))}));return r.a.createElement("div",null,r.a.createElement("h3",null,"Posts"),r.a.createElement("hr",{className:"mb-4"}),e)}}]),t}(n.Component)),C={fetchPosts:function(){return function(){var e=Object(P.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://jsonplaceholder.typicode.com/posts");case 2:a=e.sent,t({type:"FETCH_POSTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},T=Object(s.b)((function(e){return{posts:e.posts.items}}),C)(S),D=function(e){function t(){var e;return Object(y.a)(this,t),(e=Object(O.a)(this,Object(j.a)(t).call(this))).onChange=function(t){return e.setState(Object(m.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,r=a.body;(0,e.props.createNewPost)({title:n,body:r})},e.state={title:"",body:""},e}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New Post"),r.a.createElement("hr",{className:"mb-4"}),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("small",{className:"text-secondary mb-2"},"Title"),r.a.createElement("input",{type:"text",className:"form-control rounded-0",name:"title",value:t,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("small",{className:"text-secondary mb-2"},"Body"),r.a.createElement("textarea",{className:"form-control rounded-0",rows:"5",name:"body",value:a,onChange:this.onChange})),r.a.createElement("button",{type:"submit",className:"btn btn-dark btn-block rounded-0 mt-4 py-2"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("span",{className:"font-weight-bold"},"SUBMIT"),r.a.createElement("i",{className:"material-icons"},"play_arrow")))))}}]),t}(n.Component),_={createNewPost:function(e){return function(){var t=Object(P.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.post("https://jsonplaceholder.typicode.com/posts",e);case 2:n=t.sent,a({type:"CREATE_NEW_POST",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},B=Object(s.b)(null,_)(D),W=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark flex-center mb-5"},r.a.createElement("a",{href:"/",className:"navbar-brand font-weight-bold"},"Dummy Blog"))};a(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement(s.a,{store:v},r.a.createElement("div",{className:"container mt-5"},r.a.createElement(W,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement(T,null)),r.a.createElement("div",{className:"col-4"},r.a.createElement(B,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.c70cfe70.chunk.js.map