(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,n,a){e.exports=a(75)},56:function(e,n,a){},75:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(42),l=a.n(o),c=(a(56),a(20)),s=a(21),i=a(25),u=a(22),d=a(24),m=a(15),p=a(23),h=a(16),f=a(14),b=a.n(f),E=function(e){return r.a.createElement("header",{className:"text-left mb-4"},r.a.createElement("div",{className:"w-75 p-2 mx-auto rounded border border-warning bg-dark text-white"},r.a.createElement("h5",{className:"m-0"},"Note: The Bloodborne Ally API is not yet in production. Apps will not be able to make queries without the owner of of the API activating it. To use the API in this app or another, contact the author at github.com/char-cole for more info.")),r.a.createElement("h2",{className:"font-weight-bold"},e.page),r.a.createElement("h5",{className:"pr-5"},e.description))};function v(){var e=Object(p.a)(["{\n    __schema {\n      types {\n        name\n        description\n        fields {\n          name\n          description\n          type {\n            name\n            ofType {\n              name\n            }\n          }\n        }\n      }\n    }\n  }"]);return v=function(){return e},e}var y=function(e){var n=b()(v()),a=r.a.createElement("div",{className:"col-12 col-md-6 mt-10 text-left"},r.a.createElement("h5",null,"How to use this API"),r.a.createElement("p",null,"To find a specific entry, valid queries are of the format\xa0",r.a.createElement("code",null,"Bloodborne_get[Type]By[Name/ID]")),r.a.createElement("p",null,"To list all entries (currently capped at first 10 results), valid queries are of the format\xa0",r.a.createElement("code",null,"Bloodborne_list[Type]"),". This query allows filters."),r.a.createElement("p",null,'In a GraphQL API, fields can be populated by specific entries of other type. For example, the type "Location" has a field named "headstone". Instead of a String, the value of this field is a "Bloodborne_Headstone". When querying a Location, the query can extend into the fields of the Headstone type.'),r.a.createElement("p",null,"This allows a single query to begin at any node in the API and reach almost any other node."),r.a.createElement("p",null,"For example, the query ",r.a.createElement("code",null,'Bloodborne_getRuneByName(name: "Blood Rapture 3")')," could return any of the fields of the type Bloodborne_Rune. Since some of these fields are themselves types, it could also return any of the fields of ",r.a.createElement("i",null,"those")," types. This can continue infinitely."),r.a.createElement("p",null,'If we know the rune "Blood Rapture 3" is dropped by an NPC (in this case, Bloody Crow of Cainhurst), we could access the name of a specific Encounter (a step of a Quest) that would be made unavailable by the beginning of whichever Phase "Blood Rapture 3" first becomes available. The following path identifies this information (in this case, a string) in the data object returned by the above query:'),r.a.createElement("p",null,r.a.createElement("code",null,"data.droppedByNPC.edges[0].node.firstAvailablePhase.blocksEncounters.edges[0].node.name")),r.a.createElement("p",null,"This would return the name (",r.a.createElement("code",null,".name"),") of the first encounter (",r.a.createElement("code",null,".edges[0].node"),") in an array of encounters (",r.a.createElement("code",null,".edges"),") that become unavailable (",r.a.createElement("code",null,".blocksEncounters"),") at the start of the Blood Moon phase (",r.a.createElement("code",null,".firstAvailablePhase"),"), which is when the encounter (",r.a.createElement("code",null,".droppedByNPC"),") with Bloody Crow of Cainhurst (",r.a.createElement("code",null,"data.droppedByNPC.edges[0].node.target.name"),") first becomes available during Eileen's Quest (",r.a.createElement("code",null,"data.droppedByNPC.edges[0].node.quest.name"),").")),t=r.a.createElement(h.c,{query:n},function(n){var t=n.loading,o=n.error,l=n.data;if(t)return null;if(o)return console.log(o),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h5",null,"There was an error. Most likely, the API is asleep and could not be accessed. Check the console log for more information.")),a);var c=l.__schema.types.sort(function(e,n){var a=[e.name,n.name];return a[0]>a[1]?1:-1});return r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"accordion",className:"col-12 col-md-6"},c.map(function(n,a){return e.allTypes.includes(n.name)?(console.log(n),r.a.createElement("div",{key:a,className:"card"},r.a.createElement("div",{className:"card-header text-left",id:"heading-"+a},r.a.createElement("h5",{className:"mb-0"},r.a.createElement("button",{className:"btn btn-link","data-toggle":"collapse","data-target":"#collapse-"+a,"aria-expanded":"false","aria-controls":"collapse-"+a},n.name))),r.a.createElement("div",{id:"collapse-"+a,className:"collapse","aria-labelledby":"heading-"+a,"data-parent":"#accordion"},r.a.createElement("div",{className:"card-body"},r.a.createElement("small",{className:"px-1 mb-3 d-block"},n.description),r.a.createElement("ul",{className:"text-left list-unstyled py-0 px-1 m-0"},r.a.createElement("li",{className:"row py-2 font-weight-bold"},r.a.createElement("p",{className:"col-5"},"Field"),r.a.createElement("p",{className:"col-7"},"Type")),n.fields.map(function(e,n,a){var t="",o=e.type.name;e.type.ofType&&(t="*",o=e.type.ofType.name);var l=" border-bottom";return n===a.length-1&&(l=""),"id"===e.name&&(e.description=""),r.a.createElement("li",{key:n,className:"row py-2"+l},r.a.createElement("div",{className:"col-5"},e.name,r.a.createElement("span",{className:"text-danger"},t)),r.a.createElement("span",{className:"col-7"},o),r.a.createElement("small",{className:"col-12 text-muted"},e.description))})))))):null})),a)});return r.a.createElement("div",{className:"pb-3"},r.a.createElement(E,{page:"Docs",description:"This page lists the entire schema. Each type displays each of its available fields."}),t)},g=Object(m.b)(function(e){return{allTypes:e.allTypes}})(y),w=a(26),N=a.n(w),_=a(35);function B(){var e=Object(p.a)(["query getTheseRunes($search: String!) {\n    Bloodborne_listRune(filter: {\n      node: {\n        name: {\n          contains: $search\n        }\n      }\n    }) {\n      edges {\n        node {\n          id\n          name\n          tier\n          effect\n          isCovenant\n          pickUp {\n            name\n          }\n          droppedByNPC {\n            edges {\n              node {\n                name\n                quest {\n                  name\n                }\n                step\n                location {\n                  name\n                }\n                firstAvailablePhase {\n                  name\n                }\n                target {\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }"]);return B=function(){return e},e}var S=function(e){function n(){var e,a;Object(c.a)(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).page="Runes",a.searchRunes=b()(B()),a.capitalize=function(e){return e.split(" ").map(function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}).join(" ")},a}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(E,{page:this.page,description:"Find Runes by name"}),r.a.createElement("div",{className:"row my-3 mx-0"},r.a.createElement("input",{type:"text",className:"w-50 rounded px-1",value:this.props.searchString,onChange:function(n){return e.props.updateSearch(n.target.value)}}),r.a.createElement(h.a,null,function(n){return r.a.createElement("button",{className:"btn btn-secondary ml-2",onClick:Object(_.a)(N.a.mark(function a(){var t,r;return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.query({query:e.searchRunes,variables:{search:e.capitalize(e.props.searchString)}});case 2:t=a.sent,r=t.data,console.log(r),e.props.updateResults(r.Bloodborne_listRune.edges);case 6:case"end":return a.stop()}},a)}))},"Search")})),r.a.createElement("div",{className:"row mt-5"},this.props.currentResults.map(function(e,n){var a,t=e.node.name;return e.node.isCovenant?a="This is a covenant rune.":(a="Tier "+e.node.tier,t=e.node.name.slice(0,e.node.name.indexOf(" "+e.node.tier.toString()))),r.a.createElement("div",{className:"col-6 col-md-4 mb-3",key:n},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",null,t),r.a.createElement("p",null,a)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,e.node.effect))))})))}}]),n}(t.Component);function O(e){return{type:"SEARCH_UPDATED",value:e}}function T(e){return{type:"RESULTS_UPDATED",value:e}}var R=Object(m.b)(function(e){return{searchString:e.searchString,currentResults:e.currentResults}},function(e){return{updateSearch:function(n){e(O(n))},updateResults:function(n){e(T(n))}}})(S);function j(){var e=Object(p.a)(["query listThese($search: String!) {\n    Bloodborne_listGesture(filter: {\n      node: {\n        name: {\n          contains: $search\n        }\n      }\n    }) {\n      edges {\n        node {\n          name\n          rewardFrom {\n            edges {\n              node {\n                name\n                quest {\n                  name\n                }\n                step\n                location {\n                  name\n                }\n                firstAvailablePhase {\n                  name\n                }\n                target {\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }"]);return j=function(){return e},e}var C=function(e){function n(){var e,a;Object(c.a)(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).page="Gesture",a.search=b()(j()),a.capitalize=function(e){var n=e.trim().split(" ").map(function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()});return console.log(n),n.join(" ")},a}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(E,{page:this.page,description:"Find Gestures by name"}),r.a.createElement("div",{className:"row my-3 mx-0"},r.a.createElement("input",{type:"text",className:"w-50 rounded px-1",value:this.props.searchString,onChange:function(n){return e.props.updateSearch(n.target.value)}}),r.a.createElement(h.a,null,function(n){return r.a.createElement("button",{className:"btn btn-secondary",onClick:Object(_.a)(N.a.mark(function a(){var t,r;return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.query({query:e.search,variables:{search:e.capitalize(e.props.searchString)}});case 2:t=a.sent,r=t.data,console.log(r),e.props.updateResults(r.Bloodborne_listGesture.edges);case 6:case"end":return a.stop()}},a)}))},"Search")})),r.a.createElement("div",{className:"row mt-5"},this.props.currentResults.map(function(e,n){var a=e.node.rewardFrom.edges[0].node;return console.log(a),r.a.createElement("div",{className:"col-6 col-md-4",key:n},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",null,e.node.name),r.a.createElement("p",null,"Obtained from ",a.target.name," in ",a.location.name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,a.name),r.a.createElement("small",null,"Step ",a.step," of ",a.quest.name),r.a.createElement("small",{className:"d-block"},"First available during ",a.firstAvailablePhase.name))))})))}}]),n}(t.Component),k=Object(m.b)(function(e){return{searchString:e.searchString,currentResults:e.currentResults}},function(e){return{updateSearch:function(n){e(O(n))},updateResults:function(n){e(T(n))}}})(C),x=a(46),A=a(19),P=function(e){function n(){return Object(c.a)(this,n),Object(i.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(x.a,{basename:"/build"},r.a.createElement("div",null,r.a.createElement("div",{id:"wrapper"},r.a.createElement("nav",{className:"container navbar navbar-inverse navbar-fixed-top bg-light border-bottom",role:"navigation"},r.a.createElement("h1",null,"Bloodborne Ally"),r.a.createElement("a",{href:"/"},"Home"),r.a.createElement("a",{href:"/rune"},"Rune Search"),r.a.createElement("a",{href:"/gesture"},"Gesture Search")),r.a.createElement("div",{className:"container bg-light pt-3",style:{minHeight:"100vh"}},r.a.createElement(A.c,null,r.a.createElement(A.a,{path:"/build/gesture",component:k}),r.a.createElement(A.a,{path:"/build/rune",component:R}),r.a.createElement(A.a,{path:"/",component:g}))))))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(49),I=a(18);var D=Object(I.c)({allTypes:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]},searchString:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;return"SEARCH_UPDATED"===n.type?n.value:e},currentResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return"RESULTS_UPDATED"===n.type?n.value:e}}),L=a(48),U=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):I.d)(Object(I.a)(L.a)),H=Object(I.e)(D,{allTypes:["Bloodborne_Attire","Bloodborne_AttireSet","Bloodborne_AttireSlot","Bloodborne_Badge","Bloodborne_Boss","Bloodborne_Element","Bloodborne_Encounter","Bloodborne_Gesture","Bloodborne_Headstone","Bloodborne_HunterTool","Bloodborne_Imprint","Bloodborne_KeyItem","Bloodborne_Location","Bloodborne_LootSource","Bloodborne_Offhand","Bloodborne_Phase","Bloodborne_Quest","Bloodborne_Rune","Bloodborne_Shape","Bloodborne_Weapon","Bloodborne_WeaponVersion"],searchString:"",currentResults:[]},U),F=new q.a({uri:"https://bloodborne-ally-9834e999.us-east1.slicknode.com",credentials:"same-origin"});l.a.render(r.a.createElement(m.a,{store:H},r.a.createElement(h.b,{client:F},r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.1ec93422.chunk.js.map