"use strict";(self.webpackChunknuocgiaikhat=self.webpackChunknuocgiaikhat||[]).push([[824],{3824:(T,m,r)=>{r.r(m),r.d(m,{AdminModule:()=>M});var c=r(6895),a=r(6773),t=r(8256),l=r(8734),p=r(433);let s=(()=>{class e{constructor(n,o){this.AdminService=n,this.Router=o,this.listadd={name:"",sale:"",priceold:"",img:""}}ngOnInit(){}addProduct(){this.AdminService.addProduct(this.listadd).subscribe(n=>{alert("Th\xeam sa\u0309n ph\xe2\u0309m tha\u0300nh c\xf4ng"),this.Router.navigateByUrl("/admin/admin-product")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.l),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-addproduct"]],decls:37,vars:5,consts:[["lang","en"],["charset","UTF-8"],["http-equiv","X-UA-Compatible","content","IE=edge"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"wrapper"],[1,"container"],[2,"width","100%"],["type","text","placeholder","T\xean sa\u0309n ph\xe2\u0309m",1,"input-addproduct",3,"ngModel","ngModelChange"],["type","text","placeholder","sale",1,"input-addproduct",3,"ngModel","ngModelChange"],["type","text","placeholder","gia\u0301 sa\u0309n ph\xe2\u0309m",1,"input-addproduct",3,"ngModel","ngModelChange"],["type","text","placeholder","M\xf4 ta\u0309sa\u0309n ph\xe2\u0309m",1,"input-addproduct",3,"ngModel","ngModelChange"],["type","text","placeholder","img",3,"ngModel","ngModelChange"],[1,"addbutton",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"html",0)(1,"head"),t._UZ(2,"meta",1)(3,"meta",2)(4,"meta",3),t.TgZ(5,"title"),t._uU(6,"Document"),t.qZA()(),t.TgZ(7,"body")(8,"div",4)(9,"div",5)(10,"h1"),t._uU(11,"Th\xeam sa\u0309n ph\xe2\u0309m m\u01a1\u0301i "),t.qZA(),t.TgZ(12,"table",6)(13,"tr")(14,"th"),t._uU(15,"T\xean sa\u0309n ph\xe2\u0309m"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"gia\u0309m gia\u0301(%)"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Gia\u0301 ti\xea\u0300n(ngi\u0300n \u0111\xf4\u0300ng)"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"M\xf4 ta\u0309 sa\u0309n ph\xe2\u0309m"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Link a\u0309nh sa\u0309n ph\xe2\u0309m"),t.qZA()(),t.TgZ(24,"tr")(25,"td")(26,"input",7),t.NdJ("ngModelChange",function(d){return o.listadd.name=d}),t.qZA()(),t.TgZ(27,"td")(28,"input",8),t.NdJ("ngModelChange",function(d){return o.listadd.sale=d}),t.qZA()(),t.TgZ(29,"td")(30,"input",9),t.NdJ("ngModelChange",function(d){return o.listadd.priceold=d}),t.qZA()(),t.TgZ(31,"td")(32,"input",10),t.NdJ("ngModelChange",function(d){return o.listadd.detail=d}),t.qZA()(),t.TgZ(33,"td")(34,"input",11),t.NdJ("ngModelChange",function(d){return o.listadd.img=d}),t.qZA()()()(),t.TgZ(35,"button",12),t.NdJ("click",function(){return o.addProduct()}),t._uU(36,"Th\xeam sa\u0309n ph\xe2\u0309m"),t.qZA()()()()()),2&n&&(t.xp6(26),t.Q6J("ngModel",o.listadd.name),t.xp6(2),t.Q6J("ngModel",o.listadd.sale),t.xp6(2),t.Q6J("ngModel",o.listadd.priceold),t.xp6(2),t.Q6J("ngModel",o.listadd.detail),t.xp6(2),t.Q6J("ngModel",o.listadd.img))},dependencies:[p.Fj,p.JJ,p.On],styles:[".wrapper[_ngcontent-%COMP%]{max-width:1920px;z-index:1}.container[_ngcontent-%COMP%]{max-width:1170px;padding:0 15px;margin:0 auto}h1[_ngcontent-%COMP%]{text-align:center}table[_ngcontent-%COMP%]{width:100%;height:200px}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:center;border:1px solid black}.addbutton[_ngcontent-%COMP%]{cursor:pointer;display:block;border:none;background-color:red;width:200px;border-radius:20px;margin:20px auto;padding:20px;color:#fff;font-size:20px}.input-addproduct[_ngcontent-%COMP%]{border:none;outline:none;font-size:16px}"]}),e})();var h=r(900);function _(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"tbody")(1,"tr")(2,"td",8),t._uU(3),t.qZA(),t.TgZ(4,"td",8),t._uU(5),t.qZA(),t.TgZ(6,"td",8),t._uU(7),t.qZA(),t.TgZ(8,"td",8),t._uU(9),t.qZA(),t.TgZ(10,"td",8),t._uU(11),t.qZA(),t.TgZ(12,"td",8)(13,"button",10),t.NdJ("click",function(){const d=t.CHM(n).$implicit,g=t.oxw();return t.KtG(g.deleteContent(d.id))}),t._uU(14,"Xo\u0301a"),t.qZA()()()()}if(2&e){const n=i.$implicit;t.xp6(3),t.Oqu(n.lastname),t.xp6(2),t.Oqu(n.firstname),t.xp6(2),t.Oqu(n.phone),t.xp6(2),t.Oqu(n.email),t.xp6(2),t.Oqu(n.content)}}let A=(()=>{class e{constructor(n){this.AppService=n,this.list=[]}ngOnInit(){this.renderContent()}renderContent(){return this.AppService.renderContent().subscribe(n=>{this.list=n})}deleteContent(n){console.log(n),this.AppService.deleteContent(n).subscribe(o=>{this.list=this.list.filter(u=>u.id!=n),alert("Xo\u0301a tha\u0300nh c\xf4ng")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.z))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-contact"]],decls:27,vars:1,consts:[["lang","en"],["charset","UTF-8"],["http-equiv","X-UA-Compatible","content","IE=edge"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"wrapper"],[1,"container"],[1,"admin-highlight"],[2,"width","100%"],[1,"item-acount"],[4,"ngFor","ngForOf"],[1,"button-delete",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"html",0)(1,"head"),t._UZ(2,"meta",1)(3,"meta",2)(4,"meta",3),t.TgZ(5,"title"),t._uU(6,"Document"),t.qZA()(),t.TgZ(7,"body")(8,"div",4)(9,"div",5)(10,"h1",6),t._uU(11,"Danh sa\u0301ch kha\u0301ch ha\u0300ng g\u0103\u0323p v\xe2\u0301n \u0111\xea\u0300 c\xe2\u0300n li\xean h\xea\u0323"),t.qZA(),t.TgZ(12,"table",7)(13,"tr")(14,"th",8),t._uU(15,"Ho\u0323"),t.qZA(),t.TgZ(16,"th",8),t._uU(17,"T\xean lo\u0301t"),t.qZA(),t.TgZ(18,"th",8),t._uU(19,"S\xf4\u0301 \u0111i\xea\u0323n thoa\u0323i"),t.qZA(),t.TgZ(20,"th",8),t._uU(21,"Email"),t.qZA(),t.TgZ(22,"th",8),t._uU(23,"N\xf4\u0323i dung li\xean h\xea\u0323"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"X\u01b0\u0309 ly\u0301 y\xeau c\xe2\u0300u"),t.qZA()(),t.YNc(26,_,15,5,"tbody",9),t.qZA()()()()()),2&n&&(t.xp6(26),t.Q6J("ngForOf",o.list))},dependencies:[c.sg],styles:["body[_ngcontent-%COMP%]{font-size:1.6rem;font-family:Montserrat;font-weight:500;line-height:20px}.wrapper[_ngcontent-%COMP%]{max-width:1920px;z-index:1}.container[_ngcontent-%COMP%]{max-width:1170px;padding:0 15px;margin:0 auto}.admin-highlight[_ngcontent-%COMP%]{margin-bottom:100px;text-align:center;background-color:#d85e6a;padding:20px;border-radius:10px;box-shadow:#32325d40 0 50px 100px -20px,#0000004d 0 30px 60px -30px,#0a254059 0 -2px 6px inset}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid black}.item-acount[_ngcontent-%COMP%]{font-size:20px;padding:20px;align-items:center;line-height:30px}table[_ngcontent-%COMP%]{margin-bottom:50px}.button-delete[_ngcontent-%COMP%]{transition:all .2s ease;cursor:pointer;background-color:#d85e6a;font-size:20px;color:wheat;box-shadow:#32325d40 0 50px 100px -20px,#0000004d 0 30px 60px -30px,#0a254059 0 -2px 6px inset}.button-delete[_ngcontent-%COMP%]:hover{box-shadow:#00000029 0 3px 6px,#0000003b 0 3px 6px}"]}),e})(),C=(()=>{class e{constructor(n,o,u){this.AdminService=n,this.route=o,this.Router=u,this.edit=[]}ngOnInit(){this.getDetailProduct()}getDetailProduct(){this.route.params.subscribe(n=>{this.AdminService.getDetailProduct(n.id).subscribe(o=>{this.edit=o})})}updateProduct(){this.AdminService.updateProduct(this.edit.id,this.edit).subscribe(n=>{this.Router.navigateByUrl("/admin/admin-product")}),alert("C\xe2\u0323p nh\xe2\u0323t tha\u0300nh c\xf4ng")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.l),t.Y36(a.gz),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-editproduct"]],decls:37,vars:10,consts:[["lang","en"],["charset","UTF-8"],["http-equiv","X-UA-Compatible","content","IE=edge"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"wrapper"],[1,"container"],[2,"width","100%"],["type","text",1,"input-addproduct",3,"value","ngModel","ngModelChange"],["type","text",3,"value","ngModel","ngModelChange"],[1,"addbutton",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"html",0)(1,"head"),t._UZ(2,"meta",1)(3,"meta",2)(4,"meta",3),t.TgZ(5,"title"),t._uU(6,"Document"),t.qZA()(),t.TgZ(7,"body")(8,"div",4)(9,"div",5)(10,"h1"),t._uU(11,"S\u01b0\u0309a Sa\u0309n Ph\xe2\u0309m"),t.qZA(),t.TgZ(12,"table",6)(13,"tr")(14,"th"),t._uU(15,"T\xean sa\u0309n ph\xe2\u0309m"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"gia\u0309m gia\u0301(%)"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Gia\u0301 ti\xea\u0300n(ngi\u0300n \u0111\xf4\u0300ng)"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"M\xf4 ta\u0309 sa\u0309n ph\xe2\u0309m"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Link a\u0309nh sa\u0309n ph\xe2\u0309m"),t.qZA()(),t.TgZ(24,"tr")(25,"td")(26,"input",7),t.NdJ("ngModelChange",function(d){return o.edit.name=d}),t.qZA()(),t.TgZ(27,"td")(28,"input",7),t.NdJ("ngModelChange",function(d){return o.edit.sale=d}),t.qZA()(),t.TgZ(29,"td")(30,"input",7),t.NdJ("ngModelChange",function(d){return o.edit.priceold=d}),t.qZA()(),t.TgZ(31,"td")(32,"input",7),t.NdJ("ngModelChange",function(d){return o.edit.detail=d}),t.qZA()(),t.TgZ(33,"td")(34,"input",8),t.NdJ("ngModelChange",function(d){return o.edit.img=d}),t.qZA()()()(),t.TgZ(35,"button",9),t.NdJ("click",function(){return o.updateProduct()}),t._uU(36,"C\xe2\u0323p nh\xe2\u0323t"),t.qZA()()()()()),2&n&&(t.xp6(26),t.s9C("value",o.edit.name),t.Q6J("ngModel",o.edit.name),t.xp6(2),t.s9C("value",o.edit.sale),t.Q6J("ngModel",o.edit.sale),t.xp6(2),t.s9C("value",o.edit.priceold),t.Q6J("ngModel",o.edit.priceold),t.xp6(2),t.s9C("value",o.edit.detail),t.Q6J("ngModel",o.edit.detail),t.xp6(2),t.s9C("value",o.edit.img),t.Q6J("ngModel",o.edit.img))},dependencies:[p.Fj,p.JJ,p.On],styles:[".wrapper[_ngcontent-%COMP%]{max-width:1920px;z-index:1}.container[_ngcontent-%COMP%]{max-width:1170px;padding:0 15px;margin:0 auto}h1[_ngcontent-%COMP%]{text-align:center}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:center;border:1px solid black}table[_ngcontent-%COMP%]{width:100%;height:200px}.addbutton[_ngcontent-%COMP%]{cursor:pointer;display:block;border:none;background-color:red;width:200px;border-radius:20px;margin:20px auto;padding:20px;color:#fff;font-size:20px}.input-addproduct[_ngcontent-%COMP%]{border:none;outline:none;font-size:16px}"]}),e})();function Z(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"tbody")(1,"tr",9)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.ALo(10,"number"),t.qZA(),t.TgZ(11,"td"),t._UZ(12,"img",10),t.qZA(),t.TgZ(13,"td")(14,"button",11),t._uU(15,"S\u01b0\u0309a"),t.qZA(),t.TgZ(16,"button",12),t.NdJ("click",function(){const d=t.CHM(n).$implicit,g=t.oxw();return t.KtG(g.deleteProduct(d.id))}),t._uU(17,"Xo\u0301a"),t.qZA()()()()}if(2&e){const n=i.$implicit;t.xp6(3),t.Oqu(n.name),t.xp6(2),t.Oqu(n.sale),t.xp6(2),t.Oqu(n.priceold),t.xp6(2),t.Oqu(t.xi3(10,6,n.priceold-n.priceold*n.sale/100,"1.0-0")),t.xp6(3),t.s9C("src",n.img,t.LSH),t.xp6(2),t.MGl("routerLink","../admin-editproduct/",n.id,"")}}const x=[{path:"",component:(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin"]],decls:28,vars:0,consts:[["lang","en"],["charset","UTF-8"],["http-equiv","X-UA-Compatible","content","IE=edge"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"wrapper"],[1,"container"],[1,"quantrivien"],[1,"border"],["routerLink","../admin/admin-contact",1,"thea","thea-1"],["routerLink","../admin/admin-product",1,"thea","thea-2"]],template:function(n,o){1&n&&(t.TgZ(0,"html",0)(1,"head"),t._UZ(2,"meta",1)(3,"meta",2)(4,"meta",3),t.TgZ(5,"title"),t._uU(6,"Document"),t.qZA()(),t.TgZ(7,"body")(8,"html",0)(9,"head"),t._UZ(10,"meta",1)(11,"meta",2)(12,"meta",3),t.TgZ(13,"title"),t._uU(14,"Document"),t.qZA()(),t.TgZ(15,"body")(16,"div",4)(17,"div",5)(18,"h1",6),t._uU(19,"Qua\u0309n tri\u0323 vi\xean(Admin)"),t.qZA(),t.TgZ(20,"div",7)(21,"a",8),t._uU(22,"Qua\u0309n ly\u0301 li\xean h\xea\u0323 t\u01b0\u0300 kha\u0301ch ha\u0300ng "),t.qZA(),t._UZ(23,"br"),t.TgZ(24,"a",9),t._uU(25,"Qua\u0309n ly\u0301 sa\u0309n ph\xe2\u0309m "),t.qZA(),t._UZ(26,"br"),t.qZA()()()()(),t._UZ(27,"router-outlet"),t.qZA()())},dependencies:[a.lC,a.yS],styles:[".wrapper[_ngcontent-%COMP%]{max-width:1920px;z-index:1}.container[_ngcontent-%COMP%]{max-width:1170px;padding:0 15px;margin:0 auto}.border[_ngcontent-%COMP%]{border:1px solid black;margin:100px auto;text-align:center}.quantrivien[_ngcontent-%COMP%]{text-align:center;margin-top:30px;font-size:60px}.thea[_ngcontent-%COMP%]{cursor:pointer;display:block;font-size:20px;text-decoration:none;background-color:red;color:#fff;border-radius:20px;margin:10px 10px 30px;padding:10px}.thea-1[_ngcontent-%COMP%]{margin-bottom:30px}"]}),e})()},{path:"admin-contact",component:A},{path:"admin-product",component:(()=>{class e{constructor(n){this.AdminService=n,this.listproductAdmin=[]}ngOnInit(){this.getProduct()}getProduct(){return this.AdminService.getProduct().subscribe(n=>{this.listproductAdmin=n})}deleteProduct(n){return this.AdminService.deleteProduct(n).subscribe(o=>{this.listproductAdmin=this.listproductAdmin.filter(u=>u.id!=n),alert("Xo\u0301a sa\u0309n ph\xe2\u0309m tha\u0300nh c\xf4ng")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.l))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-product"]],decls:29,vars:1,consts:[["lang","en"],["charset","UTF-8"],["http-equiv","X-UA-Compatible","content","IE=edge"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"header","title"],[1,"addproduct"],["routerLink","../admin-addproduct",1,"addproduct-link"],[2,"width","100%"],[4,"ngFor","ngForOf"],["ng-app",""],["alt","",1,"anhsanpham",3,"src"],[1,"buttonclick",3,"routerLink"],[1,"buttonclick",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"html",0)(1,"head"),t._UZ(2,"meta",1)(3,"meta",2)(4,"meta",3),t.TgZ(5,"title"),t._uU(6,"Document"),t.qZA()(),t.TgZ(7,"body")(8,"h1",4),t._uU(9," Danh sa\u0301ch qua\u0309n ly\u0301 sa\u0309n ph\xe2\u0309m "),t.qZA(),t.TgZ(10,"h3",5),t._uU(11,"Th\xeam sa\u0309n ph\xe2\u0309m:"),t.qZA(),t.TgZ(12,"a",6),t._uU(13,"Th\xeam"),t.qZA(),t.TgZ(14,"table",7)(15,"tr")(16,"th"),t._uU(17,"T\xean sa\u0309n ph\xe2\u0309m"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Discount(%)"),t.qZA(),t.TgZ(20,"th"),t._uU(21,"Gia\u0301 g\xf4\u0301c(nghi\u0300n \u0111\xf4\u0300ng)"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Gia\u0301 khuy\xea\u0301n ma\u0303i( nghi\u0300n \u0111\xf4\u0300ng)"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"A\u0309nh sa\u0309n ph\xe2\u0309m"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Admin"),t.qZA()(),t.YNc(28,Z,18,9,"tbody",8),t.qZA()()()),2&n&&(t.xp6(28),t.Q6J("ngForOf",o.listproductAdmin))},dependencies:[c.sg,a.rH,a.yS,c.JJ],styles:[".wrapper[_ngcontent-%COMP%]{max-width:1920px;z-index:1}.container[_ngcontent-%COMP%]{max-width:1170px;padding:0 15px;margin:0 auto}table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{border:1px solid black;text-align:center}.anhsanpham[_ngcontent-%COMP%]{text-align:center;width:100px;height:100px}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{font-size:19px}.buttonclick[_ngcontent-%COMP%]{cursor:pointer;font-size:18px;padding:10px 30px;margin-left:10px;color:#fff;background-color:#034da2;border:none;border-radius:20px}.buttonclick[_ngcontent-%COMP%]:hover{background-color:#5812c8;color:#fff}.addproduct[_ngcontent-%COMP%]{display:inline-block;padding:10px}.addproduct-link[_ngcontent-%COMP%]{border-radius:20px;margin-left:20px;padding:10px 20px;font-size:20px;text-decoration:none;background-color:#034da2;color:#fff}.addproduct-link[_ngcontent-%COMP%]:hover{background-color:#5812c8;color:#fff}"]}),e})()},{path:"admin-addproduct",component:s},{path:"admin-editproduct/:id",component:C}];let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(x),a.Bz]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,b,p.u5]}),e})()}}]);