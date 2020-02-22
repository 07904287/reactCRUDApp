(this.webpackJsonpreactcrud=this.webpackJsonpreactcrud||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),c=n.n(l),o=(n(31),n(14)),m=n.n(o),u=n(3),i=n(12),d=n(20),p=n(4),s=n(16),E=n(10),f=function(e){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Department ID"),r.a.createElement("th",null,"Department name"),r.a.createElement("th",null,"Created at"),r.a.createElement("th",null,"Updated at"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,e.departments.length>0?e.departments.map((function(t){return r.a.createElement("tr",{key:t.department_id},r.a.createElement("td",null,t.department_id),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.created_at),r.a.createElement("td",null,t.updated_at),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){e.editRow(t)},className:"button muted-button"},"Edit"),r.a.createElement("button",{onClick:function(){return e.deleteDepartment(t.department_id)},className:"button muted-button"},"Delete")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3},"No departments"))))},h=n(1),b=function(e){var t={name:""},n=Object(a.useState)(t),l=Object(p.a)(n,2),c=l[0],o=l[1];return r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),c.name&&(e.addDepartment(c),o(t))}},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:function(e){var t=e.target,n=t.name,a=t.value;o(Object(u.a)({},c,Object(h.a)({},n,a)))}}),r.a.createElement("button",null,"Add new department"))},y=function(e){var t=Object(a.useState)(e.currentDepartment),n=Object(p.a)(t,2),l=n[0],c=n[1];return Object(a.useEffect)((function(){c(e.currentDepartment)}),[e]),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateDepartment(l.department_id,l)}},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:l.name,onChange:function(e){var t=e.target,n=t.name,a=t.value;c(Object(u.a)({},l,Object(h.a)({},n,a)))}}),r.a.createElement("button",null,"Update department"),r.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"button muted-button"},"Cancel"))},g=n(15),v=(n(18),function(e){var t=Object(a.useState)({name:"",age:"",contract_employee:!1,address:""}),n=Object(p.a)(t,2),l=n[0],c=n[1],o=function(e){var t=e.target,n=t.name,a=t.value;c(Object(u.a)({},l,Object(h.a)({},n,a)))};return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),l.name&&l.age&&l.address&&(console.log("submit"+l.department),e.addEmployee(l),c({name:"",age:"",contract_employee:!1,address:"",department:"",department_name:""}),console.log(l))}},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:l.name,onChange:o}),r.a.createElement("label",null,"Age"),r.a.createElement("input",{type:"number",name:"age",value:l.age,onChange:o}),r.a.createElement("label",null,"Address"),r.a.createElement("input",{type:"text",name:"address",value:l.address,onChange:o}),r.a.createElement("label",null,"Contract Type"),r.a.createElement("input",{type:"checkbox",name:"contract",checked:l.contract_employee,onChange:function(e){c(Object(u.a)({},l,{contract_employee:e.target.checked}))}})," Check if employee is a contractor",r.a.createElement("label",null,"Department"),r.a.createElement(g.a,{className:"asyncSelect",value:l.department_name,placeholder:l.department_name,cacheOptions:!0,defaultOptions:!0,name:"department",onChange:function(e){c(Object(u.a)({},l,{department:e.department_id,department_name:e.name}))},loadOptions:function(e){var t="http://206.189.72.24:8000/api/department/list".concat(e?"?searchParam="+e:"");return fetch(t).then((function(e){return e.json()})).catch((function(e){console.log("some error",e)}))},getOptionValue:function(e){return e.name},getOptionLabel:function(e){return e.name}}),r.a.createElement("button",null,"Add new employee"))}),O=function(e){var t=Object(a.useState)(e.currentEmployee),n=Object(p.a)(t,2),l=n[0],c=n[1],o=function(e){var t=e.target,n=t.name,a=t.value;c(Object(u.a)({},l,Object(h.a)({},n,a)))};Object(a.useEffect)((function(){c(e.currentEmployee)}),[e]);return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateEmployee(l.employee_id,l)}},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:l.name,onChange:o}),r.a.createElement("label",null,"Age"),r.a.createElement("input",{type:"number",name:"age",value:l.age,onChange:o}),r.a.createElement("label",null,"Address"),r.a.createElement("input",{type:"text",name:"address",value:l.address,onChange:o}),r.a.createElement("label",null,"Contract Type"),r.a.createElement("input",{type:"checkbox",name:"contract",checked:l.contract_employee,onChange:function(e){c(Object(u.a)({},l,{contract_employee:e.target.checked}))}})," Check if employee is a contractor",r.a.createElement("label",null,"Department"),r.a.createElement(g.a,{className:"asyncSelect",placeholder:l.department,cacheOptions:!0,defaultOptions:!0,name:"department",onChange:function(e){console.log("handleAsyncSelect"+e.department_id),c(Object(u.a)({},l,{department:e.department_id}))},loadOptions:function(e){var t="http://206.189.72.24:8000/api/department/list".concat(e?"?searchParam="+e:"");return fetch(t).then((function(e){return e.json()})).catch((function(e){console.log("some error",e)}))},getOptionValue:function(e){return e.name},getOptionLabel:function(e){return e.name}}),r.a.createElement("button",null,"Update employee"),r.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"button muted-button"},"Cancel"))},j=function(e){return r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Employee name"),r.a.createElement("th",null,"Age"),r.a.createElement("th",null,"Contract"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"Department"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,e.employees.length>0?e.employees.map((function(t){return r.a.createElement("tr",{key:t.employee_id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.age),r.a.createElement("td",null,"".concat(t.contract_employee)),r.a.createElement("td",null,t.address),r.a.createElement("td",null,t.department),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){e.editRow(t)},className:"button muted-button"},"Edit"),r.a.createElement("button",{onClick:function(){return e.deleteEmployee(t.employee_id)},className:"button muted-button"},"Delete")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3},"No employees"))))};var _=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(s.a,null,r.a.createElement("div",{className:"topnav"},r.a.createElement(s.b,{className:"navMenuItem",to:"/"},"Departments"),r.a.createElement(s.b,{className:"navMenuItem",to:"/employees"},"Employees")),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/"},r.a.createElement((function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),o=Object(p.a)(c,2),s=o[0],E=o[1],h=Object(a.useState)({department_id:"",name:""}),g=Object(p.a)(h,2),v=g[0],O=g[1];function j(){return(j=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://206.189.72.24:8000/api/department/list");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-large"},s?r.a.createElement("div",null,r.a.createElement("h2",null,"Edit department"),r.a.createElement(y,{editing:s,setEditing:E,currentDepartment:v,updateDepartment:function(e,t){E(!1);var a={name:t.name};fetch("http://206.189.72.24:8000/api/department/interact/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).catch((function(e){console.error("Error:",e)}));l(n.map((function(n){return n.department_id===e?t:n})))}})):r.a.createElement("div",null,r.a.createElement("h2",null,"Add department"),r.a.createElement(b,{addDepartment:function(e){var t={name:e.name};fetch("http://206.189.72.24:8000/api/department/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),l([].concat(Object(i.a)(n),[e]))})).catch((function(e){console.error("Error:",e)}))}}))),r.a.createElement("div",{className:"flex-large"},r.a.createElement("h2",null,"View departments"),r.a.createElement(f,{departments:n,editRow:function(e){E(!0),O(Object(u.a)({},e,{name:e.name}))},deleteDepartment:function(e){l(n.filter((function(t){return t.department_id!==e})));var t={department_id:e};fetch("http://206.189.72.24:8000/api/department/interact/"+e,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).catch((function(e){console.error("Error:",e)}))}}))))}),null)),r.a.createElement(E.a,{path:"/employees"},r.a.createElement((function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),o=Object(p.a)(c,2),s=o[0],E=o[1],f=Object(a.useState)({employee_id:"",name:""}),h=Object(p.a)(f,2),b=h[0],y=h[1];function g(){return(g=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://206.189.72.24:8000/api/employee/list");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,l(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){console.log("reload"),function(){g.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-large"},s?r.a.createElement("div",null,r.a.createElement("h2",null,"Edit employee"),r.a.createElement(O,{editing:s,setEditing:E,currentEmployee:b,updateEmployee:function(e,t){E(!1),console.log(t);var a={name:t.name,age:t.age,contract_employee:t.contract_employee,address:t.address,department:t.department};fetch("http://206.189.72.24:8000/api/employee/interact/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).catch((function(e){console.error("Error:",e)}));l(n.map((function(n){return n.employee_id===e?t:n})))}})):r.a.createElement("div",null,r.a.createElement("h2",null,"Add employee"),r.a.createElement(v,{addEmployee:function(e){var t={name:e.name,age:e.age,contract_employee:e.contract_employee,address:e.address,department:e.department};fetch("http://206.189.72.24:8000/api/employee/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),l([].concat(Object(i.a)(n),[e]))})).catch((function(e){console.error("Error:",e)}))}}))),r.a.createElement("div",{className:"flex-large"},r.a.createElement("h2",null,"View employees"),r.a.createElement(j,{employees:n,editRow:function(e){E(!0),y(Object(u.a)({},e,{name:e.name,department:e.department}))},deleteEmployee:function(e){var t={employee_id:e};fetch("http://206.189.72.24:8000/api/employee/interact/"+e,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).catch((function(e){console.error("Error:",e)}));l(n.filter((function(t){return t.employee_id!==e})))}}))))}),null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.4f2e8a57.chunk.js.map