(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{314:function(e,t,o){var content=o(389);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("6bde7f99",content,!0,{sourceMap:!1})},388:function(e,t,o){"use strict";var r=o(314);o.n(r).a},389:function(e,t,o){(t=o(11)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900);"]),t.push([e.i,"@import url(https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Material+Icons);"]),t.push([e.i,"",""]),e.exports=t},418:function(e,t,o){"use strict";o.r(t);var r={data:function(){return{dialog:!1,headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Actions",value:"action",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},caloriesNum:function(){return this.editedItem.calories>=200?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.desserts=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7}]},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this.desserts.indexOf(e);confirm("Are you sure you want to delete this item?")&&this.desserts.splice(t,1)},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}}},n=(o(388),o(59)),l=o(84),c=o.n(l),d=o(81),m=o(290),v=o(289),f=o(407),I=o(280),h=o(411),x=o(360),_=o(326),k=o(124),C=o(409),y=o(284),w=o(402),V=o(39),T=o(329),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-data-table",{staticClass:"elevation-1 mt-5",attrs:{headers:e.headers,items:e.desserts,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[o("v-toolbar",{attrs:{flat:"",color:"white"}},[o("v-toolbar-title",[e._v("My CRUD")]),e._v(" "),o("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),o("v-spacer"),e._v(" "),o("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[o("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},r),[e._v("New Item")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}},[e._v(" "+e._s(e.caloriesNum)+" ")])],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),e._v(" "),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var r=t.item;return[o("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("\n      edit\n    ")]),e._v(" "),o("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v("\n      delete\n    ")])]}},{key:"no-data",fn:function(){return[o("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0}])})}),[],!1,null,"346c6504",null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCol:f.a,VContainer:I.a,VDataTable:h.a,VDialog:x.a,VDivider:_.a,VIcon:k.a,VRow:C.a,VSpacer:y.a,VTextField:w.a,VToolbar:V.a,VToolbarTitle:T.a})}}]);