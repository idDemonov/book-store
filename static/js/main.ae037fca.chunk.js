(this["webpackJsonpbook-store"]=this["webpackJsonpbook-store"]||[]).push([[0],{153:function(e,t,a){e.exports=a(200)},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a(48),l=a(26),i=a(20),u=a(66),m=a(30),s=function(e,t){return e.map((function(e){return e.id===t?Object(m.a)({},e,{count:e.count+1}):e}))},d=function(e,t){return e.map((function(e){return e.id===t&&e.count>1?Object(m.a)({},e,{count:e.count-1}):e}))},E=function(e,t){return e.includes(t)?e.filter((function(e){return e.id!==t.id})):[].concat(Object(u.a)(e),[t])},b={error:!1,loading:!0},p=[],k={status:!1,book:null},f=Object(i.c)({cardBooks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_BOOKS_IN_STATE":var a=t.books.map((function(e){return Object(m.a)({},e,{count:1})}));return[].concat(Object(u.a)(e),Object(u.a)(a));default:return e}},basketBooks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_BOOK_IN_BASKET":case"DELETE_BOOK_BASKET":return E(e,t.book);case"INCREMENT_BOOK_BASKET":return s(e,t.id);case"DECREMENT_BOOK_BASKET":return d(e,t.id);default:return e}},bootStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_IS_FETCHING":return Object(m.a)({},e,{loading:t.status});case"ERROR":return Object(m.a)({},e,{error:!0});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MODAL":return{status:!0,book:t.book};case"CLOSE_MODAL":return{status:!1,book:null};default:return e}}}),g=a(130),O=Object(i.d)(f,Object(i.a)(g.a)),B=a(40),v=a(228),h=a(6),y=a(229),S=a(131),j=a.n(S),N=Object(h.a)({badge:{right:-3,top:13,border:"2px solid white",padding:"0 4px",backgroundColor:"#009999",color:"white"}})(v.a),x=Object(l.b)((function(e){return{basketBooks:e.basketBooks}}))((function(e){var t=e.basketBooks.length;return r.a.createElement(y.a,null,r.a.createElement(N,{badgeContent:t},r.a.createElement(j.a,null)))})),_=a(230),T=a(119),I=Object(T.a)({header:{backgroundColor:"white",padding:"0 20px"},link:{alignSelf:"center",color:"rgba(0,0,0,0.87)",textDecoration:"none"}}),C=function(){var e=I();return r.a.createElement("header",{className:e.header},r.a.createElement(_.a,{container:!0,justify:"space-between"},r.a.createElement(c.b,{className:e.link,to:"/"},r.a.createElement("h2",null,"Book Store")),r.a.createElement(c.b,{className:e.link,to:"/basket/"},r.a.createElement(x,null))))},A=a(235),K=a(237),M=a(240),w=a(239),L=a(238),D=a(88),R=Object(T.a)({root:{maxWidth:"345px",margin:"15px 10px"},title:{display:"flex",justifyContent:"space-between"},media:{height:"140px"},price:{fontWeight:700},actionArea:{display:"-webkit-box",WebkitLineClamp:4,WebkitBoxOrient:"vertical",overflow:"hidden"},loading:{display:"flex",width:"345px",height:"330px",margin:"15px 10px",justifyContent:"center",alignItems:"center"}}),z=a(234),G=a(85),P=a.n(G),F=a(134),J=a.n(F),U=a(82),W=a(84),H=a.n(W),X={gtmId:"GTM-N7F55M2",dataLayer:{event:"event-to-ga",eventCategory:"category_value",eventAction:"action_value"}},q=a(106),Y=a.n(q);a(178);Y.a.initializeApp({apiKey:"AIzaSyDpmz8fJuH6KsSXUz3P7kyplLoJ3nefXhY",authDomain:"bookstore-16aaf.firebaseapp.com",databaseURL:"https://bookstore-16aaf.firebaseio.com",projectId:"bookstore-16aaf",storageBucket:"bookstore-16aaf.appspot.com",messagingSenderId:"868626355609",appId:"1:868626355609:web:e5fc29ec2df263aaed2f08",measurementId:"G-XT5CH4D35J"});var Q=Y.a.firestore(),V=function(e){return{type:"PUT_BOOK_IN_BASKET",book:e}},Z=function(e){return{type:"DELETE_BOOK_BASKET",book:e}},$=function(e){return{type:"INCREMENT_BOOK_BASKET",id:e}},ee=function(e){return{type:"DECREMENT_BOOK_BASKET",id:e}},te=function(e){return{type:"OPEN_MODAL",book:e}},ae=function(){return{type:"CLOSE_MODAL"}},ne=function(e){return{type:"TOGGLE_IS_FETCHING",status:e}},re=function(e){return{type:"PUT_BOOKS_IN_STATE",books:e}},oe=Object(l.b)((function(e){return{basketBooks:e.basketBooks}}),(function(e){return{actions:Object(i.b)({putBookInBasket:V},e)}}))((function(e){var t=e.book,a=e.basketBooks,n=e.actions,o=Object(U.useSnackbar)().enqueueSnackbar,c=n.putBookInBasket,l=a.some((function(e){return e.id===t.id}));return r.a.createElement(z.a,{variant:"outlined",color:"primary",onClick:function(){o(l?"\u041a\u043d\u0438\u0433\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b":"\u041a\u043d\u0438\u0433\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443",{variant:l?"warning":"success"}),c(t),H.a.initialize(X)},endIcon:l?null:r.a.createElement(P.a,null)},l?r.a.createElement(J.a,null):"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")})),ce=a(236),le=function(e){var t=e.book,a=e.bootStatus,n=e.openModal,o=R();return a.loading?r.a.createElement(A.a,{className:o.loading},r.a.createElement(ce.a,{size:100})):r.a.createElement(A.a,{className:o.root},r.a.createElement(K.a,{onClick:function(){return n(t)}},r.a.createElement(L.a,{className:o.media,image:t.urlImage}),r.a.createElement(w.a,null,r.a.createElement("div",{className:o.title},r.a.createElement(D.a,{variant:"h6"},t.name),r.a.createElement(D.a,{variant:"subtitle1",color:"primary",className:o.price},t.price,"\u20bd")),r.a.createElement(D.a,{className:o.actionArea,variant:"body2",color:"textSecondary"},t.description))),r.a.createElement(M.a,null,r.a.createElement(oe,{book:t})))},ie=Object(T.a)({root:{backgroundColor:"#f2f3f4"}}),ue=Object(l.b)((function(e){return{cardBooks:e.cardBooks,bootStatus:e.bootStatus}}),(function(e){return Object(i.b)({openModal:te},e)}))((function(e){var t=e.cardBooks,a=e.bootStatus,n=e.openModal,o=ie();return r.a.createElement(_.a,{className:o.root,container:!0,justify:"center",component:"main"},t.map((function(e){return r.a.createElement(le,{key:e.id,book:e,openModal:n,bootStatus:a})})))})),me=a(251),se=Object(T.a)({modal:{display:"flex",justifyContent:"center",alignItems:"center"},modalCard:{backgroundColor:"white",padding:"10px",display:"flex",maxWidth:"1100px"},footer:{display:"flex",justifyContent:"flex-end"},bookImg:{maxWidth:"250px",paddingRight:"10px"},text:{textAlign:"end"}}),de=a(252),Ee=a(242),be=a(241),pe=function(e){var t=e.book,a=se();return r.a.createElement(be.a,{component:"div"},r.a.createElement(de.a,{divider:!0,button:!0},r.a.createElement(Ee.a,{primary:"\u0410\u0432\u0442\u043e\u0440"}),r.a.createElement(Ee.a,{className:a.text,primary:t.author})),r.a.createElement(de.a,{button:!0,divider:!0},r.a.createElement(Ee.a,{primary:"\u0426\u0435\u043d\u0430"}),r.a.createElement(Ee.a,{className:a.text,primary:"".concat(t.price,"\u20bd")})),r.a.createElement(de.a,{button:!0},r.a.createElement(Ee.a,{primary:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"}),r.a.createElement(Ee.a,{className:a.text,primary:"".concat(t.star," \u0438\u0437 5")})))},ke=function(e){var t=e.modal,a=e.closeModal,n=se(),o=t.status,c=t.book;return r.a.createElement(me.a,{className:n.modal,onClose:a,open:o},r.a.createElement("div",{className:n.modalCard},r.a.createElement("div",null,r.a.createElement("img",{className:n.bookImg,src:c&&c.urlImage,alt:"\u041a\u043d\u0438\u0433\u0430"})),r.a.createElement("div",null,r.a.createElement(D.a,{gutterBottom:!0,variant:"h5",component:"h2"},c&&c.name),r.a.createElement(D.a,{variant:"body2",color:"textSecondary",component:"p"},c&&c.description),r.a.createElement(pe,{book:c}),r.a.createElement("div",{className:n.footer},r.a.createElement(oe,{book:c})))))},fe=Object(l.b)((function(e){return{modal:e.modal}}),(function(e){return Object(i.b)({closeModal:ae},e)}))((function(e){var t=e.closeModal,a=e.modal;return r.a.createElement(U.SnackbarProvider,null,r.a.createElement(ue,null),r.a.createElement(ke,{modal:a,closeModal:t}))})),ge=a(141),Oe=a(243),Be=a(244),ve=a(137),he=a.n(ve),ye=a(138),Se=a.n(ye),je=a(74),Ne=a(245),xe=a(246),_e=a(247),Te=a(248),Ie=function(e){var t=e.data,a=e.open;return r.a.createElement(Oe.a,null,r.a.createElement(Be.a,{style:{paddingBottom:0,paddingTop:0},colSpan:5},r.a.createElement(je.a,{in:a,timeout:"auto",unmountOnExit:!0},r.a.createElement(Ne.a,{margin:2},r.a.createElement(xe.a,{size:"small"},r.a.createElement(_e.a,null,r.a.createElement(Oe.a,null,r.a.createElement(Be.a,{align:"left"},"\u0410\u0432\u0442\u043e\u0440"),r.a.createElement(Be.a,{align:"right"},"\u041e\u0442\u0437\u044b\u0432\u044b"),r.a.createElement(Be.a,{align:"right"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),r.a.createElement(Be.a,{align:"right"},"\u0426\u0435\u043d\u0430 \u043a\u043d\u0438\u0433\u0438"),r.a.createElement(Be.a,{align:"right"},"\u0418\u0442\u043e\u0433"))),r.a.createElement(Te.a,null,r.a.createElement(Oe.a,null,r.a.createElement(Be.a,{align:"left"},t.author),r.a.createElement(Be.a,{align:"right"},t.star,"\u2605"),r.a.createElement(Be.a,{align:"right"},t.count),r.a.createElement(Be.a,{align:"right"},t.price,"\u20bd"),r.a.createElement(Be.a,{align:"right"},t.count*t.price,"\u20bd"))))))))},Ce=a(135),Ae=a.n(Ce),Ke=a(136),Me=a.n(Ke),we=function(e){var t=e.addBook,a=e.removeBook,n=e.deleteBook;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{color:"primary",onClick:t},r.a.createElement(P.a,null)),r.a.createElement(y.a,{onClick:a},r.a.createElement(Ae.a,null)),r.a.createElement(y.a,{onClick:n,style:{color:"red"}},r.a.createElement(Me.a,null)))},Le=Object(T.a)({root:{"& > *":{borderBottom:"unset"}}}),De=function(e){var t=e.book,a=e.actions,o=a.addBookBasket,c=a.removeBookBasket,l=a.deleteBookBasket,i=Object(n.useState)(!1),u=Object(ge.a)(i,2),m=u[0],s=u[1],d=Le();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe.a,{className:d.root},r.a.createElement(Be.a,null,r.a.createElement(y.a,{size:"small",onClick:function(){return s(!m)}},m?r.a.createElement(he.a,null):r.a.createElement(Se.a,null))),r.a.createElement(Be.a,{scope:"row"},t.name),r.a.createElement(Be.a,{align:"center"},t.count),r.a.createElement(Be.a,{align:"center"},t.count*t.price,"\u20bd"),r.a.createElement(Be.a,{align:"right"},r.a.createElement(we,{deleteBook:function(){return l(t)},addBook:function(){return o(t.id)},removeBook:function(){return c(t.id)}}))),r.a.createElement(Ie,{open:m,data:t}))},Re=a(249),ze=a(143),Ge=function(e){var t=e.basketBooks,a=e.actions;return r.a.createElement(Re.a,{component:ze.a},r.a.createElement(xe.a,null,r.a.createElement(_e.a,null,r.a.createElement(Oe.a,null,r.a.createElement(Be.a,null),r.a.createElement(Be.a,null,"\u041a\u043d\u0438\u0433\u0430"),r.a.createElement(Be.a,{align:"center"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),r.a.createElement(Be.a,{align:"center"},"\u0418\u0442\u043e\u0433 \u0437\u0430 \u043a\u043d\u0438\u0433\u0443"),r.a.createElement(Be.a,null))),r.a.createElement(Te.a,null,t.map((function(e){return r.a.createElement(De,{key:e.id,book:e,actions:a})})))))},Pe=a(140),Fe=a.n(Pe),Je=a(139),Ue=a.n(Je)()({root:{marginTop:30},paper:{padding:15}}),We=function(e){var t=e.sum,a=Ue();return r.a.createElement(_.a,{container:!0,className:a.root,justify:"center"},r.a.createElement(ze.a,{className:a.paper,elevation:8},r.a.createElement(D.a,{align:"center",variant:"h6",gutterBottom:!0},"\u0418\u0442\u043e\u0433\u043e\u0432\u0430\u044f \u0446\u0435\u043d\u0430"),r.a.createElement(D.a,{color:"primary",align:"center",variant:"h5",gutterBottom:!0},t),r.a.createElement(z.a,{variant:"contained",size:"large",startIcon:r.a.createElement(Fe.a,null)},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c")))},He=Object(l.b)((function(e){var t,a=e.basketBooks;return{basketBooks:a,totalSum:(t=a,t.reduce((function(e,t){return e+t.price*t.count}),0))}}),(function(e){return{actions:Object(i.b)({addBookBasket:$,removeBookBasket:ee,deleteBookBasket:Z},e)}}))((function(e){var t=e.basketBooks,a=e.totalSum,n=e.actions;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge,{actions:n,totalSum:a,basketBooks:t}),r.a.createElement(We,{sum:a}))})),Xe=a(250),qe=function(){return r.a.createElement(Xe.a,null,r.a.createElement(C,null),r.a.createElement(B.c,null,r.a.createElement(B.a,{path:"/",exact:!0,component:fe}),r.a.createElement(B.a,{path:"/basket",component:He})))};H.a.initialize({gtmId:"GTM-N7F55M2"}),Object(o.render)(r.a.createElement(l.a,{store:O},r.a.createElement(c.a,{basename:"/book-store"},r.a.createElement(qe,null))),document.getElementById("root")),O.dispatch((function(e){e(ne(!0));var t=localStorage.getItem("books");null!=t?(e(ne(!1)),e(re(JSON.parse(t)))):Q.collection("books").get().then((function(e){return e.docs.map((function(e){return Object(m.a)({id:e.id},e.data())}))})).catch((function(e){return console.log(e)})).then((function(t){localStorage.setItem("books",JSON.stringify(t)),e(ne(!1)),e(re(t))})).catch((function(t){return e({type:"ERROR",error:t})}))}))}},[[153,1,2]]]);
//# sourceMappingURL=main.ae037fca.chunk.js.map