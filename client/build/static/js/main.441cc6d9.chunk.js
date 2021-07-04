(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{74:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(16),r=a.n(s),l=a(93),d=a(94),i=a(96),o=a(97),j=a(98),h=a(10),b=a(20),u=a(21),O=a(15),m=a(24),x=a(23),v=a(89),f=a(90),p=a(91),g=a(12),N=a.n(g),y=a(13),k=a(29),D=a.n(k),S=a(43),T=function(){return function(){var e=Object(S.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/api");case 2:a=e.sent,t({type:"FETCH_DATA",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return{type:"ITEM_SELECTED",payload:e}},C=a(3),I=function(e){Object(m.a)(a,e);var t=Object(x.a)(a);function a(e){var c;return Object(b.a)(this,a),(c=t.call(this,e)).state={task:""},c.handleTaskInputChange=c.handleTaskInputChange.bind(Object(O.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(O.a)(c)),c}return Object(u.a)(a,[{key:"handleTaskInputChange",value:function(e){this.setState({task:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={body:this.state.task};N()({url:"api/save",method:"POST",data:a}).then((function(){console.log("Data has been sent to the Sever"),t.props.fetchData(),t.props.selectItem()})).catch((function(){console.log("Data  NOT sent to the Sever")})),this.setState({task:""})}},{key:"render",value:function(){return Object(C.jsx)("div",{className:"d-flex justify-content-center shadow-lg  p-3 mb-3 bg-white rounded ",children:Object(C.jsx)(v.a,{onSubmit:this.handleSubmit,className:"form-control rounded ",children:Object(C.jsx)("div",{className:"container-fluid",children:Object(C.jsx)("div",{className:"rov",children:Object(C.jsxs)("div",{className:"col",children:[Object(C.jsx)(f.a,{placeholder:"What To Do?",name:"task",type:"text",value:this.state.task,autoComplete:"off",onChange:this.handleTaskInputChange}),Object(C.jsx)("div",{className:"col ",children:Object(C.jsxs)(p.a,{type:"submit",className:" form-control  mt-3 text-center rounded",children:[Object(C.jsx)(h.e,{})," Add To List"]})})]})})})})})}}]),a}(n.a.Component),E=Object(y.b)((function(e){return{dataFromServer:e.dataFromServer}}),{fetchData:T,selectItem:w})(I),L=a(44),F=a(95),_=(a(74),a(17)),A=a(92),B=function(e){var t=Object(c.useState)(!1),a=Object(_.a)(t,2),n=a[0],s=a[1];return Object(C.jsxs)("div",{className:"p-3 mb-1 rounded ",children:[Object(C.jsxs)(p.a,{color:"outline-dark",onClick:function(){return s(!n)},style:{marginBottom:"1rem"},className:"text-center ",children:[Object(C.jsx)(h.c,{})," Task History"]}),Object(C.jsx)(A.a,{isOpen:n,children:Object(C.jsx)(l.a,{children:Object(C.jsx)(d.a,{children:e.erased})})})]})},H=a(46);a(82);var M=function(){var e=Object(c.useState)(new Date),t=Object(_.a)(e,2),a=t[0],n=t[1];return Object(C.jsx)("div",{className:"shadow-lg  p-1 mb-3 bg-white rounded",children:Object(C.jsx)(H.a,{onChange:function(e){n(e)},value:a,className:"shadow-lg  p-1 mb-3 bg-white rounded w-100"})})},P=function(e){var t=Object(c.useState)(!1),a=Object(_.a)(t,2),n=a[0],s=a[1];return Object(C.jsxs)("div",{className:" p-3 mb-1 rounded",children:[Object(C.jsxs)(p.a,{color:"outline-dark",onClick:function(){return s(!n)},style:{marginBottom:"1rem"},className:"text-center ",children:[Object(C.jsx)(h.b,{})," Calendar"]}),Object(C.jsx)(A.a,{isOpen:n,children:Object(C.jsx)(l.a,{children:Object(C.jsx)(d.a,{children:Object(C.jsx)(M,{})})})})]})},J=function(e){Object(m.a)(a,e);var t=Object(x.a)(a);function a(e){var c;return Object(b.a)(this,a),(c=t.call(this,e)).getDeletData=function(){N.a.get("/api/delete").then((function(e){c.setState({deletedList:e.data}),console.log("Deleted Data has been received")})).catch((function(){console.log(" Deleted Data  NOT  received")}))},c.state={deletedList:[]},c.handleTaskInputChange=c.handleTaskInputChange.bind(Object(O.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(O.a)(c)),c}return Object(u.a)(a,[{key:"handleTaskInputChange",value:function(e){var t=e.target,a=t.name,c="checkbox"===t.type?t.checked:t.value;this.setState(Object(L.a)({},a,c))}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"componentDidMount",value:function(){this.props.fetchData(),this.getDeletData()}},{key:"mapDelete",value:function(){return this.state.deletedList.map((function(e){return Object(C.jsx)("div",{children:Object(C.jsx)("ul",{children:Object(C.jsx)("li",{children:Object(C.jsxs)(F.a,{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:" Created"}),Object(C.jsx)("th",{children:" Task"})]})}),Object(C.jsx)("tbody",{children:Object(C.jsxs)("tr",{className:"shadow-lg  p-1 mb-1 bg-white rounded",children:[Object(C.jsx)("th",{scope:"row",className:"text-muted bg-dark text-light ",children:e.date}),Object(C.jsxs)("td",{className:" ",children:["  ",e.body," "]}),Object(C.jsxs)("td",{children:["  ",Object(C.jsx)(h.a,{className:"text-danger"})]})]})})]})})})},e._id)}))}},{key:"renderList",value:function(){var e=this;return this.props.dataFromServer.map((function(t){return Object(C.jsx)("div",{className:"border-bottom p-1 container-fluid",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:" col-lg-12  d-flex justify-content-end",children:Object(C.jsx)("form",{children:Object(C.jsxs)(p.a,{type:"submit",className:"float-right",outline:!0,color:"danger",onClick:function(){return e.props.selectItem(t)},children:["Delete ",Object(C.jsx)(h.f,{})]})})}),Object(C.jsxs)("div",{className:"col-sm-12 d-flex justify-content-start",children:[Object(C.jsx)(f.a,{addon:!0,type:"checkbox",value:t._id,className:"ml-0"}),Object(C.jsx)("p",{children:t.body},t.body)]}),Object(C.jsx)("div",{className:"col d-flex justify-content-start",children:Object(C.jsx)("p",{children:t.date})})]})},t._id)}))}},{key:"render",value:function(){return Object(C.jsx)("div",{className:"container-fluid ",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-sm-6 shadow-lg  p-1 mb-2 bg-white rounded ",children:this.renderList()}),Object(C.jsx)("div",{className:"col-sm-6",children:Object(C.jsxs)("div",{className:" shadow-lg  p-1 mb-3 rounded  ",children:[Object(C.jsx)("div",{className:"d-flex  ",children:Object(C.jsx)(B,{erased:this.mapDelete()})}),Object(C.jsx)("div",{className:" ",children:Object(C.jsx)(P,{})})]})})]})})}}]),a}(n.a.Component),W=Object(y.b)((function(e){return{dataFromServer:e.dataFromServer}}),{fetchData:T,selectItem:w})(J),q=Object(y.b)((function(e){return{selected:e.selected}}),{selectItem:w})((function(e){var t=e.selected,a={delete:t};return N()({url:"api/delete",method:"POST",data:a}).then((function(){console.log("Data has been sent to the Sever")})).catch((function(){console.log("Delete Data  NOT sent to the Sever")})),N()({url:"api/save",method:"POST",data:a}).then((function(){console.log("Data has been sent to the Sever")})).catch((function(){console.log("Delete Data  NOT sent to the Sever")})),t?Object(C.jsx)("div",{className:""}):Object(C.jsx)("div",{children:" "})}));var z=function(){return Object(C.jsx)("div",{className:"d-flex justify-content-center container-fluid w-100",children:Object(C.jsx)("div",{className:"row  sm-w-50  mt-5 ",children:Object(C.jsx)(l.a,{className:"col-sm-12 col-md-12  w-100 ",children:Object(C.jsxs)(d.a,{children:[Object(C.jsxs)(i.a,{tag:"h5",className:" rounded text-center",children:[Object(C.jsx)(h.d,{className:"text-danger"})," TO DO LIST"]}),Object(C.jsx)(o.a,{tag:"h6",className:"mb-2 text-muted"}),Object(C.jsx)(j.a,{className:" "}),Object(C.jsx)(E,{}),Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-sm-12 ",children:Object(C.jsx)(W,{})}),Object(C.jsx)("div",{className:"col mt-4",children:Object(C.jsx)(q,{})})]})]})})})})},G=(a(87),a(18)),K=Object(G.b)({dataFromServer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA":return t.payload;default:return e}},selected:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"ITEM_SELECTED"===t.type?t.payload:e}}),Q=a(45),R=Object(G.c)(K,Object(G.a)(Q.a));r.a.render(Object(C.jsx)(y.a,{store:R,children:Object(C.jsx)(z,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.441cc6d9.chunk.js.map