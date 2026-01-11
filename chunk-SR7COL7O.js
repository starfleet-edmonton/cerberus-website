import{$ as _,E as b,I as V,K as et,L as nt,N as it,O as ot,P as y,Q as G,R as $,S as p,T as O,W as k,X as rt,Y as pt,_ as at,ba as dt,ca as C,d as Q,p as tt,y as F}from"./chunk-YZHTQAI5.js";import{Ab as B,Bb as U,Ha as I,Kb as q,Lb as x,Mb as j,Nb as R,Pb as r,Qa as z,S as c,T as f,V as m,Va as u,Wa as g,X as o,Xa as A,Xb as H,Za as h,_a as v,_b as a,ec as M,fb as W,ia as Z,mb as P,nb as T,ob as D,pb as l,qa as S,ta as s,yb as w}from"./chunk-2GU7ETPA.js";var E=class t{constructor(d){this.contentfulService=d}_pageId="";get pageId(){return this._pageId}set pageId(d){this._pageId=d,this.contentfulService.getOnePage(d).then(e=>{this.pageContent=e})}pageContent=null;submitted(){alert("Your message has been sent.")}static \u0275fac=function(e){return new(e||t)(z(C))};static \u0275cmp=u({type:t,selectors:[["app-page-display"]],inputs:{pageId:"pageId"},features:[r([C])],decls:4,vars:2,consts:[[3,"document"]],template:function(e,n){e&1&&(T(0,"h1"),j(1),D(),T(2,"div"),l(3,"app-contentful-rich-text",0),D()),e&2&&(I(),R(n.pageContent==null||n.pageContent.fields==null?null:n.pageContent.fields.pageTitle),I(2),P("document",n.pageContent==null||n.pageContent.fields==null?null:n.pageContent.fields.pageContent))},dependencies:[_],encapsulation:2})};var Y=class t{constructor(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=u({type:t,selectors:[["app-about-us"]],features:[r([])],decls:1,vars:0,consts:[["pageId","1O7RuZnUAKcVKxTzGBDua1"]],template:function(e,n){e&1&&l(0,"app-page-display",0)},dependencies:[E],encapsulation:2})};var ut=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var Ft=`
    ${ut}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,kt={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},st=(()=>{class t extends b{name="inputtext";style=Ft;classes=kt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=s(t)))(i||t)}})();static \u0275prov=c({token:t,factory:t.\u0275fac})}return t})();var lt=new m("INPUTTEXT_INSTANCE"),ct=(()=>{class t extends ${hostName="";ptInputText=a();pInputTextPT=a();pInputTextUnstyled=a();bindDirectiveInstance=o(p,{self:!0});$pcInputText=o(lt,{optional:!0,skipSelf:!0})??void 0;ngControl=o(V,{optional:!0,self:!0});pcFluid=o(k,{optional:!0,host:!0,skipSelf:!0});pSize;variant=a();fluid=a(void 0,{transform:M});invalid=a(void 0,{transform:M});$variant=H(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=o(st);constructor(){super(),S(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),S(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(n,i){n&1&&w("input",function(){return i.onInput()}),n&2&&(W("data-p",i.dataP),x(i.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[r([st,{provide:lt,useExisting:t},{provide:y,useExisting:t}]),h([p]),v]})}return t})(),ft=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=g({type:t});static \u0275inj=f({})}return t})();var mt=`
    .p-inputgroup,
    .p-inputgroup .p-iconfield,
    .p-inputgroup .p-floatlabel,
    .p-inputgroup .p-iftalabel {
        display: flex;
        align-items: stretch;
        width: 100%;
    }

    .p-inputgroup .p-inputtext,
    .p-inputgroup .p-inputwrapper {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-inputgroupaddon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: dt('inputgroup.addon.padding');
        background: dt('inputgroup.addon.background');
        color: dt('inputgroup.addon.color');
        border-block-start: 1px solid dt('inputgroup.addon.border.color');
        border-block-end: 1px solid dt('inputgroup.addon.border.color');
        min-width: dt('inputgroup.addon.min.width');
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroupaddon + .p-inputgroupaddon {
        border-inline-start: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:last-child {
        border-inline-end: 1px solid dt('inputgroup.addon.border.color');
    }

    .p-inputgroupaddon:has(.p-button) {
        padding: 0;
        overflow: hidden;
    }

    .p-inputgroupaddon .p-button {
        border-radius: 0;
    }

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iconfield > .p-component,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroupaddon:first-child,
    .p-inputgroup > .p-component:first-child,
    .p-inputgroup > .p-inputwrapper:first-child > .p-component,
    .p-inputgroup > .p-iconfield:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-component,
    .p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-component,
    .p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroupaddon:last-child,
    .p-inputgroup > .p-component:last-child,
    .p-inputgroup > .p-inputwrapper:last-child > .p-component,
    .p-inputgroup > .p-iconfield:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-component,
    .p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-component,
    .p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup .p-component:focus,
    .p-inputgroup .p-component.p-focus,
    .p-inputgroup .p-inputwrapper-focus,
    .p-inputgroup .p-component:focus ~ label,
    .p-inputgroup .p-component.p-focus ~ label,
    .p-inputgroup .p-inputwrapper-focus ~ label {
        z-index: 1;
    }

    .p-inputgroup > .p-button:not(.p-button-icon-only) {
        width: auto;
    }

    .p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
        border-inline-start: 0;
    }
`;var Pt=["*"],zt=`
    ${mt}

    /*For PrimeNG*/

    .p-inputgroup > .p-component,
    .p-inputgroup > .p-inputwrapper > .p-component,
    .p-inputgroup:first-child > p-button > .p-button,
    .p-inputgroup > .p-floatlabel > .p-component,
    .p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
    .p-inputgroup > .p-iftalabel > .p-component,
    .p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
        border-radius: 0;
        margin: 0;
    }

    .p-inputgroup p-button:first-child,
    .p-inputgroup p-button:last-child {
        display: inline-flex;
    }

    .p-inputgroup:has(> p-button:first-child) .p-button {
        border-start-start-radius: dt('inputgroup.addon.border.radius');
        border-end-start-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup:has(> p-button:last-child) .p-button {
        border-start-end-radius: dt('inputgroup.addon.border.radius');
        border-end-end-radius: dt('inputgroup.addon.border.radius');
    }

    .p-inputgroup > p-inputmask > .p-inputtext {
        width: 100%;
    }
`,At={root:({instance:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},gt=(()=>{class t extends b{name="inputgroup";style=zt;classes=At;static \u0275fac=(()=>{let e;return function(i){return(e||(e=s(t)))(i||t)}})();static \u0275prov=c({token:t,factory:t.\u0275fac})}return t})();var ht=new m("INPUTGROUP_INSTANCE"),Bt=(()=>{class t extends G{_componentStyle=o(gt);$pcInputGroup=o(ht,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(p,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;static \u0275fac=(()=>{let e;return function(i){return(e||(e=s(t)))(i||t)}})();static \u0275cmp=u({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostVars:2,hostBindings:function(n,i){n&2&&x(i.cn(i.cx("root"),i.styleClass))},inputs:{styleClass:"styleClass"},features:[r([gt,{provide:ht,useExisting:t},{provide:y,useExisting:t}]),h([p]),v],ngContentSelectors:Pt,decls:1,vars:0,template:function(n,i){n&1&&(B(),U(0))},dependencies:[O],encapsulation:2})}return t})(),vt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=g({type:t});static \u0275inj=f({imports:[Bt,F,F]})}return t})();var Ut=["*"],jt={root:"p-inputgroupaddon"},xt=(()=>{class t extends b{name="inputgroupaddon";classes=jt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=s(t)))(i||t)}})();static \u0275prov=c({token:t,factory:t.\u0275fac})}return t})(),bt=new m("INPUTGROUPADDON_INSTANCE"),Rt=(()=>{class t extends G{_componentStyle=o(xt);$pcInputGroupAddon=o(bt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=o(p,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}style;styleClass;get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(i){return(e||(e=s(t)))(i||t)}})();static \u0275cmp=u({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:4,hostBindings:function(n,i){n&2&&(q(i.hostStyle),x(i.cn(i.cx("root"),i.styleClass)))},inputs:{style:"style",styleClass:"styleClass"},features:[r([xt,{provide:bt,useExisting:t},{provide:y,useExisting:t}]),h([p]),v],ngContentSelectors:Ut,decls:1,vars:0,template:function(n,i){n&1&&(B(),U(0))},dependencies:[O],encapsulation:2})}return t})(),yt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=g({type:t});static \u0275inj=f({imports:[Rt,F,F]})}return t})();var Ct=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var Ht=`
    ${Ct}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,Vt={root:({instance:t})=>["p-textarea p-component",{"p-filled":t.$filled(),"p-textarea-resizable ":t.autoResize,"p-variant-filled":t.$variant()==="filled","p-textarea-fluid":t.hasFluid,"p-inputfield-sm p-textarea-sm":t.pSize==="small","p-textarea-lg p-inputfield-lg":t.pSize==="large","p-invalid":t.invalid()}]},It=(()=>{class t extends b{name="textarea";style=Ht;classes=Vt;static \u0275fac=(()=>{let e;return function(i){return(e||(e=s(t)))(i||t)}})();static \u0275prov=c({token:t,factory:t.\u0275fac})}return t})();var Tt=new m("TEXTAREA_INSTANCE"),Dt=(()=>{class t extends ${bindDirectiveInstance=o(p,{self:!0});$pcTextarea=o(Tt,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=a();pTextareaUnstyled=a();autoResize;pSize;variant=a();fluid=a(void 0,{transform:M});invalid=a(void 0,{transform:M});$variant=H(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new Z;ngControlSubscription;_componentStyle=o(It);ngControl=o(V,{optional:!0,self:!0});pcFluid=o(k,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}constructor(){super(),S(()=>{let e=this.pTextareaPT();e&&this.directivePT.set(e)}),S(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(e){this.writeModelValue(e.target?.value),this.updateState()}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(n,i){n&1&&w("input",function(St){return i.onInput(St)}),n&2&&x(i.cx("root"))},inputs:{pTextareaPT:[1,"pTextareaPT"],pTextareaUnstyled:[1,"pTextareaUnstyled"],autoResize:[2,"autoResize","autoResize",M],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[r([It,{provide:Tt,useExisting:t},{provide:y,useExisting:t}]),h([p]),v]})}return t})(),Mt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=g({type:t});static \u0275inj=f({})}return t})();var K=class t{constructor(d){this.contentfulService=d;this.contentfulService.getOnePage("4llZBfChWrk19FKRoLPIJN").then(e=>{this.pageContent=e})}pageContent=null;submitted(){alert("Your message has been sent.")}static \u0275fac=function(e){return new(e||t)(z(C))};static \u0275cmp=u({type:t,selectors:[["app-contact-us"]],features:[r([C])],decls:12,vars:3,consts:[[1,"flex","flex-col","md:flex-row","gap-8"],[1,"md:w-1/2"],[1,"card","flex","flex-col","gap-4"],["action","https://formspree.io/f/xjggbjga","method","POST",3,"submit"],["pInputText","","id","name","name","name","type","text","placeholder","Your Name:"],["pInputText","","id","email","name","email","type","text","placeholder","Your Email:"],["pTextarea","","name","message","placeholder","Your Message","rows","5",3,"autoResize"],["label","Send","name","submit","type","submit","pButton",""],[3,"document"]],template:function(e,n){e&1&&(T(0,"h1"),j(1),D(),T(2,"p-fluid",0)(3,"div",1)(4,"div",2)(5,"form",3),w("submit",function(){return n.submitted()}),l(6,"input",4)(7,"input",5)(8,"textarea",6)(9,"button",7),D()()()(),T(10,"div"),l(11,"app-contentful-rich-text",8),D()),e&2&&(I(),R(n.pageContent==null||n.pageContent.fields==null?null:n.pageContent.fields.pageTitle),I(7),P("autoResize",!0),I(3),P("document",n.pageContent==null||n.pageContent.fields==null?null:n.pageContent.fields.pageContent))},dependencies:[at,pt,_,tt,dt,Q,ot,it,et,nt,ft,ct,vt,rt,k,yt,Mt,Dt],encapsulation:2})};var L=class t{constructor(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=u({type:t,selectors:[["app-officers"]],features:[r([])],decls:1,vars:0,consts:[["pageId","1IxSEpJ2mETCCK4vLYRYRV"]],template:function(e,n){e&1&&l(0,"app-page-display",0)},dependencies:[E],encapsulation:2})};var gn=[{path:"about-us",component:Y},{path:"contact-us",component:K},{path:"officers",component:L},{path:"**",redirectTo:"/notfound"}];export{gn as default};
