/* include.js */
!function(t){function e(t,e,a){var n=this;"string"!=typeof t&&(a=e,e=t,t=null),e.constructor!==[].constructor&&(a=e,e=[]),o.unshift([t,e,a]),n.uid=Math.random().toString(36).replace(/[^a-z0-9]+/g,"").substr(0,10),n.checkModuleLoaded(),e.length&&n.each(e,n.parseFiles)}var a={},o=[],n=1,r=document.getElementsByTagName("base")[0],i=document.getElementsByTagName("head")[0];e.prototype.each=function(t,e){var a,o=this;for(a=0;a<t.length&&(void 0===t[a]||e.call(o,t[a],a,t)!==!1);a++);},e.prototype.getId=function(t,e){return(e?"":this.uid+"-")+t.replace(/[^a-z0-9]+/g,"")},e.prototype.getFileName=function(){var t=document.querySelectorAll("script"),e=t[t.length-1],a=document.location.href.split("/"),o=e.src;return a.pop(),a=a.join("/"),o.replace(a,"").substring(1)},e.prototype.checkModuleLoaded=function(){var t=this;t.each(o,function(e,r){var i=e[0],c=e[1],d=e[2],u=[];t.each(c,function(e,o,n){return o=e.push?e[0]:e,n=document.querySelector('[data-id*="'+t.getId(o,1)+'"]'),n&&"LINK"==n.nodeName?void u.push(null):void(void 0!==a[o]&&u.push(a[o]))}),c.length!==u.length&&0!==c.length||(null===i&&r+1===o.length&&(o=[],n=1),d="function"==typeof d?d.apply(this,u):d,a[i||t.getFileName()]=d)})},e.prototype.onModuleLoaded=function(t,e){var r=this;e>o.length?(n--,a[t]=a[t]||n):null===o[0][0]&&(o[0][0]=t),r.checkModuleLoaded()},e.prototype.onLoad=function(t,e){var a=this,o=t.currentTarget||t.srcElement;"load"!==t.type&&"complete"!=o.readyState||(o.setAttribute("data-loaded",!0),a.onModuleLoaded(o.getAttribute("data-module"),o.getAttribute("data-count")),o.attachEvent?o.detachEvent("onreadystatechange",e):o.removeEventListener("load",e))},e.prototype.watchCss=function(t){for(var e=this,a=document.styleSheets,o=a.length,n=t.href.split("//").pop();o--;)if(-1!=a[o].href.indexOf(n))return t.setAttribute("data-loaded",!0),void e.onModuleLoaded(t.getAttribute("data-module"),t.getAttribute("data-count"));setTimeout(function(){e.watchCss.call(e,t)})},e.prototype.attachEvents=function(t,e){var a=this,o=function(){var t=Array.prototype.slice.call(arguments);t.push(o),a.onLoad.apply(a,t)};e?t.attachEvent?t.attachEvent("onreadystatechange",o):t.addEventListener("load",o,!0):a.watchCss(t)},e.prototype.checkExists=function(t,e){var a=!1;return this.each(document.getElementsByTagName(e?"script":"link"),function(e){return e.getAttribute("data-module")&&e.getAttribute("data-module")===t?(a=e,!1):void 0}),a},e.prototype.create=function(t,e,a){var o=this;setTimeout(function(){var c=o.checkExists.call(o,t,a);c||(n++,c=document.createElement(a?"script":"link"),a?(c.async=!0,c.type="text/javascript",c.src=e):(c.media="all",c.href=e,c.rel="stylesheet"),c.setAttribute("data-id",o.getId(t)),c.setAttribute("data-module",t),c.setAttribute("data-count",n),c.setAttribute("data-loaded",!1),r?r.parentNode.insertBefore(c,r):i.appendChild(c),o.attachEvents.call(o,c,a))},0)},e.prototype.parseFiles=function(t){var e,o=t.push?t[0]:t,n=t.push?t[1]:t;return a[o]?void this.checkModuleLoaded():(-1!=n.indexOf("//")||/\.js/.test(n)||/^http/.test(n)||(n=n.replace(/\./g,"/"),n+=".js"),e="js"==n.split(".").pop(),void this.create.call(this,o,n,e))},t.include=t.require=t.define=function(t,a,o){return new e(t,a,o)}}(this);
/* End include.js */

/* include skills and DEPENDENCIES */
include([
   '../AI/DEPENDENCIES/jessica.voice.js',
   '../AI/DEPENDENCIES/jessica.recognition.js'
], function(){
  jessica.setLanguage("en-IN");
  jessica.debug(true);
  jessicaVoice.setDefaultVoice("Hindi Female");

  var globalcmd = "Hey Jessica "
  var commands = { 'hello :ai': helloFunction, 'howdy': helloFunction, 'hi': helloFunction, 'whats up': helloFunction}
  function helloFunction(){
    jessicaVoice.speak("Hi there.");
    console.log("Hi")
  }
  jessica.addCommands(commands);
  jessica.start({autoRestart: true, continuous: true});
});
/* End include skills and DEPENDENCIES */
