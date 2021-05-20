(self.webpackChunk_3_l_1_b=self.webpackChunk_3_l_1_b||[]).push([[884],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),b=o,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||u;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<u;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7681:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s},default:function(){return l}});var r=n(2122),o=n(9756),u=(n(7294),n(3905)),a={},i={unversionedId:"Functions/buttonPressed",id:"Functions/buttonPressed",isDocsHomePage:!1,title:"buttonPressed()",description:"buttonPressed()",source:"@site/docs/Functions/buttonPressed.md",sourceDirName:"Functions",slug:"/Functions/buttonPressed",permalink:"/docs/Functions/buttonPressed",editUrl:"https://github.com/hapiel/3L1B/edit/master/docusaurus/docs/Functions/buttonPressed.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"buttonHold()",permalink:"/docs/Functions/buttonHold"},next:{title:"buttonReleased()",permalink:"/docs/Functions/buttonReleased"}},s=[],c={toc:s};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,u.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"buttonPressed()")),(0,u.kt)("p",null,"Returns ",(0,u.kt)("em",{parentName:"p"},"bool")),(0,u.kt)("p",null,"This function returns a boolean that is true during the loop that the button is pressed, and false otherwise. It will only read as true until ",(0,u.kt)("a",{parentName:"p",href:"updateButton"},"updateButton()")," is called again. This makes it useful for triggering an action."),(0,u.kt)("p",null,"Example:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n  \n  // if the button has been pressed\n  if (tlob.buttonPressed()){\n    tlob.blinkAll();\n  }\n  \n  if (tlob.buttonHold > 1000) {\n    tlob.stopAll();\n  }\n\n  // update() calls updateButton()\n  tlob.update();\n}\n")),(0,u.kt)("p",null,"buttonPressed() is debounced, see ",(0,u.kt)("a",{parentName:"p",href:"debounceTime"},"debounceTime()")," to change the debounce time."))}l.isMDXComponent=!0}}]);