(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(31)},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(5),c=t.n(l),s=t(4),o=t(11),i=t.n(o),m=t(14),u=t(2),_=t(15),f=t.n(_),d=(t(30),t(16)),p=t(6);function E(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?E(t,!0).forEach(function(a){Object(d.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var h=function(e){return e.stores},g=function(e){return e.filterValue},v=Object(p.b)(function(e,a){switch(a.type){case"setStores":return b({},e,{stores:a.stores});case"filterStores":return b({},e,{filterValue:a.value});default:return e}},{stores:[],filterValue:""}),y=t(7),N=t.n(y),k=Object(s.b)(function(e){return{filterValue:g(e)}},function(e){return{search:function(a){return e(function(e){return{type:"filterStores",value:e}}(a))}}})(function(e){var a=e.search,t=e.filterValue,l=Object(r.useState)(!1),c=Object(u.a)(l,2),s=c[0],o=c[1],i=Object(r.useState)(!1),m=Object(u.a)(i,2),_=m[0],f=m[1],d=n.a.createRef();return Object(r.useEffect)(function(){s&&d.current.focus()}),n.a.createElement("header",{id:"up",className:"header"},n.a.createElement("div",{className:"header__wrapper"},n.a.createElement("div",{className:"header__logo-and-delivery"},n.a.createElement("a",{href:"/react_uber-eats",className:"header__logo"},n.a.createElement("img",{src:"img/logo.svg",alt:"Uber Eats"})),n.a.createElement("div",{className:"header__delivery"},_?n.a.createElement("form",{className:"header__input-wrapper",onKeyPress:function(e){return"Enter"===e.key?f(!1):null},onBlur:function(){return f(!1)}},n.a.createElement("input",{type:"text",name:"delivery-adress",autoFocus:!0,"aria-label":"choose delivery adress",className:"header__location header__location-input",placeholder:"Enter delivery address",defaultValue:"London"}),n.a.createElement("button",{type:"button",className:"header__location-clear-btn"},"Clear")):n.a.createElement("button",{type:"button",className:"header__location header__location-btn",onClick:function(){return f(!0)}},"London"),n.a.createElement("select",{name:"order-time","aria-label":"select delivery time",className:"header__delivery-time",defaultValue:"Delivery now"},n.a.createElement("option",{value:"now"},"Delivery now"),n.a.createElement("option",{value:"plan"},"Schedule for later")))),n.a.createElement("div",{className:"header__search-and-sign-in"},n.a.createElement("div",{className:"header__search"},n.a.createElement("div",{className:N()("header__search-form",{invisibleItem:!s}),tabIndex:"-1"},n.a.createElement("input",{type:"text",name:"restaurant-search-field",value:t,ref:d,onKeyPress:function(e){return"Enter"===e.key?o(!1):null},onChange:function(e){return a(e.target.value)},"aria-label":"restaurant search field",className:"header__search-input",placeholder:"What are you craving?"}),n.a.createElement("button",{type:"button",onClick:function(){d.current.focus(),a("")},className:N()("header__location-clear-btn","header__search-clear-btn",{invisibleItem:!t})},"Clear"),n.a.createElement("button",{type:"button",className:"header__search-close-btn",onClick:function(){o(!s),a("")}},n.a.createElement("img",{src:"img/closingCross.svg",alt:"CLose"}))),n.a.createElement("button",{type:"button",className:N()("header__search-btn",{invisibleItem:s}),onClick:function(){return o(!0)}},"Search")),n.a.createElement("a",{href:"/react_uber-eats",className:"header__sign-in"},"Sing in"))))}),w=function(){var e=Object(r.useState)(!1),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)(!1),s=Object(u.a)(c,2),o=s[0],i=s[1];return n.a.createElement("div",{className:"main__search-and-delivery"},n.a.createElement("div",{className:"main__delivery"},n.a.createElement("select",{name:"order-time","aria-label":"select delivery time",className:"header__delivery-time main__delivery-time",defaultValue:"Delivery now"},n.a.createElement("option",{value:"now"},"Delivery now"),n.a.createElement("option",{value:"plan"},"Schedule for later")),o?n.a.createElement("form",{className:"header__input-wrapper main__input-wrapper",onKeyPress:function(e){return"Enter"===e.key?i(!1):null},onBlur:function(){return i(!1)}},n.a.createElement("input",{type:"text",name:"delivery-adress",autoFocus:!0,"aria-label":"choose delivery adress",className:"header__location header__location-input",placeholder:"Enter delivery address",defaultValue:"London"}),n.a.createElement("button",{type:"button",className:"header__location-clear-btn"},"Clear")):n.a.createElement("button",{type:"button",className:"header__location header__location-btn main__location-btn",onClick:function(){return i(!0)}},"London")),n.a.createElement("div",{className:"main__search"},t?n.a.createElement("input",{type:"search",name:"restaurant-search-field",autoFocus:!0,onKeyPress:function(e){return"Enter"===e.key?l(!1):null},onBlur:function(){return l(!1)},"aria-label":"restaurant search field",className:"header__search-input main__search-input",placeholder:"What are you craving?"}):n.a.createElement("button",{type:"button",className:"header__search-btn",onClick:function(){return l(!0)}},"Search")))},O="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2",j=function(e){var a=e.stores;return n.a.createElement("div",{className:"card-list"},a.map(function(e){return n.a.createElement("article",{key:e.uuid,className:"card"},n.a.createElement("a",{href:"/react_uber-eats",className:"card__link"},n.a.createElement("div",{className:"card__picture-wrapper"},n.a.createElement("img",{src:e.heroImageUrl,alt:"fast food",className:"card__picture"})),n.a.createElement("h2",{className:"card__title"},e.title),n.a.createElement("div",{className:"card__tags"},e.categories.join(" \u2022 ")),n.a.createElement("div",{className:"card__range-and-feedback"},n.a.createElement("span",{className:"card__range"},e.etaRange?e.etaRange.text:"20-30 min"),n.a.createElement("div",{className:"card__feedback"},n.a.createElement("span",null,e.feedback?e.feedback.rating:"Rate this store"),n.a.createElement("span",{className:"card__star-img"},e.feedback&&e.feedback.rating>=4.5?n.a.createElement("img",{src:"".concat(O,"/92367108b11b8ee48b6f29cb3fef2d4d.svg"),alt:"star"}):n.a.createElement("img",{src:"".concat(O,"/972e1cb487b3a5c72c30a6635596f477.svg"),alt:"star"})),n.a.createElement("span",null,e.feedback?"(".concat(e.feedback.ratingCount,")"):"")))))}))},S=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"footer__wrapper"},n.a.createElement("div",{className:"footer__apps-and-links"},n.a.createElement("div",{className:"footer__logo-and-apps"},n.a.createElement("a",{href:"/react_uber-eats",className:"footer__logo"},n.a.createElement("img",{src:"https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/12c47a69e1022b581a7e823e9bd45466.svg",alt:"UberEats"})),n.a.createElement("ul",{className:"footer__apps"},n.a.createElement("li",null,n.a.createElement("a",{href:"/react_uber-eats",target:"_blank"},n.a.createElement("img",{src:"img/AppStore.png",alt:"appstore logo",className:"footer__app-logo footer__appstore-logo"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",href:"/react_uber-eats"},n.a.createElement("img",{src:"img/google-play.png",alt:"google-play logo",className:"footer__app-logo"}))))),n.a.createElement("nav",{className:"footer__additional-info-lists"},n.a.createElement("ul",{className:"footer__additional-info footer__lists"},n.a.createElement("li",null,n.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"About Uber Eats")),n.a.createElement("li",null,n.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Read our blog")),n.a.createElement("li",null,n.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Buy gift cards")),n.a.createElement("li",null,n.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Sign up to deliver")),n.a.createElement("li",null,n.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Add your restaurant"))),n.a.createElement("ul",{className:"footer__additional-info footer__lists"},n.a.createElement("li",null,n.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Get Help")),n.a.createElement("li",null,n.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Read FAQs")),n.a.createElement("li",null,n.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"View all cities")),n.a.createElement("li",{className:"footer__language"},n.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link footer__language-link"},"English"))))),n.a.createElement("div",{className:"footer__policy"},n.a.createElement("div",{className:"footer__copyright"},n.a.createElement("p",null,"\xa9 2019 Uber Technologies Inc.")),n.a.createElement("div",{className:"footer__policy-and-social-networks"},n.a.createElement("ul",{className:"footer__policy-and-terms footer__lists"},n.a.createElement("li",{className:"footer__policy-paragraph"},n.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Privacy Policy")),n.a.createElement("li",{className:"footer__policy-paragraph"},n.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Terms of Use")),n.a.createElement("li",{className:"footer__policy-paragraph"},n.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Pricing"))),n.a.createElement("ul",{className:"footer__social-networks footer__lists"},n.a.createElement("li",null,n.a.createElement("a",{href:"/react_uber-eats"},n.a.createElement("img",{src:"img/facebook.svg",alt:"link to UberEats' facebook page",className:"footer__social-networks-logo"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"/react_uber-eats"},n.a.createElement("img",{src:"img/twitter.svg",alt:"link to UberEats' twitter page",className:"footer__social-networks-logo"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"/react_uber-eats"},n.a.createElement("img",{src:"img/instagram.svg",alt:"link to UberEats' instagram page",className:"footer__social-networks-logo"}))))))))},C="https://mate-academy.github.io/react_uber-eats/api",P=Object(s.b)(function(e){return{stores:h(e),filterValue:g(e)}},function(e){return{loadStores:function(a){return e(function(e){return{type:"setStores",stores:e}}(a))}}})(function(e){var a=e.loadStores,t=e.stores,l=e.filterValue,c=Object(r.useState)(!1),s=Object(u.a)(c,2),o=s[0],_=s[1];Object(r.useEffect)(function(){function e(){return(e=Object(m.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(C,"/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json")).then(function(e){return e.json()}).then(function(e){var t=e.data;a(t.feedItems.map(function(e){var a=e.uuid;return t.storesMap[a]}))}).finally(function(){return _(!0)});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var d=""===l?t:t.filter(function(e){return(e.title+e.categories).toLowerCase().includes(l.trim())});return n.a.createElement("div",{className:"App"},n.a.createElement(k,null),n.a.createElement("main",{className:"main"},n.a.createElement(w,null),o?n.a.createElement(j,{stores:d}):n.a.createElement("div",null,"Loading...")),n.a.createElement(S,null),n.a.createElement(f.a,{StopPosition:0,ShowAtPosition:150,EasingType:"easeOutCubic",AnimationDuration:500,ContainerClassName:"ScrollUpButton__Container",TransitionClassName:"ScrollUpButton__Toggled",style:{width:"80px",height:"80px",backgroundColor:"#59BD5A",outline:"none"}}))});c.a.render(n.a.createElement(s.a,{store:v},n.a.createElement(P,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.fbc8eba4.chunk.js.map