(this.webpackJsonpblogSPA=this.webpackJsonpblogSPA||[]).push([[0],{19:function(e,t,a){e.exports=a(36)},24:function(e,t,a){},25:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(16),i=a.n(c),l=(a(24),a(4)),r=a(5),s=a(7),d=a(6),m=a(8),u=a(3),h=a(9);var p=function(){return o.a.createElement("div",{className:"about"},o.a.createElement("svg",{className:"svg-about",width:"400",height:"200",viewBox:"30 -10 40 40"},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"gradient",x1:"0",x2:"0",y1:"0",y2:"1"},o.a.createElement("stop",{offset:"10%",stopColor:"#58B2DC"}),o.a.createElement("stop",{offset:"95%",stopColor:"#81C7D4"})),o.a.createElement("pattern",{id:"wave",x:"0",y:"0",width:"120",height:"20",patternUnits:"userSpaceOnUse"},o.a.createElement("path",{id:"wavePath",d:"M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z",mask:"url(#mask)",fill:"url(#gradient)"},o.a.createElement("animateTransform",{attributeName:"transform",begin:"0s",dur:"2.5s",type:"translate",from:"0,0",to:"40,0",repeatCount:"indefinite"})))),o.a.createElement("text",{textAnchor:"middle",x:"50",y:"15",fill:"url(#gradient)",fillOpacity:"0.5"},"\u4e94\u5341\u9234\u5ddd"),o.a.createElement("text",{textAnchor:"middle",x:"50",y:"15",fill:"url(#wave)",fillOpacity:"0.8"},"\u4e94\u5341\u9234\u5ddd")))},b=(a(25),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={error:"",isLoaded:!1,articles:[]},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://qootest.com/posts").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,articles:t.reverse()})})).catch((function(t){e.setState({error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.articles;return""!==t?o.a.createElement("div",null,t):a?o.a.createElement("div",{className:"list-group"},n.map((function(e){return o.a.createElement(u.b,{key:e.id,className:"list-group__item",to:"/article/".concat(e.id)},o.a.createElement("div",{className:"list-group__id"},e.id),o.a.createElement("div",{className:"list-group__title"},e.title))}))):o.a.createElement("div",{className:"loading"},"loading...")}}]),t}(n.Component)),E=a(11),f=(a(34),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleBack=function(){a.id=""},a.changeEditMode=function(){var e=a.state.isInEditMode;a.setState({isInEditMode:!e})},a.handleInputChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.handleDelete=function(){var e=a.state.id;fetch("https://qootest.com/posts/".concat(e),{method:"DELETE"}).then((function(){a.props.history.push("/list")})).catch((function(e){a.setState({error:e})}))},a.handleSend=function(){var e=a.state,t=e.id,n=e.title,o=e.author,c=e.body,i=JSON.stringify({title:n,author:o,body:c});fetch("https://qootest.com/posts/".concat(t),{method:"PUT",body:i,headers:new Headers({"Content-Type":"application/json"})}).then((function(){a.setState({isInEditMode:!1})})).catch((function(e){console.log(e)}))},a.state={title:"",body:"",author:"",isLoaded:!1,isInEditMode:!1,id:a.props.match.params.articleId},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.id;fetch("https://qootest.com/posts/".concat(t)).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,title:t.title,body:t.body,author:t.author,createdAt:t.createdAt})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.isInEditMode,a=e.isLoaded,n=e.title,c=e.body,i=e.author,l=e.createdAt;return a?o.a.createElement("div",{className:"article"},t?o.a.createElement("input",{className:"article__editTitle",type:"text",name:"title",onChange:this.handleInputChange,placeholder:"Enter Title Here",defaultValue:n}):o.a.createElement("div",{className:"article__title"},"Title: ",n),o.a.createElement("div",{className:"article__detail"},t?o.a.createElement("input",{className:"article__detail",defaultValue:i,name:"author",onChange:this.handleInputChange}):o.a.createElement("div",{className:"article__detail__author"},"Author: ",i),o.a.createElement("div",{className:"article__detail__create"},"Created at: ",l)),t?o.a.createElement("textarea",{className:"article__editContent",defaultValue:c,name:"body",onChange:this.handleInputChange}):o.a.createElement("div",{className:"article__content"},c),o.a.createElement("div",{className:"article__btn"},o.a.createElement(u.b,{className:"btn btn__back",to:"/list"},"Back"),t?o.a.createElement("button",{className:"btn btn__send",onClick:this.handleSend},"Send"):o.a.createElement("button",{className:"btn btn__edit",onClick:this.changeEditMode},"Edit"),o.a.createElement("button",{className:"btn btn__delete",onClick:this.handleDelete},"Delete"))):o.a.createElement("div",{className:"loading"},"loading...")}}]),t}(n.Component)),_=(a(35),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleInputChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,o=t.author,c=t.body,i=JSON.stringify({title:n,author:o,body:c});fetch("https://qootest.com/posts/",{method:"POST",body:i,headers:new Headers({"Content-Type":"application/json"})}).then((function(){a.props.history.push("/list")})).catch((function(e){console.log(e)}))},a.state={title:"",body:"",author:""},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.body,n=e.author;return o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post__title"},"title: ",o.a.createElement("input",{value:t,name:"title",onChange:this.handleInputChange})),o.a.createElement("div",{className:"post__author"},"author: ",o.a.createElement("input",{value:n,name:"author",onChange:this.handleInputChange})),o.a.createElement("textarea",{className:"post__textarea",value:a,name:"body",onChange:this.handleInputChange}),o.a.createElement("button",{className:"btn btn__submit",onClick:this.onSubmit},"Submit"))}}]),t}(n.Component)),v=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement("div",{className:"wrapper"},o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"header__img"}),o.a.createElement("div",{className:"navbar"},o.a.createElement(u.b,{className:"navbar__btn navbar__btn__about",to:"/about"},"ABOUT"),o.a.createElement(u.b,{className:"navbar__btn navbar__btn__post",to:"/post"},"POST"),o.a.createElement(u.b,{className:"navbar__btn navbar__btn__list",to:"/list"},"LIST")))),o.a.createElement("main",null,o.a.createElement("div",{className:"main__background"}),o.a.createElement("div",{className:"main__content"},o.a.createElement(h.a,{exact:!0,path:"/",component:b}),o.a.createElement(h.a,{path:"/about",component:p}),o.a.createElement(h.a,{path:"/post/",component:_}),o.a.createElement(h.a,{path:"/list",component:b}),o.a.createElement(h.a,{path:"/article/:articleId",component:f}))),o.a.createElement("footer",null,"Made by Ponchimeow")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.15c69972.chunk.js.map