"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[2504],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return h},MDXProvider:function(){return l},mdx:function(){return f},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},c.apply(this,arguments)}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=t.createContext({}),u=function(e){return function(n){var r=d(n.components);return t.createElement(e,c({},n,{components:r}))}},d=function(e){var n=t.useContext(h),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=d(e.components);return t.createElement(h.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(r),l=a,m=u["".concat(o,".").concat(l)]||u[l]||p[l]||c;return r?t.createElement(m,i(i({ref:n},h),{},{components:r})):t.createElement(m,i({ref:n},h))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var h=2;h<c;h++)o[h]=r[h];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56654:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return h},toc:function(){return d}});var t=r(83117),a=r(80102),c=(r(67294),r(3905)),o=["components"],i={id:"Cachebench_Overview",title:"Overview"},s=void 0,h={unversionedId:"Cache_Library_User_Guides/Cachebench_Overview",id:"Cache_Library_User_Guides/Cachebench_Overview",title:"Overview",description:"CacheBench is a benchmark and stress testing  tool to evaluate cache",source:"@site/docs/Cache_Library_User_Guides/Cachebench_Overview.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Cachebench_Overview",permalink:"/docs/Cache_Library_User_Guides/Cachebench_Overview",draft:!1,editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/Cache_Library_User_Guides/Cachebench_Overview.md",tags:[],version:"current",frontMatter:{id:"Cachebench_Overview",title:"Overview"},sidebar:"cachebenchSideBar",next:{title:"Configuring cachebench parameters",permalink:"/docs/Cache_Library_User_Guides/Configuring_cachebench_parameters"}},u={},d=[{value:"Uses of cachebench",id:"uses-of-cachebench",level:2},{value:"Building  cachebench",id:"building--cachebench",level:2}],l={toc:d};function p(e){var n=e.components,i=(0,a.Z)(e,o);return(0,c.mdx)("wrapper",(0,t.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,c.mdx)("p",null,"CacheBench is a benchmark and stress testing  tool to evaluate cache\nperformance with real hardware and real cache workloads. CacheBench takes in a\nconfiguration that describes the cache workload  and the cache configuration\nand simulates  the cache behavior by instantiating a CacheLib cache. It runs\nthe workload and emits  results periodically and at the end. The results\ninclude metrics such as hit rate, evictions, write rate to flash cache,\nlatency, etc. The workload configs can be hand-written by a human, produced by\na workload analyzer, or backed by raw production cachelib traces. The main\ncustomization points into CacheBench are through writing workload configs or\ncustom workload generators. See ",(0,c.mdx)("a",{parentName:"p",href:"Configuring_cachebench_parameters"},"configuring\ncachebench")," for more details."),(0,c.mdx)("p",null,(0,c.mdx)("img",{src:r(45964).Z,width:"1148",height:"391"})),(0,c.mdx)("h2",{id:"uses-of-cachebench"},"Uses of cachebench"),(0,c.mdx)("p",null,"CacheBench can be configured and used for several purposes depending on the\ndeveloper's need. The following are few examples."),(0,c.mdx)("ol",null,(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},(0,c.mdx)("strong",{parentName:"p"},"Prototype and evaluation of cache heuristics"),": CacheBench can be used to compare the cache\nperformance (hit ratio) of various configuration options for existing\nhueristics and new heuristics. For example, given a cache size and\nworkload, comparing LRU vs 2Q vs FIFO vs new heuristic added to CacheLib.")),(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},(0,c.mdx)("strong",{parentName:"p"},"Evaluating throughput and scalability"),": By representing the workload in\nCacheBench, you can compare the throughput of various cache setups and\nCacheLib configuration. For example, given a workload, identifying the\nmaximum throughput of dram cache and hybrid cache setups as you scale up\nnumber of application threads or modify CacheLib configuration.")),(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},(0,c.mdx)("strong",{parentName:"p"},"Evaluate hardware choices"),": CacheBench workloads can be evaluated on various\nhardware choices to compare the trade-offs between them. For example\nCacheBench can replay the workload against a 100GB dram cache and a 10GB\ndram + 90 GB SSD cache to compare the sensitivity of application\nperformance and hardware\nperformance.")),(0,c.mdx)("li",{parentName:"ol"},(0,c.mdx)("p",{parentName:"li"},(0,c.mdx)("strong",{parentName:"p"},"Testing for correctness and crashes"),": When adding new features to\nCacheLib, in addition to unit tests, CacheBench is leveraged to stress test\nthe feature's correctness in a concurrent multi-threaded environment.\nCacheBench provides options to ensure the consistency of the cache by\nvalidating the data correctness of the operations. See ",(0,c.mdx)("a",{parentName:"p",href:"Configuring_cachebench_parameters#consistency-checking"},"configuring\nconsistency\nchecking")," on how\nthis can be enabled. All code changes and new features to CacheLib from\nFacebook go through correctness stress tests with CacheBench."))),(0,c.mdx)("h2",{id:"building--cachebench"},"Building  cachebench"),(0,c.mdx)("p",null,"Follow instructions in ",(0,c.mdx)("a",{parentName:"p",href:"/docs/installation"},"Installation")," to build\ncachebench. This should install cachebench in your local machine under\n",(0,c.mdx)("inlineCode",{parentName:"p"},"opt/cachelib/bin/cachebench")))}p.isMDXComponent=!0},45964:function(e,n,r){n.Z=r.p+"assets/images/cachebench-25d1d476ed27af8ec3a0b5033571dd1a.png"}}]);