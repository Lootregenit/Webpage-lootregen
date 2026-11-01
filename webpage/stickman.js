/* <stick-man pose="wave|lab|cert|desk|broken">bubble text</stick-man> — hand-drawn mascot */
(function(){
if(customElements.get('stick-man'))return;
var css='stick-man{display:block;position:relative;width:200px;aspect-ratio:220/260;container-type:inline-size;--sm-ink:var(--text,#222);--sm-acc:var(--accent,#c50);--sm-gr:var(--muted,#999);--sm-bg:var(--bg,#fff)}'+
'stick-man svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}'+
'stick-man .k{fill:none;stroke:var(--sm-ink);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}stick-man .m{stroke-width:3}stick-man .bg{fill:var(--sm-bg)}stick-man .f{fill:var(--sm-ink)}'+
'stick-man .a{fill:var(--sm-acc);stroke:var(--sm-ink);stroke-width:3.5}stick-man .g{fill:none;stroke:var(--sm-gr);stroke-width:3.5;stroke-linecap:round;opacity:.6}'+
'stick-man .sm-b{position:absolute;z-index:1;font:400 11cqw/1.1 "Patrick Hand",var(--sans,sans-serif),cursive;color:var(--sm-ink);background:var(--sm-bg);border:max(2px,1.5cqw) solid var(--sm-ink);border-radius:18px 24px 16px 22px/22px 16px 24px 18px;padding:.22em .6em .3em;white-space:nowrap}'+
'stick-man .sm-b i{display:inline-block;width:.32em;height:.32em;border-radius:50%;background:var(--sm-ink);margin:0 .12em;vertical-align:middle;animation:sm-dot 1.2s infinite}stick-man .sm-b i:nth-child(2){animation-delay:.2s}stick-man .sm-b i:nth-child(3){animation-delay:.4s}'+
'stick-man .sm-eyes{transform-box:fill-box;transform-origin:center;animation:sm-blink 4.6s infinite}'+
'stick-man .sm-wv{transform-box:fill-box;transform-origin:0 100%;animation:sm-wave 5s ease-in-out infinite}'+
'stick-man .sm-cert{animation:sm-bob 3s ease-in-out infinite}stick-man .sm-ty{animation:sm-ty .45s ease-in-out infinite}'+
'stick-man .sm-led circle{fill:var(--sm-acc);animation:sm-led 2.4s infinite}stick-man .sm-led circle:nth-child(2){animation-delay:.8s}stick-man .sm-led circle:nth-child(3){animation-delay:1.6s}'+
'stick-man .sm-q{font:400 30px "Patrick Hand",cursive;fill:var(--sm-acc);animation:sm-q 3s ease-in-out infinite}stick-man .sm-q:nth-of-type(2){animation-delay:1s}stick-man .sm-q:nth-of-type(3){animation-delay:2s}'+
'@keyframes sm-blink{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}'+
'@keyframes sm-wave{0%,40%,100%{transform:rotate(0)}8%,24%{transform:rotate(-12deg)}16%,32%{transform:rotate(8deg)}}'+
'@keyframes sm-bob{50%{transform:translateY(-3px)}}@keyframes sm-ty{50%{transform:translateY(-2px)}}'+
'@keyframes sm-led{0%,100%{opacity:1}50%{opacity:.2}}@keyframes sm-dot{0%,60%,100%{opacity:.25}30%{opacity:1}}'+
'@keyframes sm-q{0%,100%{opacity:.35;transform:translateY(0)}50%{opacity:1;transform:translateY(-5px)}}'+
'@media (prefers-reduced-motion:reduce){stick-man *{animation:none!important}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var MO={s:function(x,y){return 'M'+(x-8)+' '+(y+11)+' q8 6 16 0'},f:function(x,y){return 'M'+(x-6)+' '+(y+13)+' l13 -1'},w:function(x,y){return 'M'+(x-9)+' '+(y+13)+' q4.5 -5 9 0 q4.5 5 9 0'}};
function head(x,y,m){return '<circle class="k bg" cx="'+x+'" cy="'+y+'" r="30"/><path class="k" d="M'+(x-33)+' '+(y+2)+' C'+(x-37)+' '+(y-48)+' '+(x+37)+' '+(y-48)+' '+(x+33)+' '+(y+2)+'"/><rect class="a" x="'+(x-41)+'" y="'+(y-13)+'" width="13" height="29" rx="5"/><rect class="a" x="'+(x+28)+'" y="'+(y-13)+'" width="13" height="29" rx="5"/><g class="sm-eyes"><circle class="f" cx="'+(x-9)+'" cy="'+(y-3)+'" r="3.6"/><circle class="f" cx="'+(x+9)+'" cy="'+(y-3)+'" r="3.6"/></g><path class="k m" d="'+MO[m](x,y)+'"/>'}
function p(d,c){return '<path class="k'+(c?' '+c:'')+'" d="'+d+'"/>'}
var BODY=p('M100 100 C102 128 97 150 98 172')+p('M98 172 C92 194 89 212 85 232')+p('M98 172 C105 194 110 213 115 232'),ARM_L=p('M100 120 C90 134 82 147 78 164');
var POSES={
wave:{b:'right:0;top:0',svg:BODY+ARM_L+'<g class="sm-wv">'+p('M100 120 C116 116 132 110 146 104 C152 92 158 80 162 66')+'</g>'+head(100,70,'s')+p('M121 47 L134 28')},
lab:{b:'left:40%;top:0',svg:p('M128 190 L208 190')+p('M134 190 L134 232')+p('M202 190 L202 232')+'<rect class="k bg" x="134" y="176" width="66" height="11" rx="3"/><rect class="k bg" x="134" y="162" width="66" height="11" rx="3"/><rect class="k bg" x="134" y="148" width="66" height="11" rx="3"/><g class="sm-led"><circle cx="191" cy="181.5" r="2.6"/><circle cx="191" cy="167.5" r="2.6"/><circle cx="191" cy="153.5" r="2.6"/></g><g transform="translate(-38,0)">'+BODY+ARM_L+p('M100 120 C118 128 138 136 164 144')+head(100,70,'s')+p('M120 47 L136 28')+'</g>'},
cert:{b:'right:0;top:0',svg:BODY+ARM_L+p('M100 120 C114 114 130 108 148 102')+'<g class="sm-cert"><g transform="rotate(6 174 91)"><rect class="k bg" x="146" y="70" width="56" height="42" rx="3"/>'+p('M154 82 L192 82 M154 91 L186 91 M154 100 L174 100','m')+p('M188 110 L184 124 M196 110 L200 124','m')+'<circle class="a" cx="192" cy="106" r="8"/></g></g>'+head(100,70,'s')+p('M119 47 L128 28')},
desk:{b:'left:38%;top:0',dots:1,svg:p('M40 112 C41 132 42 152 42 172')+p('M38 172 L94 174')+p('M44 174 L44 232')+p('M90 175 L90 232')+p('M104 150 L212 150')+p('M204 150 L204 232')+'<path class="k" style="stroke-width:5" d="M128 147 L178 147"/>'+p('M178 147 L188 108')+p('M70 110 C71 130 72 150 72 170')+p('M72 170 C88 169 102 170 116 171 L116 232')+p('M72 172 C86 174 98 176 108 176 L106 232')+'<g class="sm-ty">'+p('M71 128 C80 142 92 147 104 147 L130 143')+p('M71 130 C82 146 96 151 112 151 L138 146')+'</g>'+head(70,80,'f')+p('M88 54 L100 30')},
broken:{b:'right:0;top:0',svg:BODY+p('M100 120 C86 118 78 108 76 94')+p('M100 120 C114 128 124 138 132 150')+p('M132 150 C140 172 124 196 146 208','m')+'<rect class="a" x="140" y="204" width="14" height="9" rx="2"/>'+p('M155 206 L161 205 M155 211 L161 210','m')+p('M218 229 C206 228 196 227 188 225','m')+'<rect class="a" x="175" y="220" width="13" height="9" rx="2"/><text class="sm-q" x="26" y="60">?</text><text class="sm-q" x="172" y="104">?</text><text class="sm-q" x="34" y="160">?</text>'+head(100,70,'w')+p('M121 47 L142 28')}
};
var n=0;
customElements.define('stick-man',class extends HTMLElement{
connectedCallback(){
if(this._d)return;this._d=1;n++;
var c=POSES[this.getAttribute('pose')]||POSES.wave,id='sm-rough-'+n,kids=Array.prototype.slice.call(this.childNodes);
this.setAttribute('aria-hidden','true');
this.innerHTML='<svg viewBox="0 0 220 260"><defs><filter id="'+id+'" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="'+(n*7)+'"/><feDisplacementMap in="SourceGraphic" scale="2.6"/></filter></defs><g filter="url(#'+id+')"><g transform="translate(0,22)">'+c.svg+p('M8 232 C70 229 150 235 214 231','g')+'</g></g></svg>';
var b=document.createElement('div');b.className='sm-b';b.style.cssText=c.b;
if(c.dots)b.innerHTML='<i></i><i></i><i></i>';else kids.forEach(function(k){b.appendChild(k)});
if(c.dots||b.textContent.trim())this.appendChild(b);
}});
})();
