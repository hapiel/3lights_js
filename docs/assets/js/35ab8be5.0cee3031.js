(self.webpackChunk_3_l_1_b=self.webpackChunk_3_l_1_b||[]).push([[766],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||l;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5504:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return p},default:function(){return s}});var r=t(2122),o=t(9756),l=(t(7294),t(3905)),i={},a={unversionedId:"Functions/blink",id:"Functions/blink",isDocsHomePage:!1,title:"blink()",description:"blink(int led, [int onTime, int offTime])",source:"@site/docs/Functions/blink.md",sourceDirName:"Functions",slug:"/Functions/blink",permalink:"/3L1B/docs/Functions/blink",editUrl:"https://github.com/hapiel/3L1B/edit/master/docusaurus/docs/Functions/blink.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TLOB",permalink:"/3L1B/docs/Functions/TLOB"},next:{title:"blinkAll()",permalink:"/3L1B/docs/Functions/blinkAll"}},p=[],u={toc:p};function s(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"blink(int led, [int onTime, int offTime])")),(0,l.kt)("p",null,"This function can set a led to blink at a regular interval. "),(0,l.kt)("p",null,"Select a led with 0 for the first led, 1 for the middle led and 2 for the last led."),(0,l.kt)("p",null,"If you only enter the first argument ",(0,l.kt)("inlineCode",{parentName:"p"},"led")," the blink time will be set to 100ms on, 100ms off."),(0,l.kt)("p",null,"If you enter the second argument ",(0,l.kt)("inlineCode",{parentName:"p"},"onTime"),", then on and off time will be equal. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"blink(0, 500)")," will turn the first led on for 500ms and then off for 500ms, creating a 1 second cycle."),(0,l.kt)("p",null,"If you also enter the third argument ",(0,l.kt)("inlineCode",{parentName:"p"},"offTime"),", then you can set a sequence like ",(0,l.kt)("inlineCode",{parentName:"p"},"blink(0, 500, 100)")," which will set the blinking to 500ms on and 100ms off."),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n  \n  // if the button has been pressed\n  if (tlob.buttonPressed()){\n    // blink led 1 (middle led), 500ms on and 100ms off\n    tlob.blink(1, 500, 100);\n  }\n  \n  // if the button is held down for 1 second\n  if (tlob.buttonHold > 1000) {\n    // stop blinking led 1\n    tlob.stop(1);\n  }\n\n  // update the button and the blinking\n  tlob.update();\n}\n")),(0,l.kt)("p",null,"For this function to work properly, ",(0,l.kt)("strong",{parentName:"p"},"make sure you call")," ",(0,l.kt)("inlineCode",{parentName:"p"},"update()")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"updateLeds()")," once every loop."),(0,l.kt)("p",null,"To stop a led from blinking, use ",(0,l.kt)("a",{parentName:"p",href:"stop"},"stop()"),"."),(0,l.kt)("p",null,"When the blink starts, the ",(0,l.kt)("strong",{parentName:"p"},"leds will always start in the on phase"),". Therefore, calling blink() repeatedly will make the led appear to be on, not blinking."),(0,l.kt)("p",null,"Therefore this example will ",(0,l.kt)("strong",{parentName:"p"},"NOT")," make the led blink:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n  \n  tlob.blink(1);\n  tlob.update();\n}\n")),(0,l.kt)("p",null,"But this example ",(0,l.kt)("strong",{parentName:"p"},"will work")," as the setup is only called once:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup(){\n\n  tlob.blink(1);\n}\n\nvoid loop() {\n  \n  tlob.update();\n}\n")))}s.isMDXComponent=!0}}]);