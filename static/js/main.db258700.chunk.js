(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,n,t){e.exports=t(75)},56:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(42),o=t.n(l),c=(t(56),t(16)),s=t(17),i=t(21),d=t(18),u=t(20),m=t(27),p=t(24),h=t(7),b=t(19),f=t(25),E=t(14),y=t.n(E),v=function(e){return r.a.createElement("header",{className:"text-left mb-4"},r.a.createElement("div",{className:"w-75 p-2 mx-auto rounded shadow bg-danger text-white"},r.a.createElement("h5",{className:"m-0"},"Note: The Bloodborne Ally API is still in development.",r.a.createElement("br",null),r.a.createElement("small",null,"Apps will not be able to make queries without the owner of of the API activating it. To use the API in this app or another, contact the author at github.com/char-cole for more info."))),r.a.createElement("h2",{className:"font-weight-bold"},e.page),r.a.createElement("h5",{className:"pr-5"},e.description))},g=function(){return r.a.createElement("div",{className:"col-12 col-md-6 p-5"},r.a.createElement("div",{className:"border border-danger rounded p-1"},r.a.createElement("p",{className:"border border-danger rounded p-3"},"There was an ",r.a.createElement("b",null,"error"),". Most likely, the app failed to fetch because the API is asleep. Check the console log for more information.")))};function N(){var e=Object(b.a)(["{\n    __schema {\n      types {\n        name\n        description\n        fields {\n          name\n          description\n          type {\n            name\n            ofType {\n              name\n            }\n          }\n        }\n      }\n    }\n  }"]);return N=function(){return e},e}var w=function(e){var n=y()(N()),t=r.a.createElement("div",{className:"col-12 col-md-6 mt-10 text-left"},r.a.createElement("h5",null,"How to use this API"),r.a.createElement("p",null,"To find a specific entry, valid queries are of the format\xa0",r.a.createElement("code",null,"Bloodborne_get[Type]By[Name/ID]")),r.a.createElement("p",null,"To list all entries (currently capped at first 10 results), valid queries are of the format\xa0",r.a.createElement("code",null,"Bloodborne_list[Type]"),". This query allows filters."),r.a.createElement("p",null,'In a GraphQL API, fields can be populated by specific entries of other type. For example, the type "Location" has a field named "headstone". Instead of a String, the value of this field is a "Bloodborne_Headstone". When querying a Location, the query can extend into the fields of the Headstone type.'),r.a.createElement("p",null,"This allows a single query to begin at any node in the API and reach almost any other node."),r.a.createElement("p",null,"For example, the query ",r.a.createElement("code",null,'Bloodborne_getRuneByName(name: "Blood Rapture 3")')," could return any of the fields of the type Bloodborne_Rune. Since some of these fields are themselves types, it could also return any of the fields of ",r.a.createElement("i",null,"those")," types. This can continue infinitely."),r.a.createElement("p",null,'If we know the rune "Blood Rapture 3" is dropped by an NPC (in this case, Bloody Crow of Cainhurst), we could access the name of a specific Encounter (a step of a Quest) that would be made unavailable by the beginning of whichever Phase "Blood Rapture 3" first becomes available. The following path identifies this information (in this case, a string) in the data object returned by the above query:'),r.a.createElement("p",null,r.a.createElement("code",null,"data.droppedByNPC.edges[0].node.firstAvailablePhase.blocksEncounters.edges[0].node.name")),r.a.createElement("p",null,"This would return the name (",r.a.createElement("code",null,".name"),") of the first encounter (",r.a.createElement("code",null,".edges[0].node"),") in an array of encounters (",r.a.createElement("code",null,".edges"),") that become unavailable (",r.a.createElement("code",null,".blocksEncounters"),") at the start of the Blood Moon phase (",r.a.createElement("code",null,".firstAvailablePhase"),"), which is when the encounter (",r.a.createElement("code",null,".droppedByNPC"),") with Bloody Crow of Cainhurst (",r.a.createElement("code",null,"data.droppedByNPC.edges[0].node.target.name"),") first becomes available during Eileen's Quest (",r.a.createElement("code",null,"data.droppedByNPC.edges[0].node.quest.name"),").")),a=r.a.createElement(f.c,{query:n},function(n){var a=n.loading,l=n.error,o=n.data;if(a)return null;if(l)return console.log(l),r.a.createElement("div",{className:"row"},r.a.createElement(g,null),t);var c=o.__schema.types.sort(function(e,n){var t=[e.name,n.name];return t[0]>t[1]?1:-1});return r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"accordion",className:"col-12 col-md-6"},c.map(function(n,t){return e.allTypes.includes(n.name)?r.a.createElement("div",{key:t,className:"card border-dark mb-1"},r.a.createElement("div",{className:"card-header bg-dark text-left",id:"heading-"+t},r.a.createElement("h5",{className:"mb-0"},r.a.createElement("button",{className:"btn btn-link text-white","data-toggle":"collapse","data-target":"#collapse-"+t,"aria-expanded":"false","aria-controls":"collapse-"+t},n.name))),r.a.createElement("div",{id:"collapse-"+t,className:"collapse","aria-labelledby":"heading-"+t,"data-parent":"#accordion"},r.a.createElement("div",{className:"card-body"},r.a.createElement("small",{className:"px-1 mb-3 d-block"},n.description),r.a.createElement("ul",{className:"text-left list-unstyled py-0 px-1 m-0"},r.a.createElement("li",{className:"row py-2 font-weight-bold"},r.a.createElement("p",{className:"col-5"},"Field"),r.a.createElement("p",{className:"col-7"},"Type")),n.fields.map(function(e,n,t){var a,l=e.type.name;e.type.ofType&&(a="*",l=e.type.ofType.name);var o=" border-bottom";return n===t.length-1&&(o=""),"id"===e.name&&(e.description=""),r.a.createElement("li",{key:n,className:"row py-2"+o},r.a.createElement("div",{className:"col-5 border-right"},e.name,r.a.createElement("span",{className:"text-danger"},a)),r.a.createElement("span",{className:"col-7"},l),r.a.createElement("small",{className:"col-12 text-muted"},e.description))}))))):null})),t)});return r.a.createElement("div",{className:"pb-3"},r.a.createElement(v,{page:"Docs",description:"This page lists the entire schema. Each type displays each of its available fields."}),a)},B=Object(h.b)(function(e){return{allTypes:e.allTypes}})(w),_=t(38),O=t.n(_),k=t(46),S=function(e){return r.a.createElement("div",{className:"row my-3 mx-0"},r.a.createElement("input",{type:"text",className:"w-50 rounded px-1",value:e.searchString,onChange:function(n){return e.updateSearch(n.target.value)}}),r.a.createElement(f.a,null,function(n){return r.a.createElement("button",{className:"btn btn-light border border-dark ml-2",onClick:Object(k.a)(O.a.mark(function t(){var a,r;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.query({query:e.query,variables:{search:(l=e.searchString,l.split(" ").map(function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}).join(" "))}});case 2:a=t.sent,r=a.data,console.log(r),e.updateResults(r[e.queryType].edges),console.log(r[e.queryType].edges);case 7:case"end":return t.stop()}var l},t)}))},"Search")}))};function T(e){return{type:"SEARCH_UPDATED",value:e}}function R(e){return{type:"RESULTS_UPDATED",value:e}}function j(){var e=Object(b.a)(["\nquery getTheseRunes($search: String!) {\n  Bloodborne_listRune(filter: {\n    node: {\n      name: {\n        contains: $search\n      }\n    }\n  }) {\n    edges {\n      node {\n        id\n        name\n        tier\n        effect\n        isCovenant\n        pickUp {\n          name\n        }\n        droppedByNPC {\n          edges {\n            node {\n              name\n              quest {\n                name\n              }\n              step\n              location {\n                name\n              }\n              firstAvailablePhase {\n                name\n              }\n              target {\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"]);return j=function(){return e},e}var C=y()(j()),q=Object(h.b)(function(e){return{searchString:e.searchString,currentResults:e.currentResults,query:C,queryType:"Bloodborne_listRune"}},function(e){return{updateSearch:function(n){e(T(n))},updateResults:function(n){e(R(n))}}})(S),x=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).page="Runes",t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{page:this.page,description:"Find Runes by name"}),r.a.createElement(q,null),r.a.createElement("div",{className:"row mt-5"},this.props.currentResults.map(function(e,n){var t,a=e.node.name;return e.node.isCovenant?t="This is a covenant rune.":(t="Tier "+e.node.tier,a=e.node.name.slice(0,e.node.name.indexOf(" "+e.node.tier.toString()))),r.a.createElement("div",{className:"col-6 col-md-4 mb-3",key:n},r.a.createElement("div",{className:"card border-dark"},r.a.createElement("div",{className:"card-header bg-dark text-white"},r.a.createElement("h5",null,a),r.a.createElement("p",null,t)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,e.node.effect))))})))}}]),n}(a.Component),A=Object(h.b)(function(e){return{currentResults:e.currentResults}})(x);function P(){var e=Object(b.a)(["\n  query searchGesturesByName($search: String!) {\n    Bloodborne_listGesture(filter: {\n      node: {\n        name: {\n          contains: $search\n        }\n      }\n    }) {\n      edges {\n        node {\n          name\n          rewardFrom {\n            edges {\n              node {\n                name\n                quest {\n                  name\n                }\n                step\n                location {\n                  name\n                }\n                firstAvailablePhase {\n                  name\n                }\n                target {\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return P=function(){return e},e}var I=y()(P()),D=Object(h.b)(function(e){return{searchString:e.searchString,currentResults:e.currentResults,query:I,queryType:"Bloodborne_listGesture"}},function(e){return{updateSearch:function(n){e(T(n))},updateResults:function(n){e(R(n))}}})(S),U=function(e){function n(){return Object(c.a)(this,n),Object(i.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{page:"Gesture",description:"Find Gestures by name"}),r.a.createElement(D,null),r.a.createElement("div",{className:"row mt-5"},this.props.currentResults.map(function(e,n){var t=e.node.rewardFrom.edges[0].node;return console.log(t),r.a.createElement("div",{className:"col-6 col-md-4",key:n},r.a.createElement("div",{className:"card border-dark"},r.a.createElement("div",{className:"card-header bg-dark text-white"},r.a.createElement("h5",null,e.node.name),r.a.createElement("p",null,"Obtained from ",t.target.name," in ",t.location.name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,t.name),r.a.createElement("small",null,"Step ",t.step," of ",t.quest.name),r.a.createElement("small",{className:"d-block"},"First available during ",t.firstAvailablePhase.name))))})))}}]),n}(a.Component),F=Object(h.b)(function(e){return{currentResults:e.currentResults}})(U);function L(){var e=Object(b.a)(["\n  query searchChalicesByName($search: String!) {\n    Bloodborne_listKeyItem(filter: {\n      node: {\n        isChalice: true,\n        name: {\n          contains: $search\n        }\n      }\n    }) {\n      edges {\n        node {\n          name\n          pickUp {\n            name\n          }\n          droppedByBoss {\n            edges {\n              node {\n                name\n                location {\n                  name\n                }\n                quickestRoute {\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return L=function(){return e},e}var H=y()(L()),G=Object(h.b)(function(e){return{searchString:e.searchString,currentResults:e.currentResults,query:H,queryType:"Bloodborne_listKeyItem"}},function(e){return{updateSearch:function(n){e(T(n))},updateResults:function(n){e(R(n))}}})(S),$=function(e){function n(){return Object(c.a)(this,n),Object(i.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{page:"Chalice",description:"Find Chalices by name"}),r.a.createElement(G,null),r.a.createElement("div",{className:"row mt-5"},this.props.currentResults.map(function(e,n){var t,a;if(e.node.droppedByBoss.edges[0]){var l=e.node.droppedByBoss.edges[0].node;t=l.name.split(" (")[0],a=l.location.name}else e.node.pickUp.name?(t="Chalice Bath Messengers",a=e.node.pickUp.name):(t="an unknown source. Curious.",a="an unknown location.");return r.a.createElement("div",{className:"col-6 col-md-4 mb-3",key:n},r.a.createElement("div",{className:"card border-dark"},r.a.createElement("div",{className:"card-header bg-dark text-white"},r.a.createElement("h5",null,e.node.name),r.a.createElement("p",null,r.a.createElement("i",null,"Found in"),r.a.createElement("br",null),a)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,"Acquired from ",t))))})))}}]),n}(a.Component),M=Object(h.b)(function(e){return{currentResults:e.currentResults}})($),W=function(e){function n(){return Object(c.a)(this,n),Object(i.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,{basename:"/bloodborne-ally-app"},r.a.createElement("div",null,r.a.createElement("div",{id:"wrapper"},r.a.createElement("nav",{className:"container navbar-fixed-top bg-light border-bottom",role:"navigation"},r.a.createElement("h1",{className:"w-100"},"Bloodborne Ally"),r.a.createElement("div",{className:"w-100"},r.a.createElement(m.b,{to:"/",className:"col-2"},"Home"),r.a.createElement(m.b,{to:"/runes",className:"col-2"},"Rune Search"),r.a.createElement(m.b,{to:"/gestures",className:"col-2"},"Gesture Search"),r.a.createElement(m.b,{to:"/chalices",className:"col-2"},"Chalice Search"))),r.a.createElement("div",{className:"container bg-light pt-3",style:{minHeight:"100vh"}},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/chalices",component:M}),r.a.createElement(p.a,{path:"/gestures",component:F}),r.a.createElement(p.a,{path:"/runes",component:A}),r.a.createElement(p.a,{exact:!0,path:"/",component:B}))))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=t(49),X=t(23);var K=Object(X.c)({allTypes:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]},searchString:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;return"SEARCH_UPDATED"===n.type?n.value:e},currentResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return"RESULTS_UPDATED"===n.type?n.value:e}}),V=t(48),J=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):X.d)(Object(X.a)(V.a)),z=Object(X.e)(K,{allTypes:["Bloodborne_Attire","Bloodborne_AttireSet","Bloodborne_AttireSlot","Bloodborne_Badge","Bloodborne_Boss","Bloodborne_Element","Bloodborne_Encounter","Bloodborne_Gesture","Bloodborne_Headstone","Bloodborne_HunterTool","Bloodborne_Imprint","Bloodborne_KeyItem","Bloodborne_Location","Bloodborne_LootSource","Bloodborne_Offhand","Bloodborne_Phase","Bloodborne_Quest","Bloodborne_Rune","Bloodborne_Shape","Bloodborne_Weapon","Bloodborne_WeaponVersion"],searchString:"",currentResults:[]},J),Y=new Q.a({uri:"https://bloodborne-ally-9834e999.us-east1.slicknode.com",credentials:"same-origin"});o.a.render(r.a.createElement(h.a,{store:z},r.a.createElement(f.b,{client:Y},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.db258700.chunk.js.map