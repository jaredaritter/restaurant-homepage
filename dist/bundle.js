!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],s=n.base?a[0]+n.base:a[0],d=t[s]||0,u="".concat(s," ").concat(d);t[s]=d+1;var l=c(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:u,updater:g(p,n),references:1}),o.push(u)}return o}function d(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,l=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function g(e,n){var t,o,r;if(n.singleton){var a=h++;t=m||(m=d(n)),o=p.bind(null,t,a,!1),r=p.bind(null,t,a,!0)}else t=d(n),o=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);i[r].references--}for(var a=s(e,n),d=0;d<t.length;d++){var u=c(t[d]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=a}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"html,\nbody {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  background-color: blanchedalmond;\n}\n\n#nav {\n  display: flex;\n  margin-left: 30px;\n}\n\n.nav-link {\n  width: 100px;\n  height: 40px;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 2em;\n  border-top: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.active {\n  background-color: burlywood;\n  border-width: 2px;\n}\n\n#content {\n  background-color: burlywood;\n  padding: 10px 10px 30px 10px;\n  margin: 0 10px;\n  border-radius: 20px;\n  box-shadow: 3px 3px 3px grey, -1px -1px 1px grey;\n}\n\n.homepage-img {\n  width: 95%;\n  margin-left: 2.5%;\n  height: auto;\n}\n\n.menu-items {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.card {\n  width: 300px;\n  height: 350px;\n  background-color: wheat;\n  margin-bottom: 20px;\n  border-radius: 10px;\n}\n\n.card-img {\n  width: 300px;\n  height: 300px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.card-text {\n  display: flex;\n  justify-content: space-around;\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";t.r(n);var o=function(){const e=["Homepage","Menu","Contact"],n=document.querySelector("#nav");function t(e){const t=document.createElement("div");t.textContent=e,t.classList.add("nav-link"),n.appendChild(t)}for(let n=0;n<e.length;n++)t(e[n])};var r=function(e,n,t){const o=document.createElement(e),r=n[e];if("h1"===e)o.textContent=r;else if("img"===e)o.src=r[0],o.classList.add(r[1]);else if("p"===e){for(let n=0;n<r.length-1;n++){const o=document.createElement(e);o.textContent=r[n],t.appendChild(o)}o.textContent=r[r.length-1]}else console.error("UNKNOWN PROP TYPE");t.appendChild(o)},a=t.p+"3d70661a2b7a98b5d4d443fbf3aa3348.jpg";var i=function(){const e={h1:"YOLO TACO",img:[a,"homepage-img"],p:["You want tacos? We got tacos. We have the best tacos you have ever put in your face. Don't believe us? Just ask Dave. *Listens intently*. Yeah Dave just yelled from the back that we definitely have the best tacos that you have ever put in your face. Sorry if you didn't hear him, he's pretty far away.","We also have other items on the menu for your enjoyment. We have the staples like burritos and quesadillas, along with some of the classics like lechon asado and pollo con mole. We're going all over South and Central America here with a quick jaunt through the islands as well because it's all delicious. Come join us and put some food in your face!"]},n=document.querySelector("#content");for(const t in e)r(t,e,n)};const c=function(e){const n=document.createElement("h1");return n.textContent=e,n},s=function(e){const n=document.createElement("p");return n.textContent=e,n},d=function(){return{header:function(e){const n=document.createElement("h1");return n.textContent=e,n},paragraph:function(e){const n=document.createElement("p");return n.textContent=e,n}}};var u=function(){const e={h1:"Contact Information",address1:"123 Awesome Restaurant Way",address2:"Somewhere Far, FL 12345",phone:"555-5555",email:"dummyEmailAddress@someEmail.com"},n=document.querySelector("#content");for(const t in e){const o=e[t];"h1"===t?n.appendChild(c(o)):n.appendChild(s(o))}const t=[];for(const n in e){const o=e[n];"h1"===n?t.push(c(o)):t.push(s(o))}t.forEach(e=>n.appendChild(e));const o=[];for(const n in e){const t=e[n];"h1"===n?o.push(d().header(t)):o.push(d().paragraph(t))}o.forEach(e=>n.appendChild(e))};var l=function(e,n,t){const o=n[e];if("h1"===e){const n=document.createElement(e);n.textContent=o,t.appendChild(n)}else if("item"===e){const e=document.createElement("div");e.classList.add("menu-items"),o.forEach(n=>{const t=document.createElement("div");t.classList.add("card");const o=document.createElement("div"),r=document.createElement("img");r.classList.add("card-img"),r.setAttribute("src",n.img),r.setAttribute("alt",n.name),o.appendChild(r);const a=document.createElement("div"),i=document.createElement("p"),c=document.createElement("p");a.classList.add("card-text"),i.textContent=n.name,c.textContent=n.price,a.appendChild(i),a.appendChild(c),t.appendChild(o),t.appendChild(a),e.appendChild(t)}),t.appendChild(e)}else console.error("UNKNOWN PROP TYPE")};var p=function(){const e={h1:"Menu",item:[{name:"Tacos al Pastor",price:8,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"},{name:"Burrito",price:9,img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/16/0/DV2904_Korean-BBQ-Burrito_s4x3.jpg.rend.hgtvcom.826.620.suffix/1539714414867.jpeg"},{name:"Lechon Asado",price:11,img:"https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18194645/051135071-01-cuban-grilled-pork-with-mojo-recipe-main.jpg"},{name:"Quesadilla",price:7,img:"https://ifoodreal.com/wp-content/uploads/2018/05/FG-vegetarian-quesadilla.jpg"},{name:"Pollo con Mole",price:12,img:"https://pinaenlacocina.com/wp-content/uploads/2016/06/037.jpg"},{name:"Chips and Guacamole",price:5,img:"https://dinnerthendessert.com/wp-content/uploads/2015/09/Chips-and-Guacamole-Close-500x453.jpg"}]},n=document.querySelector("#content");for(const t in e)l(t,e,n)};t(0);o(),i(),function(){const e=document.querySelectorAll(".nav-link");function n(n){!function(){const e=document.querySelector("#content");for(;e.firstChild;)e.removeChild(e.lastChild)}(),function(n){e.forEach(e=>{e.classList.remove("active")}),n.target.classList.add("active")}(n),function(e){const n=e.target.textContent;"Homepage"===n?i():"Menu"===n?p():"Contact"===n&&u()}(n)}e.forEach(e=>{e.addEventListener("click",n),"Homepage"===e.textContent&&e.classList.add("active")})}()}]);