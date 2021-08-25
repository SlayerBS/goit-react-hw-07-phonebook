(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{22:function(t,e,n){t.exports={input:"ContactForm_input__g67pU",btn:"ContactForm_btn__2lspR"}},25:function(t,e,n){t.exports={item:"ContactList_item__3L4yW",btn:"ContactList_btn__C9utl"}},26:function(t,e,n){t.exports={title:"Section_title__1cdoV",container:"Section_container__1sSa2"}},40:function(t,e,n){t.exports={Container:"Container_Container__1beqG"}},41:function(t,e,n){t.exports={input:"Filter_input__3XrIl"}},43:function(t,e,n){t.exports={Loader:"Loader_Loader__3CqQ2"}},93:function(t,e,n){},97:function(t,e,n){"use strict";n.r(e);var c,r,a,o=n(0),u=n.n(o),i=n(19),s=n.n(i),b=n(44),l=n(10),j=n(20),d=n(5),f=n(12),O=n(39),h=n.n(O),p=n(4),m=n(6),v=Object(d.b)("contacts/fetchContactsRequest"),x=Object(d.b)("contacts/fetchContactsSuccess"),C=Object(d.b)("contacts/fetchContactsError"),g=Object(d.b)("contacts/addContactRequest"),_=Object(d.b)("contacts/addContactSuccess"),y=Object(d.b)("contacts/addContactError"),k=Object(d.b)("contacts/deleteContactRequest"),w=Object(d.b)("contacts/deleteContactSuccess"),S=Object(d.b)("contacts/deleteContactError"),L=Object(d.b)("contacts/changeFilter"),N=Object(d.b)("contacts/clearError"),q=[],A=!1,F=null,D=Object(d.c)(q,(c={},Object(p.a)(c,x,(function(t,e){return e.payload})),Object(p.a)(c,_,(function(t,e){var n=e.payload;return[].concat(Object(j.a)(t),[n])})),Object(p.a)(c,w,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),E=Object(d.c)("",Object(p.a)({},L,(function(t,e){return e.payload}))),z=function(t,e){return e.payload},R=Object(d.c)(A,(r={},Object(p.a)(r,v,(function(){return!0})),Object(p.a)(r,x,(function(){return!1})),Object(p.a)(r,C,(function(){return!1})),Object(p.a)(r,g,(function(){return!0})),Object(p.a)(r,_,(function(){return!1})),Object(p.a)(r,y,(function(){return!1})),Object(p.a)(r,k,(function(){return!0})),Object(p.a)(r,w,(function(){return!1})),Object(p.a)(r,S,(function(){return!1})),r)),M=Object(d.c)(F,(a={},Object(p.a)(a,C,z),Object(p.a)(a,y,z),Object(p.a)(a,S,z),Object(p.a)(a,N,(function(){return null})),a)),J=Object(m.b)({items:D,filter:E,loading:R,error:M}),T=[].concat(Object(j.a)(Object(d.d)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),[h.a]),Z=Object(d.a)({reducer:{contacts:J},middleware:T,devTools:!1}),B=n(13),I=n(14),P=n(16),U=n(15),G=n(11),Q=n.n(G),V=n(21),W=n(18),X=n.n(W);X.a.defaults.baseURL="http://localhost:3010";var $={fetchContacts:function(){return X.a.get("/contacts")},addContact:function(t){return console.log(t),X.a.post("/contacts",t)},deleteContact:function(t){return X.a.delete("/contacts/".concat(t))}},H=n(25),K=n.n(H),Y=n(1),tt=function(t){var e=t.contacts,n=t.onDelete;return Object(Y.jsx)("ul",{children:e.map((function(t){return Object(Y.jsxs)("li",{className:K.a.item,children:[Object(Y.jsxs)("span",{children:[t.name,":",t.number]}),Object(Y.jsx)("button",{onClick:function(){return n(t.id)},className:K.a.btn,children:"Delete"})]},t.id)}))})},et=function(t){return t.contacts.items},nt=function(t){return t.contacts.filter},ct=function(t){return t.contacts.loading},rt=et,at=nt,ot=function(t){return t.contacts.error},ut=function(t){var e=et(t),n=nt(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},it=Object(l.b)((function(t){return{contacts:ut(t)}}),(function(t){return{onDelete:function(e){return t(function(t){return function(){var e=Object(V.a)(Q.a.mark((function e(n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(k()),e.prev=1,e.next=4,$.deleteContact(t);case 4:n(w(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(S(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))(tt),st=n(40),bt=n.n(st),lt=function(t){var e=t.children;return Object(Y.jsxs)("div",{className:bt.a.Container,children:[e," "]})},jt=n(41),dt=n.n(jt),ft=Object(l.b)((function(t){return{value:at(t)}}),(function(t){return{onChange:function(e){return t(L(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("h3",{children:"Find contacts by name"}),Object(Y.jsx)("input",{type:"text",value:e,onChange:n,name:"filter",title:"",required:!0,className:dt.a.input})]})})),Ot=n(22),ht=n.n(Ot),pt=function(t){Object(P.a)(n,t);var e=Object(U.a)(n);function n(){var t;Object(B.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:"",error:!1,errorMessage:null},t.handleChange=function(e){var n=e.currentTarget,c=n.name,r=n.value;t.setState(Object(p.a)({},c,r)),console.log(Object(p.a)({},c,r))},t.handleSubmit=function(e){if(e.preventDefault(),t.state.name&&""!==t.state.number){var n=t.state,c=n.name,r=n.number;return t.props.onSubmit(c,r),void t.reset()}alert("Please, input name and number")},t.reset=function(){t.setState({name:"",number:""})},t}return Object(I.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(Y.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(Y.jsxs)("label",{children:["Name",Object(Y.jsx)("input",{type:"text",value:e,onChange:this.handleChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:ht.a.input})]}),Object(Y.jsxs)("label",{children:["Number",Object(Y.jsx)("input",{type:"tel",value:n,onChange:this.handleChange,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:ht.a.input})]}),Object(Y.jsx)("button",{type:"submit",className:ht.a.btn,children:"Add contact"})]})}}]),n}(o.Component),mt=Object(l.b)((function(t){return{contacts:rt(t)}}),(function(t){return{onSubmit:function(e,n){return t(function(t,e){return function(){var n=Object(V.a)(Q.a.mark((function n(c){var r,a,o;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={name:t,number:e},console.log(r),c(g()),n.prev=3,n.next=6,$.addContact(r);case 6:a=n.sent,o=a.data,c(_(o)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),c(y(n.t0));case 14:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(t){return n.apply(this,arguments)}}()}(e,n))}}}))(pt),vt=n(26),xt=n.n(vt),Ct=function(t){var e=t.title,n=t.children;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)("h2",{className:xt.a.title,children:[" ",e]}),Object(Y.jsxs)("div",{className:xt.a.container,children:[n," "]})]})},gt=n(42),_t=n.n(gt),yt=n(43),kt=n.n(yt),wt=(n(92),function(){return Object(Y.jsxs)("div",{className:kt.a.Loader,children:[Object(Y.jsx)(_t.a,{type:"ThreeDots",color:"#3f51b5",height:80,width:80}),";"]})}),St=function(t){Object(P.a)(n,t);var e=Object(U.a)(n);function n(){return Object(B.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"render",value:function(){return Object(Y.jsx)("p",{children:this.props.message})}}]),n}(o.Component),Lt=Object(l.b)((function(t){return{message:ot(t)}}),(function(t){return{clearError:function(){return t(N())}}}))(St),Nt=function(t){Object(P.a)(n,t);var e=Object(U.a)(n);function n(){return Object(B.a)(this,n),e.apply(this,arguments)}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.error,n=t.isLoading;return Object(Y.jsxs)(lt,{children:[e&&Object(Y.jsx)(Lt,{}),Object(Y.jsx)(Ct,{title:"Phonebook",children:Object(Y.jsx)(mt,{})}),Object(Y.jsxs)(Ct,{title:"Contacts",children:[Object(Y.jsx)(ft,{}),Object(Y.jsx)(it,{})]}),n&&Object(Y.jsx)(wt,{})]})}}]),n}(o.Component),qt=Object(l.b)((function(t){return{contacts:rt(t),isLoading:ct(t),error:ot(t)}}),(function(t){return{fetchContacts:function(){return t(function(){var t=Object(V.a)(Q.a.mark((function t(e){var n,c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(v()),t.prev=1,t.next=4,$.fetchContacts();case 4:n=t.sent,c=n.data,e(x(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(C(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())},clearFilter:function(){return t(L(""))}}}))(Nt);n(93);s.a.render(Object(Y.jsx)(u.a.StrictMode,{children:Object(Y.jsx)(l.a,{store:Z,children:Object(Y.jsx)(b.a,{children:Object(Y.jsx)(qt,{})})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.9f336fa9.chunk.js.map