webpackJsonp([2],{15:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARxJREFUOBFjZEADpqam2v///08BYjeglBxU+hEjI+MuIJ5z+vTpq8haGGGc0NBQtvv37/cBNWYCxZhg4mj0P6Ah0xUVFYtWr179CyQHNgCk+d69e9uBfCc0Dbi4+5SUlDxBhjCDVHBxcU0EUuG4VGMRV/zw4YPQs2fPtjGC/Pzv379LQEW4nI1FP1joHxMTkx4TKMDI0AwyAawXRIBCmywA0gtyNiyqyDFEjlR/Y1gCMuARhijxAo+YQCmMePWoKkF6QQbMAQr/Q5UiigdKlXOYgYnhtbS0tBhQixlR2qCKgJqnnTlzZiE4EEFpGyi+jwQD9kH1MICT8rVr1/7a2NisACVPoCEmQAzPZGiGgpw9DZgP4lAyE7IiUrMzACDVaaAGRDhYAAAAAElFTkSuQmCC"},29:function(e,A,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,A){if(!(e instanceof A))throw new TypeError("Cannot call a class as a function")}function l(e,A){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!A||"object"!=typeof A&&"function"!=typeof A?e:A}function o(e,A){if("function"!=typeof A&&null!==A)throw new TypeError("Super expression must either be null or a function, not "+typeof A);e.prototype=Object.create(A&&A.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),A&&(Object.setPrototypeOf?Object.setPrototypeOf(e,A):e.__proto__=A)}Object.defineProperty(A,"__esModule",{value:!0});var r=function(){function e(e,A){for(var t=0;t<A.length;t++){var n=A[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(A,t,n){return t&&e(A.prototype,t),n&&e(A,n),A}}(),c=t(12),i=n(c),g=(t(21),function(e){function A(e){a(this,A);var t=l(this,(A.__proto__||Object.getPrototypeOf(A)).call(this,e));return t.state={offsetTops:[],curSection:0},t.moving=!1,t.handleScroll=t.handleScroll.bind(t),console.log("here"),t}return o(A,e),r(A,[{key:"componentDidMount",value:function(){console.log("mounted"),this.beforeScrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,this.moving=!0,this.changeSlide(0),document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var A=this;this.moving||window.requestAnimationFrame(function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;e-A.beforeScrollTop>0&&A.state.curSection<A.props.children.length-1?(A.changeSlide(A.state.curSection+1),A.moving=!0):e-A.beforeScrollTop<0&&A.state.curSection>0&&(A.changeSlide(A.state.curSection-1),A.moving=!0),A.beforeScrollTop=e})}},{key:"getElementTop",value:function(e){e=document.getElementById(e.props.id);for(var A=e.offsetTop,t=e.offsetParent;null!=t;)A+=t.offsetTop,t=t.offsetParent;return A}},{key:"changeSlide",value:function(e){var A=this,t=document.getElementById(this.props.children[e].props.id);Velocity(t,"scroll",{duration:1e3,offset:-60,complete:function(){A.moving=!1,A.beforeScrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,A.setState({curSection:e})}})}},{key:"handleTab",value:function(e){this.moving=!0,this.changeSlide(e)}},{key:"render",value:function(){var e=this;return i["default"].createElement("div",{className:""},i["default"].createElement("div",{className:"carousel"},this.props.children.map(function(A,n){return i["default"].createElement("div",{key:n,className:"item"+(e.state.curSection===n?" active":""),onClick:e.handleTab.bind(e,n)},e.state.curSection===n?"":i["default"].createElement("img",{src:t(15)}))})),this.props.children)}}]),A}(c.Component));A["default"]=g},30:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAARVJREFUOBGllD0OwjAMhV+QOABzZ87AREGCnQUJIWDkVIyAqkos7CDRMnEGZmYOUIng1yT8VkCJlziO/dV17CgUySLqiHkAqFDWwLqcAJ2KHmM83FrbbVE3jcpyVcclm4nWerK/bxJUqlOM+kd3dAfNoyYU1tCoucOPq8JZfHuYDPf0MyBmorPDzxD3BcJUtcHMKrmNv/NrJg7ClTGmFJIRC6uxeTwvrSt0mZHcjrcMBJRfsSdJhczI9YkPLDDF9kHYWIKkY73lJKC87T1JOmVGsSeF4bHp7Hm0k823+WJAkSQyJm1TbA4g272sMIaxIgbEKeYAloHRlzH2BTAgIjnFHEAg4faLJLmvnXz6mhq9Rv3xsF0BHLpKKugxOMkAAAAASUVORK5CYII="},93:function(e,A,t){e.exports=t.p+"af2691190d9d58532ce9b2b0472e28bd.png"},94:function(e,A,t){e.exports=t.p+"8f466c9992d6142b15eda1d26cc84031.jpg"},95:function(e,A,t){function n(e){return t(a(e))}function a(e){return l[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var l={"./7点问答 微信公众号.png":93,"./7点问答 首图.jpg":94,"./Oval 10.png":30,"./Rectangle.png":210,"./专业.png":211,"./倪龙云.jpg":212,"./大学生的问答平台—7点问答.png":213,"./徐鹏.jpg":214,"./神秘.png":215,"./解惑.png":216,"./谷元庆.jpg":217,"./韩东君.jpg":218};n.keys=function(){return Object.keys(l)},n.resolve=a,e.exports=n,n.id=95},187:function(e,A,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(A,"__esModule",{value:!0});var a=t(12),l=n(a),o=t(29),r=n(o),c=function(){var e=[{url:"专业.png",name:"专业",des:"这里有经验丰富的员工做导师，他们奋斗在公司一线，担当着各种职务，在这里等待解决你的问题."},{url:"神秘.png",name:"神秘",des:"这里有海量职场相关的问题，并有专业人士解答，付1元钱，就可以偷听到其他问题答案的语音."},{url:"解惑.png",name:"解惑",des:"这里有资深导师供你提问，写下困扰你有关工作、实习的问题，让导师用他们的声音为你答疑解惑."}],A=[{url:"倪龙云.jpg",name:"倪龙云",intro:l["default"].createElement("div",{className:"intro"},"10年互联网行业大咖",l["default"].createElement("br",null),"丹诚资本合伙人")},{url:"韩东君.jpg",name:"韩东君",intro:l["default"].createElement("div",{className:"intro"},"前中国校园新媒体联盟执行主席",l["default"].createElement("br",null),"帝都学生圈、学生价等自媒体创始人")},{url:"谷元庆.jpg",name:"谷元庆",intro:l["default"].createElement("div",{className:"intro"},"腾讯公司产品经理曾在阿里、网易任职",l["default"].createElement("br",null),"著有《产品经理面试攻略》")},{url:"徐鹏.jpg",name:"徐鹏",intro:l["default"].createElement("div",{className:"intro"},"今日头条架构工程师",l["default"].createElement("br",null),"编著《Hadoop 2.X HDFS源码解析》")}];return l["default"].createElement("main",{className:"wenda"},l["default"].createElement(r["default"],null,l["default"].createElement("section",{className:"screen-1",id:"screen-1"},l["default"].createElement("img",{className:"background",src:t(94),alt:"7点问答 首图.jpg"}),l["default"].createElement("div",{className:"title-2"},"大学生的职场、找工作、找实习的问答平台"),l["default"].createElement("div",{className:"title-1"},"大学生的问答平台—7点问答"),l["default"].createElement("img",{className:"qr",src:t(93),alt:"7点问答 微信公众号.png"})),l["default"].createElement("section",{className:"screen-2",id:"screen-2"},l["default"].createElement("div",{className:"features"},e.map(function(e,A){return l["default"].createElement("div",{className:"feature-item",key:A},l["default"].createElement("img",{src:t(95)("./"+e.url),alt:e.name}),l["default"].createElement("div",{className:"name"},l["default"].createElement("img",{src:t(30),alt:"·"}),e.name),l["default"].createElement("div",{className:"des"},e.des))}))),l["default"].createElement("section",{className:"screen-3 info",id:"screen-3"},l["default"].createElement("div",{className:"wave"}),l["default"].createElement("div",{className:"title"},"导师阵容"),l["default"].createElement("div",{className:"tutors"},A.map(function(e,A){return l["default"].createElement("div",{key:A,className:"tutor-item"},l["default"].createElement("img",{src:t(95)("./"+e.url),alt:e.url}),l["default"].createElement("div",{className:"name"},e.name),e.intro)})))))};A["default"]=c},210:function(e,A){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnYAAABQCAYAAACUPjj7AAAAAXNSR0IArs4c6QAABDVJREFUeAHt1sENACAMAzFgbJYHiS04uRvE6SPz7HGGI0CAAAECBAgQ+F5gfZ9AAAIECBAgQIAAgSdg2HkEAgQIECBAgEBEwLCLFCkGAQIECBAgQMCw8wMECBAgQIAAgYiAYRcpUgwCBAgQIECAgGHnBwgQIECAAAECEQHDLlKkGAQIECBAgAABw84PECBAgAABAgQiAoZdpEgxCBAgQIAAAQKGnR8gQIAAAQIECEQEDLtIkWIQIECAAAECBAw7P0CAAAECBAgQiAgYdpEixSBAgAABAgQIGHZ+gAABAgQIECAQETDsIkWKQYAAAQIECBAw7PwAAQIECBAgQCAiYNhFihSDAAECBAgQIGDY+QECBAgQIECAQETAsIsUKQYBAgQIECBAwLDzAwQIECBAgACBiIBhFylSDAIECBAgQICAYecHCBAgQIAAAQIRAcMuUqQYBAgQIECAAAHDzg8QIECAAAECBCIChl2kSDEIECBAgAABAoadHyBAgAABAgQIRAQMu0iRYhAgQIAAAQIEDDs/QIAAAQIECBCICBh2kSLFIECAAAECBAgYdn6AAAECBAgQIBARMOwiRYpBgAABAgQIEDDs/AABAgQIECBAICJg2EWKFIMAAQIECBAgYNj5AQIECBAgQIBARMCwixQpBgECBAgQIEDAsPMDBAgQIECAAIGIgGEXKVIMAgQIECBAgIBh5wcIECBAgAABAhEBwy5SpBgECBAgQIAAAcPODxAgQIAAAQIEIgKGXaRIMQgQIECAAAEChp0fIECAAAECBAhEBAy7SJFiECBAgAABAgQMOz9AgAABAgQIEIgIGHaRIsUgQIAAAQIECBh2foAAAQIECBAgEBEw7CJFikGAAAECBAgQMOz8AAECBAgQIEAgImDYRYoUgwABAgQIECBg2PkBAgQIECBAgEBEwLCLFCkGAQIECBAgQMCw8wMECBAgQIAAgYiAYRcpUgwCBAgQIECAgGHnBwgQIECAAAECEQHDLlKkGAQIECBAgAABw84PECBAgAABAgQiAoZdpEgxCBAgQIAAAQKGnR8gQIAAAQIECEQEDLtIkWIQIECAAAECBAw7P0CAAAECBAgQiAgYdpEixSBAgAABAgQIGHZ+gAABAgQIECAQETDsIkWKQYAAAQIECBAw7PwAAQIECBAgQCAiYNhFihSDAAECBAgQIGDY+QECBAgQIECAQETAsIsUKQYBAgQIECBAwLDzAwQIECBAgACBiIBhFylSDAIECBAgQICAYecHCBAgQIAAAQIRAcMuUqQYBAgQIECAAAHDzg8QIECAAAECBCIChl2kSDEIECBAgAABAoadHyBAgAABAgQIRAQMu0iRYhAgQIAAAQIEDDs/QIAAAQIECBCICBh2kSLFIECAAAECBAgYdn6AAAECBAgQIBARMOwiRYpBgAABAgQIELio7wMYOsDpJAAAAABJRU5ErkJggg=="},211:function(e,A,t){e.exports=t.p+"d6b2fd2732af408fc42e72b53a07229c.png"},212:function(e,A,t){e.exports=t.p+"024c5af5996ae04e0b3cb458e9179485.jpg"},213:function(e,A,t){e.exports=t.p+"0cb0b17066ce913d903223f5dd3f7286.png"},214:function(e,A,t){e.exports=t.p+"60d56b8cf89f5bdeb045b713a5f2f688.jpg"},215:function(e,A,t){e.exports=t.p+"d16fd80bf9a2f9fd7808c1bda552a21d.png"},216:function(e,A,t){e.exports=t.p+"69001d68260123e771f47149f9e27784.png"},217:function(e,A,t){e.exports=t.p+"7cda58cffa1279b9a93ba5e756d77b2f.jpg"},218:function(e,A,t){e.exports=t.p+"9a5a4dbc9c8927d2bf7af4c357df20a8.jpg"}});