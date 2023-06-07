"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[3464],{3905:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return c},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return m}});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),m=function(e){return function(a){var t=d(a.components);return n.createElement(e,o({},a,{components:t}))}},d=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(c.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,p=m["".concat(r,".").concat(u)]||m[u]||h[u]||o;return t?n.createElement(p,l(l({ref:a},c),{},{components:t})):n.createElement(p,l({ref:a},c))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45576:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=t(83117),i=t(80102),o=(t(67294),t(3905)),r=["components"],l={id:"pool_rebalance_strategy",title:"Pool rebalance strategy"},s=void 0,c={unversionedId:"Cache_Library_User_Guides/pool_rebalance_strategy",id:"Cache_Library_User_Guides/pool_rebalance_strategy",title:"Pool rebalance strategy",description:"When do you need pool rebalancing?",source:"@site/docs/Cache_Library_User_Guides/pool_rebalance_strategy.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/pool_rebalance_strategy",permalink:"/docs/Cache_Library_User_Guides/pool_rebalance_strategy",draft:!1,editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/Cache_Library_User_Guides/pool_rebalance_strategy.md",tags:[],version:"current",frontMatter:{id:"pool_rebalance_strategy",title:"Pool rebalance strategy"},sidebar:"userguideSidebar",previous:{title:"Oom protection",permalink:"/docs/Cache_Library_User_Guides/oom_protection"},next:{title:"Automatic pool resizing",permalink:"/docs/Cache_Library_User_Guides/automatic_pool_resizing"}},m={},d=[{value:"When do you need pool rebalancing?",id:"when-do-you-need-pool-rebalancing",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Enabling pool rebalancing",id:"enabling-pool-rebalancing",level:2},{value:"Picking a strategy",id:"picking-a-strategy",level:3},{value:"Lru TailAge",id:"lru-tailage",level:4},{value:"Hit based",id:"hit-based",level:4},{value:"Marginal hits",id:"marginal-hits",level:4},{value:"Free memory",id:"free-memory",level:4},{value:"Writing your own strategy",id:"writing-your-own-strategy",level:3}],u={toc:d};function h(e){var a=e.components,t=(0,i.Z)(e,r);return(0,o.mdx)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"when-do-you-need-pool-rebalancing"},"When do you need pool rebalancing?"),(0,o.mdx)("p",null,"If your cachelib use case always allocates objects of a single size, then\nrebalancing is almost always not required for you. Rebalancing of cache\nbecomes ",(0,o.mdx)("em",{parentName:"p"},"important only when you store variable sized objects")," in cache and\nyour workload's footprint of access across these objects can potentially\nchange over time. Often when you cache objects of variable size, the\ndistribution of ",(0,o.mdx)("inlineCode",{parentName:"p"},"find()")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"allocate()")," across object sizes would vary over\ntime. This leads to poor fragmentation in the cache memory footprint. For\nexample, imagine you had a cache of 30 GB and store objects of size 100 bytes,\n500 bytes, and 1,000 bytes, each occupying 10 GB when warmed up. When your\napplication workload changes over time, the optimal sizes for these objects\ncould vary as well requiring more memory for one vs. other. With pool\nrebalancing, this kind of workload change would usually result in metrics like\neviction age and hit ratios being sub-optimal over time."),(0,o.mdx)("p",null,"Cachelib offers several rebalancing strategies to offset this behavior by\nasking the cache to restructure the underlying memory allocated among objects\nof different sizes."),(0,o.mdx)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.mdx)("p",null,"Internally, cachelib divides up memory into slabs and allocates slabs across\nobjects of various sizes. When pool rebalancing is enabled, cachelib evicts\nobjects of one size in favor of other and moves the backing slabs to the other\nobjects to enable caching more of them. Cachelib can do this automatically and\nperiodically. However, you will have to pick a strategy that matters to you\nand configure how often the rebalancing happens."),(0,o.mdx)("p",null,"Rebalancing is an asynchronous operation and does not impact the latencies of\nother cachelib operations like ",(0,o.mdx)("inlineCode",{parentName:"p"},"find()"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"insertOrReplace()"),", or ",(0,o.mdx)("inlineCode",{parentName:"p"},"allocate()"),".\nRebalancing moves memory at the rate of 4 MB for every interval that you\nconfigure if you would like to estimate a good rate."),(0,o.mdx)("h2",{id:"enabling-pool-rebalancing"},"Enabling pool rebalancing"),(0,o.mdx)("p",null,"To enable pool rebalancing, specify these two parameters:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Strategy")," for re-evaluating metrics about your cache and figuring out a rebalancing action"),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Interval")," of executing the rebalancing")),(0,o.mdx)("p",null,"For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"auto rebalanceStrategy =\n  std::make_shared<cachelib::LruTailAgeStrategy>(rebalanceConfig);\n\nconfig.enablePoolRebalancing(\n  rebalanceStrategy,\n  std::chrono::seconds(kRebalanceIntervalSecs)\n);\n")),(0,o.mdx)("h3",{id:"picking-a-strategy"},"Picking a strategy"),(0,o.mdx)("p",null,"Cachelib offers a few pre-package strategies for rebalancing that you can pick\nfrom. They differ by what they try to optimize for based on traditional wisdom\nof large scale caches like social graph caches and general purpose look-aside\nkey value caches. These are good defaults to start with, but you can also come\nup with your own implementation if you have other goals."),(0,o.mdx)("h4",{id:"lru-tailage"},"Lru TailAge"),(0,o.mdx)("p",null,"LruTailAge is a fair policy that ensures that objects of different sizes get the same eviction age in cache.  For example, in steady state for your cache, you could have 100 byte objects getting 1 hr lifetime vs 1000 byte objects getting 30 min lifetime. This strategy tries to make the eviction age for various sizes similar. You can configure the following parameters(LruTailAgeStrategy::Config) (whose default values are pretty good to begin with):"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"tailAgeDiffRatio"),"\nThis defines how tight the tail age of various object sizes you want them to be. Setting it to 0.1 means that you don't want the min and max age to differ by more than 10%.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"minTailAgeDifference"),"\nThis specifies a threshold of how big the actual diff ratio should be to warrant a rebalancing. For example, your min and max might be more than 10% off, but the real difference is insignificant.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"minSlabs"),"\nThis specifies the minimum amount of memory in slabs that specific object size can not go below while rebalancing. Keep in mind that this is specified in slabs and not in bytes.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"numSlabsFreeMem"),"\nWhen you specify rebalancing under this mode, cachlib aggressively moves memory from object sizes that have a lot of free memory. This specifies the threshold for triggering that behavior.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"slabProjectionLength"),"\nThis lets you estimate the min and max by picking a projected eviction age instead of the real eviction age. This can sometimes let you get better results."))),(0,o.mdx)("p",null,"For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"cachelib::LruTailAgeStrategy::Config cfg(ratio, kLruTailAgeStrategyMinSlabs);\ncfg.slabProjectionLength = 0; // dont project or estimate tail age\ncfg.numSlabsFreeMem = 10;     // ok to have ~40 MB free memory in unused allocations\nauto rebalanceStrategy = std::make_shared<cachelib::LruTailAgeStrategy>(cfg);\n\n// every 5 seconds, re-evaluate the eviction ages and rebalance the cache.\nconfig.enablePoolRebalancing(std::move(rebalanceStrategy), std::chrono::seconds(5));\n")),(0,o.mdx)("h4",{id:"hit-based"},"Hit based"),(0,o.mdx)("p",null,"HitBased approach tries to optimize the overall hit ratio rather than ensuring a fairness in the cache eviction age. This should result in a relatively higher hit ratio. However, it might potentially make your cache contain more of objects that give hits vs. objects that are expensive to recompute. For example, the cost of miss on objects is not uniform. To control the downsides of such implications, cachelib offers these parameters(HitsPerSlabStrategy::Config). Most of these are similar to the LruTailAge parameters, however, their semantics could slightly differ in the following ways:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"minDiff"),"\nLike tailAgeDiffRatio, this controls the minimum improvement that should trigger a rebalancing."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"minLruTailAge"),"\nWhen using hit based rebalancing, if you want to ensure some level of fairness by guaranteeing some eviction age, you can configure it through this parameter.")),(0,o.mdx)("h4",{id:"marginal-hits"},"Marginal hits"),(0,o.mdx)("p",null,"This strategy ensures that the marginal hits (estimated by the hits in the tail part of LRU) across different object sizes are similar. Unlike hit based strategy which counts for historical count of hits across the entire cache, this tracks which objects could marginally benefit from getting more memory. To enable this,  you need to use the MM2Q eviction policy and enable tail hits tracking (",(0,o.mdx)("inlineCode",{parentName:"p"},"Allocator::Config::enableTailHitsTracking()"),")."),(0,o.mdx)("h4",{id:"free-memory"},"Free memory"),(0,o.mdx)("p",null,"This strategy frees a slab from an allocation class that satisfies all of the following requirements:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"this allocation class has total slabs above ",(0,o.mdx)("inlineCode",{parentName:"li"},"minSlabs")),(0,o.mdx)("li",{parentName:"ul"},"this allocation class has free slabs above ",(0,o.mdx)("inlineCode",{parentName:"li"},"numFreeSlabs")),(0,o.mdx)("li",{parentName:"ul"},"this allocation class has the most total free memory among all non-evicting (i.e. no eviction is currently happening) allocation classes in the pool")),(0,o.mdx)("p",null,"Note: this strategy does not specify a target allocation class to receive the freed slab.\nHere are the parameters to configure this strategy:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"minSlabs"),"\nThe minimum number of slabs to retain in every allocation class. Default is 1."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"numFreeSlabs"),"\nThe threshold of required free slabs. Default is 3."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"maxUnAllocatedSlabs"),"\nFreeMem strategy will not rebalance anything if the number of free slabs in this pool is more than this number. Default is 1000.")),(0,o.mdx)("h3",{id:"writing-your-own-strategy"},"Writing your own strategy"),(0,o.mdx)("p",null,"In addition, if you have some application specific context on how you can improve your cache, you can implement your own strategy and pass it to cachelib for rebalancing. Your rebalancing strategy will have to extend the type ",(0,o.mdx)("inlineCode",{parentName:"p"},"RebalanceStrategy")," and implement the following two methods that define where to take memory from and where to give more memory to:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"virtual RebalanceContext pickVictimAndReceiverImpl(\n  const CacheBase& /*cache*/,\n  PoolId /*pid*/\n) {\n  return {};\n}\n\nvirtual ClassId pickVictimImpl(\n  const CacheBase& /*cache*/,\n  PoolId /*pid*/\n) {\n  return Slab::kInvalidClassId;\n}\n")))}h.isMDXComponent=!0}}]);