(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,n,t){e.exports=t(75)},56:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(42),l=t.n(o),c=(t(56),t(26)),s=t(27),i=t(33),u=t(29),d=t(34),m=t(30),h=t(19),p=function(e){return e.navLinks.map(function(n,t){return r.a.createElement(m.b,{to:n.url,className:"col-2 text-center",key:t,onClick:function(){return e.updateResults([])}},n.name)})},f=t(7);function b(e){return{type:"SEARCH_UPDATED",value:e}}function E(e){return{type:"RESULTS_UPDATED",value:e}}function g(e){return e?{type:"TRUE_TO_FALSE",value:e}:{type:"FALSE_TO_TRUE",value:e}}function y(e){return{type:"NOTHING_UPDATED",value:e}}var v=Object(f.b)(function(e){return{navLinks:e.navLinks}},function(e){return{updateResults:function(n){e(E(n))}}})(p),N=t(16),_=t(20),w=t(14),B=t.n(w),k=function(e){return r.a.createElement("header",{className:"text-left mb-4"},r.a.createElement("div",{className:"w-75 p-2 mx-auto rounded shadow bg-danger text-white"},r.a.createElement("h5",{className:"m-0"},"Note: The Bloodborne Ally API is still in development.",r.a.createElement("br",null),r.a.createElement("small",null,"Apps will not be able to make queries without the owner of of the API activating it. To use the API in this app or another, contact the author at github.com/char-cole for more info."))),r.a.createElement("h2",{className:"font-weight-bold"},e.page),r.a.createElement("h5",{className:"pr-5"},e.description||"Find "+e.page+" by name"))},T=function(){return r.a.createElement("div",{className:"col-12 col-md-6 p-5"},r.a.createElement("div",{className:"border border-danger rounded p-1"},r.a.createElement("p",{className:"border border-danger rounded p-3"},"There was an ",r.a.createElement("b",null,"error"),". Most likely, the app failed to fetch because the API is asleep. Check the console log for more information.")))};function O(){var e=Object(N.a)(["{\n    __schema {\n      types {\n        name\n        description\n        fields {\n          name\n          description\n          type {\n            name\n            ofType {\n              name\n            }\n          }\n        }\n      }\n    }\n  }"]);return O=function(){return e},e}var R=function(e){var n=B()(O()),t=r.a.createElement("div",{className:"col-12 col-md-6 mt-10 text-left"},r.a.createElement("h5",null,"How to use this API"),r.a.createElement("p",null,"To find a specific entry, valid queries are of the format\xa0",r.a.createElement("code",null,"Bloodborne_get[Type]By[Name/ID]")),r.a.createElement("p",null,"To list all entries (currently capped at first 10 results), valid queries are of the format\xa0",r.a.createElement("code",null,"Bloodborne_list[Type]"),". This query allows filters."),r.a.createElement("p",null,'In a GraphQL API, fields can be populated by specific entries of other type. For example, the type "Location" has a field named "headstone". Instead of a String, the value of this field is a "Bloodborne_Headstone". When querying a Location, the query can extend into the fields of the Headstone type.'),r.a.createElement("p",null,"This allows a single query to begin at any node in the API and reach almost any other node."),r.a.createElement("p",null,"For example, the query ",r.a.createElement("code",null,'Bloodborne_getRuneByName(name: "Blood Rapture 3")')," could return any of the fields of the type Bloodborne_Rune. Since some of these fields are themselves types, it could also return any of the fields of ",r.a.createElement("i",null,"those")," types. This can continue infinitely."),r.a.createElement("p",null,'If we know the rune "Blood Rapture 3" is dropped by an NPC (in this case, Bloody Crow of Cainhurst), we could access the name of a specific Encounter (a step of a Quest) that would be made unavailable by the beginning of whichever Phase "Blood Rapture 3" first becomes available. The following path identifies this information (in this case, a string) in the data object returned by the above query:'),r.a.createElement("p",null,r.a.createElement("code",null,"data.droppedByNPC.edges[0].node.firstAvailablePhase.blocksEncounters.edges[0].node.name")),r.a.createElement("p",null,"This would return the name (",r.a.createElement("code",null,".name"),") of the first encounter (",r.a.createElement("code",null,".edges[0].node"),") in an array of encounters (",r.a.createElement("code",null,".edges"),") that become unavailable (",r.a.createElement("code",null,".blocksEncounters"),") at the start of the Blood Moon phase (",r.a.createElement("code",null,".firstAvailablePhase"),"), which is when the encounter (",r.a.createElement("code",null,".droppedByNPC"),") with Bloody Crow of Cainhurst (",r.a.createElement("code",null,"data.droppedByNPC.edges[0].node.target.name"),") first becomes available during Eileen's Quest (",r.a.createElement("code",null,"data.droppedByNPC.edges[0].node.quest.name"),").")),a=r.a.createElement(_.c,{query:n},function(n){var a=n.loading,o=n.error,l=n.data;if(a)return null;if(o)return console.log(o),r.a.createElement("div",{className:"row"},r.a.createElement(T,null),t);var c=l.__schema.types.sort(function(e,n){var t=[e.name,n.name];return t[0]>t[1]?1:-1});return r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"accordion",className:"col-12 col-md-6"},c.map(function(n,t){return e.allTypes.includes(n.name)?r.a.createElement("div",{key:t,className:"card border-dark mb-1"},r.a.createElement("div",{className:"card-header bg-dark text-left",id:"heading-"+t},r.a.createElement("h5",{className:"mb-0"},r.a.createElement("button",{className:"btn btn-link text-white","data-toggle":"collapse","data-target":"#collapse-"+t,"aria-expanded":"false","aria-controls":"collapse-"+t},n.name))),r.a.createElement("div",{id:"collapse-"+t,className:"collapse","aria-labelledby":"heading-"+t,"data-parent":"#accordion"},r.a.createElement("div",{className:"card-body"},r.a.createElement("small",{className:"px-1 mb-3 d-block"},n.description),r.a.createElement("ul",{className:"text-left list-unstyled py-0 px-1 m-0"},r.a.createElement("li",{className:"row py-2 font-weight-bold"},r.a.createElement("p",{className:"col-5"},"Field"),r.a.createElement("p",{className:"col-7"},"Type")),n.fields.map(function(e,n,t){var a,o=e.type.name;e.type.ofType&&(a="*",o=e.type.ofType.name);var l=" border-bottom";return n===t.length-1&&(l=""),"id"===e.name&&(e.description=""),r.a.createElement("li",{key:n,className:"row py-2"+l},r.a.createElement("div",{className:"col-5 border-right"},e.name,r.a.createElement("span",{className:"text-danger"},a)),r.a.createElement("span",{className:"col-7"},o),r.a.createElement("small",{className:"col-12 text-muted"},e.description))}))))):null})),t)});return r.a.createElement("div",{className:"pb-3"},r.a.createElement(k,{page:"Docs",description:"This page lists the entire schema. Each type displays each of its available fields."}),a)},S=Object(f.b)(function(e){return{allTypes:e.allTypes}})(R),C=function(e){return r.a.createElement("h5",{className:"col-12 text-center"},e.nothing)},x=Object(f.b)(function(e){return{nothing:e.nothing}})(C),q=function(e){function n(){return Object(c.a)(this,n),Object(i.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"componentWillUnmount",value:function(){this.props.updateResults([])}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,{page:this.props.page}),this.props.searchFor,r.a.createElement("div",{className:"row mt-5"},r.a.createElement(x,null),this.props.results))}}]),n}(a.Component),A=t(39),j=t.n(A),P=t(47),I=function(e){return r.a.createElement(_.a,null,function(n){return r.a.createElement("form",{className:"row my-3 mx-0",onSubmit:function(){var t=Object(P.a)(j.a.mark(function t(a){var r,o;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,n.query({query:e.query,variables:{search:(l=e.searchString,l.split(" ").map(function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}).join(" ")),chalice:e.chaliceCheck}});case 3:r=t.sent,o=r.data,e.updateResults(o[e.queryType].edges),console.log(o[e.queryType].edges),o[e.queryType].edges[0]?e.updateNothing(""):e.updateNothing(e.nothingResults);case 8:case"end":return t.stop()}var l},t)}));return function(e){return t.apply(this,arguments)}}()},r.a.createElement("input",{type:"text",className:"w-50 rounded px-1",value:e.searchString,onChange:function(n){return e.updateSearch(n.target.value)}}),r.a.createElement("button",{className:"btn btn-light border border-dark ml-2"},"Search"),e.searchOptions)})};function U(){var e=Object(N.a)(["\nquery getTheseRunes($search: String!) {\n  Bloodborne_listRune(filter: {\n    node: {\n      name: {\n        contains: $search\n      }\n    }\n  }) {\n    edges {\n      node {\n        id\n        name\n        tier\n        effect\n        isCovenant\n        pickUp {\n          name\n        }\n        droppedByNPC {\n          edges {\n            node {\n              name\n              quest {\n                name\n              }\n              step\n              location {\n                name\n              }\n              firstAvailablePhase {\n                name\n              }\n              target {\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"]);return U=function(){return e},e}var L=B()(U()),D=Object(f.b)(function(e){return{searchString:e.searchString,currentResults:e.currentResults,query:L,queryType:"Bloodborne_listRune",nothingResults:"No Runes found. Try Again."}},function(e){return{updateSearch:function(n){e(b(n))},updateResults:function(n){e(E(n))},updateNothing:function(n){e(y(n))}}})(I),F=Object(f.b)(function(e){return{searchFor:r.a.createElement(D,null),page:"Runes",results:e.currentResults.map(function(e,n){var t,a=e.node.name;return e.node.isCovenant?t="This is a covenant rune.":(t="Tier "+e.node.tier,a=e.node.name.slice(0,e.node.name.indexOf(" "+e.node.tier.toString()))),r.a.createElement("div",{className:"col-6 col-md-4 mb-3",key:n},r.a.createElement("div",{className:"card border-dark"},r.a.createElement("div",{className:"card-header bg-dark text-white"},r.a.createElement("h5",null,a),r.a.createElement("p",null,t)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,e.node.effect))))})}},function(e){return{updateResults:function(n){e(E(n))}}})(q);function H(){var e=Object(N.a)(["\n  query searchGesturesByName($search: String!) {\n    Bloodborne_listGesture(filter: {\n      node: {\n        name: {\n          contains: $search\n        }\n      }\n    }) {\n      edges {\n        node {\n          name\n          rewardFrom {\n            edges {\n              node {\n                name\n                quest {\n                  name\n                }\n                step\n                location {\n                  name\n                }\n                firstAvailablePhase {\n                  name\n                }\n                target {\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return H=function(){return e},e}var G=B()(H()),$=Object(f.b)(function(e){return{searchString:e.searchString,currentResults:e.currentResults,query:G,queryType:"Bloodborne_listGesture",nothingResults:"No Gestures found. Try again."}},function(e){return{updateSearch:function(n){e(b(n))},updateResults:function(n){e(E(n))},updateNothing:function(n){e(y(n))}}})(I);E([]);var K=Object(f.b)(function(e){return{searchFor:r.a.createElement($,null),page:"Gestures",results:e.currentResults.map(function(e,n){console.log(e);var t=e.node.rewardFrom.edges[0].node;return r.a.createElement("div",{className:"col-6 col-md-4",key:n},r.a.createElement("div",{className:"card border-dark"},r.a.createElement("div",{className:"card-header bg-dark text-white"},r.a.createElement("h5",null,e.node.name),r.a.createElement("p",null,"Obtained from ",t.target.name," in ",t.location.name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,t.name),r.a.createElement("small",null,"Step ",t.step," of ",t.quest.name),r.a.createElement("small",{className:"d-block"},"First available during ",t.firstAvailablePhase.name))))})}},function(e){return{updateResults:function(n){e(E(n))}}})(q),M=function(e){return r.a.createElement("div",{className:"col-12"},r.a.createElement("label",{htmlFor:"chaliceCheckBox",className:"form-label mr-3"},"Search for Chalices?"),r.a.createElement("input",{id:"chaliceCheckBox",type:"checkbox",value:e.chaliceCheck,onChange:function(){e.toggleChalice(e.chaliceCheck)}}))},W=Object(f.b)(function(e){return{toggleChalice:e.toggleChalice}},function(e){return{toggleChalice:function(n){e(g(n))}}})(M);function Q(){var e=Object(N.a)(["\n  query searchChalicesByName($search: String!, $chalice: Boolean!) {\n    Bloodborne_listKeyItem(filter: {\n      node: {\n        isChalice: $chalice,\n        name: {\n          contains: $search\n        }\n      }\n    }) {\n      edges {\n        node {\n          name\n          pickUp {\n            name\n          }\n          droppedByBoss {\n            edges {\n              node {\n                name\n                location {\n                  name\n                }\n                quickestRoute {\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return Q=function(){return e},e}var X=B()(Q()),V=Object(f.b)(function(e){return{searchString:e.searchString,currentResults:e.currentResults,query:X,queryType:"Bloodborne_listKeyItem",chaliceCheck:e.chaliceCheck,nothingResults:"No Key Items found. Make sure Chalices are toggled on if searching for a Chalice.",searchOptions:r.a.createElement(W,null)}},function(e){return{updateSearch:function(n){e(b(n))},updateResults:function(n){e(E(n))},updateNothing:function(n){e(y(n))}}})(I),J=Object(f.b)(function(e){return{searchFor:r.a.createElement(V,null),page:"Key Items",chaliceCheck:e.chaliceCheck,results:e.currentResults.map(function(e,n){var t,a;if(e.node.droppedByBoss.edges[0]){var o=e.node.droppedByBoss.edges[0].node;t=o.name.split(" (")[0],a=o.location.name}else e.node.pickUp?(t=e.node.isChalice?"Chalice Bath Messengers":"exploration or interaction",a=e.node.pickUp.name):(t="an unknown source. This is probably given by a quest.",a="an unknown location.");return r.a.createElement("div",{className:"col-6 col-md-4 mb-3",key:n},r.a.createElement("div",{className:"card border-dark"},r.a.createElement("div",{className:"card-header bg-dark text-white"},r.a.createElement("h5",null,e.node.name),r.a.createElement("p",null,r.a.createElement("i",null,"Found in"),r.a.createElement("br",null),a)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,"Acquired from ",t))))})}},function(e){return{updateResults:function(n){e(E(n))},toggleChalice:function(n){e(g(n))}}})(q),z=function(e){function n(){return Object(c.a)(this,n),Object(i.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,{basename:"/bloodborne-ally-app"},r.a.createElement("div",null,r.a.createElement("div",{id:"wrapper"},r.a.createElement("nav",{className:"container navbar-fixed-top bg-light border-bottom",role:"navigation"},r.a.createElement("h1",null,"Bloodborne Ally"),r.a.createElement("div",{className:"row"},r.a.createElement(v,null))),r.a.createElement("div",{className:"container bg-light pt-3",style:{minHeight:"100vh"}},r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/items",component:J}),r.a.createElement(h.a,{path:"/gestures",component:K}),r.a.createElement(h.a,{path:"/runes",component:F}),r.a.createElement(h.a,{exact:!0,path:"/",component:S}))))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=t(49),Z=t(18);var ee=Object(Z.c)({allTypes:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]},searchString:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;return"SEARCH_UPDATED"===n.type?n.value:e},currentResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return"RESULTS_UPDATED"===n.type?n.value:"NO_RESULTS"===n.type?[]:e},chaliceCheck:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0;return"FALSE_TO_TRUE"===n.type||"TRUE_TO_FALSE"!==n.type&&e},nothing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;return"NOTHING_UPDATED"===n.type?n.value:e},navLinks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return arguments.length>1&&arguments[1],e}}),ne=t(48),te=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Z.d)(Object(Z.a)(ne.a)),ae=Object(Z.e)(ee,{allTypes:["Bloodborne_Attire","Bloodborne_AttireSet","Bloodborne_AttireSlot","Bloodborne_Badge","Bloodborne_Boss","Bloodborne_Element","Bloodborne_Encounter","Bloodborne_Gesture","Bloodborne_Headstone","Bloodborne_HunterTool","Bloodborne_Imprint","Bloodborne_KeyItem","Bloodborne_Location","Bloodborne_LootSource","Bloodborne_Offhand","Bloodborne_Phase","Bloodborne_Quest","Bloodborne_Rune","Bloodborne_Shape","Bloodborne_Weapon","Bloodborne_WeaponVersion"],searchString:"",currentResults:[],chaliceCheck:!1,nothing:"",navLinks:[{url:"/",name:"Home"},{url:"/runes",name:"Rune Search"},{url:"/gestures",name:"Gesture Search"},{url:"/items",name:"Key Item Search"}]},te),re=new Y.a({uri:"https://bloodborne-ally-9834e999.us-east1.slicknode.com",credentials:"same-origin"});l.a.render(r.a.createElement(f.a,{store:ae},r.a.createElement(_.b,{client:re},r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.65f70cea.chunk.js.map