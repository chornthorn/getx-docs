"use strict";(self.webpackChunkgetx_document=self.webpackChunkgetx_document||[]).push([[639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,p=u["".concat(l,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(p,o(o({ref:t},d),{},{components:n})):a.createElement(p,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:5,title:"Rebuild State",hide_title:!0,id:"rebuild-state",slug:"/state/rebuild-state"},o=void 0,s={unversionedId:"state_management/rebuild-state",id:"state_management/rebuild-state",title:"Rebuild State",description:"GetBuilder vs GetX vs Obx vs MixinBuilder",source:"@site/docs/state_management/rebuild-state.md",sourceDirName:"state_management",slug:"/state/rebuild-state",permalink:"/getx-docs/docs/state/rebuild-state",draft:!1,editUrl:"https://github.com/chornthorn/getx-docs/tree/main/docs/state_management/rebuild-state.md",tags:[],version:"current",lastUpdatedBy:"Thorn Chorn",lastUpdatedAt:1675571376,formattedLastUpdatedAt:"Feb 5, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Rebuild State",hide_title:!0,id:"rebuild-state",slug:"/state/rebuild-state"},sidebar:"tutorialSidebar",previous:{title:"Mixin State",permalink:"/getx-docs/docs/state/mixin-state"}},l={},c=[{value:"GetBuilder vs GetX vs Obx vs MixinBuilder",id:"getbuilder-vs-getx-vs-obx-vs-mixinbuilder",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getbuilder-vs-getx-vs-obx-vs-mixinbuilder"},"GetBuilder vs GetX vs Obx vs MixinBuilder"),(0,i.kt)("p",null,"In a decade working with programming I was able to learn some valuable lessons."),(0,i.kt)("p",null,'My first contact with reactive programming was so "wow, this is incredible" and in fact reactive programming is incredible.\nHowever, it is not suitable for all situations. Often all you need is to change the state of 2 or 3 widgets at the same time, or an ephemeral change of state, in which case reactive programming is not bad, but it is not appropriate.'),(0,i.kt)("p",null,"Reactive programming has a higher RAM consumption that can be compensated for by the individual workflow, which will ensure that only one widget is rebuilt and when necessary, but creating a list with 80 objects, each with several streams is not a good one idea. Open the dart inspect and check how much a StreamBuilder consumes, and you'll understand what I'm trying to tell you."),(0,i.kt)("p",null,"With that in mind, I created the simple state manager. It is simple, and that is exactly what you should demand from it: updating state in blocks in a simple way, and in the most economical way."),(0,i.kt)("p",null,"GetBuilder is very economical in RAM, and there is hardly a more economical approach than him (at least I can't imagine one, if it exists, please let us know)."),(0,i.kt)("p",null,"However, GetBuilder is still a mechanical state manager, you need to call update() just like you would need to call Provider's notifyListeners()."),(0,i.kt)("p",null,"There are other situations where reactive programming is really interesting, and not working with it is the same as reinventing the wheel. With that in mind, GetX was created to provide everything that is most modern and advanced in a state manager. It updates only what is necessary and when necessary, if you have an error and send 300 state changes simultaneously, GetX will filter and update the screen only if the state actually changes."),(0,i.kt)("p",null,"GetX is still more economical than any other reactive state manager, but it consumes a little more RAM than GetBuilder. Thinking about it and aiming to maximize the consumption of resources that Obx was created. Unlike GetX and GetBuilder, you will not be able to initialize a controller inside an Obx, it is just a Widget with a StreamSubscription that receives change events from your children, that's all. It is more economical than GetX, but loses to GetBuilder, which was to be expected, since it is reactive, and GetBuilder has the most simplistic approach that exists, of storing a widget's hashcode and its StateSetter. With Obx you don't need to write your controller type, and you can hear the change from multiple different controllers, but it needs to be initialized before, either using the example approach at the beginning of this readme, or using the Bindings class."))}m.isMDXComponent=!0}}]);