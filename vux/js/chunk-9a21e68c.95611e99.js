(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a21e68c"],{"19e9":function(n,e,t){var o,r,i;
/*!
	Autosize 3.0.21
	license: MIT
	http://www.jacklmoore.com/autosize
*/
/*!
	Autosize 3.0.21
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function(t,a){r=[e,n],o=a,i="function"===typeof o?o.apply(e,r):o,void 0===i||(n.exports=i)})(0,function(n,e){"use strict";var t="function"===typeof Map?new Map:function(){var n=[],e=[];return{has:function(e){return n.indexOf(e)>-1},get:function(t){return e[n.indexOf(t)]},set:function(t,o){-1===n.indexOf(t)&&(n.push(t),e.push(o))},delete:function(t){var o=n.indexOf(t);o>-1&&(n.splice(o,1),e.splice(o,1))}}}(),o=function(n){return new Event(n,{bubbles:!0})};try{new Event("test")}catch(s){o=function(n){var e=document.createEvent("Event");return e.initEvent(n,!0,!1),e}}function r(n){if(n&&n.nodeName&&"TEXTAREA"===n.nodeName&&!t.has(n)){var e=null,r=n.clientWidth,i=null,a=function(){n.clientWidth!==r&&h()},l=function(e){window.removeEventListener("resize",a,!1),n.removeEventListener("input",h,!1),n.removeEventListener("keyup",h,!1),n.removeEventListener("autosize:destroy",l,!1),n.removeEventListener("autosize:update",h,!1),Object.keys(e).forEach(function(t){n.style[t]=e[t]}),t["delete"](n)}.bind(n,{height:n.style.height,resize:n.style.resize,overflowY:n.style.overflowY,overflowX:n.style.overflowX,wordWrap:n.style.wordWrap});n.addEventListener("autosize:destroy",l,!1),"onpropertychange"in n&&"oninput"in n&&n.addEventListener("keyup",h,!1),window.addEventListener("resize",a,!1),n.addEventListener("input",h,!1),n.addEventListener("autosize:update",h,!1),n.style.overflowX="hidden",n.style.wordWrap="break-word",t.set(n,{destroy:l,update:h}),s()}function s(){var t=window.getComputedStyle(n,null);"vertical"===t.resize?n.style.resize="none":"both"===t.resize&&(n.style.resize="horizontal"),e="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(e)&&(e=0),h()}function c(e){var t=n.style.width;n.style.width="0px",n.offsetWidth,n.style.width=t,n.style.overflowY=e}function u(n){var e=[];while(n&&n.parentNode&&n.parentNode instanceof Element)n.parentNode.scrollTop&&e.push({node:n.parentNode,scrollTop:n.parentNode.scrollTop}),n=n.parentNode;return e}function d(){var t=n.style.height,o=u(n),i=document.documentElement&&document.documentElement.scrollTop;n.style.height="auto";var a=n.scrollHeight+e;0!==n.scrollHeight?(n.style.height=a+"px",r=n.clientWidth,o.forEach(function(n){n.node.scrollTop=n.scrollTop}),i&&(document.documentElement.scrollTop=i)):n.style.height=t}function h(){d();var e=Math.round(parseFloat(n.style.height)),t=window.getComputedStyle(n,null),r="content-box"===t.boxSizing?Math.round(parseFloat(t.height)):n.offsetHeight;if(r!==e?"hidden"===t.overflowY&&(c("scroll"),d(),r="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(n,null).height)):n.offsetHeight):"hidden"!==t.overflowY&&(c("hidden"),d(),r="content-box"===t.boxSizing?Math.round(parseFloat(window.getComputedStyle(n,null).height)):n.offsetHeight),i!==r){i=r;var a=o("autosize:resized");try{n.dispatchEvent(a)}catch(l){}}}}function i(n){var e=t.get(n);e&&e.destroy()}function a(n){var e=t.get(n);e&&e.update()}var l=null;"undefined"===typeof window||"function"!==typeof window.getComputedStyle?(l=function(n){return n},l.destroy=function(n){return n},l.update=function(n){return n}):(l=function(n,e){return n&&Array.prototype.forEach.call(n.length?n:[n],function(n){return r(n,e)}),n},l.destroy=function(n){return n&&Array.prototype.forEach.call(n.length?n:[n],i),n},l.update=function(n){return n&&Array.prototype.forEach.call(n.length?n:[n],a),n}),e.exports=l})},"1b9e":function(n,e,t){"use strict";var o=t("b4e4");e["a"]={mixins:[o["a"]],props:{required:{type:Boolean,default:!1}},created:function(){this.handleChangeEvent=!1},computed:{dirty:{get:function(){return!this.pristine},set:function(n){this.pristine=!n}},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(n){!0===this.pristine&&(this.pristine=!1),this.handleChangeEvent||(this.$emit("on-change",n),this.$emit("input",n))}},data:function(){return{errors:{},pristine:!0,touched:!1}}}},"1cb7":function(n,e,t){"use strict";var o={name:"divider"},r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",{staticClass:"vux-divider"},[n._t("default")],2)},i=[],a=t("2455");function l(n){t("9941")}var s=!1,c=l,u=null,d=null,h=Object(a["a"])(o,r,i,s,c,u,d);e["a"]=h.exports},"1e53":function(n,e,t){"use strict";String,String;var o={name:"box",props:{gap:String,height:String}},r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{style:{margin:n.gap,height:n.height}},[n._t("default")],2)},i=[],a=t("2455"),l=!1,s=null,c=null,u=null,d=Object(a["a"])(o,r,i,l,s,c,u);e["a"]=d.exports},"270e":function(n,e,t){"use strict";var o={name:"inline-desc"},r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("span",{staticClass:"vux-label-desc"},[n._t("default")],2)},i=[],a=t("2455");function l(n){t("edb7")}var s=!1,c=l,u=null,d=null,h=Object(a["a"])(o,r,i,s,c,u,d);e["a"]=h.exports},3846:function(n,e,t){t("9e1e")&&"g"!=/./g.flags&&t("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:t("0bfb")})},"3a64":function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\n.vux-label-desc {\n  font-size:14px;\n  color:#666;\n}\n",""])},"5f99":function(n,e,t){"use strict";Boolean,Boolean,Boolean;var o={name:"x-table",props:{fullBordered:Boolean,cellBordered:{type:Boolean,default:!0},contentBordered:{type:Boolean,default:!0}}},r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",{staticClass:"vux-table",class:{"vux-table-bordered":n.fullBordered,"vux-table-no-cell-bordered":!n.cellBordered,"vux-table-no-content-bordered":!n.contentBordered}},[n._t("default")],2)},i=[],a=t("2455");function l(n){t("af1c")}var s=!1,c=l,u=null,d=null,h=Object(a["a"])(o,r,i,s,c,u,d);e["a"]=h.exports},6824:function(n,e,t){var o=t("b661");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=t("499e").default;r("139a7f4b",o,!0,{})},"6b54":function(n,e,t){"use strict";t("3846");var o=t("cb7c"),r=t("0bfb"),i=t("9e1e"),a="toString",l=/./[a],s=function(n){t("2aba")(RegExp.prototype,a,n,!0)};t("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?s(function(){var n=o(this);return"/".concat(n.source,"/","flags"in n?n.flags:!i&&n instanceof RegExp?r.call(n):void 0)}):l.name!=a&&s(function(){return l.call(this)})},"7d27":function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\n.vux-divider {\n  display: table;\n  white-space: nowrap;\n  height: auto;\n  overflow: hidden;\n  line-height: 1;\n  text-align: center;\n  padding: 10px 0;\n  color: #666;\n}\n.vux-divider:after, .vux-divider:before {\n  content: '';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 50%;\n  background-repeat: no-repeat;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC)\n}\n.vux-divider:before {\n  background-position: right 1em top 50%\n}\n.vux-divider:after {\n  background-position: left 1em top 50%\n}\n",""])},"87b3":function(n,e,t){var o=Date.prototype,r="Invalid Date",i="toString",a=o[i],l=o.getTime;new Date(NaN)+""!=r&&t("2aba")(o,i,function(){var n=l.call(this);return n===n?a.call(this):r})},9121:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,'\n.vux-1px, .vux-1px-t, .vux-1px-b, .vux-1px-tb, .vux-1px-l, .vux-1px-r {\n  position: relative;\n}\n.vux-1px:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200%;\n  border: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  height: 200%;\n  transform-origin: left top;\n  transform: scale(0.5);\n}\n.vux-1px-t:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.vux-1px-b:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.vux-1px-tb:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.vux-1px-tb:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.vux-1px-l:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleX(0.5);\n}\n.vux-1px-r:after {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 100% 0;\n  transform: scaleX(0.5);\n}\n.vux-table {\n  line-height: 40px;\n  position: relative;\n  width: 100%;\n  border-collapse: collapse;\n}\n.vux-table:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.vux-table th {\n  font-weight: 500;\n}\n.vux-table.vux-table-bordered:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-left: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 0;\n  transform: scaleX(0.5);\n}\n.vux-table td, .vux-table th {\n  border-bottom: 1px solid #e0e0e0;\n  border-right: 1px solid #e0e0e0;\n  text-align: center;\n}\n.vux-table td, .vux-table th {\n  position: relative;\n  border-right: 0;\n  border-bottom: 0;\n}\n.vux-table td:before, .vux-table th:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.vux-table.vux-table-no-content-bordered td:before {\n  border-bottom-width: 0;\n}\n.vux-table.vux-table-no-content-bordered tr:last-child td:before {\n  border-bottom-width: 1px;\n}\n.vux-table td:after, .vux-table th:after {\n  content: " ";\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  bottom: 0;\n  border-right: 1px solid #C7C7C7;\n  color: #C7C7C7;\n  transform-origin: 100% 0;\n  transform: scaleX(0.5);\n}\n.vux-table.vux-table-no-cell-bordered td:after, .vux-table.vux-table-no-cell-bordered th:after {\n  border-right-width: 0;\n}\n.vux-table tr td:last-child:after, .vux-table tr th:last-child:after {\n  border-right-width: 0;\n}\n.vux-table.vux-table-bordered tr td:last-child:after, .vux-table.vux-table-bordered tr th:last-child:after {\n  border-right-width: 1px;\n}\n',""])},9941:function(n,e,t){var o=t("7d27");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=t("499e").default;r("2652bb65",o,!0,{})},af1c:function(n,e,t){var o=t("9121");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=t("499e").default;r("c121089a",o,!0,{})},b4e4:function(n,e,t){"use strict";t("6b54"),t("87b3");function o(){return Math.random().toString(36).substring(3,8)}e["a"]={mounted:function(){0},data:function(){return{uuid:o()}}}},b661:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,'/**\n* actionsheet\n*/\n/**\n* en: primary type text color of menu item\n* zh-CN: 菜单项primary类型的文本颜色\n*/\n/**\n* en: warn type text color of menu item\n* zh-CN: 菜单项warn类型的文本颜色\n*/\n/**\n* en: default type text color of menu item\n* zh-CN: 菜单项default类型的文本颜色\n*/\n/**\n* en: disabled type text color of menu item\n* zh-CN: 菜单项disabled类型的文本颜色\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* en: title and content\'s padding-left and padding-right\n* zh-CN: 标题及内容区域的 padding-left 和 padding-right\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* en: border radius\n* zh-CN: 圆角边框\n*/\n/**\n* en: font color\n* zh-CN: 字体颜色\n*/\n/**\n* en: margin-top value between previous button, not works when there is only one button\n* zh-CN: 与相邻按钮的 margin-top 间隙，只有一个按钮时不生效\n*/\n/**\n* en: button height\n* zh-CN: 按钮高度\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: the font color in disabled\n* zh-CN: disabled状态下的字体颜色\n*/\n/**\n* en: font size\n* zh-CN: 字体大小\n*/\n/**\n* en: the font size of the mini type\n* zh-CN: mini类型的字体大小\n*/\n/**\n* en: the line height of the mini type\n* zh-CN: mini类型的行高\n*/\n/**\n* en: the background color of the warn type\n* zh-CN: warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in active\n* zh-CN: active状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the warn type in disabled\n* zh-CN: disabled状态下，warn类型的背景颜色\n*/\n/**\n* en: the background color of the default type\n* zh-CN: default类型的背景颜色\n*/\n/**\n* en: the font color of the default type\n* zh-CN: default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in active\n* zh-CN: active状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in disabled\n* zh-CN: disabled状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the default type in disabled\n* zh-CN: disabled状态下，default类型的背景颜色\n*/\n/**\n* en: the font color of the default type in active\n* zh-CN: active状态下，default类型的字体颜色\n*/\n/**\n* en: the background color of the primary type\n* zh-CN: primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in active\n* zh-CN: active状态下，primary类型的背景颜色\n*/\n/**\n* en: the background color of the primary type in disabled\n* zh-CN: disabled状态下，primary类型的背景颜色\n*/\n/**\n* en: the font color of the plain primary type\n* zh-CN: plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type\n* zh-CN: plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的字体颜色\n*/\n/**\n* en: the border color of the plain primary type in active\n* zh-CN: active状态下，plain的primary类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type\n* zh-CN: plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type\n* zh-CN: plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的字体颜色\n*/\n/**\n* en: the border color of the plain default type in active\n* zh-CN: active状态下，plain的default类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type\n* zh-CN: plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type\n* zh-CN: plain的warn类型的边框颜色\n*/\n/**\n* en: the font color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的字体颜色\n*/\n/**\n* en: the border color of the plain warn type in active\n* zh-CN: active状态下，plain的warn类型的边框颜色\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* en: badge background color\n* zh-CN: badge的背景颜色\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: border radius color\n* zh-CN: 圆角边框的半径\n*/\n/**\n* en: border color\n* zh-CN: 边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 默认状态下圆角边框的颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default background color\n* zh-CN: 默认状态下的背景颜色\n*/\n/**\n* en: selected background color\n* zh-CN: 选中状态下的背景颜色\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/* alias */\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* en: default text color\n* zh-CN: 默认状态下的文本颜色\n*/\n/**\n* en: height\n* zh-CN: 元素高度\n*/\n/**\n* en: line height\n* zh-CN: 元素行高\n*/\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* en: margin-top of title\n* zh-CN: 标题的margin-top\n*/\n/**\n* en: margin-bottom of title\n* zh-CN: 标题的margin-bottom\n*/\n/**\n* en: margin-top of footer title\n* zh-CN: 底部标题的margin-top\n*/\n/**\n* en: margin-bottom of footer title\n* zh-CN: 底部标题的margin-bottom\n*/\n/**\n* toast\n*/\n/**\n* en: text color of content\n* zh-CN: 内容文本颜色\n*/\n/**\n* en: default top\n* zh-CN: 默认状态下距离顶部的高度\n*/\n/**\n* en: position top\n* zh-CN: 顶部显示的高度\n*/\n/**\n* en: position bottom\n* zh-CN: 底部显示的高度\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* en: forward and backward arrows color\n* zh-CN: 前进后退的箭头颜色\n*/\n/**\n* en: text color of week highlight\n* zh-CN: 周末高亮的文本颜色\n*/\n/**\n* en: background color when selected\n* zh-CN: 选中时的背景颜色\n*/\n/**\n* en: text color when disabled\n* zh-CN: 禁用时的文本颜色\n*/\n/**\n* en: text color of today\n* zh-CN: 今天的文本颜色\n*/\n/**\n* en: font size of cell\n* zh-CN: 单元格的字号\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: size of date cell\n* zh-CN: 日期单元格尺寸大小\n*/\n/**\n* en: line height of date cell\n* zh-CN: 日期单元格的行高\n*/\n/**\n* en: text color of header\n* zh-CN: 头部的文本颜色\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* en: text color of cancel button\n* zh-CN: 取消按钮文本颜色\n*/\n/**\n* en: background color\n* zh-CN: 背景颜色\n*/\n/**\n* en: text color of placeholder\n* zh-CN: placeholder文本颜色\n*/\n/**\n* radio\n*/\n/**\n* en: checked icon color\n* zh-CN: 选中状态的图标颜色\n*/\n/**\n* loadmore\n*/\n/**\n* en: not used\n* zh-CN: 未被使用\n*/\n/**\n* loading\n*/\n/**\n* en: z-index\n* zh-CN: z-index\n*/\n.weui-cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui-cells:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n}\n.weui-cells:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 100%;\n  transform: scaleY(0.5);\n}\n.weui-cells__title {\n  margin-top: 0.77em;\n  margin-bottom: 0.3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #999999;\n  font-size: 14px;\n}\n.weui-cells__title + .weui-cells {\n  margin-top: 0;\n}\n.weui-cells__tips {\n  margin-top: .3em;\n  color: #999999;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui-cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.weui-cell:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  transform-origin: 0 0;\n  transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-cell:first-child:before {\n  display: none;\n}\n.weui-cell_primary {\n  -ms-flex-align: start;\n      align-items: flex-start;\n}\n.weui-cell__bd {\n  -ms-flex: 1;\n      flex: 1;\n}\n.weui-cell__ft {\n  text-align: right;\n  color: #999999;\n}\n.vux-cell-justify {\n  height: 1.41176471em;\n}\n.vux-cell-justify.vux-cell-justify:after {\n  content: ".";\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  height: 0;\n}\n.weui-label {\n  display: block;\n  width: 105px;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui-input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  -webkit-appearance: none;\n  background-color: transparent;\n  font-size: inherit;\n  color: inherit;\n  height: 1.41176471em;\n  line-height: 1.41176471;\n}\n.weui-input::-webkit-outer-spin-button, .weui-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.weui-textarea {\n  display: block;\n  border: 0;\n  resize: none;\n  width: 100%;\n  color: inherit;\n  font-size: 1em;\n  line-height: inherit;\n  outline: 0;\n}\n.weui-textarea-counter {\n  color: #B2B2B2;\n  text-align: right;\n}\n.weui-cell_warn .weui-textarea-counter {\n  color: #E64340;\n}\n.weui-toptips {\n  display: none;\n  position: fixed;\n  transform: translateZ(0);\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 5px;\n  font-size: 14px;\n  text-align: center;\n  color: #FFF;\n  z-index: 5000;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui-toptips_warn {\n  background-color: #E64340;\n}\n.weui-cells_form .weui-cell__ft {\n  font-size: 0;\n}\n.weui-cells_form .weui-icon-warn {\n  display: none;\n}\n.weui-cells_form input, .weui-cells_form textarea, .weui-cells_form label[for] {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.weui-cell_warn {\n  color: #E64340;\n}\n.weui-cell_warn .weui-icon-warn {\n  display: inline-block;\n}\n.vux-x-textarea.weui-cell {\n  -ms-flex-align: start;\n      align-items: flex-start;\n}\n',""])},edb7:function(n,e,t){var o=t("3a64");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=t("499e").default;r("31eb7611",o,!0,{})},fe61:function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d");var o=t("1e53"),r=(t("a481"),t("c5f6"),t("1b9e")),i=t("270e"),a=t("19e9"),l=t.n(a),s=(r["a"],i["a"],String,String,Boolean,Number,String,String,String,Boolean,Boolean,String,Boolean,Number,Number,Number,String,String,String,String,Boolean,{name:"x-textarea",minxins:[r["a"]],mounted:function(){var n=this;this.$slots&&this.$slots["restricted-label"]&&(this.hasRestrictedLabel=!0),this.$nextTick(function(){n.autosize&&n.bindAutosize()})},components:{InlineDesc:i["a"]},props:{title:String,inlineDesc:String,showCounter:{type:Boolean,default:!0},max:Number,value:String,name:String,placeholder:String,readonly:Boolean,required:Boolean,label:String,disabled:Boolean,rows:{type:Number,default:3},cols:{type:Number,default:30},height:Number,autocomplete:{type:String,default:"off"},autocapitalize:{type:String,default:"off"},autocorrect:{type:String,default:"off"},spellcheck:{type:String,default:"false"},autosize:Boolean},created:function(){this.currentValue=this.value},watch:{autosize:function(n){this.unbindAutosize(),n&&this.bindAutosize()},value:function(n){this.currentValue=n,this.onBlur()},currentValue:function(n){this.max&&n&&n.length>this.max&&(this.currentValue=n.slice(0,this.max)),this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)}},data:function(){return{hasRestrictedLabel:!1,currentValue:"",errorTip:""}},computed:{count:function(){var n=0;return this.currentValue&&(n=this.currentValue.replace(/\n/g,"aa").length),n>this.max?this.max:n},textareaStyle:function(){if(this.height)return{height:"".concat(this.height,"px")}},labelStyles:function(){return{width:this.$parent.labelWidth||this.labelWidth+"em",textAlign:this.$parent.labelAlign,marginRight:this.$parent.labelMarginRight}},labelWidth:function(){return this.title.replace(/[^x00-xff]/g,"00").length/2+1},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},methods:{updateAutosize:function(){l.a.update(this.$refs.textarea)},bindAutosize:function(){l()(this.$refs.textarea)},unbindAutosize:function(){l.a.destroy(this.$refs.textarea)},focus:function(){this.$refs.textarea.focus()},onBlur:function(){this.required&&""===this.currentValue?this.errorTip=this.label+"必填哦":this.errorTip=""}},beforeDestroy:function(){this.unbindAutosize()}}),c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{class:{"weui-cell vux-x-textarea":!0,"weui-cell_warn":n.errorTip}},[t("div",{staticClass:"weui-cell__hd"},[n.hasRestrictedLabel?t("div",{style:n.labelStyles},[n._t("restricted-label")],2):n._e(),n._v(" "),n._t("label",[n.title?t("label",{staticClass:"weui-label",class:n.labelClass,style:{width:n.$parent.labelWidth||n.labelWidth+"em",textAlign:n.$parent.labelAlign,marginRight:n.$parent.labelMarginRight},domProps:{innerHTML:n._s(n.title)}}):n._e(),n._v(" "),n.inlineDesc?t("inline-desc",[n._v(n._s(n.inlineDesc))]):n._e()])],2),n._v(" "),t("div",{staticClass:"weui-cell__bd"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:n.currentValue,expression:"currentValue"}],ref:"textarea",staticClass:"weui-textarea",style:n.textareaStyle,attrs:{autocomplete:n.autocomplete,autocapitalize:n.autocapitalize,autocorrect:n.autocorrect,spellcheck:n.spellcheck,placeholder:n.placeholder,readonly:n.readonly,disabled:n.disabled,name:n.name,rows:n.rows,cols:n.cols,maxlength:n.max},domProps:{value:n.currentValue},on:{focus:function(e){n.$emit("on-focus")},blur:function(e){n.$emit("on-blur")},input:function(e){e.target.composing||(n.currentValue=e.target.value)}}}),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:n.showCounter&&n.max,expression:"showCounter && max"}],staticClass:"weui-textarea-counter",on:{click:n.focus}},[t("span",[n._v(n._s(n.count))]),n._v("/"+n._s(n.max)+"\n    ")])])])},u=[],d=t("2455");function h(n){t("6824")}var p=!1,f=h,b=null,g=null,x=Object(d["a"])(s,c,u,p,f,b,g),m=x.exports,v=t("1cb7"),w=t("5f99"),C=(o["a"],v["a"],w["a"],{components:{Box:o["a"],XTextarea:m,Divider:v["a"],XTable:w["a"]},data:function(){return{val:""}},mounted:function(){$("pre,td:first-child").click(this.copy)}}),y=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("box",{attrs:{gap:"0 10px"}},[t("x-textarea",{ref:"comment",attrs:{title:"评论：","inline-desc":"20个字",max:20,placeholder:"请输入评论",autosize:"autosize",rows:3,cols:30},on:{"on-focus":function(e){n.log("focus")},"on-blur":function(e){n.log("blur")}},model:{value:n.val,callback:function(e){n.val=e},expression:"val"}}),t("div",[n._v(n._s(n.val))]),t("pre",[n._v('x-textarea(title="评论：" inline-desc="20个字", :max="20", placeholder="请输入评论" @on-focus="log(\'focus\')" @on-blur="log(\'blur\')" autosize,:rows="6", :cols="30")\n')]),t("x-table",[t("tr",[t("td",[n._v("XTextarea")])]),t("tr",[t("td",[n._v('title=""')])]),t("tr",[t("td",[n._v('inline-desc=""')])]),t("tr",[t("td",[n._v(':show-counter="false"')])]),t("tr",[t("td",[n._v(':max="50"')])]),t("tr",[t("td",[n._v('v-model=""')])]),t("tr",[t("td",[n._v('name=""')])]),t("tr",[t("td",[n._v('placeholder=""')])]),t("tr",[t("td",[n._v(':rows="3"')])]),t("tr",[t("td",[n._v(':cols="30"')])]),t("tr",[t("td",[n._v('height=""')])]),t("tr",[t("td",[n._v("readonly")])]),t("tr",[t("td",[n._v("disabled")])]),t("tr",[t("td",[n._v("autosize")])]),t("tr",[t("td",[n._v('@on-change="commentChange(value){}"')])]),t("tr",[t("td",[n._v('@on-focus="commentFocus(){}"')])]),t("tr",[t("td",[n._v('@on-blur="commentBlur(){}"')])]),t("tr",[t("td",[n._v('span(slot="label")')])]),t("tr",[t("td",[n._v('span(slot="restricted-label")')])]),t("tr",[t("td",[n._v("this.$refs.comment.updateAutosize()")])])])],1)},z=[],N=!1,k=null,A=null,_=null,E=Object(d["a"])(C,y,z,N,k,A,_);e["default"]=E.exports}}]);