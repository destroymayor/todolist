(window.webpackJsonptodolist=window.webpackJsonptodolist||[]).push([[0],{108:function(e){e.exports=JSON.parse('{"translations":"\u591a\u8a9e\u8a00","language":"\u4e2d\u6587","add_task":"\u65b0\u589e\u5de5\u4f5c","sort_date":"\u4f9d\u65e5\u671f\u6392\u5e8f","form_input_title":"\u8f38\u5165\u6a19\u984c","form_input_content":"\u8f38\u5165\u8a73\u7d30\u5167\u5bb9","form_input_date":"\u65b0\u589e\u65e5\u671f","item_remove_tooltip":"\u522a\u9664","item_edit_item_tooltip":"\u7de8\u8f2f\u9805\u76ee"}')},109:function(e){e.exports=JSON.parse('{"translations":"Translations","language":"English","add_task":"Add Task","sort_date":"Sort by Date","form_input_title":"Enter Title","form_input_content":"Enter Content","form_input_date":"Add Date","item_remove_tooltip":"Remove","item_edit_item_tooltip":"Edit Item"}')},122:function(e,t,n){e.exports=n(210)},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},188:function(e,t,n){},197:function(e,t,n){},210:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(8),c=n.n(r),i=(n(127),n(128),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=n(15),u=(n(129),n(25));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={zh_tw:n(108),en:n(109)},p=function(e){return function(t){return f[e][t]||t}},g=JSON.parse(localStorage.getItem("i18nLanguage")),b={langCode:g||"zh_tw",translate:p(g||"zh_tw")};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=JSON.parse(localStorage.getItem("themeMode"))||{darkMode:!1},v=n(39);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={todoList:[],option:{SortState:!0}},y=JSON.parse(localStorage.getItem("todo"));function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var S=function(e){var t=Object.keys(e),n={};return t.forEach((function(t){var o=e[t](void 0,{type:""});if("undefined"===o)throw new Error("".concat(t," does not return state."));n[t]=o})),function(o,a){return a&&t.forEach((function(t){var o=n[t];n[t]=e[t](o,a)})),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n)}}({theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DARK_MODE":return h({},e,{darkMode:!e.darkMode});default:return e}},todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y||E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return I({},e,{todoList:[t.addTodoListItem].concat(Object(v.a)(e.todoList))});case"REMOVE_ITEM":var n=Object(v.a)(e.todoList);return n.splice(t.removeItem,1),I({},e,{todoList:n});case"DONE_ITEM":var o=Object(v.a)(e.todoList),a=o[t.doneItem];return o.splice(t.doneItem,1),a.done=!a.done,a.done?o.push(a):o.unshift(a),I({},e,{todoList:o});case"EDIT_ITEM":var r=Object(v.a)(e.todoList),c=r.findIndex((function(e,n){return n===t.editIndex})),i=[].concat(Object(v.a)(r.slice(0,c)),[t.editItem],Object(v.a)(r.slice(c+1)));return I({},e,{todoList:i});case"SORT_ITEM_BY_DATE":var l=Object(v.a)(e.todoList);e.option.SortState=!e.option.SortState;var d=l.sort((function(t,n){var o=Number(t.date.replace(new RegExp("-","g"),"")),a=Number(n.date.replace(new RegExp("-","g"),""));return e.option.SortState?o-a:a-o}));return I({},e,{todoList:d});default:return e}},i18n:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LANGUAGE":return m({},e,{langCode:t.langCode,translate:p(t.langCode)});default:return m({},e)}}}),k=Object(o.createContext)(),w=(n(130),n(10)),D=n.n(w),T=n(211),N=function(){return a.a.createElement("img",{src:"data:image/png;base64,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",width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"},alt:"darkMode"})},M=function(){return a.a.createElement("img",{src:"data:image/png;base64,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",width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"},alt:"lightMode"})},L=a.a.memo((function(e){var t=Object(o.useContext)(k),n=Object(d.a)(t,1)[0];return a.a.createElement(T.a,{style:{backgroundColor:"#0f1114"},checkedChildren:a.a.createElement(M,null),unCheckedChildren:a.a.createElement(N,null),defaultChecked:!n.theme.darkMode,onChange:e.onChange})})),P=function(){var e=Object(o.useContext)(k),t=Object(d.a)(e,2),n=t[0],r=t[1];Object(o.useEffect)((function(){localStorage.setItem("themeMode",JSON.stringify(n.theme))}),[n.theme]);var c=Object(o.useCallback)((function(){return r({type:"DARK_MODE"})}),[r]);return a.a.createElement("header",{className:"App-header"},a.a.createElement("div",{className:"App-header-Item"},a.a.createElement("h2",null,"Tasks"),a.a.createElement("div",{className:"App-header-date"},D()().format("YYYY-MM-DD"))),a.a.createElement("div",{className:"App-header-Item"},a.a.createElement("a",{className:"github-link",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/destroymayor/todolist/tree/gh-pages"},"GitHub"),a.a.createElement(L,{onChange:c})))},G=n(213),R=(n(179),n(180),n(181),n(212)),x=n(116),Y=n.n(x),Z=n(117),F=n.n(Z),B=a.a.memo((function(e){var t=Object(o.useContext)(k),n=Object(d.a)(t,1)[0],r=n.theme.darkMode?"todoList-form-item-date-dark":"todoList-form-item-date-light",c=n.theme.darkMode?"ant-calendar-panel-dark":"ant-calendar-panel-light";return D.a.locale("zh_tw"===n.i18n.langCode?"zh_tw":"en"),a.a.createElement(R.a,Object.assign({},e,{allowClear:!1,showToday:!1,className:"".concat(r),locale:"zh_tw"===n.i18n.langCode?Y.a:F.a,format:"YYYY-MM-DD",placeholder:n.i18n.translate("form_input_date"),dropdownClassName:c,style:e.styles,value:void 0!==e.value?D()(e.value,"YYYY-MM-DD"):void 0,onChange:function(t,n){return e.onChange(n)}}))})),J=n(215),K=J.a.TextArea,W=a.a.memo((function(e){var t=Object(o.useContext)(k),n=Object(d.a)(t,1)[0],r="".concat(n.theme.darkMode?"dark":"light"),c="".concat(n.theme.darkMode?"dark-font":"light-font");return a.a.createElement(J.a,Object.assign({},e,{placeholder:n.i18n.translate("form_input_title"),className:"".concat(e.className," ").concat(r," ").concat(c," "),ref:e.refs}))})),U=a.a.memo((function(e){var t=Object(o.useContext)(k),n=Object(d.a)(t,1)[0],r="".concat(n.theme.darkMode?"dark":"light"),c="".concat(n.theme.darkMode?"dark-font":"light-font");return a.a.createElement(K,Object.assign({},e,{placeholder:n.i18n.translate("form_input_content"),className:"".concat(e.className," ").concat(r," ").concat(c)}))})),z=n(37),V=a.a.memo((function(e){var t=Object(o.useContext)(k),n=Object(d.a)(t,1)[0],r="".concat(n.theme.darkMode?"dark-button":"light-button");return a.a.createElement(z.a,Object.assign({},e,{className:"".concat(r," ").concat(e.classnames),style:e.styles,onClick:e.onClick}),e.children)})),Q=(n(188),n(216)),H=n(214),_=n(12),X=function(){var e=Object(o.useContext)(k),t=Object(d.a)(e,2),n=t[0],r=t[1],c=n.theme.darkMode?"dark-button":"light-button",i=n.theme.darkMode?"dark-languageSelect":"light-languageSelect";Object(o.useEffect)((function(){localStorage.setItem("i18nLanguage",JSON.stringify(n.i18n.langCode))}),[n.i18n.langCode]);var l=Object(o.useCallback)((function(e){return r({type:"SET_LANGUAGE",langCode:e.item.props.value})}),[r]);return a.a.createElement(Q.a,{placement:"bottomRight",overlay:a.a.createElement(H.a,{className:i,onClick:l},a.a.createElement(H.a.Item,{key:"1",value:"zh_tw"},"\u4e2d\u6587"),a.a.createElement(H.a.Item,{key:"2",value:"en"},"English"))},a.a.createElement("a",{className:"languageSelectBtn ".concat(c)},n.i18n.translate("translations")," ",a.a.createElement(_.a,{type:"down"})))},q=a.a.memo((function(e){var t=Object(o.useContext)(k),n=Object(d.a)(t,1)[0];return a.a.createElement("div",{className:"todoForm-editItem"},a.a.createElement(V,{ghost:!0,classnames:"todoForm-editItem-addBtn",icon:"plus",onClick:e.TodoListAddOnClick},n.i18n.translate("add_task")),a.a.createElement(V,{ghost:!0,classnames:"todoForm-editItem-menu",icon:e.sortStateIcon,onClick:e.TodoListSortOnClick},n.i18n.translate("sort_date")),a.a.createElement(X,{classnames:"todoForm-editItem-languageSelect"}))}));function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=function(e,t){switch(t.type){case"INPUT_TITLE":return ee({},e,{todoInput:ee({},e.todoInput,{title:t.inputTitle})});case"INPUT_CONTENT":return ee({},e,{todoInput:ee({},e.todoInput,{content:t.inputContent})});case"INPUT_DATE":return ee({},e,{todoInput:ee({},e.todoInput,{date:t.inputDate})});case"INPUT_CLEAR":return ee({},e,{todoInput:ee({},e.todoInput,{title:"",content:"",date:"",done:!1})});default:return e}},ne=a.a.memo((function(e){var t=Object(o.useState)(!1),n=Object(d.a)(t,2),r=n[0],c=n[1],i=Object(o.useContext)(k),l=Object(d.a)(i,2),u=l[0],s=l[1],m=Object(o.useReducer)(te,{todoInput:{title:"",content:"",date:"",done:!1}}),f=Object(d.a)(m,2),p=f[0],g=f[1],b=Object(o.useRef)(),O=Object(o.useCallback)((function(t){t.preventDefault(),p.todoInput&&(e.todoItemValue(p.todoInput),b.current.focus(),g({type:"INPUT_CLEAR"}))}),[p.todoInput,e,g]),h=Object(o.useCallback)((function(e){return g({type:"INPUT_TITLE",inputTitle:e.target.value})}),[g]),j=Object(o.useCallback)((function(e){return g({type:"INPUT_CONTENT",inputContent:e.target.value})}),[g]),v=Object(o.useCallback)((function(e){return g({type:"INPUT_DATE",inputDate:e})}),[g]),A=Object(o.useCallback)((function(){return s({type:"SORT_ITEM_BY_DATE"})}),[s]);return a.a.createElement(a.a.Fragment,null,r?a.a.createElement("form",{className:"todoList-form",onSubmit:O},a.a.createElement("div",{className:"todoList-form-item"},a.a.createElement(V,{ghost:!0,classnames:"todoForm-closeBtn",icon:"close",onClick:function(){return c(!1)}})),a.a.createElement("div",{className:"todoList-form-item"},a.a.createElement(W,{className:"todoList-input",refs:b,onChange:h,value:p.todoInput.title,placeholder:u.i18n.translate("form_input_title")}),a.a.createElement(U,{rows:4,placeholder:u.i18n.translate("form_input_content"),onChange:j,value:p.todoInput.content}),a.a.createElement(B,{value:""!==p.todoInput.date?p.todoInput.date:void 0,onChange:function(e){return v(e)}}),a.a.createElement(V,{ghost:!1,htmlType:"submit",disabled:""===p.todoInput.title,classnames:"todoForm-addBtn",icon:"plus"},u.i18n.translate("add_task")))):a.a.createElement(q,{TodoListAddOnClick:function(){return c(!0)},TodoListSortOnClick:A,sortStateIcon:u.todo.option.SortState?"sort-descending":"sort-ascending"}))})),oe=(n(197),n(119)),ae=a.a.memo((function(e){var t=Object(o.useState)(!1),n=Object(d.a)(t,2),r=n[0],c=n[1],i=Object(o.useContext)(k),l=Object(d.a)(i,1)[0],u="".concat(l.theme.darkMode?"dark-font":"light-font"),s=D()(e.todoItemDataSource.date).isAfter(D()().format("YYYY-MM-DD")),m="".concat(e.todoDoneState?"todoList-done":""," ").concat(u);return a.a.createElement("div",{className:"todoList-item-text ".concat(u," ").concat(m)},a.a.createElement("div",{className:"todoList-item-text-title"},e.todoItemDataSource.title),a.a.createElement("div",{className:"todoList-item-text-content"},e.todoItemDataSource.content),a.a.createElement("div",{className:"todoList-item-text-date"},""!==e.todoItemDataSource.date&&a.a.createElement(a.a.Fragment,null,r?a.a.createElement(B,{open:r,value:""===e.todoItemDataSource.date?void 0:e.todoItemDataSource.date,onChange:function(t){c(!r),e.editTodoItemDate(t)}}):a.a.createElement(V,{ghost:!!l.theme.darkMode,styles:{color:s?"#1a73e8":"#d93025"},icon:"calendar",onClick:function(){return c(!r)}},a.a.createElement("span",{className:"".concat(u," ").concat(m)},e.todoItemDataSource.date)))))})),re=a.a.memo((function(e){return a.a.createElement("div",null,a.a.createElement(W,{className:"todoList-item-edit-component",value:e.todoItemDataSource.title,onChange:function(t){return e.editTitle(t.target.value)}}),a.a.createElement(U,{className:"todoList-item-edit-component",value:e.todoItemDataSource.content,onChange:function(t){return e.editContent(t.target.value)}}),a.a.createElement(B,{value:""===e.todoItemDataSource.date?void 0:e.todoItemDataSource.date,onChange:function(t){return e.editDate(t)}}))}));function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le=a.a.memo((function(e){var t=Object(o.useState)(!0),n=Object(d.a)(t,2),r=n[0],c=n[1],i=Object(o.useState)({title:"",content:"",date:"",done:!1}),l=Object(d.a)(i,2),u=l[0],s=l[1],m=Object(o.useContext)(k),f=Object(d.a)(m,1)[0],p="".concat(f.theme.darkMode?"dark-todoItem":"light-todoItem");Object(o.useEffect)((function(){s(e.todoItemDataSource)}),[e.todoItemDataSource]);var g=function(){c(!r),e.editTodoItemText(u)};return a.a.createElement(G.a.Item,{className:p},a.a.createElement("div",{className:"todoList-item"},a.a.createElement(V,{ghost:!0,classnames:"todoList-item-ctrl",styles:{color:e.todoItemDataSource.done?"#1a73e8":"#aaaaaa"},onClick:r?e.markTodoDone:g,icon:"check"}),r?a.a.createElement(ae,{todoDoneState:e.todoDoneState,todoItemDataSource:e.todoItemDataSource,editTodoItemDate:function(t){return e.editTodoItemText(ie({},e.todoItemDataSource,{date:t}))}}):a.a.createElement(re,{todoItemDataSource:u,editTitle:function(e){return s((function(t){return ie({},t,{title:e})}))},editContent:function(e){return s((function(t){return ie({},t,{content:e})}))},editDate:function(e){return s((function(t){return ie({},t,{date:e})}))}})),a.a.createElement("div",{className:"todoList-ctrl"},r&&a.a.createElement(oe.a,{title:f.i18n.translate("item_edit_item_tooltip"),placement:"bottom"},a.a.createElement(V,{ghost:!0,classnames:"todoList-item-ctrl",onClick:g,icon:"edit"})),a.a.createElement(oe.a,{title:f.i18n.translate("item_remove_tooltip"),placement:"bottom"},a.a.createElement(V,{ghost:!0,classnames:"todoList-item-ctrl",onClick:e.removeTodoItem,icon:"delete"}))))})),de=function(){var e=Object(o.useContext)(k),t=Object(d.a)(e,2),n=t[0],r=t[1];Object(o.useEffect)((function(){localStorage.setItem("todo",JSON.stringify(n.todo))}),[n.todo]);var c=Object(o.useCallback)((function(e){return r({type:"ADD_ITEM",addTodoListItem:e})}),[r]),i=Object(o.useCallback)((function(e){return r({type:"DONE_ITEM",doneItem:e})}),[r]),l=Object(o.useCallback)((function(e){return r({type:"REMOVE_ITEM",removeItem:e})}),[r]),u=Object(o.useCallback)((function(e,t){return r({type:"EDIT_ITEM",editIndex:e,editItem:t})}),[r]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,{todoItemValue:function(e){return c(e)}}),a.a.createElement(G.a,{bordered:!0,locale:{emptyText:"\u76ee\u524d\u7121\u4ee3\u8fa6\u4e8b\u9805"},dataSource:n.todo.todoList,renderItem:function(e,t){return a.a.createElement(le,{todoDoneState:e.done,markTodoDone:function(){return i(t)},removeTodoItem:function(){return l(t)},editTodoItemText:function(e){return u(t,e)},todoItemDataSource:e,key:t})}}))},ue=function(){var e=Object(o.useContext)(k),t=Object(d.a)(e,1)[0],n="".concat(t.theme.darkMode?"dark":"light");return Object(o.useEffect)((function(){document.getElementById("body").className=n}),[n]),a.a.createElement("div",{className:"App ".concat(n)},a.a.createElement(P,null),a.a.createElement(de,null))},se=S();c.a.render(a.a.createElement((function(){var e=Object(o.useReducer)(S,se);return a.a.createElement(k.Provider,{value:e},a.a.createElement(ue,null))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todolist/build",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todolist/build","/service-worker.js");i?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()}},[[122,1,2]]]);
//# sourceMappingURL=main.a5cb608e.chunk.js.map