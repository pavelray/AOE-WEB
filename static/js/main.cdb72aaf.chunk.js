(window["webpackJsonpaoe-web"]=window["webpackJsonpaoe-web"]||[]).push([[0],{30:function(e,t,n){e.exports=n(58)},58:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(13),l=n.n(r),c=n(3),o=n(2),u=n(27),s={id:null,civilization:null,civilizations:[]};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var d=Object(o.c)({civilizations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CIVILIZATIONS":return p({},e,{civilizations:t.payload});case"GET_CIVILIZATION_BY_ID":return p({},e,{civilization:t.payload});case"SELECT_CIVILIZATION":return p({},e,{id:t.payload});default:return e}},unit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_UNIQUE_UNIT":return t.payload;default:return e}}}),v=n(28),h=Object(o.d)(d,Object(o.a)(v.a)),E=n(6),f=n(7),b=n(9),y=n(8),O=n(10),g=n(5),j=n.n(g),z=n(12),I=n(29),w=n.n(I).a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1"}),N=function(){return function(){var e=Object(z.a)(j.a.mark(function e(t){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/civilizations");case 2:n=e.sent,t({type:"GET_CIVILIZATIONS",payload:n.data.civilizations});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(z.a)(j.a.mark(function t(n){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SELECT_CIVILIZATION",payload:e});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(z.a)(j.a.mark(function t(n){var a;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/civilization/".concat(e));case 2:a=t.sent,n({type:"GET_CIVILIZATION_BY_ID",payload:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(z.a)(j.a.mark(function t(n){var a;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("https://cors-anywhere.herokuapp.com/"+e);case 2:a=t.sent,n({type:"GET_UNIQUE_UNIT",payload:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},T=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.getCivilizations()}},{key:"render",value:function(){var e=this,t=null;return this.props.civilizations.length>0?(t=this.props.civilizations,i.a.createElement("div",{className:"ui tiny horizontal list"},t.map(function(t){return i.a.createElement("div",{className:"item",key:t.id},i.a.createElement("div",{className:"content"},i.a.createElement("span",{className:"header",id:t.id,style:{cursor:"pointer"},onClick:function(t){e.props.selectCivilization(parseInt(t.target.id))}},t.name)))}))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"ui active centered inline loader"}))}}]),t}(a.Component),U=Object(c.b)(function(e){return{civilizations:e.civilizations.civilizations}},function(e){return Object(o.b)({getCivilizations:N,selectCivilization:k},e)})(T),A=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.getUniqueUnit(this.props.url)}},{key:"componentDidUpdate",value:function(e){e.url!==this.props.url&&this.props.getUniqueUnit(this.props.url)}},{key:"render",value:function(){console.log(this.props);var e=this.props.unit;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",{className:"ui dividing header"},"Unique Unit: ",e.name),i.a.createElement("div",{className:"line"},i.a.createElement("p",null,e.description)),i.a.createElement("div",{className:"line"},i.a.createElement("p",null,"Expansion : ",e.expansion)),i.a.createElement("div",{className:"line"},i.a.createElement("p",null,"Age: ",e.age)),i.a.createElement("h5",{className:"ui dividing header"},"Stats"),i.a.createElement("table",{class:"ui red table"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Build Time"),i.a.createElement("th",null,"Reload Time"),i.a.createElement("th",null,"Attack Delay"),i.a.createElement("th",null,"Movement Rate"),i.a.createElement("th",null,"Line Of Sight"),i.a.createElement("th",null,"Hit Point"),i.a.createElement("th",null,"Range"),i.a.createElement("th",null,"Attack"),i.a.createElement("th",null,"Armor"),i.a.createElement("th",null,"Accuracy"))),i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,e.build_time),i.a.createElement("td",null,e.reload_time),i.a.createElement("td",null,e.attack_delay),i.a.createElement("td",null,e.movement_rate),i.a.createElement("td",null,e.line_of_sight),i.a.createElement("td",null,e.hit_points),i.a.createElement("td",null,e.range),i.a.createElement("td",null,e.attack),i.a.createElement("td",null,e.armor),i.a.createElement("td",null,e.accuracy)))))}}]),t}(a.Component),D=Object(c.b)(function(e){return{unit:e.unit}},function(e){return Object(o.b)({getUniqueUnit:C},e)})(A),x=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(e){e.id!==this.props.id&&this.props.getCivilizationById(this.props.id)}},{key:"render",value:function(){var e=this.props.civilization;return null!==e?i.a.createElement("div",{className:"ui segment"},i.a.createElement("h2",{className:"ui dividing header"},e.name),i.a.createElement("div",{className:"description"},i.a.createElement("div",{className:"inline fields"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Army Type: ")," ",i.a.createElement("span",null,e.army_type)),i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Expansion : ")," ",i.a.createElement("span",null,e.expansion)),i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Team Bonus : ")," ",i.a.createElement("span",null,e.team_bonus))),i.a.createElement("h4",{className:"ui dividing header"},"Pros:"),i.a.createElement(L,{bonus:e.civilization_bonus})),i.a.createElement(D,{url:e.unique_unit[0]})):i.a.createElement(i.a.Fragment,null)}}]),t}(a.Component),L=function(e){return i.a.createElement("div",{className:"ui bulleted list"},e.bonus.map(function(e){return i.a.createElement("div",{className:"item",key:e},e)}))},P=Object(c.b)(function(e){return{id:e.civilizations.id,civilization:e.civilizations.civilization}},function(e){return Object(o.b)({getCivilizationById:_},e)})(x),B=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(f.a)(t,[{key:"renderCivilizationDetails",value:function(){return null!==this.props.id?i.a.createElement(i.a.Fragment,null,i.a.createElement(P,null)):i.a.createElement(i.a.Fragment,null)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"ui container"},i.a.createElement("div",{className:"ui segment",style:{marginTop:50}},i.a.createElement(U,null)),this.renderCivilizationDetails()))}}]),t}(a.Component),S=Object(c.b)(function(e){return{civilization:e.civilizations.civilization,civilizations:e.civilizations.civilizations}})(B);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(c.a,{store:h},i.a.createElement(S,{title:"AOE-Web"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.cdb72aaf.chunk.js.map