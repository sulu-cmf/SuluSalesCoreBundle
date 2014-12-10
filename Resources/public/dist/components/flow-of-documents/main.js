define([],function(){"use strict";var a={instanceName:"undefined",header:"sales.core.flow-of-documents",columnDefinition:[{property:"type",type:"icon"},{property:"number",type:"number",prefix:"#",prefixProperty:"type"},{property:"date",type:"date"},{property:"pdfBaseUrl",type:"download"}]},b={header:function(a){return'<p class="'+c.titleClass+' m-left-10">'+a+"</p>"},table:function(){return'<table class="'+c.tableClass+'"></table>'},row:function(a,b,c){return'<tr data-id="'+a+'" data-route="'+b+'" data-pdf-base-url="'+c+'" class="pointer"></tr>'}},c={titleClass:"sidebar-table-title",tableClass:"sidebar-table",pdfOrderConfirmUrlSlug:"order-confirmation"},d="sulu.flow-of-documents.",e=function(){return d+this.options.instanceName+".initialized"},f=function(){return d+this.options.instanceName+".row.clicked"},g=function(){var a=this.sandbox.translate(this.options.header),c=this.sandbox.dom.createElement(b.header.call(this,a));this.sandbox.dom.append(this.$el,c)},h=function(){this.$table=this.sandbox.dom.createElement(b.table.call(this)),i.call(this),this.sandbox.dom.append(this.$el,this.$table)},i=function(){this.sandbox.util.foreach(this.options.data,function(a){j.call(this,a)}.bind(this))},j=function(a){var c=a.pdfBaseUrl||"",d=this.sandbox.dom.createElement(b.row.call(this,a.id,a.route,c));this.sandbox.util.foreach(this.options.columnDefinition,function(b){k.call(this,a,d,b)}.bind(this)),this.sandbox.dom.append(this.$table,d)},k=function(a,b,c){var d,e,f,g="",h="";switch(c.type){case"icon":d=a[c.property],e=n.call(this,d),f=this.sandbox.dom.createElement('<td class="icon-cell"><span class="fa '+e+' icon"></span></td>');break;case"download":"order"===a.type&&(h='<span class="fa fa-file-pdf-o icon pdf-download"></span>'),f=this.sandbox.dom.createElement('<td class="icon-cell">'+h+"</td>");break;case"number":a[c.prefixProperty]&&(g=l.call(this,a[c.prefixProperty])+" "),c.prefix&&(g+=c.prefix),d=a[c.property],f=this.sandbox.dom.createElement("<td>"+g+d+"</td>");break;case"date":d=this.sandbox.date.format(a[c.property]).split(" ")[0],f=this.sandbox.dom.createElement("<td>"+d+"</td>");break;default:d="",this.sandbox.logger.error("flow-of-documents: Undefined row type!")}this.sandbox.dom.append(b,f)},l=function(a){switch(a){case"order":return this.sandbox.translate("salescore.order");case"shipping":return this.sandbox.translate("salescore.shipping");case"invoice":return this.sandbox.translate("salescore.invoice");default:return this.sandbox.logger.warn("flow-of-documents: No prefix for type found!"),""}},m=function(){this.sandbox.dom.on(this.$el,"click",function(a){var b=this.sandbox.dom.createElement(a.currentTarget),c=this.sandbox.dom.data(b,"id"),d=this.sandbox.dom.data(b,"route");this.sandbox.emit(f.call(this),{id:c,route:d})}.bind(this),"tr"),this.sandbox.dom.on(this.$el,"click",function(a){a.stopPropagation();var b=this.sandbox.dom.createElement(a.currentTarget).closest("tr"),d=this.sandbox.dom.data(b,"id"),e=this.sandbox.dom.data(b,"pdfBaseUrl"),f=e+c.pdfOrderConfirmUrlSlug+"/"+d;window.open(f,"Download")}.bind(this),".pdf-download")},n=function(a){switch(a){case"order":return"fa-shopping-cart";case"shipping":return"fa-truck";case"invoice":return"fa-money";default:return this.sandbox.logger.warn("flow-of-documents: No icon-definition found!"),""}};return{initialize:function(){this.$table=null,this.options=this.sandbox.util.extend({},a,this.options),this.render(),m.call(this),this.sandbox.emit(e.call(this))},render:function(){g.call(this),h.call(this)}}});