import{_ as s,e as a}from"./app.bb955598.js";var n="/vue3-toimc-admin-doc/assets/v-longPress.6b46f888.png";const t={},o=a('<h1 id="v-longpress" tabindex="-1"><a class="header-anchor" href="#v-longpress" aria-hidden="true">#</a> v-longPress</h1><p>\u6269\u5C55\u81EA\u5B9A\u4E49\u6307\u4EE4\u957F\u6309\u6307\u4EE4\u529F\u80FD</p><h2 id="\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a> \u6548\u679C</h2><p><img src="'+n+`" alt="v-longPress"></p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>t<span class="token operator">-</span>card header<span class="token operator">=</span><span class="token string">&quot;\u957F\u6309\u6307\u4EE4\u793A\u4F8B&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;text-lg font-bold&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;flex items-center justify-center mt-10 mb-10&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>el<span class="token operator">-</span>button v<span class="token operator">-</span>longPress<span class="token operator">=</span><span class="token string">&quot;longpress&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span><span class="token operator">&gt;</span>\u957F\u6309<span class="token number">2</span>\u79D2\u89E6\u53D1\u4E8B\u4EF6<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>t<span class="token operator">-</span>card<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">longpress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&#39;\u957F\u6309\u4E8B\u4EF6\u89E6\u53D1\u6210\u529F&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre></div>`,6);function p(e,r){return o}var l=s(t,[["render",p],["__file","longPress.html.vue"]]);export{l as default};