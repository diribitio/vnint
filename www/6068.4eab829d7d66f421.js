"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6068],{6068:(v,p,a)=>{a.r(p),a.d(p,{CreateProjectPageModule:()=>L});var g=a(6019),i=a(9133),A=a(4522),n=a(6990),Z=a(6431),T=a(6952),e=a(3245),C=a(1856),u=a(9290),P=a(5729),f=a(2677),E=a(6733),h=a(1516),_=a(1750);function O(o,c){if(1&o&&(e.TgZ(0,"ion-select-option",24),e._uU(1),e.qZA()),2&o){const r=c.$implicit;e.s9C("value",r.key),e.xp6(1),e.Oqu(r.value)}}const d=function(){return{standalone:!0}};function N(o,c){if(1&o){const r=e.EpF();e.ynx(0),e.TgZ(1,"ion-col",25),e.TgZ(2,"ion-card",1),e.TgZ(3,"ion-card-content"),e.TgZ(4,"ion-label",26),e._uU(5),e.ALo(6,"translate"),e.ALo(7,"date"),e.ALo(8,"translate"),e.ALo(9,"translate"),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"ion-datetime",27),e.NdJ("ngModelChange",function(l){return e.CHM(r).$implicit.from=l}),e.ALo(12,"translate"),e.ALo(13,"translate"),e.ALo(14,"translate"),e.qZA(),e._UZ(15,"br"),e._UZ(16,"br"),e.TgZ(17,"ion-label",26),e._uU(18),e.ALo(19,"translate"),e.ALo(20,"date"),e.qZA(),e.TgZ(21,"ion-datetime",28),e.NdJ("ngModelChange",function(l){return e.CHM(r).$implicit.from=l}),e.ALo(22,"translate"),e.ALo(23,"translate"),e.ALo(24,"translate"),e.qZA(),e.TgZ(25,"ion-label",26),e._uU(26),e.ALo(27,"translate"),e.ALo(28,"date"),e.qZA(),e.TgZ(29,"ion-datetime",29),e.NdJ("ngModelChange",function(l){return e.CHM(r).$implicit.until=l}),e.ALo(30,"translate"),e.ALo(31,"translate"),e.ALo(32,"translate"),e.qZA(),e.qZA(),e.TgZ(33,"div",22),e.TgZ(34,"ion-button",30),e.NdJ("click",function(){const s=e.CHM(r).$implicit;return e.oxw().deleteTimeframe(s)}),e._uU(35,"delete"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&o){const r=c.$implicit;e.xp6(5),e.AsE("",e.lcZ(6,21,"ACTIONS.CREATE_PROJECT.INPUT.on")," ",e.gM2(7,23,r.from,e.lcZ(8,28,"GENERAL.timeDisplayFormat"),e.lcZ(9,30,"GENERAL.timezone"),e.lcZ(10,32,"GENERAL.locale")),""),e.xp6(6),e.s9C("doneText",e.lcZ(13,36,"GENERAL.POPUPS.done")),e.s9C("cancelText",e.lcZ(14,38,"GENERAL.POPUPS.cancel")),e.Q6J("locale",e.lcZ(12,34,"GENERAL.locale"))("ngModel",r.from)("ngModelOptions",e.DdM(62,d)),e.xp6(7),e.AsE("",e.lcZ(19,40,"ACTIONS.CREATE_PROJECT.INPUT.from")," ",e.xi3(20,42,r.from,"hh:mm"),""),e.xp6(3),e.s9C("doneText",e.lcZ(23,47,"GENERAL.POPUPS.done")),e.s9C("cancelText",e.lcZ(24,49,"GENERAL.POPUPS.cancel")),e.Q6J("locale",e.lcZ(22,45,"GENERAL.locale"))("ngModel",r.from)("ngModelOptions",e.DdM(63,d)),e.xp6(5),e.AsE("",e.lcZ(27,51,"ACTIONS.CREATE_PROJECT.INPUT.until")," ",e.xi3(28,53,r.until,"hh:mm"),""),e.xp6(3),e.s9C("doneText",e.lcZ(31,58,"GENERAL.POPUPS.done")),e.s9C("cancelText",e.lcZ(32,60,"GENERAL.POPUPS.cancel")),e.Q6J("locale",e.lcZ(30,56,"GENERAL.locale"))("ngModel",r.until)("ngModelOptions",e.DdM(64,d))}}const x=[{path:"",component:(()=>{class o{constructor(r,t,l,s,m,I,J){this.formBuilder=r,this.projectService=t,this.router=l,this.timeframeService=s,this.errorService=m,this.translate=I,this.alertService=J,this.timeframes=[],this.isProcessed=!1}ngOnInit(){this.createProjectForm=this.formBuilder.group({topic:["",i.kI.required],title:["",i.kI.required],image:null,description:["",i.kI.required],cost:[0,i.kI.required],min_grade:[5,i.kI.required],max_grade:[12,i.kI.required],min_participants:[5,i.kI.required],max_participants:[20,i.kI.required]})}ionViewWillEnter(){this.isProcessed=!1}get errorControl(){return this.createProjectForm.controls}changeFile(r){const t=r.target.files[0];t&&this.createProjectForm.patchValue({image:t})}createProject(){!this.isProcessed&&this.createProjectForm.valid&&(this.isProcessed=!0,this.projectService.createProject(this.createProjectForm.value).subscribe({error:r=>{if("The given data was invalid."==r.error.message)for(const t in r.error.errors){let l=[];for(const s in r.error.errors[t])l.push({[r.error.errors[t][s]]:!0});this.createProjectForm.controls[t].setErrors(l)}else"alreadyHasProject"==r.error.message?this.alertService.alert("danger",this.translate.instant("ACTIONS.CREATE_PROJECT.title"),this.translate.instant("ACTIONS.CREATE_PROJECT.ERRORS.alreadyHasProject"),"close"):this.errorService.errorOccurred.emit(r);this.isProcessed=!1},next:r=>{const t=r;this.alertService.alert("success",this.translate.instant("ACTIONS.CREATE_PROJECT.title"),t.message,"checkmark")},complete:()=>{this.timeframes.forEach(r=>{this.timeframeService.createTimeframe(r).subscribe({error:t=>{this.errorService.errorOccurred.emit(t)}})}),this.createProjectForm.reset(),this.isProcessed=!1,this.router.navigate(["/dashboard"])}}))}addTimeframe(){this.timeframes.push({from:null,until:null})}deleteTimeframe(r){this.timeframes=this.timeframes.filter(function(t){return t!=r})}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(i.qu),e.Y36(C.Y),e.Y36(T.F0),e.Y36(u.h),e.Y36(P.T),e.Y36(Z.sK),e.Y36(f.c))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-create-project"]],decls:101,vars:67,consts:[[3,"title"],["color","light"],[1,"inside-card-grid"],[3,"formGroup","ngSubmit"],["formControlName","topic",3,"placeholder","okText","cancelText"],[3,"value",4,"ngFor","ngForOf"],["formControlName","title","type","text",3,"placeholder"],[3,"errors"],["formControlName","description","type","text","rows","7",3,"placeholder"],["position","floating"],["formControlName","cost","type","text"],["lines","none","color","light"],["formControlName","image","accept",".png, .jpg","type","file",3,"change"],[1,"addTimeframeCards"],[4,"ngFor","ngForOf"],["horizontal","center","vertical","center","slot","fixed"],["color","light",3,"click"],["name","add"],["formControlName","min_grade","type","text"],["formControlName","max_grade","type","text"],["formControlName","min_participants","type","number"],["formControlName","max_participants","type","number"],[1,"ion-padding"],["color","primary","expand","block","type","submit",1,"ion-no-margin",3,"disabled"],[3,"value"],["sizeXl","6","sizeLg","6","sizeMd","12","sizeSm","12","sizeXs","12"],[1,"ion-padding-start"],["presentation","date","color","primary",3,"locale","ngModel","ngModelOptions","doneText","cancelText","ngModelChange"],["presentation","time","color","primary",3,"locale","ngModel","ngModelOptions","doneText","cancelText","ngModelChange"],["color","primary","presentation","time",3,"locale","ngModel","ngModelOptions","doneText","cancelText","ngModelChange"],["color","danger","expand","block",1,"ion-no-margin",3,"click"]],template:function(r,t){1&r&&(e.TgZ(0,"ion-content"),e._UZ(1,"app-toolbar"),e.TgZ(2,"ion-grid"),e.TgZ(3,"ion-row"),e.TgZ(4,"ion-col"),e._UZ(5,"app-card-title-bar",0),e.ALo(6,"translate"),e.TgZ(7,"ion-card",1),e.TgZ(8,"ion-card-content"),e.TgZ(9,"ion-grid",2),e.TgZ(10,"ion-row"),e.TgZ(11,"ion-col"),e.TgZ(12,"form",3),e.NdJ("ngSubmit",function(){return t.createProject()}),e.TgZ(13,"ion-item",1),e.TgZ(14,"ion-label"),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"ion-select",4),e.ALo(18,"translate"),e.ALo(19,"translate"),e.ALo(20,"translate"),e.YNc(21,O,2,2,"ion-select-option",5),e.ALo(22,"keyvalue"),e.ALo(23,"translate"),e.qZA(),e.qZA(),e.TgZ(24,"ion-item",1),e._UZ(25,"ion-input",6),e.ALo(26,"translate"),e.qZA(),e._UZ(27,"app-form-error",7),e.TgZ(28,"ion-item",1),e._UZ(29,"ion-textarea",8),e.ALo(30,"translate"),e.qZA(),e._UZ(31,"app-form-error",7),e.TgZ(32,"ion-item",1),e.TgZ(33,"ion-label",9),e._uU(34),e.ALo(35,"translate"),e.qZA(),e._UZ(36,"ion-input",10),e.qZA(),e._UZ(37,"app-form-error",7),e.TgZ(38,"ion-list"),e.TgZ(39,"ion-item",11),e.TgZ(40,"ion-label"),e._uU(41),e.ALo(42,"translate"),e.qZA(),e.qZA(),e.TgZ(43,"ion-item",1),e.TgZ(44,"ion-input",12),e.NdJ("change",function(s){return t.changeFile(s)}),e.qZA(),e.qZA(),e._UZ(45,"app-form-error",7),e.qZA(),e.TgZ(46,"ion-list"),e.TgZ(47,"ion-item",11),e.TgZ(48,"ion-label"),e._uU(49),e.ALo(50,"translate"),e.qZA(),e.qZA(),e.TgZ(51,"div",13),e.TgZ(52,"ion-grid",2),e.TgZ(53,"ion-row"),e.YNc(54,N,36,65,"ng-container",14),e.TgZ(55,"ion-col"),e.TgZ(56,"ion-card",1),e.TgZ(57,"div"),e.TgZ(58,"ion-fab",15),e.TgZ(59,"ion-fab-button",16),e.NdJ("click",function(){return t.addTimeframe()}),e._UZ(60,"ion-icon",17),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(61,"br"),e._UZ(62,"hr"),e.qZA(),e.TgZ(63,"ion-list"),e.TgZ(64,"ion-item",11),e.TgZ(65,"ion-label"),e._uU(66),e.ALo(67,"translate"),e.qZA(),e.qZA(),e.TgZ(68,"ion-item",1),e.TgZ(69,"ion-label"),e._uU(70),e.ALo(71,"translate"),e.qZA(),e._UZ(72,"ion-input",18),e.qZA(),e._UZ(73,"app-form-error",7),e.TgZ(74,"ion-item",1),e.TgZ(75,"ion-label"),e._uU(76),e.ALo(77,"translate"),e.qZA(),e._UZ(78,"ion-input",19),e.qZA(),e._UZ(79,"app-form-error",7),e.qZA(),e.TgZ(80,"ion-list"),e.TgZ(81,"ion-item",11),e.TgZ(82,"ion-label"),e._uU(83),e.ALo(84,"translate"),e.qZA(),e.qZA(),e.TgZ(85,"ion-item",1),e.TgZ(86,"ion-label"),e._uU(87),e.ALo(88,"translate"),e.qZA(),e._UZ(89,"ion-input",20),e.qZA(),e._UZ(90,"app-form-error",7),e.TgZ(91,"ion-item",1),e.TgZ(92,"ion-label"),e._uU(93),e.ALo(94,"translate"),e.qZA(),e._UZ(95,"ion-input",21),e.qZA(),e._UZ(96,"app-form-error",7),e.qZA(),e.TgZ(97,"div",22),e.TgZ(98,"ion-button",23),e._uU(99),e.ALo(100,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.xp6(5),e.s9C("title",e.lcZ(6,29,"ACTIONS.CREATE_PROJECT.title")),e.xp6(7),e.Q6J("formGroup",t.createProjectForm),e.xp6(3),e.Oqu(e.lcZ(16,31,"ACTIONS.CREATE_PROJECT.INPUT.topic")),e.xp6(2),e.s9C("placeholder",e.lcZ(18,33,"ACTIONS.CREATE_PROJECT.topicPlaceholder")),e.s9C("okText",e.lcZ(19,35,"GENERAL.POPUPS.ok")),e.s9C("cancelText",e.lcZ(20,37,"GENERAL.POPUPS.cancel")),e.xp6(4),e.Q6J("ngForOf",e.lcZ(22,39,e.lcZ(23,41,"GENERAL.PROJECT_TOPICS"))),e.xp6(4),e.s9C("placeholder",e.lcZ(26,43,"ACTIONS.CREATE_PROJECT.INPUT.title")),e.xp6(2),e.Q6J("errors",t.errorControl.title.errors),e.xp6(2),e.s9C("placeholder",e.lcZ(30,45,"ACTIONS.CREATE_PROJECT.INPUT.description")),e.xp6(2),e.Q6J("errors",t.errorControl.description.errors),e.xp6(3),e.Oqu(e.lcZ(35,47,"ACTIONS.CREATE_PROJECT.INPUT.cost")),e.xp6(3),e.Q6J("errors",t.errorControl.cost.errors),e.xp6(4),e.Oqu(e.lcZ(42,49,"ACTIONS.CREATE_PROJECT.INPUT.image")),e.xp6(4),e.Q6J("errors",t.errorControl.image.errors),e.xp6(4),e.Oqu(e.lcZ(50,51,"ACTIONS.CREATE_PROJECT.INPUT.timeframe")),e.xp6(5),e.Q6J("ngForOf",t.timeframes),e.xp6(12),e.Oqu(e.lcZ(67,53,"ACTIONS.CREATE_PROJECT.INPUT.grade")),e.xp6(4),e.Oqu(e.lcZ(71,55,"ACTIONS.CREATE_PROJECT.INPUT.from")),e.xp6(3),e.Q6J("errors",t.errorControl.min_grade.errors),e.xp6(3),e.Oqu(e.lcZ(77,57,"ACTIONS.CREATE_PROJECT.INPUT.until")),e.xp6(3),e.Q6J("errors",t.errorControl.max_grade.errors),e.xp6(4),e.Oqu(e.lcZ(84,59,"ACTIONS.CREATE_PROJECT.INPUT.capacity")),e.xp6(4),e.Oqu(e.lcZ(88,61,"ACTIONS.CREATE_PROJECT.INPUT.from")),e.xp6(3),e.Q6J("errors",t.errorControl.min_participants.errors),e.xp6(3),e.Oqu(e.lcZ(94,63,"ACTIONS.CREATE_PROJECT.INPUT.until")),e.xp6(3),e.Q6J("errors",t.errorControl.max_participants.errors),e.xp6(2),e.Q6J("disabled",t.createProjectForm.invalid),e.xp6(1),e.Oqu(e.lcZ(100,65,"ACTIONS.CREATE_PROJECT.INPUT.submitButton")))},directives:[n.W2,E.n,n.jY,n.Nd,n.wI,h.$,n.PM,n.FN,i._Y,i.JL,i.sg,n.Ie,n.Q$,n.t9,n.QI,i.JJ,i.u,g.sg,n.pK,n.j9,_.A,n.g2,n.q_,n.IJ,n.W4,n.gu,n.as,n.YG,n.n0,n.x4,i.On],pipes:[Z.X$,g.Nd,g.uU],styles:[".addTimeframeCards[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{height:100%;min-height:100px}hr[_ngcontent-%COMP%]{background-color:#dedede}"]}),o})()}];let q=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[T.Bz.forChild(x)],T.Bz]}),o})();var R=a(6453),U=a(6060);let L=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.ez,i.u5,n.Pc,q,R.K,i.UX,Z.aw.forChild({loader:{provide:Z.Zw,useFactory:U.p,deps:[A.eN]}})]]}),o})()}}]);