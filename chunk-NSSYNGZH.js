import{$ as j,E as I,I as _,K as et,L as nt,N as ot,O as it,P as T,Q as Y,R as K,S as r,T as L,W as B,X as rt,Y as pt,_ as R,ba as U,ca as d,d as P,p as z,y as A}from"./chunk-YZHTQAI5.js";import{Ab as G,Bb as $,Ha as l,Kb as tt,Lb as C,Mb as E,Nb as k,Pb as p,Qa as w,S as g,T as h,V as v,Va as s,Wa as x,X as i,Xa as V,Xb as O,Za as b,_a as y,_b as a,ec as N,fb as Q,ia as q,mb as M,nb as c,ob as f,pb as S,qa as D,ta as u,yb as F}from"./chunk-2GU7ETPA.js";var X=class t{constructor(m){this.contentfulService=m;this.contentfulService.getOnePage("1O7RuZnUAKcVKxTzGBDua1").then(e=>{this.pageContent=e})}pageContent=null;static \u0275fac=function(e){return new(e||t)(w(d))};static \u0275cmp=s({type:t,selectors:[["app-homepage"]],features:[p([d])],decls:4,vars:2,consts:[[3,"document"]],template:function(e,n){e&1&&(c(0,"h1"),E(1),f(),c(2,"div"),S(3,"app-contentful-rich-text",0),f()),e&2&&(l(),k(n.pageContent==null||n.pageContent.fields==null?null:n.pageContent.fields.pageTitle),l(2),M("document",n.pageContent==null||n.pageContent.fields==null?null:n.pageContent.fields.pageContent))},dependencies:[R,j,P,z,U],encapsulation:2})};var ut=`
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
`;var wt=`
    ${ut}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Ft={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},lt=(()=>{class t extends I{name="inputtext";style=wt;classes=Ft;static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(t)))(o||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();var st=new v("INPUTTEXT_INSTANCE"),ct=(()=>{class t extends K{hostName="";ptInputText=a();pInputTextPT=a();pInputTextUnstyled=a();bindDirectiveInstance=i(r,{self:!0});$pcInputText=i(st,{optional:!0,skipSelf:!0})??void 0;ngControl=i(_,{optional:!0,self:!0});pcFluid=i(B,{optional:!0,host:!0,skipSelf:!0});pSize;variant=a();fluid=a(void 0,{transform:N});invalid=a(void 0,{transform:N});$variant=O(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=i(lt);constructor(){super(),D(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),D(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=V({type:t,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(n,o){n&1&&F("input",function(){return o.onInput()}),n&2&&(Q("data-p",o.dataP),C(o.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[p([lt,{provide:st,useExisting:t},{provide:T,useExisting:t}]),b([r]),y]})}return t})(),ft=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=x({type:t});static \u0275inj=h({})}return t})();var mt=`
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
`;var kt=["*"],Pt=`
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
`,zt={root:({instance:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},gt=(()=>{class t extends I{name="inputgroup";style=Pt;classes=zt;static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(t)))(o||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();var ht=new v("INPUTGROUP_INSTANCE"),At=(()=>{class t extends Y{_componentStyle=i(gt);$pcInputGroup=i(ht,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(t)))(o||t)}})();static \u0275cmp=s({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostVars:2,hostBindings:function(n,o){n&2&&C(o.cn(o.cx("root"),o.styleClass))},inputs:{styleClass:"styleClass"},features:[p([gt,{provide:ht,useExisting:t},{provide:T,useExisting:t}]),b([r]),y],ngContentSelectors:kt,decls:1,vars:0,template:function(n,o){n&1&&(G(),$(0))},dependencies:[L],encapsulation:2})}return t})(),vt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=x({type:t});static \u0275inj=h({imports:[At,A,A]})}return t})();var Bt=["*"],Rt={root:"p-inputgroupaddon"},xt=(()=>{class t extends I{name="inputgroupaddon";classes=Rt;static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(t)))(o||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),bt=new v("INPUTGROUPADDON_INSTANCE"),jt=(()=>{class t extends Y{_componentStyle=i(xt);$pcInputGroupAddon=i(bt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=i(r,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}style;styleClass;get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(t)))(o||t)}})();static \u0275cmp=s({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:4,hostBindings:function(n,o){n&2&&(tt(o.hostStyle),C(o.cn(o.cx("root"),o.styleClass)))},inputs:{style:"style",styleClass:"styleClass"},features:[p([xt,{provide:bt,useExisting:t},{provide:T,useExisting:t}]),b([r]),y],ngContentSelectors:Bt,decls:1,vars:0,template:function(n,o){n&1&&(G(),$(0))},dependencies:[L],encapsulation:2})}return t})(),yt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=x({type:t});static \u0275inj=h({imports:[jt,A,A]})}return t})();var Ct=`
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
`;var Ut=`
    ${Ct}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,Ht={root:({instance:t})=>["p-textarea p-component",{"p-filled":t.$filled(),"p-textarea-resizable ":t.autoResize,"p-variant-filled":t.$variant()==="filled","p-textarea-fluid":t.hasFluid,"p-inputfield-sm p-textarea-sm":t.pSize==="small","p-textarea-lg p-inputfield-lg":t.pSize==="large","p-invalid":t.invalid()}]},It=(()=>{class t extends I{name="textarea";style=Ut;classes=Ht;static \u0275fac=(()=>{let e;return function(o){return(e||(e=u(t)))(o||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();var Tt=new v("TEXTAREA_INSTANCE"),Mt=(()=>{class t extends K{bindDirectiveInstance=i(r,{self:!0});$pcTextarea=i(Tt,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=a();pTextareaUnstyled=a();autoResize;pSize;variant=a();fluid=a(void 0,{transform:N});invalid=a(void 0,{transform:N});$variant=O(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new q;ngControlSubscription;_componentStyle=i(It);ngControl=i(_,{optional:!0,self:!0});pcFluid=i(B,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}constructor(){super(),D(()=>{let e=this.pTextareaPT();e&&this.directivePT.set(e)}),D(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(e){this.writeModelValue(e.target?.value),this.updateState()}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=V({type:t,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(n,o){n&1&&F("input",function(Dt){return o.onInput(Dt)}),n&2&&C(o.cx("root"))},inputs:{pTextareaPT:[1,"pTextareaPT"],pTextareaUnstyled:[1,"pTextareaUnstyled"],autoResize:[2,"autoResize","autoResize",N],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[p([It,{provide:Tt,useExisting:t},{provide:T,useExisting:t}]),b([r]),y]})}return t})(),St=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=x({type:t});static \u0275inj=h({})}return t})();var J=class t{constructor(m){this.contentfulService=m;this.contentfulService.getOnePage("4llZBfChWrk19FKRoLPIJN").then(e=>{this.pageContent=e})}pageContent=null;submitted(){alert("Your message has been sent.")}static \u0275fac=function(e){return new(e||t)(w(d))};static \u0275cmp=s({type:t,selectors:[["app-homepage"]],features:[p([d])],decls:12,vars:3,consts:[[1,"flex","flex-col","md:flex-row","gap-8"],[1,"md:w-1/2"],[1,"card","flex","flex-col","gap-4"],["action","https://formspree.io/f/xjggbjga","method","POST",3,"submit"],["pInputText","","id","name","name","name","type","text","placeholder","Your Name:"],["pInputText","","id","email","name","email","type","text","placeholder","Your Email:"],["pTextarea","","name","message","placeholder","Your Message","rows","5",3,"autoResize"],["label","Send","name","submit","type","submit","pButton",""],[3,"document"]],template:function(e,n){e&1&&(c(0,"h1"),E(1),f(),c(2,"p-fluid",0)(3,"div",1)(4,"div",2)(5,"form",3),F("submit",function(){return n.submitted()}),S(6,"input",4)(7,"input",5)(8,"textarea",6)(9,"button",7),f()()()(),c(10,"div"),S(11,"app-contentful-rich-text",8),f()),e&2&&(l(),k(n.pageContent==null||n.pageContent.fields==null?null:n.pageContent.fields.pageTitle),l(7),M("autoResize",!0),l(3),M("document",n.pageContent==null||n.pageContent.fields==null?null:n.pageContent.fields.pageContent))},dependencies:[R,pt,j,z,U,P,it,ot,et,nt,ft,ct,vt,rt,B,yt,St,Mt],encapsulation:2})};var Z=class t{constructor(m){this.contentfulService=m;this.contentfulService.getOnePage("1IxSEpJ2mETCCK4vLYRYRV").then(e=>{this.pageContent=e})}pageContent=null;static \u0275fac=function(e){return new(e||t)(w(d))};static \u0275cmp=s({type:t,selectors:[["app-officers"]],features:[p([d])],decls:4,vars:2,consts:[[3,"document"]],template:function(e,n){e&1&&(c(0,"h1"),E(1),f(),c(2,"div"),S(3,"app-contentful-rich-text",0),f()),e&2&&(l(),k(n.pageContent==null||n.pageContent.fields==null?null:n.pageContent.fields.pageTitle),l(2),M("document",n.pageContent==null||n.pageContent.fields==null?null:n.pageContent.fields.pageContent))},dependencies:[R,j,P,z,U],encapsulation:2})};var In=[{path:"about-us",component:X},{path:"contact-us",component:J},{path:"officers",component:Z},{path:"**",redirectTo:"/notfound"}];export{In as default};
