(function(root){
 'use strict';
 function shuffle(items,random=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 function grade(q,value){if(!Array.isArray(value))return false;if(q.type==='order')return value.length===q.answer.length&&value.every((v,i)=>v===q.answer[i]);const a=[...new Set(value)].sort((a,b)=>a-b),b=[...q.answer].sort((a,b)=>a-b);return a.length===b.length&&a.every((v,i)=>v===b[i]);}
 function answered(q,value){return Array.isArray(value)&& (q.type==='order'?value.length===q.options.length:value.length>0);}
 function choose(bank,settings,random=Math.random){const qs=settings.shuffle?shuffle(bank.questions,random):bank.questions;return qs.map(q=>q.id);}
 const api={shuffle,grade,answered,choose};root.TrainerEngine=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
