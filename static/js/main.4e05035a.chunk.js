(window.webpackJsonpeventmap=window.webpackJsonpeventmap||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(15),n(1)),l=n(2),u=n.n(l),s=n(8),v=n.n(s),m=n(9),f=n.n(m);n(16);var d=4;function h(e){var t=e.rawTimes,n=v()(f()(t,function(e){return e.start.unix()}),function(e){return e.start.format("YYYY-MM-DD")}),a=Object.keys(n).sort(),r=function(e){var t=n[e],a=t[0].start.format("ddd M/D"),r=t.map(function(e){return e.range.format({hideDate:!0})}).join(", ");return o.a.createElement("p",{key:"time-".concat(e)},a," | ",r)};if(a.length<=d)return a.map(r);var i=a[d-1],c=a[a.length-1],l=n[i][0].start,u=n[c][0].start;return a.slice(0,d-1).map(r).concat(o.a.createElement("p",null,"More Times from ",l.twix(u,{allDay:!0}).format()))}var p=function(e){var t=[];if(e.locationFilter)t=e.events.filter(function(t){return t.locationKey=t.location.location.longitude+"&"+t.location.location.latitude,e.locationFilter===t.locationKey});else{var n=0;t=e.events.filter(function(t){return!(n>30)&&(t.locationKey=t.location.location.longitude+"&"+t.location.location.latitude,!!e.inViewEvents[t.locationKey]&&(n+=1,!0))})}var a=t.map(function(t,n){var a=t.timeslots.map(function(e){var t=u()(1e3*e.start_date),n=u()(1e3*e.end_date);return{start:t,end:n,range:t.twix(n)}});return o.a.createElement("a",{href:t.browser_url,className:"eventCard",target:"_blank",key:t.id,eventlocation:t.locationKey,onMouseEnter:function(t){e.updatedHover({locationKey:t.currentTarget.getAttribute("eventlocation"),center:!1})},onMouseLeave:function(t){e.updatedHover({})}},o.a.createElement("li",{className:"event"},o.a.createElement("div",null,o.a.createElement("h3",null,t.title),o.a.createElement("p",null,o.a.createElement("strong",null,t.location.venue)," in ",o.a.createElement("strong",null,t.location.locality)),o.a.createElement(h,{rawTimes:a}),o.a.createElement("p",{className:"eventRSVP"},"Click to RSVP"))))});return a.push(o.a.createElement("div",{className:"eventCard",key:"noevent"},o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("strong",null,"Don't see an event near you? "),o.a.createElement("br",null),o.a.createElement("a",{href:"https://events.elizabethwarren.com/?is_virtual=true",target:"_blank"},"Join a virtual event")," or",o.a.createElement("a",{href:"https://events.elizabethwarren.com/event/create/",target:"_blank"},"host your own event!")))))),o.a.createElement("ul",{className:"eventList"},a)};var g=function(e){var t=Object(a.useState)(""),n=Object(c.a)(t,2),r=n[0],i=n[1],l=[];return null===e.locFilt&&null===e.nearby||(l=o.a.createElement(p,{events:e.events,inViewEvents:e.inViewEvents,locationFilter:e.locationFilter,updatedHover:function(t){return e.updatedHover(t)}})),o.a.createElement("div",{className:null!==e.locFilt||null!==e.nearby?"searchBar activeList":"searchBar"},o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateZip(r)},id:"zipForm"},o.a.createElement("input",{type:"text",id:"zipInput",value:r,onChange:function(e){var t=e.target.value.replace(/\D*/g,"");i(t)},placeholder:"ZIP",required:!0,minLength:"5",maxLength:"5"})),l)},b=n(4),y=n.n(b);n(17);var E=function(e){var t=Object(a.useState)({}),n=Object(c.a)(t,2),r=n[0],i=n[1],l=Object(a.useState)(!1),u=Object(c.a)(l,2),s=u[0],v=u[1],m=Object(a.useRef)(),f=Object(a.useRef)();return Object(a.useEffect)(function(){y.a.accessToken="pk.eyJ1IjoibWlja3QiLCJhIjoiY2sxam1xNmtsMHU5aTNob2N4YndlYXV0byJ9.LWG413QaYVY9bN4kAFu9eg",m.current=new y.a.Map({container:"map",style:"mapbox://styles/mickt/ck0rlk9834i721clibn70ajsa",zoom:3,hash:!0,center:[-98.5795,39.8283]}),m.current.on("load",function(t){m.current.addSource("locations",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),m.current.addLayer({id:"event-locations",source:"locations",type:"symbol",layout:{"icon-allow-overlap":!0,"icon-anchor":"bottom","icon-size":.5,"icon-image":"w-marker-icon"},paint:{"icon-opacity":["match",["feature-state","highlight"],1,0,1]}}),m.current.addLayer({id:"event-locations-highlight",source:"locations",type:"symbol",layout:{"icon-allow-overlap":!0,"icon-image":"w-marker-icon-highlighted","icon-anchor":"bottom","icon-size":.6},paint:{"icon-opacity":["match",["feature-state","highlight"],1,1,0]}}),m.current.on("click",function(t){e.setLocationFilter(null)}),m.current.on("click","event-locations",function(t){e.setLocationFilter(t.features[0].properties.locationKey),m.current.getZoom()<8?m.current.jumpTo({center:t.features[0].geometry.coordinates,zoom:10}):m.current.jumpTo({center:t.features[0].geometry.coordinates})}),m.current.on("mouseenter","event-locations",function(){m.current.getCanvas().style.cursor="pointer"}),m.current.on("mouseleave","event-locations",function(){m.current.getCanvas().style.cursor=""}),m.current.on("idle",function(t){var n=m.current.queryRenderedFeatures({layers:["event-locations","event-locations-highlight"]}),a={};n.forEach(function(e){a[e.properties.locationKey]=!0}),e.inViewEvents(a)}),v(!0)})},[]),Object(a.useEffect)(function(){if(!1!==s){var t,n,a=e.locationFilter||e.highlightedEvent.locationKey,o=r[a]&&r[a].id||null;t=o,n=e.highlightedEvent.center,f.current&&m.current.setFeatureState({source:"locations",id:f.current},{highlight:0}),t&&m.current.setFeatureState({source:"locations",id:t},{highlight:1}),f.current=t,n&&m.current.jumpTo({center:n,zoom:10})}},[e.highlightedEvent,e.locationFilter,s]),Object(a.useEffect)(function(){if(!1!==s){var e={type:"FeatureCollection",features:Object.values(r)};m.current.getSource("locations").setData(e)}},[r,s]),Object(a.useEffect)(function(){if(null!==e.events){var t={};e.events.forEach(function(e,n){var a=e.location.location.longitude+"&"+e.location.location.latitude;t[a]={type:"Feature",id:n+1,properties:{locationKey:a},geometry:{type:"Point",coordinates:[parseFloat(e.location.location.longitude),parseFloat(e.location.location.latitude)]}}}),i(t)}},[e.events]),o.a.createElement("div",{id:"map"})};n(18);var j=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(null),l=Object(c.a)(i,2),u=l[0],s=l[1],v=Object(a.useState)({}),m=Object(c.a)(v,2),f=m[0],d=m[1],h=Object(a.useState)(null),p=Object(c.a)(h,2),b=p[0],y=p[1],j=Object(a.useState)({}),w=Object(c.a)(j,2),O=w[0],F=w[1];return Object(a.useEffect)(function(){fetch("https://warren-events.s3.amazonaws.com/data/events.json").then(function(e){return e.json()}).then(function(e){r(e)})},[]),Object(a.useEffect)(function(){null!=u&&(fetch("https://api.mobilize.us/v1/organizations/1316/events?timeslot_start=gte_now&zipcode="+u).then(function(e){return e.json()}).then(function(e){if(e.data&&e.data.length>0){var t=e.data[0];d({id:t.id,center:[t.location.location.longitude,t.location.location.latitude]})}}),F({}),d({}),y(null))},[u]),o.a.createElement("div",{className:"app"},o.a.createElement(g,{currZip:u,updateZip:function(e){return s(e)},events:n,inViewEvents:O,updatedHover:function(e){return d(e)},locationFilter:b}),o.a.createElement(E,{events:n,setLocationFilter:function(e){return y(e)},highlightedEvent:f,inViewEvents:function(e){return F(e)},locationFilter:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.4e05035a.chunk.js.map