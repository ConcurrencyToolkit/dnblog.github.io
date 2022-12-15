"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[96],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,y=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"plain-text-io-lib",title:"Text IO Library",tags:["text_io"]},i=void 0,l={permalink:"/plain-text-io-lib",source:"@site/blog/2022-12-07-plain-text-io-library.mdx",title:"Text IO Library",description:"Although the previous post revealed that .NET IO performance is not unsatisfactory,",date:"2022-12-07T00:00:00.000Z",formattedDate:"December 7, 2022",tags:[{label:"text_io",permalink:"/tags/text-io"}],readingTime:21.375,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"plain-text-io-lib",title:"Text IO Library",tags:["text_io"]},nextItem:{title:"Text IO Benchmarks",permalink:"/text-io-benchmarks"}},p={authorsImageUrls:[]},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Although the ",(0,a.kt)("a",{parentName:"p",href:"/text-io-benchmarks"},"previous post")," revealed that .NET IO performance is not unsatisfactory,\nit remains ",(0,a.kt)("a",{parentName:"p",href:"/text-io-flaw"},"inconvenient"),", particularly  for input reading."),(0,a.kt)("p",null,"In this article, I design and implement a high-performance AOT-friendly input parsing library to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"int.Parse(Console.Readline())")," with something like ",(0,a.kt)("inlineCode",{parentName:"p"},"sc.ReadInt()"),"."),(0,a.kt)("p",null,"Furthermore, I give you this ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Epeshk.Text"},"library")," as a concise code snippet that can be easily copied into your program and utilized on online judging systems."))}u.isMDXComponent=!0}}]);