(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06cf97c4"],{"078e":function(t,e,i){"use strict";var n=i("a042"),a=i("23c4"),l=i.n(a),s=i("1bc0"),r=i("14df"),c=i("b420"),o=i("a3ff"),d=i("29ff"),u=Object(s["a"])("button"),b=u[0],f=u[1];function h(t,e,i,n){var a=e.tag,s=e.icon,u=e.type,b=e.disabled,h=e.loading,p=e.hairline,v=e.loadingText;function g(t){h||b||(Object(r["a"])(n,"click",t),Object(c["a"])(n))}function k(t){Object(r["a"])(n,"touchstart",t)}var x=[f([u,e.size,{disabled:b,hairline:p,block:e.block,plain:e.plain,round:e.round,square:e.square}]),{"van-hairline--surround":p}];function m(){var n,a=[];return h?a.push(t(d["a"],{class:f("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"default"===u?void 0:""}})):s&&a.push(t(o["a"],{attrs:{name:s},class:f("icon")})),n=h?v:i.default?i.default():e.text,n&&a.push(t("span",{class:f("text")},[n])),a}return t(a,l()([{class:x,attrs:{type:e.nativeType,disabled:b},on:{click:g,touchstart:k}},Object(r["b"])(n)]),[m()])}h.props=Object(n["a"])({},c["c"],{text:String,icon:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=b(h)},"15ee":function(t,e,i){},1915:function(t,e,i){"use strict";var n=i("a042"),a=i("23c4"),l=i.n(a),s=i("1bc0"),r=i("cbc8"),c=i("e36b"),o=i("14df"),d=i("b420"),u=i("a3ff"),b=Object(s["a"])("cell"),f=b[0],h=b[1];function p(t,e,i,n){var a=e.icon,s=e.size,c=e.title,b=e.label,f=e.value,p=e.isLink,v=e.arrowDirection,g=i.title||Object(r["b"])(c),k=i.default||Object(r["b"])(f),x=i.label||Object(r["b"])(b),m=x&&t("div",{class:[h("label"),e.labelClass]},[i.label?i.label():b]),O=g&&t("div",{class:[h("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[c]),m]),j=k&&t("div",{class:[h("value",{alone:!i.title&&!c}),e.valueClass]},[i.default?i.default():t("span",[f])]),S=i.icon?i.icon():a&&t(u["a"],{class:h("left-icon"),attrs:{name:a}}),y=i["right-icon"],B=y?y():p&&t(u["a"],{class:h("right-icon"),attrs:{name:v?"arrow-"+v:"arrow"}});function w(t){Object(o["a"])(n,"click",t),Object(d["a"])(n)}var C={center:e.center,required:e.required,borderless:!e.border,clickable:p||e.clickable};return s&&(C[s]=s),t("div",l()([{class:h(C),on:{click:w}},Object(o["b"])(n)]),[S,O,j,B,i.extra&&i.extra()])}p.props=Object(n["a"])({},c["a"],d["c"]),e["a"]=f(p)},"2c9e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("van-nav-bar",{attrs:{title:"我的地址列表","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),i("van-address-list",{attrs:{list:t.list},on:{add:t.onAdd,edit:t.onEdit},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)},a=[],l=(i("34a3"),i("1bc1"),i("d515")),s=(i("b573"),i("422e")),r=(i("ccdc"),i("0c81"),i("15ee"),i("922a"),i("23c4")),c=i.n(r),o=i("1bc0"),d=i("14df"),u=i("078e"),b=i("c2e7"),f=Object(o["a"])("radio-group"),h=f[0],p=f[1],v=h({mixins:[Object(b["b"])("vanRadio")],props:{value:null,disabled:Boolean},watch:{value:function(t){this.$emit("change",t)}},render:function(t){return t("div",{class:p(),attrs:{role:"radiogroup"}},[this.slots()])}}),g=i("dde4"),k=i("a3ff"),x=i("1915"),m=i("3bb3"),O=Object(o["a"])("radio"),j=O[0],S=O[1],y=j({mixins:[Object(m["a"])({bem:S,role:"radio",parent:"vanRadio"})],computed:{currentValue:{get:function(){return this.parent?this.parent.value:this.value},set:function(t){(this.parent||this).$emit("input",t)}},checked:function(){return this.currentValue===this.name}},methods:{onClickIcon:function(){this.isDisabled||(this.currentValue=this.name)},onClickLabel:function(){this.isDisabled||this.labelDisabled||(this.currentValue=this.name)}}}),B=Object(o["a"])("address-item"),w=B[0],C=B[1];function T(t,e,i,n){var a=e.disabled,l=e.switchable;function s(){l&&Object(d["a"])(n,"select")}var r=function(){return t(k["a"],{attrs:{name:"edit"},class:C("edit"),on:{click:function(t){t.stopPropagation(),Object(d["a"])(n,"edit")}}})},o=function(){var i=e.data,n=[t("div",{class:C("name")},[i.name+"，"+i.tel]),t("div",{class:C("address")},[i.address])];return l&&!a?t(y,{attrs:{name:i.id,iconSize:16,checkedColor:g["e"]}},[n]):n};return t(x["a"],c()([{class:C({disabled:a}),attrs:{valueClass:C("value"),clickable:l&&!a},scopedSlots:{default:o,"right-icon":r},on:{click:s}},Object(d["b"])(n)]))}T.props={data:Object,disabled:Boolean,switchable:Boolean};var z=w(T),D=Object(o["a"])("address-list"),A=D[0],I=D[1],L=D[2];function q(t,e,i,n){function a(i,a){if(i)return i.map(function(i,l){return t(z,{attrs:{data:i,disabled:a,switchable:e.switchable},key:i.id,on:{select:function(){Object(d["a"])(n,a?"select-disabled":"select",i,l)},edit:function(){Object(d["a"])(n,a?"edit-disabled":"edit",i,l)}}})})}var l=a(e.list),s=a(e.disabledList,!0);return t("div",c()([{class:I()},Object(d["b"])(n)]),[i.top&&i.top(),t(v,{attrs:{value:e.value},on:{input:function(t){Object(d["a"])(n,"input",t)}}},[l]),e.disabledText&&t("div",{class:I("disabled-text")},[e.disabledText]),s,i.default&&i.default(),t(u["a"],{attrs:{square:!0,size:"large",type:"danger",text:e.addButtonText||L("add")},class:I("add"),on:{click:function(){Object(d["a"])(n,"add")}}})])}q.props={list:Array,disabledList:Array,disabledText:String,addButtonText:String,value:[Number,String],switchable:{type:Boolean,default:!0}};var $=A(q),N=i("6e6d");N["a"].use($),N["a"].use(s["a"]),N["a"].use(l["a"]);var R={data:function(){return{chosenAddressId:"1",list:[{id:"1",name:"张三",tel:"18233215547",address:"上海市宝山区同济之路"},{id:"2",name:"李四",tel:"15433428896",address:"上海市浦东新区航头路"}]}},methods:{onClickLeft:function(){this.$router.back()},onAdd:function(){Object(l["a"])("进入新增地址"),this.$router.replace("/addressediting")},onEdit:function(t,e){Object(l["a"])("进入编辑地址")}}},P=R,V=i("17cc"),E=Object(V["a"])(P,n,a,!1,null,null,null);e["default"]=E.exports},"3bb3":function(t,e,i){"use strict";i.d(e,"a",function(){return s});var n=i("a3ff"),a=i("c2e7"),l=i("ad1b"),s=function(t){var e=t.parent,i=t.bem,s=t.role;return{mixins:[Object(a["a"])(e)],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"}},computed:{isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},iconStyle:function(){var t=this.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===s&&!this.checked?-1:0}},render:function(t){var e=this,a=this.slots,r=this.checked,c=a("icon",{checked:r})||t(n["a"],{attrs:{name:"success"},style:this.iconStyle}),o=a()&&t("span",{class:i("label",[this.labelPosition,{disabled:this.isDisabled}]),on:{click:this.onClickLabel}},[a()]),d=[t("div",{class:i("icon",[this.shape,{disabled:this.isDisabled,checked:r}]),style:{fontSize:Object(l["a"])(this.iconSize)},on:{click:this.onClickIcon}},[c])];return"left"===this.labelPosition?d.unshift(o):d.push(o),t("div",{attrs:{role:s,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:i(),on:{click:function(t){e.$emit("click",t)}}},[d])}}}},"422e":function(t,e,i){"use strict";var n=i("23c4"),a=i.n(n),l=i("1bc0"),s=i("cbc8"),r=i("14df"),c=i("a3ff"),o=Object(l["a"])("nav-bar"),d=o[0],u=o[1];function b(t,e,i,n){return t("div",a()([{class:[u({fixed:e.fixed}),{"van-hairline--bottom":e.border}],style:{zIndex:e.zIndex}},Object(r["b"])(n)]),[t("div",{class:u("left"),on:{click:n.listeners["click-left"]||s["e"]}},[i.left?i.left():[e.leftArrow&&t(c["a"],{class:u("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:u("text")},[e.leftText])]]),t("div",{class:[u("title"),"van-ellipsis"]},[i.title?i.title():e.title]),t("div",{class:u("right"),on:{click:n.listeners["click-right"]||s["e"]}},[i.right?i.right():e.rightText&&t("span",{class:u("text")},[e.rightText])])])}b.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e["a"]=d(b)},"922a":function(t,e,i){},b573:function(t,e,i){"use strict";i("ccdc"),i("0c81"),i("bf90")},bf90:function(t,e,i){},c2e7:function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return l});var n=i("6e6d");function a(t,e){var i,a;void 0===e&&(e={});var l=e.indexKey||"index";return n["a"].extend({inject:(i={},i[t]={default:null},i),computed:(a={parent:function(){return this[t]}},a[l]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},a),created:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter(function(e){return e!==t}))},methods:{bindRelation:function(){if(this.parent){var t=this.parent.children;if(-1===t.indexOf(this)){var e=this.parent.slots().indexOf(this.$vnode);-1===e?t.push(this):t.splice(e,0,this)}}}}})}function l(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},e36b:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}}}]);
//# sourceMappingURL=chunk-06cf97c4.e9139830.js.map