import{s as c}from"./say-hello-avYJbGy6.js";const m=n=>{console.info(`Goodbye ${n}`)},e=[];for(let n=0;n<256;++n)e.push((n+256).toString(16).slice(1));function y(n,a=0){return(e[n[a+0]]+e[n[a+1]]+e[n[a+2]]+e[n[a+3]]+"-"+e[n[a+4]]+e[n[a+5]]+"-"+e[n[a+6]]+e[n[a+7]]+"-"+e[n[a+8]]+e[n[a+9]]+"-"+e[n[a+10]]+e[n[a+11]]+e[n[a+12]]+e[n[a+13]]+e[n[a+14]]+e[n[a+15]]).toLowerCase()}let t;const s=new Uint8Array(16);function p(){if(!t){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");t=crypto.getRandomValues.bind(crypto)}return t(s)}const g=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),r={randomUUID:g};function b(n,a,x){var u;if(r.randomUUID&&!n)return r.randomUUID();n=n||{};const o=n.random??((u=n.rng)==null?void 0:u.call(n))??p();if(o.length<16)throw new Error("Random bytes length must be >= 16");return o[6]=o[6]&15|64,o[8]=o[8]&63|128,y(o)}const i="Zayadi",l="zayadibunawi.com",d="Zayadi Bunawi",U={name:i,web:l,instagram:d},h=Object.freeze(Object.defineProperty({__proto__:null,default:U,instagram:d,name:i,web:l},Symbol.toStringTag,{value:"Module"})),w=`Jalan-jalan ke kota Paris,\r
Jangan lupa beli ketan.\r
Kalau malam dia menangis,\r
Kalau pagi dia menguap pelan.\r
\r
Tebak, apakah itu? 😆\r
\r
\r
Jawabannya adalah "Lilin"! 😆\r
\r
Malam menangis → Lilin meleleh saat dinyalakan.\r
Pagi menguap pelan → Lilin padam dan asapnya mengepul.`;c("Zayadi");m("Bento");console.info(b());console.info(h);console.info(i);console.info(l);console.info(d);console.info(w);
