(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1996:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return l}});n(3146),n(3498);var o=n(7294),i=n(4651),c="gtag".concat(Date.now()),u="gtagscript".concat(Date.now());var a=n(5893),s=n(4155);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var l=function(e){var t=e.Component,n=e.pageProps,l=s.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;return(0,o.useEffect)((function(){!function(e){var t,n;if(null===(t=document.getElementById(u))||void 0===t||t.remove(),null===(n=document.getElementById(c))||void 0===n||n.remove(),e){console.debug("it will set up GA.");var r=document.createElement("script");r.id=c,r.src="https://www.googletagmanager.com/gtag/js?id=".concat(e),r.async=!0,document.head.appendChild(r);var o=document.createElement("script");o.id=u,o.text="\n    window.dataLayer = window.dataLayer || [];\n    function gtag() { dataLayer.push(arguments); }\n    gtag('js', new Date());\n    gtag('config', '".concat(e,"');\n  "),document.head.appendChild(o)}else console.debug("no given tracking-id")}(l)})),function(e){var t=(0,i.useRouter)();(0,o.useEffect)((function(){t.events.on("routeChangeStart",(function(t){window.gtag&&e&&window.gtag("config",e,{page_path:t.pathname})}))}))}(l),(0,a.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1996)}])},3498:function(){},3146:function(){},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u,a=[],s=!1,f=-1;function l(){s&&u&&(s=!1,u.length?a=u.concat(a):f=-1,a.length&&p())}function p(){if(!s){var e=c(l);s=!0;for(var t=a.length;t;){for(u=a,a=[];++f<t;)u&&u[f].run();f=-1,t=a.length}u=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new d(e,t)),1!==a.length||s||c(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var n=e.O();_N_E=n}]);