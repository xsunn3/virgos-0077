import{i as c,a as s,x as f}from"./constants-BojEEslR.js";import{c as a}from"./index-C1GzYU8z.js";import"./index-BqmLsuiv.js";import"./index-DrdphyDm.js";import"./walletConfig-Dw5-vAta.js";import"./sha2-PsZP68hz.js";import"./index.es-Hor2zo_O.js";import"./index-CJdot1dH.js";import"./to-string-C3lpjHzW.js";import"./http-BrjeJ1kX.js";import"./index-85UH6uWu.js";import"./index-BDGC7gbj.js";import"./index-iI9LVbiu.js";import"./index-F_T8LTuS.js";import"./index-_PqJLtBL.js";const d=c`
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
