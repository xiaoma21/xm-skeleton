(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47e5d1b4"],{"2f21":function(e,t,n){"use strict";var r=n("79e5");e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},"2fdd":function(e,t,n){"use strict";var r=n("9cff"),i=n.n(r);i.a},"365c":function(e,t,n){"use strict";n.d(t,"E",function(){return i}),n.d(t,"x",function(){return o}),n.d(t,"H",function(){return c}),n.d(t,"M",function(){return s}),n.d(t,"N",function(){return l}),n.d(t,"f",function(){return a}),n.d(t,"L",function(){return u}),n.d(t,"D",function(){return d}),n.d(t,"e",function(){return f}),n.d(t,"t",function(){return m}),n.d(t,"u",function(){return h}),n.d(t,"n",function(){return b}),n.d(t,"m",function(){return p}),n.d(t,"F",function(){return g}),n.d(t,"G",function(){return v}),n.d(t,"a",function(){return y}),n.d(t,"o",function(){return O}),n.d(t,"h",function(){return j}),n.d(t,"w",function(){return k}),n.d(t,"B",function(){return L}),n.d(t,"d",function(){return P}),n.d(t,"r",function(){return R}),n.d(t,"K",function(){return w}),n.d(t,"s",function(){return M}),n.d(t,"l",function(){return A}),n.d(t,"v",function(){return T}),n.d(t,"b",function(){return B}),n.d(t,"p",function(){return F}),n.d(t,"j",function(){return z}),n.d(t,"z",function(){return S}),n.d(t,"C",function(){return $}),n.d(t,"i",function(){return x}),n.d(t,"g",function(){return V}),n.d(t,"y",function(){return C}),n.d(t,"A",function(){return D}),n.d(t,"c",function(){return I}),n.d(t,"q",function(){return _}),n.d(t,"I",function(){return N}),n.d(t,"J",function(){return E}),n.d(t,"k",function(){return J});var r=n("7f80"),i=function(e){return Object(r["b"])("/common/captcha/init")},o=function(e,t){return Object(r["b"])("/common/captcha/draw/".concat(e))},c=function(e){return Object(r["c"])("/login",e)},s=function(e){return Object(r["b"])("/user/info",e)},l=function(e){return Object(r["c"])("/user/edit",e)},a=function(e){return Object(r["c"])("/user/modifyPass",e)},u=function(e){return Object(r["c"])("/user/unlock",e)},d=function(e){return Object(r["b"])("/user/getByCondition",e)},f=function(e){return Object(r["c"])("/user/admin/add",e)},m=function(e){return Object(r["c"])("/user/admin/edit",e)},h=function(e,t){return Object(r["c"])("/user/admin/enable/".concat(e),t)},b=function(e,t){return Object(r["c"])("/user/admin/disable/".concat(e),t)},p=function(e,t){return Object(r["a"])("/user/delByIds/".concat(e),t)},g=function(e){return Object(r["b"])("/department/getByParentId/0",e)},v=function(e,t){return Object(r["b"])("/department/getByParentId/".concat(e),t)},y=function(e){return Object(r["c"])("/department/add",e)},O=function(e){return Object(r["c"])("/department/edit",e)},j=function(e,t){return Object(r["a"])("/department/delByIds/".concat(e),t)},k=function(e){return Object(r["b"])("/role/getAllList",e)},L=function(e){return Object(r["b"])("/role/getAllByPage",e)},P=function(e){return Object(r["c"])("/role/save",e)},R=function(e){return Object(r["c"])("/role/edit",e)},w=function(e){return Object(r["c"])("/role/setDefault",e)},M=function(e,t){return Object(r["c"])("/role/editRolePerm/".concat(e),t)},A=function(e,t){return Object(r["a"])("/role/delAllByIds/".concat(e),t)},T=function(e){return Object(r["b"])("/permission/getAllList",e)},B=function(e){return Object(r["c"])("/permission/add",e)},F=function(e){return Object(r["c"])("/permission/edit",e)},z=function(e,t){return Object(r["a"])("/permission/delByIds/".concat(e),t)},S=function(e){return Object(r["b"])("/log/getAllByPage",e)},$=function(e){return Object(r["b"])("/log/search",e)},x=function(e,t){return Object(r["a"])("/log/delByIds/".concat(e),t)},V=function(e){return Object(r["a"])("/log/delAll",e)},C=function(){return Object(r["b"])("/home/statistics")},D=function(e){return Object(r["b"])("/quartzJob/getAllByPage",e)},I=function(e){return Object(r["c"])("/quartzJob/add",e)},_=function(e){return Object(r["c"])("/quartzJob/edit",e)},N=function(e){return Object(r["c"])("/quartzJob/pause",e)},E=function(e){return Object(r["c"])("/quartzJob/resume",e)},J=function(e,t){return Object(r["a"])("/quartzJob/delByIds/".concat(e),t)}},"37c5":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("Row",[n("Col",[n("Card",[n("Row",{staticClass:"operation"},[n("Button",{directives:[{name:"has",rawName:"v-has",value:"add",expression:"'add'"}],attrs:{type:"primary",icon:"md-add"},on:{click:e.addRole}},[e._v("添加角色")]),n("Button",{directives:[{name:"has",rawName:"v-has",value:"delete",expression:"'delete'"}],attrs:{icon:"md-trash"},on:{click:e.delAll}},[e._v("批量删除")]),n("Button",{attrs:{icon:"md-refresh"},on:{click:e.init}},[e._v("刷新")])],1),n("Row",[n("Alert",{attrs:{"show-icon":""}},[e._v("\n                        已选择 "),n("span",{staticClass:"select-count"},[e._v(e._s(e.selectCount))]),e._v(" 项\n                        "),n("a",{staticClass:"select-clear",on:{click:e.clearSelectAll}},[e._v("清空")])])],1),n("Row",[n("Table",{ref:"table",attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data,sortable:"custom"},on:{"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect}})],1),n("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[n("Page",{attrs:{current:e.pageNumber,total:e.total,"page-size":e.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)],1),n("Modal",{attrs:{title:e.modalTitle,"mask-closable":!1,width:500},model:{value:e.roleModalVisible,callback:function(t){e.roleModalVisible=t},expression:"roleModalVisible"}},[n("Form",{ref:"roleForm",attrs:{model:e.roleForm,"label-width":80,rules:e.roleFormValidate}},[n("FormItem",{attrs:{label:"角色名称",prop:"name"}},[n("Input",{attrs:{placeholder:"按照Spring Security约定建议以‘ROLE_’开头"},model:{value:e.roleForm.name,callback:function(t){e.$set(e.roleForm,"name",t)},expression:"roleForm.name"}})],1),n("FormItem",{attrs:{label:"备注",prop:"description"}},[n("Input",{model:{value:e.roleForm.description,callback:function(t){e.$set(e.roleForm,"description",t)},expression:"roleForm.description"}})],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:e.cancelRole}},[e._v("取消")]),n("Button",{attrs:{type:"primary",loading:e.submitLoading},on:{click:e.submitRole}},[e._v("提交")])],1)],1),n("Modal",{attrs:{title:"分配权限(点击选择)","mask-closable":!1,width:500,styles:{top:"30px"}},model:{value:e.permModalVisible,callback:function(t){e.permModalVisible=t},expression:"permModalVisible"}},[n("Tree",{ref:"tree",attrs:{data:e.permData,multiple:""}}),e.treeLoading?n("Spin",{attrs:{size:"large"}}):e._e(),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:e.cancelPermEdit}},[e._v("取消")]),n("Button",{on:{click:e.selectTreeAll}},[e._v("全选/反选")]),n("Button",{attrs:{type:"primary",loading:e.submitPermLoading},on:{click:e.submitPermEdit}},[e._v("提交")])],1)],1)],1)},i=[],o=(n("7f7f"),n("f499")),c=n.n(o),s=(n("ac6a"),n("55dd"),n("6762"),n("2fdb"),n("365c")),l={name:"role-manage",data:function(){var e=this;return{loading:!0,treeLoading:!0,submitPermLoading:!1,sortColumn:"createdAt",sortType:"desc",modalType:0,roleModalVisible:!1,permModalVisible:!1,modalTitle:"",permTypes:[],roleForm:{description:"",name:""},roleFormValidate:{name:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]},submitLoading:!1,selectList:[],selectCount:0,columns:[{type:"selection",width:60,align:"center"},{type:"index",width:60,align:"center"},{title:"角色名称",key:"name",sortable:!0},{title:"备注",key:"description",sortable:!0},{title:"创建时间",key:"createdAt",sortable:!0,sortType:"desc"},{title:"更新时间",key:"updatedAt",sortable:!0},{title:"是否设置为注册用户默认角色",key:"defaultRole",align:"center",render:function(t,n){if(e.permTypes.includes("setDefault"))return n.row.defaultRole?t("div",[t("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.cancelDefault(n.row)}}},"取消默认")]):t("div",[t("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.setDefault(n.row)}}},"设为默认")])}},{title:"操作",key:"action",align:"center",width:300,render:function(t,n){var r,i,o;return e.permTypes.includes("edit")&&(r=t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.edit(n.row)}}},"编辑")),e.permTypes.includes("editPerm")&&(i=t("Button",{props:{type:"warning",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.editPerm(n.row)}}},"分配权限")),e.permTypes.includes("delete")&&(o=t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.remove(n.row)}}},"删除")),t("div",[i,r,o])}}],data:[],pageNumber:1,pageSize:10,total:0,permData:[],editRolePermId:"",selectPermList:[],selectAllFlag:!1}},methods:{init:function(){this.getRoleList(),this.getPermList(),this.initMeta()},changePage:function(e){this.pageNumber=e,this.getRoleList(),this.clearSelectAll()},changePageSize:function(e){this.pageSize=e,this.getRoleList()},changeSort:function(e){this.sortColumn=e.key,this.sortType=e.order,"normal"===e.order&&(this.sortType=""),this.getRoleList()},getRoleList:function(){var e=this;this.loading=!0;var t={pageNumber:this.pageNumber,pageSize:this.pageSize,sort:this.sortColumn,order:this.sort};Object(s["B"])(t).then(function(t){e.loading=!1,!0===t.success&&(e.data=t.result.records,e.total=t.result.total)})},getPermList:function(){var e=this;this.treeLoading=!0,Object(s["v"])().then(function(t){e.treeLoading=!1,!0===t.success&&(e.deleteDisableNode(t.result),e.permData=t.result)})},deleteDisableNode:function(e){var t=this;e.forEach(function(e){-1===e.status&&(e.title="[已禁用] "+e.title,e.disabled=!0),e.children&&e.children.length>0&&t.deleteDisableNode(e.children)})},cancelRole:function(){this.roleModalVisible=!1},submitRole:function(){var e=this;this.$refs.roleForm.validate(function(t){t&&(0===e.modalType?(e.submitLoading=!0,Object(s["d"])(e.roleForm).then(function(t){e.submitLoading=!1,!0===t.success&&(e.$Message.success("操作成功"),e.getRoleList(),e.roleModalVisible=!1)})):(e.submitLoading=!0,Object(s["r"])(e.roleForm).then(function(t){e.submitLoading=!1,!0===t.success&&(e.$Message.success("操作成功"),e.getRoleList(),e.roleModalVisible=!1)})))})},addRole:function(){this.modalType=0,this.modalTitle="添加角色",this.$refs.roleForm.resetFields(),delete this.roleForm.id,this.roleModalVisible=!0},edit:function(e){for(var t in this.modalType=1,this.modalTitle="编辑角色",e)null===e[t]&&(e[t]="");var n=c()(e),r=JSON.parse(n);this.roleForm=r,this.roleModalVisible=!0},remove:function(e){var t=this;this.$Modal.confirm({title:"确认删除",content:"您确认要删除角色 "+e.name+" ?",onOk:function(){Object(s["l"])(e.id).then(function(e){!0===e.success&&(t.$Message.success("删除成功"),t.getRoleList())})}})},setDefault:function(e){var t=this;this.$Modal.confirm({title:"确认设置",content:"您确认要设置所选的 "+e.name+" 为注册用户默认角色?",onOk:function(){var n={id:e.id,isDefault:!0};Object(s["K"])(n).then(function(e){!0===e.success&&(t.$Message.success("操作成功"),t.getRoleList())})}})},cancelDefault:function(e){var t=this;this.$Modal.confirm({title:"确认取消",content:"您确认要取消所选的 "+e.name+" 角色为默认?",onOk:function(){var n={id:e.id,isDefault:!1};Object(s["K"])(n).then(function(e){!0===e.success&&(t.$Message.success("操作成功"),t.getRoleList())})}})},clearSelectAll:function(){this.$refs.table.selectAll(!1)},changeSelect:function(e){this.selectList=e,this.selectCount=e.length},delAll:function(){var e=this;this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",onOk:function(){var t="";e.selectList.forEach(function(e){t+=e.id+","}),t=t.substring(0,t.length-1),Object(s["l"])(t).then(function(t){!0===t.success&&(e.$Message.success("删除成功"),e.clearSelectAll(),e.getRoleList())})}})},editPerm:function(e){this.editRolePermId=e.id;var t=e.permissions;this.checkPermTree(this.permData,t),this.permModalVisible=!0},checkPermTree:function(e,t){var n=this;e.forEach(function(e){n.hasPerm(e,t)?e.selected=!0:e.selected=!1,e.children&&e.children.length>0&&n.checkPermTree(e.children,t)})},hasPerm:function(e,t){for(var n=!1,r=0;r<t.length;r++)if(e.id===t[r].id){n=!0;break}return!!n},selectTreeAll:function(){this.selectAllFlag=!this.selectAllFlag;var e=this.selectAllFlag;this.selectedTreeAll(this.permData,e)},selectedTreeAll:function(e,t){var n=this;e.forEach(function(e){e.selected=t,e.children&&e.children.length>0&&n.selectedTreeAll(e.children,t)})},submitPermEdit:function(){var e=this;this.submitPermLoading=!0;var t="",n=this.$refs.tree.getSelectedNodes();n.forEach(function(e){t+=e.id+","}),t=t.substring(0,t.length-1),Object(s["s"])(this.editRolePermId,{permIds:t}).then(function(t){e.submitPermLoading=!1,!0===t.success&&(e.$Message.success("操作成功"),e.getRoleList(),e.permModalVisible=!1)})},cancelPermEdit:function(){this.permModalVisible=!1},initMeta:function(){var e=this.$route.meta.permTypes;null!==e&&void 0!==e&&(this.permTypes=e)}},mounted:function(){this.init()}},a=l,u=(n("2fdd"),n("2877")),d=Object(u["a"])(a,r,i,!1,null,null,null);t["default"]=d.exports},"55dd":function(e,t,n){"use strict";var r=n("5ca1"),i=n("d8e8"),o=n("4bf8"),c=n("79e5"),s=[].sort,l=[1,2,3];r(r.P+r.F*(c(function(){l.sort(void 0)})||!c(function(){l.sort(null)})||!n("2f21")(s)),"Array",{sort:function(e){return void 0===e?s.call(o(this)):s.call(o(this),i(e))}})},"9cff":function(e,t,n){}}]);