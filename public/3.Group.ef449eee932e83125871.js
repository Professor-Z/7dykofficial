webpackJsonp([3],{15:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARxJREFUOBFjZEADpqam2v///08BYjeglBxU+hEjI+MuIJ5z+vTpq8haGGGc0NBQtvv37/cBNWYCxZhg4mj0P6Ah0xUVFYtWr179CyQHNgCk+d69e9uBfCc0Dbi4+5SUlDxBhjCDVHBxcU0EUuG4VGMRV/zw4YPQs2fPtjGC/Pzv379LQEW4nI1FP1joHxMTkx4TKMDI0AwyAawXRIBCmywA0gtyNiyqyDFEjlR/Y1gCMuARhijxAo+YQCmMePWoKkF6QQbMAQr/Q5UiigdKlXOYgYnhtbS0tBhQixlR2qCKgJqnnTlzZiE4EEFpGyi+jwQD9kH1MICT8rVr1/7a2NisACVPoCEmQAzPZGiGgpw9DZgP4lAyE7IiUrMzACDVaaAGRDhYAAAAAElFTkSuQmCC"},29:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(12),s=a(i),u=(n(21),function(e){function t(e){l(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={offsetTops:[],curSection:0},n.moving=!1,n.handleScroll=n.handleScroll.bind(n),n.setScreenHeight=n.setScreenHeight.bind(n),console.log("here"),n}return o(t,e),r(t,[{key:"componentDidMount",value:function(){console.log("mounted"),this.beforeScrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,this.moving=!0,this.changeSlide(0),this.setScreenHeight(),document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"setScreenHeight",value:function(){for(var e=0,t=this.props.children.length;e<t;e++){var n=document.getElementById(this.props.children[e].props.id);console.log(n),n&&(n.style.minHeight=window.innerHeight+"px",console.log(window.innerHeight))}}},{key:"handleScroll",value:function(e){var t=this;this.moving||window.requestAnimationFrame(function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;e-t.beforeScrollTop>0&&t.state.curSection<t.props.children.length-1?(t.changeSlide(t.state.curSection+1),t.moving=!0):e-t.beforeScrollTop<0&&t.state.curSection>0&&(t.changeSlide(t.state.curSection-1),t.moving=!0),t.beforeScrollTop=e})}},{key:"getElementTop",value:function(e){e=document.getElementById(e.props.id);for(var t=e.offsetTop,n=e.offsetParent;null!=n;)t+=n.offsetTop,n=n.offsetParent;return t}},{key:"changeSlide",value:function(e){var t=this,n=document.getElementById(this.props.children[e].props.id);Velocity(n,"scroll",{duration:1e3,offset:-60,complete:function(){t.moving=!1,t.beforeScrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,t.setState({curSection:e})}})}},{key:"handleTab",value:function(e){this.moving=!0,this.changeSlide(e)}},{key:"render",value:function(){var e=this;return s["default"].createElement("div",{className:""},s["default"].createElement("div",{className:"carousel"},this.props.children.map(function(t,a){return s["default"].createElement("div",{key:a,className:"item"+(e.state.curSection===a?" active":""),onClick:e.handleTab.bind(e,a)},e.state.curSection===a?"":s["default"].createElement("img",{src:n(15)}))})),this.props.children)}}]),t}(i.Component));t["default"]=u},85:function(e,t,n){e.exports=n.p+"605fe67f78e353ad137d77184898ec45.png"},86:function(e,t,n){e.exports=n.p+"083d37ea9c491347d99e2b416df98abd.png"},87:function(e,t,n){e.exports=n.p+"05c2a2ac41eb09db24dee94bf27c8a2e.png"},88:function(e,t,n){e.exports=n.p+"72899fc0473c2bdcfe8ae4625efb5752.jpg"},186:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(12),c=a(l),o=n(29),r=a(o),i=function(){var e=[{url:"7点直播.png",name:"7点直播"},{url:"7点读书.png",name:"7点读书"},{url:"7点open day.png",name:"7点open day"}];return c["default"].createElement("main",{className:"group"},c["default"].createElement(r["default"],null,c["default"].createElement("section",{className:"screen-1",id:"screen-1"},c["default"].createElement("img",{src:n(88),alt:"未标题-8.jpg"}),c["default"].createElement("div",{className:"title-1"},"早一点 带你看象牙塔外的世界"),c["default"].createElement("div",{className:"title-2"},"7点一刻 致力于打造大学生职业社群")),c["default"].createElement("section",{className:"screen-2",id:"screen-2"},c["default"].createElement("div",{className:"title-1"},"大学生职业学习社群——7点社群"),c["default"].createElement("div",{className:"title-2"},"带学生了解社会职场，走好进入社会职场的第一步！"),c["default"].createElement("div",{className:"title-3"},"7点一刻汇集各路前辈齐助阵，为学生答疑解惑。是大学生融入社会的捷径。"),c["default"].createElement("div",{className:"title-4"},"7点社群的服务内容"),c["default"].createElement("div",{className:"title-5"},">"),c["default"].createElement("div",{className:"events"},e.map(function(e,t){return c["default"].createElement("div",{className:"event-item",key:t},c["default"].createElement("img",{src:n(220)("./"+e.url),alt:e.name}),c["default"].createElement("div",{className:"name"},e.name))}))),c["default"].createElement("section",{className:"screen-3 info",id:"screen-3"},c["default"].createElement("div",{className:"titles"},c["default"].createElement("div",{className:"title-1"},"7点直播"),c["default"].createElement("div",{className:"title-2"},"在家线上听讲座"),c["default"].createElement("div",{className:"title-3"},"通过直播新媒体，把线下讲座搬到线上。"),c["default"].createElement("div",{className:"title-4"},"帮助更多学生向前辈取经,提升自己的竞争力.")),c["default"].createElement("div",{className:"image"},c["default"].createElement("img",{src:n(86),alt:"7点直播"}))),c["default"].createElement("section",{className:"screen-4 info",id:"screen-4"},c["default"].createElement("div",{className:"titles"},c["default"].createElement("div",{className:"title-1"},"7点读书"),c["default"].createElement("div",{className:"title-2"},"衔接学校和职场"),c["default"].createElement("div",{className:"title-3"},"每本书都是各行业大牛推荐的最实用的书籍。帮助学生迅速了解社会、职场。"),c["default"].createElement("div",{className:"title-4"},"引领学生在求职的路上越走越顺")),c["default"].createElement("div",{className:"image"},c["default"].createElement("img",{src:n(87),alt:"7点直播"}))),c["default"].createElement("section",{className:"screen-5 info",id:"screen-5"},c["default"].createElement("div",{className:"titles"},c["default"].createElement("div",{className:"title-1"},"7点OPEN DAY"),c["default"].createElement("div",{className:"title-2"},"近距离了解名企"),c["default"].createElement("div",{className:"title-3"},"与京东、联想、搜狐、搜狗、苏宁等名企联合举办了企业Open Day活动"),c["default"].createElement("div",{className:"title-4"},"让学生有机会进入企业参观，了解企业文化、工作流程帮助企业更好的向学生展示自己的形象与文化")),c["default"].createElement("div",{className:"image"},c["default"].createElement("img",{src:n(85),alt:"7点直播"})))))};t["default"]=i},198:function(e,t,n){e.exports=n.p+"ce2b81cc6ae75194047c113388434fa6.png"},199:function(e,t,n){e.exports=n.p+"ccc6dafccc442149a49b0901741b5410.png"},200:function(e,t,n){e.exports=n.p+"a1fc154a3dbeed4b89d31668f1d3d296.png"},220:function(e,t,n){function a(e){return n(l(e))}function l(e){return c[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var c={"./7点open day.png":198,"./7点openday 插画.png":85,"./7点直播 插画.png":86,"./7点直播.png":199,"./7点读书 插画.png":87,"./7点读书.png":200,"./未标题-8.jpg":88};a.keys=function(){return Object.keys(c)},a.resolve=l,e.exports=a,a.id=220}});