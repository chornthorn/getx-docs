"use strict";(self.webpackChunkgetx_document=self.webpackChunkgetx_document||[]).push([[898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1,title:"Overview \ud83d\udcda",hide_title:!0,id:"overview",slug:"/state/overview",sidebar_label:"Overview \ud83d\udcda"},i=void 0,l={unversionedId:"state_management/overview",id:"state_management/overview",title:"Overview \ud83d\udcda",description:"State Management",source:"@site/docs/state_management/overview.md",sourceDirName:"state_management",slug:"/state/overview",permalink:"/getx-docs/docs/state/overview",draft:!1,editUrl:"https://github.com/chornthorn/getx-docs/tree/main/docs/state_management/overview.md",tags:[],version:"current",lastUpdatedBy:"Thorn Chorn",lastUpdatedAt:1675568377,formattedLastUpdatedAt:"Feb 5, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview \ud83d\udcda",hide_title:!0,id:"overview",slug:"/state/overview",sidebar_label:"Overview \ud83d\udcda"},sidebar:"tutorialSidebar",previous:{title:"State Management",permalink:"/getx-docs/docs/category/state-management"},next:{title:"Reactive State",permalink:"/getx-docs/docs/state/reactive-state"}},s={},c=[{value:"State Management",id:"state-management",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"state-management"},"State Management"),(0,o.kt)("p",null,"GetX does not use Streams or ChangeNotifier like other state managers. Why? In addition to building applications for android, iOS, web, windows, macos and linux, with GetX you can build server applications with the same syntax as Flutter/GetX. In order to improve response time and reduce RAM consumption, we created GetValue and GetStream, which are low latency solutions that deliver a lot of performance, at a low operating cost. We use this base to build all of our resources, including state management."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Complexity"),": Some state managers are complex and have a lot of boilerplate. With GetX you don't have to define a class for each event, the code is highly clean and clear, and you do a lot more by writing less. Many people have given up on Flutter because of this topic, and they now finally have a stupidly simple solution for managing states."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"No code generators"),": You spend half your development time writing your application logic. Some state managers rely on code generators to have minimally readable code. Changing a variable and having to run build_runner can be unproductive, and often the waiting time after a flutter clean will be long, and you will have to drink a lot of coffee.")),(0,o.kt)("p",null,"With GetX everything is reactive, and nothing depends on code generators, increasing your productivity in all aspects of your development."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"It does not depend on context"),": You probably already needed to send the context of your view to a controller, making the View's coupling with your business logic high. You have probably had to use a dependency for a place that has no context, and had to pass the context through various classes and functions. This just doesn't exist with GetX. You have access to your controllers from within your controllers without any context. You don't need to send the context by parameter for literally nothing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Granular control"),": most state managers are based on ChangeNotifier. ChangeNotifier will notify all widgets that depend on it when notifyListeners is called. If you have 40 widgets on one screen, which have a variable of your ChangeNotifier class, when you update one, all of them will be rebuilt.")),(0,o.kt)("p",null,"With GetX, even nested widgets are respected. If you have Obx watching your ListView, and another watching a checkbox inside the ListView, when changing the CheckBox value, only it will be updated, when changing the List value, only the ListView will be updated."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"It only reconstructs if its variable REALLY changes"),": GetX has flow control, that means if you display a Text with 'Paola', if you change the observable variable to 'Paola' again, the widget will not be reconstructed. That's because GetX knows that 'Paola' is already being displayed in Text, and will not do unnecessary reconstructions.")),(0,o.kt)("p",null,"Most (if not all) current state managers will rebuild on the screen."))}p.isMDXComponent=!0}}]);