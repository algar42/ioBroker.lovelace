(self.webpackJsonp=self.webpackJsonp||[]).push([[212],{997:function(e,t,r){"use strict";r.r(t),r.d(t,"HuiMarkdownCard",(function(){return x}));var n=r(0),i=r(50),o=r(99),s=(r(209),r(194),function(e,t,r){return e.subscribeMessage((function(e){return t(e.result)}),Object.assign({type:"render_template"},r))});function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){var e=f(["\n      ha-markdown {\n        padding: 0 16px 16px;\n      }\n      ha-markdown.no-header {\n        padding-top: 16px;\n      }\n    "]);return c=function(){return e},e}function u(){var e=f(['\n      <ha-card .header="','">\n        <ha-markdown\n          breaks\n          class=','\n          .content="','"\n        ></ha-markdown>\n      </ha-card>\n    ']);return u=function(){return e},e}function l(){var e=f([""]);return l=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(e,t,r,n,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void r(u)}a.done?t(c):Promise.resolve(c).then(n,i)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function s(e){d(o,n,i,s,a,"next",e)}function a(e){d(o,n,i,s,a,"throw",e)}s(void 0)}))}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var i=C(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return v(this,r)}}function v(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){var t,r=O(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function g(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function w(e){return e.decorators&&e.decorators.length}function E(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function _(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function O(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(e,t,r){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e,t,r,n){var i=function(){(function(){return e});var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!w(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var u=c.extras;if(u){for(var l=0;l<u.length;l++)this.addElementPlacement(u[l],t);r.push.apply(r,u)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=O(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:_(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=_(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var s=t((function(e){i.initializeInstanceElements(e,a.elements)}),r),a=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(E(o.descriptor)||E(i.descriptor)){if(w(o)||w(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(w(o)){if(w(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}g(o,i)}else t.push(o)}return t}(s.d.map(k)),e);return i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}([Object(n.d)("hui-markdown-card")],(function(e,t){var a,f,d,v=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(n,t);var r=y(n);function n(){var t;h(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),e(b(t)),t}return n}(t);return{F:v,d:[{kind:"method",static:!0,key:"getConfigElement",value:(d=p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(0),r.e(1),r.e(3),r.e(12),r.e(80)]).then(r.bind(null,954));case 2:return e.abrupt("return",document.createElement("hui-markdown-card-editor"));case 3:case"end":return e.stop()}}),e)}))),function(){return d.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"markdown",content:"The **Markdown** card allows you to write any text. You can style it **bold**, *italicized*, ~strikethrough~ etc. You can do images, links, and more.\n\nFor more information see the [Markdown Cheatsheet](https://commonmark.org/help)."}}},{kind:"field",decorators:[Object(n.h)()],key:"hass",value:void 0},{kind:"field",decorators:[Object(n.h)()],key:"_config",value:void 0},{kind:"field",decorators:[Object(n.h)()],key:"_content",value:function(){return""}},{kind:"field",decorators:[Object(n.h)()],key:"_unsubRenderTemplate",value:void 0},{kind:"method",key:"getCardSize",value:function(){return void 0===this._config?3:void 0===this._config.card_size?Math.round(this._config.content.split("\n").length/2)+(this._config.title?1:0):this._config.card_size}},{kind:"method",key:"setConfig",value:function(e){var t;if(!e.content)throw new Error("Invalid Configuration: Content Required");(null===(t=this._config)||void 0===t?void 0:t.content)!==e.content&&this._tryDisconnect(),this._config=e}},{kind:"method",key:"connectedCallback",value:function(){j(C(v.prototype),"connectedCallback",this).call(this),this._tryConnect()}},{kind:"method",key:"disconnectedCallback",value:function(){this._tryDisconnect()}},{kind:"method",key:"render",value:function(){return this._config?Object(n.f)(u(),this._config.title,Object(i.a)({"no-header":!this._config.title}),this._content):Object(n.f)(l())}},{kind:"method",key:"updated",value:function(e){if(j(C(v.prototype),"updated",this).call(this,e),this._config&&this.hass){this._tryConnect();var t=e.get("hass"),r=e.get("_config");t&&r&&t.themes===this.hass.themes&&r.theme===this._config.theme||Object(o.a)(this,this.hass.themes,this._config.theme)}}},{kind:"method",key:"_tryConnect",value:(f=p(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this._unsubRenderTemplate&&this.hass&&this._config){e.next=2;break}return e.abrupt("return");case 2:try{this._unsubRenderTemplate=s(this.hass.connection,(function(e){t._content=e}),{template:this._config.content,entity_ids:this._config.entity_id,variables:{config:this._config,user:this.hass.user.name}})}catch(r){this._content=this._config.content,this._unsubRenderTemplate=void 0}case 3:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{kind:"method",key:"_tryDisconnect",value:(a=p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._unsubRenderTemplate){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this._unsubRenderTemplate;case 5:(0,e.sent)(),this._unsubRenderTemplate=void 0,e.next=16;break;case 10:if(e.prev=10,e.t0=e.catch(2),"not_found"!==e.t0.code){e.next=15;break}e.next=16;break;case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,this,[[2,10]])}))),function(){return a.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return Object(n.c)(c())}}]}}),n.a)}}]);
//# sourceMappingURL=chunk.2986968c589ab55a31b3.js.map