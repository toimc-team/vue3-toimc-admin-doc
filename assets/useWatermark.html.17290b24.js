import{_ as a,r as t,o as e,c as p,a as o,b as c,w as r,F as l,e as k,d as n}from"./app.b2369322.js";const i={},u=k(`<h1 id="usewatermark" tabindex="-1"><a class="header-anchor" href="#usewatermark" aria-hidden="true">#</a> useWatermark</h1><p>\u7528\u4E8E\u63D0\u4F9B\u6C34\u5370\u80FD\u529B\u7684\u652F\u6301\u3002\u7B7E\u540D\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token function">useWatermark</span><span class="token punctuation">(</span>
  appendEl<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token keyword">as</span> Ref<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8BBE\u7F6E\u6C34\u5370</span>
  <span class="token function-variable function">setWatermark</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WatermarkOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  <span class="token comment">// \u6E05\u9664\u6C34\u5370</span>
  <span class="token function-variable function">clear</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">WatermarkOptions</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6C34\u5370\u6587\u5B57</span>
  str<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u6587\u5B57\u5927\u5C0F</span>
  fontSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token comment">// \u56FE\u7247\u6C34\u5370\u7684\u5730\u5740</span>
  imgUrl<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u6C34\u5370\u533A\u57DF\u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A\u6C34\u5370\u6240\u5728\u5143\u7D20\u5BBD\u5EA6</span>
  width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token comment">// \u6C34\u5370\u533A\u57DF\u7684\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A\u6C34\u5370\u6240\u5728\u5143\u7D20\u9AD8\u5EA6</span>
  height<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token comment">// \u6C34\u5370\u4E4B\u95F4\u7684\u8DDD\u79BB</span>
  gap<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;small&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;default&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;large&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),m=n("\u4F7F\u7528\u8BF4\u660E\u53C2\u8003"),d=n("\u6C34\u5370");function f(_,g){const s=t("RouterLink");return e(),p(l,null,[u,o("p",null,[m,c(s,{to:"/components/func/waterprint.html"},{default:r(()=>[d]),_:1})])],64)}var b=a(i,[["render",f],["__file","useWatermark.html.vue"]]);export{b as default};
