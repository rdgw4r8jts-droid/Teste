const CATALOG = [
  {id:"e1", title:"I. A porta que não deveria abrir", blurb:"Beijo ruim. Cebola. Pelinhos.", unlock:0, sec:"agora"},
  {id:"e2", title:"II. A lista", blurb:"ainda carregando", unlock:1, sec:"agora"},
  {id:"e3", title:"III. Passos", blurb:"ainda carregando", unlock:2, sec:"agora"},
  {id:"e4", title:"IV. A boca", blurb:"ainda carregando", unlock:3, sec:"agora"},
  {id:"e5", title:"V. Água que cura", blurb:"ainda carregando", unlock:4, sec:"agora"},
  {id:"e6", title:"VI. Interruptor", blurb:"ainda carregando", unlock:5, sec:"agora"},
  {id:"e7", title:"VII. Andar assim", blurb:"ainda carregando", unlock:6, sec:"agora"},
  {id:"e8", title:"VIII. A ponta", blurb:"ainda carregando", unlock:7, sec:"agora"},
  {id:"e9", title:"IX. A mansão", blurb:"ainda carregando", unlock:8, sec:"agora"},
  {id:"e10", title:"X. Magia", blurb:"ainda carregando", unlock:9, sec:"agora"},
  {id:"e11", title:"XI. Sopa", blurb:"ainda carregando", unlock:10, sec:"agora"}
];
const CHAPTERS = {};
CHAPTERS.e1 = {label:"I — A porta",end:"Ninguém gozou. Rem voltou para o colchão de empregada antes do galo.",beats:[
{s:"night",sp:"",t:"A vela da cozinha morre. Rem seca a tigela duas vezes. Nee-sama já dormiria. Rem não é Nee-sama."},
{s:"night",sp:"Rem",t:"— Se Nee-sama visse Rem parada neste corredor, Nee-sama riria. Ou zangaria. As duas doem."},
{s:"night",sp:"",t:"O quarto de visitas fede a fogo baixo. Rem encosta a testa na madeira."},
{s:"night",sp:"Ma",t:"— Pode entrar. Eu já senti você. Três portas atrás."},
{s:"night",sp:"Rem",t:"— Rem pede desculpa. Rem não veio buscar bandeja."},
{s:"kiss",sp:"Rem",t:"— Rem está com medo. Rem também está alegre."},
{s:"kiss",sp:"Ma",t:"— Senta. Não precisa de avental agora."},
{s:"kiss",sp:"",t:"Escama quente. Pelo. Cheiro azedo de dia inteiro. Careta de verdade."},
{s:"kiss",sp:"Rem",t:"— Forte. Rem deveria sair. Rem não sai."},
{s:"kiss",sp:"",t:"O beijo é ruim. Dente. Cebola da sopa."},
{s:"kiss",sp:"Ma",t:"— Sua boca é chá. E cebola."},
{s:"kiss",sp:"Rem",t:"— Ma-san não precisava falar da cebola."},
{s:"night",sp:"Rem",t:"— Ma-san tem pelinhos. Rem também. Hoje Rem não raspou."},
{s:"night",sp:"",t:"choices",choices:[{label:"Deixar Ma erguer a saia só um pouco",flag:"confianca"},{label:"Pedir para ver Ma primeiro",flag:"calor"}]},
{s:"night",sp:"",t:"{confianca:A saia sobe. Pelos pretos, úmidos. Ma não toca o meio.}{calor:A camisola abre. Pau pequeno no tufo. Branco na dobra. Rem tapa o nariz e não anda para trás.}"},
{s:"night",sp:"Rem",t:"— Não é livro. É vivo. Rem quer voltar amanhã."},
{s:"night",sp:"",t:"Passos no corredor. Ram bufa, não para."},
{s:"night",sp:"Rem",t:"— Nee-sama sempre sabe. Rem vai levar bronca e voltar mesmo assim."},
{s:"night",sp:"Ma",t:"— Dorme aqui um pouco. Só a mão."},
{s:"night",sp:"Rem",t:"— Rem quer um pedaço. Só de Ma-san."}
]};
