(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{o4iB:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),b=u("LLt/"),t=u("ITiG"),i=function(){function l(l,n){var u=this;this.auth=l,this.userService=n,this.uid=this.auth.user,this.user={firstname:"",lastname:"",points:0,email:""},console.log(this.uid),this.userService.getUser(this.uid).subscribe(function(l){console.log(l),u.user=l})}return l.prototype.ngOnInit=function(){},l.prototype.logout=function(){this.auth.logout()},l}(),e=function(){return function(){}}(),r=u("pMnS"),a=u("oBZk"),c=u("ZZ/e"),s=o.nb({encapsulation:0,styles:[[""]],data:{}});function p(l){return o.Eb(0,[(l()(),o.pb(0,0,null,null,11,"ion-header",[],null,null,null,a.E,a.i)),o.ob(1,49152,null,0,c.z,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,a.R,a.v)),o.ob(3,49152,null,0,c.zb,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.z,a.d)),o.ob(5,49152,null,0,c.j,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/login"]],null,[[null,"click"]],function(l,n,u){var b=!0;return"click"===n&&(b=!1!==o.yb(l,8).onClick(u)&&b),b},a.x,a.b)),o.ob(7,49152,null,0,c.e,[o.h,o.k],{defaultHref:[0,"defaultHref"]},null),o.ob(8,16384,null,0,c.f,[[2,c.fb],c.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),o.pb(9,0,null,0,2,"ion-title",[],null,null,null,a.Q,a.u)),o.ob(10,49152,null,0,c.xb,[o.h,o.k],null,null),(l()(),o.Db(-1,0,["Travlr Profile"])),(l()(),o.pb(12,0,null,null,30,"ion-content",[["padding",""]],null,null,null,a.B,a.f)),o.ob(13,49152,null,0,c.s,[o.h,o.k],null,null),(l()(),o.pb(14,0,null,0,25,"ion-list",[["inset",""]],null,null,null,a.L,a.p)),o.ob(15,49152,null,0,c.M,[o.h,o.k],{inset:[0,"inset"]},null),(l()(),o.pb(16,0,null,0,5,"ion-item",[],null,null,null,a.J,a.m)),o.ob(17,49152,null,0,c.F,[o.h,o.k],null,null),(l()(),o.pb(18,0,null,0,2,"ion-label",[],null,null,null,a.K,a.o)),o.ob(19,49152,null,0,c.L,[o.h,o.k],null,null),(l()(),o.Db(-1,0,["First Name:"])),(l()(),o.Db(21,0,[" "," "])),(l()(),o.pb(22,0,null,0,5,"ion-item",[],null,null,null,a.J,a.m)),o.ob(23,49152,null,0,c.F,[o.h,o.k],null,null),(l()(),o.pb(24,0,null,0,2,"ion-label",[],null,null,null,a.K,a.o)),o.ob(25,49152,null,0,c.L,[o.h,o.k],null,null),(l()(),o.Db(-1,0,["Last Name:"])),(l()(),o.Db(27,0,[" "," "])),(l()(),o.pb(28,0,null,0,5,"ion-item",[],null,null,null,a.J,a.m)),o.ob(29,49152,null,0,c.F,[o.h,o.k],null,null),(l()(),o.pb(30,0,null,0,2,"ion-label",[],null,null,null,a.K,a.o)),o.ob(31,49152,null,0,c.L,[o.h,o.k],null,null),(l()(),o.Db(-1,0,["Email:"])),(l()(),o.Db(33,0,[" "," "])),(l()(),o.pb(34,0,null,0,5,"ion-item",[],null,null,null,a.J,a.m)),o.ob(35,49152,null,0,c.F,[o.h,o.k],null,null),(l()(),o.pb(36,0,null,0,2,"ion-label",[],null,null,null,a.K,a.o)),o.ob(37,49152,null,0,c.L,[o.h,o.k],null,null),(l()(),o.Db(-1,0,["Points:"])),(l()(),o.Db(39,0,[" "," "])),(l()(),o.pb(40,0,null,0,2,"ion-button",[["color","danger"],["expand","block"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.logout()&&o),o},a.y,a.c)),o.ob(41,49152,null,0,c.i,[o.h,o.k],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),o.Db(-1,0,["Logout"]))],function(l,n){l(n,3,0,"primary"),l(n,7,0,"/login"),l(n,8,0,"/login"),l(n,15,0,""),l(n,41,0,"danger","block")},function(l,n){var u=n.component;l(n,21,0,u.user.firstname),l(n,27,0,u.user.lastname),l(n,33,0,u.user.email),l(n,39,0,u.user.points)})}function f(l){return o.Eb(0,[(l()(),o.pb(0,0,null,null,1,"app-profile",[],null,null,null,p,s)),o.ob(1,114688,null,0,i,[b.a,t.a],null,null)],function(l,n){l(n,1,0)},null)}var h=o.lb("app-profile",i,f,{},{},[]),k=u("Ip0R"),m=u("gIcY"),d=u("ZYCi");u.d(n,"ProfilePageModuleNgFactory",function(){return w});var w=o.mb(e,[],function(l){return o.vb([o.wb(512,o.j,o.bb,[[8,[r.a,h]],[3,o.j],o.x]),o.wb(4608,k.k,k.j,[o.u,[2,k.r]]),o.wb(4608,m.m,m.m,[]),o.wb(4608,c.a,c.a,[o.z,o.g]),o.wb(4608,c.Db,c.Db,[c.a,o.j,o.q,k.c]),o.wb(4608,c.Hb,c.Hb,[c.a,o.j,o.q,k.c]),o.wb(1073742336,k.b,k.b,[]),o.wb(1073742336,m.k,m.k,[]),o.wb(1073742336,m.b,m.b,[]),o.wb(1073742336,c.Bb,c.Bb,[]),o.wb(1073742336,d.o,d.o,[[2,d.u],[2,d.m]]),o.wb(1073742336,e,e,[]),o.wb(1024,d.k,function(){return[[{path:"",component:i}]]},[])])})}}]);