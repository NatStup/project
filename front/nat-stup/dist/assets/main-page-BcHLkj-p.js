import{d as _,r as y,u as m,o as P,c as U,w as s,a as p,b as o,e as l,f as w,g as B,h as n,i as C,_ as M}from"./index-BgmWf8YV.js";const N="/assets/title-1-BHOp_NPA.jpg",b="/assets/title-2-BNa2XyO0.jpg",V="/assets/title-3-ix3P3688.jpg",$=_({__name:"person-form",props:{direction:{},directionModifiers:{},applicantType:{},applicantTypeModifiers:{},regionOfProvision:{},regionOfProvisionModifiers:{},specificTags:{},specificTagsModifiers:{}},emits:["update:direction","update:applicantType","update:regionOfProvision","update:specificTags"],setup(f){const t=y(),u=m(f,"direction"),a=m(f,"applicantType"),i=m(f,"regionOfProvision"),v=m(f,"specificTags");return(c,e)=>{const O=p("a-input"),g=p("a-form-item"),d=p("a-select-option"),T=p("a-select"),x=p("a-textarea"),k=p("a-form");return P(),U(k,{layout:"horizontal",ref_key:"formRef",ref:t,style:{"max-width":"600px"}},{default:s(()=>[o(g,{label:"Направление"},{default:s(()=>[o(O,{value:u.value,"onUpdate:value":e[0]||(e[0]=r=>u.value=r)},null,8,["value"])]),_:1}),o(g,{label:"Тип заявителя"},{default:s(()=>[o(T,{value:a.value,"onUpdate:value":e[1]||(e[1]=r=>a.value=r)},{default:s(()=>[o(d,{value:"demo"},{default:s(()=>e[4]||(e[4]=[l("Индивидуальный предприниматель")])),_:1}),o(d,{value:"demo"},{default:s(()=>e[5]||(e[5]=[l("Физическое лицо")])),_:1}),o(d,{value:"demo"},{default:s(()=>e[6]||(e[6]=[l("Юридическое лицо")])),_:1})]),_:1},8,["value"])]),_:1}),o(g,{label:"Регион предоставления"},{default:s(()=>[o(T,{value:i.value,"onUpdate:value":e[2]||(e[2]=r=>i.value=r)},{default:s(()=>[o(d,{value:"demo"},{default:s(()=>e[7]||(e[7]=[l("Индивидуальный предприниматель")])),_:1}),o(d,{value:"demo"},{default:s(()=>e[8]||(e[8]=[l("Физическое лицо")])),_:1}),o(d,{value:"demo"},{default:s(()=>e[9]||(e[9]=[l("Юридическое лицо")])),_:1})]),_:1},8,["value"])]),_:1}),o(g,{label:"Специфичные теги"},{default:s(()=>[o(x,{value:v.value,"onUpdate:value":e[3]||(e[3]=r=>v.value=r),rows:4},null,8,["value"])]),_:1})]),_:1},512)}}}),j={id:"main-page"},R={id:"users"},z={id:"info-form"},A={class:"search-form"},E=_({__name:"main-page",setup(f){const t=y({direction:"Гладить кота",applicantType:"Индивидуальный предприниматель",regionOfProvision:"ЮФО",specificTags:"шерсть"});function u(a){console.log(a),a===1?t.value={direction:"Гладить кота",applicantType:"Индивидуальный предприниматель",regionOfProvision:"ЮФО",specificTags:"шерсть"}:a===2?t.value={direction:"Чесать гуся",applicantType:"Физическое лицо",regionOfProvision:"Москва",specificTags:"перо"}:t.value={direction:"Смотреть на стадо коров",applicantType:"Юридическое лицо",regionOfProvision:"Ростовская область",specificTags:"молоко"},console.log(t.value)}return w(async()=>{const a=fetch("/settings/");console.log(a)}),(a,i)=>{const v=p("a-input"),c=p("a-form-item");return P(),B("div",j,[n("div",null,[n("div",R,[n("div",{class:"user-info",onClick:i[0]||(i[0]=e=>u(1))},i[7]||(i[7]=[n("img",{alt:"Пользователь 1",class:"logo",src:N,width:"100",height:"100"},null,-1),l(" Юзер-1 ")])),n("div",{class:"user-info",onClick:i[1]||(i[1]=e=>u(2))},i[8]||(i[8]=[n("img",{alt:"Пользователь 2",class:"logo",src:b,width:"100",height:"100"},null,-1),l(" Юзер-2 ")])),n("div",{class:"user-info",onClick:i[2]||(i[2]=e=>u(3))},i[9]||(i[9]=[n("img",{alt:"Пользователь 3",class:"logo",src:V,width:"100",height:"100"},null,-1),l(" Юзер-3 ")]))]),o(C($),{direction:t.value.direction,"onUpdate:direction":i[3]||(i[3]=e=>t.value.direction=e),"applicant-type":t.value.applicantType,"onUpdate:applicantType":i[4]||(i[4]=e=>t.value.applicantType=e),"region-of-provision":t.value.regionOfProvision,"onUpdate:regionOfProvision":i[5]||(i[5]=e=>t.value.regionOfProvision=e),"specific-tags":t.value.specificTags,"onUpdate:specificTags":i[6]||(i[6]=e=>t.value.specificTags=e)},null,8,["direction","applicant-type","region-of-provision","specific-tags"])]),i[12]||(i[12]=n("div",{class:"stick-vertical"},null,-1)),n("div",z,[n("div",A,[i[10]||(i[10]=n("h3",null," Поиск по интересующим тезисам ",-1)),o(c,{label:"Поиск"},{default:s(()=>[o(v)]),_:1})]),i[11]||(i[11]=n("div",{class:"search-form"},[n("h3",null," Приходящая информация формируемая из данных о пользователе ")],-1))])])}}}),I=M(E,[["__scopeId","data-v-a0f267de"]]);export{I as default};
