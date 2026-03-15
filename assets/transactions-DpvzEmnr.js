import{i as c,a as s,x as f}from"./constants-CCDCgJn2.js";import{c as a}from"./index-urgdzA56.js";import"./index-1qjl0tLh.js";import"./index-mDUlpWsT.js";import"./walletConfig-CCO7dYl4.js";import"./sha2-PsZP68hz.js";import"./index.es-CfC0v7qP.js";import"./index-CJdot1dH.js";import"./to-string-CIRL5v7F.js";import"./http-BrtswQVA.js";import"./index-D_C6kpxi.js";import"./index-L9c6xOcu.js";import"./index-D1MPuaJU.js";import"./index-CorKj7Ns.js";import"./index-4uZZBkYe.js";const d=c`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,i,e,r){var n=arguments.length,t=n<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,e):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,i,e,r);else for(var m=o.length-1;m>=0;m--)(l=o[m])&&(t=(n<3?l(t):n>3?l(i,e,t):l(i,e))||t);return n>3&&t&&Object.defineProperty(i,e,t),t};let p=class extends s{render(){return f`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};p.styles=d;p=u([a("w3m-transactions-view")],p);export{p as W3mTransactionsView};
