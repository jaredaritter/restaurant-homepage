!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(e,t,n){const o=document.createElement(e),a=t[e];if("h1"===e)o.textContent=a;else if("img"===e)o.setAttribute(a[0],a[1]);else if("p"===e){for(let t=0;t<a.length-1;t++){const o=document.createElement(e);o.textContent=a[t],n.appendChild(o)}o.textContent=a[a.length-1]}else console.error("UNKNOWN PROP TYPE");n.appendChild(o)};var a=function(){const e={h1:"Awesome Restaurant",img:["src","https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"],p:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facere aliquid eaque sapiente nesciunt sunt consequatur! Molestias ex fugit, minus unde quae dolorem veniam voluptatibus neque consequatur voluptatum blanditiis perspiciatis.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maiores tempora porro voluptatum in unde eaque doloremque delectus asperiores veniam, repellendus adipisci. Doloremque explicabo voluptatum modi voluptate optio aliquid cupiditate ratione a, sequi rem molestiae laudantium architecto? Blanditiis, soluta velit."]},t=document.querySelector("#content");for(const n in e)o(n,e,t)};const i=function(e){const t=document.createElement("h1");return t.textContent=e,t},c=function(e){const t=document.createElement("p");return t.textContent=e,t},r=function(){return{header:function(e){const t=document.createElement("h1");return t.textContent=e,t},paragraph:function(e){const t=document.createElement("p");return t.textContent=e,t}}};var s=function(){const e={h1:"Contact Information",address1:"123 Awesome Restaurant Way",address2:"Somewhere Far, FL 12345",phone:"555-5555",email:"dummyEmailAddress@someEmail.com"},t=document.querySelector("#content");for(const n in e){const o=e[n];"h1"===n?t.appendChild(i(o)):t.appendChild(c(o))}const n=[];for(const t in e){const o=e[t];"h1"===t?n.push(i(o)):n.push(c(o))}n.forEach(e=>t.appendChild(e));const o=[];for(const t in e){const n=e[t];"h1"===t?o.push(r().header(n)):o.push(r().paragraph(n))}o.forEach(e=>t.appendChild(e))};var u=function(e,t,n){const o=t[e];if("h1"===e){const t=document.createElement(e);t.textContent=o,n.appendChild(t)}else if("item"===e){const e=document.createElement("div");e.classList.add("menu-items"),o.forEach(t=>{const n=document.createElement("div");n.classList.add("card");const o=document.createElement("div"),a=document.createElement("img");a.classList.add("card-img"),a.setAttribute("src",t.img),a.setAttribute("alt",t.name),o.appendChild(a);const i=document.createElement("div"),c=document.createElement("p"),r=document.createElement("p");i.classList.add("card-text"),c.textContent=t.name,r.textContent=t.price,i.appendChild(c),i.appendChild(r),n.appendChild(o),n.appendChild(i),e.appendChild(n)}),n.appendChild(e)}else console.error("UNKNOWN PROP TYPE")};var d=function(){const e={h1:"Menu",item:[{name:"Tacos al Pastor",price:8,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1200px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"},{name:"Burrito",price:9,img:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/16/0/DV2904_Korean-BBQ-Burrito_s4x3.jpg.rend.hgtvcom.826.620.suffix/1539714414867.jpeg"},{name:"Lechon Asado",price:11,img:"https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18194645/051135071-01-cuban-grilled-pork-with-mojo-recipe-main.jpg"},{name:"Quesadilla",price:7,img:"https://ifoodreal.com/wp-content/uploads/2018/05/FG-vegetarian-quesadilla.jpg"},{name:"Pollo con Mole",price:12,img:"https://pinaenlacocina.com/wp-content/uploads/2016/06/037.jpg"},{name:"Chips and Guacamole",price:5,img:"https://dinnerthendessert.com/wp-content/uploads/2015/09/Chips-and-Guacamole-Close-500x453.jpg"}]},t=document.querySelector("#content");for(const n in e)u(n,e,t)};(function(){const e=["Homepage","Menu","Contact"],t=document.querySelector("#nav");function n(e){const n=document.createElement("div");n.textContent=e,n.classList.add("nav-link"),t.appendChild(n)}for(let t=0;t<e.length;t++)n(e[t])})(),a(),function(){const e=document.querySelectorAll(".nav-link");function t(t){!function(){const e=document.querySelector("#content");for(;e.firstChild;)e.removeChild(e.lastChild)}(),function(t){e.forEach(e=>{e.classList.remove("active")}),t.target.classList.add("active")}(t),function(e){const t=e.target.textContent;"Homepage"===t?a():"Menu"===t?d():"Contact"===t&&s()}(t)}e.forEach(e=>{e.addEventListener("click",t),"Homepage"===e.textContent&&e.classList.add("active")})}()}]);