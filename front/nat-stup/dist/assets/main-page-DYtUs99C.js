import{d as M,m as S,r as T,u as w,o as r,c as x,w as u,a as g,b as l,e as f,f as k,g as m,t as P,F as O,h as n,i as $,j as b,_ as C}from"./index-BTEZelN0.js";const V="/assets/title-1-BHOp_NPA.jpg",B="/assets/title-2-BNa2XyO0.jpg",N="/assets/title-3-ix3P3688.jpg",j=M({__name:"person-form",props:S({settingPersonOption:{}},{direction:{},directionModifiers:{},applicantType:{},applicantTypeModifiers:{},regionOfProvision:{},regionOfProvisionModifiers:{},specificTags:{},specificTagsModifiers:{}}),emits:["update:direction","update:applicantType","update:regionOfProvision","update:specificTags"],setup(d){const _=T(),o=w(d,"direction"),c=w(d,"applicantType"),v=w(d,"regionOfProvision"),y=w(d,"specificTags");return(a,i)=>{const e=g("a-select-option"),p=g("a-select"),s=g("a-form-item"),U=g("a-textarea"),h=g("a-form");return r(),x(h,{layout:"horizontal",ref_key:"formRef",ref:_,style:{width:"420px"}},{default:u(()=>[l(s,{label:"Направление бизнеса"},{default:u(()=>[l(p,{value:o.value,"onUpdate:value":i[0]||(i[0]=t=>o.value=t)},{default:u(()=>[(r(!0),f(O,null,k(a.settingPersonOption.directions,t=>(r(),x(e,{key:t.id,value:t.name},{default:u(()=>[m(P(t.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),l(s,{label:"Тип заявителя"},{default:u(()=>[l(p,{value:c.value,"onUpdate:value":i[1]||(i[1]=t=>c.value=t)},{default:u(()=>[(r(!0),f(O,null,k(a.settingPersonOption.applicant_types,t=>(r(),x(e,{key:t.id,value:t.name},{default:u(()=>[m(P(t.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),l(s,{label:"Регион предоставления"},{default:u(()=>[l(p,{value:v.value,"onUpdate:value":i[2]||(i[2]=t=>v.value=t)},{default:u(()=>[(r(!0),f(O,null,k(a.settingPersonOption.venues,t=>(r(),x(e,{key:t.id,value:t.name},{default:u(()=>[m(P(t.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),l(s,{label:"Специфичные теги"},{default:u(()=>[l(U,{value:y.value,"onUpdate:value":i[3]||(i[3]=t=>y.value=t),rows:4},null,8,["value"])]),_:1})]),_:1},512)}}}),F={class:"search-form"},A={id:"search-value"},D={class:"finding-search"},I=M({__name:"info-search-form",props:{findSearchValue:{}},emits:["search"],setup(d,{emit:_}){const o=_,c=T("");function v(){return o("search",c.value)}return(y,a)=>{const i=g("a-input"),e=g("a-button");return r(),f("div",F,[a[3]||(a[3]=n("h3",null," Поиск по интересующим тезисам ",-1)),n("div",A,[l(i,{class:"mb-2",value:c.value,"onUpdate:value":a[0]||(a[0]=p=>c.value=p)},null,8,["value"]),l(e,{class:"mb-2",type:"primary",onClick:v},{default:u(()=>a[1]||(a[1]=[m(" Поиск ")])),_:1})]),n("div",D,[a[2]||(a[2]=n("h4",null,"Найденные результаты",-1)),(r(!0),f(O,null,k(y.findSearchValue,p=>(r(),f("div",{key:p,class:"search-info-value"},[n("p",null,P(p),1)]))),128))])])}}});function R(d){return d===1?{direction:"СТРОИТЕЛЬСТВО",applicantType:"Индивидуальный предприниматель",regionOfProvision:"Краснодарский край",specificTags:"БЕТОН"}:d===2?{direction:"ОБРАЗОВАНИЕ",applicantType:"Физическое лицо",regionOfProvision:"Москва",specificTags:"УСЛУГИ"}:{direction:"ОБЕСПЕЧЕНИЕ ЭЛЕКТРИЧЕСКОЙ ЭНЕРГИЕЙ, ГАЗОМ И ПАРОМ; КОНДИЦИОНИРОВАНИЕ ВОЗДУХА",applicantType:"Юридическое лицо",regionOfProvision:"Курганская область",specificTags:"ОБОРУДОВАНИЕ"}}const z=[{title:"Name",dataIndex:"name",key:"name"},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"}],E={id:"main-page"},H={id:"user-window"},J={id:"users"},L={id:"info-form"},X={class:"search-form"},q=M({__name:"main-page",setup(d){const _=T({applicant_types:[],directions:[],venues:[]}),o=T({direction:"СТРОИТЕЛЬСТВО",applicantType:"Индивидуальный предприниматель",regionOfProvision:"Краснодарский край",specificTags:"БЕТОН"}),c=T(["Первый вариант ответа","Второй вариант ответа незнаю что тут нужно","Третий вариант ответа Н+1","Четвертый вариант ответа принятие","Пятый вариант ответа нужно понять как конфигурировать текст"]);function v(i){o.value=R(i)}function y(i){console.log(i)}$(async()=>{const e=await(await fetch("http://81.94.156.218/api/get_filters")).json();_.value=e,console.log(e)});const a=[{key:"1",name:"Mike",age:32,address:"10 Downing Street"},{key:"2",name:"John",age:42,address:"10 Downing Street"}];return(i,e)=>{const p=g("a-table");return r(),f("div",E,[n("div",H,[n("div",J,[n("div",{class:"user-info",onClick:e[0]||(e[0]=s=>v(1))},e[7]||(e[7]=[n("img",{alt:"Пользователь 1",class:"logo",src:V,width:"100",height:"100"},null,-1),m(" Юзер-1 ")])),n("div",{class:"user-info",onClick:e[1]||(e[1]=s=>v(2))},e[8]||(e[8]=[n("img",{alt:"Пользователь 2",class:"logo",src:B,width:"100",height:"100"},null,-1),m(" Юзер-2 ")])),n("div",{class:"user-info",onClick:e[2]||(e[2]=s=>v(3))},e[9]||(e[9]=[n("img",{alt:"Пользователь 3",class:"logo",src:N,width:"100",height:"100"},null,-1),m(" Юзер-3 ")]))]),e[10]||(e[10]=n("h3",null,"Юзер",-1)),l(b(j),{direction:o.value.direction,"onUpdate:direction":e[3]||(e[3]=s=>o.value.direction=s),"applicant-type":o.value.applicantType,"onUpdate:applicantType":e[4]||(e[4]=s=>o.value.applicantType=s),"region-of-provision":o.value.regionOfProvision,"onUpdate:regionOfProvision":e[5]||(e[5]=s=>o.value.regionOfProvision=s),"specific-tags":o.value.specificTags,"onUpdate:specificTags":e[6]||(e[6]=s=>o.value.specificTags=s),"setting-person-option":_.value},null,8,["direction","applicant-type","region-of-provision","specific-tags","setting-person-option"])]),e[12]||(e[12]=n("div",{class:"stick-vertical"},null,-1)),n("div",L,[l(b(I),{"find-search-value":c.value,onSearch:y},null,8,["find-search-value"]),n("div",X,[e[11]||(e[11]=n("h3",null," Приходящая информация формируемая из данных о пользователе ",-1)),(r(!0),f(O,null,k(c.value,s=>(r(),f("div",{key:s,class:"search-info-value"},[n("p",null,P(s),1)]))),128)),l(p,{dataSource:a,columns:b(z),scroll:{x:800,y:400}},null,8,["columns"])])])])}}}),K=C(q,[["__scopeId","data-v-4ac1968f"]]);export{K as default};
