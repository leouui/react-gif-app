(this.webpackJsonpgifapp=this.webpackJsonpgifapp||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),r=(n(17),n(18),n(2)),s=n(1),i=n(11),u=n(0),o=function(e){var t=e.setcategories,n=Object(s.useState)(""),a=Object(r.a)(n,2),c=a[0],o=a[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==c.trim().length&&t((function(e){return[c].concat(Object(i.a)(e))})),o("")},className:"w_100 d_flex search_container fx_center",children:[Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){var t=e.target.value;return o(t)},placeholder:"Busca un gif",className:"search_input maxW_100"}),Object(u.jsx)("button",{className:"button_add",children:"Buscar"})]})})},l=n(12),j=n(3),d=n.n(j),f=n(6),m=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,a,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.giphy.com/v1/gifs/search?api_key=LErINR7NeVcFm1lO0u10tYXBPKFIu2mg&q=".concat(encodeURI(t),"&limit=10 "));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,c=a.data,r=c.map((function(e){return{id:e.id,url:e.images.downsized_large.url,title:e.title}})),e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),p=n(1),b=p.useState,x=p.useEffect,g=n(7),h=n.n(g),O=function(e){var t=e.url,n=e.title;return Object(u.jsx)(h.a,{columnsCount:1,className:"gif_item",children:Object(u.jsx)("img",{className:"w_100",src:t,alt:n})})},_=function(e){var t=e.category,n=function(e){var t=b({data:[],loading:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1];return x((function(){Object(f.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,m(e);case 3:t.t1=t.sent,t.t2={data:t.t1,loading:!1},(0,t.t0)(t.t2);case 6:case"end":return t.stop()}}),t)})))()}),[e]),a}(t),a=n.data,c=n.loading;return Object(u.jsxs)("div",{className:"category_item",children:[Object(u.jsxs)("h1",{className:"title",children:[" ",t," "]}),c&&Object(u.jsx)("p",{children:"*Musica de acensor*"}),Object(u.jsx)(h.a,{columnsCountBreakPoints:{350:1,750:2,900:2},className:"container_gifs d_grid w_100 animate__animated animate__slideInDown",children:a.map((function(e){return Object(u.jsx)(O,Object(l.a)({},e),e.id)}))})]})},v=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o,{setcategories:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{className:"w_100 d_flex fx_center",children:Object(u.jsx)("div",{className:"container_categories w_page maxW_100",children:n.map((function(e){return Object(u.jsx)(_,{category:e},"".concat(e))}))})})]})},w=document.getElementById("root");c.a.render(Object(u.jsx)(v,{}),w)}},[[25,1,2]]]);
//# sourceMappingURL=main.cd11e4ab.chunk.js.map