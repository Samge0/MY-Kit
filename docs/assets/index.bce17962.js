import{r as $,a as v,o as a,c as l,b as i,F as N,d as b,u as w,e as E,f as x,w as S,g as D,t as u,h as A,i as L,j as B,k as y,P,l as I,v as V,m as O}from"./vendor.5bdd5a00.js";const R=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};R();var F=[{compName:"Button",compZhName:"\u6309\u94AE",compDesc:"\u8FD9\u662F\u4E00\u4E2A\u6309\u94AE",compClassName:"button"},{compName:"Foo",compZhName:"\u6D4B\u8BD5\u7EC4\u4EF6",compDesc:"\u9ED8\u8BA4\uFF1A\u8FD9\u662F\u4E00\u4E2A\u65B0\u7EC4\u4EF6",compClassName:"foo"},{compName:"UserInfo",compZhName:"\u7528\u6237\u8D44\u6599\u5C55\u793A\u7EC4\u4EF6",compDesc:"\u4E8C\u6B21\u5C01\u88C5\u7684\u7528\u6237\u8D44\u6599\u5C55\u793A\u7EC4\u4EF6",compClassName:"user-info"}];const M={class:"my-kit-doc"},T={setup(t){const s=$({links:F.map(r=>({path:`/components/${r.compName}`,name:r.compZhName}))});return(r,o)=>{const e=v("router-link"),n=v("router-view");return a(),l("div",M,[i("aside",null,[(a(!0),l(N,null,b(w(s).links,(c,d)=>(a(),x(e,{key:d,to:c.path},{default:S(()=>[D(u(c.name),1)]),_:2},1032,["to"]))),128))]),i("main",null,[E(n)])])}}},j="modulepreload",g={},q="/MY-Kit/",p=function(s,r){return!r||r.length===0?s():Promise.all(r.map(o=>{if(o=`${q}${o}`,o in g)return;g[o]=!0;const e=o.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":j,e||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),e)return new Promise((d,k)=>{c.addEventListener("load",d),c.addEventListener("error",k)})})).then(()=>s())},K=[{title:"\u6309\u94AE",name:"Button",path:"/components/Button",component:()=>p(()=>import("./README.0b482da5.js"),["assets/README.0b482da5.js","assets/vendor.5bdd5a00.js"])},{title:"\u6D4B\u8BD5\u7EC4\u4EF6",name:"Foo",path:"/components/Foo",component:()=>p(()=>import("./README.b0edbd88.js"),["assets/README.b0edbd88.js","assets/vendor.5bdd5a00.js"])},{title:"\u7528\u6237\u8D44\u6599\u5C55\u793A",name:"UserInfo",path:"/components/UserInfo",component:()=>p(()=>import("./README.a2ab74cb.js"),["assets/README.a2ab74cb.js","assets/vendor.5bdd5a00.js"])}],Z={history:A(),routes:K,scrollBehavior(t,s){if(t.path!==s.path)return{top:0}}},U=L(Z);var m=(t,s)=>{const r=t.__vccOpts||t;for(const[o,e]of s)r[o]=e;return r};const Y=B({emits:["click"],setup(t){return(s,r)=>(a(),l("button",{class:"my-button",onClick:r[0]||(r[0]=o=>s.$emit("click",o))},[y(s.$slots,"default",{},void 0,!0)]))}});var H=m(Y,[["__scopeId","data-v-5102a2ab"]]);const _={install(t){t.component("my-button",H)}};const W={},z={class:"my-foo"};function G(t,s){return a(),l("div",z," \u6211\u662F\u6D4B\u8BD5\u7EC4\u4EF6\u7EC4\u4EF6 ")}var J=m(W,[["render",G],["__scopeId","data-v-1df37c44"]]);const f={install(t){t.component("my-foo",J)}};const Q={class:"my-user-info"},X={props:{name:String,phone:{type:String,default:""},autoCopy:{type:Boolean,default:!1}},emits:["click"],setup(t,{emit:s}){const r=(o,e)=>{e&&(console.log(`\u81EA\u52A8\u590D\u5236\u70B9\u51FB\u5185\u5BB9\uFF1A${o}`),navigator.clipboard.writeText(o).then(()=>{console.log("\u590D\u5236\u6210\u529F")}).catch(n=>{console.log(`\u590D\u5236\u5931\u8D25\uFF1A${n}`)}))};return(o,e)=>(a(),l("div",Q,[i("p",{onClick:e[0]||(e[0]=n=>o.$emit("click",t.name,n,r(t.name,t.autoCopy)))},"\u7528\u6237\u540D\uFF1A"+u(t.name),1),i("p",{onClick:e[1]||(e[1]=n=>o.$emit("click",t.phone,n,r(t.phone,t.autoCopy)))},"\u624B\u673A\u53F7\uFF1A"+u(t.phone),1)]))}};var ee=m(X,[["__scopeId","data-v-8cccff4e"]]);const h={install(t){t.component("my-user-info",ee)}},te={install(t){var s,r,o;(s=_.install)==null||s.call(_,t),(r=f.install)==null||r.call(f,t),(o=h.install)==null||o.call(h,t)}};const oe={props:{compName:{type:String,default:"",require:!0},demoName:{type:String,default:"",require:!0}},data(){return{sourceCode:"",codeVisible:!1}},computed:{previewSourceCode(){return this.sourceCode.replace(/'\.\.\/\.\.\/index'/g,"'@tencent/my-kit'")}},async mounted(){this.compName&&this.demoName&&(this.sourceCode=await fetch(`/MY-Kit/packages/${this.compName}/docs/${this.demoName}.vue`).then(t=>t.text())),await this.$nextTick(),P.highlightAll()},methods:{async copyCode(){},showSourceCode(){this.codeVisible=!this.codeVisible}}},ne={class:"mykit-preview"},se={class:"source-code"},re={class:"language-html"},ce={class:"language-html"},ie={class:"preview-bottom"};function ae(t,s,r,o,e,n){return a(),l("div",ne,[i("section",null,[y(t.$slots,"default")]),I(i("div",se,[i("pre",re,[i("code",ce,u(n.previewSourceCode),1)])],512),[[V,e.codeVisible]]),i("div",ie,[i("span",{name:"Code",onClick:s[0]||(s[0]=(...c)=>n.showSourceCode&&n.showSourceCode(...c))},"\u67E5\u770B\u4EE3\u7801")])])}var le=m(oe,[["render",ae]]);const C=O(T);C.component("Preview",le);C.use(te).use(U).mount("#app");export{m as _};
