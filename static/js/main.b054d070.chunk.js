(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"image":"https://via.placeholder.com/150","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}')},,function(e){e.exports=JSON.parse('[{"name":"Covid Conquerors","description":"Group Project: MangoDB/JS/GraphQL/React","image":"./images/covid_conquerors.png","link":"https://covid-game1.herokuapp.com/game","github":"https://github.com/hlkirkness/group-project-3"},{"name":"Game Watchers","description":"Solo Project: Handlebars/JS/SQL/Express","image":"./images/game_watchers.png","link":"https://game-watchers.herokuapp.com","github":"https://github.com/RyanSzczepanski/Game-Watchers"},{"name":"Drive Through Movie Theater","description":"Group Project: HTML/CSS/JS/API","image":"./images/drive_through_movie_theater.png","link":"https://katrinecollins.github.io/group-1-project","github":"https://github.com/katrinecollins/group-1-project"}]')},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(7),r=c.n(s),a=(c(13),c(2)),o=(c.p,c(14),c(15),c(0));var l=function(e){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark",children:[Object(o.jsx)("a",{className:"left",href:"#",onClick:function(){return e.setPageSelected("home")},children:"Ryan Szczepanski"}),Object(o.jsx)("a",{href:"#contact",onClick:function(){return e.setPageSelected("contact")},children:"Contact"}),Object(o.jsx)("a",{href:"#resume",onClick:function(){return e.setPageSelected("resume")},children:"Resume"}),Object(o.jsx)("a",{href:"#portfolio",onClick:function(){return e.setPageSelected("portfolio")},children:"Portfolio"}),Object(o.jsx)("a",{href:"#about",onClick:function(){return e.setPageSelected("about")},children:"About me"})]})};c(17),c(18);var j=function(e){var t={backgroundImage:"url("+e.image+")"};return Object(o.jsx)("div",{className:"card",children:Object(o.jsx)("div",{className:"img-container",style:t,children:Object(o.jsxs)("div",{className:"card-info",children:[Object(o.jsxs)("h1",{children:[Object(o.jsx)("a",{className:"nostyle",target:"_blank",rel:"noopener noreferrer",href:e.link,children:e.name})," ",Object(o.jsx)("a",{className:"nostyle",target:"_blank",rel:"noopener noreferrer",href:e.github,children:Object(o.jsx)("i",{className:"fab fa-github"})})]}),Object(o.jsx)("p",{children:e.description})]})})})};var d=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{id:"portfolio",className:"section-header"}),Object(o.jsxs)("div",{className:"flex-row",children:[Object(o.jsx)("div",{className:"section-title",children:Object(o.jsx)("h1",{children:"Works"})}),Object(o.jsx)("div",{className:"section-content",children:e.work.map((function(e){var t=e.name,c=e.description,n=e.image,i=e.link,s=e.github;return Object(o.jsx)(j,{name:t,description:c,image:n,link:i,github:s})}))})]})]})};c(19);var b=function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{id:"about",className:"section-header"}),Object(o.jsxs)("div",{className:"flex-row",children:[Object(o.jsx)("div",{className:"section-title",children:Object(o.jsx)("h1",{children:"About Me"})}),Object(o.jsxs)("div",{className:"section-content",children:[Object(o.jsx)("img",{className:"img",src:e.image}),Object(o.jsx)("p",{className:"body",children:e.body})]})]})]})},u=c(3),h=c(5);c(20);var m=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(""),r=Object(a.a)(s,2),l=r[0],j=r[1],d=c.name,b=c.email,m=c.message,x=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));l||(i(Object(h.a)(Object(h.a)({},c),{},Object(u.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(o.jsxs)("section",{className:"contact-body",children:[Object(o.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",c)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:d,onBlur:x})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:b,onBlur:x})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:m,onBlur:x})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};c(21);var x=function(e){return Object(o.jsx)("div",{className:"resume",children:Object(o.jsxs)("div",{className:"flex-row",children:[Object(o.jsxs)("div",{className:"section-title",children:[Object(o.jsx)("h1",{children:"Resume"}),Object(o.jsx)("a",{href:"#",children:"Downlaod"})]}),Object(o.jsxs)("div",{className:"section-content",children:[Object(o.jsx)("h2",{children:"Front-end Proficiencies"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"HTML"}),Object(o.jsx)("li",{children:"CSS"}),Object(o.jsx)("li",{children:"JavaScript"}),Object(o.jsx)("li",{children:"jQuery"}),Object(o.jsx)("li",{children:"Responsive Design"}),Object(o.jsx)("li",{children:"React"}),Object(o.jsx)("li",{children:"Bootstrap"})]}),Object(o.jsx)("h2",{children:"Back-end Proficiencies"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"APIs"}),Object(o.jsx)("li",{children:"Node"}),Object(o.jsx)("li",{children:"Express"}),Object(o.jsx)("li",{children:"MySQL, Sequelize"}),Object(o.jsx)("li",{children:"MongoDB, Mongoos"}),Object(o.jsx)("li",{children:"REST"}),Object(o.jsx)("li",{children:"GraphQL"})]})]})]})})};c(22);var O=function(e){return Object(o.jsx)("footer",{className:"footer mt-auto py-3 bg-dark d-flex flex-column",children:Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("h1",{}),Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/RyanSzczepanski",children:Object(o.jsx)("i",{class:"fab fa-github"})}),Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/ryan-szczepanski-073a7220a/",children:Object(o.jsx)("i",{class:"fab fa-linkedin"})}),Object(o.jsx)("h1",{})]})})},g=c(8),f=c(6);var p=function(){var e=Object(n.useState)("home"),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{setPageSelected:i}),Object(o.jsx)("div",{className:"content flex-fill",children:"home"==c||"about"==c||"portfolio"==c?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{image:f.image,body:f.body}),Object(o.jsx)(d,{work:g})]}):"contact"==c?Object(o.jsx)(m,{}):Object(o.jsx)(x,{})}),Object(o.jsx)(O,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),v()}],[[23,1,2]]]);
//# sourceMappingURL=main.b054d070.chunk.js.map