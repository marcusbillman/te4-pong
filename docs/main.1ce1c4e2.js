parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ARNq":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"E66h":[function(require,module,exports) {
var define;
var process = require("process");
var global = arguments[3];
},{"process":"ARNq"}],"qfD3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("phaser"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=s();return function(){var r,n=p(t);if(e){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default.Scene);var r=f(o);function o(){return n(this,o),r.call(this,{key:"boot"})}return u(o,[{key:"preload",value:function(){var t=this.add.rectangle(400,300,400,30,6710886);this.add.rectangle(t.x,t.y,t.width,t.height,16777215).setScale(0,1)}},{key:"update",value:function(){this.scene.start("menu")}}]),o}();exports.default=y;
},{"phaser":"E66h"}],"lnMF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=i(require("phaser")),e=i(require("./gameConfig"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=c();return function(){var i,o=y(t);if(e){var n=y(this).constructor;i=Reflect.construct(o,arguments,n)}else i=o.apply(this,arguments);return h(this,i)}}function h(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return u(t)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var f=function(i){l(s,t.default.Scene);var o=d(s);function s(){return n(this,s),o.call(this,{key:"play",physics:{arcade:{debug:!1}}})}return r(s,[{key:"create",value:function(){this.state={player1Score:0,player2Score:0,lastWinner:1},this.ball=this.add.rectangle(e.default.width/2,-1/0,20,20,16777215),this.physics.add.existing(this.ball).body.setBounce(1,1).setCollideWorldBounds(!0),this.paddle1=this.add.rectangle(40,e.default.height/2,20,100,16777215),this.paddle2=this.add.rectangle(e.default.width-40,e.default.height/2,20,100,16777215),this.paddles=this.physics.add.group().addMultiple([this.paddle1,this.paddle2]),this.paddles.getChildren().forEach(function(t){t.body.setImmovable(!0).setCollideWorldBounds(!0)}),this.physics.add.collider(this.ball,this.paddles,this.onBallPaddleCollision,null,this),this.goal1=this.add.rectangle(-this.ball.width,0,1,e.default.height).setOrigin(1,0),this.goal2=this.add.rectangle(e.default.width+this.ball.width,0,1,e.default.height).setOrigin(0,0),this.goals=this.physics.add.staticGroup().addMultiple([this.goal1,this.goal2]),this.physics.add.collider(this.ball,this.goals,this.onBallGoalCollision,null,this),this.physics.world.setBoundsCollision(!1,!1,!0,!0),this.keys=this.input.keyboard.addKeys("up, down, w, s, r"),this.serve()}},{key:"serve",value:function(){this.ball.x=e.default.width/2,this.ball.y=this.getStartingY();var t=this.getStartingVector();this.ball.body.setVelocity(t.x,t.y)}},{key:"onBallPaddleCollision",value:function(t,i){var o=(t.y-i.y+i.height/2)/i.height,n=t.body.velocity,s=Math.sqrt(Math.pow(n.x,2)+Math.pow(n.y,2)),r=90*o-45;t.x>e.default.width/2&&(r=-180-r);var l=this.physics.velocityFromAngle(r,s);t.body.setVelocity(l.x,l.y)}},{key:"onBallGoalCollision",value:function(t,i){t.body.stop(),t.x>e.default.width/2?(this.state.player1Score++,this.state.lastWinner=1):(this.state.player2Score++,this.state.lastWinner=2),console.log(this.state),this.time.delayedCall(1e3,this.serve,null,this)}},{key:"update",value:function(t){if(this.keys.up.isDown||this.keys.w.isDown?this.paddle1.body.setVelocityY(-500):this.keys.down.isDown||this.keys.s.isDown?this.paddle1.body.setVelocityY(500):this.paddle1.body.setVelocityY(0),this.ball.body.velocity.x>0&&t%200<10){var e=this.paddle2.y-this.ball.y,i=50*Math.random()+30;e>i?this.paddle2.body.setVelocityY(-500):e<-i?this.paddle2.body.setVelocityY(500):this.paddle2.body.setVelocityY(0)}this.keys.r.isDown&&this.scene.restart()}},{key:"getStartingY",value:function(){return Math.random()*e.default.height}},{key:"getStartingVector",value:function(){var t=200*Math.random()+200;return 2===this.state.lastWinner&&(t*=-1),{x:t,y:800*Math.random()-400}}},{key:"getRotatedVector",value:function(t,e){var i={};return i.x=t.x*Math.cos(e)-t.y*Math.sin(e),i.y=t.x*Math.sin(e)+t.y*Math.cos(e),i}}]),s}();exports.default=f;
},{"phaser":"E66h","./gameConfig":"iFTh"}],"kcKz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("phaser"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=s();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return a(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){i(o,t.default.Scene);var n=f(o);function o(){return r(this,o),n.call(this,{key:"menu"})}return u(o,[{key:"create",value:function(){this.add.text(400,200,"Phaser 3 with Parcel\n\n< play >",{align:"center",fill:"white",fontFamily:"sans-serif",fontSize:48}).setOrigin(.5,0),this.input.on("pointerdown",function(){this.scene.switch("play")},this)}}]),o}();exports.default=y;
},{"phaser":"E66h"}],"CZh0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("phaser"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=s();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){i(o,t.default.Scene);var n=f(o);function o(){return r(this,o),n.call(this,{key:"end"})}return u(o,[{key:"create",value:function(){this.add.image(400,300,"space"),this.add.text(400,200,"Game Over\n\n< menu >",{align:"center",fill:"white",fontFamily:"sans-serif",fontSize:48}).setOrigin(.5,0),this.input.on("pointerdown",function(){this.scene.switch("menu")},this)}}]),o}();exports.default=y;
},{"phaser":"E66h"}],"iFTh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("phaser")),t=l(require("./BootScene")),r=l(require("./PlayScene")),u=l(require("./MenuScene")),a=l(require("./EndScene"));function l(e){return e&&e.__esModule?e:{default:e}}var d={type:e.default.AUTO,width:800,height:600,title:"Phaser 3 with Parcel 📦",url:"https://github.com/samme/phaser-parcel",banner:{text:"white",background:["#FD7400","#FFE11A","#BEDB39","#1F8A70","#004358"]},scene:[t.default,u.default,r.default,a.default]};exports.default=d;
},{"phaser":"E66h","./BootScene":"qfD3","./PlayScene":"lnMF","./MenuScene":"kcKz","./EndScene":"CZh0"}],"epB2":[function(require,module,exports) {
"use strict";var e,u=o(require("phaser")),t=o(require("./gameConfig.js"));function o(e){return e&&e.__esModule?e:{default:e}}function r(){e||(e=new u.default.Game(t.default))}function n(){e&&(e.destroy(!0),e.runDestroy(),e=null)}module.hot&&(module.hot.dispose(n),module.hot.accept(r)),e||r();
},{"phaser":"E66h","./gameConfig.js":"iFTh"}]},{},["epB2"], null)