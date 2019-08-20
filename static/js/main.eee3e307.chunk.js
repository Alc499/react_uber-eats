(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(4),c=t.n(n),s=t(2),o=t.n(s),i=t(5),m=t(1),_=(t(12),function(){var e=Object(r.useState)(!1),a=Object(m.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)(!1),s=Object(m.a)(c,2),o=s[0],i=s[1];return l.a.createElement("header",{id:"up",className:"header"},l.a.createElement("div",{className:"header__wrapper"},l.a.createElement("div",{className:"header__logo-and-delivery"},l.a.createElement("a",{href:"/react_uber-eats",className:"header__logo"},l.a.createElement("img",{src:"img/logo.svg",alt:"Uber Eats"})),l.a.createElement("div",{className:"header__delivery"},o?l.a.createElement("form",{className:"header__input-wrapper",onKeyPress:function(e){return"Enter"===e.key?i(!1):null},onBlur:function(){return i(!1)}},l.a.createElement("input",{type:"text",name:"delivery-adress",autoFocus:!0,"aria-label":"choose delivery adress",className:"header__location header__location-input",placeholder:"Enter delivery address",defaultValue:"London"}),l.a.createElement("button",{type:"button",className:"header__location-clear-btn"},"Clear")):l.a.createElement("button",{type:"button",className:"header__location header__location-btn",onClick:function(){return i(!0)}},"London"),l.a.createElement("select",{name:"order-time","aria-label":"select delivery time",className:"header__delivery-time"},l.a.createElement("option",{value:"now",selected:!0},"Delivery now"),l.a.createElement("option",{value:"plan"},"Schedule for later")))),l.a.createElement("div",{className:"header__search-and-sign-in"},t?l.a.createElement("input",{type:"search",name:"restaurant-search-field",autoFocus:!0,onKeyPress:function(e){return"Enter"===e.key?n(!1):null},onBlur:function(){return n(!1)},"aria-label":"restaurant search field",className:"header__search-input",placeholder:"What are you craving?"}):l.a.createElement("button",{type:"button",className:"header__search-btn",onClick:function(){return n(!0)}},"Search"),l.a.createElement("a",{href:"/react_uber-eats",className:"header__sign-in"},"Sing in"))))}),u="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2",f=function(e){var a=e.stores;return l.a.createElement("main",{className:"main"},l.a.createElement("div",{className:"card-list"},a.map(function(e){return l.a.createElement("article",{className:"card"},l.a.createElement("a",{href:"/react_uber-eats",className:"card__link"},l.a.createElement("div",{className:"card__picture-wrapper"},l.a.createElement("img",{src:e.heroImageUrl,alt:"fast food",className:"card__picture"})),l.a.createElement("h2",{className:"card__title"},e.title),l.a.createElement("div",{className:"card__tags"},e.categories.join(" \u2022 ")),l.a.createElement("div",{className:"card__range-and-feedback"},l.a.createElement("span",{className:"card__range"},e.etaRange?e.etaRange.text:"20-30 min"),l.a.createElement("div",{className:"card__feedback"},l.a.createElement("span",null,e.feedback?e.feedback.rating:"Rate this store"),l.a.createElement("span",{className:"card__star-img"},e.feedback&&e.feedback.rating>=4.5?l.a.createElement("img",{src:"".concat(u,"/92367108b11b8ee48b6f29cb3fef2d4d.svg"),alt:"star"}):l.a.createElement("img",{src:"".concat(u,"/972e1cb487b3a5c72c30a6635596f477.svg"),alt:"star"})),l.a.createElement("span",null,e.feedback?"(".concat(e.feedback.ratingCount,")"):"")))))})))},d=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"footer__wrapper"},l.a.createElement("div",{className:"footer__apps-and-links"},l.a.createElement("div",{className:"footer__logo-and-apps"},l.a.createElement("a",{href:"/react_uber-eats"},l.a.createElement("img",{src:"https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/12c47a69e1022b581a7e823e9bd45466.svg",alt:"UberEats"})),l.a.createElement("ul",{className:"footer__apps"},l.a.createElement("li",null,l.a.createElement("a",{href:"/react_uber-eats",target:"_blank"},l.a.createElement("img",{src:"img/AppStore.png",alt:"appstore logo",className:"footer__app-logo footer__appstore-logo"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",href:"/react_uber-eats"},l.a.createElement("img",{src:"img/google-play.png",alt:"google-play logo",className:"footer__app-logo"}))))),l.a.createElement("nav",{className:"footer__additional-info-lists"},l.a.createElement("ul",{className:"footer__additional-info footer__lists"},l.a.createElement("li",null,l.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"About Uber Eats")),l.a.createElement("li",null,l.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Read our blog")),l.a.createElement("li",null,l.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Buy gift cards")),l.a.createElement("li",null,l.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Sign up to deliver")),l.a.createElement("li",null,l.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Add your restaurant"))),l.a.createElement("ul",{className:"footer__additional-info footer__lists"},l.a.createElement("li",null,l.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Get Help")),l.a.createElement("li",null,l.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Read FAQs")),l.a.createElement("li",null,l.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"View all cities")),l.a.createElement("li",{className:"footer__language"},l.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link footer__language-link"},"English"))))),l.a.createElement("div",{className:"footer__policy"},l.a.createElement("div",{className:"footer__copyright"},l.a.createElement("p",null,"\xa9 2019 Uber Technologies Inc.")),l.a.createElement("div",{className:"footer__policy-and-social-networks"},l.a.createElement("ul",{className:"footer__policy-and-terms footer__lists"},l.a.createElement("li",{className:"footer__policy-paragraph"},l.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Privacy Policy")),l.a.createElement("li",{className:"footer__policy-paragraph"},l.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Terms of Use")),l.a.createElement("li",{className:"footer__policy-paragraph"},l.a.createElement("a",{href:"/react_uber-eats",className:"footer__lists-link"},"Pricing")),l.a.createElement("li",null,l.a.createElement("a",{href:"#up",className:"up-button"},l.a.createElement("img",{src:"img/arrow.svg",alt:"up",className:"up-button__arrow"})))),l.a.createElement("ul",{className:"footer__social-networks footer__lists"},l.a.createElement("li",null,l.a.createElement("a",{href:"/react_uber-eats"},l.a.createElement("img",{src:"img/facebook.svg",alt:"link to UberEats' facebook page",className:"footer__social-networks-logo"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"/react_uber-eats"},l.a.createElement("img",{src:"img/twitter.svg",alt:"link to UberEats' twitter page",className:"footer__social-networks-logo"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"/react_uber-eats"},l.a.createElement("img",{src:"img/instagram.svg",alt:"link to UberEats' instagram page",className:"footer__social-networks-logo"}))))))))},E=function(){var e=Object(r.useState)([]),a=Object(m.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)(!1),s=Object(m.a)(c,2),u=s[0],E=s[1];return Object(r.useEffect)(Object(i.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_uber-eats/api","/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json")).then(function(e){return e.json()}).then(function(e){var a=e.data;n(a.feedItems.map(function(e){var t=e.uuid;return a.storesMap[t]}))}).finally(function(){return E(!0)});case 2:case"end":return e.stop()}},e)})),[]),l.a.createElement("div",{className:"App"},l.a.createElement(_,null),u?l.a.createElement(f,{stores:t}):l.a.createElement("div",null,"Loading..."),l.a.createElement(d,null))};c.a.render(l.a.createElement(E,null),document.getElementById("root"))},6:function(e,a,t){e.exports=t(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.eee3e307.chunk.js.map