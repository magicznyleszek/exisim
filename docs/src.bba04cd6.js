parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(){this.loggerEl=document.createElement("pre")}return e.prototype.log=function(e){var t=e;"string"!=typeof e&&(t=JSON.stringify(e)),this.verifyEl()&&(this.loggerEl.innerText+="\n"+t)},e.prototype.verifyEl=function(){return!!document.getElementById(e.loggerId)||(this.loggerEl.id=e.loggerId,document.body.appendChild(this.loggerEl),!0)},e.loggerId="logger",e}(),t=exports.logger=new e;
},{}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(){}return e.prototype.getRandomNumber=function(e,r){var t=new Uint32Array(1);window.crypto.getRandomValues(t);var o=t[0]/4294967296,n=Math.ceil(e),a=Math.floor(r);return Math.floor(o*(a-n+1))+n},e}(),r=exports.generator=new e;
},{}],9:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Human=void 0;var t=require("./generator"),e=function(){function e(t){void 0===t&&(t=e.baseMortality),this.age=0,this.mortality=this.generateMortality(t),this.lifespan=this.generateLifespan()}return e.prototype.bumpAge=function(){this.age++},e.prototype.isDead=function(){return this.age>=this.lifespan},e.prototype.isAdult=function(){return this.age>=e.reproductionAge},e.prototype.generateMortality=function(r){var o=(r+e.baseMortality)/2+t.generator.getRandomNumber(-1,1)/10;return o>=0?parseFloat(o.toFixed(2)):0},e.prototype.generateLifespan=function(){return Math.floor(t.generator.getRandomNumber(0,e.maxAge)*this.mortality)},e.baseMortality=.5,e.maxAge=120,e.reproductionAge=15,e}();exports.Human=e;
},{"./generator":11}],4:[function(require,module,exports) {
"use strict";var t=require("./logger"),e=require("./human"),n=require("./generator"),a=function(){function a(){this.humans=[],this.lifeIntervalId=0,this.currentYear=0,this.generateInitialPopulation(),this.startLife()}return a.prototype.generateInitialPopulation=function(){for(var n=0;n<a.initialPopulation;n++)this.humans.push(new e.Human);t.logger.log("God created "+this.humans.length+" humans.")},a.prototype.startLife=function(){this.lifeIntervalId=window.setInterval(this.simulateOneYear.bind(this),a.yearTime)},a.prototype.simulateOneYear=function(){this.bumpYear();var e=this.buryDead(),n=this.makeLove(),a=this.applyRandomCatastrophicEvent(),r="Year "+this.currentYear+": ☠️ "+(e+a)+", 👶 "+n+", 🌍 "+this.humans.length;a>0&&(r+=" 🌋"),t.logger.log(r),this.checkGoals()},a.prototype.bumpYear=function(){this.currentYear++;for(var t=0,e=this.humans;t<e.length;t++){e[t].bumpAge()}},a.prototype.makeLove=function(){var t=0;if(this.humans.length<=1)return t;for(var r=this.humans.length-1;r>=0;r--){var i=this.humans[r],h=this.getRandomHuman();if(n.generator.getRandomNumber(0,100)<=a.loveChance&&i.isAdult()&&h.isAdult()){var o=new e.Human((i.mortality+h.mortality)/2);this.humans.push(o),t++}}return t},a.prototype.buryDead=function(){for(var t=0,e=this.humans.length-1;e>=0;e--)if(this.humans[e].isDead()){this.humans.splice(e,1);t++}return t},a.prototype.applyRandomCatastrophicEvent=function(){if(n.generator.getRandomNumber(0,100)<=a.catastropheChance){var t=Math.floor(.5*this.humans.length),e=this.humans.slice(0,t);return this.humans=this.humans.slice(t,this.humans.length-1),e.length}return 0},a.prototype.checkGoals=function(){0===this.humans.length?(window.clearInterval(this.lifeIntervalId),t.logger.log("All humans died.")):this.humans.length>=a.targetPopulation&&(window.clearInterval(this.lifeIntervalId),t.logger.log("Human population reached "+a.targetPopulation+". They're safe now."))},a.prototype.getRandomHuman=function(){return this.humans[n.generator.getRandomNumber(0,this.humans.length-1)]},a.initialPopulation=100,a.targetPopulation=1e4,a.yearTime=100,a.loveChance=25,a.catastropheChance=5,a}(),r=new a;
},{"./logger":7,"./human":9,"./generator":11}]},{},[4])
//# sourceMappingURL=src.bba04cd6.map