"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8885],{8885:(y,m,r)=>{r.r(m),r.d(m,{ManageApplicationSettingsPageModule:()=>b});var d=r(6019),o=r(9133),s=r(6990),l=r(6952),t=r(3245),A=r(5729),c=r(6431),h=r(2677),S=r(6898),g=r(4522);let f=(()=>{class i{constructor(e){this.http=e,this.headers=new g.WM({accept:"application/json",contentType:"application/json"}),this.options={this:this.headers,withCredentials:!0}}getApplicationSettings(){return this.http.get("/api/application-settings",this.options)}updateEvent(e){return this.http.put("/api/application-settings",e,this.options)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(g.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var Z=r(6733),T=r(1516),v=r(1750);function P(i,a){if(1&i&&(t.TgZ(0,"ion-button",12),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&i){const e=t.oxw();t.Q6J("disabled",e.updateApplicationSettingsForm.invalid||e.isProcessed||!e.permissions.includes("applicationsettings.update")||!e.eventPermissions.includes("applicationsettings.update")),t.xp6(1),t.Oqu(t.lcZ(2,2,"ACTIONS.MANAGE_APPLICATION_SETTINGS.INPUT.submitButton"))}}function I(i,a){if(1&i&&(t.TgZ(0,"ion-button",12),t._UZ(1,"ion-spinner",13),t.qZA()),2&i){const e=t.oxw();t.Q6J("disabled",e.updateApplicationSettingsForm.invalid||e.isProcessed)}}const N=[{path:"",component:(()=>{class i{constructor(e,n,p,u,U,E,O){this.formBuilder=e,this.errorService=n,this.translate=p,this.alertService=u,this.auth=U,this.router=E,this.applicationSettingsService=O,this.isProcessed=!1,this.permissions=[],this.eventPermissions=[]}ngOnInit(){this.auth.authenticated().subscribe({error:()=>{this.auth.setLoggedIn=!1,this.auth.setSessionExpired=!0,this.router.navigate(["/login"])},next:e=>{0==e.authenticated?(this.auth.setLoggedIn=!1,this.auth.setSessionExpired=!0,this.router.navigate(["/login"])):(this.getPermissions(),this.getEventPermissions())}}),this.updateApplicationSettingsForm=this.formBuilder.group({non_guest_email_domain:["@s.school.com",o.kI.required],max_friends:[2,o.kI.required],min_preferences:[3,o.kI.required],max_preferences:[5,o.kI.required]}),this.getApplicationSettings()}getApplicationSettings(){this.applicationSettingsService.getApplicationSettings().subscribe({error:e=>{this.errorService.errorOccurred.emit(e)},next:e=>{this.updateApplicationSettingsForm.patchValue(e.settings)}})}get errorControl(){return this.updateApplicationSettingsForm.controls}updateApplicationSettings(){!this.isProcessed&&this.updateApplicationSettingsForm.valid&&(this.isProcessed=!0,this.applicationSettingsService.updateEvent(this.updateApplicationSettingsForm.value).subscribe({error:e=>{if("The given data was invalid."==e.error.message)for(const n in e.error.errors){const p=[];for(const u in e.error.errors[n])p.push({[e.error.errors[n][u]]:!0});this.updateApplicationSettingsForm.controls[n].setErrors(p)}else"missingPermissions"==e.error.message?this.alertService.alert("danger",this.translate.instant("GENERAL.ERRORS.missingPermissions"),"","lock-closed"):this.errorService.errorOccurred.emit(e);this.isProcessed=!1},next:e=>{const n=e;this.alertService.alert("success",this.translate.instant("ACTIONS.MANAGE_SCHEDULE.title"),n.message,"checkmark")},complete:()=>{this.updateApplicationSettingsForm.reset(),this.isProcessed=!1,this.getApplicationSettings()}}))}getPermissions(){this.auth.permissions().subscribe({error:e=>{this.errorService.errorOccurred.emit(e)},next:e=>{this.permissions=e.permissions}})}getEventPermissions(){this.auth.eventPermissions().subscribe({error:e=>{this.errorService.errorOccurred.emit(e)},next:e=>{this.eventPermissions=e.permissions}})}arrayContainsArray(e,n){return n.every(function(p){return e.includes(p)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(o.qu),t.Y36(A.T),t.Y36(c.sK),t.Y36(h.c),t.Y36(S.e),t.Y36(l.F0),t.Y36(f))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-manage-application-settings"]],decls:43,vars:22,consts:[[3,"title"],["color","light"],[1,"inside-card-grid"],[3,"formGroup","ngSubmit"],["position","floating"],["formControlName","non_guest_email_domain","type","text"],[3,"errors"],["formControlName","max_friends","type","number"],["formControlName","min_preferences","type","number"],["formControlName","max_preferences","type","number"],[1,"ion-padding"],["type","submit","class","ion-no-margin","expand","block","color","primary",3,"disabled",4,"ngIf"],["type","submit","expand","block","color","primary",1,"ion-no-margin",3,"disabled"],["name","crescent"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-content"),t._UZ(1,"app-toolbar"),t.TgZ(2,"ion-grid"),t.TgZ(3,"ion-row"),t.TgZ(4,"ion-col"),t._UZ(5,"app-card-title-bar",0),t.ALo(6,"translate"),t.TgZ(7,"ion-card",1),t.TgZ(8,"ion-card-content"),t.TgZ(9,"ion-grid",2),t.TgZ(10,"ion-row"),t.TgZ(11,"ion-col"),t.TgZ(12,"form",3),t.NdJ("ngSubmit",function(){return n.updateApplicationSettings()}),t.TgZ(13,"ion-item",1),t.TgZ(14,"ion-label",4),t._uU(15),t.ALo(16,"translate"),t.qZA(),t._UZ(17,"ion-input",5),t.qZA(),t._UZ(18,"app-form-error",6),t._UZ(19,"br"),t.TgZ(20,"ion-item",1),t.TgZ(21,"ion-label",4),t._uU(22),t.ALo(23,"translate"),t.qZA(),t._UZ(24,"ion-input",7),t.qZA(),t._UZ(25,"app-form-error",6),t._UZ(26,"br"),t.TgZ(27,"ion-item",1),t.TgZ(28,"ion-label",4),t._uU(29),t.ALo(30,"translate"),t.qZA(),t._UZ(31,"ion-input",8),t.qZA(),t._UZ(32,"app-form-error",6),t._UZ(33,"br"),t.TgZ(34,"ion-item",1),t.TgZ(35,"ion-label",4),t._uU(36),t.ALo(37,"translate"),t.qZA(),t._UZ(38,"ion-input",9),t.qZA(),t._UZ(39,"app-form-error",6),t.TgZ(40,"div",10),t.YNc(41,P,3,4,"ion-button",11),t.YNc(42,I,2,1,"ion-button",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(5),t.s9C("title",t.lcZ(6,12,"ACTIONS.MANAGE_APPLICATION_SETTINGS.title")),t.xp6(7),t.Q6J("formGroup",n.updateApplicationSettingsForm),t.xp6(3),t.Oqu(t.lcZ(16,14,"ACTIONS.MANAGE_APPLICATION_SETTINGS.INPUT.non_guest_email_domain")),t.xp6(3),t.Q6J("errors",n.errorControl.non_guest_email_domain.errors),t.xp6(4),t.Oqu(t.lcZ(23,16,"ACTIONS.MANAGE_APPLICATION_SETTINGS.INPUT.max_friends")),t.xp6(3),t.Q6J("errors",n.errorControl.max_friends.errors),t.xp6(4),t.Oqu(t.lcZ(30,18,"ACTIONS.MANAGE_APPLICATION_SETTINGS.INPUT.min_preferences")),t.xp6(3),t.Q6J("errors",n.errorControl.min_preferences.errors),t.xp6(4),t.Oqu(t.lcZ(37,20,"ACTIONS.MANAGE_APPLICATION_SETTINGS.INPUT.max_preferences")),t.xp6(3),t.Q6J("errors",n.errorControl.max_preferences.errors),t.xp6(2),t.Q6J("ngIf",!n.isProcessed),t.xp6(1),t.Q6J("ngIf",n.isProcessed))},directives:[s.W2,Z.n,s.jY,s.Nd,s.wI,T.$,s.PM,s.FN,o._Y,o.JL,o.sg,s.Ie,s.Q$,s.pK,s.j9,o.JJ,o.u,v.A,s.as,d.O5,s.YG,s.PQ],pipes:[c.X$],styles:[""]}),i})()}];let M=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.Bz.forChild(N)],l.Bz]}),i})();var x=r(6453),C=r(6060);let b=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.ez,o.u5,s.Pc,M,x.K,c.aw.forChild({loader:{provide:c.Zw,useFactory:C.p,deps:[g.eN]}}),o.UX]]}),i})()}}]);