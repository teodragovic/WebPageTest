var co2=(()=>{var Ee=Object.create;var _=Object.defineProperty;var Re=Object.getOwnPropertyDescriptor;var ye=Object.getOwnPropertyNames;var me=Object.getPrototypeOf,pe=Object.prototype.hasOwnProperty;var L=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),he=(r,e)=>{for(var t in e)_(r,t,{get:e[t],enumerable:!0})},ee=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ye(e))!pe.call(r,n)&&n!==t&&_(r,n,{get:()=>e[n],enumerable:!(o=Re(e,n))||o.enumerable});return r};var D=(r,e,t)=>(t=r!=null?Ee(me(r)):{},ee(e||!r||!r.__esModule?_(t,"default",{value:r,enumerable:!0}):t,r)),Ne=r=>ee(_({},"__esModule",{value:!0}),r);var ne=L((ze,re)=>{var h=1e3,N=h*60,I=N*60,p=I*24,Ie=p*7,Ae=p*365.25;re.exports=function(r,e){e=e||{};var t=typeof r;if(t==="string"&&r.length>0)return Te(r);if(t==="number"&&isFinite(r))return e.long?Oe(r):be(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function Te(r){if(r=String(r),!(r.length>100)){var e=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);if(!!e){var t=parseFloat(e[1]),o=(e[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return t*Ae;case"weeks":case"week":case"w":return t*Ie;case"days":case"day":case"d":return t*p;case"hours":case"hour":case"hrs":case"hr":case"h":return t*I;case"minutes":case"minute":case"mins":case"min":case"m":return t*N;case"seconds":case"second":case"secs":case"sec":case"s":return t*h;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t;default:return}}}}function be(r){var e=Math.abs(r);return e>=p?Math.round(r/p)+"d":e>=I?Math.round(r/I)+"h":e>=N?Math.round(r/N)+"m":e>=h?Math.round(r/h)+"s":r+"ms"}function Oe(r){var e=Math.abs(r);return e>=p?G(r,e,p,"day"):e>=I?G(r,e,I,"hour"):e>=N?G(r,e,N,"minute"):e>=h?G(r,e,h,"second"):r+" ms"}function G(r,e,t,o){var n=e>=t*1.5;return Math.round(r/t)+" "+o+(n?"s":"")}});var se=L((Je,oe)=>{function Se(r){t.debug=t,t.default=t,t.coerce=C,t.disable=i,t.enable=n,t.enabled=a,t.humanize=ne(),t.destroy=l,Object.keys(r).forEach(s=>{t[s]=r[s]}),t.names=[],t.skips=[],t.formatters={};function e(s){let c=0;for(let d=0;d<s.length;d++)c=(c<<5)-c+s.charCodeAt(d),c|=0;return t.colors[Math.abs(c)%t.colors.length]}t.selectColor=e;function t(s){let c,d=null,F,q;function R(...E){if(!R.enabled)return;let m=R,P=Number(new Date),fe=P-(c||P);m.diff=fe,m.prev=c,m.curr=P,c=P,E[0]=t.coerce(E[0]),typeof E[0]!="string"&&E.unshift("%O");let B=0;E[0]=E[0].replace(/%([a-zA-Z%])/g,(M,Ce)=>{if(M==="%%")return"%";B++;let X=t.formatters[Ce];if(typeof X=="function"){let ge=E[B];M=X.call(m,ge),E.splice(B,1),B--}return M}),t.formatArgs.call(m,E),(m.log||t.log).apply(m,E)}return R.namespace=s,R.useColors=t.useColors(),R.color=t.selectColor(s),R.extend=o,R.destroy=t.destroy,Object.defineProperty(R,"enabled",{enumerable:!0,configurable:!1,get:()=>d!==null?d:(F!==t.namespaces&&(F=t.namespaces,q=t.enabled(s)),q),set:E=>{d=E}}),typeof t.init=="function"&&t.init(R),R}function o(s,c){let d=t(this.namespace+(typeof c>"u"?":":c)+s);return d.log=this.log,d}function n(s){t.save(s),t.namespaces=s,t.names=[],t.skips=[];let c,d=(typeof s=="string"?s:"").split(/[\s,]+/),F=d.length;for(c=0;c<F;c++)!d[c]||(s=d[c].replace(/\*/g,".*?"),s[0]==="-"?t.skips.push(new RegExp("^"+s.slice(1)+"$")):t.names.push(new RegExp("^"+s+"$")))}function i(){let s=[...t.names.map(f),...t.skips.map(f).map(c=>"-"+c)].join(",");return t.enable(""),s}function a(s){if(s[s.length-1]==="*")return!0;let c,d;for(c=0,d=t.skips.length;c<d;c++)if(t.skips[c].test(s))return!1;for(c=0,d=t.names.length;c<d;c++)if(t.names[c].test(s))return!0;return!1}function f(s){return s.toString().substring(2,s.toString().length-2).replace(/\.\*\?$/,"*")}function C(s){return s instanceof Error?s.stack||s.message:s}function l(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return t.enable(t.load()),t}oe.exports=Se});var w=L((g,v)=>{g.formatArgs=Pe;g.save=Be;g.load=_e;g.useColors=Fe;g.storage=Ge();g.destroy=(()=>{let r=!1;return()=>{r||(r=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})();g.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function Fe(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function Pe(r){if(r[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+r[0]+(this.useColors?"%c ":" ")+"+"+v.exports.humanize(this.diff),!this.useColors)return;let e="color: "+this.color;r.splice(1,0,e,"color: inherit");let t=0,o=0;r[0].replace(/%[a-zA-Z%]/g,n=>{n!=="%%"&&(t++,n==="%c"&&(o=t))}),r.splice(o,0,e)}g.log=console.debug||console.log||(()=>{});function Be(r){try{r?g.storage.setItem("debug",r):g.storage.removeItem("debug")}catch{}}function _e(){let r;try{r=g.storage.getItem("debug")}catch{}return!r&&typeof process<"u"&&"env"in process&&(r=process.env.DEBUG),r}function Ge(){try{return localStorage}catch{}}v.exports=se()(g);var{formatters:ve}=v.exports;ve.j=function(r){try{return JSON.stringify(r)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}});var xe={};he(xe,{averageIntensity:()=>y,co2:()=>z,default:()=>He,hosting:()=>J,marginalIntensity:()=>Q});var V=4883333333333333e-25;var U=class{constructor(e){this.options=e,this.KWH_PER_BYTE_FOR_NETWORK=V}perByte(e,t){if(e<1)return 0;if(t){let n=e*72e-12*0,i=e*V*475;return n+i}let o=72e-12+V;return e*o*519}};var te=U;var ce=D(w());var K={GIGABYTE:1e9};var ie=.81,W=.52,Y=.14,k=.15,H=.19,u=442,T=50,b=.75,O=.25,S=.02;var A=r=>parseFloat(r.toFixed(2));function x(r){if(typeof r!="object")throw new Error("Options must be an object");let e={};if(r?.gridIntensity){e.gridIntensity={};let{device:t,dataCenter:o,network:n}=r.gridIntensity;t&&(typeof t=="object"?(y.data[t.country?.toUpperCase()]||(console.warn(`"${t.country}" is not a valid country. Please use a valid 3 digit ISO 3166 country code. 
See https://developers.thegreenwebfoundation.org/co2js/data/ for more information. 
Falling back to global average grid intensity.`),e.gridIntensity.device={value:u}),e.gridIntensity.device={country:t.country,value:parseFloat(y.data[t.country?.toUpperCase()])}):typeof t=="number"?e.gridIntensity.device={value:t}:(e.gridIntensity.device={value:u},console.warn(`The device grid intensity must be a number or an object. You passed in a ${typeof t}. 
Falling back to global average grid intensity.`))),o&&(typeof o=="object"?(y.data[o.country?.toUpperCase()]||(console.warn(`"${o.country}" is not a valid country. Please use a valid 3 digit ISO 3166 country code. 
See https://developers.thegreenwebfoundation.org/co2js/data/ for more information.  
Falling back to global average grid intensity.`),e.gridIntensity.dataCenter={value:u}),e.gridIntensity.dataCenter={country:o.country,value:parseFloat(y.data[o.country?.toUpperCase()])}):typeof o=="number"?e.gridIntensity.dataCenter={value:o}:(e.gridIntensity.dataCenter={value:u},console.warn(`The data center grid intensity must be a number or an object. You passed in a ${typeof o}. 
Falling back to global average grid intensity.`))),n&&(typeof n=="object"?(y.data[n.country?.toUpperCase()]||(console.warn(`"${n.country}" is not a valid country. Please use a valid 3 digit ISO 3166 country code. 
See https://developers.thegreenwebfoundation.org/co2js/data/ for more information.  Falling back to global average grid intensity. 
Falling back to global average grid intensity.`),e.gridIntensity.network={value:u}),e.gridIntensity.network={country:n.country,value:parseFloat(y.data[n.country?.toUpperCase()])}):typeof n=="number"?e.gridIntensity.network={value:n}:(e.gridIntensity.network={value:u},console.warn(`The network grid intensity must be a number or an object. You passed in a ${typeof n}. 
Falling back to global average grid intensity.`)))}return r?.dataReloadRatio&&(typeof r.dataReloadRatio=="number"?r.dataReloadRatio>=0&&r.dataReloadRatio<=1?e.dataReloadRatio=r.dataReloadRatio:(e.dataReloadRatio=S,console.warn(`The dataReloadRatio option must be a number between 0 and 1. You passed in ${r.dataReloadRatio}. 
Falling back to default value.`)):(e.dataReloadRatio=S,console.warn(`The dataReloadRatio option must be a number. You passed in a ${typeof r.dataReloadRatio}. 
Falling back to default value.`))),r?.firstVisitPercentage&&(typeof r.firstVisitPercentage=="number"?r.firstVisitPercentage>=0&&r.firstVisitPercentage<=1?e.firstVisitPercentage=r.firstVisitPercentage:(e.firstVisitPercentage=b,console.warn(`The firstVisitPercentage option must be a number between 0 and 1. You passed in ${r.firstVisitPercentage}. 
Falling back to default value.`)):(e.firstVisitPercentage=b,console.warn(`The firstVisitPercentage option must be a number. You passed in a ${typeof r.firstVisitPercentage}. 
Falling back to default value.`))),r?.returnVisitPercentage&&(typeof r.returnVisitPercentage=="number"?r.returnVisitPercentage>=0&&r.returnVisitPercentage<=1?e.returnVisitPercentage=r.returnVisitPercentage:(e.returnVisitPercentage=O,console.warn(`The returnVisitPercentage option must be a number between 0 and 1. You passed in ${r.returnVisitPercentage}. 
Falling back to default value.`)):(e.returnVisitPercentage=O,console.warn(`The returnVisitPercentage option must be a number. You passed in a ${typeof r.returnVisitPercentage}. 
Falling back to default value.`))),e}var ae=(0,ce.default)("tgwf:sustainable-web-design"),j=class{constructor(e){this.options=e}energyPerByteByComponent(e){let o=e/K.GIGABYTE*ie;return{consumerDeviceEnergy:o*W,networkEnergy:o*Y,productionEnergy:o*H,dataCenterEnergy:o*k}}co2byComponent(e,t=u,o={}){let n=u,i=u,a=u,f=u;if(o?.gridIntensity){let{device:l,network:s,dataCenter:c}=o.gridIntensity;l?.value&&(n=l.value),s?.value&&(i=s.value),c?.value&&(a=c.value)}t===!0&&(a=T);let C={};for(let[l,s]of Object.entries(e))l.startsWith("dataCenterEnergy")?C[l.replace("Energy","CO2")]=s*a:l.startsWith("consumerDeviceEnergy")?C[l.replace("Energy","CO2")]=s*n:l.startsWith("networkEnergy")?C[l.replace("Energy","CO2")]=s*i:C[l.replace("Energy","CO2")]=s*f;return C}perByte(e,t=!1,o=!1,n={}){let i=this.energyPerByteByComponent(e,n);if(typeof t!="boolean")throw new Error(`perByte expects a boolean for the carbon intensity value. Received: ${t}`);let a=this.co2byComponent(i,t,n),C=Object.values(a).reduce((l,s)=>l+s);return o?{...a,total:C}:C}perVisit(e,t=!1,o=!1,n={}){let i=this.energyPerVisitByComponent(e,n);if(typeof t!="boolean")throw new Error(`perVisit expects a boolean for the carbon intensity value. Received: ${t}`);let a=this.co2byComponent(i,t,n),C=Object.values(a).reduce((l,s)=>l+s);return o?{...a,total:C}:C}energyPerByte(e){let t=this.energyPerByteByComponent(e);return Object.values(t).reduce((n,i)=>n+i)}energyPerVisitByComponent(e,t={},o=b,n=O,i=S){t.dataReloadRatio&&(i=t.dataReloadRatio),t.firstVisitPercentage&&(o=t.firstVisitPercentage),t.returnVisitPercentage&&(n=t.returnVisitPercentage);let a=this.energyPerByteByComponent(e),f={};ae({energyBycomponent:a});let C=Object.values(a);for(let[l,s]of Object.entries(a))f[`${l} - first`]=s*o,f[`${l} - subsequent`]=s*n*i;return ae({cacheAdjustedSegmentEnergy:f}),f}energyPerVisit(e){let t=0,o=0,n=Object.entries(this.energyPerVisitByComponent(e));for(let[i,a]of n)i.indexOf("first")>0&&(t+=a);for(let[i,a]of n)i.indexOf("subsequent")>0&&(o+=a);return t+o}emissionsPerVisitInGrams(e,t=u){return A(e*t)}annualEnergyInKwh(e,t=1e3){return e*t*12}annualEmissionsInGrams(e,t=1e3){return e*t*12}annualSegmentEnergy(e){return{consumerDeviceEnergy:A(e*W),networkEnergy:A(e*Y),dataCenterEnergy:A(e*k),productionEnergy:A(e*H)}}};var Z=j;var $=class{constructor(e){if(this.model=new Z,e?.model==="1byte")this.model=new te;else if(e?.model==="swd")this.model=new Z;else if(e?.model)throw new Error(`"${e.model}" is not a valid model. Please use "1byte" for the OneByte model, and "swd" for the Sustainable Web Design model.
See https://developers.thegreenwebfoundation.org/co2js/models/ to learn more about the models available in CO2.js.`);e?.results==="segment"?this.model.results={segment:!0}:this.model.results={segment:!1}}perByte(e,t=!1){return this.model.perByte(e,t,this.model.results.segment)}perVisit(e,t=!1){if(this.model?.perVisit)return this.model.perVisit(e,t,this.model.results.segment);throw new Error(`The perVisit() method is not supported in the model you are using. Try using perByte() instead.
See https://developers.thegreenwebfoundation.org/co2js/methods/ to learn more about the methods available in CO2.js.`)}perByteTrace(e,t=!1,o={}){let n={};return o&&(n=x(o)),{co2:this.model.perByte(e,t,this.model.results.segment,n),green:t,variables:{description:"Below are the variables used to calculate this CO2 estimate.",bytes:e,gridIntensity:{description:"The grid intensity (grams per kilowatt-hour) used to calculate this CO2 estimate.",network:n?.gridIntensity?.network?.value||u,dataCenter:t?T:n?.gridIntensity?.dataCenter?.value||u,production:u,device:n?.gridIntensity?.device?.value||u}}}}perVisitTrace(e,t=!1,o={}){if(this.model?.perVisit){let n={};return o&&(n=x(o)),{co2:this.model.perVisit(e,t,this.model.results.segment,n),green:t,variables:{description:"Below are the variables used to calculate this CO2 estimate.",bytes:e,gridIntensity:{description:"The grid intensity (grams per kilowatt-hour) used to calculate this CO2 estimate.",network:n?.gridIntensity?.network?.value||u,dataCenter:t?T:n?.gridIntensity?.dataCenter?.value||u,production:u,device:n?.gridIntensity?.device?.value||u},dataReloadRatio:n?.dataReloadRatio||.02,firstVisitPercentage:n?.firstVisitPercentage||.75,returnVisitPercentage:n?.returnVisitPercentage||.25}}}else throw new Error(`The perVisitDetailed() method is not supported in the model you are using. Try using perByte() instead.
See https://developers.thegreenwebfoundation.org/co2js/methods/ to learn more about the methods available in CO2.js.`)}perDomain(e,t){let o=[];for(let n of Object.keys(e.domains)){let i;t&&t.indexOf(n)>-1?i=this.perByte(e.domains[n].transferSize,!0):i=this.perByte(e.domains[n].transferSize),o.push({domain:n,co2:i,transferSize:e.domains[n].transferSize})}return o.sort((n,i)=>i.co2-n.co2),o}perPage(e,t){let o=this.perDomain(e,t),n=0;for(let i of o)n+=i.co2;return n}perContentType(e,t){let o={};for(let i of e.assets){let a=new URL(i.url).domain,f=i.transferSize,C=this.perByte(f,t&&t.indexOf(a)>-1),l=i.type;o[l]||(o[l]={co2:0,transferSize:0}),o[l].co2+=C,o[l].transferSize+=f}let n=[];for(let i of Object.keys(o))n.push({type:i,co2:o[i].co2,transferSize:o[i].transferSize});return n.sort((i,a)=>a.co2-i.co2),n}dirtiestResources(e,t){let o=[];for(let n of e.assets){let i=new URL(n.url).domain,a=n.transferSize,f=this.perByte(a,t&&t.indexOf(i)>-1);o.push({url:n.url,co2:f,transferSize:a})}return o.sort((n,i)=>i.co2-n.co2),o.slice(0,o.length>10?10:o.length)}perParty(e,t){let o=0,n=0,i=e.firstPartyRegEx;for(let a of Object.keys(e.domains))a.match(i)?o+=this.perByte(e.domains[a].transferSize,t&&t.indexOf(a)>-1):n+=this.perByte(e.domains[a].transferSize,t&&t.indexOf(a)>-1);return{firstParty:o,thirdParty:n}}};var z=$;var de=D(w());var le=D(w()),dt=(0,le.default)("tgwf:hostingAPI");function we(r){return typeof r=="string"?Me(r):Le(r)}async function Me(r){return(await(await fetch(`https://api.thegreenwebfoundation.org/greencheck/${r}`)).json()).green}async function Le(r){try{let e="https://api.thegreenwebfoundation.org/v2/greencheckmulti",t=JSON.stringify(r),n=await(await fetch(`${e}/${t}`)).json();return De(n)}catch{return[]}}function De(r){return Object.entries(r).filter(([o,n])=>n.green).map(([o,n])=>n.url)}var ue={check:we};var Ct=(0,de.default)("tgwf:hosting");function Ve(r,e){return ue.check(r)}var J={check:Ve};var Ue={AFG:120.482,AFRICA:483.78,ALB:23.438,DZA:488.393,ASM:687.5,AGO:168.594,ATG:657.143,ARG:337.533,ARM:222.678,ABW:591.398,ASIA:531.78,AUS:503.179,AUT:157.52,AZE:532.902,BHS:698.113,BHR:489.924,BGD:581.485,BRB:644.86,BLR:415.774,BEL:165.363,BLZ:484.375,BEN:666.667,BTN:24.444,BOL:319.432,BIH:516.626,BWA:794.521,BRA:102.411,BRN:658.849,BGR:399.565,BFA:611.429,BDI:250,CPV:600,KHM:399.31,CMR:278.261,CAN:125.55,CYM:684.932,CAF:0,TCD:677.419,CHL:333.173,CHN:530.214,COL:169.309,COM:714.286,COG:398.01,COD:25.362,COK:400,CRI:37.213,CIV:390.71,HRV:246.459,CUB:574.684,CYP:589.354,CZE:415.345,DNK:180.709,DJI:666.667,DMA:529.412,DOM:540.387,ECU:169.384,EGY:485.367,SLV:194.226,GNQ:492.958,ERI:688.889,EST:464.029,SWZ:189.189,ETH:25.187,EU:277.35,EUROPE:298.01,FLK:500,FRO:428.571,FJI:292.035,FIN:130.977,FRA:84.817,GUF:254.717,PYF:471.429,G20:440.39,G7:341.23,GAB:397.38,GMB:700,GEO:134.831,DEU:385.467,GHA:362.942,GRC:343.822,GRL:133.333,GRD:714.286,GLP:611.765,GUM:670.33,GTM:313.019,GIN:208.633,GNB:750,GUY:634.146,HTI:606.061,HND:374.269,HKG:684.823,HUN:222.973,ISL:28.557,IND:632.406,IDN:623.281,IRN:493.595,IRQ:500.206,IRL:345.347,ISR:550.493,ITA:371.692,JAM:524.138,JPN:483.039,JOR:399.909,KAZ:635.574,KEN:99.919,KIR:666.667,XKX:766.605,KWT:489.61,KGZ:104.354,LAO:242.182,"LATIN AMERICA AND CARIBBEAN":238.27,LVA:181.818,LBN:545.941,LSO:20,LBR:304.348,LBY:496.565,LTU:194.245,LUX:168.142,MAC:491.525,MDG:483.254,MWI:133.803,MYS:543.737,MDV:651.515,MLI:466.077,MLT:442.478,MTQ:698.63,MRT:526.596,MUS:611.111,MEX:421.402,"MIDDLE EAST":514.89,MDA:685.874,MNG:749.656,MNE:399.381,MSR:1e3,MAR:610.412,MOZ:125.063,MMR:348.837,NAM:63.694,NRU:750,NPL:24.51,NLD:354.988,NCL:610.119,NZL:98.639,NIC:354.212,NER:622.222,NGA:368.421,"NORTH AMERICA":336.4,PRK:157.785,MKD:529.328,NOR:28.818,OCEANIA:446.65,OECD:338.75,OMN:488.272,PAK:343.366,PSE:465.116,PAN:193.923,PNG:526.749,PRY:25.487,PER:254.521,POL:634.579,PRT:234.029,PRI:681.469,QAT:489.867,REU:519.031,ROU:264.121,RUS:367.189,RWA:294.118,KNA:681.818,LCA:685.714,SPM:800,VCT:500,WSM:470.588,STP:600,SAU:571.336,SEN:502.674,SRB:569.375,SYC:615.385,SLE:47.619,SGP:489.234,SVK:140.666,SVN:237.378,SLB:727.273,SOM:634.146,ZAF:709.002,KOR:435.689,SSD:684.211,ESP:217.373,LKA:479.829,SDN:242.917,SUR:356.436,SWE:45.084,CHE:45.622,SYR:540.573,TWN:561.431,TJK:84.136,TZA:361.077,THA:503.07,PHL:582.365,TGO:507.937,TON:625,TTO:520.046,TUN:469.428,TUR:413.628,TKM:544.393,TCA:703.704,UGA:52.273,UKR:206.539,ARE:461.845,GBR:257.379,USA:367.768,URY:116.168,UZB:506.164,VUT:571.429,VEN:189.446,VNM:376.828,VGB:714.286,VIR:685.714,WORLD:435.99,YEM:528.409,ZMB:84.698,ZWE:393.035},Ke="average";var y={data:Ue,type:Ke};var We={AFG:"414",ALB:"0",DZA:"528",ASM:"753",AND:"188",AGO:"1476",AIA:"753",ATG:"753",ARG:"478",ARM:"390",ABW:"753",AUS:"808",AUT:"242",AZE:"534","AZORES (PORTUGAL)":"753",BHS:"753",BHR:"726",BGD:"528",BRB:"749",BLR:"400",BEL:"252",BLZ:"403",BEN:"745",BMU:"753",BTN:"0",BOL:"604",BES:"753",BIH:"1197",BWA:"1486",BRA:"284",VGB:"753",BRN:"681",BGR:"911",BFA:"753",BDI:"414",KHM:"1046",CMR:"659",CAN:"372",CYM:"753",CPV:"753",CAF:"188",TCD:"753","CHANNEL ISLANDS (U.K)":"753",CHL:"657",CHN:"899",COL:"410",COM:"753",COD:"0",COG:"659",COK:"753",CRI:"108",CIV:"466",HRV:"294",CUB:"559",CUW:"876",CYP:"751",CZE:"902",DNK:"362",DJI:"753",DMA:"753",DOM:"601",ECU:"560",EGY:"554",SLV:"547",GNQ:"632",ERI:"915",EST:"1057",SWZ:"0",ETH:"0",FLK:"753",FRO:"753",FJI:"640",FIN:"267",FRA:"158",GUF:"423",PYF:"753",GAB:"946",GMB:"753",GEO:"289",DEU:"650",GHA:"495",GIB:"779",GRC:"507",GRL:"264",GRD:"753",GLP:"753",GUM:"753",GTM:"798",GIN:"753",GNB:"753",GUY:"847",HTI:"1048",HND:"662",HUN:"296",ISL:"0",IND:"951",IDN:"783",IRN:"592",IRQ:"1080",IRL:"380",IMN:"436",ISR:"394",ITA:"414",JAM:"711",JPN:"471",JOR:"529",KAZ:"797",KEN:"574",KIR:"753",PRK:"754",KOR:"555",XKX:"1145",KWT:"675",KGZ:"217",LAO:"1069",LVA:"240",LBN:"794",LSO:"0",LBR:"677",LBY:"668",LIE:"151",LTU:"211",LUX:"220",MDG:"876","MADEIRA (PORTUGAL)":"663",MWI:"489",MYS:"551",MDV:"753",MLI:"1076",MLT:"520",MHL:"753",MTQ:"753",MRT:"753",MUS:"700",MYT:"753",MEX:"531",FSM:"753",MDA:"541",MCO:"158",MNG:"1366",MNE:"899",MSR:"753",MAR:"729",MOZ:"234",MMR:"719",NAM:"355",NRU:"753",NPL:"0",NLD:"326",NCL:"779",NZL:"246",NIC:"675",NER:"772",NGA:"526",NIU:"753",MKD:"851",MNP:"753",NOR:"47",OMN:"479",PAK:"592",PLW:"753",PSE:"719",PAN:"477",PNG:"597",PRY:"0",PER:"473",PHL:"672",POL:"828",PRT:"389",PRI:"596",QAT:"503",REU:"772",ROU:"489",RUS:"476",RWA:"712",SHN:"753",KNA:"753",LCA:"753",MAF:"753",SPM:"753",VCT:"753",WSM:"753",SMR:"414",STP:"753",SAU:"592",SEN:"870",SRB:"1086",SYC:"753",SLE:"489",SGP:"379",SXM:"753",SVK:"332",SVN:"620",SLB:"753",SOM:"753",ZAF:"1070",SSD:"890",ESP:"402",LKA:"731",SDN:"736",SUR:"1029",SWE:"68",CHE:"48",SYR:"713",TWN:"484",TJK:"255",TZA:"531",THA:"450",TLS:"753",TGO:"859",TON:"753",TTO:"559",TUN:"468",TUR:"376",TKM:"927",TCA:"753",TUV:"753",UGA:"279",UKR:"768",ARE:"556",GBR:"380",USA:"416",URY:"174",UZB:"612",VUT:"753",VEN:"711",VNM:"560",VIR:"650",YEM:"807",ZMB:"416",ZWE:"1575","MEMO:  EU 27":"409"},Ye="marginal",ke="2021";var Q={data:We,type:Ye,year:ke};var He={co2:z,hosting:J,averageIntensity:y,marginalIntensity:Q};return Ne(xe);})();
//# sourceMappingURL=index.js.map

let hasCSPblock = false;
if( $WPT_REQUESTS ){
    let req1csp = $WPT_REQUESTS[0].response_headers['content-security-policy'];
    hasCSPblock = req1csp && req1csp.indexOf("connect-src 'self'") > -1;
}

// note: this section is borrowed from green-hosting js. 
let collectHostStatuses = async function(){
    if( !$WPT_REQUESTS ){
        return Promise.all([{error: "Carbon calculation requires Chromium."}]);
    }
    if( hasCSPblock ){
        return Promise.all([{error: "Unable to check green hosting."}]);
    }
    const hosts = [location.host];
    $WPT_REQUESTS.forEach(req => {
        var url = new URL(req.url);
        var host = url.host;
        if( hosts.indexOf(host) === -1 && host !== "" ){
            hosts.push(host);
        }
    });

    // This uses hosting.check to go out to the Green Web Foundation API with one bulk lookup for hosts
    let dependenciesCheck = co2.hosting.check(hosts).then((result) => {

        let greenResults = result.map( host => {
            return { url: host, green: true };
        });

        let grayResults = hosts
            .filter(host => { 
                return result.indexOf(host) == -1; 
            }).map( host => {
                return { url: host, green: false };
            });

        return greenResults.concat(grayResults);

    });

    return dependenciesCheck; 
}




let calculate_carbon = async function(){
    
    let totalCarbon = 0;
    const emissionsSWD = new co2.co2();
    let greenstatuses = await collectHostStatuses();

    $WPT_REQUESTS.forEach(req => {
        if( req.transfer_size ){
            // try to determine request green status
            let green = false;
            if( !hasCSPblock ){
                if( req.url){
                    let url = new URL(req.url);
                    let host = url.host;
                    if( greenstatuses[0] !== undefined ){
                        green = greenstatuses.find(element => element.url === host && element.green) ? true : false;
                    }
                }
            }
            totalCarbon += emissionsSWD.perByte(req.transfer_size, green );
        }
    });

    
    return Promise.resolve({ 
        "sustainable-web-design": totalCarbon.toFixed(2), 
        "scale": "per new visit",
        "green-hosting": greenstatuses
    }); // We use toFixed(2) here to set the result to 2 decimal places.
}

// without wpt requests, this isn't able to calculate. no metric unless chromium browsers
if( $WPT_REQUESTS ){
return calculate_carbon();
}