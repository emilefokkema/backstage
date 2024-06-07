/*! For license information please see 01d1c020.9ad8f91f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[392901],{984687:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>i});var n=t(824246),o=t(511151);const c={id:"core-components.dependencygraphtypes.ranker",title:"DependencyGraphTypes.Ranker",description:"API reference for DependencyGraphTypes.Ranker"},s=void 0,u={id:"reference/core-components.dependencygraphtypes.ranker",title:"DependencyGraphTypes.Ranker",description:"API reference for DependencyGraphTypes.Ranker",source:"@site/../docs/reference/core-components.dependencygraphtypes.ranker.md",sourceDirName:"reference",slug:"/reference/core-components.dependencygraphtypes.ranker",permalink:"/docs/reference/core-components.dependencygraphtypes.ranker",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.dependencygraphtypes.ranker.md",tags:[],version:"current",frontMatter:{id:"core-components.dependencygraphtypes.ranker",title:"DependencyGraphTypes.Ranker",description:"API reference for DependencyGraphTypes.Ranker"}},a={},i=[{value:"Enumeration Members",id:"enumeration-members",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-components",children:(0,n.jsx)(r.code,{children:"@backstage/core-components"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-components.dependencygraphtypes",children:(0,n.jsx)(r.code,{children:"DependencyGraphTypes"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-components.dependencygraphtypes.ranker",children:(0,n.jsx)(r.code,{children:"Ranker"})})]}),"\n",(0,n.jsx)(r.p,{children:"Algorithm used to rand nodes in graph"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"enum Ranker \n"})}),"\n",(0,n.jsx)(r.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Member"}),(0,n.jsx)(r.th,{children:"Value"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"LONGEST_PATH"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'"longest-path"'})}),(0,n.jsx)(r.td,{children:"Longest path algorithm"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"NETWORK_SIMPLEX"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'"network-simplex"'})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Network_simplex_algorithm",children:"Network Simplex"})," algorithm"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"TIGHT_TREE"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:'"tight-tree"'})}),(0,n.jsx)(r.td,{children:"Tight Tree algorithm"})]})]})]})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,c={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:l,props:c,_owner:u.current}}r.Fragment=c,r.jsx=i,r.jsxs=i},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),a=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function b(){}function x(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var j=x.prototype=new b;j.constructor=x,h(j,_.prototype),j.isPureReactComponent=!0;var k=Array.isArray,v=Object.prototype.hasOwnProperty,g={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var o,c={},s=null,u=null;if(null!=r)for(o in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(s=""+r.key),r)v.call(r,o)&&!S.hasOwnProperty(o)&&(c[o]=r[o]);var a=arguments.length-2;if(1===a)c.children=n;else if(1<a){for(var i=Array(a),l=0;l<a;l++)i[l]=arguments[l+2];c.children=i}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:t,type:e,key:s,ref:u,props:c,_owner:g.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function T(e,r,o,c,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case n:a=!0}}if(a)return s=s(a=e),e=""===c?"."+C(a,0):c,k(s)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),T(s,r,o,"",(function(e){return e}))):null!=s&&(R(s)&&(s=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),r.push(s)),1;if(a=0,c=""===c?".":c+":",k(e))for(var i=0;i<e.length;i++){var l=c+C(u=e[i],i);a+=T(u,r,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(u=e.next()).done;)a+=T(u=u.value,r,o,l=c+C(u,i++),s);else if("object"===u)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,r,t){if(null==e)return e;var n=[],o=0;return T(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function O(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},I={transition:null},D={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:I,ReactCurrentOwner:g};r.Children={map:$,forEach:function(e,r,t){$(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return $(e,(function(){r++})),r},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=_,r.Fragment=o,r.Profiler=s,r.PureComponent=x,r.StrictMode=c,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,s=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,u=g.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(i in r)v.call(r,i)&&!S.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==a?a[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){a=Array(i);for(var l=0;l<i;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:t,type:e.type,key:c,ref:s,props:o,_owner:u}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:i,render:e}},r.isValidElement=R,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return P.current.useCallback(e,r)},r.useContext=function(e){return P.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return P.current.useDeferredValue(e)},r.useEffect=function(e,r){return P.current.useEffect(e,r)},r.useId=function(){return P.current.useId()},r.useImperativeHandle=function(e,r,t){return P.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return P.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return P.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return P.current.useMemo(e,r)},r.useReducer=function(e,r,t){return P.current.useReducer(e,r,t)},r.useRef=function(e){return P.current.useRef(e)},r.useState=function(e){return P.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return P.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return P.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>u,a:()=>s});var n=t(667294);const o={},c=n.createContext(o);function s(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);