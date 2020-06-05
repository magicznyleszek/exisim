parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WOs9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.logger=void 0;var e=function(){function e(e){this.autoScroll=e}return e.prototype.log=function(t){var o=document.getElementById("log");null!==o&&(o.insertAdjacentHTML("beforeend",t+"\n"),o.scrollIntoView&&this.autoScroll&&window.innerHeight+window.pageYOffset>=o.offsetHeight-e.safetyOffset&&o.scrollIntoView(!1))},e.safetyOffset=100,e}(),t=new e(!0);exports.logger=t;
},{}],"L0ny":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generator=void 0;var t=function(){function t(){}return t.prototype.getRandomNumber=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},t.prototype.getRandomPercent=function(){return this.getRandomNumber(0,100)},t.prototype.getUniqueName=function(){return(Math.random().toString(36).substring(2)+" "+Date.now().toString(36)).replace(/\b\w/g,function(t){return t.toUpperCase()})},t}(),e=new t;exports.generator=e;
},{}],"Ubuv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Human=void 0;var e=require("./generator"),n=function(){function n(n,t){this.age=0,this.isAdult=!1,this.isAlive=!0,this.name=e.generator.getUniqueName(),this.lifespan=this.generateLifespan(n,t),this.checkIfAlive()}return n.prototype.bumpAge=function(){this.age++,this.isAdult=this.age>=n.pubertyAge,this.checkIfAlive()},n.prototype.generateLifespan=function(t,i){var a=e.generator.getRandomNumber(0,n.maxAge);return 0===a?0:t instanceof n&&i instanceof n?Math.floor(n.lifespanInheritance*((t.lifespan+i.lifespan)/2)+(1-n.lifespanInheritance)*a):a},n.prototype.checkIfAlive=function(){this.isAlive=this.age<this.lifespan},n.getBabyChance=function(e,t){return e.isAdult&&t.isAdult?n.pregnancyChance*n.inRelationshipChance*100:0},n.pregnancyChance=.3,n.maxAge=54,n.pubertyAge=12,n.menopauseAge=72,n.lifespanInheritance=.06,n.inRelationshipChance=.61,n}();exports.Human=n;
},{"./generator":"L0ny"}],"hrU1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Humans=void 0;var t=require("./human"),o=require("./generator"),n=function(){function n(t){this.population=[],this.generateInitialPopulation(t)}return n.prototype.getTotalCount=function(){return this.population.length},n.prototype.getAgeGroupsCount=function(){for(var t={baby:0,adult:0},o=0,n=this.population;o<n.length;o++){n[o].isAdult?t.adult++:t.baby++}return t},n.prototype.growByOneYear=function(){for(var t=0,o=this.population;t<o.length;t++){o[t].bumpAge()}},n.prototype.killRandomHumans=function(t){for(var o=t;o>=0;o--){var n=this.population.length,e=Math.floor(Math.random()*n);this.population[e]=this.population[n-1],this.population.pop()}},n.prototype.buryDead=function(){var t=this.population.length;return this.population=this.population.filter(function(t){return t.isAlive}),t-this.population.length},n.prototype.makeLove=function(){var o=0;if(this.population.length<=1)return o;for(var n=this.population.length-1;n>=0;n--){var e=this.population[n],i=this.getRandomHuman(n);if(this.isLoveFruitful(e,i)){var r=new t.Human(e,i);this.population.push(r),o++}}return o},n.prototype.getHuman=function(t){return this.population[t]},n.prototype.getRandomHuman=function(t){for(var n=o.generator.getRandomNumber(0,this.population.length-1);n===t;)n=o.generator.getRandomNumber(0,this.population.length-1);return this.population[n]},n.prototype.isLoveFruitful=function(n,e){return t.Human.getBabyChance(n,e)>o.generator.getRandomPercent()},n.prototype.generateInitialPopulation=function(o){for(var n=0;n<o;n++)this.population.push(new t.Human)},n}();exports.Humans=n;
},{"./human":"Ubuv","./generator":"L0ny"}],"l8WT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Existence=exports.CATASTROPHES=exports.PopulationStatus=void 0;var t,e=require("./logger"),i=require("./humans"),n=require("./generator");exports.PopulationStatus=t,function(t){t.Extinct="extinct",t.Struggling="struggling",t.Safe="safe"}(t||(exports.PopulationStatus=t={}));var a=[{type:"☄️",killMin:0,killMax:75},{type:"🤢",killMin:30,killMax:60},{type:"🏜",killMin:10,killMax:28},{type:"🥶",killMin:15,killMax:20},{type:"🌡️",killMin:16,killMax:19},{type:"🌊",killMin:3,killMax:13},{type:"🔥",killMin:11,killMax:12},{type:"🌋",killMin:1,killMax:9},{type:"🌪",killMin:6,killMax:6},{type:"⚔️",killMin:2,killMax:3},{type:"🙏",killMin:1,killMax:2}];exports.CATASTROPHES=a;var o=function(){function o(t,n){this.lifeIntervalId=0,this.currentYear=0,this.isLoggingEnabled=!1,this.targetPopulation=t,this.humans=new i.Humans(o.initialPopulation),this.isLoggingEnabled=n,this.isLoggingEnabled&&(e.logger.log(o.longLine),e.logger.log(this.humans.getTotalCount()+" humans appeared."))}return o.prototype.startLife=function(){this.lifeIntervalId=window.setInterval(this.simulateOneYear.bind(this),o.yearTime)},o.prototype.simulateOneYear=function(){this.bumpYear();var t=this.humans.getTotalCount(),e=this.humans.makeLove(),i=this.humans.buryDead(),n=this.applyRandomCatastrophe(),a=Math.abs(this.humans.getTotalCount()+i-e-t);this.isLoggingEnabled&&this.logYear(e,n,i+a),this.checkGoals()},o.prototype.getPopulationStatus=function(){return 0===this.humans.getTotalCount()?t.Extinct:this.humans.getTotalCount()>=this.targetPopulation?t.Safe:t.Struggling},o.prototype.getRandomCatastrophe=function(){return a[n.generator.getRandomNumber(0,a.length-1)]},o.prototype.logYear=function(t,i,n){var a=[],o=this.humans.getTotalCount();n>t?a.push('<span class="negative">&darr;'+o+"</span>"):t>n?a.push('<span class="positive">&uarr;'+o+"</span>"):a.push("&middot;"+o),a.push("❋"+t),null===i?a.push("✝"+n):a.push(""+i.type+n);var l=this.humans.getAgeGroupsCount();a.push("(👶"+l.baby+" 👩"+l.adult+")"),a.push("y"+this.currentYear),e.logger.log(a.join(" "))},o.prototype.bumpYear=function(){this.currentYear++,this.humans.growByOneYear()},o.prototype.applyRandomCatastrophe=function(){if(a.length>=n.generator.getRandomPercent()){var t=this.getRandomCatastrophe(),e=n.generator.getRandomNumber(t.killMin,t.killMax);return this.humans.killRandomHumans(this.humans.getTotalCount()*(e/100)),t}return null},o.prototype.checkGoals=function(){var e=this.getPopulationStatus();e!==t.Extinct&&e!==t.Safe||(window.clearInterval(this.lifeIntervalId),this.gameOver())},o.prototype.gameOver=function(){var i=this.getPopulationStatus();this.isLoggingEnabled&&(i===t.Extinct?e.logger.log("All humans died."):i===t.Safe&&e.logger.log("Human population reached "+this.targetPopulation+". They're safe now."),e.logger.log(o.longLine))},o.initialPopulation=4169,o.yearTime=100,o.longLine="--------------------------------------------",o}();exports.Existence=o;
},{"./logger":"WOs9","./humans":"hrU1","./generator":"L0ny"}],"QCba":[function(require,module,exports) {
"use strict";var e=require("./existence");window.onload=function(){new e.Existence(1e6,!0).startLife()};
},{"./existence":"l8WT"}]},{},["QCba"], null)
//# sourceMappingURL=src.ce079c98.js.map