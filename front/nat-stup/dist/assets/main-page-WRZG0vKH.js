import{d as w,r as y,u as T,o as v,c as B,w as s,a,b as t,e as l,f as M,g as m,h as o,i as N,F as k,j as x,t as b,_ as V}from"./index-Cg2Qm5ml.js";const j="/assets/title-1-BHOp_NPA.jpg",$="/assets/title-2-BNa2XyO0.jpg",F="/assets/title-3-ix3P3688.jpg",R=w({__name:"person-form",props:{direction:{},directionModifiers:{},applicantType:{},applicantTypeModifiers:{},regionOfProvision:{},regionOfProvisionModifiers:{},specificTags:{},specificTagsModifiers:{}},emits:["update:direction","update:applicantType","update:regionOfProvision","update:specificTags"],setup(c){const n=y(),u=T(c,"direction"),g=T(c,"applicantType"),p=T(c,"regionOfProvision"),_=T(c,"specificTags");return(d,e)=>{const P=a("a-input"),f=a("a-form-item"),i=a("a-select-option"),O=a("a-select"),U=a("a-textarea"),C=a("a-form");return v(),B(C,{layout:"horizontal",ref_key:"formRef",ref:n,style:{width:"420px"}},{default:s(()=>[t(f,{label:"Направление бизнеса"},{default:s(()=>[t(P,{value:u.value,"onUpdate:value":e[0]||(e[0]=r=>u.value=r)},null,8,["value"])]),_:1}),t(f,{label:"Тип заявителя"},{default:s(()=>[t(O,{value:g.value,"onUpdate:value":e[1]||(e[1]=r=>g.value=r)},{default:s(()=>[t(i,{value:"demo"},{default:s(()=>e[4]||(e[4]=[l("Индивидуальный предприниматель")])),_:1}),t(i,{value:"demo"},{default:s(()=>e[5]||(e[5]=[l("Физическое лицо")])),_:1}),t(i,{value:"demo"},{default:s(()=>e[6]||(e[6]=[l("Юридическое лицо")])),_:1})]),_:1},8,["value"])]),_:1}),t(f,{label:"Регион предоставления"},{default:s(()=>[t(O,{value:p.value,"onUpdate:value":e[2]||(e[2]=r=>p.value=r)},{default:s(()=>[t(i,{value:"demo"},{default:s(()=>e[7]||(e[7]=[l("Индивидуальный предприниматель")])),_:1}),t(i,{value:"demo"},{default:s(()=>e[8]||(e[8]=[l("Физическое лицо")])),_:1}),t(i,{value:"demo"},{default:s(()=>e[9]||(e[9]=[l("Юридическое лицо")])),_:1})]),_:1},8,["value"])]),_:1}),t(f,{label:"Специфичные теги"},{default:s(()=>[t(U,{value:_.value,"onUpdate:value":e[3]||(e[3]=r=>_.value=r),rows:4},null,8,["value"])]),_:1})]),_:1},512)}}}),S={id:"main-page"},z={id:"user-window"},A={id:"users"},D={id:"info-form"},E={class:"search-form"},H={id:"search-value"},I={class:"finding-search"},L={class:"search-info-value"},X={class:"search-form"},q={class:"search-info-value"},G=w({__name:"main-page",setup(c){const n=y({direction:"Гладить кота",applicantType:"Индивидуальный предприниматель",regionOfProvision:"ЮФО",specificTags:"шерсть"}),u=y(""),g=y(["Первый вариант ответа","Второй вариант ответа незнаю что тут нужно","Третий вариант ответа Н+1","Четвертый вариант ответа принятие","Пятый вариант ответа нужно понять как конфигурировать текст"]);function p(d){d===1?n.value={direction:"Гладить кота",applicantType:"Индивидуальный предприниматель",regionOfProvision:"ЮФО",specificTags:"шерсть"}:d===2?n.value={direction:"Чесать гуся",applicantType:"Физическое лицо",regionOfProvision:"Москва",specificTags:"перо"}:n.value={direction:"Смотреть на стадо коров",applicantType:"Юридическое лицо",regionOfProvision:"Ростовская область",specificTags:"молоко"},console.log(n.value)}function _(){console.log(u.value)}return M(async()=>{const d=fetch("/api/settings/");console.log(d)}),(d,e)=>{const P=a("a-input"),f=a("a-button");return v(),m("div",S,[o("div",z,[o("div",A,[o("div",{class:"user-info",onClick:e[0]||(e[0]=i=>p(1))},e[8]||(e[8]=[o("img",{alt:"Пользователь 1",class:"logo",src:j,width:"100",height:"100"},null,-1),l(" Юзер-1 ")])),o("div",{class:"user-info",onClick:e[1]||(e[1]=i=>p(2))},e[9]||(e[9]=[o("img",{alt:"Пользователь 2",class:"logo",src:$,width:"100",height:"100"},null,-1),l(" Юзер-2 ")])),o("div",{class:"user-info",onClick:e[2]||(e[2]=i=>p(3))},e[10]||(e[10]=[o("img",{alt:"Пользователь 3",class:"logo",src:F,width:"100",height:"100"},null,-1),l(" Юзер-3 ")]))]),e[11]||(e[11]=o("h3",null,"Юзер",-1)),t(N(R),{direction:n.value.direction,"onUpdate:direction":e[3]||(e[3]=i=>n.value.direction=i),"applicant-type":n.value.applicantType,"onUpdate:applicantType":e[4]||(e[4]=i=>n.value.applicantType=i),"region-of-provision":n.value.regionOfProvision,"onUpdate:regionOfProvision":e[5]||(e[5]=i=>n.value.regionOfProvision=i),"specific-tags":n.value.specificTags,"onUpdate:specificTags":e[6]||(e[6]=i=>n.value.specificTags=i)},null,8,["direction","applicant-type","region-of-provision","specific-tags"])]),e[16]||(e[16]=o("div",{class:"stick-vertical"},null,-1)),o("div",D,[o("div",E,[e[14]||(e[14]=o("h3",null," Поиск по интересующим тезисам ",-1)),o("div",H,[t(P,{class:"mb-2",value:u.value,"onUpdate:value":e[7]||(e[7]=i=>u.value=i)},null,8,["value"]),t(f,{class:"mb-2",type:"primary",onClick:_},{default:s(()=>e[12]||(e[12]=[l(" Поиск ")])),_:1})]),o("div",I,[e[13]||(e[13]=o("h4",null,"Найденные результаты",-1)),(v(!0),m(k,null,x(g.value,i=>(v(),m("div",L,[o("p",null,b(i),1)]))),256))])]),o("div",X,[e[15]||(e[15]=o("h3",null," Приходящая информация формируемая из данных о пользователе ",-1)),(v(!0),m(k,null,x(g.value,i=>(v(),m("div",q,[o("p",null,b(i),1)]))),256))])])])}}}),K=V(G,[["__scopeId","data-v-b7f7d170"]]);export{K as default};