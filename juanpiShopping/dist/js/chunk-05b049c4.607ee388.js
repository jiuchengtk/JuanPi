(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05b049c4"],{"022c":function(t,e,i){"use strict";var n,s=i("a042"),a=i("6e6d"),o=i("1bc0"),r=i("b545"),l=i("c7b4"),c=i("078e"),u=Object(o["a"])("dialog"),h=u[0],d=u[1],f=u[2],m=h({mixins:[r["a"],l["a"]],props:{title:String,message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(i){!1!==i&&e.onClose(t),e.loading[t]=!1})):this.onClose(t)},onClose:function(t){this.close(),this.callback&&this.callback(t)}},render:function(t){var e,i=this;if(this.shouldRender){var n=this.title,s=this.message,a=this.messageAlign,o=this.slots(),r=n&&t("div",{class:d("header",{isolated:!s&&!o})},[n]),l=(o||s)&&t("div",{class:d("content")},[o||t("div",{domProps:{innerHTML:s},class:d("message",(e={"has-title":n},e[a]=a,e))})]),u=this.showCancelButton&&this.showConfirmButton,h=t("div",{class:["van-hairline--top",d("footer",{buttons:u})]},[this.showCancelButton&&t(c["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||f("cancel")},class:d("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){i.handleAction("cancel")}}}),this.showConfirmButton&&t(c["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||f("confirm")},class:[d("confirm"),{"van-hairline--left":u}],style:{color:this.confirmButtonColor},on:{click:function(){i.handleAction("confirm")}}})]);return t("transition",{attrs:{name:"van-dialog-bounce"}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":n||s},class:[d(),this.className]},[r,l,h])])}}}),p=i("cbc8");function b(t){return document.body.contains(t)}function v(){n&&n.$destroy(),n=new(a["a"].extend(m))({el:document.createElement("div"),propsData:{lazyRender:!1}}),n.$on("input",function(t){n.value=t})}function g(t){return p["d"]?Promise.resolve():new Promise(function(e,i){n&&b(n.$el)||v(),Object(s["a"])(n,g.currentOptions,t,{resolve:e,reject:i})})}g.defaultOptions={value:!0,title:"",message:"",overlay:!0,className:"",lockScroll:!0,beforeClose:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){n["confirm"===t?"resolve":"reject"](t)}},g.alert=g,g.confirm=function(t){return g(Object(s["a"])({showCancelButton:!0},t))},g.close=function(){n&&(n.value=!1)},g.setDefaultOptions=function(t){Object(s["a"])(g.currentOptions,t)},g.resetDefaultOptions=function(){g.currentOptions=Object(s["a"])({},g.defaultOptions)},g.resetDefaultOptions(),g.install=function(){a["a"].use(m)},g.Component=m,a["a"].prototype.$dialog=g;e["a"]=g},"0593":function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a});var n=i("cbc8");function s(){return!n["d"]&&/android/.test(navigator.userAgent.toLowerCase())}function a(){return!n["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},"078e":function(t,e,i){"use strict";var n=i("a042"),s=i("23c4"),a=i.n(s),o=i("1bc0"),r=i("14df"),l=i("b420"),c=i("a3ff"),u=i("29ff"),h=Object(o["a"])("button"),d=h[0],f=h[1];function m(t,e,i,n){var s=e.tag,o=e.icon,h=e.type,d=e.disabled,m=e.loading,p=e.hairline,b=e.loadingText;function v(t){m||d||(Object(r["a"])(n,"click",t),Object(l["a"])(n))}function g(t){Object(r["a"])(n,"touchstart",t)}var y=[f([h,e.size,{disabled:d,hairline:p,block:e.block,plain:e.plain,round:e.round,square:e.square}]),{"van-hairline--surround":p}];function x(){var n,s=[];return m?s.push(t(u["a"],{class:f("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"default"===h?void 0:""}})):o&&s.push(t(c["a"],{attrs:{name:o},class:f("icon")})),n=m?b:i.default?i.default():e.text,n&&s.push(t("span",{class:f("text")},[n])),s}return t(s,a()([{class:y,attrs:{type:e.nativeType,disabled:d},on:{click:v,touchstart:g}},Object(r["b"])(n)]),[x()])}m.props=Object(n["a"])({},l["c"],{text:String,icon:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=d(m)},1915:function(t,e,i){"use strict";var n=i("a042"),s=i("23c4"),a=i.n(s),o=i("1bc0"),r=i("cbc8"),l=i("e36b"),c=i("14df"),u=i("b420"),h=i("a3ff"),d=Object(o["a"])("cell"),f=d[0],m=d[1];function p(t,e,i,n){var s=e.icon,o=e.size,l=e.title,d=e.label,f=e.value,p=e.isLink,b=e.arrowDirection,v=i.title||Object(r["b"])(l),g=i.default||Object(r["b"])(f),y=i.label||Object(r["b"])(d),x=y&&t("div",{class:[m("label"),e.labelClass]},[i.label?i.label():d]),C=v&&t("div",{class:[m("title"),e.titleClass],style:e.titleStyle},[i.title?i.title():t("span",[l]),x]),O=g&&t("div",{class:[m("value",{alone:!i.title&&!l}),e.valueClass]},[i.default?i.default():t("span",[f])]),S=i.icon?i.icon():s&&t(h["a"],{class:m("left-icon"),attrs:{name:s}}),w=i["right-icon"],k=w?w():p&&t(h["a"],{class:m("right-icon"),attrs:{name:b?"arrow-"+b:"arrow"}});function j(t){Object(c["a"])(n,"click",t),Object(u["a"])(n)}var B={center:e.center,required:e.required,borderless:!e.border,clickable:p||e.clickable};return o&&(B[o]=o),t("div",a()([{class:m(B),on:{click:j}},Object(c["b"])(n)]),[S,C,O,k,i.extra&&i.extra()])}p.props=Object(n["a"])({},l["a"],u["c"]),e["a"]=f(p)},"1a4e":function(t,e,i){},3425:function(t,e,i){},"3e48":function(t,e,i){},"422e":function(t,e,i){"use strict";var n=i("23c4"),s=i.n(n),a=i("1bc0"),o=i("cbc8"),r=i("14df"),l=i("a3ff"),c=Object(a["a"])("nav-bar"),u=c[0],h=c[1];function d(t,e,i,n){return t("div",s()([{class:[h({fixed:e.fixed}),{"van-hairline--bottom":e.border}],style:{zIndex:e.zIndex}},Object(r["b"])(n)]),[t("div",{class:h("left"),on:{click:n.listeners["click-left"]||o["e"]}},[i.left?i.left():[e.leftArrow&&t(l["a"],{class:h("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:h("text")},[e.leftText])]]),t("div",{class:[h("title"),"van-ellipsis"]},[i.title?i.title():e.title]),t("div",{class:h("right"),on:{click:n.listeners["click-right"]||o["e"]}},[i.right?i.right():e.rightText&&t("span",{class:h("text")},[e.rightText])])])}d.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e["a"]=u(d)},"5a31":function(t,e,i){"use strict";function n(t,e,i){return Math.min(Math.max(t,e),i)}i.d(e,"a",function(){return n})},"78e4":function(t,e,i){},"7eb4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("van-nav-bar",{attrs:{title:"新增地址","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),i("van-address-edit",{attrs:{"area-list":t.areaList,"show-delete":"","show-set-default":"","show-search-result":"","search-result":t.searchResult},on:{save:t.onSave,delete:t.onDelete,"change-detail":t.onChangeDetail}})],1)},s=[],a=(i("1bc1"),i("d515")),o=(i("34a3"),i("ccdc"),i("b6be"),i("a042")),r=i("1bc0"),l=i("47c8"),c=i("31fd");function u(t){return Array.isArray(t)?t.map(function(t){return u(t)}):"object"===typeof t?Object(c["a"])({},t):t}var h={title:String,loading:Boolean,showToolbar:Boolean,cancelButtonText:String,confirmButtonText:String,visibleItemCount:{type:Number,default:5},itemHeight:{type:Number,default:44}},d=i("dde4"),f=i("29ff"),m=i("cbc8"),p=i("5a31"),b=i("0095"),v=200,g=1e3,y=300,x=15,C=Object(r["a"])("picker-column"),O=C[0],S=C[1];function w(t){var e=window.getComputedStyle(t),i=e.transform||e.webkitTransform,n=i.slice(7,i.length-1).split(", ")[5];return Number(n)}function k(t){return Object(m["c"])(t)&&t.disabled}var j=O({mixins:[b["a"]],props:{valueKey:String,className:String,itemHeight:Number,defaultIndex:Number,visibleItemCount:Number,initialOptions:{type:Array,default:function(){return[]}}},data:function(){return{offset:0,duration:0,options:u(this.initialOptions),currentIndex:this.defaultIndex}},created:function(){this.$parent.children&&this.$parent.children.push(this),this.setIndex(this.currentIndex)},destroyed:function(){var t=this.$parent.children;t&&t.splice(t.indexOf(this),1)},watch:{defaultIndex:function(){this.setIndex(this.defaultIndex)}},computed:{count:function(){return this.options.length}},methods:{onTouchStart:function(t){if(this.touchStart(t),this.moving){var e=w(this.$refs.wrapper);this.startOffset=Math.min(0,e)}else this.startOffset=this.offset;this.duration=0,this.moving=!1,this.transitionEndTrigger=null,this.touchStartTime=Date.now(),this.momentumOffset=this.startOffset},onTouchMove:function(t){Object(l["c"])(t),this.moving=!0,this.touchMove(t),this.offset=Object(p["a"])(this.startOffset+this.deltaY,-this.count*this.itemHeight,this.itemHeight);var e=Date.now();e-this.touchStartTime>y&&(this.touchStartTime=e,this.momentumOffset=this.offset)},onTouchEnd:function(){var t=this.offset-this.momentumOffset,e=Date.now()-this.touchStartTime,i=e<y&&Math.abs(t)>x;if(i)this.momentum(t,e);else if(this.offset!==this.startOffset){this.duration=v;var n=this.getIndexByOffset(this.offset);this.setIndex(n,!0)}},onTransitionEnd:function(){this.stopMomentum()},onClickItem:function(t){this.duration=v,this.setIndex(t,!0)},adjustIndex:function(t){t=Object(p["a"])(t,0,this.count);for(var e=t;e<this.count;e++)if(!k(this.options[e]))return e;for(var i=t-1;i>=0;i--)if(!k(this.options[i]))return i},getOptionText:function(t){return Object(m["c"])(t)&&this.valueKey in t?t[this.valueKey]:t},setIndex:function(t,e){var i=this;t=this.adjustIndex(t)||0,this.offset=-t*this.itemHeight;var n=function(){t!==i.currentIndex&&(i.currentIndex=t,e&&i.$emit("change",t))};this.moving?this.transitionEndTrigger=n:n()},setValue:function(t){for(var e=this.options,i=0;i<e.length;i++)if(this.getOptionText(e[i])===t)return this.setIndex(i)},getValue:function(){return this.options[this.currentIndex]},getIndexByOffset:function(t){return Object(p["a"])(Math.round(-t/this.itemHeight),0,this.count-1)},momentum:function(t,e){var i=Math.abs(t/e);t=this.offset+i/.002*(t<0?-1:1);var n=this.getIndexByOffset(t);this.duration=g,this.setIndex(n,!0)},stopMomentum:function(){this.moving=!1,this.duration=0,this.transitionEndTrigger&&(this.transitionEndTrigger(),this.transitionEndTrigger=null)}},render:function(t){var e=this,i=this.itemHeight,n=this.visibleItemCount,s=i*(n-1)/2,a={transform:"translate3d(0, "+(this.offset+s)+"px, 0)",transitionDuration:this.duration+"ms",transitionProperty:this.duration?"all":"none",lineHeight:i+"px"},o={height:i+"px"};return t("div",{class:[S(),this.className],on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[t("ul",{ref:"wrapper",style:a,class:S("wrapper"),on:{transitionend:this.onTransitionEnd}},[this.options.map(function(i,n){return t("li",{style:o,class:["van-ellipsis",S("item",{disabled:k(i),selected:n===e.currentIndex})],domProps:{innerHTML:e.getOptionText(i)},on:{click:function(){e.onClickItem(n)}}})})])])}}),B=Object(r["a"])("picker"),I=B[0],$=B[1],T=B[2],D=I({props:Object(o["a"])({},h,{defaultIndex:{type:Number,default:0},columns:{type:Array,default:function(){return[]}},toolbarPosition:{type:String,default:"top"},valueKey:{type:String,default:"text"}}),data:function(){return{children:[]}},computed:{simple:function(){return this.columns.length&&!this.columns[0].values}},watch:{columns:function(){this.setColumns()}},methods:{setColumns:function(){var t=this,e=this.simple?[{values:this.columns}]:this.columns;e.forEach(function(e,i){t.setColumnValues(i,u(e.values))})},emit:function(t){this.simple?this.$emit(t,this.getColumnValue(0),this.getColumnIndex(0)):this.$emit(t,this.getValues(),this.getIndexes())},onChange:function(t){this.simple?this.$emit("change",this,this.getColumnValue(0),this.getColumnIndex(0)):this.$emit("change",this,this.getValues(),t)},getColumn:function(t){return this.children[t]},getColumnValue:function(t){var e=this.getColumn(t);return e&&e.getValue()},setColumnValue:function(t,e){var i=this.getColumn(t);i&&i.setValue(e)},getColumnIndex:function(t){return(this.getColumn(t)||{}).currentIndex},setColumnIndex:function(t,e){var i=this.getColumn(t);i&&i.setIndex(e)},getColumnValues:function(t){return(this.children[t]||{}).options},setColumnValues:function(t,e){var i=this.children[t];i&&JSON.stringify(i.options)!==JSON.stringify(e)&&(i.options=e,i.setIndex(0))},getValues:function(){return this.children.map(function(t){return t.getValue()})},setValues:function(t){var e=this;t.forEach(function(t,i){e.setColumnValue(i,t)})},getIndexes:function(){return this.children.map(function(t){return t.currentIndex})},setIndexes:function(t){var e=this;t.forEach(function(t,i){e.setColumnIndex(i,t)})},onConfirm:function(){this.children.map(function(t){return t.stopMomentum()}),this.emit("confirm")},onCancel:function(){this.emit("cancel")}},render:function(t){var e=this,i=this.itemHeight,n=i*this.visibleItemCount,s=this.simple?[this.columns]:this.columns,a={height:i+"px"},o={height:n+"px"},r={backgroundSize:"100% "+(n-i)/2+"px"},c=this.showToolbar&&t("div",{class:["van-hairline--top-bottom",$("toolbar")]},[this.slots()||[t("div",{attrs:{role:"button",tabindex:"0"},class:$("cancel"),on:{click:this.onCancel}},[this.cancelButtonText||T("cancel")]),this.slots("title")||this.title&&t("div",{class:["van-ellipsis",$("title")]},[this.title]),t("div",{attrs:{role:"button",tabindex:"0"},class:$("confirm"),on:{click:this.onConfirm}},[this.confirmButtonText||T("confirm")])]]);return t("div",{class:$()},["top"===this.toolbarPosition?c:t(),this.loading?t(f["a"],{class:$("loading"),attrs:{color:d["a"]}}):t(),t("div",{class:$("columns"),style:o,on:{touchmove:l["c"]}},[s.map(function(i,n){return t(j,{attrs:{valueKey:e.valueKey,className:i.className,itemHeight:e.itemHeight,defaultIndex:i.defaultIndex||e.defaultIndex,visibleItemCount:e.visibleItemCount,initialOptions:e.simple?i:i.values},on:{change:function(){e.onChange(n)}}})}),t("div",{class:$("mask"),style:r}),t("div",{class:["van-hairline--top-bottom",$("frame")],style:a})]),"bottom"===this.toolbarPosition?c:t()])}}),A=Object(r["a"])("area"),V=A[0],L=A[1],z=V({props:Object(o["a"])({},h,{value:String,areaList:{type:Object,default:function(){return{}}},columnsNum:{type:[Number,String],default:3}}),data:function(){return{code:this.value,columns:[{values:[]},{values:[]},{values:[]}]}},computed:{province:function(){return this.areaList.province_list||{}},city:function(){return this.areaList.city_list||{}},county:function(){return this.areaList.county_list||{}},displayColumns:function(){return this.columns.slice(0,+this.columnsNum)}},watch:{value:function(){this.code=this.value,this.setValues()},areaList:{deep:!0,handler:function(){this.setValues()}},columnsNum:function(){var t=this;this.$nextTick(function(){t.setValues()})}},mounted:function(){this.setValues()},methods:{getList:function(t,e){var i=[];if("province"!==t&&!e)return i;var n=this[t];return i=Object.keys(n).map(function(t){return{code:t,name:n[t]}}),e&&("9"===e[0]&&"city"===t&&(e="9"),i=i.filter(function(t){return 0===t.code.indexOf(e)})),i},getIndex:function(t,e){var i="province"===t?2:"city"===t?4:6,n=this.getList(t,e.slice(0,i-2));"9"===e[0]&&"province"===t&&(i=1),e=e.slice(0,i);for(var s=0;s<n.length;s++)if(n[s].code.slice(0,i)===e)return s;return 0},onChange:function(t,e,i){this.code=e[i].code,this.setValues(),this.$emit("change",t,t.getValues(),i)},setValues:function(){var t=this.code||Object.keys(this.county)[0]||"",e=this.$refs.picker,i=this.getList("province"),n=this.getList("city",t.slice(0,2));e&&(e.setColumnValues(0,i),e.setColumnValues(1,n),n.length&&"00"===t.slice(2,4)&&(t=n[0].code),e.setColumnValues(2,this.getList("county",t.slice(0,4))),e.setIndexes([this.getIndex("province",t),this.getIndex("city",t),this.getIndex("county",t)]))},getValues:function(){return this.$refs.picker?this.$refs.picker.getValues().filter(function(t){return!!t}):[]},getArea:function(){var t=this.getValues(),e={code:"",country:"",province:"",city:"",county:""};if(!t.length)return e;var i=t.map(function(t){return t.name});return e.code=t[t.length-1].code,"9"===e.code[0]?(e.country=i[1]||"",e.province=i[2]||""):(e.province=i[0]||"",e.city=i[1]||"",e.county=i[2]||""),e},reset:function(t){this.code=t||"",this.setValues()}},render:function(t){var e=Object(o["a"])({},this.$listeners,{change:this.onChange});return t(D,{ref:"picker",class:L(),attrs:{showToolbar:!0,valueKey:"name",title:this.title,loading:this.loading,columns:this.displayColumns,itemHeight:this.itemHeight,visibleItemCount:this.visibleItemCount,cancelButtonText:this.cancelButtonText,confirmButtonText:this.confirmButtonText},on:Object(o["a"])({},e)})}}),N=(i("b573"),i("422e"));i("0c81"),i("3425"),i("186a"),i("ff27"),i("78e4"),i("3e48"),i("1a4e"),i("adaf");function R(t){return t=t.replace(/[^-|\d]/g,""),/^((\+86)|(86))?(1)\d{10}$/.test(t)||/^0[0-9-]{10,13}$/.test(t)}var M=i("a751"),E=i("a52e"),P=i("078e"),H=i("022c"),F=i("0593"),K=i("1915"),q=Object(r["a"])("address-edit-detail"),_=q[0],J=q[1],W=q[2],Y=Object(F["a"])(),G=_({props:{value:String,error:Boolean,focused:Boolean,detailRows:Number,searchResult:Array,detailMaxlength:Number,showSearchResult:Boolean},methods:{onSelect:function(t){this.$emit("select-search",t),this.$emit("input",((t.address||"")+" "+(t.name||"")).trim())},onFinish:function(){this.$refs.field.blur()},renderFinish:function(){var t=this.$createElement,e=this.value&&this.focused&&Y;if(e)return t("div",{class:J("finish"),on:{click:this.onFinish}},[W("complete")])},renderSearchResult:function(){var t=this,e=this.$createElement,i=this.searchResult,n=this.focused&&i&&this.showSearchResult;if(n)return i.map(function(i){return e(K["a"],{key:i.name+i.address,attrs:{title:i.name,label:i.address,icon:"location-o",clickable:!0},on:{click:function(){t.onSelect(i)}}})})}},render:function(t){return t(K["a"],{class:J()},[t(M["a"],{attrs:{autosize:!0,rows:this.detailRows,clearable:!Y,type:"textarea",value:this.value,error:this.error,label:W("label"),maxlength:this.detailMaxlength,placeholder:W("placeholder")},ref:"field",scopedSlots:{icon:this.renderFinish},on:Object(o["a"])({},this.$listeners)}),this.renderSearchResult()])}}),Q=i("23c4"),U=i.n(Q),X=i("14df"),Z={value:null,loading:Boolean,disabled:Boolean,activeColor:String,inactiveColor:String,activeValue:{type:null,default:!0},inactiveValue:{type:null,default:!1},size:{type:String,default:"30px"}},tt=Object(r["a"])("switch"),et=tt[0],it=tt[1];function nt(t,e,i,n){var s=e.size,a=e.value,o=e.loading,r=e.disabled,l=e.activeColor,c=e.activeValue,u=e.inactiveColor,h=e.inactiveValue,m=a===c,p={fontSize:s,backgroundColor:m?l:u},b=m?l||d["a"]:u||d["c"];function v(){if(!r&&!o){var t=m?h:c;Object(X["a"])(n,"input",t),Object(X["a"])(n,"change",t)}}return t("div",U()([{class:it({on:m,disabled:r}),attrs:{role:"switch","aria-checked":String(m)},style:p,on:{click:v}},Object(X["b"])(n)]),[t("div",{class:it("node")},[o&&t(f["a"],{class:it("loading"),attrs:{color:b}})])])}nt.props=Z;var st=et(nt),at=Object(r["a"])("switch-cell"),ot=at[0],rt=at[1];function lt(t,e,i,n){return t(K["a"],U()([{attrs:{center:!0,size:e.cellSize,title:e.title,border:e.border},class:rt([e.cellSize])},Object(X["b"])(n)]),[t(st,{props:Object(o["a"])({},e),on:Object(o["a"])({},n.listeners)})])}lt.props=Object(o["a"])({},Z,{title:String,cellSize:String,border:{type:Boolean,default:!0},size:{type:String,default:"24px"}});var ct=ot(lt),ut=Object(r["a"])("address-edit"),ht=ut[0],dt=ut[1],ft=ut[2],mt={name:"",tel:"",country:"",province:"",city:"",county:"",areaCode:"",postalCode:"",addressDetail:"",isDefault:!1},pt=ht({props:{areaList:Object,isSaving:Boolean,isDeleting:Boolean,validator:Function,showDelete:Boolean,showPostal:Boolean,searchResult:Array,showSetDefault:Boolean,showSearchResult:Boolean,saveButtonText:String,deleteButtonText:String,showArea:{type:Boolean,default:!0},showDetail:{type:Boolean,default:!0},detailRows:{type:Number,default:1},detailMaxlength:{type:Number,default:200},addressInfo:{type:Object,default:function(){return Object(o["a"])({},mt)}},telValidator:{type:Function,default:R}},data:function(){return{data:{},showAreaPopup:!1,detailFocused:!1,errorInfo:{tel:!1,name:!1,postalCode:!1,addressDetail:!1}}},computed:{areaListLoaded:function(){return Object(m["c"])(this.areaList)&&Object.keys(this.areaList).length},areaText:function(){var t=this.data,e=t.country,i=t.province,n=t.city,s=t.county,a=t.areaCode;if(a){var o=[e,i,n,s];return i&&i===n&&o.splice(1,1),o.filter(function(t){return t}).join("/")}return""}},watch:{addressInfo:{handler:function(t){this.data=Object(o["a"])({},mt,t),this.setAreaCode(t.areaCode)},deep:!0,immediate:!0},areaList:function(){this.setAreaCode(this.data.areaCode)}},methods:{onFocus:function(t){this.errorInfo[t]=!1,this.detailFocused="addressDetail"===t,this.$emit("focus",t)},onChangeDetail:function(t){this.data.addressDetail=t,this.$emit("change-detail",t)},onAreaConfirm:function(t){this.showAreaPopup=!1,this.assignAreaValues(),this.$emit("change-area",t)},assignAreaValues:function(){var t=this.$refs.area;if(t){var e=t.getArea();e.areaCode=e.code,delete e.code,Object(o["a"])(this.data,e)}},onSave:function(){var t=this,e=["name","tel","areaCode","addressDetail"];this.showPostal&&e.push("postalCode");var i=e.every(function(e){var i=t.getErrorMessage(e);return i&&(t.errorInfo[e]=!0,Object(a["a"])(i)),!i});i&&!this.isSaving&&this.$emit("save",this.data)},getErrorMessage:function(t){var e=String(this.data[t]||"").trim();if(this.validator){var i=this.validator(t,e);if(i)return i}switch(t){case"name":return e?"":ft("nameEmpty");case"tel":return this.telValidator(e)?"":ft("telInvalid");case"areaCode":return e?"":ft("areaEmpty");case"addressDetail":return e?"":ft("addressEmpty");case"postalCode":return e&&!/^\d{6}$/.test(e)?ft("postalEmpty"):""}},onDelete:function(){var t=this;H["a"].confirm({title:ft("confirmDelete")}).then(function(){t.$emit("delete",t.data)}).catch(function(){t.$emit("cancel-delete",t.data)})},getArea:function(){return this.$refs.area?this.$refs.area.getValues():[]},setAreaCode:function(t){this.data.areaCode=t||"",t&&this.$nextTick(this.assignAreaValues)},setAddressDetail:function(t){this.data.addressDetail=t},onDetailBlur:function(){var t=this;setTimeout(function(){t.detailFocused=!1})}},render:function(t){var e=this,i=this.data,n=this.errorInfo,s=this.searchResult,a=function(t){return function(){return e.onFocus(t)}},o=s&&s.length&&this.detailFocused;return t("div",{class:dt()},[t(M["a"],{attrs:{clearable:!0,label:ft("name"),placeholder:ft("namePlaceholder"),error:n.name},on:{focus:a("name")},model:{value:i.name,callback:function(t){i.name=t}}}),t(M["a"],{attrs:{clearable:!0,type:"tel",label:ft("tel"),placeholder:ft("telPlaceholder"),error:n.tel},on:{focus:a("tel")},model:{value:i.tel,callback:function(t){i.tel=t}}}),t(M["a"],{directives:[{name:"show",value:this.showArea}],attrs:{readonly:!0,label:ft("area"),placeholder:ft("areaPlaceholder"),value:this.areaText},on:{click:function(){e.showAreaPopup=!0}}}),t(G,{directives:[{name:"show",value:this.showDetail}],attrs:{focused:this.detailFocused,value:i.addressDetail,error:n.addressDetail,detailRows:this.detailRows,detailMaxlength:this.detailMaxlength,searchResult:this.searchResult,showSearchResult:this.showSearchResult},on:{focus:a("addressDetail"),blur:this.onDetailBlur,input:this.onChangeDetail,"select-search":function(t){e.$emit("select-search",t)}}}),this.showPostal&&t(M["a"],{directives:[{name:"show",value:!o}],attrs:{type:"tel",maxlength:"6",label:ft("postal"),placeholder:ft("postal"),error:n.postalCode},on:{focus:a("postalCode")},model:{value:i.postalCode,callback:function(t){i.postalCode=t}}}),this.slots(),this.showSetDefault&&t(ct,{directives:[{name:"show",value:!o}],attrs:{title:ft("defaultAddress")},on:{change:function(t){e.$emit("change-default",t)}},model:{value:i.isDefault,callback:function(t){i.isDefault=t}}}),t("div",{directives:[{name:"show",value:!o}],class:dt("buttons")},[t(P["a"],{attrs:{block:!0,loading:this.isSaving,type:"danger",text:this.saveButtonText||ft("save")},on:{click:this.onSave}}),this.showDelete&&t(P["a"],{attrs:{block:!0,loading:this.isDeleting,text:this.deleteButtonText||ft("delete")},on:{click:this.onDelete}})]),t(E["a"],{attrs:{position:"bottom",lazyRender:!1,getContainer:"body"},model:{value:e.showAreaPopup,callback:function(t){e.showAreaPopup=t}}},[t(z,{ref:"area",attrs:{loading:!this.areaListLoaded,value:i.areaCode,areaList:this.areaList},on:{confirm:this.onAreaConfirm,cancel:function(){e.showAreaPopup=!1}}})])])}}),bt=i("6e6d");bt["a"].use(pt),bt["a"].use(N["a"]),bt["a"].use(N["a"]),bt["a"].use(z);var vt={data:function(){return{areaList:"",searchResult:[]}},methods:{onClickLeft:function(){this.$router.replace("/addresslist")},onSave:function(){Object(a["a"])("save")},onDelete:function(){Object(a["a"])("delete")},onChangeDetail:function(t){this.searchResult=t?[{name:"黄龙万科中心",address:"杭州市西湖区"}]:[]}}},gt=vt,yt=i("17cc"),xt=Object(yt["a"])(gt,n,s,!1,null,null,null);e["default"]=xt.exports},a52e:function(t,e,i){"use strict";var n=i("1bc0"),s=i("cbc8"),a=i("b545"),o=Object(n["a"])("popup"),r=o[0],l=o[1];e["a"]=r({mixins:[a["a"]],props:{round:Boolean,duration:Number,transition:String,position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(i){return t.$emit(e,i)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(t){var e;if(this.shouldRender){var i=this.round,n=this.position,a=this.duration,o=this.transition||("center"===n?"van-fade":"van-popup-slide-"+n),r={};return Object(s["b"])(a)&&(r.transitionDuration=a+"s"),t("transition",{attrs:{name:o},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],style:r,class:l((e={round:i},e[n]=n,e)),on:{click:this.onClick}},[this.slots()])])}}})},a751:function(t,e,i){"use strict";var n=i("23c4"),s=i.n(n),a=i("a042"),o=i("a3ff"),r=i("1915"),l=i("e36b"),c=i("47c8"),u=i("a1ce"),h=i("1bc0"),d=i("cbc8"),f=i("ad1b"),m=i("0593"),p=Object(h["a"])("field"),b=p[0],v=p[1];e["a"]=b({inheritAttrs:!1,props:Object(a["a"])({},l["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(d["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(a["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(f["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,i=e.value,n=this.$attrs.maxlength;return"number"===this.type&&Object(d["b"])(n)&&i.length>n&&(i=i.slice(0,n),t.value=i),i}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),Object(m["b"])()&&window.scrollTo(0,Object(u["b"])())},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(c["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,i=-1===String(this.value).indexOf("."),n=e>=48&&e<=57||46===e&&i||45===e;n||Object(c["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(d["c"])(this.autosize)){var i=this.autosize,n=i.maxHeight,s=i.minHeight;n&&(e=Math.min(e,n)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:v("control",this.inputAlign)},[e]);var i={ref:"input",class:v("control",this.inputAlign),domProps:{value:this.value},attrs:Object(a["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",s()([{},i])):t("input",s()([{attrs:{type:this.type}},i]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:v("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(o["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:v("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(o["a"],{attrs:{name:this.rightIcon}})])}},render:function(t){var e,i=this.slots,n=this.labelAlign,s={icon:this.renderLeftIcon};return i("label")&&(s.title=function(){return i("label")}),t(r["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[v("label",n),this.labelClass],arrowDirection:this.arrowDirection},class:v((e={error:this.error,disabled:this.$attrs.disabled},e["label-"+n]=n,e["min-height"]="textarea"===this.type&&!this.autosize,e)),scopedSlots:s,on:{click:this.onClick}},[t("div",{class:v("body")},[this.renderInput(),this.showClear&&t(o["a"],{attrs:{name:"clear"},class:v("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),i("button")&&t("div",{class:v("button")},[i("button")])]),this.errorMessage&&t("div",{class:v("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},adaf:function(t,e,i){},b573:function(t,e,i){"use strict";i("ccdc"),i("0c81"),i("bf90")},b6be:function(t,e,i){},bf90:function(t,e,i){},c7b4:function(t,e,i){"use strict";i.d(e,"a",function(){return o});var n=i("6e6d"),s=i("47c8"),a=i("f055"),o=n["a"].extend({mixins:[Object(a["a"])(function(t,e){this.onPopstate(e)})],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.onPopstate(t)}},methods:{onPopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?s["b"]:s["a"];e(window,"popstate",this.close)}}}})},e36b:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}}},f055:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var n=i("47c8");function s(t){function e(){this.binded||(t.call(this,n["b"],!0),this.binded=!0)}function i(){this.binded&&(t.call(this,n["a"],!1),this.binded=!1)}return{mounted:e,activated:e,deactivated:i,beforeDestroy:i}}}}]);
//# sourceMappingURL=chunk-05b049c4.607ee388.js.map