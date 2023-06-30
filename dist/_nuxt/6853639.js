(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6,7],{298:function(t,r,e){"use strict";e.r(r);var n={components:{Button:e(131).default},data:function(){return{}}},l=e(8),component=Object(l.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"w-full md:w-1/2"},[e("div",{staticClass:"\n      leading-loose\n      max-w-xl\n      m-4\n      p-7\n      bg-secondary-light\n      dark:bg-secondary-dark\n      rounded-xl\n      shadow-xl\n      text-left\n    "},[e("p",{staticClass:"\n        font-general-medium\n        text-primary-dark\n        dark:text-primary-light\n        text-2xl\n        mb-8\n      "},[t._v("\n      Contact Form\n    ")]),t._v(" "),e("form",{staticClass:"font-general-regular space-y-7",on:{submit:function(t){t.preventDefault}}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"mt-6"},[e("Button",{staticClass:"\n            px-4\n            py-2.5\n            text-white\n            tracking-wider\n            bg-indigo-500\n            hover:bg-indigo-600\n            focus:ring-1 focus:ring-indigo-900\n            rounded-lg\n            duration-500\n          ",attrs:{title:"Send Message",type:"submit","aria-label":"Send Message"}})],1)])])])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{},[e("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"name"}},[t._v("Full Name")]),t._v(" "),e("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border border-gray-300\n            dark:border-primary-dark\n            border-opacity-50\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n          ",attrs:{id:"name",name:"name",type:"text",required:"",placeholder:"Your Name","aria-label":"Name"}})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"mt-6"},[e("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border border-gray-300\n            dark:border-primary-dark\n            border-opacity-50\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n          ",attrs:{id:"email",name:"email",type:"text",required:"",placeholder:"Your Email","aria-label":"Email"}})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"mt-6"},[e("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"subject"}},[t._v("Subject")]),t._v(" "),e("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border border-gray-300\n            dark:border-primary-dark\n            border-opacity-50\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n          ",attrs:{id:"subject",name:"subject",type:"text",required:"",placeholder:"Subject","aria-label":"Subject"}})])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"mt-6"},[e("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),e("textarea",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border border-gray-300\n            dark:border-primary-dark\n            border-opacity-50\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-ternary-dark\n            rounded-md\n            shadow-sm\n            text-md\n          ",attrs:{id:"message",name:"message",cols:"14",rows:"6","aria-label":"Message"}})])}],!1,null,"5944b966",null);r.default=component.exports},299:function(t,r,e){"use strict";e.r(r);var n={props:["contacts"],data:function(){return{}}},l=e(8),component=Object(l.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"w-full md:w-1/2"},[e("div",{staticClass:"text-left max-w-xl px-6"},[e("h2",{staticClass:"\n        font-general-medium\n        text-2xl text-primary-dark\n        dark:text-primary-light\n        mt-8\n        mb-8\n      "},[t._v("\n      Contact details\n    ")]),t._v(" "),e("ul",{staticClass:"font-general-regular"},t._l(t.contacts,(function(r){return e("li",{key:r.id,staticClass:"flex"},[e("i",{staticClass:"w-5 text-gray-500 dark:text-gray-400 mr-4",attrs:{"data-feather":r.icon}}),t._v(" "),e("a",{staticClass:"text-lg mb-4 text-ternary-dark dark:text-ternary-light",class:"mail"===r.icon||"phone"===r.icon?"hover:underline cursor-pointer":"",attrs:{href:"#","aria-label":"Website and Phone"}},[t._v("\n          "+t._s(r.name)+"\n        ")])])})),0)])])}),[],!1,null,"a0ed7182",null);r.default=component.exports},304:function(t,r,e){"use strict";e.r(r);e(19),e(35);var n=e(30),l=e.n(n),d={scrollToTop:!0,data:function(){return{contacts:[{id:1,name:"New Baneshowr, Kathmandu, Nepal",icon:"map-pin"},{id:2,name:"devkotamanohar@gmail.com",icon:"mail"},{id:3,name:"9861446608",icon:"phone"}]}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()}},o=e(8),component=Object(o.a)(d,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"\n    container\n    mx-auto\n    flex flex-col-reverse\n    md:flex-row md:py-10 md:mt-20\n  "},[e("ContactForm"),t._v(" "),e("ContactDetails",{attrs:{contacts:t.contacts}})],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{ContactForm:e(298).default,ContactDetails:e(299).default})}}]);