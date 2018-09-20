!(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react"),require("viewerjs"),require("viewerjs/dist/viewer.min.css")):"function"==typeof define&&define.amd?define(["react","viewerjs","viewerjs/dist/viewer.min.css"],t):e.RcViewer=t(e.React,e.Viewer)}(this,function(e,t){"use strict";var n="default"in e?e.default:e;t=t&&t.hasOwnProperty("default")?t.default:t;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();return function(o){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.container=null,t.viewer=null,t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e.Component),i(a,[{key:"componentDidMount",value:function(){this.viewerInit()}},{key:"getViewer",value:function(){return{viewer:this.viewer,container:this.container}}},{key:"componentDidUpdate",value:function(){this.viewer&&!this.isIdentical()&&this.viewerInit()}},{key:"componentWillUnmount",value:function(){this.viewer&&this.viewer.destroy()}},{key:"isIdentical",value:function(){var e=this.viewer.images||[];this.viewer.update();var t=this.viewer.images||[];return!e.length&&!t.length||e.length===t.length&&t.every(function(t,n){return e[n]===t&&t.src===e[n].src})}},{key:"viewerInit",value:function(){this.viewer&&this.viewer.destroy();var e=this.props,n=e.options,i=void 0===n?{}:n,o=e.children;this.viewer=new t(this.container,r({navbar:!(!Array.isArray(o)||!o.length)},i))}},{key:"render",value:function(){var e=this,t=this.props,i=t.children,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["children"]);return n.createElement("div",r({ref:function(t){e.container=t}},o),i)}}]),a}()}));
