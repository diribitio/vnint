"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2205],{2205:(I,m,t)=>{t.r(m),t.d(m,{ForgotPasswordPageModule:()=>b});var u=t(6019),a=t(9133),f=t(4522),e=t(6990),l=t(6431),g=t(6952),o=t(3245),P=t(6898),p=t(5729),h=t(2677),v=t(6733),Z=t(1516),F=t(1750),w=t(3829);function T(s,n){if(1&s&&(o.TgZ(0,"ion-button",11),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&s){const r=o.oxw();o.Q6J("disabled",r.forgotPasswordForm.invalid||r.isProcessed),o.xp6(1),o.Oqu(o.lcZ(2,2,"FORGOT_PASSWORD.INPUT.resetButton"))}}function A(s,n){if(1&s&&(o.TgZ(0,"ion-button",11),o._UZ(1,"ion-spinner",12),o.qZA()),2&s){const r=o.oxw();o.Q6J("disabled",r.forgotPasswordForm.invalid||r.isProcessed)}}const x=[{path:"",component:(()=>{class s{constructor(r,i,d,c,R,C){this.formBuilder=r,this.auth=i,this.router=d,this.errorService=c,this.alertService=R,this.translate=C,this.isProcessed=!1}get errorControl(){return this.forgotPasswordForm.controls}ngOnInit(){this.forgotPasswordForm=this.formBuilder.group({email:["",a.kI.required],fax:[]})}ionViewWillEnter(){this.isProcessed=!1,this.auth.authenticated().subscribe({error:r=>{this.errorService.errorOccurred.emit(r)},next:r=>{1==r.authenticated&&(this.auth.setLoggedIn=!0,this.router.navigate(["/dashboard"]))}})}forgotPassword(){if(!this.isProcessed&&!this.forgotPasswordForm.value.fax&&this.forgotPasswordForm.valid){if(this.isProcessed=!0,!this.forgotPasswordForm.valid)return!1;this.auth.sendForgotPasswordEmail(this.forgotPasswordForm.value).subscribe({error:r=>{if("The given data was invalid."==r.error.message)for(const i in r.error.errors){const d=[];for(const c in r.error.errors[i])d.push({[r.error.errors[i][c]]:!0});this.forgotPasswordForm.controls[i].setErrors(d)}else"missingPermissions"==r.error.message?this.alertService.alert("danger",this.translate.instant("GENERAL.ERRORS.missingPermissions"),"","lock-closed"):this.errorService.errorOccurred.emit(r);this.isProcessed=!1},next:r=>{let i=r;this.alertService.alert("success",this.translate.instant("FORGOT_PASSWORD.title"),i.message,"send")},complete:()=>{this.forgotPasswordForm.reset(),this.auth.setLoggedIn=!1,this.auth.setSessionExpired=!1,this.isProcessed=!1,this.router.navigate(["/login"])}})}}}return s.\u0275fac=function(r){return new(r||s)(o.Y36(a.qu),o.Y36(P.e),o.Y36(g.F0),o.Y36(p.T),o.Y36(h.c),o.Y36(l.sK))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-forgot-password"]],decls:22,vars:10,consts:[[1,"forgot-password-grid"],[3,"title"],["color","light"],[1,"inside-card-grid"],[3,"formGroup","ngSubmit"],["type","email","name","email","formControlName","email",3,"placeholder"],[3,"errors"],["formControlName","fax",1,"invisible"],[1,"ion-padding"],["type","submit","class","ion-no-margin","expand","block","color","primary",3,"disabled",4,"ngIf"],[1,"fixed-footer"],["type","submit","expand","block","color","primary",1,"ion-no-margin",3,"disabled"],["name","crescent"]],template:function(r,i){1&r&&(o.TgZ(0,"ion-content"),o._UZ(1,"app-toolbar"),o.TgZ(2,"ion-grid",0),o.TgZ(3,"ion-row"),o.TgZ(4,"ion-col"),o._UZ(5,"app-card-title-bar",1),o.ALo(6,"translate"),o.TgZ(7,"ion-card",2),o.TgZ(8,"ion-card-content"),o.TgZ(9,"ion-grid",3),o.TgZ(10,"ion-row"),o.TgZ(11,"ion-col"),o.TgZ(12,"form",4),o.NdJ("ngSubmit",function(){return i.forgotPassword()}),o.TgZ(13,"ion-item",2),o._UZ(14,"ion-input",5),o.ALo(15,"translate"),o.qZA(),o._UZ(16,"app-form-error",6),o._UZ(17,"ion-checkbox",7),o.TgZ(18,"div",8),o.YNc(19,T,3,4,"ion-button",9),o.YNc(20,A,2,1,"ion-button",9),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o._UZ(21,"app-footer",10),o.qZA()),2&r&&(o.xp6(5),o.s9C("title",o.lcZ(6,6,"FORGOT_PASSWORD.title")),o.xp6(7),o.Q6J("formGroup",i.forgotPasswordForm),o.xp6(2),o.s9C("placeholder",o.lcZ(15,8,"LOGIN.INPUT.email")),o.xp6(2),o.Q6J("errors",i.errorControl.email.errors),o.xp6(3),o.Q6J("ngIf",!i.isProcessed),o.xp6(1),o.Q6J("ngIf",i.isProcessed))},directives:[e.W2,v.n,e.jY,e.Nd,e.wI,Z.$,e.PM,e.FN,a._Y,a.JL,a.sg,e.Ie,e.pK,e.j9,a.JJ,a.u,F.A,e.nz,e.w,u.O5,w.c,e.YG,e.PQ],pipes:[l.X$],styles:[".forgot-password-grid[_ngcontent-%COMP%]{max-width:500px}ion-item[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px}"]}),s})()}];let S=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[g.Bz.forChild(x)],g.Bz]}),s})();var O=t(6453),y=t(6060);let b=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[u.ez,a.u5,e.Pc,S,O.K,a.UX,l.aw.forChild({loader:{provide:l.Zw,useFactory:y.p,deps:[f.eN]}})]]}),s})()}}]);