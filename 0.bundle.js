webpackJsonp([0],{25:function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}Object.defineProperty(b,"__esModule",{value:!0}),c.d(b,"NegociacaoService",function(){return g});var e=c(2),f=c(1);let g=class{obterNegociacoesDaSemana(){return f.c.get("http://localhost:3000/negociacoes/semana").then((a)=>{return a.map((a)=>new e.a(new Date(a.data),a.quantidade,a.valor))},(a)=>{throw new f.a(a)})}obterNegociacoesDaSemanaAnterior(){return f.c.get("http://localhost:3000/negociacoes/anterior").then((a)=>{return a.map((a)=>new e.a(new Date(a.data),a.quantidade,a.valor))},(a)=>{throw new f.a(a)})}obterNegociacoesDaSemanaRetrasada(){return f.c.get("http://localhost:3000/negociacoes/retrasada").then((a)=>{return a.map((a)=>new e.a(new Date(a.data),a.quantidade,a.valor))},(a)=>{throw new f.a(a)})}obterNegociacoesDoPeriodo(){var a=this;return d(function*(){return Promise.all([a.obterNegociacoesDaSemana(),a.obterNegociacoesDaSemanaAnterior(),a.obterNegociacoesDaSemanaRetrasada()]).then(function(a){return a.reduce(function(a,b){return a.concat(b)},[]).sort(function(c,a){return a.data.getTime()-c.data.getTime()})}).catch(function(a){throw new f.a(a)})})()}}}});