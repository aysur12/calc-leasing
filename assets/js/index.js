(()=>{var V=(e,c,o)=>{let n=document.querySelector(".js-counter-block__value_for_monthly-payment"),l=e.value.replace(/\s/g,""),s=parseInt(l,10),m=c.value.replace(/\s/g,""),d=parseInt(m,10),u=o.value.replace(/\s/g,""),v=parseInt(u,10),P=(s-d)*(.05*(1+.05)**v)/((1+.05)**v-1),B=Math.ceil(P.toFixed(2));n.textContent=B.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},i=V;var A=(e,c)=>{let o=document.querySelector(".js-counter-block__value_for_contract-amount"),n=document.querySelector(".js-counter-block__value_for_monthly-payment"),l=parseInt(n.textContent,10),s=e.value.replace(/\s/g,""),m=parseInt(s,10),d=c.value.replace(/\s/g,""),u=parseInt(d,10),v=m+u*l,P=Math.ceil(v.toFixed(2));o.textContent=P.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},p=A;var D=(e,c,o,n)=>{let l=e.value.replace(/\s/g,""),s=parseInt(l,10);s<o?e.value=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "):s>n?e.value=n.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "):e.value=l.replace(/\B(?=(\d{3})+(?!\d))/g," "),c.value=l},I=D;var C=(e,c)=>{let{value:o}=e;c.value=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},f=C;var M=(e,c,o)=>{let n=e.value.replace(/\s/g,""),l=parseInt(n,10),s=c.value.replace(/\s/g,""),d=parseInt(s,10)/l*100,u=Math.ceil(d.toFixed(2));u>=10&&u<=60?o.textContent=`${u}%`:u<10?o.textContent="10%":u>60&&(o.textContent="60%")},h=M;var q=(e,c,o)=>{let n=e.value.replace(/\s/g,""),l=parseInt(n,10),s=c.value.replace(/\s/g,""),m=parseInt(s,10),d=Math.round(m*.1),u=Math.round(m*.6);l<d?(e.value=d.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),o.value=d):l>u?(e.value=u.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),o.value=u):(e.value=n.replace(/\B(?=(\d{3})+(?!\d))/g," "),o.value=n)},w=q;var L=(e,c)=>{let o=c.value.replace(/\s/g,""),n=parseInt(o,10),l=Math.round(n*.1),s=Math.round(n*.6);e.min=l.toString(),e.max=s.toString()},S=L;var N=e=>{e.style.width=`${e.value.length}ch`},y=N;var a=document.getElementById("vehicle-price"),_=document.getElementById("vehicle-price-range"),t=document.getElementById("down-payment"),g=document.getElementById("down-payment-range"),r=document.getElementById("leasing-term"),x=document.getElementById("leasing-term-range"),E=document.querySelector(".inputs__percent"),b=document.querySelector(".js-inputs__label_for_credit-amount");window.addEventListener("resize",()=>{window.innerWidth<=767?b.textContent="\u0416\u0435\u043B\u0430\u0435\u043C\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u043A\u0440\u0435\u0434\u0438\u0442\u0430":b.textContent="\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"});w(t,a,g);y(t);S(g,a);a.addEventListener("change",()=>{I(a,_,15e5,1e7),i(a,t,r),p(t,r)});_.addEventListener("input",()=>{f(_,a),i(a,t,r),p(t,r)});t.addEventListener("change",()=>{w(t,a,g),y(t),h(a,t,E),i(a,t,r),p(t,r)});t.addEventListener("input",()=>{y(t),h(a,t,E)});g.addEventListener("input",()=>{S(g,a),f(g,t),y(t),h(a,t,E),i(a,t,r),p(t,r)});r.addEventListener("change",()=>{I(r,x,6,120),i(a,t,r),p(t,r)});x.addEventListener("input",()=>{f(x,r),i(a,t,r),p(t,r)});var j=document.querySelector(".page__form"),k=document.querySelectorAll(".inputs__input"),T=document.querySelectorAll(".inputs__range-input"),W=document.querySelectorAll(".inputs__container"),F=document.getElementById("vehicle-price"),R=document.getElementById("down-payment"),$=document.getElementById("leasing-term"),z=document.querySelector(".button");j.addEventListener("submit",e=>{e.preventDefault(),k.forEach(n=>n.disabled=!0),T.forEach(n=>n.disabled=!0),z.disabled=!0,W.forEach(n=>{n.style.opacity="0.4"});let c={vehiclePrice:F.value.replace(/\s/g,""),downPayment:R.value.replace(/\s/g,""),leasingTerm:$.value.replace(/\s/g,"")},o=JSON.stringify(c);alert(o)});})();
