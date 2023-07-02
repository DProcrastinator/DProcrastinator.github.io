(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(126).concat([function(n,t,e){"use strict";e.r(t);e(19),e(35);var r=e(30),o=e.n(r),l={props:["showModal","modal","categories"],components:{Button:e(131).default},data:function(){return{}},mounted:function(){o.a.replace()},methods:{}},f=(e(280),e(8)),component=Object(f.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:n.modal,expression:"modal"}],staticClass:"font-general-regular fixed inset-0 z-30"},[e("div",{directives:[{name:"show",rawName:"v-show",value:n.modal,expression:"modal"}],staticClass:"\n        bg-filter bg-black bg-opacity-50\n        fixed\n        inset-0\n        w-full\n        h-full\n        z-20\n      ",on:{click:function(t){return n.showModal()}}}),n._v(" "),e("main",{staticClass:"flex flex-col items-center justify-center h-full w-full"},[e("transition",{attrs:{name:"fade-up-down"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:n.modal,expression:"modal"}],staticClass:"modal-wrapper flex items-center z-30"},[e("div",{staticClass:"\n              modal\n              max-w-md\n              mx-5\n              xl:max-w-xl\n              lg:max-w-xl\n              md:max-w-xl\n              bg-secondary-light\n              dark:bg-primary-dark\n              max-h-screen\n              shadow-lg\n              flex-row\n              rounded-lg\n              relative\n            "},[e("div",{staticClass:"\n                modal-header\n                flex\n                justify-between\n                gap-10\n                p-5\n                border-b border-ternary-light\n                dark:border-ternary-dark\n              "},[e("h5",{staticClass:"text-primary-dark dark:text-primary-light text-xl"},[n._v("\n                What project are you looking for?\n              ")]),n._v(" "),e("button",{staticClass:"px-4 text-primary-dark dark:text-primary-light",on:{click:function(t){return n.showModal()}}},[e("i",{staticClass:"w-8 sm:w-12",attrs:{"data-feather":"x"}})])]),n._v(" "),e("div",{staticClass:"modal-body p-5 w-full h-full"},[e("form",{staticClass:"max-w-xl m-4 text-left",on:{submit:function(n){n.preventDefault}}},[e("div",{staticClass:"mt-0"},[e("input",{staticClass:"\n                      w-full\n                      px-5\n                      py-2\n                      border-1 border-gray-200\n                      dark:border-secondary-dark\n                      rounded-md\n                      text-md\n                      bg-secondary-light\n                      dark:bg-ternary-dark\n                      text-primary-dark\n                      dark:text-ternary-light\n                    ",attrs:{id:"name",name:"name",type:"text",required:"",placeholder:"Name","aria-label":"Name"}})]),n._v(" "),e("div",{staticClass:"mt-6"},[e("input",{staticClass:"\n                      w-full\n                      px-5\n                      py-2\n                      border-1 border-gray-200\n                      dark:border-secondary-dark\n                      rounded-md\n                      text-md\n                      bg-secondary-light\n                      dark:bg-ternary-dark\n                      text-primary-dark\n                      dark:text-ternary-light\n                    ",attrs:{id:"email",name:"email",type:"text",required:"",placeholder:"Email","aria-label":"Email"}})]),n._v(" "),e("div",{staticClass:"mt-6"},[e("select",{staticClass:"\n                      w-full\n                      px-5\n                      py-2\n                      border-1 border-gray-200\n                      dark:border-secondary-dark\n                      rounded-md\n                      text-md\n                      bg-secondary-light\n                      dark:bg-ternary-dark\n                      text-primary-dark\n                      dark:text-ternary-light\n                    ",attrs:{id:"subject",name:"subject",type:"text",required:"","aria-label":"Project Category"}},n._l(n.categories,(function(t){return e("option",{key:t.id,domProps:{value:t.value}},[n._v("\n                      "+n._s(t.name)+"\n                    ")])})),0)]),n._v(" "),e("div",{staticClass:"mt-6"},[e("textarea",{staticClass:"\n                      w-full\n                      px-5\n                      py-2\n                      border-1 border-gray-200\n                      dark:border-secondary-dark\n                      rounded-md\n                      text-md\n                      bg-secondary-light\n                      dark:bg-ternary-dark\n                      text-primary-dark\n                      dark:text-ternary-light\n                    ",attrs:{id:"message",name:"message",cols:"14",rows:"6","aria-label":"Details",placeholder:"Project description"}})]),n._v(" "),e("div",{staticClass:"mt-6 pb-4 sm:pb-1"},[e("Button",{staticClass:"\n                      px-4\n                      sm:px-6\n                      py-2\n                      sm:py-2.5\n                      text-white\n                      bg-indigo-500\n                      hover:bg-indigo-600\n                      rounded-md\n                      focus:ring-1 focus:ring-indigo-900\n                      duration-500\n                    ",attrs:{title:"Send Request",type:"submit","aria-label":"Submit Request"}})],1)])]),n._v(" "),e("div",{staticClass:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"},[e("Button",{staticClass:"\n                  px-4\n                  sm:px-6\n                  py-2\n                  bg-gray-600\n                  text-primary-light\n                  hover:bg-ternary-dark\n                  dark:bg-gray-200\n                  dark:text-secondary-dark\n                  dark:hover:bg-primary-light\n                  rounded-md\n                  focus:ring-1 focus:ring-indigo-900\n                  duration-500\n                ",attrs:{title:"Close","aria-label":"Close Hire Me Modal"},on:{click:function(t){return n.showModal()}}})],1)])])])],1)])])}),[],!1,null,null,null);t.default=component.exports},function(n,t,e){"use strict";e.r(t);e(19),e(35);var r=e(30),o=e.n(r),l={components:{},data:function(){return{userScrollPosition:0}},computed:{isScrolled:function(){return this.userScrollPosition>100}},mounted:function(){window.addEventListener("scroll",this.updateScrollPosition),o.a.replace()},updated:function(){o.a.replace()},beforeDestroy:function(){window.removeEventListener("scroll",this.updateScrollPosition)},methods:{updateScrollPosition:function(){this.userScrollPosition=window.scrollY},backToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},f=e(8),component=Object(f.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:n.isScrolled,expression:"isScrolled"}],staticClass:"\n      transition\n      duration-500\n      transform\n      hover:scale-110\n      rounded-full\n      cursor-pointer\n      flex\n      p-2\n      bg-indigo-500\n      hover:bg-indigo-600\n      text-white\n      items-center\n      hover:shadow-sm\n      border-none\n      ring-none\n      outline-none\n    ",on:{click:n.backToTop}},[e("i",{attrs:{"data-feather":"chevron-up"}})])])}),[],!1,null,"53feed4f",null);t.default=component.exports},,,,function(n,t,e){"use strict";e.r(t);var r={props:["title"],data:function(){return{}}},o=e(8),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("button",[n._v(n._s(n.title))])}),[],!1,null,"03a3a93b",null);t.default=component.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(n,t,e){var content=e(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(52).default)("56ab6fff",content,!0,{sourceMap:!1})},function(n,t,e){var content=e(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(52).default)("ebba9364",content,!0,{sourceMap:!1})},function(n,t,e){var content=e(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(52).default)("48e617d8",content,!0,{sourceMap:!1})},,,,,,,function(n,t,e){"use strict";e(19),e(35);var r=e(30),o=e.n(r),l=e(177),f=e(179),c=e(127),d={data:function(){return{}},mounted:function(){o.a.replace()},components:{AppFooter:f.default,BackToTop:c.default,AppHeader:l.default}},m=(e(284),e(8)),component=Object(m.a)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col"},[e("AppHeader"),n._v(" "),e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("Nuxt")],1),n._v(" "),e("AppFooter"),n._v(" "),e("div",{staticClass:"\n      flex\n      space-x-2\n      mr-8\n      mb-6\n      right-0\n      bottom-0\n      z-50\n      fixed\n      items-center\n      sm:space-x-4\n    "},[e("BackToTop")],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{BackToTop:e(127).default})},function(n,t,e){"use strict";e.r(t);e(29),e(24),e(28),e(11),e(36),e(25),e(37);var r=e(14),o=e(27),l=e(126),f=e(178);function c(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}var d={components:{HireMeModal:l.default,AppNavigation:f.default},data:function(){return{isOpen:!1,modal:!1}},computed:function(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}({},Object(o.b)(["categories"])),methods:{themeSwitcher:function(){this.$colorMode.preference="light"==this.$colorMode.value?"dark":"light"},showModal:function(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}}},m=d,y=e(8),component=Object(y.a)(m,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("nav",{staticClass:"sm:container sm:mx-auto",attrs:{id:"nav"}},[r("div",{staticClass:"\n      z-10\n      max-w-screen-lg\n      xl:max-w-screen-xl\n      block\n      sm:flex sm:justify-between sm:items-center\n      py-6\n    "},[r("div",{staticClass:"flex justify-between items-center px-6 sm:px-0"},[r("div",[r("NuxtLink",{attrs:{to:"/"}},["dark"==this.$colorMode.value?r("img",{staticClass:"w-36",attrs:{src:e(278),alt:"Light Logo"}}):r("img",{staticClass:"w-36",attrs:{src:e(279),alt:"Color Logo"}})])],1),n._v(" "),r("button",{staticClass:"\n          sm:hidden\n          ml-8\n          bg-primary-light\n          dark:bg-ternary-dark\n          px-2\n          py-1.5\n          sm:px-3 sm:py-2\n          shadow-sm\n          rounded-xl\n          cursor-pointer\n        ",on:{click:n.themeSwitcher}},["light"==n.$colorMode.value?r("svg",{staticClass:"\n            text-liText-ternary-dark\n            hover:text-gray-400\n            dark:text-liText-ternary-light\n            dark:hover:text-liBorder-primary-light\n            w-6\n            h-6\n          ",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}})]):r("svg",{staticClass:"text-gray-200 hover:text-gray-50 w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}})])]),n._v(" "),r("div",{staticClass:"sm:hidden"},[r("button",{staticClass:"focus:outline-none",attrs:{type:"button","aria-label":"Hamburger Menu"},on:{click:function(t){n.isOpen=!n.isOpen}}},[r("svg",{staticClass:"\n              h-7\n              w-7\n              mt-1\n              fill-current\n              text-secondary-dark\n              dark:text-ternary-light\n            ",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n.isOpen?r("path",{attrs:{"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"}}):n._e(),n._v(" "),n.isOpen?n._e():r("path",{attrs:{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}})])])])]),n._v(" "),r("AppNavigation",{attrs:{isOpen:n.isOpen,showModal:n.showModal,modal:n.modal,categories:n.categories}}),n._v(" "),r("div",{staticClass:"hidden sm:flex justify-between items-center flex-col md:flex-row"},[r("button",{staticClass:"\n          sm:ml-6\n          bg-primary-light\n          dark:bg-ternary-dark\n          px-2\n          py-2\n          shadow-sm\n          rounded-lg\n          cursor-pointer\n        ",on:{click:n.themeSwitcher}},["light"==n.$colorMode.value?r("svg",{staticClass:"\n            text-liText-ternary-dark\n            hover:text-gray-400\n            dark:text-liText-ternary-light\n            dark:hover:text-liBorder-primary-light\n            w-6\n            h-6\n          ",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}})]):r("svg",{staticClass:"text-gray-200 hover:text-gray-50 w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}})])])])],1),n._v(" "),r("HireMeModal",{attrs:{showModal:n.showModal,modal:n.modal,categories:n.categories,"aria-modal":"Hire Me Modal"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HireMeModal:e(126).default})},function(n,t,e){"use strict";e.r(t);var r={props:["isOpen","showModal","modal","categories"]},o=(e(282),e(8)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"\n    font-general-regular\n    m-0\n    sm:ml-4\n    mt-5\n    sm:mt-3 sm:flex\n    p-5\n    sm:p-0\n    justify-center\n    items-center\n    shadow-lg\n    sm:shadow-none\n  ",class:n.isOpen?"block":"hidden"},[e("NuxtLink",{staticClass:"\n      block\n      text-left text-lg text-primary-dark\n      dark:text-ternary-light\n      hover:text-secondary-dark\n      dark:hover:text-secondary-light\n      sm:mx-4\n      mb-2\n      sm:py-2\n    ",attrs:{to:"/projects","aria-label":"Projects"}},[n._v("Projects")]),n._v(" "),e("NuxtLink",{staticClass:"\n      block\n      text-left text-lg text-primary-dark\n      dark:text-ternary-light\n      hover:text-secondary-dark\n      dark:hover:text-secondary-light\n      sm:mx-4\n      mb-2\n      sm:py-2\n      border-t-2\n      pt-3\n      sm:pt-2 sm:border-t-0\n      border-primary-light\n      dark:border-secondary-dark\n    ",attrs:{to:"/about","aria-label":"About Me"}},[n._v("About Me")]),n._v(" "),e("NuxtLink",{staticClass:"\n      block\n      text-left text-lg text-primary-dark\n      dark:text-ternary-light\n      hover:text-secondary-dark\n      dark:hover:text-secondary-light\n      sm:mx-4\n      mb-2\n      sm:py-2\n      border-t-2\n      pt-3\n      sm:pt-2 sm:border-t-0\n      border-primary-light\n      dark:border-secondary-dark\n    ",attrs:{to:"/contact","aria-label":"Contact"}},[n._v("Contact")])],1)}),[],!1,null,null,null);t.default=component.exports},function(n,t,e){"use strict";e.r(t);e(29),e(24),e(28),e(11),e(36),e(25),e(37);var r=e(14),o=(e(19),e(35),e(27)),l=e(30),f=e.n(l);function c(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}var d={components:{FooterCopyright:e(180).default},data:function(){return{}},computed:function(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}({},Object(o.b)(["copyrightDate","socialProfiles"])),mounted:function(){f.a.replace()},updated:function(){f.a.replace()}},m=d,y=e(8),component=Object(y.a)(m,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"\n      pt-20\n      sm:pt-30\n      pb-8\n      mt-20\n      border-t-2 border-primary-light\n      dark:border-secondary-dark\n    "},[e("div",{staticClass:"flex flex-col justify-center items-center mb-12 sm:mb-20"},[e("p",{staticClass:"\n          font-general-semibold\n          text-3xl\n          sm:text-4xl\n          text-primary-dark\n          dark:text-primary-light\n          mb-5\n        "},[n._v("\n        Follow me\n      ")]),n._v(" "),e("ul",{staticClass:"flex gap-4 sm:gap-8"},n._l(n.socialProfiles,(function(n){return e("a",{key:n.id,staticClass:"\n            text-gray-400\n            hover:text-indigo-500\n            dark:hover:text-indigo-400\n            cursor-pointer\n            rounded-lg\n            bg-gray-50\n            dark:bg-ternary-dark\n            hover:bg-gray-100\n            shadow-sm\n            p-4\n            duration-500\n          ",attrs:{href:n.url,target:"__blank"}},[e("i",{staticClass:"w-6 sm:w-8 h-6 sm:h-8",attrs:{"data-feather":n.icon}})])})),0)]),n._v(" "),e("FooterCopyright")],1)])}),[],!1,null,"2553bf6e",null);t.default=component.exports},function(n,t,e){"use strict";e.r(t);e(29),e(24),e(28),e(11),e(36),e(25),e(37);var r=e(14),o=e(27);function l(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}var f={data:function(){return{projectName:"Portfolio",author:"Manohar"}},computed:function(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}({},Object(o.b)(["copyrightDate"]))},c=f,d=e(8),component=Object(d.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"flex justify-center items-center text-center"},[e("div",{staticClass:"\n      font-general-regular\n      text-lg text-ternary-dark\n      dark:text-ternary-light\n    "},[n._v("\n    © "+n._s(n.copyrightDate)+".All Right Reserved\n  ")])])}),[],!1,null,"22a051aa",null);t.default=component.exports},,,function(n,t,e){e(184),n.exports=e(185)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(n,t,e){var content=e(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(52).default)("a535f88e",content,!0,{sourceMap:!1})},function(n,t,e){var r=e(51),o=e(235),l=e(236),f=e(237),c=e(238),d=e(239),m=e(240),y=e(241),h=e(242),x=e(243),w=e(244),v=e(245),k=e(246),S=e(247),j=e(248),O=e(249),G=e(250),C=e(251),_=e(252),M=e(253),P=e(254),I=e(255),E=e(256),B=e(257),D=e(258),L=e(259),T=e(260),H=e(261),N=e(262),A=e(263),z=e(264),V=e(265),$=e(266),R=e(267),X=e(268),F=e(269),W=e(270),Y=e(271),J=e(272),K=e(273),Q=e(274),U=e(275),Z=e(276),nn=e(277),tn=r((function(i){return i[1]})),en=o(l),an=o(f),rn=o(c),on=o(d),sn=o(m),ln=o(y),fn=o(h),cn=o(x),dn=o(w),un=o(v),pn=o(k),mn=o(S),gn=o(j),yn=o(O),bn=o(G),hn=o(C),xn=o(_),wn=o(M),vn=o(P),kn=o(I),Sn=o(E),jn=o(B),On=o(D),Gn=o(L),Cn=o(T),_n=o(H),Mn=o(N),Pn=o(A),In=o(z),En=o(V),Bn=o($),Dn=o(R),Ln=o(X),Tn=o(F),Hn=o(W),Nn=o(Y),An=o(J),zn=o(K),Vn=o(Q),$n=o(U),Rn=o(Z),Xn=o(nn);tn.push([n.i,'/*purgecss start ignore*/\n\n@font-face{\n  font-family:"GeneralSans-Variable";\n\n  src:url('+en+') format("woff2"),url('+an+') format("woff"),url('+rn+') format("truetype");\n\n  font-weight:200 700;\n\n  font-display:swap;\n\n  font-style:normal\n}\n\n.font-general-variable{\n  font-family:"GeneralSans-Variable"\n}\n\n@font-face{\n  font-family:"GeneralSans-VariableItalic";\n\n  src:url('+on+') format("woff2"),url('+sn+') format("woff"),url('+ln+') format("truetype");\n\n  font-weight:200 700;\n\n  font-display:swap;\n\n  font-style:italic\n}\n\n.font-general-variable-italic{\n  font-family:"GeneralSans-VariableItalic"\n}\n\n@font-face{\n  font-family:"GeneralSans-Extralight";\n\n  src:url('+fn+') format("woff2"),url('+cn+') format("woff"),url('+dn+') format("truetype");\n\n  font-weight:200;\n\n  font-display:swap;\n\n  font-style:normal\n}\n\n.font-general-extralight{\n  font-family:"GeneralSans-Extralight"\n}\n\n@font-face{\n  font-family:"GeneralSans-ExtralightItalic";\n\n  src:url('+un+') format("woff2"),url('+pn+') format("woff"),url('+mn+') format("truetype");\n\n  font-weight:200;\n\n  font-display:swap;\n\n  font-style:italic\n}\n\n.font-general-extralight-italic{\n  font-family:"GeneralSans-ExtralightItalic"\n}\n\n@font-face{\n  font-family:"GeneralSans-Light";\n\n  src:url('+gn+') format("woff2"),url('+yn+') format("woff"),url('+bn+') format("truetype");\n\n  font-weight:300;\n\n  font-display:swap;\n\n  font-style:normal\n}\n\n.font-general-light{\n  font-family:"GeneralSans-Light"\n}\n\n@font-face{\n  font-family:"GeneralSans-LightItalic";\n\n  src:url('+hn+') format("woff2"),url('+xn+') format("woff"),url('+wn+') format("truetype");\n\n  font-weight:300;\n\n  font-display:swap;\n\n  font-style:italic\n}\n\n.font-general-light-italic{\n  font-family:"GeneralSans-LightItalic"\n}\n\n@font-face{\n  font-family:"GeneralSans-Regular";\n\n  src:url('+vn+') format("woff2"),url('+kn+') format("woff"),url('+Sn+') format("truetype");\n\n  font-weight:400;\n\n  font-display:swap;\n\n  font-style:normal\n}\n\n.font-general-regular{\n  font-family:"GeneralSans-Regular"\n}\n\n@font-face{\n  font-family:"GeneralSans-Italic";\n\n  src:url('+jn+') format("woff2"),url('+On+') format("woff"),url('+Gn+') format("truetype");\n\n  font-weight:400;\n\n  font-display:swap;\n\n  font-style:italic\n}\n\n.font-general-italic{\n  font-family:"GeneralSans-Italic"\n}\n\n@font-face{\n  font-family:"GeneralSans-Medium";\n\n  src:url('+Cn+') format("woff2"),url('+_n+') format("woff"),url('+Mn+') format("truetype");\n\n  font-weight:500;\n\n  font-display:swap;\n\n  font-style:normal\n}\n\n.font-general-medium{\n  font-family:"GeneralSans-Medium"\n}\n\n@font-face{\n  font-family:"GeneralSans-MediumItalic";\n\n  src:url('+Pn+') format("woff2"),url('+In+') format("woff"),url('+En+') format("truetype");\n\n  font-weight:500;\n\n  font-display:swap;\n\n  font-style:italic\n}\n\n.font-general-medium-italic{\n  font-family:"GeneralSans-MediumItalic"\n}\n\n@font-face{\n  font-family:"GeneralSans-Semibold";\n\n  src:url('+Bn+') format("woff2"),url('+Dn+') format("woff"),url('+Ln+') format("truetype");\n\n  font-weight:600;\n\n  font-display:swap;\n\n  font-style:normal\n}\n\n.font-general-semibold{\n  font-family:"GeneralSans-Semibold"\n}\n\n@font-face{\n  font-family:"GeneralSans-SemiboldItalic";\n\n  src:url('+Tn+') format("woff2"),url('+Hn+') format("woff"),url('+Nn+') format("truetype");\n\n  font-weight:600;\n\n  font-display:swap;\n\n  font-style:italic\n}\n\n.font-general-semibold-italic{\n  font-family:"GeneralSans-SemiboldItalic"\n}\n\n@font-face{\n  font-family:"GeneralSans-Bold";\n\n  src:url('+An+') format("woff2"),url('+zn+') format("woff"),url('+Vn+') format("truetype");\n\n  font-weight:700;\n\n  font-display:swap;\n\n  font-style:normal\n}\n\n.font-general-bold{\n  font-family:"GeneralSans-Bold"\n}\n\n@font-face{\n  font-family:"GeneralSans-BoldItalic";\n\n  src:url('+$n+') format("woff2"),url('+Rn+') format("woff"),url('+Xn+') format("truetype");\n\n  font-weight:700;\n\n  font-display:swap;\n\n  font-style:italic\n}\n\n.font-general-bold-italic{\n  font-family:"GeneralSans-BoldItalic"\n}\n\n/*purgecss end ignore*/',""]),tn.locals={},n.exports=tn},,function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Variable.65a7e76.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Variable.bc2b124.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Variable.d7facbb.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-VariableItalic.8d45d5d.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-VariableItalic.e4ae865.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-VariableItalic.37a2c9e.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Extralight.d6a4332.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Extralight.efc4ce0.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Extralight.e9e1615.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-ExtralightItalic.3d55e7e.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-ExtralightItalic.637cc7b.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-ExtralightItalic.f2b0d50.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Light.5979763.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Light.705af13.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Light.69935ec.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-LightItalic.c8c13d9.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-LightItalic.b3f3767.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-LightItalic.01f39fe.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Regular.33c0756.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Regular.c8cfd56.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Regular.6d91885.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Italic.8c6daf7.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Italic.38fe83c.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Italic.61b5c63.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Medium.1096c81.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Medium.9ff9c34.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Medium.c729d67.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-MediumItalic.8a74287.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-MediumItalic.be50bba.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-MediumItalic.8eb302f.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Semibold.23103ad.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Semibold.f7917c0.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Semibold.f6a5bac.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-SemiboldItalic.b544755.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-SemiboldItalic.36eb24d.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-SemiboldItalic.e325608.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Bold.64b1bf9.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Bold.4d82f8e.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-Bold.148ea23.ttf"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-BoldItalic.4a1bf40.woff2"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-BoldItalic.62949ca.woff"},function(n,t,e){n.exports=e.p+"fonts/GeneralSans-BoldItalic.89074cc.ttf"},function(n,t,e){n.exports=e.p+"img/manoDark.0c5df1f.svg"},function(n,t,e){n.exports=e.p+"img/mano1.40d4d29.svg"},function(n,t,e){"use strict";e(167)},function(n,t,e){var r=e(51)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.modal-body{\n  max-height:500px\n}\n.bg-gray-800-opacity{\n  background-color:rgba(45,55,72,.3137254901960784)\n}\n@media screen and (max-width:768px){\n.modal-body{\n    max-height:400px\n}\n}\n.fade-up-down-enter-active,.fade-up-down-leave-active{\n  transition:all .3s ease\n}\n.fade-up-down-enter,.fade-up-down-leave-to{\n  transform:translateY(10%);\n  opacity:0\n}\n.fade-enter-active{\n  -webkit-transition:opacity 2s\n}\n.fade-enter-active,.fade-leave-active{\n  transition:opacity .3s\n}\n.fade-enter,.fade-leave-to{\n  opacity:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},function(n,t,e){"use strict";e(168)},function(n,t,e){var r=e(51)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n#nav .nuxt-link-active, #nav .nuxt-link-exact-active{\n  --tw-text-opacity:1;\n  color:rgba(67, 56, 202, var(--tw-text-opacity))\n}\n.dark #nav .nuxt-link-active, .dark #nav .nuxt-link-exact-active{\n  --tw-text-opacity:1;\n  color:rgba(129, 140, 248, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},function(n,t,e){"use strict";e(169)},function(n,t,e){var r=e(51)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.vue-back-to-top{\n  --tw-bg-opacity:1;\n  background-color:rgba(99, 102, 241, var(--tw-bg-opacity))\n}\n.vue-back-to-top:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(79, 70, 229, var(--tw-bg-opacity))\n}\n.vue-back-to-top{\n  padding:0.5rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n@media (min-width: 640px){\n.vue-back-to-top{\n    padding:1rem\n}\n}\n.vue-back-to-top{\n  border-radius:50%;\n  font-size:22px;\n  line-height:22px\n}\n.fade-enter-active{\n  -webkit-animation:coming .4s;\n          animation:coming .4s;\n  -webkit-animation-delay:.2s;\n          animation-delay:.2s;\n  opacity:0\n}\n.fade-leave-active{\n  -webkit-animation:going .4s;\n          animation:going .4s\n}\n@-webkit-keyframes going{\n0%{\n    transform:translateX(0)\n}\nto{\n    transform:translateX(-10px);\n    opacity:0\n}\n}\n@keyframes going{\n0%{\n    transform:translateX(0)\n}\nto{\n    transform:translateX(-10px);\n    opacity:0\n}\n}\n@-webkit-keyframes coming{\n0%{\n    transform:translateX(-10px);\n    opacity:0\n}\nto{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes coming{\n0%{\n    transform:translateX(-10px);\n    opacity:0\n}\nto{\n    transform:translateX(0);\n    opacity:1\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},function(n,t,e){"use strict";e.r(t),e.d(t,"state",(function(){return o})),e.d(t,"getters",(function(){return l})),e.d(t,"mutations",(function(){return f})),e.d(t,"actions",(function(){return c}));e(287),e(11);var r=e(78),o=function(){return{projectsHeading:"Projects Portfolio",projectsDescription:"Some of the projects I have successfully completed",projects:[],clientsHeading:"Some of the brands I worked with",clients:[],aboutMe:[{id:Object(r.a)(),bio:"I am a Full-stack Developer based in Kathmandu with expertise in PHP and Laravel for backend development. I create robust and scalable web applications while ensuring smooth frontend experiences using Vue.js, Pinia, and Quasar. With strong skills in testing, debugging, and API optimization, I deliver high-quality solutions. I am proficient in Git for code management, Linux server configuration, Nginx deployment, and data management in cloud environments using Minio.io. I am dedicated to staying updated and delivering innovative solutions."}],copyrightDate:(new Date).getFullYear(),socialProfiles:[{id:Object(r.a)(),name:"GitHub",icon:"github",url:"https://github.com/DProcrastinator"},{id:Object(r.a)(),name:"Twitter",icon:"twitter",url:"https://twitter.com/home"},{id:Object(r.a)(),name:"Linkedin",icon:"linkedin",url:"https://www.linkedin.com/in/manohar-devkota-044aaa23a/"}],categories:[{id:Object(r.a)(),value:"web",name:"Web Application"}]}},l={getProjectById:function(n){return function(t){return n.projects.find((function(n){return n.id==t}))}}},f={},c={}}]),[[183,17,1,18]]]);