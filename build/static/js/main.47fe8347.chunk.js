(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{177:function(e,t,n){},180:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},330:function(e,t,n){},332:function(e,t,n){"use strict";n.r(t);var a,c=n(0),s=n.n(c),i=n(26),l=n.n(i),o=n(38),r=n(30),d=n(336),j=n(337),u=n(340),k=n(342),O=n(338),b=n(168),h=n(341),f=(n(177),n(345)),m=n(343),x=n(344),p=n(346),v=n(6),C=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(e.task.task),l=Object(r.a)(i,2),d=l[0],j=l[1];return Object(c.useEffect)((function(){j(e.task.task)}),[e.task.task]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h.a,{checked:e.task.checked,onChange:function(){var t=Object(o.a)(Object(o.a)({},e.task),{},{checked:!e.task.checked});e.editTask(t)},children:a?null:e.task.task}),a?Object(v.jsx)(u.a,{defaultValue:e.task.task,onChange:function(e){j(e.target.value)}},"task"):null,Object(v.jsxs)("div",{className:"content-icons",children:[a?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(m.a,{className:"icon-cancel",onClick:function(){s(!1)}}),Object(v.jsx)(x.a,{className:"icon-edit",onClick:function(){var t=Object(o.a)(Object(o.a)({},e.task),{},{task:d});e.editTask(t),s(!1)}})]}):Object(v.jsx)(f.a,{onClick:function(){j(e.task.task),s(!0)}}),Object(v.jsx)(p.a,{onClick:function(){e.selectTask(e.task),e.onDeleteOpen()}})]})]})},T=n(347),g=(n(180),u.a.Search);!function(e){e.Pending="Pendiente",e.Complete="Completado"}(a||(a={}));var S,N=function(e){var t=Object(c.useState)(e.taskList.filter((function(t){return e.title===a.Pending?!t.checked:t.checked}))),n=Object(r.a)(t,2),s=n[0],i=n[1],l=Object(c.useState)(""),o=Object(r.a)(l,2),d=o[0],j=o[1],u=Object(c.useState)(!1),h=Object(r.a)(u,2),f=h[0],m=h[1],x=Object(c.useState)(!1),p=Object(r.a)(x,2),S=p[0],N=p[1];return Object(c.useEffect)((function(){var t=e.taskList.filter((function(t){return e.title===a.Pending?!t.checked:t.checked}));t=t.filter((function(e){return e.task.includes(d)})),f&&(t=t.sort((function(e,t){return e.task>t.task?0:-1}))),i(t)}),[e.taskList,d,f]),Object(v.jsxs)("div",{className:"task-list",children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("h1",{children:e.title}),Object(v.jsx)(g,{size:"large",placeholder:"Nombre de la tarea",allowClear:!0,onSearch:function(e){return console.log(e)},onChange:function(e){return j(e.target.value)}}),Object(v.jsx)(k.a,{placement:"bottom",content:Object(v.jsx)("p",{className:"opt-popover",onClick:function(){m(!f),N(!1)},children:"Alfab\xe9tico"}),title:"Orden",trigger:"click",visible:S,onVisibleChange:function(){return N(!0)},children:Object(v.jsx)(T.a,{className:"icon-filter"})})]}),Object(v.jsx)(O.b,{dataSource:s,renderItem:function(t){return Object(v.jsx)(O.b.Item,{children:Object(v.jsx)(C,{task:t,onOpen:e.onOpen,selectTask:e.selectTask,onDeleteOpen:e.onDeleteOpen,editTask:e.editTask})})}}),Object(v.jsx)(b.a,{className:"btn-add",type:"primary",block:!0,onClick:function(){e.selectTask(null),e.onOpen()},children:"+"})]})},y=(n(188),n(55)),w=n.n(y),D=(n(189),n(339)),F=n(162),P=n.n(F),L=function(e){var t=e.showModal,n=e.onCancel,a=e.taskSelected,c=e.editTask,s=e.createTask;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(w.a,{title:a?"Editar tarea":"Nueva tarea",visible:t,onCancel:n,destroyOnClose:!0,footer:[Object(v.jsx)(b.a,{onClick:function(){n()},children:"Cancelar"},"back"),Object(v.jsx)(b.a,{form:"myForm",htmlType:"submit",type:"primary",children:a?"Editar":"Crear"},"submit")],centered:!0,children:Object(v.jsx)("div",{children:Object(v.jsxs)(D.a,{labelCol:{span:4},wrapperCol:{span:20},layout:"horizontal",id:"myForm",onFinish:function(e){var t={id:a?a.id:P.a.v4(),checked:e.checked,task:e.task};a?c(t):s(t),n()},fields:[{name:["task"]}],children:[Object(v.jsx)(D.a.Item,{label:"Tarea",name:"task",rules:[{required:!0,message:"Por favor ingrese la tarea!"}],initialValue:a?a.task:"",children:Object(v.jsx)(u.a,{value:a?a.task:""},"task")}),Object(v.jsx)(D.a.Item,{name:"checked",valuePropName:"checked",initialValue:!!a&&a.checked,children:Object(v.jsx)(h.a,{checked:null===a||void 0===a?void 0:a.checked,children:"Completada"})})]})})})})},M=(n(330),function(e){var t=e.showModal,n=e.onCancel,a=e.taskSelected,c=e.deleteTask;return Object(v.jsx)(v.Fragment,{children:a?Object(v.jsx)(w.a,{title:"Remove task",visible:t,onOk:function(){c(a.id),n()},onCancel:n,destroyOnClose:!0,centered:!0,children:Object(v.jsxs)("div",{className:"modal-content",children:[Object(v.jsx)(p.a,{className:"icon-modal"}),Object(v.jsxs)("p",{children:['Estas seguro que deseas eliminar la tarea "',a.task,'"?']})]})}):null})});!function(e){e.Pending="Pendiente",e.Complete="Completado"}(S||(S={}));var E=function(e){return Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(d.a,{className:"content-list",children:[Object(v.jsx)(j.a,{sm:24,md:12,children:Object(v.jsx)(N,{title:S.Pending,taskList:e.taskList,onOpen:e.onOpen,selectTask:e.selectTask,onDeleteOpen:e.onDeleteOpen,editTask:e.editTask})}),Object(v.jsx)(j.a,{sm:24,md:12,children:Object(v.jsx)(N,{title:S.Complete,taskList:e.taskList,onOpen:e.onOpen,selectTask:e.selectTask,onDeleteOpen:e.onDeleteOpen,editTask:e.editTask})}),Object(v.jsx)(L,{showModal:e.showModal,onCancel:e.onCancel,taskSelected:e.taskSelected,editTask:e.editTask,createTask:e.addTask}),Object(v.jsx)(M,{showModal:e.showDeleteModal,onCancel:e.onDeleteCancel,taskSelected:e.taskSelected,deleteTask:e.deleteTask})]})})},I=n(170),V=s.a.createContext(null),q=function(e){var t=e.children,n=Object(c.useState)([]),a=Object(r.a)(n,2),s=a[0],i=a[1],l={taskList:s,addTask:function(e){i([].concat(Object(I.a)(s),[e]))},deleteTask:function(e){var t=s.filter((function(t){return t.id!==e}));i(t)},editTask:function(e){var t=s.map((function(t){return e.id===t.id?Object(o.a)(Object(o.a)({},t),{},{task:e.task,checked:e.checked}):t}));i(t)}};return Object(v.jsx)(V.Provider,{value:l,children:t})},z=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(r.a)(s,2),l=i[0],d=i[1],j=Object(c.useState)(null),u=Object(r.a)(j,2),k=u[0],O=u[1],b=Object(c.useState)([]),h=Object(r.a)(b,2),f=h[0],m=(h[1],Object(c.useState)([])),x=Object(r.a)(m,2),p=x[0],C=(x[1],function(){a(!1)}),T=function(){a(!0)},g=function(e){O(e)},S=function(){d(!1)},N=function(){d(!0)},y=function(e){return Object(v.jsx)(E,Object(o.a)(Object(o.a)({showModal:n,onCancel:C,showDeleteModal:l,onDeleteCancel:S,onOpen:T,onDeleteOpen:N,taskSelected:k,selectTask:g},e),{},{listPendingTask:f,listFinisTask:p}))};return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(q,{children:Object(v.jsx)(V.Consumer,{children:function(e){return e?Object(v.jsx)(y,Object(o.a)({},e)):null}})})})};var B=function(){return Object(v.jsx)("div",{style:{width:"100%",height:"100%"},children:Object(v.jsx)(z,{})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,348)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};n(331);l.a.render(Object(v.jsx)(B,{}),document.getElementById("root")),J()}},[[332,1,2]]]);
//# sourceMappingURL=main.47fe8347.chunk.js.map